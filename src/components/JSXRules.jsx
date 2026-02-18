import React from 'react'

const JSXRules = () => {
  return (
    <>
        <h3>JSXRules</h3>
        <ol>
            <li>
                <strong>Return a single root element:</strong> All elements must be wrapped 
                in a single parent tag (like a &lt;div&gt; or a Fragment &lt;&gt;&lt;/&gt;).
            </li>
            <li>
                <strong>Close all tags:</strong> Every tag must be explicitly closed, 
                including self-closing tags like &lt;img /&gt; and &lt;br /&gt;.
            </li>
            <li>
                <strong>Use camelCase for most attributes:</strong> Standard HTML attributes 
                and event handlers (e.g., onClick, tabIndex) must follow camelCase.
            </li>
            <li>
                <strong>Use className and htmlFor:</strong> Because 'class' and 'for' are 
                reserved keywords in JavaScript, JSX uses className and htmlFor instead.
            </li>
            <li>
                <strong>Wrap JavaScript in curly braces:</strong> To embed logic, variables, 
                or expressions within the markup, you must use { }.
            </li>
            <li>
                <strong>Capitalize component names:</strong> Custom React components must 
                start with an uppercase letter to distinguish them from standard HTML tags.
            </li>
            <li>
                <strong>Inline styles as objects:</strong> The style attribute must be 
                passed as a JavaScript object with camelCased CSS properties.
            </li>
        </ol>
    </>
  )
}

export default JSXRules