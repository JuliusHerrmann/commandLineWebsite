import ReactMarkdown from "react-markdown";
import Code from "./Code";
import Image from "./Image";
import Link from "./Link";
import Paragraph from "./Paragraph";

function CommandLineEntry(props) {
  const speed = Math.round(1 + (Number)(props.text.length / 1000));
  return(
    <ReactMarkdown children={props.text}
    components= {{
    p: ({node, ...props}) =>  {
      return <Paragraph node={node} children={props.children} speed={speed}/>;
    },
    img: ({node, ...props}) => {
      return <Image node={node} image={props} speed={speed}/>
    },
    a: ({node, ...props}) => {
      return <Link node={node} link={props} speed={speed}/>
    },
      code: ({node, ...props}) => {
      return <Code node={node} code={props} speed={speed}/>
    },
    }}/>
  );
}

export default CommandLineEntry;
