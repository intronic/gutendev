import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import '../gutenberg/post-content';

const myrender = (Component, row) => {
  wp.element.render(
    <AppContainer>
      {Component}
    </AppContainer>,
    row.querySelector('.editor'));
}

const setupBlock = (slug, attributes) => {
  let name = slug.split('/')[1]
  let row = document.querySelector('tr.' + name);
  let settings = wp.blocks.getBlockSettings(slug);
  let rootComp = settings.edit({ attributes: attributes, onChange: (val) => { console.log('>Editor onChange', val) } });
  myrender(rootComp, row)

  // let saved = settings.save({attributes: attributes});
  // ReactDOM.render(saved, row.querySelector('.saved'));
};

window.mjp = () => {
  // wp.editor.createEditorInstance( 'editor', { value: 'I am here' });
  wp.editor.createEditorInstance( 'editor', window._wpGutenbergPost );
  // setupBlock("core/text", { value: '<p>This is core/text</p>' })
  // // setupBlock("core/tinymce", { value: '<p>This is a TINYMCE block OK</p>' })
  // // setupBlock('core/heading', { nodeName: 'h2', value: 'This is a heading' });
  // setupBlock("core/list", {
  //   nodeName: 'ol',
  //   items: [
  //     { value: 'hi' },
  //     { value: 'there' }
  //   ]
  // })
};
