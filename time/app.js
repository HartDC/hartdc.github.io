var App = angular.module('App', []);
App.controller('AppCtrl', function ($scope, $filter){
    
var clear = "";
$scope.lng =10;
$scope.past = false;
$scope.ch = {"t":""};
$scope.ch.p = 'date';
$scope.ch.n = 'All Services';
$scope.tn = Date.parse(Date())/1000;
$scope.tt = 1364688000;

$scope.times = [
{"id":1,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"BS","s":"grn","pc":0,"text":"Increase the number of services with online payment facilities","note":" ","act":"Increase efficiency of the Business Support Service"},
{"id":2,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"BS","s":"grn","pc":0,"text":"Reduce paper usage and support other services to do the same","note":"no notes","act":" "},
{"id":3,"date":"2014-07-30","ut":1406678400,"day":"30 Jul","yr":2014,"done":"FALSE","team":"BS","s":"grn","pc":0,"text":"Review EH scanning procedures","note":"no notes","act":" "},
{"id":4,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"BS","s":"grn","pc":0,"text":"Cross skill team to ensure service availability in all areas","note":" ","act":"Strengthen business continuity"},
{"id":5,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"BS","s":"grn","pc":0,"text":"Ensure staffing levels can sustain supported services","note":"no notes","act":" "},
{"id":6,"date":"2014-07-30","ut":1406678400,"day":"30 Jul","yr":2014,"done":"FALSE","team":"BS","s":"grn","pc":0,"text":"Review relationship with main contact centre","note":"no notes","act":" "},
{"id":7,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"BS","s":"grn","pc":0,"text":"Clarify business model of business support unit","note":" ","act":"Full-scale review of the Business Support Unit to align with customer and service needs"},
{"id":8,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"BS","s":"grn","pc":0,"text":"Develop strategic approach to service delivery","note":"no notes","act":" "},
{"id":9,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"BS","s":"grn","pc":0,"text":"Review SLA agreements with internal services","note":"no notes","act":" "},
{"id":10,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"BS","s":"grn","pc":0,"text":"Offer other internal services support options","note":" ","act":"Explore additional opportunities to support services"},
{"id":11,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"BS","s":"grn","pc":0,"text":"Offer third parties support including ACAS, CAB","note":"no notes","act":" "},
{"id":12,"date":"2015-02-05","ut":1423094400,"day":"05 Feb","yr":2015,"done":"FALSE","team":"CS","s":"amb","pc":0,"text":"Cabinet approval","note":" ","act":"Keep any necessary increases in council tax levels to the minimum"},
{"id":13,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":0,"text":"Draft medium term financial strategy","note":"no notes","act":" "},
{"id":14,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":0,"text":"Fees and charges paper","note":"no notes","act":" "},
{"id":15,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":0,"text":"Final draft of budget for approval","note":"no notes","act":" "},
{"id":16,"date":"2015-02-26","ut":1424908800,"day":"26 Feb","yr":2015,"done":"FALSE","team":"CS","s":"amb","pc":0,"text":"Full Council","note":"no notes","act":" "},
{"id":17,"date":"2015-01-20","ut":1421712000,"day":"20 Jan","yr":2015,"done":"FALSE","team":"CS","s":"amb","pc":0,"text":"Overview and Scrutiny","note":"no notes","act":" "},
{"id":18,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":0,"text":"Review of larger contracts","note":"no notes","act":" "},
{"id":19,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":0,"text":"Zero base budgeting paper","note":"no notes","act":" "},
{"id":20,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":0,"text":"Analyse existing SLAs used by HCC for basis of review","note":" ","act":"Maintain current levels of funding to voluntary sector"},
{"id":21,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"amb","pc":0,"text":"Create SLAs between HDC and other organisations","note":"no notes","act":" "},





{"id":27,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":0,"text":"Agree final action plan","note":" ","act":"Deliver Health and Wellbeing action plan targets within agreed timescales"},
{"id":28,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":0,"text":"Implement plan","note":"no notes","act":" "},
{"id":29,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"amb","pc":0,"text":"Monitor and Evaluate","note":"no notes","act":" "},
{"id":30,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"CS","s":"gry","pc":0,"text":"Finalise action plan","note":" ","act":"Deliver Older Persons action plan targets within agreed timescales"},
{"id":31,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"gry","pc":0,"text":"Implement action plan","note":"no notes","act":" "},
{"id":32,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"gry","pc":0,"text":"Implement additional modules - talent management / personal development","note":" ","act":"Deliver role out of CoreHR"},
{"id":33,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"CS","s":"gry","pc":0,"text":"Implement rostering for leisure services","note":"no notes","act":" "},
{"id":34,"date":"2014-07-03","ut":1404345600,"day":"03 Jul","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":100,"text":"Annual reaccreditation","note":" ","act":"Obtain Code of Connection approval"},
{"id":35,"date":"2014-07-01","ut":1404172800,"day":"01 Jul","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":100,"text":"Annual IT Health Check","note":"no notes","act":" "},
{"id":36,"date":"2014-06-12","ut":1402531200,"day":"12 Jun","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":100,"text":"Implement initial security recommendations","note":"no notes","act":" "},
{"id":37,"date":"2014-06-01","ut":1401580800,"day":"01 Jun","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":100,"text":"Review 2013 assessment","note":"no notes","act":" "},
{"id":38,"date":"2014-05-22","ut":1400716800,"day":"22 May","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":100,"text":"Update IT Security Policy with initial recommendations","note":"no notes","act":" "},
{"id":39,"date":"2014-09-01","ut":1409529600,"day":"01 Sep","yr":2014,"done":"FALSE","team":"CS","s":"grn","pc":25,"text":"Agree spec and design","note":" ","act":"Develop sharepoint infrastructure"},
{"id":40,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"CS","s":"grn","pc":25,"text":"Build Environment","note":"no notes","act":" "},
{"id":41,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"CS","s":"grn","pc":25,"text":"Roll out to staff","note":"no notes","act":" "},
{"id":42,"date":"2014-07-09","ut":1404864000,"day":"09 Jul","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":25,"text":"Sharepoint Workshops","note":"no notes","act":" "},

{"id":44,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":33,"text":"Review of current CRM provision","note":" ","act":"Review of CRM"},
{"id":45,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"grn","pc":33,"text":"Revise current system or source alternative solution","note":"no notes","act":" "},
{"id":46,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"CS","s":"grn","pc":33,"text":"Scope a fit for purpose solution","note":"no notes","act":" "},


{"id":49,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"amb","pc":33,"text":"Bring on further contracts as they are created","note":" ","act":"Develop contract register"},
{"id":50,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":33,"text":"Publish updated register online","note":"no notes","act":" "},
{"id":51,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"CS","s":"amb","pc":33,"text":"Review current contract register","note":"no notes","act":" "},
{"id":52,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"grn","pc":0,"text":"Establish if it is in the Council's best interest to continue with the current provider","note":" ","act":"Review of Capita contracts"},
{"id":53,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"CS","s":"grn","pc":0,"text":"Establish legal position on extending contracts","note":"no notes","act":" "},



{"id":57,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"grn","pc":0,"text":"Publicise Stoptober and national no smoking day?","note":" ","act":"Undertake smoking cessation programmes"},
{"id":58,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"grn","pc":0,"text":"Smoking in pregnancy?","note":"no notes","act":" "},
{"id":59,"date":"2014-11-01","ut":1414800000,"day":"01 Nov","yr":2014,"done":"FALSE","team":"ES","s":"amb","pc":12,"text":"Door to Door Canvassing","note":" ","act":"Implement Individual Elector Registration"},
{"id":60,"date":"2014-04-01","ut":1396310400,"day":"01 Apr","yr":2014,"done":"TRUE","team":"ES","s":"amb","pc":12,"text":"Finish Testing and implementation of new EMS server","note":"no notes","act":" "},
{"id":61,"date":"2014-07-08","ut":1404777600,"day":"08 Jul","yr":2014,"done":"FALSE","team":"ES","s":"amb","pc":12,"text":"Local Data Matching","note":"no notes","act":" "},
{"id":62,"date":"2014-08-08","ut":1407456000,"day":"08 Aug","yr":2014,"done":"FALSE","team":"ES","s":"amb","pc":12,"text":"New Format HEF and ITR mailing","note":"no notes","act":" "},
{"id":63,"date":"2014-07-03","ut":1404345600,"day":"03 Jul","yr":2014,"done":"FALSE","team":"ES","s":"amb","pc":12,"text":"Receipt of matched data from DWP","note":"no notes","act":" "},
{"id":64,"date":"2014-12-01","ut":1417392000,"day":"01 Dec","yr":2014,"done":"FALSE","team":"ES","s":"amb","pc":12,"text":"Register Publication","note":"no notes","act":" "},
{"id":65,"date":"2014-07-26","ut":1406332800,"day":"26 Jul","yr":2014,"done":"FALSE","team":"ES","s":"amb","pc":12,"text":"Transfer existing registers to DWP","note":"no notes","act":" "},
{"id":66,"date":"2014-06-10","ut":1402358400,"day":"10 Jun","yr":2014,"done":"FALSE","team":"ES","s":"amb","pc":12,"text":"Transition of old non verified application process to new verified application process ( online - new forms )","note":"no notes","act":" "},
{"id":67,"date":"2014-05-25","ut":1400976000,"day":"25 May","yr":2014,"done":"TRUE","team":"ES","s":"grn","pc":87,"text":"EPE Count","note":" ","act":"Deliver Combined EPE - District - Parish elections"},
{"id":68,"date":"2014-04-02","ut":1396396800,"day":"02 Apr","yr":2014,"done":"TRUE","team":"ES","s":"grn","pc":87,"text":"Hold meeting for Party Agents and Individual Candidates","note":"no notes","act":" "},
{"id":69,"date":"2014-04-14","ut":1397433600,"day":"14 Apr","yr":2014,"done":"TRUE","team":"ES","s":"grn","pc":87,"text":"Issue Pollcards","note":"no notes","act":" "},
{"id":70,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"ES","s":"grn","pc":87,"text":"Issue Postal Votes","note":"no notes","act":" "},
{"id":71,"date":"2014-05-23","ut":1400803200,"day":"23 May","yr":2014,"done":"TRUE","team":"ES","s":"grn","pc":87,"text":"Local Count","note":"no notes","act":" "},
{"id":72,"date":"2014-05-22","ut":1400716800,"day":"22 May","yr":2014,"done":"TRUE","team":"ES","s":"grn","pc":87,"text":"Polling Day","note":"no notes","act":" "},
{"id":73,"date":"2014-04-11","ut":1397174400,"day":"11 Apr","yr":2014,"done":"TRUE","team":"ES","s":"grn","pc":87,"text":"Publish Notice of election","note":"no notes","act":" "},
{"id":74,"date":"2014-11-24","ut":1416787200,"day":"24 Nov","yr":2014,"done":"FALSE","team":"ES","s":"grn","pc":87,"text":"Submission of claim to ECU for costs of EPE election ( & invoices to Parishes)","note":"no notes","act":" "},
{"id":75,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"ES","s":"gry","pc":0,"text":"Produce plan for 2015 based on 2014","note":" ","act":"Planning for 2015 UK General Election"},
{"id":76,"date":"2014-12-10","ut":1418169600,"day":"10 Dec","yr":2014,"done":"FALSE","team":"ES","s":"gry","pc":0,"text":"Review lessons learnt from 2014 EPE elections","note":"no notes","act":" "},
{"id":77,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":20,"text":"Agree communications programme aimed at reducing contamination of recycling and increased participation in recycling.","note":"JE090714 - Draft programme produced, needs to be agreed with portfolio holder before being finalised.","act":"Increase recycling rates by 1% a year"},
{"id":78,"date":"2015-01-31","ut":1422662400,"day":"31 Jan","yr":2015,"done":"FALSE","team":"ETS","s":"amb","pc":20,"text":"Introduce textile collection banks in agreed locations","note":"no notes","act":"JE090714 - Having met with the charities, implementation of this action has been delayed to allow for the options to be reviewed. It is anticipated that a report will be taken to Cabinet in Sept/ Oct 14."},
{"id":79,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"TRUE","team":"ETS","s":"amb","pc":20,"text":"Number of residents subscribed to garden waste service to be 7500","note":"no notes","act":"JE090714 - The number of customers subscribed to the garden waste service on 4th July 2014 = 7523. It is hoped that introduction of the option to pay by direct debit later this year, making it easier for customers to pay will help retain these customers."},
{"id":80,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":20,"text":"Seek Cabinet approval to ban recycled materials from residual waste","note":"no notes","act":"JE090714 - Anticipate report to Cabinet in Sept/Oct"},
{"id":81,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"amb","pc":20,"text":"Working with HCC to explore opportunities to recycle new materials","note":"no notes","act":"JE090714 - The Waste and Recycling Manager is a member of the Project Integra Working Group which is exploring these opportunities. The work of the group is monitored by the Project Integra board."},
{"id":82,"date":"2015-01-30","ut":1422576000,"day":"30 Jan","yr":2015,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Commence works","note":" ","act":"Flood Alleviation Scheme – North Warnborough"},
{"id":83,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Flood relief channel operational.","note":"no notes","act":" "},
{"id":84,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Landowner consent obtained to undertake the works.","note":"no notes","act":"JE 090714- Land has recently be sold, Capita negotiating with land owner."},
{"id":85,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Quotations obtained.","note":"no notes","act":" "},
{"id":86,"date":"2015-01-31","ut":1422662400,"day":"31 Jan","yr":2015,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Appoint contractor and supervise works","note":" ","act":"Flood Alleviation Scheme – Hartley Wintney"},
{"id":87,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Complete design and tender works","note":"no notes","act":" "},
{"id":88,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Obtain Environment Agency (EA) approval for works and secure funding","note":"no notes","act":"JE090714 - Allocation of funding has been agreed by EA, meeting with EA on 110714 to consider programme for implementation. Available options need to be reviewed to accomodate land owner and environmental constraints."},
{"id":89,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Works complete","note":"no notes","act":" "},
{"id":90,"date":"2014-04-01","ut":1396310400,"day":"01 Apr","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Implement HCC agency for weed control on the highway","note":"HCC have deferred decsion until","act":"Development of Streets and Grounds Maintenance Service"},
{"id":91,"date":"2014-04-01","ut":1396310400,"day":"01 Apr","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Implement programme of cleaning street signs","note":"no notes","act":" "},
{"id":92,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Increase number of grass cuts during peak growing season May/June","note":"no notes","act":" "},
{"id":93,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Install on street recycling bins in 12 locations","note":"no notes","act":" "},
{"id":94,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Work with parish councils to identify joint working opportunities for streets and grounds maintenance","note":"no notes","act":" "},



{"id":98,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"ETS","s":"grn","pc":50,"text":"Contract variation agreed","note":" ","act":"In partnership with parish councils, review provision of bus shelters by July 2014"},
{"id":99,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"ETS","s":"grn","pc":50,"text":"Review options and agree way forward","note":"no notes","act":"JE090714 - It has been agreed that the existing contract will be renewed on an annual basis until 2016 when it is hoped that there will be an opportunity to tender a joint contract with neighbouring authorities, including Rushmoor and Basingstoke."},
{"id":100,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Agree priorities for Fleet","note":"JE090714 - Parish Council have confirmed support for Knoll Road scheme which will be delivered in next 12 months. Schemes to be delivered in Fleet by April 2015 include: 1.Review success of experimental order on Fleet Road 2. Old Cove Road 3. Brick Lane 4. Leawood Road 5. Rochester Grove 6. Velmead School.","act":"Implement within 12 months any traffic management and / or parking schemes agreed with parish councils"},

{"id":102,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Deliver agreed scheme for Hook","note":"no notes","act":"JE090714 - Meeting with Hook Parish Council on 100714, to consider options."},
{"id":103,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Deliver agreed scheme for Odiham","note":"no notes","act":"JE090714 - experimental order, surface markings and signs are in place. Enforcement of new restrictions to commence at the end of July."},
{"id":104,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Work with other Parish Council’s to identify and deliver initiatives","note":"no notes","act":"JE090714 - Meetings are scheduled with Hartley Wintney, Hook and Odiham Parish Council."},
{"id":105,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Agree programme and budget for implementation.","note":" ","act":"Develop On line access to ETS services"},
{"id":106,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Deliver initiatives in accordance with agreed programme.","note":"no notes","act":" "},
{"id":107,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Identify opportunities.","note":"no notes","act":"JE090714 - Options being considered."},
{"id":108,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"gry","pc":0,"text":"Allocate officer time as necessary to support project Integra initiatives, and take a proactive role in the partnership","note":"JE090714 -Action Plan was approved by Cabinet in May 2014. Officers are working closely with PI to ensure the actions in the plan are delivered.","act":"Deliver Project Integra action plan with agreed timescales"},
{"id":109,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"gry","pc":0,"text":"Attend all Project Integra strategy officer and board meetings","note":"no notes","act":"JE090714 -Ongoing"},
{"id":110,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Review progress with Economic Development Officer","note":"JE090714 -Meeting with EDO on 14/07","act":"Offer subsidised 1 year car parking for startup businesses"},
{"id":111,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":7,"text":"Cabinet Approval","note":" ","act":"Renew Hart's Housing Strategy"},
{"id":112,"date":"2014-11-15","ut":1416009600,"day":"15 Nov","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":7,"text":"Carry out consultation with stakeholders and customers to consult on draft document.","note":"no notes","act":"140702 - range of consultation exercises carried out including Housing Forum held on 19th June 2014. Will be working towards a draft document for consultation."},
{"id":113,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":7,"text":"Combine and Publish overarching Housing Strategy","note":"no notes","act":" "},
{"id":114,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":7,"text":"HS1401a - Develop partnership working to support intelligence gathering, consultation and partner engagement while enabling resources to be effectively targeted","note":"no notes","act":"140702 - to date we have engaged partners through the Diagnostic Peer Review process, Housing Management Forum, Homelessness Forum, Homelessness Strategy Steering Groups and Housing Forum. Additional efforts to engage electronically through surveys and requests for thoughts on action plans and priorities."},
{"id":115,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":7,"text":"HS1401b - Publish new Housing Strategy incorporating private sector housing and tenancy strategies","note":"no notes","act":" "},
{"id":116,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":7,"text":"Take to O&S","note":"no notes","act":"O&S meeting 18th November"},
{"id":117,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Hold a bi-annual Housing Management Forum","note":"140702 - Housing Management Forum was held in February 2014 with the next one planned for September.","act":"Develop partnership working to support intelligence gathering, consultation and partner engagement while enabling resources to be effectively targeted"},
{"id":118,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Hold a Private Landlord’s Forum","note":"no notes","act":"140702 - waiting for return to work date from JM which may impact on this time scale."},
{"id":119,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Hold a PRS landlord Steering Group","note":"no notes","act":"140702 - Provision date for a landlord steering group has been set for September 2014."},
{"id":120,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":40,"text":"Hold an overarching Housing Forum","note":"no notes","act":"Housing Forum held on 19th July and a key element of our further consultation associated with delivering a new Housing Strategy for Hart. "},
{"id":121,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":40,"text":"Hold quarterly Homelessness Forum","note":"no notes","act":"Homelessness Forum was held ahead of schedule in March 2014. A further forum will be held once the Preventing Homelessness Strategy is published in the autumn."},
{"id":122,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":22,"text":"Cabinet Approval","note":" ","act":"Publish new Housing Strategy incorporating private sector housing and tenancy strategies"},
{"id":123,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":22,"text":"Carry out consultation with stakeholders & customers to support establishing gaps and priorities.","note":"no notes","act":"140702 - Consultation has been undertaken between November 2013 to date. Including stakeholder surveys, forums and a range of electronic consultation methods. Culminated in Housing Forum on 19th June. Housing evidence base now largely complete. "},
{"id":124,"date":"2014-11-15","ut":1416009600,"day":"15 Nov","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":22,"text":"Carry out consultation with stakeholders and customers to consult on the draft document","note":"no notes","act":" "},
{"id":125,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":22,"text":"Combine and Publish overarching Housing Strategy","note":"no notes","act":" "},
{"id":126,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":22,"text":"Draft Housing Strategy completed","note":"no notes","act":"140702 - Currently being drafted following consultation."},
{"id":127,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":22,"text":"Review demographics, housing market pressures, affordability, and housing needs and complete data collection and analysis","note":"no notes","act":"140702 - Review of Homelessness & Housing Strategy Evidence base was published on 10th June 2014 and incorporates analysis and research findings. "},
{"id":128,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":22,"text":"Review Private Sector Housing Strategy","note":"no notes","act":"140702 - Private Sector Renewal Strategy will be updated in the next couple of weeks."},
{"id":129,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":22,"text":"Review Tenancy Strategy","note":"no notes","act":"140702 - first review of draft underway."},
{"id":130,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":22,"text":"Take to O&S","note":"no notes","act":"140702 - will take to O&S in November"},
{"id":131,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"56 High Street, Odiham – 25% - 5 units - 2015/16","note":" ","act":"Deliver 300 affordable homes within Local Plan targets"},
{"id":132,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"Dilly Lane – Phase 2 – 40% AH 30 units in 2014/15","note":"no notes","act":" "},
{"id":133,"date":"2014-10-30","ut":1414627200,"day":"30 Oct","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"Eversley – 100% AH - 9 Units","note":"no notes","act":"140702 - Rural Exception site - work progressing well on site. Action will be complete when site is delivered."},
{"id":134,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"Hatchwood, Odiham – 40% AH - 36 units delivering 2014/15 and 2015/16","note":"no notes","act":" "},
{"id":135,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"HS1402a Contribute to the LDF process","note":"no notes","act":"140702 - meeting between Housing Services and Planning Policy to discuss high level strategic considerations around Local Plan and Affordable Housing Policy. Regular meetings will be set up to progress this and review options."},
{"id":136,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"HS1402b Ensure affordable housing on development sites is maximised","note":"no notes","act":" "},
{"id":137,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"HS1402c Monitor the impact of the introduction of CIL on affordable housing delivery","note":"no notes","act":" "},
{"id":138,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"HS1402d Investigate local ‘buy back’ scheme and purchase homes on the open market to be used as affordable housing","note":"no notes","act":" "},
{"id":139,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"HS1402e Review Hart owned land and provide recommendations on potential development sites","note":"no notes","act":" "},
{"id":140,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"Larmer Close – 100% AH - 2 units in 2014/15","note":"no notes","act":" "},
{"id":141,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":6,"text":"Lismoyne House – 100% AH - 12 units","note":"no notes","act":"140702 - 100% AH achieved and delivered."},
{"id":142,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"QEB phases 1 & 2 – 30% AH, delivering over the next 5 years - 52 units from Aug 2014 – March 2015","note":"no notes","act":" "},
{"id":143,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"Rotherwick – 6 units 2014/15","note":"no notes","act":"140702 - abnormals on site and developer strategy to resolve now submitted. Completion date now unclear. Will be revised once we have a clear picture. This is being progressed."},
{"id":144,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"Sandhurst Rd, Yateley - 5% - 8 units delivering jan 2015 onwards","note":"no notes","act":" "},
{"id":145,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"The Lea – 100% AH - 2 units in 2014/15","note":"no notes","act":" "},
{"id":146,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":6,"text":"Wickham Ct – 100% AH - 41 units","note":"no notes","act":" "},

{"id":148,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"56 High Street, Odiham – 25% - 5 units - 2015/16","note":"140702 - reduced level of AH resulted from viability assessment.","act":"Ensure affordable housing on development sites is maximised"},
{"id":149,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Dilly Lane – Phase 2 – 40% AH 30 units in 2014/15","note":"no notes","act":" "},
{"id":150,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Eversley – 100% 31 October 2014","note":"no notes","act":"Rural Exception Site - 100% AH achieved - site underway"},
{"id":151,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Hatchwood, Odiham – 40% AH - 36 units delivering 2014/15 and 2015/16","note":"no notes","act":"140702 - reduced level of AH resulting from viability assessment."},
{"id":152,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Larmer Close – 100% AH - 2 units in 2014/15","note":"no notes","act":" "},
{"id":153,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":16,"text":"Lismoyne House – 100% AH - 12 units Sept-Dec2014","note":"no notes","act":"140702 - complete - 100% AH delivered (regeneration of a former office building)"},
{"id":154,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"QEB phases 1 & 2 – 30% AH, delivering over the next 5 years - 52 units from Aug 2014 – March 2015","note":"no notes","act":"140702 - reduced level of AH due to viability factors."},
{"id":155,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Rotherwick – 6 units 2014/15","note":"no notes","act":"140702 - completion date to be reviewed due to issues affecting developing the site. Developer has submitted plans to Planning on resolving key factors such as drainage."},
{"id":156,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Sandhurst Rd, Yateley - 5% - 8 units delivering jan 2015 onwards","note":"no notes","act":" "},
{"id":157,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":16,"text":"Swan Lake View – 30% - 5 units April 2014","note":"no notes","act":"140702 - 30% AH achieved representing 31 units."},
{"id":158,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"The Lea – 100% AH - 2 units in 2014/15","note":"no notes","act":" "},
{"id":159,"date":"2015-02-28","ut":1425081600,"day":"28 Feb","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Wickham Ct – 100% AH - 41 units Sept-Dec 2014","note":"no notes","act":" "},
{"id":160,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"gry","pc":0,"text":"Review viability factors associated with proposed CIL in the context of affordable housing delivery.","note":"140702 - CIL being introduced in March 2015. Action has been amended from 'Review affordable housing achieved on sites 6 months following introduction of CIL' to the current wording to reflect where we are.","act":"Monitor the impact of the introduction of CIL on affordable housing delivery"},
{"id":161,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"FALSE","team":"HS","s":"gry","pc":0,"text":"Agree details of approach with Sentinel and commence project","note":"140702 - approach has been agreed, legal and nominations agreement is with Legal. Issues are arising with availability of properties within the association's budget ceiling (£200k) and meeting the other parameters of the scheme and the association's policies. PT requested further advice and information from the association.","act":"Work with Sentinel to purchase homes on the open market to be used as affordable housing"},
{"id":162,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"gry","pc":0,"text":"Bring 5 2-bed ESP properties into use as affordable housing","note":"no notes","act":" "},

{"id":164,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":0,"text":"HS1403a Eversley site completion","note":" ","act":"Deliver 2 housing rural exception sites"},
{"id":165,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":0,"text":"HS1403b Rotherwick site completion","note":"no notes","act":"140702 - slow start due to drainage problems. These are now being resolved but may affect timescales for delivery."},
{"id":166,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"HS1404a Publish new Preventing Homelessness Strategy","note":" ","act":"Prevent potentially homeless families actually becoming homeless"},
{"id":167,"date":"2014-10-30","ut":1414627200,"day":"30 Oct","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"HS1404b Implement new Allocations Policy for Hart","note":"no notes","act":"Due date moved as Software provider could not carry out works before this date."},
{"id":168,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"HS1404c Develop and implement a new Landlord Offer for PRS landlords","note":"no notes","act":" "},
{"id":169,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"HS1404d Work in partnership to raise awareness of impacts of welfare reforms","note":"no notes","act":" "},
{"id":170,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Cabinet approval","note":"140702 - unable to amend date in Covalent. New timescale to bring the strategy to Cabinet in September.","act":"Publish new Preventing Homelessness Strategy"},
{"id":171,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":40,"text":"Carry out consultation on draft document","note":"no notes","act":"140702 - consulting via review of homelessness priorities and a draft action plan template."},
{"id":172,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":40,"text":"Complete review of homelessness","note":"no notes","act":"140702 -review published on 10th June."},
{"id":173,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Draft Homelessness Strategy completed","note":"no notes","act":"140702 - working to an interim Homelessness Strategy position using the Housing Service Plan. New Strategy will be published in October. "},
{"id":174,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Publish new Preventing Homelessness Strategy","note":"no notes","act":"140702 - unable to amend date in Covalent - new timescale for strategy to be published in October."},

{"id":176,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":20,"text":"Develop joint working across the service to ensure a joined up approach to Private Sector Access and to support a comprehensive coherent ‘landlord and tenant' offer","note":" ","act":"Develop and implement a new Landlord Offer for PRS landlords"},
{"id":177,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":20,"text":"Hold a Private Landlords Steering group","note":"no notes","act":"140702 - Planned PRS landlord steering group in September."},
{"id":178,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":20,"text":"Investigate the long term viability of a Local Lettings Agency approach for Hart","note":"no notes","act":"140702 - initial landlord feedback has provided views regarding what options might be worth considering in a future landlord offer, however, moving to an income generating service will not be appropriate within the life of this Service Plan."},
{"id":179,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":20,"text":"Reduce use of Cash Deposits","note":"no notes","act":"140702 - Housing Needs Service will monitor the use of cash deposits and why cash was necessary. Work planned to visit letting agents in September who have not been prepared to accept cashless bonds. "},
{"id":180,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":20,"text":"Review and determine the potential role for a PSL Scheme to run alongside the Rent Bond Scheme","note":"no notes","act":" "},
{"id":181,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":20,"text":"Review and develop approach to recovery of outstanding rent deposit debts","note":"no notes","act":"140702 - Due date slipped, this will be picked up when the Rent Deposit Officer returns from long term absence.  New date to be moved to end of September."},
{"id":182,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":20,"text":"Review current systems in place for Rent Deposit Scheme","note":"no notes","act":"140702 - task group set upand met in April. Review of existing way of working undertaken and new systems are now being put in place to make the system more robust, including moving to a cashless bond only product rather than Rent Deposit Scheme."},
{"id":183,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":20,"text":"Rewrite Cashless Bond agreements and set out clear procedures for the scheme","note":"no notes","act":"140702 - New Bonds written by Legal and ready for implementation to all new clients and will be rolled out to replace existing bonds in the coming months."},
{"id":184,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":20,"text":"Sustain existing access to PRS","note":"no notes","act":" "},
{"id":185,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":20,"text":"Visit letting agents in the district to discuss Cashless Bonds","note":"no notes","act":"140702 - visits to all key Letting Agents planned for end of July to discuss cashless bond scheme and understand why some branches of chains work with the local authority while others do not."},
{"id":186,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":33,"text":"Hold quarterly partnership liaison meetings between HB, CAB and Housing","note":" ","act":"Work in partnership to raise awareness of impacts of welfare reforms"},
{"id":187,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":33,"text":"Progress the housing aims of the Hart Local Support Services Framework action plan","note":"no notes","act":"140702 - Housing Services developing a preventing homelessness strategy and associated action plan that will include how we will contribute to a successful welfare reform transition in Hart. Housing Needs to meet with Revs and Bens to understand how HB has been developing a local planned response and understand where there are links."},
{"id":188,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":33,"text":"Survey Registered Providers on impacts and responses","note":"no notes","act":"140702 - RPs provided some feedback as part of the homelessness review, however, information was patchy. Intelligence from Sentinel has improved. "},


{"id":191,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":100,"text":"Review progress","note":"140702 - PT has been working closely with HCC to influence equalities impact assessment and highlight concerns. More recently, PT now undertaking a secondment with Adult Services for 2 days per week as Housing & Support Transformation Lead with a remit to remodel socially excluded cluster services across the 11 districts.","act":"Work with Prevention and Intervention team at County to review a section of support services (Supporting People)"},
{"id":192,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":1,"text":"HS1406a Implement HECA Plan","note":"140702 - HECA plan will need to be reviewed in light of changes (ongoing) to the government Green Deal and ECO funding programme.","act":"Reduce fuel poverty by assisting at least 750 homes to secure grant funding for improved insulation"},
{"id":193,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":1,"text":"HS1406b Continue to promote the handy person service","note":"no notes","act":" "},
{"id":194,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":1,"text":"HS1406c Continue to assist in the local HCC/NHS falls prevention initiative","note":"no notes","act":" "},
{"id":195,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":1,"text":"HS1406d Take part in the HCC Collective Switching initiative","note":"no notes","act":" "},
{"id":196,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":1,"text":"HS146e Work with ECO partner to improve energy efficiency","note":"no notes","act":" "},
{"id":197,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Climate Energy undertaken at least 4 promotional presentations at local events and forums","note":"June 2014 - Climate Energy have undertaken a presentation to members and officers within the Council. No further presentations planned at this stage and due to uncertainty over the scheme this will remain the case until we are confident about what we are delivering and how.","act":"Implement HECA Plan"},
{"id":198,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Commence area based work on poorly insulated homes","note":"no notes","act":"June 2014 - Under the Energy Action North Hampshire scheme, Climate Energy are identifying areas to target with the new Green Deal Home Improvement Fund (GDHIF). However as residents will have to fund 25% of the works, the uptake will be lower than we first anticipated. Targeted trial anticipated by end of August."},
{"id":199,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":16,"text":"Identify areas for area based programmes in line with the HECA Action Plan","note":"no notes","act":"June 2014 - There has been a change in funding available for energy efficiency measures. ECO funding which would have provided free measures is no longer available. As part of Energy Action North Hampshire scheme areas are being identified to target with Green Deal Home Improvement Fund (GDHIF) funding. However residents will have to find 25% of cost of works so may not have uptake we had anticipated for lower income households. Trial target areas have been identified."},
{"id":200,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Improve insulation in 250 properties in Hart","note":"no notes","act":"June 2014 - Due to ECO funding not being available currently, there are no free measures available. Under Green Deal Home Improvement Fund residents can receive 75% of funding towards energy efficiency measures. Work is happening to undertake improvements to mobile homes, however, without a free product to target inefficient homes, this target may prove unrealistic."},

{"id":202,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Review the current HECA action plan in light of changes to govt funding eligibility","note":"no notes","act":"June 2014 - The targets set in the HECA action plan are now unrealistic due to changes in government funding. ECO funding, which would have provided free measures is not currently available.  A new stream of funding, Green Deal Home Improvement Fund (GDHIF) is reliant on residents funding 25% of the works so the uptake will be lower than anticipated. "},

{"id":204,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"gry","pc":0,"text":"Distribute 150 prevention leaflets","note":"Leaflets are being distributed by the HIA to all clients they visit and are available in reception and will be distrubuted at the Falls Awreness event.","act":"Continue to assist in the local HCC/NHS falls prevention initiative"},
{"id":205,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"gry","pc":0,"text":"Facilitate an event to raise awareness of Falls Prevention","note":"no notes","act":"A Falls Awareness event will be run in Autumn/Winter."},


{"id":208,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"TRUE","team":"IA","s":"grn","pc":100,"text":"Review Complete","note":" ","act":"Fraud Risk Assessment"},

{"id":210,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"TRUE","team":"IA","s":"grn","pc":100,"text":"Review Started","note":"no notes","act":" "},


{"id":213,"date":"2014-06-23","ut":1403481600,"day":"23 Jun","yr":2014,"done":"TRUE","team":"IA","s":"grn","pc":66,"text":"Review Started","note":"no notes","act":" "},

{"id":215,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"IA","s":"gry","pc":0,"text":"Review Complete","note":" ","act":"Payroll"},
{"id":216,"date":"2014-09-08","ut":1410134400,"day":"08 Sep","yr":2014,"done":"FALSE","team":"IA","s":"gry","pc":0,"text":"Review in Progress","note":"no notes","act":" "},
{"id":217,"date":"2014-09-01","ut":1409529600,"day":"01 Sep","yr":2014,"done":"FALSE","team":"IA","s":"gry","pc":0,"text":"Review Started","note":"no notes","act":" "},



























{"id":245,"date":"2014-04-01","ut":1396310400,"day":"01 Apr","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":50,"text":"Adoption of project plan and philosophy of use","note":" ","act":"Build a replacement for the Hart Leisure Centre"},
{"id":246,"date":"2014-10-01","ut":1412121600,"day":"01 Oct","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":50,"text":"Agree core facility mix","note":"no notes","act":" "},
{"id":247,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":50,"text":"Agree delivery agreement with preferred operator","note":"no notes","act":" "},
{"id":248,"date":"2014-07-01","ut":1404172800,"day":"01 Jul","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":50,"text":"Enter into framework procurement process and develop specification","note":"no notes","act":"Specification developed, currently entering final stage of the tender process (10/07/2014)"},
{"id":249,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":50,"text":"Develop action plan in conjunction with LS1401","note":" ","act":"Upgrade Frogmore Leisure Centre"},
{"id":250,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":50,"text":"Draft proposals for publication in Autumn 2014","note":"no notes","act":" "},
{"id":251,"date":"2014-06-01","ut":1401580800,"day":"01 Jun","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":75,"text":"Develop action plan","note":" ","act":"Create an activity programme for the 26 – 35 year olds"},
{"id":252,"date":"2014-07-01","ut":1404172800,"day":"01 Jul","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":75,"text":"Implement","note":"no notes","act":"Scheme developed and in place"},
{"id":253,"date":"2014-05-01","ut":1398902400,"day":"01 May","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":75,"text":"Market research","note":"no notes","act":" "},
{"id":254,"date":"2014-10-01","ut":1412121600,"day":"01 Oct","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":75,"text":"Review","note":"no notes","act":" "},
{"id":255,"date":"2014-11-01","ut":1414800000,"day":"01 Nov","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Develop action plan","note":" ","act":"Create an activity programme for overweight under 11’s"},
{"id":256,"date":"2015-02-01","ut":1422748800,"day":"01 Feb","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Implement","note":"no notes","act":" "},
{"id":257,"date":"2014-09-01","ut":1409529600,"day":"01 Sep","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Market research","note":"no notes","act":" "},
{"id":258,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Review","note":"no notes","act":" "},
{"id":259,"date":"2014-06-01","ut":1401580800,"day":"01 Jun","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":100,"text":"Develop programme/Market","note":" ","act":"To develop a revised accessible activity programme for the ageing and disadvantaged"},
{"id":260,"date":"2014-08-01","ut":1406851200,"day":"01 Aug","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":100,"text":"Implement","note":"no notes","act":"Programme developed ahead of schedule now implemented and in place"},
{"id":261,"date":"2014-05-01","ut":1398902400,"day":"01 May","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":100,"text":"Review","note":"no notes","act":" "},
{"id":262,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Agree a date for adoption","note":" ","act":"Adopt Edenbrook Country Park (ECP)"},
{"id":263,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"To agree snagging items with the developer","note":"no notes","act":" "},
{"id":264,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":13,"text":"LS1406 Adopt Edenbrook Country Park (ECP)","note":" ","act":"Develop the role of Edenbrook Country Park as an active leisure site with a visitor centre and allotments"},
{"id":265,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":13,"text":"LS1407 Implement a Site management plan for Edenbrook Country Park","note":"no notes","act":" "},
{"id":266,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":13,"text":"LS1408 Plan Capital Works Programme - ECP","note":"no notes","act":" "},
{"id":267,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":50,"text":"Complete and commence implementation","note":"Delays to the transfer of the site from planning application. Likely date rescheduled to Sept 2014","act":"Implement a Site management plan for Edenbrook Country Park"},
{"id":268,"date":"2014-05-01","ut":1398902400,"day":"01 May","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":50,"text":"Initiate discussions with developer","note":"no notes","act":" "},
{"id":269,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":33,"text":"Commence tender process","note":" ","act":"Plan Capital Works Programme - ECP"},
{"id":270,"date":"2014-12-01","ut":1417392000,"day":"01 Dec","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":33,"text":"Complete design","note":"no notes","act":" "},
{"id":271,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":33,"text":"Initiate design of visitor centre and associated elements","note":"no notes","act":"Design in progress"},
{"id":272,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":50,"text":"Stage 4 completion","note":"Stage 4 of restoration complete","act":"Complete Fleet Pond restoration project stage 4 and initiate stage 5"},
{"id":273,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":50,"text":"Stage 5 initiation","note":"no notes","act":"Stage 5 not due to be completed until 2015/16"},
{"id":274,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"TRUE","team":"LS","s":"grn","pc":33,"text":"LS1409 Complete Fleet Pond restoration project stage 4 and initiate stage 5","note":"stage 4 of restoration complete","act":"Complete restoration of Fleet Pond achieve Green Flag status for it"},
{"id":275,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":33,"text":"LS1410 Implement a Fleet Pond Visitor Strategy","note":"no notes","act":" "},
{"id":276,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":33,"text":"LS1411 Achieve Green Flag status for Fleet Pond","note":"no notes","act":" "},
{"id":277,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":50,"text":"Commence implementation","note":" ","act":"Implement a Fleet Pond Visitor Strategy"},
{"id":278,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":50,"text":"Complete phase 1","note":"no notes","act":" "},
{"id":279,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Implement action plan and mitigation measures","note":" ","act":"Achieve Green Flag status for Fleet Pond"},
{"id":280,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Produce action plan","note":"no notes","act":" "},
{"id":281,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":33,"text":"Adoption subject to triggers in S106 agreement","note":"Adoption complete","act":"Complete adoption of QE2 Fields at Dilly Lane Hartley Wintney"},
{"id":282,"date":"2015-02-28","ut":1425081600,"day":"28 Feb","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":33,"text":"Install maze following adoption of site","note":"no notes","act":" "},
{"id":283,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":33,"text":"Produce maze installation plan","note":"no notes","act":" "},
{"id":284,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Determine project viability.","note":" ","act":"Cricket Hill Pond LNR (Yateley)"},
{"id":285,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Develop plan and identify funding opportunities.","note":"no notes","act":" "},
{"id":286,"date":"2014-08-01","ut":1406851200,"day":"01 Aug","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Complete yr2 report","note":" ","act":"Biodiversity Action Plan"},
{"id":287,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Analysis of trial","note":" ","act":"Hazeley Heath Grazing"},
{"id":288,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Complete year 5","note":"no notes","act":" "},


{"id":291,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Completion of consultation on draft plan","note":" ","act":"Complete and adopt the Local Plan in 2015 and use it to steer development to the right places"},
{"id":292,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Prepare options for consultation","note":"no notes","act":" "},
{"id":293,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Publish draft plan","note":"no notes","act":" "},
{"id":294,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Review action progress","note":" ","act":"Indentify potential rural exception sites through the SHLAA process and local communities"},
{"id":295,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Adopt CIL","note":" ","act":"Produce an infrastructure schedule to identify and meet community infrastructure needs"},
{"id":296,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Prepare a draft infrastructure schedule","note":"no notes","act":" "},
{"id":297,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"PP","s":"gry","pc":0,"text":"Ensure officers are able to offer active support to communities","note":" ","act":"Support local community led improvement initiatives in town and village centres including Fleet Future"},
{"id":298,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"PP","s":"gry","pc":0,"text":"Provide advice for local communities","note":"no notes","act":" "},
{"id":299,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Review action progress","note":" ","act":"Offer appropriate support to town and parish councils developing Neighbourhood Plans"},
{"id":300,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Review action progress","note":" ","act":"Invest money from the Community Infrastructure Levy in local projects, including traffic and transport improvement"},
{"id":301,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"FALSE","team":"RS","s":"red","pc":0,"text":"produce draft","note":" ","act":"Food Safety Enforcement Service Plan"},
{"id":302,"date":"2014-05-01","ut":1398902400,"day":"01 May","yr":2014,"done":"FALSE","team":"RS","s":"red","pc":0,"text":"produce draft","note":" ","act":"Health and Safety Enforcement Service Plan"},
{"id":303,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"FALSE","team":"RS","s":"amb","pc":0,"text":"Barking dogs","note":" ","act":"Undertake events and publicity in conjunction with Noise Action Week 2014"},
{"id":304,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"FALSE","team":"RS","s":"amb","pc":0,"text":"Housing Associations","note":"no notes","act":" "},
{"id":305,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"FALSE","team":"RS","s":"amb","pc":0,"text":"TENS & Licensed premises","note":"no notes","act":" "},
{"id":306,"date":"2014-06-01","ut":1401580800,"day":"01 Jun","yr":2014,"done":"FALSE","team":"RS","s":"red","pc":0,"text":" To offer free bite-size training to all businesses in Hart on health & safety","note":" ","act":"Offer 50 free health and safety training places to businesses each year"},
{"id":307,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"To promote National Food Safety Week 2014","note":" ","act":"Undertake events and publicity in conjunction with National Food Safety Week"},
{"id":308,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"To support local food bank charities by promoting the service and encouraging individual and business contributions.","note":"no notes","act":" "},
{"id":309,"date":"2015-03-01","ut":1425168000,"day":"01 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":" To offer a free E.Coli workshop to all food premises in Hart","note":" ","act":"To undertake free workshops on food hygiene topics to local businesses"},
{"id":310,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"To deliver two programmes of cookery classes to the over 55’s within the District.","note":" ","act":"Over 55’s mens cookery classes"},
{"id":311,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Deliver the Workplace Wellbeing Charter and seek to further promote and expand the scheme in Hampshire","note":" ","act":"Assist 10 employers a year to achieve Workplace Wellbeing Charter status"},
{"id":312,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Continuation of dog fouling and littering campaign","note":" ","act":"Reduce dog fouling in monitored areas by 40% a year"},
{"id":313,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Deliver a campaign to encourage responsible dog ownership","note":"no notes","act":" "},
{"id":314,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Encourage patrolling in Parish Council owned land","note":"no notes","act":" "},
{"id":315,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Work in conjunction with the Police on dog attacks","note":"no notes","act":" "},
{"id":316,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Development of a scheme, excellence criteria and implementation subject to FSA approval.","note":" ","act":"Deliver the award for excellence for food businesses scheme"},
{"id":317,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Closer liaison with market authority to ensure closer regulation of new and existing food vendors","note":" ","act":"Blackbushe Market traders project"},
{"id":318,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Further gas safety checks with designated gas safety engineer","note":"no notes","act":" "},
{"id":319,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Sampling regime to ensure good standards of hygiene","note":"no notes","act":" "},
{"id":320,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Ongoing. Two food safety and one health & safety newsletter per annum to be produced","note":" ","act":"Produce seasonal food safety and health & safety newsletters for food business operators within Hart"},
{"id":321,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"FALSE","team":"RS","s":"amb","pc":0,"text":"Scoping of action","note":" ","act":"Scrap metal Dealers"},
{"id":322,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"FALSE","team":"RS","s":"amb","pc":0,"text":"Scoping of action","note":" ","act":"Collaborative working - Licensing"},
{"id":323,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Risk-based proactive inspections of licensed premises to be undertaken.","note":" ","act":"Licensing enforcement visits – Licensed premises"},
{"id":324,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Risk-based proactive inspections of licensed vehicles and drivers to be undertaken.","note":" ","act":"Licensing enforcement visits - Taxis"},
{"id":325,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"To continue to provide affordable training programmes in food hygiene to non-profit making charitable organisations.","note":" ","act":"Community organisation training programme"},
{"id":326,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"To consider the benefit of Enterprise as a caseload monitoring solution for the service","note":" ","act":"ERDMS & Enterprise"},
{"id":327,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"To work with the BSU to deliver ERDMS.","note":"no notes","act":" "},
{"id":328,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"RS","s":"gry","pc":0,"text":"Draft system for Design Awards","note":" ","act":"Institute a system of design awards for all new development"},
{"id":329,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"RS","s":"gry","pc":0,"text":"Planning Commitee Agreement on Design Awards terms","note":"no notes","act":" "},






{"id":336,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":9,"text":"Building Control","note":" ","act":"Internal Audit"},
{"id":337,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":9,"text":"Cash & Banking","note":"no notes","act":" "},
{"id":338,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":9,"text":"Council Tax/NNDR","note":"no notes","act":" "},
{"id":339,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":9,"text":"Creditors","note":"no notes","act":" "},
{"id":340,"date":"2014-07-30","ut":1406678400,"day":"30 Jul","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":9,"text":"Fraud Risk Assessment","note":"no notes","act":" "},
{"id":341,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":9,"text":"Housing (Rent Deposits)","note":"no notes","act":" "},
{"id":342,"date":"2015-01-31","ut":1422662400,"day":"31 Jan","yr":2015,"done":"FALSE","team":"IA","s":"grn","pc":9,"text":"Housing Benefit","note":"no notes","act":" "},
{"id":343,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":9,"text":"IT","note":"no notes","act":" "},
{"id":344,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":9,"text":"Main Accounting","note":"no notes","act":" "},
{"id":345,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":9,"text":"Payments System","note":"no notes","act":" "},
{"id":346,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":9,"text":"Payroll","note":"no notes","act":" "},
{"id":347,"date":"2015-01-31","ut":1422662400,"day":"31 Jan","yr":2015,"done":"FALSE","team":"IA","s":"grn","pc":9,"text":"Sundry Debtors","note":"no notes","act":" "},
{"id":348,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":9,"text":"Treasury Management","note":"no notes","act":" "},
{"id":349,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":9,"text":"Waste","note":"no notes","act":" "}








];

 $scope.timesPast = function (time) {
        return time.ut <= $scope.tn;
    };
    
     $scope.timesFuture = function (time) {
        return time.ut >= $scope.tn;
    };
    
     $scope.timesNull = function (time) {
        return time.ut >= 0;
    };
    
$scope.teams = [
{"t":"BS","n":"Business Support"},{"t":"CS","n":"Corporate Services"},{"t":"ES","n":"Electoral Services"},{"t":"ETS","n":"Environmental & Technical Services"},{"t":"HS","n":"Housing Services"},{"t":"LS","n":"Leisure Services"},{"t":"PP","n":"Planning Policy"},{"t":"RS","n":"Regulatory Services"},{"t":"SNH","n":"Safer North Hants"}];
});
