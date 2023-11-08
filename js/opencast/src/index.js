import il from 'ilias';
import $ from 'jquery';
import PasswordToggle from './Form/PasswordToggle';
import StartWorkflow from './Workflow/StartWorkflow';

il.Opencast = il.Opencast || {};
il.Opencast.Form = il.Opencast.Form || {};
il.Opencast.Form.passwordToggle = new PasswordToggle($);

il.Opencast.Workflow = il.Opencast.Workflow || {};
il.Opencast.Workflow.startWorkflow = new StartWorkflow($);
