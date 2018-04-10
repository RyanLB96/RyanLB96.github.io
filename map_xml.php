<?php


require("config.php");
require("configtut.php");

function parseToXML($htmlStr)
{
$xmlStr=str_replace('<','&lt;',$htmlStr);
$xmlStr=str_replace('>','&gt;',$xmlStr);
$xmlStr=str_replace('"','&quot;',$xmlStr);
$xmlStr=str_replace("'",'&#39;',$xmlStr);
$xmlStr=str_replace("&",'&amp;',$xmlStr);
return $xmlStr;
}

$sql = "SELECT * FROM markers WHERE 1;";
$result = mysqli_query($connection, $sql);
$resultCheck = mysqli_num_rows($result);

// Start XML file, echo parent node
header ("Content-type: text/xml");
echo "<?xml version='1.0' encoding='UTF-8'  ?>";
echo '<markers>';

$ind=0;
// Iterate through the rows, printing XML nodes for each
if($resultCheck > 0) 
{
		while($row = @mysqli_fetch_assoc($result))
    {
// Add to XML document node
      $line =  '<marker ';
      $line = $line . 'id="' . $row['id'] . '" ';
      $line = $line . 'name="' . parseToXML($row['name']) . ' from file" ';
      $line = $line . 'address="' . parseToXML($row['address']) . '" ';
      $line = $line . 'lat="' . $row['lat'] . '" ';
      $line = $line . 'lng="' . $row['lng'] . '" ';
      $line = $line . 'type="' . $row['type'] . '" ';
      $line = $line . '/>';

      echo $line;
      $ind = $ind + 1;
	 	}
	}

//End XML file
echo '</markers>';

//http://localhost/projectgmaps/maptest.html

