#/bin/bash
#
# Rick Salaverria
# 2014-03-04
# 

# Inline CSS styles
style=" style=\"border:1px solid;background:#EEE;padding:10px;margin:5px 10px\""

# Date
d=`date`

# Network information
tcp=`netstat -tn | wc -l`
netInterfaces=`netstat --interfaces`
# Processes information
numPs=`ps -e | wc -l`
tree=`pstree`

# Create HTML markup
html="<h1>System Report</h1>"
html="$html $d<br><hr><br><br>"
html="$html <h2>Networking</h2>"
html="$html <b>TCP Connections</b>: $tcp<br>"
html="$html <b>Network Interfaces:</b><br>"
html="$html <pre$style>$netInterfaces</pre>"
html="$html <h2>Processes</h2>"
html="$html <b>Num. Processes</b>: $numPs<br>"
html="$html <b>Process Tree:</b><br>"
html="$html <pre$style>$tree</pre>"
echo "$html" > report.html