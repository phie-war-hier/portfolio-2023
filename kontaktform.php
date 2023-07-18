<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$betreff = $_POST['betreff'];
	$mailFrom = $_POST['mail'];
	$nachricht = $_POST['nachricht'];

	$mailTo = "soso-huhu@posteo.de";
	$headers = "From: ".$mailFrom;
	$txt = "Du hast eine nachricht von ".$name.".\n\n".$nachricht;	


	mail($mailTo, $betreff, $txt, $headers);
	header("Location: index.html?mailsend");
}



