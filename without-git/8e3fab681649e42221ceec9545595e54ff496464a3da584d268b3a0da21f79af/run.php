<?php
/**
 * The datadump() function takes three parameters. The first is simply a string 
 * containing the name of the table. The second is a boolean that causes 
 * the outputted SQL to drop and recreate the tables if set to true, otherwise 
 * a truncate is used to clear the tables. The third value is a boolean 
 * that causes the function to remove any ` in the SQL, which can cause issues 
 * sometimes. Only the first parameter is mandatory, the second two
 * default to true, meaning that the tables are dropped and recreated.
 * 
 * The function works by taking the table name and then using this to fetch the 
 * syntax needed to recreate the table (if this option is set) before fetching all 
 * of the data from the table. It then finds out the structure of the table and 
 * uses this to output an insert statement that escapes the data correctly, even 
 * if the value is null.
 * 
 * The data_dump() function returns a string so it could potentially write the 
 * contents to a file rather than just output them. Printing everything out works
 * if your dataset is quite small. This script does tend to fall over if there is 
 * a lot to do so it might be worth writing to a file in that instance as well as 
 * increasing the amount of time a script can run for.
 * 
 * Note that you shouldn't rely on the data created by this script. If you are 
 * going to use it then I suggest you do a dry run to make sure that everything 
 * inserts as expected. This script has undergone several iterations and simple 
 * testing on different databases but it is not fully tested.
 */
$con = mysql_connect('localhost','username','password');
mysql_select_db('thedatabase');
 
$result = mysql_query("SHOW TABLES;");
while ( $row = mysql_fetch_row($result) ) {
  $table = $row[0];
 
  // dump data
  echo datadump($table, true, true);
}