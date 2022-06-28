const renderer = new SteemContentRenderer.DefaultRenderer({
  baseUrl: "https://steemit.com/",
  breaks: true,
  skipSanitization: false,
  allowInsecureScriptTags: false,
  addNofollowToLinks: true,
  doNotShowImages: false,
  ipfsPrefix: "",
  assetsWidth: 640,
  assetsHeight: 480,
  imageProxyFn: (url) => url,
  usertagUrlFn: (account) => "https://steemit.com/@" + account,
  hashtagUrlFn: (hashtag) => "https://steemit.com/trending/" + hashtag,
  isLinkSafeFn: (url) => true,
});

$(document).ready(() => {
  const renderMarkdownBtnElem = $("#render-button");
  const inputElem = $("#input");
  const outputElem = $("#output");
  const outputMarkupElem = $("#output-markup");
  const loadPostButton = $("#load-post-button");
  const postLinkInput = $("#post-link-input");

  function setOutput(output) {
    outputElem.html(output);
    outputMarkupElem.text(output);
  }

  function render() {
    const input = inputElem.val();
    const output = renderer.render(input);

    console.log("Rendered", output);
    setOutput(output);
  }

  function getAuthorAndPermlinkFromLink(link) {
    let author = "";
    let permlink = "";
    if (link.length > 0) {
      /* tslint:disable max-line-length */
      const regex =
        /^\/?(?:https?:\/\/(?:steemit\.com|busy\.org))?(?:\/?[^\/\n]*\/)?@?([^\/\n]+)\/([^\/\n]+)$/giu;
      /* tslint:disable max-line-length */
      const match = regex.exec(link);
      if (match && match.length > 1) {
        author = match[1];
        permlink = match[2];
      }
    }
    return { author, permlink };
  }

  renderMarkdownBtnElem.on("click", () => render());

  loadPostButton.on("click", () => {
    const postLink = postLinkInput.val();
    const { author, permlink } = getAuthorAndPermlinkFromLink(postLink);
    if (!author || author.length === 0 || !permlink || permlink.length === 0) {
      inputElem.text("Author or permlink is missing...");
      return;
    }

    inputElem.text("Loading post @" + author + "/" + permlink + " ...");
    (async () => {
      try {
        const post = await steem.api.getContentAsync(author, permlink);
        const postMarkdown = post.body;
        console.log("Content loaded", postMarkdown);
        inputElem.text(postMarkdown);
        render();
      } catch (error) {
        inputElem.text(
          "Error while loading post @" + author + "/" + permlink + ": " + error
        );
      }
    })();
  });
});
