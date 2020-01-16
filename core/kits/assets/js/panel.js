import PanelContent from './panel-content';
import { buttonBack, buttonClose } from './panel-header-buttons';

module.exports = Marionette.LayoutView.extend( {
	id: 'elementor-kit-panel',

	template: '#tmpl-elementor-kit-panel',

	regions: {
		content: '#elementor-kit__panel-content__wrapper',
	},

	onBeforeShow() {
		const	container = elementor.documents.getCurrent().container,
			options = {
				container,
				model: container.model,
				controls: container.settings.controls,
				name: 'kit',
		};

		this.showChildView( 'content', new PanelContent( options ) );
	},
} );
