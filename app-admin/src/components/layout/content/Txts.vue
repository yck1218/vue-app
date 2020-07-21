<template>
  <div class="txts">
   <quillEditor></quillEditor>
  </div>
</template>

<script>
 import { quillEditor } from 'vue-quill-editor'

export default {
components: {
    quillEditor
  }
}
</script>

<style lang='scss'>
.txts{
  .ql-container {
    height: 300px;
  }
}

</style>