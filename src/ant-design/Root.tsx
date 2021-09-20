import 'antd/dist/antd.css';

import App from './App';

type RootProps = { helmet: any, docs: any, projectName: any }

const Root: React.FC<RootProps> = ({ helmet, docs, projectName }) => {
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
        <html {...htmlAttrs}>
            <head>
                {helmet.title.toComponent()}
                {helmet.meta.toComponent()}
                {helmet.link.toComponent()}
            </head>
            <body {...bodyAttrs}>
                <App docs={docs} name={projectName} />
            </body>
        </html>
    );
}

export default Root;