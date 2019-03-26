document.addEventListener ('DOMContentLoaded' , function(){
	
	let clientID = 'br7rjl64ccvsnrsg4tzmyj597233pp'
	let game = 'League%20of%20Legends'
	let limit = 20
	let url = `https://api.twitch.tv/kraken/streams/?client_id=${clientID}&game=${game}&limit=${limit}`

	let request = new XMLHttpRequest(); 
	request.open('GET' , url, true);
	request.onload = () => {
		if (request.status >= 200 && request.status < 400 ){
			let resp = JSON.parse(request.responseText).streams;

			for (let i=0 ; i<limit ; i++) {
				let addBlock = document.createElement('div');
				addBlock.setAttribute('class' , 'singleStream')

				let att = document.createAttribute("style");
				att.value = `background-image:url(${resp[i].preview.medium });`
				addBlock.setAttributeNode(att);

				let inSingleStream= ` 
				<a  href="${resp[i].channel.url}" target="_blank">
					<div class="about" > 
						<div class="logo">
							<img src=" ${resp[i].channel.logo }">
						</div> 
						<div class="info">
							<div class="name"> ${resp[i].channel.display_name } </div> 
							<div class="status"> ${resp[i].channel.status} </div> 
						</div>
					</div>		
				</a> `

				document.querySelector('.allStreams').appendChild(addBlock).innerHTML = inSingleStream
			}
		}else{
			alert('oops!')
		}
	}

	request.onerror = () => {
		alert('ByeBye :p')
	}
	request.send();
});

			
