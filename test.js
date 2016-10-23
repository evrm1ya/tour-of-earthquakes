var fetch = require('isomorphic-fetch');
var fs = require('fs');
var json2csv = require('json2csv');
var fields = [
  'nci_id', 'nct_id', 'protocol_id', 'ccr_id',
  'ctep_id', 'dcp_id', 'associated_studies',
  'amendment_date', 'current_trial_status',
  'current_trial_status_date', 'start_date',
  'start_date_type_code', 'completion_date',
  'completion_date_type_code',
  'record_verification_date',
  'brief_title', 'official_title', 'acronym',
  'keywords', 'brief_summary', 'classification_code',
  'interventional_model',
  'accepts_healthy_volunteers_indicator',
  'study_protocol_type',
  'study_subtype_code',
  'study_population_description',
  'study_model_code', 'study_model_other_text',
  'sampling_method_code', 
  'bio_specimen.f1', 'bio_specimen.f2',
  'bio_speciment.f3', 'bio_specimen.f4',
  'primary_purpose.primary_purpose_code',
  'primary_purpose.primary_purpose_other_text',
  'primary_purpose.primary_purpose_additional_qualifier_code',
  'phase.phase', 'phase.phase_other_text',
  'phase.phase_additional_qualifier_code'
];

fetch('https://clinicaltrialsapi.cancer.gov/v1/clinical-trials')
  .then(response => {
    return response.json();
  })
  .then(json => {
    console.log('Dump in csv, store in database, or d3 it up.');
    let formatted = JSON.stringify(json, null, 2);
    let csv = json2csv({
      data: json.trials,
      fields
    });
    fs.writeFile('ct.csv', csv, err => {
      if (err) throw err;
      console.log('file saved');
    });
    fs.writeFile('ct.json', formatted, err => {
      if (err) throw err;
      console.log('file saved');
    });
  });
