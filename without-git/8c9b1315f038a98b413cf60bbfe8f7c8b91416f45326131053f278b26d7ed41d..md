You can create a `.github/images` directory in your repo and add all your assets there. Assets added here will be available on

```
https://raw.githubusercontent.com/{github_user_name}/{repo_name}/{branch}/.github/images/{asset_name}.{asset_extension}

```

Once you push `.github/images` directory to remote your assets should be available through the mentioned link.

And <https://user-images.githubusercontent.com/> is used by GitHub to store images added in issues, PR's, etc.,

Hope it helps!

**UPDATE:**

You can also create an assets directory in the root of your repo and use a relative path to the image.

```
/assets/{asset_name}.{asset_extension}

![Alt Text](/assets/{asset_name}.{asset_extension})

```

With this, images can be previewed without actually pushing to remote.

*** Hosting on user-images.githubusercontent.com subdomain**

If you do not intend to store any images in your repository, you can always use this <https://user-images.githubusercontent.com/>

To host your images in user-images subdomain you can do the following

1.  Click New Issue this will open up the issue creator.
2.  Drag and Drop or Upload your image in the body content
3.  Wait for upload completion and copy the URL for the image.
4.  Cancel the issue creation and continue.

But you will not have access to these images once uploaded, you cannot delete them. You can always contact GitHub Support if required to delete.