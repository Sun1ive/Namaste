window.Event = new Vue();

let submenu = {
	template: `
	<ul class="subMenu">
		<slot></slot>
	</ul>`
}



new Vue({
	el: "#wrapper",
	components: { submenu },
	data: {
		red: true,
		green: false,
		showSub: false
	}, 
	methods: {
		isRed(){
			this.green = false;
			this.red = true
		},
		isGreen(){
			this.red = false,
			this.green = true
		}
	}
})