## Headers and Caching

Caching is a big subject and it can get pretty complicated. Luckily, the browsers have done all the really hard work for us and we just need to #useThePlatform.

There are three types of caches you'll likely deal with in Remix applications:

1. Application-level caches that you implement in your own code.
2. Browser caches you can control through the `Cache-Control` header.
3. CDN caches you also can control through the `Cache-Control` headers.

For the `Cache-Control` header cache, there are two types of responses that can be cached:

1. The document response (this is the HTML for the page that's rendered by the server).
2. The data response (this is the JSON sent by your server).

In Remix, you can control the cache control for both of these kinds of responses. Here's an example for the data response:

```tsx
import { json } from "remix";

export let loader: LoaderFunction = async () => {
  return json(
    { data },
    {
      headers: {
        // max-age controls the browser cache
        // s-maxage controls a CDN cache
        "Cache-Control": "public, max-age=30, s-maxage=86400",
      },
    }
  );
};
```

For the document response, you can use the [`headers` export](../api/conventions#headers-export).

We recommend spending a fair bit of time going over [the `Cache-Control` header documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) at some point to optimize things for your users. If you do have a CDN between your origin server and your users, then understanding your CND's caching strategies will help you improve your user experience as well.

Let's say we have a CDN in front of our app and we really want our homepage to load super fast. So we'll want our CDN to cache that page. If we ever need to make a change to that page, we can purge the cache for that page.

💿 Add cache-control for the document response in `app/routes/index.tsx` and `app/routes/login.tsx`. Add a cache-control for both the data and document response in `app/routes/jokes/$jokeId.tsx`.

<details>

<summary>app/routes/index.tsx</summary>

```tsx filename=app/routes/index.tsx lines=[5,21-27]
import { Link } from "remix";
import type { MetaFunction, LinksFunction, HeadersFunction } from "remix";
import stylesUrl from "../styles/index.css";

export let meta: MetaFunction = () => {
  return {
    title: "Remix: So great, it's funny!",
    description: "Remix jokes app. Learn Remix and laugh at the same time!",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let headers: HeadersFunction = () => {
  return {
    "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${
      60 * 60 * 24 * 30
    }`,
  };
};

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read Jokes</Link>
            </li>
            <li>
              <Link reloadDocument to="/jokes.rss">
                RSS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
```

</details>

<details>

<summary>app/routes/login.tsx</summary>

```tsx filename=app/routes/login.tsx lines=[3,28-34]
import type {
  ActionFunction,
  HeadersFunction,
  LinksFunction,
  MetaFunction,
} from "remix";
import { useActionData, Form } from "remix";
import { login, createUserSession, register } from "~/utils/session.server";
import { db } from "~/utils/db.server";
import stylesUrl from "../styles/login.css";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Jokes | Login",
    description: "Login to submit your own jokes to Remix Jokes!",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let headers: HeadersFunction = () => {
  return {
    "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${
      60 * 60 * 24 * 30
    }`,
  };
};

function validateUsername(username: unknown) {
  if (typeof username !== "string" || username.length < 3) {
    return `Usernames must be at least 3 characters long`;
  }
}

function validatePassword(password: unknown) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    loginType: string;
    username: string;
    password: string;
  };
};

export let action: ActionFunction = async ({
  request,
}): Promise<Response | ActionData> => {
  let form = await request.formData();
  let loginType = form.get("loginType");
  let username = form.get("username");
  let password = form.get("password");
  if (
    typeof loginType !== "string" ||
    typeof username !== "string" ||
    typeof password !== "string"
  ) {
    return { formError: `Form not submitted correctly.` };
  }

  let fields = { loginType, username, password };
  let fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password),
  };
  if (Object.values(fieldErrors).some(Boolean)) return { fieldErrors, fields };

  switch (loginType) {
    case "login": {
      let user = await login({ username, password });
      if (!user) {
        return {
          fields,
          formError: `Username/Password combination is incorrect`,
        };
      }
      return createUserSession(user.id, "/jokes");
    }
    case "register": {
      let userExists = await db.user.findFirst({
        where: { username },
      });
      if (userExists) {
        return {
          fields,
          formError: `User with username ${username} already exists`,
        };
      }
      let user = await register({ username, password });
      if (!user) {
        return {
          fields,
          formError: `Something went wrong trying to create a new user.`,
        };
      }
      return createUserSession(user.id, "/jokes");
    }
    default: {
      return { fields, formError: `Login type invalid` };
    }
  }
};

export default function Login() {
  let actionData = useActionData<ActionData | undefined>();
  return (
    <div className="container">
      <div className="content" data-light="">
        <h1>Login</h1>
        <Form
          method="post"
          aria-describedby={
            actionData?.formError ? "form-error-message" : undefined
          }
        >
          <fieldset>
            <legend className="sr-only">Login or Register?</legend>
            <label>
              <input
                type="radio"
                name="loginType"
                value="login"
                defaultChecked={
                  !actionData?.fields?.loginType ||
                  actionData?.fields?.loginType === "login"
                }
              />{" "}
              Login
            </label>
            <label>
              <input
                type="radio"
                name="loginType"
                value="register"
                defaultChecked={actionData?.fields?.loginType === "register"}
              />{" "}
              Register
            </label>
          </fieldset>
          <div>
            <label htmlFor="username-input">Username</label>
            <input
              type="text"
              id="username-input"
              name="username"
              defaultValue={actionData?.fields?.username}
              aria-invalid={
                Boolean(actionData?.fieldErrors?.username) || undefined
              }
              aria-describedby={
                actionData?.fieldErrors?.username ? "username-error" : undefined
              }
            />
            {actionData?.fieldErrors?.username ? (
              <p
                className="form-validation-error"
                role="alert"
                id="username-error"
              >
                {actionData.fieldErrors.username}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="password-input">Password</label>
            <input
              id="password-input"
              name="password"
              defaultValue={actionData?.fields?.password}
              type="password"
              aria-invalid={
                Boolean(actionData?.fieldErrors?.password) || undefined
              }
              aria-describedby={
                actionData?.fieldErrors?.password ? "password-error" : undefined
              }
            />
            {actionData?.fieldErrors?.password ? (
              <p
                className="form-validation-error"
                role="alert"
                id="password-error"
              >
                {actionData.fieldErrors.password}
              </p>
            ) : null}
          </div>
          <div id="form-error-message">
            {actionData?.formError ? (
              <p className="form-validation-error" role="alert">
                {actionData.formError}
              </p>
            ) : null}
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </Form>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jokes">Jokes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
```

</details>

<details>

<summary>app/routes/jokes/$jokeId.tsx</summary>

```tsx filename=app/routes/jokes/$jokeId.tsx lines=[5,8,59-66,69-77]
import type {
  LoaderFunction,
  ActionFunction,
  MetaFunction,
  HeadersFunction,
} from "remix";
import { json, useLoaderData, useCatch, Link, Form, redirect } from "remix";
import { useParams } from "react-router-dom";
import type { Joke } from "@prisma/client";
import { db } from "~/utils/db.server";
import { getUserId, requireUserId } from "~/utils/session.server";

export let meta: MetaFunction = ({
  data,
}: {
  data: LoaderData | undefined;
}) => {
  if (!data) {
    return {
      title: "No joke",
      description: "No joke found",
    };
  }
  return {
    title: `"${data.joke.name}" joke`,
    description: `Enjoy the "${data.joke.name}" joke and much more`,
  };
};

type LoaderData = { joke: Joke; isOwner: boolean };

export let loader: LoaderFunction = async ({ request, params }) => {
  let userId = await getUserId(request);
  let joke = await db.joke.findUnique({
    where: { id: params.jokeId },
  });
  if (!joke) {
    throw new Response("What a joke! Not found.", {
      status: 404,
    });
  }
  let data: LoaderData = {
    joke,
    isOwner: userId === joke.jokesterId,
  };
  return json(data, {
    headers: {
      "Cache-Control": `public, max-age=${60 * 5}, s-maxage=${60 * 60 * 24}`,
      Vary: "Cookie",
    },
  });
};

export let headers: HeadersFunction = ({ loaderHeaders }) => {
  return {
    "Cache-Control": loaderHeaders.get("Cache-Control") ?? "",
    Vary: loaderHeaders.get("Vary") ?? "",
  };
};

export let action: ActionFunction = async ({ request, params }) => {
  if (request.method === "DELETE") {
    let userId = await requireUserId(request);
    let joke = await db.joke.findUnique({
      where: { id: params.jokeId },
    });
    if (!joke) {
      throw new Response("Can't delete what does not exist", { status: 404 });
    }
    if (joke.jokesterId !== userId) {
      throw new Response("Pssh, nice try. That's not your joke", {
        status: 401,
      });
    }
    await db.joke.delete({ where: { id: params.jokeId } });
    return redirect("/jokes");
  }
};

export default function JokeRoute() {
  let data = useLoaderData<LoaderData>();

  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{data.joke.content}</p>
      <Link to=".">{data.joke.name} Permalink</Link>
      {data.isOwner ? (
        <Form method="post">
          <input type="hidden" name="_method" value="delete" />
          <button type="submit" className="button">
            Delete
          </button>
        </Form>
      ) : null}
    </div>
  );
}

export function CatchBoundary() {
  let caught = useCatch();
  let params = useParams();
  switch (caught.status) {
    case 404: {
      return (
        <div className="error-container">
          Huh? What the heck is {params.jokeId}?
        </div>
      );
    }
    case 401: {
      return (
        <div className="error-container">
          Sorry, but {params.jokeId} is not your joke.
        </div>
      );
    }
    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  let { jokeId } = useParams();
  return (
    <div>{`There was an error loading joke by the id ${jokeId}. Sorry.`}</div>
  );
}
```

</details>

You'll notice that for the `app/routes/jokes/$jokeId.tsx` route in addition to `Cache-Control` we've also set `Vary` header to `Cookie`. This is because we're returning something that's specific to the user who is logged in. So we want the cache to associated to that particular Cookie value and not shared with different users, so the browser and CDN will not deliver the cached value if the cookie is different from the cached response's cookie.

Sweet, with those set up, you can now pop open your Network tab and observe the cache headers. To test the data headers, click through the jokes and then click on a joke you have been to already. To test the document headers, go to the page, then change the URL to a separate website (like https://example.com), then hit the back button. To benefit from the headers, make sure to leave the "Disable cache" checkbox unchecked.

Here's what the header should look like for the homepage:

![Cache control header set on a response](/jokes-tutorial/img/homepage-cache-header.png)

Here's what the Vary header should look like for the jokes page:

![Vary header set on a response](/jokes-tutorial/img/joke-vary-header.png)

Here's what it looks like when you go off domain and then hit the back button:

![Document request came from the disk cache](/jokes-tutorial/img/off-domain-return-document-cached.png)

Here's what it looks like when you navigate back to a joke page you've been to recently:

![A few non-cached data requests followed by cached versions of those requests](/jokes-tutorial/img/data-cached.png)

Let me describe why this is so useful. Remix uses the browser cache rather than implementing its own cache in memory. This means that if the user navigates around your site a bit and then closes the page or opens the site in another tab, they will still have all of that information cached. If we managed our own in-memory cache, it would be totally lost when the user navigates away from the site. And even if we tried to persist it in some browser storage API, the browser would have to wait for our JavaScript to retrieve it before the user could make use of it.

Another point for user experience!

But we can make this even better. [The `<Link />` component](../api/remix#link) from Remix has the ability to prefetch the assets and data needed for the page it's linked to via the `prefetch` prop.

<docs-info>Tip: when the devtools are open, you can right-click the refresh button to "Empty Cache and Hard Reload" to test what the experience is like for a user who has not yet cached anything.</docs-info>

![Empty cache and hard reload menu option](/jokes-tutorial/img/hard-reload.png)

💿 Go ahead and add `prefetch="intent"` to the Link for the list of jokes in `app/routes/jokes.tsx` and check what happens as you click around those links.

<details>

<summary>app/routes/jokes.tsx</summary>

```tsx filename=app/routes/jokes.tsx lines=[78]
import type { LoaderFunction, LinksFunction } from "remix";
import { Form } from "remix";
import { Outlet, useLoaderData, Link } from "remix";
import { db } from "~/utils/db.server";
import type { User } from "@prisma/client";
import { getUser } from "~/utils/session.server";
import stylesUrl from "../styles/jokes.css";

type LoaderData = {
  user: User | null;
  jokeListItems: Array<{ id: string; name: string }>;
};

export let loader: LoaderFunction = async ({ request }) => {
  let jokeListItems = await db.joke.findMany({
    take: 5,
    select: { id: true, name: true },
    orderBy: { createdAt: "desc" },
  });
  let user = await getUser(request);

  let data: LoaderData = {
    jokeListItems,
    user,
  };

  return data;
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function JokesScreen() {
  let data = useLoaderData<LoaderData>();

  return (
    <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Remix Jokes" aria-label="Remix Jokes">
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
          {data.user ? (
            <div className="user-info">
              <span>{`Hi ${data.user.username}`}</span>
              <Form action="/logout" method="post">
                <button type="submit" className="button">
                  Logout
                </button>
              </Form>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            {data.jokeListItems.length ? (
              <>
                <Link to=".">Get a random joke</Link>
                <p>Here are a few more jokes to check out:</p>
                <ul>
                  {data.jokeListItems.map(({ id, name }) => (
                    <li key={id}>
                      <Link to={id} prefetch="intent">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to="new" className="button">
                  Add your own
                </Link>
              </>
            ) : null}
          </div>
          <div className="jokes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
      <footer className="jokes-footer">
        <div className="container">
          <Link reloadDocument to="/jokes.rss">
            RSS
          </Link>
        </div>
      </footer>
    </div>
  );
}
```

</details>

![JSON prefetch request followed by a fetch request that was served by the prefetch cache](/jokes-tutorial/img/prefetch-cache.png)

Now _that's_ what I call as fast as instant! And it's _user-specific_ data that we're requesting! So we _have_ to hit the origin server. Nice and fast! ⚡ Nice and easy! 💪
