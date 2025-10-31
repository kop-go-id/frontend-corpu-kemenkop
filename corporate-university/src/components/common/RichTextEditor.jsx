'use client'

import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { 
  ssr: false,
  loading: () => <div className="h-[200px] border border-gray-200 rounded-lg animate-pulse bg-gray-50" />
})

const RichTextEditor = ({ 
  value, 
  onChange, 
  placeholder = 'Tulis sesuatu di sini...', 
  className = '',
  minHeight = '200px'
}) => {
  const modules = useMemo(() => ({
    toolbar: [
      ['undo', 'redo'],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['indent', 'outdent'],
      ['link', 'image'],
      ['clean']
    ],
  }), [])

  const formats = [
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'indent',
    'link', 'image'
  ]

  return (
    <div className={`rich-text-editor ${className}`}>
      <style jsx global>{`
        .rich-text-editor .ql-toolbar {
          border: 1px solid #d9d9d9;
          border-bottom: none;
          border-radius: 8px 8px 0 0;
          background: #fafafa;
          padding: 8px;
        }

        .rich-text-editor .ql-container {
          border: 1px solid #d9d9d9;
          border-radius: 0 0 8px 8px;
          font-family: inherit;
          font-size: 14px;
          min-height: ${minHeight};
        }

        .rich-text-editor .ql-editor {
          min-height: ${minHeight};
          padding: 12px 15px;
        }

        .rich-text-editor .ql-editor.ql-blank::before {
          color: #bfbfbf;
          font-style: normal;
        }

        .rich-text-editor .ql-toolbar button {
          width: 28px;
          height: 28px;
          padding: 4px;
        }

        .rich-text-editor .ql-toolbar button:hover {
          background: rgba(6, 83, 102, 0.08);
          border-radius: 4px;
        }

        .rich-text-editor .ql-toolbar button.ql-active {
          background: rgba(6, 83, 102, 0.15);
          border-radius: 4px;
          color: #065366;
        }

        .rich-text-editor .ql-stroke {
          stroke: #595959;
        }

        .rich-text-editor .ql-fill {
          fill: #595959;
        }

        .rich-text-editor .ql-toolbar button:hover .ql-stroke {
          stroke: #065366;
        }

        .rich-text-editor .ql-toolbar button:hover .ql-fill {
          fill: #065366;
        }

        .rich-text-editor .ql-toolbar button.ql-active .ql-stroke {
          stroke: #065366;
        }

        .rich-text-editor .ql-toolbar button.ql-active .ql-fill {
          fill: #065366;
        }

        .rich-text-editor .ql-editor strong {
          font-weight: 600;
        }

        .rich-text-editor .ql-editor em {
          font-style: italic;
        }

        .rich-text-editor .ql-editor u {
          text-decoration: underline;
        }

        .rich-text-editor .ql-editor a {
          color: #065366;
          text-decoration: underline;
        }

        @media (max-width: 640px) {
          .rich-text-editor .ql-toolbar {
            padding: 6px;
          }

          .rich-text-editor .ql-toolbar button {
            width: 24px;
            height: 24px;
          }

          .rich-text-editor .ql-container {
            min-height: 150px;
          }

          .rich-text-editor .ql-editor {
            min-height: 150px;
            padding: 10px 12px;
          }
        }
      `}</style>
      <ReactQuill 
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </div>
  )
}

export default RichTextEditor

