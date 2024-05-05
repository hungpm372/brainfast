/**
 * @author Phan Minh Hung
 * @email hungpm372@gmail.com
 * @create date 2024-05-05 16:00:28
 * @modify date 2024-05-05 16:00:28
 * @desc I am a student of information technology
 * @github https://github.com/hungpm372
 */
'use client'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface MarkdownResponseProps {
  content: string
}

const MarkdownResponse: React.FC<MarkdownResponseProps> = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={atomDark}
              wrapLongLines
              language={match[1]}
              PreTag='div'
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        }
      }}
      className='text-sm overflow-hidden leading-7'
    >
      {content || ''}
    </ReactMarkdown>
  )
}

export default MarkdownResponse
