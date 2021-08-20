/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { createButtonBlockType } from '../button';
import ToggleLegacyMetaboxesWrapper from '../toggle-legacy-metaboxes-wrapper';

/**
 * Take course button block.
 */
export default createButtonBlockType( {
	EditWrapper: ToggleLegacyMetaboxesWrapper,
	settings: {
		name: 'sensei-lms/button-take-course',
		title: __( 'Course Sign Up', 'sensei-lms' ),
		description: __(
			'Enable a registered user to start the course. This block is only displayed if the user is not already enrolled.',
			'sensei-lms'
		),
		keywords: [
			__( 'Start', 'sensei-lms' ),
			__( 'Sign up', 'sensei-lms' ),
			__( 'Enrol', 'sensei-lms' ),
			__( 'Enroll', 'sensei-lms' ),
			__( 'Course', 'sensei-lms' ),
			__( 'Take course', 'sensei-lms' ),
		],
		attributes: {
			text: {
				default: __( 'Take Course', 'sensei-lms' ),
			},
		},
	},
} );
