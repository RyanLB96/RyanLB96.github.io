﻿var navigation = '<div class="container">'
navigation += '<a href="index.html"><img src="Images/homeicon.jpg" width="50" alt="Home"></a>'
navigation += '<div class="redhover">'
navigation += '<div class="dropdown">'
navigation += '<button class="dropbtn">GCSEs</button>'
navigation += '<div class="dropdown-content">'
navigation += '<a href="gcsechemistry.html">Chemistry</a>'
navigation += '<a href="gcsebiology.html">Biology</a>'

navigation += '<div class="greyhover">'
navigation += '<div class="dropdown2">'
navigation += '<div class="active2"><a href="gcsebiology.html">Maths</a></div>'
navigation += '<div class="dropdown-content2">'
navigation += '<a href="gcsechemistry.html">Algebra</a>'
navigation += '<a href="gcsebiology.html">Geometry</a>'
navigation += '<a href="gcsemaths.html">Integration</a>'
navigation += '</div>'
navigation += '</div>'
navigation += '</div>'

navigation += '<div class="dropdown2">'
navigation += '<a href="gcsebiology.html">Geography</a>'
navigation += '<div class="dropdown-content2">'
navigation += '<a href="gcsechemistry.html">Mountains</a>'
navigation += '<a href="gcsebiology.html">Rivers</a>'
navigation += '<a href="gcsemaths.html">Glaciers</a>'
navigation += '</div>'
navigation += '</div>'

navigation += '</div>'
navigation += '</div>'
navigation += '<div class="dropdown">'
navigation += '<button class="dropbtn">A-Levels</button>'
navigation += '<div class="dropdown-content">'
navigation += '<a href="alevelchemistry.html">Chemistry</a>'
navigation += '<a href="alevelbiology.html">Biology</a>'
navigation += '</div>'
navigation += '</div>'

navigation += '<div class="dropdown">'
navigation += '<button class="dropbtn">University</button>'
navigation += '<div class="dropdown-content">'
navigation += '<a href="telecommunications.html">Telecommunications</a>'
navigation += '<a href="electronicengineering.html">Electronic Engineering</a>'

navigation += '<div class="greyhover">'
navigation += '<div class="dropdown2">'
navigation += '<div class="active2"><a href="engineeringmathematics.html">Engineering Maths</a></div>'
navigation += '<div class="dropdown-content2">'
navigation += '<a href="laplace.html">Laplace</a>'
navigation += '<a href="gcsebiology.html">Fourier Series</a>'
navigation += '<a href="gcsemaths.html">Fourier Transforms</a>'
navigation += '<a href="gcsemaths.html">ODEs</a>'
navigation += '<a href="gcsemaths.html">PDEs</a>'
navigation += '</div>'
navigation += '</div>'
navigation += '</div>'
navigation += '<a href="engineeringmathematics.html">Engineering Maths</a>'

navigation += '</div>'
navigation += '</div>'

navigation += '<div class="dropdown">'
navigation += '<button class="dropbtn">More</button>'
navigation += '<div class="dropdown-content">'
navigation += '<a href="aboutme.html">About me</a>'
navigation += '<a href="https://www.youtube.com/channel/UC5GPvJSUO4599z_ugFuoJwg">Youtube</a>'
navigation += '<a href="blog.html">Blog</a>'
navigation += '<a href="GPSTracker.html">GPS Tracker</a>'
navigation += '</div>'
navigation += '</div>'
navigation += '</div>'
navigation += '</div>'

document.getElementById("navigation").innerHTML = navigation;
