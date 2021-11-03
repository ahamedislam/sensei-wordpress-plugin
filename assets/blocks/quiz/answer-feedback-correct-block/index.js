/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './answer-feedback-correct';
import metadata from './block.json';
import icon from '../../../icons/answer-feedback-correct';

/**
 * Correct Answer Feedback block definition.
 */
export default {
	...metadata,
	title: __( 'Correct Answer Feedback Block', 'sensei-lms' ),
	icon,
	usesContext: [ 'sensei-lms/quizId' ],
	description: __( 'Display correct answer feedback.', 'sensei-lms' ),
	/*example: {
		attributes: {
			categoryName: __( 'Example Category', 'sensei-lms' ),
		},
	},*/
	edit,
	save: () => <InnerBlocks.Content />,
};
