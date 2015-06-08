<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

$who=$_GET["who"];
$vid=$_GET["vid"];

function getit($who, $vid){




/** Set access tokens here - see: https://dev.twitter.com/apps/ **/

$settings = array(
    'oauth_access_token' => "961912110-ycJtlyqRujYkLtu6qxRVs3snDM6fFU4kA047ttbX",
    'oauth_access_token_secret' => "BMp5hKf2mwmu1NLcBYuh3A8dnb2IqayUyCGbsHejn8Tfk",
    'consumer_key' => "nU4DYm15MQVVAER2Aeqnog",
    'consumer_secret' => "g37RpHISl7wUa3Dvr8sUydxrvliFwNIzl3D69TsjU"
);
$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$getfield = '?screen_name='.$who.'&count=100';
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
$response = $twitter->setGetfield($getfield)
                    ->buildOauth($url, $requestMethod)
                    ->performRequest();


//Show only what is needed
//print($response);
$response = json_decode($response);
$i = 0;
$json_encoded = array();



//$matches=Array();
foreach($response as $json_d){
    //$created_at[$i] = $json_d->{'created_at'};
	
    $text[$i] = $json_d->{'text'};
    $user[$i] = $json_d->user->{'screen_name'};
	 //$entities[$i] = $json_d->entities->{'media'};
	 
	 $entities[$i] = $json_d->entities->media[0]->{'media_url'};
	// $media_url = $result->entities->media[0]->media_url;
	

	$text[$i]=linkify_twitter_status($text[$i]);
		//if($entities[$i]!=""){
    		$json_encoded[] = array('text' => $text[$i], 'screen_name' => $user[$i], 'media_url'=>$entities[$i]);
		//}
    $i++;
}


	if($vid!=""){
		$savefeed= json_encode($json_encoded);
		$file = $vid.'.js';

		file_put_contents($file, $savefeed);
	}
	
	echo json_encode($json_encoded);
}

function linkify_twitter_status($status_text)
{
  // linkify URLs
  $status_text = preg_replace(
    '/(https?:\/\/\S+)/',
    '<a href="\1">\1</a>',
    $status_text
  );

  // linkify twitter users
  $status_text = preg_replace(
    '/(^|\s)@(\w+)/',
    '\1<a href="http://twitter.com/\2">@\2</a>',
    $status_text
  );

  // linkify tags
  $status_text = preg_replace(
    '/(^|\s)#(\w+)/',
    '\1<a href="http://twitter.com/search?q=%23\2">#\2</a>',
    $status_text
  );

$status_text=htmlentities($status_text);
  return $status_text;
  
}

if($who!=""){
	getit($who,$vid);
	
}

//print($who);
  // $who="ABCNETWORK";





