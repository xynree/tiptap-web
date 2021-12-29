import type { NextPage } from 'next'
import React, { useCallback } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'

const AboutMe: NextPage = () => {

  const aboutMeContent = `
  <h3>Hello, World! :)</h3>
  <h2>My name is Xinrui Chen, pronounced <i>/sin - ree/</i>.</h2><br>
  <p>
    I am an artist & programmer based in <strike>Los Angeles</strike> <b>Seattle, WA.</b> 
  </p>
  <hr>

  <p>
    <b>Contact:</b>
    <ul>
    <li><a href='http://instagram.com/xynree'>insta</a></li>
    <li>github</li>
    <li>linkedin</li>
    <li>email</li>
    </ul>
  </p>

  `
  const aboutMeEditor = useEditor({
    editorProps: {
      attributes: {
        class: 'flex-0',
      },
    },
      content: aboutMeContent,
  extensions: [
    StarterKit.configure({
      heading: {
        levels: [1,2,3]
      }
    }),
    Image,
    Link,
    TextStyle, 
    Color
  ],
  })

  const addImage = useCallback(() => {
    const url = window.prompt('Image URL Here')

    if (url) {
      aboutMeEditor.chain().focus().setImage({ src: url }).run()
    }
  }, [aboutMeEditor])

  if (!aboutMeEditor) {
    return null
  }



  return (


    <div className='flex-col p-20 rounded-lg  '>
      <div className='editpanel bg-stone-50 drop-shadow-md flex border rounded-lg border-stone-500 m-4'>
        <input
          type="color"
          className= 'w-8 m-4'
          onInput={event => aboutMeEditor.chain().focus().setColor(event.target.value).run()}
        />
        <button onClick={() => aboutMeEditor?.chain().focus().toggleBold().run()} className=' p-4 '>< img width='12' src='/bold.svg'/></button>
        <button onClick={() => aboutMeEditor?.chain().focus().toggleItalic().run()} className=' p-4 '>< img width='18' src='/italic.svg'/></button>
        <button onClick={() => aboutMeEditor?.chain().focus().toggleBulletList().run()} className=' p-4 '>< img width='18' src='/ul.svg'/></button>
        <button onClick={() => aboutMeEditor?.chain().focus().toggleCodeBlock().run()} className=' p-4 '>< img width='26' src='/code.svg'/></button>
        <button onClick={() => aboutMeEditor?.chain().focus().toggleBlockquote().run()} className=' p-4 '>< img width='17' src='/quote.svg'/></button>
        <button onClick={() => aboutMeEditor?.chain().focus().setHorizontalRule().run()} className=' p-4 '>< img width='26' src='/hrule.svg'/></button>
        <button onClick={() => aboutMeEditor?.chain().focus().toggleOrderedList().run()} className=' p-4 '>< img width='18' src='/ol.svg'/></button>
        <button onClick={() => aboutMeEditor?.chain().focus().toggleHeading({ level: 1 }).run()} className=' p-4 '>< img width='18' src='/h1.svg'/></button>
        <button onClick={() => aboutMeEditor?.chain().focus().toggleHeading({ level: 2 }).run()} className=' p-4 '>< img width='28' src='/h2.svg'/></button>
        <button onClick={addImage} className=' p-4 '>< img width='20' src='/image.svg'/></button>
      </div>

      <EditorContent editor={aboutMeEditor} spellcheck="false" className='nofocus ml-4 mr-4 border border-stone-500 rounded-lg p-10 bg-stone-50 drop-shadow-lg'/>
      </div>

  );
}

export default AboutMe;