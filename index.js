const RootComponent = {
    data(){
        return{
            estates:[
                "北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県",
                "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県"
            ]
        }
    }
};

Vue.createApp(RootComponent).mount('#app');


