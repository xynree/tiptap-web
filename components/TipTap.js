import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello, my name is Xinrui Chen. That\'s pronounced <em>/sin - ree/. </p>',
  })

  return (
    <EditorContent editor={editor}/>
  )
}

export default Tiptap;