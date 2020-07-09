import { __ } from '@wordpress/i18n';
import { Section } from '@woocommerce/components';
import { Button, Spinner, Notice } from '@wordpress/components';
import { ImportLog } from './import-log';
import ImportSuccess from './import-success';

/**
 * Done page of the importer.
 */
export const DonePage = ( {
	restartImporter,
	successResults = [],
	logs = {},
	isFetching = false,
	fetchError = false,
	retry,
} ) => {
	let logsElement = (
		<>
			{ logs.error && logs.error.length > 0 && (
				<section className="sensei-data-port-step">
					<Section className="sensei-data-port-step__body">
						<h2>{ __( 'Failed', 'sensei-lms' ) }</h2>
						<p className="sensei-import-done__section-description">
							{ __(
								'The following content was not imported. Please make the necessary corrections to the import file and try again.',
								'sensei-lms'
							) }
						</p>

						<ImportLog items={ logs.error } type="error" />
					</Section>
				</section>
			) }

			{ logs.notice && logs.notice.length > 0 && (
				<section className="sensei-data-port-step">
					<Section className="sensei-data-port-step__body">
						<h2>{ __( 'Partial', 'sensei-lms' ) }</h2>
						<p className="sensei-import-done__section-description">
							{ __(
								'The following content was partially imported. The import process encountered some issues that you can resolve manually by clicking the link and making the necessary adjustments.',
								'sensei-lms'
							) }
						</p>

						<ImportLog items={ logs.notice } type="warning" />
					</Section>
				</section>
			) }
		</>
	);

	if ( isFetching ) {
		logsElement = (
			<div className="sensei-import-done__log-fetching">
				<Spinner /> { __( 'Fetching log details…', 'sensei-lms' ) }
			</div>
		);
	} else if ( fetchError ) {
		logsElement = (
			<Notice status="error" isDismissible={ false }>
				{ __( 'Failed to load import log.', 'sensei-lms' ) }{ ' ' }
				{ fetchError.message }
				<Button onClick={ retry } isLink isSmall>
					{ __( 'Retry', 'sensei-lms' ) }
				</Button>
			</Notice>
		);
	}

	return (
		<>
			<section className="sensei-data-port-step">
				<Section className="sensei-data-port-step__body">
					<h2>{ __( 'Completed', 'sensei-lms' ) }</h2>
					<p className="sensei-import-done__section-description">
						{ __(
							'The following content was imported:',
							'sensei-lms'
						) }
					</p>

					<ImportSuccess successResults={ successResults } />

					<div className="sensei-data-port-step__footer">
						<Button isPrimary onClick={ restartImporter }>
							{ __( 'Import More Content', 'sensei-lms' ) }
						</Button>
					</div>
				</Section>
			</section>

			{ logsElement }
		</>
	);
};
