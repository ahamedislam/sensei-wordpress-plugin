/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { BlockStyles, createButtonBlockType } from '../../button';

/**
 * Reset lesson button block.
 */
export default createButtonBlockType( {
	tagName: 'button',
	settings: {
		name: 'sensei-lms/button-reset-lesson',
		title: __( 'Reset Lesson', 'sensei-lms' ),
		parent: [ 'sensei-lms/lesson-actions' ],
		description: __(
			'Enable an enrolled user to reset their lesson progress. The button is displayed when the learner has completed the lesson and resetting progress is allowed.',
			'sensei-lms'
		),
		keywords: [
			__( 'Reset', 'sensei-lms' ),
			__( 'Restart', 'sensei-lms' ),
			__( 'Revert', 'sensei-lms' ),
			__( 'Progress', 'sensei-lms' ),
			__( 'Lesson', 'sensei-lms' ),
			__( 'Button', 'sensei-lms' ),
		],
		attributes: {
			text: {
				default: __( 'Reset Lesson', 'sensei-lms' ),
			},
			buttonClassName: {
				default: [ 'sensei-stop-double-submission' ],
			},
		},
		styles: [
			BlockStyles.Fill,
			{ ...BlockStyles.Outline, isDefault: true },
			BlockStyles.Link,
		],
	},
} );
