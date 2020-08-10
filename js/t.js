function onStart()
	{
		//--------------Initilizing button events--------------//

		//===mainButtons====//
			//Click//
		document.getElementsByClassName("mainButtons")[0].onclick=bSearchReviewMain; //SearchReview
		document.getElementsByClassName("mainButtons")[1].onclick=bMakeReviewMain; //MakeReview


		//====navBar Buttons====//
		document.getElementById("bMain").onclick=bMain;
		document.getElementById("bSearchReview").onclick=bSearchReview;
		document.getElementById("bMakeReview").onclick=bMakeReview;

		//====Filter Button====//
		document.getElementsByClassName("filterButton")[0].onclick=bFilter;


		

	}

//====Mains====//
	
	//Linking//
function bSearchReviewMain()
{
	location.href="searchReview.html";
}

function bMakeReviewMain()
{
	location.href="makeReview.html";
}

//====NavBar====//
function bSearchReview()
{
	location.href="searchReview.html";
}

function bMain()
{
	location.href="index.html";
}

function bMakeReview()
{
	location.href="makeReview.html";
}

//====Filter====//
function bFilter()
{
	alert("No yet");
}

window.onload=onStart;