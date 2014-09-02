(function () {

        var app = angular.module('app', ['angles','ngTouch'])
     
        app.controller('kpiCtrl', ['$scope',
        function ($scope) {

                    $scope.help = {me: 'f'};
                    var lbl = ["previous", "current", "target"];
                    var clr = "rgba(0,0,0,0.2)";

                    $scope.options = {animation: false, scaleGridLineWidth: 0, barShowStroke: false,
                        barDatasetSpacing: 0, barValueSpacing: 1, showScale: false};

                    $scope.chartEg = {labels: lbl,datasets: [{fillColor: clr,data: [90, 100, 95]}]};
      
var k = $scope.kpis = [

{i:0,k:"CS01",d:"Quality of Customer Service Call Handling - % score from monitoring sample",n:" ",y:94.8,lq:95.3,tq:95.9,t:90,s:"lg",u:"Customer Services",c:"f",p:"%"},
{i:1,k:"CS02a",d:"% of telephone calls answered by Contact Centre in 15 seconds",n:" ",y:77.1,lq:79.6,tq:78.5,t:80,s:"la",u:"Customer Services",c:"f",p:"%"},
{i:2,k:"CS02b",d:"% of calls to Contact Centre answered within 30 seconds",n:" ",y:84.4,lq:85.8,tq:84.2,t:85,s:"la",u:"Customer Services",c:"f",p:"%"},
{i:3,k:"CS03",d:"% Garden Waste invoices sent out accurately and on time",n:" ",y:100,lq:100,tq:100,t:99,s:"lg",u:"Customer Services",c:"f",p:"%"},
{i:4,k:"ETS01",d:"Number of missed collections – All – (per 100,000)",n:"JE090714 - The waste KPIs for Q1 have yet to be confirmed, reliability of the waste service continues to be a significant problem. An improvement plan for the service has been agreed but it is accepted that it will take time to implement.",y:401,lq:0 ,tq:0 ,t:40,s:"lr",u:"Environmental & Technical Services",c:"f",p:""},
{i:5,k:"FI06",d:"% of undisputed invoices paid on time (old BVPI8)",n:" ",y:97.7,lq:98.2,tq:97.4,t:97,s:"lg",u:"Finance, Revs and Bens",c:"f",p:"%"},
{i:6,k:"HR01",d:"% accuracy in gross and net pay calculations for all payrolls",n:" ",y:100,lq:100,tq:98.7,t:98,s:"lg",u:"HR",c:"f",p:"%"},
{i:7,k:"HR02",d:"% of cases not dealt with by HR front office and which are not treated as HRP work requests that are dealt with in 3 working days",n:"Introduction of CoreHR and transition of HR back office to Belfast caused disruption to the service which should be temporary",y:98.3,lq:99.3,tq:65.3,t:95,s:"lr",u:"HR",c:"f",p:"%"},
{i:8,k:"HR03",d:"DBS applications sent to the DBS within 1 working day",n:" ",y:99,lq:100,tq:100,t:95,s:"lg",u:"HR",c:"f",p:"%"},
{i:9,k:"HR05",d:"% Complex HR queries resolved within 10 working days",n:" ",y:100,lq:100,tq:100,t:95,s:"lg",u:"HR",c:"f",p:"%"},
{i:10,k:"HR11",d:"Working Days (per FTE) Lost Due to Sickness Absence (Cumulative)",n:"Long term sickness absences make up a high proportion of this (47%)",y:17,lq:8.1,tq:2.6,t:1.58,s:"lr",u:"HR",c:"f",p:""},
{i:11,k:"HS01",d:"Average time (in days) taken to decide whether to accept people as homeless",n:"20 decisions during the quarter, 13 Acceptances average time taken to accept was 11 days), 4 Intentional decisions, 3 Eligible but not homeless decisions",y:15,lq:14,tq:11,t:15,s:"lg",u:"Housing Services",c:"f",p:""},
{i:12,k:"HS07",d:"Preventing Homelessness - number of housing advice cases where homelessness prevented",n:"Although prevention figure is lower - there were 131 clients seen for housing advice Apr to Jun 2014. The majority were not technically homeless or threatened with homelessness within the scope of reporting guidance and hence could not be recorded as 'prevention'. The Housing Needs Manager will  continue to monitor this.",y:365,lq:365,tq:36,t:36,s:"lg",u:"Housing Services",c:"f",p:""},
{i:13,k:"HS08",d:"% of private sector housing grant budgets actually spent (DFG) (Values are cumulative)",n:"13-Aug-2014 To date this financial year £75K spent out of a £500K budget (15%). £156K is committed but not yet paid out and a potential ££203K at pre-approval stage.",y:57,lq:57,tq:5,t:15,s:"lr",u:"Housing Services",c:"f",p:"%"},
{i:14,k:"HS16",d:"Number of affordable homes delivered (gross)",n:"Outturn for the quarter is 28 units – 12 Lismoyne House and 16 Swan Lake View – 5 s/o and 11 rent",y:80,lq:7,tq:28,t:18,s:"lg",u:"Housing Services",c:"f",p:""},
{i:15,k:"IA01",d:"Percentage of Audit Plan completed during the year",n:"Audit Plan is heavily weighted to the seond half year as that is the start date of resource from Basingstoke. ",y:87,lq:87,tq:14,t:23.8,s:"lr",u:"Audit",c:"f",p:"%"},
{i:16,k:"IA02",d:"Percentage of Audits carried out within time allocation",n:" ",y:94,lq:92,tq:100,t:100,s:"lg",u:"Audit",c:"f",p:"%"},
{i:17,k:"IA04",d:"% of High Risk Audit Recommendations Implemented",n:" ",y:100,lq:100,tq:100,t:100,s:"lg",u:"Audit",c:"f",p:"%"},
{i:18,k:"IT01",d:"% registered controllable incidents resolved at first point of contact",n:" ",y:51.6,lq:45.8,tq:42.5,t:60,s:"la",u:"IT Services",c:"f",p:"%"},
{i:19,k:"IT02",d:"% Priority 1 incidents fixed within 4 working hours",n:" ",y:94,lq:92.2,tq:100,t:90,s:"lg",u:"IT Services",c:"f",p:"%"},
{i:20,k:"IT03",d:"% Priority 2 incidents fixed within 8 working hours",n:" ",y:87.7,lq:92.3,tq:80.6,t:90,s:"lg",u:"IT Services",c:"f",p:"%"},
{i:21,k:"IT04",d:"% Priority 3 incidents fixed within 5 working days",n:" ",y:91.4,lq:88.2,tq:85.8,t:85,s:"lg",u:"IT Services",c:"f",p:"%"},
{i:22,k:"IT05",d:"% uptime of key systems",n:" ",y:98.9,lq:99.5,tq:99.9,t:99,s:"lg",u:"IT Services",c:"f",p:"%"},
{i:23,k:"IT06",d:"% uptime of Hart DC website",n:" ",y:100,lq:99.8,tq:99.6,t:98,s:"lg",u:"IT Services",c:"f",p:"%"},
{i:24,k:"IT07",d:"% score for Council employee satisfaction with Capita IT support service",n:" ",y:86,lq:81.2,tq:75.7,t:80,s:"la",u:"IT Services",c:"f",p:"%"},
{i:25,k:"LS05",d:"Summary of Projects status - Number of days ahead / behind project timetable",n:" ",y: ,lq: ,tq:-28,t:0,s:"lr",u:"Leisure Services",c:"f",p:""},
{i:26,k:"PS01",d:"Processing of planning applications: Major applications",n:" ",y:68.4,lq:75.2,tq:63.6,t:70,s:"la",u:"Planning Services",c:"f",p:"%"},
{i:27,k:"PS02",d:"Processing of planning applications: Minor applications",n:"figure for delegated decisions is 85.7% and 20% for Committee decisions",y:68,lq:86,tq:78,t:65,s:"lg",u:"Planning Services",c:"f",p:"%"},
{i:28,k:"PS03",d:"Processing of planning applications: Other applications",n:" ",y:82.4,lq:69.6,tq:94.2,t:85,s:"lg",u:"Planning Services",c:"f",p:"%"},
{i:29,k:"PS05",d:"% of Tree Preservation works applications determined within eight weeks",n:"100% TPO applications & 98.2% Conservation applications",y:96.1,lq:88.6,tq:99.1,t:90,s:"lg",u:"Planning Services",c:"f",p:"%"},
{i:30,k:"RB01",d:"% of benefit assessments calculated correctly (new and change in circumstances)",n:" ",y:98.5,lq:97.2,tq:98.9,t:95,s:"lg",u:"Finance, Revs and Bens",c:"f",p:"%"},
{i:31,k:"RB02",d:"% of new benefit claims decided within 14 days",n:" ",y:98.8,lq:98.7,tq:95.6,t:90,s:"lg",u:"Finance, Revs and Bens",c:"f",p:"%"},
{i:32,k:"RB04",d:"% of council tax collected electronically (DD + Internet)",n:" ",y:85.1,lq:85.1,tq:83.9,t:80,s:"lg",u:"Finance, Revs and Bens",c:"f",p:"%"},
{i:33,k:"RB05",d:"Percentage of Non-domestic Rates Collected",n:" ",y:98.5,lq:98.5,tq:33.6,t:24.6,s:"lg",u:"Finance, Revs and Bens",c:"f",p:"%"},
{i:34,k:"RB06",d:"% of Council Tax collected",n:" ",y:98.7,lq:98.7,tq:30.5,t:24.5,s:"lg",u:"Finance, Revs and Bens",c:"f",p:"%"},
{i:35,k:"RB07",d:"Time taken to process Housing Benefit/Council Tax Benefit new claims.",n:" ",y:19.08,lq:19.85,tq:19.94,t:23,s:"lg",u:"Finance, Revs and Bens",c:"f",p:""},
{i:36,k:"RB08",d:"Time taken to process Housing Benefit/Council Tax Benefit changes of circumstances.",n:"Value pushed above target by June figure of 10.75",y:9.67,lq:4.23,tq:9.05,t:8,s:"lr",u:"Finance, Revs and Bens",c:"f",p:""},
{i:37,k:"RB09",d:"Time taken to process Housing Benefit/Council Tax Benefit new claims and change events",n:" ",y:9.1,lq:4.5,tq:9.4,t:12,s:"lg",u:"Finance, Revs and Bens",c:"f",p:""},
{i:38,k:"RS20",d:"% of key inspections carried out in time",n:"Only RS03 (Health and Safety Inspections for High Risk premises) was below target. 4 of these inspections were due, 3 completed. Remaining 1 was completed in July.",y:100,lq:100,tq:91.7,t:98,s:"la",u:"Regulatory Services",c:"f",p:"%"},
{i:39,k:"RS21",d:"% of incident responses carried out in prescribed time",n:" ",y:99.5,lq:100,tq:98.8,t:98,s:"lg",u:"Regulatory Services",c:"f",p:"%"},
{i:40,k:"SNH01",d:"% Reduction in Antisocial Behaviour across Safer North Hampshire area",n:"ASB – Reclassification of miscellaneous incidents by police has led to an increase, monitor for Q2",y:16,lq:29,tq:0,t:3,s:"lr",u:"Safer North Hants",c:"f",p:"%"},
{i:41,k:"SNH02",d:"% Reduction in violence against the person offences with injury across Safer North Hampshire area",n:"Increase in violence against the person offences, both domestic and related to the Night Time Economy. Multi agency response to address and reduce Town Centre issues, including early intervention patrolling and increased enforcement",y:1,lq:2,tq:-16,t:5,s:"lr",u:"Safer North Hants",c:"f",p:"%"},
{i:42,k:"SNH03",d:"Number of Domestic Abuse incidents - domestic crimes",n:" ",y:1284,lq:283,tq:376,t: ,s:"ld",u:"Safer North Hants",c:"f",p:""},
{i:43,k:"SNH04",d:"Number of Domestic Abuse incidents - Violence against the person",n:" ",y:1035,lq:231,tq:169,t: ,s:"ld",u:"Safer North Hants",c:"f",p:""},
{i:44,k:"SNH06",d:"Drug Offences",n:" ",y:1238,lq:260,tq:271,t: ,s:"ld",u:"Safer North Hants",c:"f",p:""}


];
$scope.chart = [
{labels: lbl,datasets: [{fillColor: clr,data: [k[0].lq,k[0].tq,k[0].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[1].lq,k[1].tq,k[1].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[2].lq,k[2].tq,k[2].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[3].lq,k[3].tq,k[3].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[4].lq,k[4].tq,k[4].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[5].lq,k[5].tq,k[5].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[6].lq,k[6].tq,k[6].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[7].lq,k[7].tq,k[7].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[8].lq,k[8].tq,k[8].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[9].lq,k[9].tq,k[9].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[10].lq,k[10].tq,k[10].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[11].lq,k[11].tq,k[11].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[12].lq,k[12].tq,k[12].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[13].lq,k[13].tq,k[13].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[14].lq,k[14].tq,k[14].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[15].lq,k[15].tq,k[15].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[16].lq,k[16].tq,k[16].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[17].lq,k[17].tq,k[17].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[18].lq,k[18].tq,k[18].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[19].lq,k[19].tq,k[19].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[20].lq,k[20].tq,k[20].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[21].lq,k[21].tq,k[21].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[22].lq,k[22].tq,k[22].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[23].lq,k[23].tq,k[23].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[24].lq,k[24].tq,k[24].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[25].lq,k[25].tq,k[25].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[26].lq,k[26].tq,k[26].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[27].lq,k[27].tq,k[27].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[28].lq,k[28].tq,k[28].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[29].lq,k[29].tq,k[29].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[30].lq,k[30].tq,k[30].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[31].lq,k[31].tq,k[31].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[32].lq,k[32].tq,k[32].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[33].lq,k[33].tq,k[33].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[34].lq,k[34].tq,k[34].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[35].lq,k[35].tq,k[35].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[36].lq,k[36].tq,k[36].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[37].lq,k[37].tq,k[37].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[38].lq,k[38].tq,k[38].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[39].lq,k[39].tq,k[39].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[40].lq,k[40].tq,k[40].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[41].lq,k[41].tq,k[41].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[42].lq,k[42].tq,k[42].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[43].lq,k[43].tq,k[43].t]}]},
{labels: lbl,datasets: [{fillColor: clr,data: [k[44].lq,k[44].tq,k[44].t]}]}
];     
   }]);
        })();
