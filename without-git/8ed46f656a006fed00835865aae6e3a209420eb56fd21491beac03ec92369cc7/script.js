const ConditionalRenderingApp = {
  setup() {
    const comment = Vue.ref('');
    const commentDraft = Vue.ref('');
    const add = () => {
      comment.value = commentDraft.value;
    }
    
    return {
      commentDraft,
      comment,
      add
    }
  }
}

Vue.createApp(ConditionalRenderingApp).mount('#conditional-rendering')