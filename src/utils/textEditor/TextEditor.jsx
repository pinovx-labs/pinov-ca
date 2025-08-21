import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { constants } from "../../constants/constants";
import { useLocation } from "react-router-dom";
import  DOMPurify from 'dompurify';



const TextEditor = ({ blogBody, setBlogBody }) => {
  const TINYMCE_KEY = constants.TINYMCE_KEY;
  const location = useLocation();
  const pathname = location.pathname;

  let initialValue;

  if (pathname === `/admin/write`) {
    initialValue = <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogBody) }}></p>;
  } else {
    initialValue = blogBody;
  }
  const tinymceConfig = {
    selector: "textarea",
    placeholder: "Blog text",
    plugins: [
      "mentions advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media paste code help wordcount",
    ],
    toolbar:
      "undo redo | formatselect | " +
      "bold italic backcolor | alignleft aligncenter " +
      "alignright alignjustify | bullist numlist outdent indent | " +
      "removeformat | emoticons| help",
    content_style:
      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
    emoticons_append: {
      custom_mind_explode: {
        keywords: ["brain", "mind", "explode", "blown"],
        char: "🤯",
      },
    },
  };

  const handleEditorChange = (blogBody, editor) => {

    setBlogBody(blogBody);
  };
  return (
    <Editor
      apiKey={TINYMCE_KEY}
      initialValue={initialValue}
      init={tinymceConfig}
      onEditorChange={handleEditorChange}
      textareaName="text"
      rows="13"
      col="15"
      className={`blog-tools-form__input`}
    />
  );
};

export default TextEditor;
