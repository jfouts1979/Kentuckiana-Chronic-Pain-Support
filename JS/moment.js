function getTime() {

var m_names = new Array("Jan", "Feb", "Mar", 
"Apr", "May", "Jun", "Jul", "Aug", "Sep", 
"Oct", "Nov", "Dec");
	
var m_names_long = new array("January", "February", "March", "April", "May", "June", "July",
							 "August", "September", "October", "November", "December");

var d = new Date();
	
var curr_date = d.getDate();
	
var curr_month = d.getMonth();
var curr_month_long = d.getMonth();
var curr_year = d.getFullYear();


var dateformat = (m_names[curr_month]+ "-" + curr_date + "-" + curr_year);
return dateformat;

}