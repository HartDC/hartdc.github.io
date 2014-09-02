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
{"id":1,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"SNH","s":"grn","pc":50,"text":"Establish new programme to deliver in schools","note":" ","act":"Arson Reduction Education in Schools"},
{"id":2,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"TRUE","team":"SNH","s":"grn","pc":50,"text":"Scope existing provision","note":"no notes","act":" "},
{"id":3,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"SNH","s":"amb","pc":0,"text":"Establish a programme of training for new users across SNH area","note":" ","act":"SafetyNet Training"},
{"id":4,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"SNH","s":"amb","pc":0,"text":"Establish programme of regular refresher training across the SNH area","note":"no notes","act":" "},
{"id":5,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"FALSE","team":"SNH","s":"amb","pc":0,"text":"Link in with HCC on their SafetyNet plans","note":"no notes","act":" "},
{"id":6,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"SNH","s":"amb","pc":0,"text":"Scope agencies currenly using SafetyNet, and those who should be using it that are not","note":"no notes","act":" "},
{"id":7,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"BS","s":"grn","pc":25,"text":"Implement changes following the EH scanning review","note":" ","act":"Increase efficiency of the Business Support Service"},
{"id":8,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"BS","s":"grn","pc":25,"text":"Increase the number of services with online payment facilities","note":"no notes","act":" "},
{"id":9,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"BS","s":"grn","pc":25,"text":"Reduce paper usage and support other services to do the same","note":"no notes","act":" "},
{"id":10,"date":"2014-07-30","ut":1406678400,"day":"30 Jul","yr":2014,"done":"TRUE","team":"BS","s":"grn","pc":25,"text":"Review EH scanning procedures","note":"no notes","act":"Review now complete - action being taken to implement changes as a result"},
{"id":11,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"BS","s":"amb","pc":0,"text":"Cross skill team to ensure service availability in all areas","note":" ","act":"Strengthen business continuity"},
{"id":12,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"BS","s":"amb","pc":0,"text":"Ensure staffing levels can sustain supported services","note":"no notes","act":" "},
{"id":13,"date":"2014-07-30","ut":1406678400,"day":"30 Jul","yr":2014,"done":"FALSE","team":"BS","s":"amb","pc":0,"text":"Review relationship with main contact centre","note":"no notes","act":" "},
{"id":14,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"BS","s":"amb","pc":0,"text":"Clarify business model of business support unit","note":" ","act":"Full-scale review of the Business Support Unit to align with customer and service needs"},
{"id":15,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"BS","s":"amb","pc":0,"text":"Develop strategic approach to service delivery","note":"no notes","act":" "},
{"id":16,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"BS","s":"amb","pc":0,"text":"Review SLA agreements with internal services","note":"no notes","act":" "},
{"id":17,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"BS","s":"grn","pc":0,"text":"Offer other internal services support options","note":" ","act":"Explore additional opportunities to support services"},
{"id":18,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"BS","s":"grn","pc":0,"text":"Offer third parties support including ACAS, CAB","note":"no notes","act":" "},
{"id":19,"date":"2015-02-05","ut":1423094400,"day":"05 Feb","yr":2015,"done":"FALSE","team":"CS","s":"amb","pc":12,"text":"Cabinet approval","note":" ","act":"Keep any necessary increases in council tax levels to the minimum"},
{"id":20,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":12,"text":"Draft medium term financial strategy","note":"no notes","act":" "},
{"id":21,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":12,"text":"Fees and charges paper","note":"no notes","act":" "},
{"id":22,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":12,"text":"Final draft of budget for approval","note":"no notes","act":" "},
{"id":23,"date":"2015-02-26","ut":1424908800,"day":"26 Feb","yr":2015,"done":"FALSE","team":"CS","s":"amb","pc":12,"text":"Full Council","note":"no notes","act":" "},
{"id":24,"date":"2015-01-20","ut":1421712000,"day":"20 Jan","yr":2015,"done":"FALSE","team":"CS","s":"amb","pc":12,"text":"Overview and Scrutiny","note":"no notes","act":" "},
{"id":25,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"CS","s":"amb","pc":12,"text":"Review of larger contracts","note":"no notes","act":"Review of larger contracts complete with a focus on HR and IT which have undergone structural changes (HR self service, IT cloud hosting)"},
{"id":26,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":12,"text":"Zero base budgeting paper","note":"no notes","act":" "},
{"id":27,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":50,"text":"Analyse existing SLAs used by HCC for basis of review","note":"KPIs set up for SLAs with HVA, CAB, Fleet Phoenix and Inclusion Hampshire","act":"Maintain current levels of funding to voluntary sector"},
{"id":28,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"grn","pc":50,"text":"Create SLAs between HDC and other organisations","note":"no notes","act":" "},
{"id":29,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"CS","s":"gry","pc":0,"text":"Hold first event","note":" ","act":"Run 2 'Hart for Business' events a year"},
{"id":30,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"gry","pc":0,"text":"Hold second event","note":"no notes","act":" "},
{"id":31,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"CS","s":"gry","pc":0,"text":"Prepare for first event","note":"no notes","act":" "},
{"id":32,"date":"2015-01-31","ut":1422662400,"day":"31 Jan","yr":2015,"done":"FALSE","team":"CS","s":"gry","pc":0,"text":"Prepare for second event","note":"no notes","act":" "},
{"id":33,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":33,"text":"Review progress","note":"Engaging in LEP with a North Hampshire Business event scheduled for October","act":"Engage fully with Enterprise M3 Local Enterprise Partnership (LEP)"},
{"id":34,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"CS","s":"grn","pc":33,"text":"Review progress","note":"no notes","act":" "},
{"id":35,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"CS","s":"grn","pc":33,"text":"Review progress","note":"no notes","act":" "},
{"id":36,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":33,"text":"Agree final action plan","note":"Action Plan finalised","act":"Deliver Health and Wellbeing action plan targets within agreed timescales"},
{"id":37,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"CS","s":"grn","pc":33,"text":"Implement plan","note":"no notes","act":" "},
{"id":38,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"grn","pc":33,"text":"Monitor and Evaluate","note":"no notes","act":" "},
{"id":39,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"CS","s":"gry","pc":0,"text":"Finalise action plan","note":" ","act":"Deliver Older Persons action plan targets within agreed timescales"},
{"id":40,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"gry","pc":0,"text":"Implement action plan","note":"no notes","act":" "},
{"id":41,"date":"2014-04-01","ut":1396310400,"day":"01 Apr","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":33,"text":"Go live with Core HR","note":"Go live was completed on time. Operation moved to Belfast","act":"Deliver role out of CoreHR"},
{"id":42,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"grn","pc":33,"text":"Implement additional modules - talent management / personal development","note":"no notes","act":"User acceptance testing on recruitment taking place, looking to go live in August"},
{"id":43,"date":"2015-01-31","ut":1422662400,"day":"31 Jan","yr":2015,"done":"FALSE","team":"CS","s":"grn","pc":33,"text":"Implement rostering for leisure services","note":"no notes","act":"Rostering now to be implemented in January 2015, due to Core HR software upgrade"},
{"id":44,"date":"2014-07-03","ut":1404345600,"day":"03 Jul","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":100,"text":"Annual reaccreditation","note":"Sucessfully gained annual reaccreditation","act":"Obtain Code of Connection approval"},
{"id":45,"date":"2014-07-01","ut":1404172800,"day":"01 Jul","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":100,"text":"Annual IT Health Check","note":"no notes","act":" "},
{"id":46,"date":"2014-06-12","ut":1402531200,"day":"12 Jun","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":100,"text":"Implement initial security recommendations","note":"no notes","act":" "},
{"id":47,"date":"2014-06-01","ut":1401580800,"day":"01 Jun","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":100,"text":"Review 2013 assessment","note":"no notes","act":" "},
{"id":48,"date":"2014-05-22","ut":1400716800,"day":"22 May","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":100,"text":"Update IT Security Policy with initial recommendations","note":"no notes","act":" "},
{"id":49,"date":"2014-09-01","ut":1409529600,"day":"01 Sep","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":25,"text":"Agree spec and design","note":" ","act":"Develop sharepoint infrastructure"},
{"id":50,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":25,"text":"Build Environment","note":"no notes","act":" "},
{"id":51,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"CS","s":"amb","pc":25,"text":"Roll out to staff","note":"no notes","act":" "},
{"id":52,"date":"2014-07-09","ut":1404864000,"day":"09 Jul","yr":2014,"done":"TRUE","team":"CS","s":"amb","pc":25,"text":"Sharepoint Workshops","note":"no notes","act":" "},

{"id":54,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":33,"text":"Review of current CRM provision","note":" ","act":"Review of CRM"},
{"id":55,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"grn","pc":33,"text":"Revise current system or source alternative solution","note":"no notes","act":" "},
{"id":56,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"CS","s":"grn","pc":33,"text":"Scope a fit for purpose solution","note":"no notes","act":" "},


{"id":59,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"grn","pc":66,"text":"Bring on further contracts as they are created","note":" ","act":"Develop contract register"},
{"id":60,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":66,"text":"Publish updated register online","note":"no notes","act":"First Contracts Register published online, includes largest contracts as well as the most recently created contracts"},
{"id":61,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":66,"text":"Review current contract register","note":"no notes","act":" "},
{"id":62,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"grn","pc":0,"text":"Establish if it is in the Council's best interest to continue with the current provider","note":" ","act":"Review of Capita contracts"},
{"id":63,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"CS","s":"grn","pc":0,"text":"Establish legal position on extending contracts","note":"no notes","act":" "},



{"id":67,"date":"2014-08-20","ut":1408492800,"day":"20 Aug","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":50,"text":"Action transferred from Environmental Services to Corporate Services to deliver","note":" ","act":"Offer subsidised 1 year car parking for startup businesses"},
{"id":68,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"CS","s":"grn","pc":50,"text":"Review progress 30 Sept","note":"no notes","act":" "},
{"id":69,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"CS","s":"grn","pc":50,"text":"Review progress 31 Dec","note":"no notes","act":" "},
{"id":70,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"CS","s":"grn","pc":50,"text":"Review progress with Economic Development Officer","note":"no notes","act":"JE090714 -Meeting with EDO on 14/07"},
{"id":71,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Circulate Domestic Abuse Induction Park to partner/interested agencies","note":" ","act":"Increased awareness with partner agencies"},
{"id":72,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Conduct research on existing provision and information","note":" ","act":"Domestic Abuse in the Traveller Community"},
{"id":73,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Produce appropriate literature to raise awareness","note":"no notes","act":" "},
{"id":74,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Provide guidance to other agencies supporting traveller families","note":"no notes","act":" "},
{"id":75,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"grn","pc":0,"text":"Publicise Stoptober and national no smoking day?","note":" ","act":"Undertake smoking cessation programmes"},
{"id":76,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"CS","s":"grn","pc":0,"text":"Smoking in pregnancy?","note":"no notes","act":" "},
{"id":77,"date":"2014-11-01","ut":1414800000,"day":"01 Nov","yr":2014,"done":"FALSE","team":"ES","s":"amb","pc":62,"text":"Door to Door Canvassing","note":" ","act":"Implement Individual Elector Registration"},
{"id":78,"date":"2014-04-01","ut":1396310400,"day":"01 Apr","yr":2014,"done":"TRUE","team":"ES","s":"amb","pc":62,"text":"Finish Testing and implementation of new EMS server","note":"no notes","act":" "},
{"id":79,"date":"2014-07-08","ut":1404777600,"day":"08 Jul","yr":2014,"done":"TRUE","team":"ES","s":"amb","pc":62,"text":"Local Data Matching","note":"no notes","act":"Delayed due to EMS system issues"},
{"id":80,"date":"2014-08-08","ut":1407456000,"day":"08 Aug","yr":2014,"done":"FALSE","team":"ES","s":"amb","pc":62,"text":"New Format HEF and ITR mailing","note":"no notes","act":"System issues are preventing the complete issue and accurate processing of the new forms"},
{"id":81,"date":"2014-07-03","ut":1404345600,"day":"03 Jul","yr":2014,"done":"TRUE","team":"ES","s":"amb","pc":62,"text":"Receipt of matched data from DWP","note":"no notes","act":" "},
{"id":82,"date":"2014-12-01","ut":1417392000,"day":"01 Dec","yr":2014,"done":"FALSE","team":"ES","s":"amb","pc":62,"text":"Register Publication","note":"no notes","act":" "},
{"id":83,"date":"2014-06-27","ut":1403827200,"day":"27 Jun","yr":2014,"done":"TRUE","team":"ES","s":"amb","pc":62,"text":"Transfer existing registers to DWP","note":"no notes","act":" "},
{"id":84,"date":"2014-06-10","ut":1402358400,"day":"10 Jun","yr":2014,"done":"TRUE","team":"ES","s":"amb","pc":62,"text":"Transition of old non verified application process to new verified application process ( online - new forms )","note":"no notes","act":"Delayed due to system issues with EMS supplier"},
{"id":85,"date":"2014-05-25","ut":1400976000,"day":"25 May","yr":2014,"done":"TRUE","team":"ES","s":"grn","pc":87,"text":"EPE Count","note":" ","act":"Deliver Combined EPE - District - Parish elections"},
{"id":86,"date":"2014-04-02","ut":1396396800,"day":"02 Apr","yr":2014,"done":"TRUE","team":"ES","s":"grn","pc":87,"text":"Hold meeting for Party Agents and Individual Candidates","note":"no notes","act":" "},
{"id":87,"date":"2014-04-14","ut":1397433600,"day":"14 Apr","yr":2014,"done":"TRUE","team":"ES","s":"grn","pc":87,"text":"Issue Pollcards","note":"no notes","act":" "},
{"id":88,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"ES","s":"grn","pc":87,"text":"Issue Postal Votes","note":"no notes","act":" "},
{"id":89,"date":"2014-05-23","ut":1400803200,"day":"23 May","yr":2014,"done":"TRUE","team":"ES","s":"grn","pc":87,"text":"Local Count","note":"no notes","act":" "},
{"id":90,"date":"2014-05-22","ut":1400716800,"day":"22 May","yr":2014,"done":"TRUE","team":"ES","s":"grn","pc":87,"text":"Polling Day","note":"no notes","act":" "},
{"id":91,"date":"2014-04-11","ut":1397174400,"day":"11 Apr","yr":2014,"done":"TRUE","team":"ES","s":"grn","pc":87,"text":"Publish Notice of election","note":"no notes","act":" "},
{"id":92,"date":"2014-11-24","ut":1416787200,"day":"24 Nov","yr":2014,"done":"FALSE","team":"ES","s":"grn","pc":87,"text":"Submission of claim to ECU for costs of EPE election ( & invoices to Parishes)","note":"no notes","act":" "},
{"id":93,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"ES","s":"gry","pc":0,"text":"Produce plan for 2015 based on 2014","note":" ","act":"Planning for 2015 UK General Election"},
{"id":94,"date":"2014-12-10","ut":1418169600,"day":"10 Dec","yr":2014,"done":"FALSE","team":"ES","s":"gry","pc":0,"text":"Review lessons learnt from 2014 EPE elections","note":"no notes","act":" "},
{"id":95,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":20,"text":"Agree communications programme aimed at reducing contamination of recycling and increased participation in recycling.","note":"JE090714 - Draft programme produced, needs to be agreed with portfolio holder before being finalised.","act":"Increase recycling rates by 1% a year"},
{"id":96,"date":"2015-01-31","ut":1422662400,"day":"31 Jan","yr":2015,"done":"FALSE","team":"ETS","s":"amb","pc":20,"text":"Introduce textile collection banks in agreed locations","note":"no notes","act":"JE090714 - Having met with the charities, implementation of this action has been delayed to allow for the options to be reviewed. It is anticipated that a report will be taken to Cabinet in Sept/ Oct 14."},
{"id":97,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"TRUE","team":"ETS","s":"amb","pc":20,"text":"Number of residents subscribed to garden waste service to be 7500","note":"no notes","act":"JE090714 - The number of customers subscribed to the garden waste service on 4th July 2014 = 7523. It is hoped that introduction of the option to pay by direct debit later this year, making it easier for customers to pay will help retain these customers."},
{"id":98,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":20,"text":"Seek Cabinet approval to ban recycled materials from residual waste","note":"no notes","act":"JE090714 - Anticipate report to Cabinet in Sept/Oct"},
{"id":99,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"amb","pc":20,"text":"Working with HCC to explore opportunities to recycle new materials","note":"no notes","act":"JE090714 - The Waste and Recycling Manager is a member of the Project Integra Working Group which is exploring these opportunities. The work of the group is monitored by the Project Integra board."},
{"id":100,"date":"2015-01-30","ut":1422576000,"day":"30 Jan","yr":2015,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Commence works","note":" ","act":"Flood Alleviation Scheme – North Warnborough"},
{"id":101,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Flood relief channel operational.","note":"no notes","act":" "},
{"id":102,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Landowner consent obtained to undertake the works.","note":"no notes","act":"JE 090714- Land has recently be sold, Capita negotiating with land owner."},
{"id":103,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"ETS","s":"grn","pc":0,"text":"Quotations obtained.","note":"no notes","act":" "},
{"id":104,"date":"2015-01-31","ut":1422662400,"day":"31 Jan","yr":2015,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Appoint contractor and supervise works","note":" ","act":"Flood Alleviation Scheme – Hartley Wintney"},
{"id":105,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Complete design and tender works","note":"no notes","act":" "},
{"id":106,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Obtain Environment Agency (EA) approval for works and secure funding","note":"no notes","act":"JE090714 - Allocation of funding has been agreed by EA, meeting with EA on 110714 to consider programme for implementation. Available options need to be reviewed to accomodate land owner and environmental constraints."},
{"id":107,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Works complete","note":"no notes","act":" "},
{"id":108,"date":"2014-04-01","ut":1396310400,"day":"01 Apr","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Implement HCC agency for weed control on the highway","note":"HCC have deferred decsion until","act":"Development of Streets and Grounds Maintenance Service"},
{"id":109,"date":"2014-04-01","ut":1396310400,"day":"01 Apr","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Implement programme of cleaning street signs","note":"no notes","act":" "},
{"id":110,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Increase number of grass cuts during peak growing season May/June","note":"no notes","act":" "},
{"id":111,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Install on street recycling bins in 12 locations","note":"no notes","act":" "},
{"id":112,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Work with parish councils to identify joint working opportunities for streets and grounds maintenance","note":"no notes","act":" "},



{"id":116,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"ETS","s":"red","pc":50,"text":"Contract variation agreed","note":" ","act":"In partnership with parish councils, review provision of bus shelters by July 2014"},
{"id":117,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"ETS","s":"red","pc":50,"text":"Review options and agree way forward","note":"no notes","act":"JE090714 - It has been agreed that the existing contract will be renewed on an annual basis until 2016 when it is hoped that there will be an opportunity to tender a joint contract with neighbouring authorities, including Rushmoor and Basingstoke."},
{"id":118,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Agree priorities for Fleet","note":"JE090714 - Parish Council have confirmed support for Knoll Road scheme which will be delivered in next 12 months. Schemes to be delivered in Fleet by April 2015 include: 1.Review success of experimental order on Fleet Road 2. Old Cove Road 3. Brick Lane 4. Leawood Road 5. Rochester Grove 6. Velmead School.","act":"Implement within 12 months any traffic management and / or parking schemes agreed with parish councils"},

{"id":120,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Deliver agreed scheme for Hook","note":"no notes","act":"JE090714 - Meeting with Hook Parish Council on 100714, to consider options."},
{"id":121,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Deliver agreed scheme for Odiham","note":"no notes","act":"JE090714 - experimental order, surface markings and signs are in place. Enforcement of new restrictions to commence at the end of July."},
{"id":122,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Work with other Parish Council’s to identify and deliver initiatives","note":"no notes","act":"JE090714 - Meetings are scheduled with Hartley Wintney, Hook and Odiham Parish Council."},
{"id":123,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Agree programme and budget for implementation.","note":" ","act":"Develop On line access to ETS services"},
{"id":124,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Deliver initiatives in accordance with agreed programme.","note":"no notes","act":" "},
{"id":125,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"ETS","s":"amb","pc":0,"text":"Identify opportunities.","note":"no notes","act":"JE090714 - Options being considered."},
{"id":126,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"gry","pc":0,"text":"Allocate officer time as necessary to support project Integra initiatives, and take a proactive role in the partnership","note":"JE090714 -Action Plan was approved by Cabinet in May 2014. Officers are working closely with PI to ensure the actions in the plan are delivered.","act":"Deliver Project Integra action plan with agreed timescales"},
{"id":127,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"ETS","s":"gry","pc":0,"text":"Attend all Project Integra strategy officer and board meetings","note":"no notes","act":"JE090714 -Ongoing"},

{"id":129,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Hold a bi-annual Housing Management Forum","note":"140819 - Housing Management Forum was held in February 2014 with the next one planned for 23rd October.","act":"Develop partnership working to support intelligence gathering, consultation and partner engagement while enabling resources to be effectively targeted"},
{"id":130,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Hold a Private Landlord’s Forum","note":"no notes","act":"140819 - Rent Deposit Officer phased return to work. Milestone date may be amended to ensure capacity is there to undertake all necessary arrangements. PT"},
{"id":131,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Hold a PRS landlord Steering Group","note":"no notes","act":"140819 - PRS landlord steering group has been arranged for 4th September 2014. PT"},
{"id":132,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":40,"text":"Hold an overarching Housing Forum","note":"no notes","act":"140819 - Housing Forum held on 19th June and a key element of our further consultation associated with delivering a new Housing Strategy for Hart.  PT"},
{"id":133,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":40,"text":"Hold quarterly Homelessness Forum","note":"no notes","act":"140819 - Homelessness Forum was held ahead of schedule in March 2014. A further forum will be held once the Preventing Homelessness Strategy is published in the autumn. PT"},
{"id":134,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":22,"text":"Cabinet Approval","note":"14 08 13 Planned to take Housing Strategy to Cabinet and Full Council in December","act":"Publish new Housing Strategy incorporating private sector housing and tenancy strategies"},
{"id":135,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":22,"text":"Carry out consultation with stakeholders & customers to support establishing gaps and priorities.","note":"no notes","act":"14 08 13 Draft Housing Strategy circulated to Housing officers for comment before final draft circulated more widely. "},
{"id":136,"date":"2014-11-15","ut":1416009600,"day":"15 Nov","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":22,"text":"Carry out consultation with stakeholders and customers to consult on the draft document","note":"no notes","act":"14 08 13 Wider consultation on final draft planned for September"},
{"id":137,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":22,"text":"Combine and Publish overarching Housing Strategy","note":"no notes","act":" "},
{"id":138,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":22,"text":"Draft Housing Strategy completed","note":"no notes","act":"14 08 13 Draft Housing Strategy circulated to Housing Officers for comment before final draft circulated more widely."},
{"id":139,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":22,"text":"Review demographics, housing market pressures, affordability, and housing needs and complete data collection and analysis","note":"no notes","act":"140702 - Review of Homelessness & Housing Strategy Evidence base was published on 10th June 2014 and incorporates analysis and research findings."},
{"id":140,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":22,"text":"Review Private Sector Housing Strategy","note":"no notes","act":"14 08 13 Update comments from the review have been incorporated into the draft Housing Strategy 140702 - Private Sector Renewal Strategy will be updated in the next couple of weeks."},
{"id":141,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":22,"text":"Review Tenancy Strategy","note":"no notes","act":"14 08 13 First draft of review completed and to be circulated to housing officers for comment in the first instance before being circulated more widely in September. (Links into Housing Strategy so both being reviewed together)."},
{"id":142,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":22,"text":"Take to O&S","note":"no notes","act":"14 08 13 On target to take to O&S in November"},

{"id":144,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":0,"text":"Review progress 30 Sept","note":" ","act":"Contribute to the LDF process"},
{"id":145,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":0,"text":"Review progress 31 March","note":"no notes","act":" "},
{"id":146,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"56 High Street, Odiham – 25% - 5 units - 2015/16","note":"140702 - reduced level of AH resulted from viability assessment.","act":"Ensure affordable housing on development sites is maximised"},
{"id":147,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Dilly Lane – Phase 2 – 40% AH 30 units in 2014/15","note":"no notes","act":"14 08 13 First properties have been advertised in August 2014"},
{"id":148,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Eversley – 100% 31 October 2014","note":"no notes","act":"14 08 13 site progressing well. Affordable housing expected in September 2014"},
{"id":149,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Hatchwood, Odiham – 40% AH - 36 units delivering 2014/15 and 2015/16","note":"no notes","act":"140702 - reduced level of AH resulting from viability assessment."},
{"id":150,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":16,"text":"Larmer Close – 100% AH - 2 units in 2014/15","note":"no notes","act":"14 08 13 Due to be completed Dec 2014"},
{"id":151,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":16,"text":"Lismoyne House – 100% AH - 12 units Sept-Dec2014","note":"no notes","act":"140702 - complete - 100% AH delivered (regeneration of a former office building)"},
{"id":152,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":0,"text":"QEB phases 1 & 2 – 30% AH, delivering over the next 5 years - 52 units from Aug 2014 – March 2015","note":"no notes","act":"14 08 13 – 12 properties due in October 2014"},

{"id":154,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":0,"text":"Rotherwick – 6 units 2014/15","note":"no notes","act":"14 08 13 Awaiting conditions to be discharged"},

{"id":156,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":0,"text":"Sandhurst Rd, Yateley - 5% - 8 units delivering jan 2015 onwards","note":"no notes","act":"14 08 13 site progressing well and marketing approach for the 8 units being developed"},
{"id":157,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":0,"text":"Swan Lake View – 30% - 5 units April 2014","note":"no notes","act":"14 08 13 All AH units allocated"},
{"id":158,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":0,"text":"The Lea – 100% AH - 2 units in 2014/15","note":"no notes","act":"14 08 13 Due to be completed Dec 2014"},
{"id":159,"date":"2015-02-28","ut":1425081600,"day":"28 Feb","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":0,"text":"Wickham Ct – 100% AH - 41 units Sept-Dec 2014","note":"no notes","act":"14 08 13 Due to be completed Feb 2015"},
{"id":160,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"gry","pc":0,"text":"Review progress 30 Sept","note":" ","act":"Monitor the impact of the introduction of CIL on affordable housing delivery"},
{"id":161,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"gry","pc":0,"text":"Review viability factors associated with proposed CIL in the context of affordable housing delivery.","note":"no notes","act":"Monitor the impact of the introduction of CIL on affordable housing delivery"},

{"id":163,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"gry","pc":0,"text":"Agree details of approach with Sentinel and commence project","note":"140819 - approach has been agreed, legal and nominations agreement developed and with Sentinel HA. Issues are arising with availability of properties within the association's budget ceiling (£200k) and meeting the other parameters of the scheme and the association's policies. PT requested further advice and information from the association. Looking to develop broader scope to the project.","act":"Work with Sentinel to purchase homes on the open market to be used as affordable housing"},
{"id":164,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"gry","pc":0,"text":"Bring 5 2-bed ESP properties into use as affordable housing","note":"no notes","act":"140819 - Due to housing market and identifying viable purchases within the scope of the project, may need to consider other bedroom sizes and properties that are not necessarily in Blackwater and Yateley (where we had been targeting). "},
{"id":165,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":50,"text":"Draft report","note":"14 08 13 Report complete and ready to progress","act":"Review Hart owned land and provide recommendations on potential development sites"},
{"id":166,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":50,"text":"Recommend potential development sites","note":"no notes","act":" "},
{"id":167,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":0,"text":"HS1403a Eversley site completion","note":"14 08 13 Due to complete in Sept 2014","act":"Deliver 2 housing rural exception sites"},
{"id":168,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":0,"text":"HS1403b Rotherwick site completion","note":"no notes","act":"140819 - slow start due to drainage problems. These are now being resolved but may affect timescales for delivery. Planning conditions being discharged."},

{"id":170,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":60,"text":"Cabinet approval","note":"Amended date in Covalent. New timescale to bring the strategy to Cabinet in October.","act":"Publish new Preventing Homelessness Strategy"},
{"id":171,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":60,"text":"Carry out consultation on draft document","note":"no notes","act":"140702 - consulting via review of homelessness priorities and a draft action plan template."},
{"id":172,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":60,"text":"Complete review of homelessness","note":"no notes","act":"140702 -review published on 10th June."},
{"id":173,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":60,"text":"Draft Homelessness Strategy completed","note":"no notes","act":"140819 - working to an interim Homelessness Strategy position using the Housing Service Plan. Draft document completed and views sought from Joint CX. Will need to be revised accordingly and following consultation with Cabinet Member for Housing regarding a foreword. "},
{"id":174,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":60,"text":"Publish new Preventing Homelessness Strategy","note":"no notes","act":"Amended date in Covalent - new timescale for strategy to be published in October."},
{"id":175,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":50,"text":"Agree timeframes","note":"140819 - final timeframe agreed with software provider. Go live end of October. Stakeholder seminars arranged and communications plan developed. All on target.","act":"Implement new Allocations Policy for Hart"},
{"id":176,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":50,"text":"Review Progress","note":"no notes","act":" "},

{"id":178,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Develop joint working across the service to ensure a joined up approach to Private Sector Access and to support a comprehensive coherent ‘landlord and tenant' offer","note":"140819 - Work underway to support a joined up approach, and outcomes from the steering group, surveys and visits to letting agents will further support this. Private Sector Housing Strategy will be incorporated in the wider Housing Strategy to ensure clear strategic links across the service.","act":"Develop and implement a new Landlord Offer for PRS landlords"},
{"id":179,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Hold a Private Landlords Steering group","note":"no notes","act":"140819 - PRS landlord steering group will be held on 4th September."},
{"id":180,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"TRUE","team":"HS","s":"grn","pc":40,"text":"Investigate the long term viability of a Local Lettings Agency approach for Hart","note":"no notes","act":"140819 - Initial landlord feedback has provided views regarding options that might be worth considering in a future landlord offer. However - moving to an income generating service will not be appropriate within the life of this Service Plan."},
{"id":181,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Reduce use of Cash Deposits","note":"no notes","act":"140819 - Housing Needs Service will monitor the use of cash deposits and the position now is that the Council offers a bond only product (save in exceptional circumstances). The visiting of all letting agents in the district who have not been prepared to accept cashless bonds may support this work further."},
{"id":182,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Review and determine the potential role for a PSL Scheme to run alongside the Rent Bond Scheme","note":"no notes","act":"140819 - Met with Mears to discuss PSL Schemes and what they may be able to offer Hart. Established earlier options no longer viable."},
{"id":183,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Review and develop approach to recovery of outstanding rent deposit debts","note":"no notes","act":"140819 Rent Deposit Officer has now returned and is working through the outstanding debts owed to the Council through the Rent Deposit loans."},
{"id":184,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":40,"text":"Review current systems in place for Rent Deposit Scheme","note":"no notes","act":"140702 - task group set upand met in April. Review of existing way of working undertaken and new systems are now being put in place to make the system more robust, including moving to a cashless bond only product rather than Rent Deposit Scheme. (140819 - second task group meeting to review progress on 8th Sept)"},
{"id":185,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":40,"text":"Rewrite Cashless Bond agreements and set out clear procedures for the scheme","note":"no notes","act":"140702 - New Bonds written by Legal and ready for implementation to all new clients and will be rolled out to replace existing bonds in the coming months."},
{"id":186,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":40,"text":"Sustain existing access to PRS","note":"no notes","act":"140819 - Continued access to PRS through a positive and proactive approach within the Housing Options team. Rent Deposit Officer has returned to work which will free up capacity to enable the Homelessness Prevention Officer to work with PRS landlords to develop and sustain access to the sector."},
{"id":187,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":40,"text":"Visit letting agents in the district to discuss Cashless Bonds","note":"no notes","act":"140819 - visits well underway - all key Letting Agents will have been visited by the date of Sept Service Board. Visits are to discuss cashless bond scheme and understand why some branches of national chains work with the local authority while others do not, while developing our relationship with the wider PRS."},
{"id":188,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":33,"text":"Hold quarterly partnership liaison meetings between HB, CAB and Housing","note":"Meeting arranged for end of September and will continue quarterly","act":"Work in partnership to raise awareness of impacts of welfare reforms"},
{"id":189,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":33,"text":"Progress the housing aims of the Hart Local Support Services Framework action plan","note":"no notes","act":"Meeting arranged for end of September as part of the quarterly monitoring and will pick up on progressing the aims."},
{"id":190,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":33,"text":"Survey Registered Providers on impacts and responses","note":"no notes","act":"140702 - RPs provided some feedback as part of the homelessness review, however, information was patchy. Intelligence from Sentinel has improved. "},
{"id":191,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":33,"text":"Discuss findings","note":" ","act":"Review Empty Homes work"},
{"id":192,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":33,"text":"Research options","note":"no notes","act":"140819 - Housing Projects Officer has completed research into potential options and will discuss findings with HoS in Sept. PT"},
{"id":193,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":33,"text":"Review progress","note":"no notes","act":" "},
{"id":194,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":25,"text":"Review progress - Q1","note":"140702 - work between Housing Services, Revs & Bens and Sentinel Housing Association is ongoing to identify households to target, and understand what available opportunities we may be able to develop to encourage down-sizing. This is linked to removal of Spare Room Subsidy impacts, under-occupying tenants in arrears, and using the Housing Register to identify under-occupancy.","act":"Continue to work with housing associations to reduce under-occupation"},
{"id":195,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":25,"text":"Review progress - Q2","note":"no notes","act":" "},
{"id":196,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"grn","pc":25,"text":"Review progress - Q3","note":"no notes","act":" "},
{"id":197,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":25,"text":"Review progress - Q4","note":"no notes","act":" "},
{"id":198,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":50,"text":"Review progress","note":"140702 - PT has been working closely with HCC to influence equalities impact assessment and highlight concerns. More recently, PT now undertaking a secondment with Adult Services for 2 days per week as Housing & Support Transformation Lead with a remit to remodel socially excluded cluster services across the 11 districts.","act":"Work with Prevention and Intervention team at County to review a section of support services (Supporting People)"},
{"id":199,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":50,"text":"Review Progress","note":"no notes","act":" "},

{"id":201,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"amb","pc":20,"text":"Climate Energy undertaken at least 4 promotional presentations at local events and forums","note":"140819 - due to their poor performance and delivery, notice has been served on Climate Energy and we will cease working with then in October so no further presentations anticipated.","act":"Implement HECA Plan"},
{"id":202,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"FALSE","team":"HS","s":"amb","pc":20,"text":"Commence area based work on poorly insulated homes","note":"no notes","act":"140813 - DECC announced on 25/7/14 that GDHIF funding has run out so trial target areas will now not take place as there is no funding available to residents."},
{"id":203,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"TRUE","team":"HS","s":"amb","pc":0,"text":"Identify areas for area based programmes in line with the HECA Action Plan","note":"no notes","act":"June 2014 - There has been a change in funding available for energy efficiency measures. ECO funding which would have provided free measures is no longer available. As part of Energy Action North Hampshire scheme areas are being identified to target with Green Deal Home Improvement Fund (GDHIF) funding. However residents will have to find 25% of cost of works so may not have uptake we had anticipated for lower income households. Trial target areas have been identified."},

{"id":205,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"amb","pc":0,"text":"Improve insulation in 250 properties in Hart","note":"no notes","act":"13 August 2014 - no funding available currently to residents making target unrealistic."},

{"id":207,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"FALSE","team":"HS","s":"amb","pc":0,"text":"Review the current HECA action plan in light of changes to govt funding eligibility","note":"no notes","act":"140819 - The targets set in the HECA action plan are now unrealistic due to changes in government funding. DECC announced on 25/7/14 that GDHIF funding has been cut, following the end of ECO - so currently no funding available to residents."},

{"id":209,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":50,"text":"Review progress 30 Sept","note":"Supporting People(SP) have extended the Handy Person contract from September 2014 to 31st March 2015 so we will need to review the situation again once SP cuts finalised.","act":"Investigate options for the continuation of a handypersons service for Hart"},
{"id":210,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":50,"text":"Review progress 31 March","note":"no notes","act":" "},
{"id":211,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"gry","pc":0,"text":"Distribute 150 prevention leaflets","note":"Leaflets are being distributed by the HIA to all clients they visit and are available in reception and will be distrubuted at the Falls Awreness event.","act":"Continue to assist in the local HCC/NHS falls prevention initiative"},
{"id":212,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"HS","s":"gry","pc":0,"text":"Facilitate an event to raise awareness of Falls Prevention","note":"no notes","act":"A Falls Awareness event will be run in Autumn/Winter."},
{"id":213,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":50,"text":"Review progress 30 Sept","note":"It has not been confirmed whether another round of Switch Hampshire will be taking place. In the mean time the website directs residents to Big Community Switch which is a nationwide switching scheme.","act":"Take part in the HCC Collective Switching initiative"},
{"id":214,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":50,"text":"Review progress 31 March","note":"no notes","act":" "},
{"id":215,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"TRUE","team":"HS","s":"grn","pc":50,"text":"Review progress 30 Sept","note":"We have given notice to our ECO partner Climate Energy due to poor performance and delivery so Energy Action North Hampshire will be closing in October 2014. GDHIF funding has also been cut so currently no funding available to residents. We will review the position in relation to Green Deal and ECO in October when our partnership with Climate Energy ends.","act":"Work with ECO partner to improve energy efficiency"},
{"id":216,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"HS","s":"grn","pc":50,"text":"Review progress 31 March","note":"no notes","act":" "},
{"id":217,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"TRUE","team":"IA","s":"grn","pc":100,"text":"Review Complete","note":" ","act":"Fraud Risk Assessment"},

{"id":219,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"TRUE","team":"IA","s":"grn","pc":100,"text":"Review Started","note":"no notes","act":" "},


{"id":222,"date":"2014-06-23","ut":1403481600,"day":"23 Jun","yr":2014,"done":"TRUE","team":"IA","s":"grn","pc":100,"text":"Review Started","note":"no notes","act":" "},

{"id":224,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"IA","s":"amb","pc":0,"text":"Review Complete","note":" ","act":"Payroll"},
{"id":225,"date":"2014-09-08","ut":1410134400,"day":"08 Sep","yr":2014,"done":"FALSE","team":"IA","s":"amb","pc":0,"text":"Review in Progress","note":"no notes","act":" "},
{"id":226,"date":"2014-09-01","ut":1409529600,"day":"01 Sep","yr":2014,"done":"FALSE","team":"IA","s":"amb","pc":0,"text":"Review Started","note":"no notes","act":" "},



























{"id":254,"date":"2014-04-01","ut":1396310400,"day":"01 Apr","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":50,"text":"Adoption of project plan and philosophy of use","note":" ","act":"Build a replacement for the Hart Leisure Centre"},
{"id":255,"date":"2014-10-01","ut":1412121600,"day":"01 Oct","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":50,"text":"Agree core facility mix","note":"no notes","act":" "},
{"id":256,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":50,"text":"Agree delivery agreement with preferred operator","note":"no notes","act":" "},
{"id":257,"date":"2014-07-01","ut":1404172800,"day":"01 Jul","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":50,"text":"Enter into framework procurement process and develop specification","note":"no notes","act":"Specification developed, currently entering final stage of the tender process (10/07/2014)"},
{"id":258,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":50,"text":"Develop action plan in conjunction with LS1401","note":" ","act":"Upgrade Frogmore Leisure Centre"},
{"id":259,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":50,"text":"Draft proposals for publication in Autumn 2014","note":"no notes","act":" "},
{"id":260,"date":"2014-06-01","ut":1401580800,"day":"01 Jun","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":75,"text":"Develop action plan","note":" ","act":"Create an activity programme for the 26 – 35 year olds"},
{"id":261,"date":"2014-07-01","ut":1404172800,"day":"01 Jul","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":75,"text":"Implement","note":"no notes","act":"Scheme developed and in place"},
{"id":262,"date":"2014-05-01","ut":1398902400,"day":"01 May","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":75,"text":"Market research","note":"no notes","act":" "},
{"id":263,"date":"2014-10-01","ut":1412121600,"day":"01 Oct","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":75,"text":"Review","note":"no notes","act":" "},
{"id":264,"date":"2014-11-01","ut":1414800000,"day":"01 Nov","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":25,"text":"Develop action plan","note":" ","act":"Create an activity programme for overweight under 11’s"},
{"id":265,"date":"2015-02-01","ut":1422748800,"day":"01 Feb","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":25,"text":"Implement","note":"no notes","act":" "},
{"id":266,"date":"2014-09-01","ut":1409529600,"day":"01 Sep","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":25,"text":"Market research","note":"no notes","act":"Milestone completed"},
{"id":267,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":25,"text":"Review","note":"no notes","act":" "},
{"id":268,"date":"2014-06-01","ut":1401580800,"day":"01 Jun","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":100,"text":"Develop programme/Market","note":" ","act":"To develop a revised accessible activity programme for the ageing and disadvantaged"},
{"id":269,"date":"2014-08-01","ut":1406851200,"day":"01 Aug","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":100,"text":"Implement","note":"no notes","act":"Programme developed ahead of schedule now implemented and in place"},
{"id":270,"date":"2014-05-01","ut":1398902400,"day":"01 May","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":100,"text":"Review","note":"no notes","act":" "},
{"id":271,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Agree a date for adoption","note":" ","act":"Adopt Edenbrook Country Park (ECP)"},
{"id":272,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"To agree snagging items with the developer","note":"no notes","act":" "},
{"id":273,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":13,"text":"LS1406 Adopt Edenbrook Country Park (ECP)","note":" ","act":"Develop the role of Edenbrook Country Park as an active leisure site with a visitor centre and allotments"},
{"id":274,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":13,"text":"LS1407 Implement a Site management plan for Edenbrook Country Park","note":"no notes","act":"Delay due to non-adoption of land presently owned by the developer"},
{"id":275,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":13,"text":"LS1408 Plan Capital Works Programme - ECP","note":"no notes","act":" "},
{"id":276,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":50,"text":"Complete and commence implementation","note":"Delays to the transfer of the site from planning application. Likely date rescheduled to Sept 2014","act":"Implement a Site management plan for Edenbrook Country Park"},
{"id":277,"date":"2014-05-01","ut":1398902400,"day":"01 May","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":50,"text":"Initiate discussions with developer","note":"no notes","act":" "},
{"id":278,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":33,"text":"Commence tender process","note":" ","act":"Plan Capital Works Programme - ECP"},
{"id":279,"date":"2014-12-01","ut":1417392000,"day":"01 Dec","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":33,"text":"Complete design","note":"no notes","act":" "},
{"id":280,"date":"2014-08-31","ut":1409443200,"day":"31 Aug","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":33,"text":"Initiate design of visitor centre and associated elements","note":"no notes","act":"Design in progress"},
{"id":281,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":50,"text":"Stage 4 completion","note":"Stage 4 of restoration complete","act":"Complete Fleet Pond restoration project stage 4 and initiate stage 5"},
{"id":282,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":50,"text":"Stage 5 initiation","note":"no notes","act":"Stage 5 not due to be completed until 2015/16"},
{"id":283,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"TRUE","team":"LS","s":"grn","pc":33,"text":"LS1409 Complete Fleet Pond restoration project stage 4 and initiate stage 5","note":"stage 4 of restoration complete","act":"Complete restoration of Fleet Pond achieve Green Flag status for it"},
{"id":284,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":33,"text":"LS1410 Implement a Fleet Pond Visitor Strategy","note":"no notes","act":" "},
{"id":285,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":33,"text":"LS1411 Achieve Green Flag status for Fleet Pond","note":"no notes","act":" "},
{"id":286,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":50,"text":"Commence implementation","note":" ","act":"Implement a Fleet Pond Visitor Strategy"},
{"id":287,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":50,"text":"Complete phase 1","note":"no notes","act":" "},
{"id":288,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Implement action plan and mitigation measures","note":" ","act":"Achieve Green Flag status for Fleet Pond"},
{"id":289,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Produce action plan","note":"no notes","act":" "},
{"id":290,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"LS","s":"grn","pc":33,"text":"Adoption subject to triggers in S106 agreement","note":"Adoption complete","act":"Complete adoption of QE2 Fields at Dilly Lane Hartley Wintney"},
{"id":291,"date":"2015-02-28","ut":1425081600,"day":"28 Feb","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":33,"text":"Install maze following adoption of site","note":"no notes","act":" "},
{"id":292,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":33,"text":"Produce maze installation plan","note":"no notes","act":" "},
{"id":293,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Determine project viability.","note":" ","act":"Cricket Hill Pond LNR (Yateley)"},
{"id":294,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Develop plan and identify funding opportunities.","note":"no notes","act":" "},
{"id":295,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Complete yr2 report","note":"Report due end of September as a result of awaiting information from local partners (schools)","act":"Biodiversity Action Plan"},
{"id":296,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Analysis of trial","note":" ","act":"Hazeley Heath Grazing"},
{"id":297,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"LS","s":"grn","pc":0,"text":"Complete year 5","note":"no notes","act":" "},


{"id":300,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Completion of consultation on draft plan","note":" ","act":"Complete and adopt the Local Plan in 2015 and use it to steer development to the right places"},
{"id":301,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Prepare options for consultation","note":"no notes","act":" "},
{"id":302,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Publish draft plan","note":"no notes","act":" "},
{"id":303,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Review action progress","note":" ","act":"Indentify potential rural exception sites through the SHLAA process and local communities"},
{"id":304,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Adopt CIL","note":" ","act":"Produce an infrastructure schedule to identify and meet community infrastructure needs"},
{"id":305,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Prepare a draft infrastructure schedule","note":"no notes","act":" "},
{"id":306,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"PP","s":"gry","pc":0,"text":"Ensure officers are able to offer active support to communities","note":" ","act":"Support local community led improvement initiatives in town and village centres including Fleet Future"},
{"id":307,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"PP","s":"gry","pc":0,"text":"Provide advice for local communities","note":"no notes","act":" "},
{"id":308,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Review action progress","note":" ","act":"Offer appropriate support to town and parish councils developing Neighbourhood Plans"},
{"id":309,"date":"2014-06-30","ut":1404086400,"day":"30 Jun","yr":2014,"done":"FALSE","team":"PP","s":"amb","pc":0,"text":"Review action progress","note":" ","act":"Invest money from the Community Infrastructure Levy in local projects, including traffic and transport improvement"},
{"id":310,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"TRUE","team":"RS","s":"grn","pc":100,"text":"produce draft","note":" ","act":"Food Safety Enforcement Service Plan"},
{"id":311,"date":"2014-05-01","ut":1398902400,"day":"01 May","yr":2014,"done":"TRUE","team":"RS","s":"grn","pc":100,"text":"produce draft","note":" ","act":"Health and Safety Enforcement Service Plan"},
{"id":312,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"TRUE","team":"RS","s":"grn","pc":100,"text":"Barking dogs","note":" ","act":"Undertake events and publicity in conjunction with Noise Action Week 2014"},
{"id":313,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"TRUE","team":"RS","s":"grn","pc":100,"text":"Housing Associations","note":"no notes","act":" "},
{"id":314,"date":"2014-05-31","ut":1401494400,"day":"31 May","yr":2014,"done":"TRUE","team":"RS","s":"grn","pc":100,"text":"TENS & Licensed premises","note":"no notes","act":" "},
{"id":315,"date":"2014-06-01","ut":1401580800,"day":"01 Jun","yr":2014,"done":"TRUE","team":"RS","s":"grn","pc":100,"text":" To offer free bite-size training to all businesses in Hart on health & safety","note":" ","act":"Offer 50 free health and safety training places to businesses each year"},
{"id":316,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"TRUE","team":"RS","s":"grn","pc":100,"text":"To promote National Food Safety Week 2014","note":" ","act":"Undertake events and publicity in conjunction with National Food Safety Week"},
{"id":317,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"TRUE","team":"RS","s":"grn","pc":100,"text":"To support local food bank charities by promoting the service and encouraging individual and business contributions.","note":"no notes","act":" "},
{"id":318,"date":"2015-03-01","ut":1425168000,"day":"01 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":" To offer a free E.Coli workshop to all food premises in Hart","note":" ","act":"To undertake free workshops on food hygiene topics to local businesses"},
{"id":319,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"TRUE","team":"RS","s":"grn","pc":100,"text":"To deliver two programmes of cookery classes to the over 55’s within the District.","note":" ","act":"Over 55’s mens cookery classes"},
{"id":320,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Deliver the Workplace Wellbeing Charter and seek to further promote and expand the scheme in Hampshire","note":" ","act":"Assist 10 employers a year to achieve Workplace Wellbeing Charter status"},
{"id":321,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":25,"text":"Continuation of dog fouling and littering campaign","note":" ","act":"Reduce dog fouling in monitored areas by 40% a year"},
{"id":322,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":25,"text":"Deliver a campaign to encourage responsible dog ownership","note":"no notes","act":" "},
{"id":323,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":25,"text":"Encourage patrolling in Parish Council owned land","note":"no notes","act":" "},
{"id":324,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"TRUE","team":"RS","s":"grn","pc":25,"text":"Work in conjunction with the Police on dog attacks","note":"no notes","act":" "},
{"id":325,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Development of a scheme, excellence criteria and implementation subject to FSA approval.","note":" ","act":"Deliver the award for excellence for food businesses scheme"},
{"id":326,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Closer liaison with market authority to ensure closer regulation of new and existing food vendors","note":" ","act":"Blackbushe Market traders project"},
{"id":327,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Further gas safety checks with designated gas safety engineer","note":"no notes","act":" "},
{"id":328,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Sampling regime to ensure good standards of hygiene","note":"no notes","act":" "},
{"id":329,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Ongoing. Two food safety and one health & safety newsletter per annum to be produced","note":" ","act":"Produce seasonal food safety and health & safety newsletters for food business operators within Hart"},
{"id":330,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"FALSE","team":"RS","s":"amb","pc":0,"text":"Scoping of action","note":" ","act":"Scrap metal Dealers"},
{"id":331,"date":"2014-04-30","ut":1398816000,"day":"30 Apr","yr":2014,"done":"FALSE","team":"RS","s":"amb","pc":0,"text":"Scoping of action","note":" ","act":"Collaborative working - Licensing"},
{"id":332,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Risk-based proactive inspections of licensed premises to be undertaken.","note":" ","act":"Licensing enforcement visits – Licensed premises"},
{"id":333,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"Risk-based proactive inspections of licensed vehicles and drivers to be undertaken.","note":" ","act":"Licensing enforcement visits - Taxis"},
{"id":334,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"FALSE","team":"RS","s":"grn","pc":0,"text":"To continue to provide affordable training programmes in food hygiene to non-profit making charitable organisations.","note":" ","act":"Community organisation training programme"},
{"id":335,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"TRUE","team":"RS","s":"grn","pc":100,"text":"To consider the benefit of Enterprise as a caseload monitoring solution for the service","note":" ","act":"ERDMS & Enterprise"},
{"id":336,"date":"2015-03-31","ut":1427760000,"day":"31 Mar","yr":2015,"done":"TRUE","team":"RS","s":"grn","pc":100,"text":"To work with the BSU to deliver ERDMS.","note":"no notes","act":" "},
{"id":337,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"FALSE","team":"RS","s":"amb","pc":0,"text":"Draft system for Design Awards","note":" ","act":"Institute a system of design awards for all new development"},
{"id":338,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"RS","s":"amb","pc":0,"text":"Planning Commitee Agreement on Design Awards terms","note":"no notes","act":" "},






{"id":345,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"TRUE","team":"IA","s":"grn","pc":22,"text":"Building Control","note":" ","act":"Internal Audit"},
{"id":346,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":22,"text":"Cash & Banking","note":"no notes","act":" "},
{"id":347,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":22,"text":"Council Tax/NNDR","note":"no notes","act":" "},
{"id":348,"date":"2015-01-23","ut":1421971200,"day":"23 Jan","yr":2015,"done":"FALSE","team":"IA","s":"grn","pc":22,"text":"Creditors","note":"no notes","act":" "},
{"id":349,"date":"2014-07-30","ut":1406678400,"day":"30 Jul","yr":2014,"done":"TRUE","team":"IA","s":"grn","pc":22,"text":"Fraud Risk Assessment","note":"no notes","act":" "},
{"id":350,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":22,"text":"Housing (Rent Deposits)","note":"no notes","act":" "},
{"id":351,"date":"2015-02-27","ut":1424995200,"day":"27 Feb","yr":2015,"done":"FALSE","team":"IA","s":"grn","pc":22,"text":"Housing Benefit","note":"no notes","act":" "},
{"id":352,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":22,"text":"IT","note":"no notes","act":" "},
{"id":353,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":22,"text":"Main Accounting","note":"no notes","act":" "},
{"id":354,"date":"2014-07-31","ut":1406764800,"day":"31 Jul","yr":2014,"done":"TRUE","team":"IA","s":"grn","pc":22,"text":"Payments System","note":"no notes","act":" "},
{"id":355,"date":"2014-10-10","ut":1412899200,"day":"10 Oct","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":22,"text":"Payroll","note":"no notes","act":" "},
{"id":356,"date":"2015-02-20","ut":1424390400,"day":"20 Feb","yr":2015,"done":"FALSE","team":"IA","s":"grn","pc":22,"text":"Sundry Debtors","note":"no notes","act":" "},
{"id":357,"date":"2014-10-17","ut":1413504000,"day":"17 Oct","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":22,"text":"Treasury Management","note":"no notes","act":" "},
{"id":358,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"IA","s":"grn","pc":22,"text":"Waste","note":"no notes","act":" "},




{"id":363,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Establish working group to create programme","note":" ","act":"Alternative Disposals"},
{"id":364,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Link in with Police conditional cautioning scheme","note":"no notes","act":" "},
{"id":365,"date":"2015-01-31","ut":1422662400,"day":"31 Jan","yr":2015,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Run trial of programme","note":"no notes","act":" "},
{"id":366,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Establish which venues will take part","note":" ","act":"Best Bar None"},
{"id":367,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Launch SNH Best Bar None Scheme","note":"no notes","act":" "},
{"id":368,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Scope cost of training, who will coordiante the programme and who will conduct visits","note":"no notes","act":" "},
{"id":369,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Establish programme of visits","note":" ","act":"Early Intervention Scheme"},
{"id":370,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Estbalish agencies to be involved in visits","note":"no notes","act":" "},
{"id":371,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Hold scoping meeting","note":"no notes","act":" "},
{"id":372,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Promote visits prior to Christmas","note":"no notes","act":" "},
{"id":373,"date":"2014-11-30","ut":1417305600,"day":"30 Nov","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Arrange necessary training and publicity to interested parties","note":" ","act":"Single point of contact"},
{"id":374,"date":"2014-12-31","ut":1419984000,"day":"31 Dec","yr":2014,"done":"FALSE","team":"SNH","s":"gry","pc":0,"text":"Establish single point of contact","note":"no notes","act":" "},

{"id":377,"date":"2014-10-31","ut":1414713600,"day":"31 Oct","yr":2014,"done":"FALSE","team":"SNH","s":"grn","pc":33,"text":"Create and publicise new form","note":" ","act":"Improved ASB4 Form"},
{"id":378,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"FALSE","team":"SNH","s":"grn","pc":33,"text":"Ensure new form meets needs to antisocial behaviour reforms","note":"no notes","act":" "},
{"id":379,"date":"2014-09-30","ut":1412035200,"day":"30 Sep","yr":2014,"done":"TRUE","team":"SNH","s":"grn","pc":33,"text":"Review current form","note":"no notes","act":" "}








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
{"t":"BS","n":"Business Support"},{"t":"CS","n":"Corporate Services"},{"t":"ES","n":"Electoral Services"},{"t":"ETS","n":"Environmental & Technical Services"},{"t":"HS","n":"Housing Services"},{"t":"IA","n":"Internal Audit"},{"t":"LS","n":"Leisure Services"},{"t":"PP","n":"Planning Policy"},{"t":"RS","n":"Regulatory Services"},{"t":"SNH","n":"Safer North Hants"}];
});
