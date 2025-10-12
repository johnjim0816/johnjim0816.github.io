document.addEventListener("DOMContentLoaded", () => {
  // 选中所有代码块
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    const pre = codeBlock.parentNode;
    const button = document.createElement("button");
    button.className = "copy-code-button";
    button.type = "button";
    button.innerText = "Copy";

    // 复制逻辑
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => {
          button.innerText = "Copy";
        }, 1500);
      });
    });

    // 包裹代码块
    const wrapper = document.createElement("div");
    wrapper.className = "code-wrapper";
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    wrapper.appendChild(button);
  });
});
