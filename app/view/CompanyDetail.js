/*
 * File: app/view/CompanyDetail.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ComStat.view.CompanyDetail', {
    extend: 'Ext.Panel',
    alias: 'widget.companydetail',

    config: {
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
            '<dl>',
            '    <dt>Industry</dt>',
            '    <dd>{industry}</dd>',
            '',
            '    <dt>Revenue</dt>',
            '    <dd>{revenue}</dd>',
            '',
            '    <dt>No. of employees</dt>',
            '    <dd>{employees}</dd>',
            '</dl>'
        ]
    }

});