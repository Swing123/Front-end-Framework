
var AccordionDemoCtrl1=['$scope',function ($scope) {
  $scope.items = ['Item 1', 'Item 2', 'Item 3'];
  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
}];
angular.module('dist.ui').controller('AccordionDemoCtrl1',AccordionDemoCtrl1);
var AccordionDemoCtrl2=['$scope',function ($scope) {
    $scope.groups = [
        {
            title: '动态 Header - 1',
            content: 'Dynamic Group Body - 1',
            open:true
        },
        {
            title: '动态 Header - 2',
            content: 'Dynamic Group Body - 2',
            open:false
        }
    ];
}];
angular.module('dist.ui').controller('AccordionDemoCtrl2',AccordionDemoCtrl2);
var AccordionDemoCtrl3=['$scope',function ($scope) {
  $scope.status = {
    open: true,
    isFirstDisabled: false
  };
}];
angular.module('dist.ui').controller('AccordionDemoCtrl3',AccordionDemoCtrl3);
var AccordionDemoIsOpenCtrl=['$scope',function ($scope) {
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
}];
angular.module('dist.ui').controller('AccordionDemoIsOpenCtrl',AccordionDemoIsOpenCtrl);
var AccordionDemoListenerCtrl=['$scope',function ($scope) {
    $scope.onSelect = function(index,scope){
        console.log('选中：第',index,'项',scope);
    };
    $scope.onUnselect = function(index,scope){
        console.log('取消：第',index,'项',scope);
    };
}];
angular.module('dist.ui').controller('AccordionDemoListenerCtrl',AccordionDemoListenerCtrl);
var AccordionDemoMethodCtrl=['$scope',function ($scope) {
    $scope.myAcc = {};
    $scope.element = function(){
        console.log('jqlite元素：',$scope.myAcc.element());
    };
    $scope.options = function(){
        console.log('用户配置：',$scope.myAcc.options());
    };
    $scope.panels = function(){
        console.log('所有面板：',$scope.myAcc.panels());
    };
    $scope.getSelect = function(){
        console.log('选中项：',$scope.myAcc.getSelect());
    };
    $scope.getGroup = function(){
        console.log('第1项',$scope.myAcc.getGroup(1));
    };
    $scope.toggle = function(){
        $scope.myAcc.toggle(2);
        console.log('切换第二项选中状态');
    };
    $scope.reCompute = function(){
        $scope.myAcc.reCompute();
        console.log('重新计算尺寸');
    };
}];
angular.module('dist.ui').controller('AccordionDemoMethodCtrl',AccordionDemoMethodCtrl);
var alertCtrl1=['$scope','wiAlert',function ($scope,wiAlert){
    $scope.info=function(){
        wiAlert.info("请选择要操作的数据!");
    }
    $scope.warn=function(){
        wiAlert.warn("该条数据已经被更新,请刷新列表获取最新数据!");
    }
    $scope.error=function(){
        wiAlert.error("数据删除失败!");
    }
    $scope.success=function(){
        wiAlert.success("删除数据成功!")
            .yes(function(){
                wiAlert.info("点击了确定按钮！！！");
            })
    }
    $scope.confirm=function(){
        wiAlert.confirm("确定要删除该条数据吗？")
            .yes(function(){
                wiAlert.success("删除数据成功!");
            })
            .no(function(){
                wiAlert.info("您取消了本次操作!");
            })
    }
}];
angular.module('dist.ui').controller('alertCtrl1',alertCtrl1);
var alertCtrl2=['$scope','wiAlert',function ($scope,wiAlert){
    $scope.confirm=function(){
        wiAlert.confirm({
            title:'<span class="alertTitle">社区删除</span>',
            yesLabel:'确定删除',
            noLabel:'取消操作',
            width:500,
            content:'删除社区后对应的系统办件信息也将被删除，您确定要删除 <span class="alertContent"> 胡埭社区 </span> 吗？'
        }) .yes(function(){
                wiAlert.success("删除数据成功!");
             })
            .no(function(){
                wiAlert.info("您取消了本次操作!");
            })
    }
}];
angular.module('dist.ui').controller('alertCtrl2',alertCtrl2);
var bindHtmlCtrl = ['$scope',function($scope){
    $scope.elemStr = '<input type="button" class="wi-btn" ng-click="do1()" value="我是 html 代码段生成的按钮">';
}];
angular.module('dist.ui').controller('bindHtmlCtrl',bindHtmlCtrl);
var bindHtmlCtrl1 = ['$scope','$compile',function($scope, $compile){
    $scope.myClick = function(){
        alert('事件被触发了');
    };
    $scope.elem = $compile('<input type="button" class="wi-btn" ng-click="myClick()" value="我是直接添加的按钮">')($scope);
}];
angular.module('dist.ui').controller('bindHtmlCtrl1',bindHtmlCtrl1);
var CameraScannerDemoCtrl=['wiAlert',function (wiAlert) {
    this.uploadUrl = 'http://192.10.110.174:8804/NewFrame/CommonServlet?bean=FileUploadCommonPO&path=D:\\wisoft\\&sid=408aee4e3bacd24f013bb0ec0e650030';

    this.uploadComplete = function(data) {
        setTimeout(function(){
            var option = {
                width: 600,
                title: '文件下载地址',
                content:'http://192.10.110.174:8804/NewFrame/CommonServlet?bean=FileDownloadPO&file'+data
            }
            wiAlert.info(option);
        }, 500);

    }
}];
angular.module('dist.ui').controller('CameraScannerDemoCtrl',CameraScannerDemoCtrl);
var CarouselDemoCtrl=['$scope',function($scope) {
  $scope.myInterval = 2000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
      var index = 1 + slides.length%5;
      slides.push({
          image: 'misc/tempimg/carousel/carousel' + index + '.jpg',
          text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
              ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
      });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
}];
angular.module('dist.ui').controller('CarouselDemoCtrl',CarouselDemoCtrl);

var CollapseDemoCtrl=['$scope',function($scope) {
  $scope.isCollapsed = false;
}];
angular.module('dist.ui').controller('CollapseDemoCtrl',CollapseDemoCtrl);

var ComboBoxDemoBasicCtrl=['$scope',function($scope) {

    var vm = $scope;
    vm.mydata = [];

    var seed = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','m','n','p','q','r','s','t','u','v','w','x','y','z',
        '1','2','3','4','5','6','7','8','9','0',
        '一','二','三','四','五','六','七','八','九','十'
    );

    function randomWord() {
        var createPassword = '', m,n;
        for(m=0;m<10;m++) {
            n = Math.floor(Math.random()*seed.length);
            createPassword += seed[n];
        }
        return createPassword;
    }

    for(var i=0;i<100;i++) {
        var obj = {};
        obj.id = i;
        obj.name = randomWord();
        vm.mydata.push(obj)
    }

    vm.itemChangeHandler = function (data){
        vm.selected = data;
    }

}];
angular.module('dist.ui').controller('ComboBoxDemoBasicCtrl',ComboBoxDemoBasicCtrl);

var ComboBoxDemoEnableCtrl=['$scope',function($scope) {

    var vm = $scope;

    vm.mydata = [];

    var seed = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','m','n','p','q','r','s','t','u','v','w','x','y','z',
        '1','2','3','4','5','6','7','8','9','0',
        '一','二','三','四','五','六','七','八','九','十'
    );

    function randomWord() {
        var createPassword = '', m,n;
        for(m=0;m<10;m++) {
            n = Math.floor(Math.random()*seed.length);
            createPassword += seed[n];
        }
        return createPassword;
    }

    for(var i=0;i<100;i++) {
        var obj = {};
        obj.id = i;
        obj.name = randomWord();
        vm.mydata.push(obj)
    }

    vm.myEnable = false;

    vm.itemChangeHandler = function (data){
        vm.selected = data;
    }

}];
angular.module('dist.ui').controller('ComboBoxDemoEnableCtrl',ComboBoxDemoEnableCtrl);

var ComboBoxDemoGroupCtrl=['$scope',function($scope) {

    var vm = $scope;
    vm.groupData = [
        { "value":"f20", "text":"Firefox 2.0 or higher", "group":"Firefox" },
        { "value":"f15", "text":"Firefox 1.5.x", "group":"Firefox" },
        { "value":"f10", "text":"Firefox 1.0.x", "group":"Firefox" },
        { "value":"ie7", "text":"IE 7.0 or higher", "group":"Microsoft Internet Explorer" },
        { "value":"ie6", "text":"IE 6.x", "group":"Microsoft Internet Explorer" },
        { "value":"ie5", "text":"IE 5.x", "group":"Microsoft Internet Explorer" },
        { "value":"ie4", "text":"IE 4.x", "group":"Microsoft Internet Explorer" },
        { "value":"op9", "text":"Opera 9.0 or higher", "group":"Opera" },
        { "value":"op8", "text":"Opera 8.x", "group":"Opera" },
        { "value":"op7", "text":"Opera 7.x", "group":"Opera" },
        { "value":"Safari", "text":"Safari", "group":"Safari" },
        { "value":"Other", "text":"Other", "group":"Other" }
    ];

    vm.itemChangeHandler = function (data){
        vm.selected = data;
    }
}];
angular.module('dist.ui').controller('ComboBoxDemoGroupCtrl',ComboBoxDemoGroupCtrl);

var ComboBoxDemoMultiCtrl=['$scope',function($scope) {

    var vm = $scope;

    vm.mydata = [];

    var seed = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','m','n','p','q','r','s','t','u','v','w','x','y','z',
        '1','2','3','4','5','6','7','8','9','0',
        '一','二','三','四','五','六','七','八','九','十'
    );

    function randomWord() {
        var createPassword = '', m,n;
        for(m=0;m<10;m++) {
            n = Math.floor(Math.random()*seed.length);
            createPassword += seed[n];
        }
        return createPassword;
    }

    for(var i=0;i<100;i++) {
        var obj = {};
        obj.id = i;
        obj.name = randomWord();
        vm.mydata.push(obj)
    }

}];
angular.module('dist.ui').controller('ComboBoxDemoMultiCtrl',ComboBoxDemoMultiCtrl);
var ComboBoxDemoNoEditCtrl=['$scope',function($scope) {

    var vm = $scope;

    vm.mydata = [];

    var seed = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','m','n','p','q','r','s','t','u','v','w','x','y','z',
        '1','2','3','4','5','6','7','8','9','0',
        '一','二','三','四','五','六','七','八','九','十'
    );

    function randomWord() {
        var createPassword = '', m,n;
        for(m=0;m<10;m++) {
            n = Math.floor(Math.random()*seed.length);
            createPassword += seed[n];
        }
        return createPassword;
    }

    for(var i=0;i<100;i++) {
        var obj = {};
        obj.id = i;
        obj.name = randomWord();
        vm.mydata.push(obj)
    }

    vm.itemChangeHandler = function (data){
        vm.selected = data;
    }

}];
angular.module('dist.ui').controller('ComboBoxDemoNoEditCtrl',ComboBoxDemoNoEditCtrl);
var ComboBoxDemoRowCountCtrl=['$scope',function($scope) {

    var vm = $scope;

    vm.mydata = [];

    var seed = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','m','n','p','q','r','s','t','u','v','w','x','y','z',
        '1','2','3','4','5','6','7','8','9','0',
        '一','二','三','四','五','六','七','八','九','十'
    );

    function randomWord() {
        var createPassword = '', m,n;
        for(m=0;m<10;m++) {
            n = Math.floor(Math.random()*seed.length);
            createPassword += seed[n];
        }
        return createPassword;
    }

    for(var i=0;i<100;i++) {
        var obj = {};
        obj.id = i;
        obj.name = randomWord();
        vm.mydata.push(obj)
    }

    vm.itemChangeHandler = function (data){
        vm.selected = data;
    }

}];
angular.module('dist.ui').controller('ComboBoxDemoRowCountCtrl',ComboBoxDemoRowCountCtrl);
var DataGridDemoBasicCtrl=['$scope',function ($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad(((i>30?i-30:i)+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }

    $scope.dgData = dgData;

    $scope.dblClick = function (data){
        alert(data.username+'----'+data.address);
    }
}]
angular.module('dist.ui').controller('DataGridDemoBasicCtrl',DataGridDemoBasicCtrl);
var DataGridDemoColumnGroupCtrl=['$scope',function($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad((i+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }

    $scope.dgData = dgData;

}];
angular.module('dist.ui').controller('DataGridDemoColumnGroupCtrl',DataGridDemoColumnGroupCtrl);
var DataGridDemoExcelCtrl=['$scope',function($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad((i+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }

    $scope.dgData = dgData;

}];
angular.module('dist.ui').controller('DataGridDemoExcelCtrl',DataGridDemoExcelCtrl);
var DataGridDemoFilterCtrl=['$scope',function($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.sex=i%2;
        obj.date='2014-07-'+pad((i+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }

    $scope.dgData = dgData;

    $scope.sexLabelFun = function(data){
        if(data){
            if(data.sex===1){
                return '男';
            }else{
                return '女';
            }
        }else{
            return '未知';
        }
    }
}];
angular.module('dist.ui').controller('DataGridDemoFilterCtrl',DataGridDemoFilterCtrl);
var DataGridDemoHeadRendererCtrl=['$scope',function($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad(((i>30?i-30:i)+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }

    $scope.dgData = dgData;

    $scope.$on('itemClickHandler', function (d,data) {
        alert(data.username);
    })
}];
angular.module('dist.ui').controller('DataGridDemoHeadRendererCtrl',DataGridDemoHeadRendererCtrl);
var DataGridDemoItemRendererCtrl=['$scope',function($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad((i+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }

    $scope.dgData = dgData;

    $scope.$on('itemClickHandler', function (d,data) {
        alert(data.username);
    })
}];
angular.module('dist.ui').controller('DataGridDemoItemRendererCtrl',DataGridDemoItemRendererCtrl);
var DataGridDemoLabFunCtrl=['$scope',function ($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad((i+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }

    $scope.dgData = dgData;

    $scope.usenameLabFun = function (data){
        if(data){
            if(data.username=='username1'){
                    return '<span style="color: red">'+data.username+'</span>';
            }else{
                return '<span style="color: #0000db">'+data.username+'</span>';
            }
        }
        else{
            //清空数据（必须要写为空的判断处理，否则不能清空数据）
            return " ";//空字符串
        }
    }
}]
angular.module('dist.ui').controller('DataGridDemoLabFunCtrl',DataGridDemoLabFunCtrl);
var DataGridDemoLockColumnCtrl=['$scope',function($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad((i+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }

    $scope.dgData = dgData;
}];
angular.module('dist.ui').controller('DataGridDemoLockColumnCtrl',DataGridDemoLockColumnCtrl);
var DataGridDemoMultiSelectCtrl=['$scope',function($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad((i+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }

    $scope.dgData = dgData;
}];
angular.module('dist.ui').controller('DataGridDemoMultiSelectCtrl',DataGridDemoMultiSelectCtrl);
var DataGridDemoNoPageCtrl=['$scope',function($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad((i+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }

    $scope.dgData = dgData;
}];
angular.module('dist.ui').controller('DataGridDemoNoPageCtrl',DataGridDemoNoPageCtrl);
var DataGridDemoRowcolorCtrl=['$scope',function ($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad((i+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }

    $scope.dgData = dgData;

    //返回颜色值
    $scope.myRowColorFunction=function(data){
        if(data.username=='username2'){
            return "#6BA95B";
        }
    };
}]
angular.module('dist.ui').controller('DataGridDemoRowcolorCtrl',DataGridDemoRowcolorCtrl);
var DataGridDemoServerCtrl=['$scope',function($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad((i+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }

    $scope.dgData = dgData;
}];
angular.module('dist.ui').controller('DataGridDemoServerCtrl',DataGridDemoServerCtrl);
var DataGridDemoSortCtrl=['$scope',function($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad((i+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }

    $scope.dgData = dgData;
}];
angular.module('dist.ui').controller('DataGridDemoSortCtrl',DataGridDemoSortCtrl);
var DataGridDemoToolCtrl=['$scope',function($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad((i+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }

    $scope.dgData = dgData;

    $scope.$on('custom', function (event) {
        alert("自定义操作");
    })
}];
angular.module('dist.ui').controller('DataGridDemoToolCtrl',DataGridDemoToolCtrl);
var DataGridDemoTreeCtrl=['$scope',function($scope) {

    $scope.dg={};

    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad((i+1),2);
        obj.num = (i+1)*100;

        var children = obj.children = [];
        if(i!=2) {
            for (var j = 0; j < 3; j++) {
                var child={};
                child.username='#child'+j;
                child.address='#address'+j;
                child.date='2014-07-'+pad((j+1),2);
                child.num = (j+1)*100;
                children.push(child);
                if(i==1 && j==1) {
                    var cr = child.children = [];
                    for (var k = 0; k < 3; k++) {
                        var c={};
                        c.username='##child'+k;
                        c.address='##address'+k;
                        c.date='2014-07-'+pad((k+1),2);
                        c.num = (k+1)*100;
                        cr.push(c);

                        if(k==1 && j==1) {
                            var cr2 = c.children = [];
                            for (var m = 0; m < 3; m++) {
                                var c2={};
                                c2.username='###child'+m;
                                c2.address='###address'+m;
                                c2.date='2014-07-'+pad((m+1),2);
                                c2.num = (m+1)*100;
                                cr2.push(c2);
                            }
                        }
                    }
                }
            }
        }
        dgData.push(obj);
    }

    $scope.dgData = dgData;

    // 节点展开
    $scope.itemOpenHandler = function (data, callback) {
        setTimeout(function () {
            console.log('itemOpenHandler......')
            var children = [];

            for (var j = 0; j < 4; j++) {
                var child={};
                child.sex=j%2;
                child.zw=j%2==0?'危险':'作业';
                child.username='@child'+j;
                child.address='address'+j;
                child.date='2014-07-'+pad((j+1),2);
                child.num = (j+1)*100;
                if(j==0) {
                    child.isbranch='true';
                }
                children.push(child);
            }

            callback(data, children);
        },1000)
    }
}];
angular.module('dist.ui').controller('DataGridDemoTreeCtrl',DataGridDemoTreeCtrl);
var dialogCtrl1=['$scope','wiDialog',function($scope,wiDialog) {

    $scope.dialogData={"username":"中科惠软","address":"长江路科技园五区三楼"};

    //使用字符串作为模板
    $scope.openByStringTpl = function () {
        wiDialog.open({
            plain:true,
            template:'<div style="color: red;height: 60px;padding: 10px;">使用字符串模板</div>',
            title:'字符串模板',
            width:280
        });
    };

    var scriptDialog;
    //使用script作为模板
    $scope.openByScriptTpl = function () {
        scriptDialog=wiDialog.open({
            template: 'firstDialogId',
            title:'script作为模板',
            scope: $scope,
            width:380
        });
    };
    $scope.closeScriptDialog=function(){
        scriptDialog.close();
    }


    //使用url作为模板，该url必须是一个html片段
    $scope.openDefaultByUrl = function () {
        wiDialog.open({
            template: 'demo/dialog/docs/template.html',
            closeByEscape:false,
            title:'url作为模板',
            scope: $scope,
            width:680//height是自适应的，不需要指定
        });
    };
}];
angular.module('dist.ui').controller('dialogCtrl1',dialogCtrl1);
var dialogCtrl2=['$scope','$rootScope','wiDialog',function($scope,$rootScope,wiDialog) {
    $scope.openNotify = function () {
        var dialog = wiDialog.open({
            template: '<p style="padding: 10px"> 使用dialog.closePromise.then(fn)来监听窗口关闭 </p><br>' +
                '<div style="float: right"><button type="button" ng-click="closeThisDialog(1)">关闭</button></div>',
            plain: true,
            width:300,
            height:170,
            title:'使用promise监听窗口关闭'
        });
        dialog.closePromise.then(function (data) {
            console.log('wiDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
        });
    };
    $scope.openDialog = function () {
        var dialog = wiDialog.open({
            template: '<p style="padding: 10px"> 使用$rootScope来监听窗口打开和关闭 </p><br>',
            plain: true,
            width:300,
            height:170,
            title:'使用$rootScope监听窗口关闭'
        });
    };
    $rootScope.$on('wiDialog.opened', function (e, $dialog) {
        console.log('打开了一个dialog窗口，ID为: ' + $dialog.attr('id'));
    });

    $rootScope.$on('wiDialog.closed', function (e, $dialog) {
        console.log('关闭了一个dialog窗口，ID为: ' + $dialog.attr('id'));
    });
}];
angular.module('dist.ui').controller('dialogCtrl2',dialogCtrl2);

var dialogCtrl3=['$scope','wiDialog',function($scope,wiDialog) {

    $scope.dialogData={"username":"中科惠软","address":"长江路科技园五区三楼"};

    $scope.openByScriptTpl = function () {
        wiDialog.open({
            template: 'firstDialogId',
            title:'script作为模板',
            scope: $scope,
            width:380,
            height:300
        });
    };
    $scope.sayHello=function(){
        console.log("弹出的dialog窗口调用到了scope中的sayHello()方法........");
    }

    $scope.openConfirm = function () {
        wiDialog.openConfirm({
            template: 'modalDialogId',
            width:600,
            closeByEscape:true,
            title:'confirm窗口'
        }).then(function (value) {
            console.log('Modal promise resolved. Value: ', '姓名：'+value.username+'---住址：'+value.address);
        }, function (reason) {
            console.log('Modal promise rejected. Reason: ', reason);
        });
    };
}];
angular.module('dist.ui').controller('dialogCtrl3',dialogCtrl3);
var dialogCtrl4=['$scope','wiDialog',function($scope,wiDialog) {

    $scope.openDialogWithNoHead=function(){
        wiDialog.open({
            plain:true,
            template:'<div style="color: red;height: 60px;padding: 10px;padding-top: 30px">无header的弹出框</div>',
            width:200,
            height:200,
            withoutHead:true
        });
    }
    $scope.openNoModalDialog=function(){
        wiDialog.open({
            plain:true,
            template:'<div style="color:red;padding: 5px">非模态的弹出框</div>',
            width:300,
            height:200,
            overlay:false,
            title:'非模态的弹出框'
        });
    }
    $scope.openTimed = function () {
        var dialog = wiDialog.open({
            template: '<p> 1秒后自己关闭! </p>',
            plain: true,
            title:'提示',
            width:200,
            closeByDocument: false,
            closeByEscape: false
        });
        setTimeout(function () {
            dialog.close();
        }, 1000);
    };
}];
angular.module('dist.ui').controller('dialogCtrl4',dialogCtrl4);
var dialogCtrl5=['$scope','wiDialog',function($scope,wiDialog) {

    var scriptDialog;
    //使用script作为模板
    $scope.openByScriptTpl = function () {
        scriptDialog=wiDialog.open({
            template: 'dialog4close',
            title:'script作为模板',
            scope: $scope,
            width:480
        });
    };
    $scope.openConfirmDialog = function () {
        wiDialog.openConfirm({
            template: 'dialog4close',
            title:'script作为模板',
            scope: $scope,
            width:480
        });
    };
    $scope.closeScriptDialog=function(){
        //使用openConfirm打开窗口时无效
        scriptDialog.close();
    }
    $scope.closeAll=function(){
        wiDialog.closeAll();
    }
    $scope.closeOne=function(){
        wiDialog.closeOne(scriptDialog.id);
    }
}];
angular.module('dist.ui').controller('dialogCtrl5',dialogCtrl5);


var FileUploadDemoCtrl1 = ['$scope', function($scope) {
    $scope.removef = function(f){
        console.log(f);
    };
}];
angular.module('dist.ui').controller('FileUploadDemoCtrl1',FileUploadDemoCtrl1);
var FileUploadDemoCtrl = ['$scope', function($scope) {
    $scope.responseText = undefined;
    $scope.$watch('responseText', function(newV, oldV){
        if(newV && newV != oldV){
            alert('返回的数据：' + newV);
            $scope.responseText = undefined;
        }
    });
}];
angular.module('dist.ui').controller('FileUploadDemoCtrl',FileUploadDemoCtrl);
var imageviewMainCtrl1=['$scope',function($scope) {
    //第一张图片不存在
    $scope.images = ['misc/imageview/B11.jpg','misc/imageview/B2.jpg','misc/imageview/B3.jpg'];

    $scope.openview = function(index) {
        $scope.openindex = index;
    }
}];
angular.module('dist.ui').controller('imageviewMainCtrl1',imageviewMainCtrl1);
var imageviewMainCtrl2=['$scope',function($scope) {
    $scope.open = function() {
        $scope.imagedata = getImageData();
    }

    //上一张回调
    $scope.previous = function() {
        v-=20;
        $scope.imagedata = getImageData();
    }

    //下一张回调
    $scope.next = function() {
        v+=20;
        $scope.imagedata = getImageData();
    }

    //生成测试用ImageData
    var c = document.createElement('canvas');
    var ctx=c.getContext("2d");
    var v = 1;
    function getImageData() {
        if (v > 255) {
            v = 1;
        } else if (v < 0) {
            v = 255;
        }

        var imgData=ctx.createImageData(400,300);
        for (var i=0;i<imgData.data.length;i+=4){
            imgData.data[i+0]=v;
            imgData.data[i+1]=v;
            imgData.data[i+2]=0;
            imgData.data[i+3]=255;
        }
        return imgData;
    }
}];
angular.module('dist.ui').controller('imageviewMainCtrl2',imageviewMainCtrl2);
var MenuDemoCtrl = ['$scope', function($scope) {
    var options = $scope.options = {
        pos0Arr: ['top', 'bottom', 'left', 'right'],
        pos1ArrX: ['left', 'right'],
        pos1ArrY: ['top', 'bottom'],
        pos0: 'bottom',
        pos1: 'left',
        isopen: false
    };
    options.pos1Arr = options.pos1ArrX;
    $scope.$watch('options.pos0',function(){
        if(options.pos0 == 'top' || options.pos0 == 'bottom'){
            options.pos1Arr = options.pos1ArrX;
            options.pos1 = 'left';
        }else{
            options.pos1Arr = options.pos1ArrY;
            options.pos1 = 'top';
        }
    });
    var ctrl = this;
    /**
     * id: string  菜单项 id
     * label: string  菜单项显示内容
     * icon: string  菜单项自定义图标
     * filterable: boolean  子菜单是否支持搜索
     * children: []  子菜单数据源
     * enabled: boolean  菜单项是否可用
     * event: string  可直接执行的表达式（复杂事件根据点击后返回的菜单项自定义）
     */
    ctrl.data = [
        {id: '0', label: 'node0'},
        {id: '1', label: 'node1'},
        {id: '2', label: 'node2'},
        {id: '3', label: 'node3'},
    ];
}];
angular.module('dist.ui').controller('MenuDemoCtrl',MenuDemoCtrl);
var MenuDemoCtrl0 = [function() {
    var ctrl = this;
    ctrl.data = [
        {id: '0', label: 'node0'},
        {id: '1', label: 'node1'},
        {id: '2', label: 'node2'},
        {id: '3', label: 'node3'},
        {id: '4', label: 'node4'},
        {id: '5', label: 'node5'},
        {id: '6', label: 'node6'},
        {id: '7', label: 'node7'},
        {id: '8', label: 'node8'},
        {id: '9', label: 'node9'},
        {id: '10', label: 'menu0'},
        {id: '11', label: 'menu1'},
        {id: '12', label: 'menu2'},
        {id: '13', label: 'menu3'},
        {id: '14', label: 'menu4'},
        {id: '15', label: 'menu5'},
        {id: '16', label: 'menu6'},
        {id: '17', label: 'menu7'},
        {id: '18', label: 'menu8'},
        {id: '19', label: 'menu9'}
    ];
}];
angular.module('dist.ui').controller('MenuDemoCtrl0',MenuDemoCtrl0);
var MenuDemoCtrl1=[function() {
    var ctrl = this;
    ctrl.data = [
        {id: '0', label: 'node0'},
        {id: '1', label: 'node1'},
        {id: '2', label: 'node2'}
    ];
}];
angular.module('dist.ui').controller('MenuDemoCtrl1',MenuDemoCtrl1);
var  MenuDemoCtrl2 = [function() {
    var ctrl = this;
    ctrl.data = [
        {id: '0', label: 'node0'},
        {id: '1', label: 'node1'},
        {id: '2', label: 'node2', filterable:true, children: [
            {id: 'a', label: 'nodea'},
            {id: 'b', label: 'nodeb'},
            {id: 'c', label: 'nodec'},
            {id: 'd', label: 'menua'},
            {id: 'e', label: 'menub'},
            {id: 'f', label: 'menuc'}
        ]},
        {id: '3', label: 'node3'},
        {id: '4', label: 'node4'},
        {id: '5', label: 'node5'}
    ];
}];
angular.module('dist.ui').controller('MenuDemoCtrl2',MenuDemoCtrl2);
var MenuDemoCtrl3 = ['$scope', function($scope) {
    $scope.vm = {
        selectFn: function(f){
            console.log(f);
        }
    };
    var ctrl = this;
    ctrl.data = [
        {id: '0', label: '简单 js 表达式', icon: 'misc/tempimg/menu/save.gif', event: 'alert(\'js表达式\')'},
        {id: '1', label: 'node1'},
        {id: '2', label: 'node2'},
        {id: '3', label: '禁用项', enabled: false}
    ];
}];
angular.module('dist.ui').controller('MenuDemoCtrl3',MenuDemoCtrl3);
var messagetipMainCtrl1 = ['$scope', 'wiMessageTip', function($scope, wiMessageTip) {
    var t = '我的新消息<br>我的新消息<br>';

    $scope.openbottom = function() {
        t = '我的新消息<br>'+t;
        wiMessageTip.open({
            width: 250,
            title: '从下往上弹出',
            position: 'bottom',
            content: t
        });
    };

    $scope.openright = function() {
        t = '我的新消息<br>'+t;
        wiMessageTip.open({
            width: 250,
            title: '从右往左弹出',
            position: 'right',
            content: t
        });
    };

    $scope.openclose = function() {
        t = '我的新消息<br>'+t;
        wiMessageTip.open({
            width: 250,
            title: '5秒后自动关闭',
            position: 'bottom',
            delay: 5,
            content: t
        });
    };

    $scope.openshake = function() {
        t = '我的新消息<br>'+t;
        wiMessageTip.open({
            width: 250,
            title: '弹出后抖动',
            position: 'right',
            isshake: true,
            content: t
        });
    };
}];
angular.module('dist.ui').controller('messagetipMainCtrl1',messagetipMainCtrl1);
var messagetipMainCtrl2 = ['$scope', 'wiMessageTip',function($scope, wiMessageTip) {
    var t = '我的新消息<br><input name="democlick" type="button" value="点击测试" ng-click="clickHandler()"></input><br>';
    var tipid;
    $scope.open = function() {
        tipid = wiMessageTip.open({
            width: 250,
            title: '新消息',
            position: 'bottom',
            content: t,
            click: $scope.clickHandler
        });
    };

    $scope.close = function() {
        wiMessageTip.closeOne(tipid);
    };

    $scope.clickHandler = function(e) {
        var elm = angular.element(e.target);
        if (elm.attr('name') == 'democlick') {
            alert('弹框中按钮点击');
        }
    }
}];
angular.module('dist.ui').controller('messagetipMainCtrl2',messagetipMainCtrl2);
var DatepickerDemoBasicCtrl = ['$scope',function($scope) {

    var vm = $scope;

    function pad(num, n) {
        return (new Array(n >(''+num).length ? (n - (''+num).length+1) : 0).join('0') + num);
    }

    vm.date = '20'+pad(parseInt(Math.random()*14+1),2)+'-'+pad(parseInt(Math.random()*10+1),2)+'-'+pad(parseInt(Math.random()*28+1),2);

    vm.onPickedHandler = function (data) {
        alert(data)
    };

    vm.onClearedHandler = function (data) {
        alert("日期被清空")
    }

}];
angular.module('dist.ui').controller('DatepickerDemoBasicCtrl',DatepickerDemoBasicCtrl);



PaginationDemo1Controller.$inject=["$scope","$q","$http","$log"];

function PaginationDemo1Controller($scope,$q,$http,$log){

    $scope.totalItems = 50;//分页总数
    $scope.currentPage = 4;//当前页数
    $scope.setPage = function (pageNo) {//设置目标页
        $scope.currentPage = pageNo;
    };
    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };


}
angular.module("dist.ui").controller("PaginationDemo1Controller",PaginationDemo1Controller)


PaginationDemo2Controller.$inject=["$scope","$q","$http","$log"];

function PaginationDemo2Controller($scope,$q,$http,$log){

    $scope.maxSize = 4;// 页面最大可见图标
    $scope.bigTotalItems = 175;//总共的分页项数
    $scope.bigCurrentPage = 1;//当前页


}
angular.module("dist.ui").controller("PaginationDemo2Controller",PaginationDemo2Controller)
var PanelDemoCtrl = ['$scope', function($scope) {
    $scope.isopen = true;
    $scope.isopen1 = true;
    $scope.toggle = function(){
        $scope.isopen = !$scope.isopen;
    };
}];
angular.module('dist.ui').controller('PanelDemoCtrl',PanelDemoCtrl);
var PanelDemoListenerCtrl = ['$scope', function($scope) {
    $scope.isopen = true;
    $scope.toggle = function(){
        $scope.isopen = !$scope.isopen;
    };
    $scope.opened = function(){
        console.log('opened');
    };
    $scope.closed = function(){
        console.log('closed');
    };
    $scope.col = function(){
        console.log('col');
    };
    $scope.exp = function(){
        console.log('exp');
    };
}];
angular.module('dist.ui').controller('PanelDemoListenerCtrl',PanelDemoListenerCtrl);
var PanelDemoApiCtrl = ['$scope', function($scope) {
    $scope.mypanel={};
    $scope.myFun=function(){
        console.log($scope.mypanel.options());
        console.log($scope.mypanel.element());
        console.log('当前状态：',$scope.mypanel.toggle()?'折叠':'展开');
    }
}];
angular.module('dist.ui').controller('PanelDemoApiCtrl',PanelDemoApiCtrl);
var PanelDemoToolsCtrl = ['$scope', function($scope) {
    var saveFun=function(e){
        alert('save event...');
        e.stopPropagation();
    };
    $scope.headtools = ['collapse',
        {name:'save',cls:'icon-save',opt:saveFun}
    ];
}];
angular.module('dist.ui').controller('PanelDemoToolsCtrl',PanelDemoToolsCtrl);
var PopupButtonDemoTreeCtrl = ['$scope', function($scope) {

    var vm = this;

    vm.mytree = {};

    vm.simpleData = [
        {id:'1',name:'无锡市',parentid:'root'},
        {id:'11',name:'新区',parentid:'1'},
        {id:'111',name:'赵钱孙',parentid:'11',type:'person'},
        {id:'112',name:'孙李周',parentid:'11',type:'person'},
        {id:'113',name:'周吴郑',parentid:'11',type:'person'}
    ];

    vm.clickHandler = function () {
        vm.selectedItem = vm.mytree.selectedItem();
        vm.isopen=false;
    }

}];
angular.module('dist.ui').controller('PopupButtonDemoTreeCtrl',PopupButtonDemoTreeCtrl);
var progressMainCtrl = ['$scope','$interval',function($scope,$interval) {
    var i, timer;
    $scope.value = 0;
    $scope.label = 'tips0';
    $scope.start = function(){
        timer && $interval.cancel(timer);
        i = 0;
        timer = $interval(function(){
            $scope.value = i;
            $scope.label = 'tips' + i;
            if(i==50) $interval.cancel(timer);
            i++;
        },100);
    };
}];
angular.module('dist.ui').controller('progressMainCtrl',progressMainCtrl);
var progressElemMainCtrl = ['$scope','$interval','$compile',function($scope,$interval,$compile) {
    var i, timer;
    $scope.value = 0;
    $scope.label = 100;
    $scope.start = function(){
        timer && $interval.cancel(timer);
        i = 0;
        timer = $interval(function(){
            $scope.value = i;
            $scope.label = 100 - i;
            if(i==100) $interval.cancel(timer);
            i += 2;
        },100);
    };
    $scope.labelelem = $compile('<div style="background: pink" ng-bind="label"></div>')($scope);
}];
angular.module('dist.ui').controller('progressElemMainCtrl',progressElemMainCtrl);
var progressTypeMainCtrl = ['$scope','$interval','$compile',function($scope,$interval) {
    var i, timer;
    $scope.value = 0;
    $scope.start = function(){
        timer && $interval.cancel(timer);
        i = 0;
        timer = $interval(function(){
            $scope.value = i;
            if(i==100) $interval.cancel(timer);
            i++;
        },100);
    };
}];
angular.module('dist.ui').controller('progressTypeMainCtrl',progressTypeMainCtrl);
var SearchinputDemoCtrl = ['$scope',function($scope) {
    var ctrl = this;
    ctrl.value = '';
    $scope.searchFun = function(selectItem){
        ctrl.value = selectItem;
    }
}];
angular.module('dist.ui').controller('SearchinputDemoCtrl',SearchinputDemoCtrl);

var tabsetMainCtrl1 = ['$scope',function($scope) {
    $scope.items = [
        { id:'d1', title:"原始标签 0", content:"标签内容 0", icon:"misc/icon/redflag16.png",src:'misc/temp/tabset_test.html', active: true},
        { id:'d2', title:"原始标签 1", content:"标签内容 1", active: false},
        { id:'d3', title:"原始标签 2", content:"标签内容 2", active: false}
    ];
    var i = 0;
    $scope.addTabAndOpen = function() {
        $scope.items.push({ id:'dtab'+i,title:"动态标签 "+ i, content:"动态标签内容 "+ i++, active:true});
    };
    $scope.selectTab = function(){
        $scope.items[0].active = true;
    };
    $scope.selectFun = function(data){// 标签页选中时的回调函数 - 参数: tab 的 data{wiid,src,icon,heading}
        console.log('select:', data.wiid);
    };
    $scope.beforeCloseFun = function(data){// 删除标签前的回调函数，若返回 false，中止删除 - 参数: tab 的 data{wiid,src,icon,heading}
        var res=confirm('确定要删除 wiid='+data.wiid+',heading='+data.heading+' 的标签页吗？');
        if(res!=true) return false;
    };
    $scope.closeFun = function(data){// 关闭标签页的回调函数 - 参数: tab 的 data{wiid,src,icon,heading}
        for(var i=0; i<$scope.items.length; i++){
            var item = $scope.items[i];
            if(data.wiid && data.wiid==item.wiid || data.heading && data.heading==item.title){
                $scope.items.splice(i, 1);
                break;
            }
        }
    };
}];
angular.module('dist.ui').controller('tabsetMainCtrl1',tabsetMainCtrl1);
var tabsetMainCtrl3 = ['$scope', function($scope) {
    $scope.vm={
        disabled: false
    }
}];
angular.module('dist.ui').controller('tabsetMainCtrl3',tabsetMainCtrl3);
var tabsetMethodCtrl = ['$scope',function($scope) {
    $scope.myTabset = {};
    $scope.options=function(){
        console.log($scope.myTabset.options());
    };
    $scope.select=function(){
        $scope.myTabset.select($scope.myTabset.getTab('wiid','3'));
    };
    $scope.close=function(){
        $scope.myTabset.close($scope.myTabset.getActiveTab());
    };
}];
angular.module('dist.ui').controller('tabsetMethodCtrl',tabsetMethodCtrl);
var tilelistCtrl = ['$scope', function($scope) {
    $scope.tilelistdata = [
        {color:'#1c1c84',name:'1'}
        ,{color:'#2c2c84',name:'2'}
        ,{color:'#3c3c84',name:'3'}
        ,{color:'#4c4c84',name:'4'}
        ,{color:'#5c5c84',name:'5'}
        ,{color:'#6c6c84',name:'6'}
        ,{color:'#7c7c84',name:'7'}
        ,{color:'#9c8c84',name:'8'}
        ,{color:'#ac9c84',name:'9'}
        ,{color:'#bcac84',name:'10'}
        ,{color:'#ccbc84',name:'11'}
        ,{color:'#dccc84',name:'12'}
        ,{color:'#ecdc84',name:'13'}
        ,{color:'#fcec84',name:'14'}
        ,{color:'#fcfc14',name:'15'}
        ,{color:'#cabc24',name:'16'}
        ,{color:'#dbcc34',name:'17'}
        ,{color:'#ecdc44',name:'18'}
    ];
}];
angular.module('dist.ui').controller('tilelistCtrl',tilelistCtrl);
var tilelistDataCtrl = ['$scope', function($scope) {
    var i = 0;
    $scope.setData = function() {
        if((i++)%2 == 0){
            $scope.tilelistdata = [
                {color:'#1c8c84',name:'1'}
                ,{color:'#2c8c84',name:'2'}
                ,{color:'#3c8c84',name:'3'}
                ,{color:'#4c8c84',name:'4'}
                ,{color:'#5c8c84',name:'5'}
                ,{color:'#6c8c84',name:'6'}
                ,{color:'#7c8c84',name:'7'}
                ,{color:'#9c8c84',name:'8'}
                ,{color:'#ac8c84',name:'9'}
            ];
        }else{
            $scope.tilelistdata = [
                {color:'#1c1c84',name:'1'}
                ,{color:'#2c2c84',name:'2'}
                ,{color:'#3c3c84',name:'3'}
                ,{color:'#4c4c84',name:'4'}
                ,{color:'#5c5c84',name:'5'}
            ];
        }
    };
    $scope.setData();
    $scope.clearData = function() {
        $scope.tilelistdata = [];
    };
}];
angular.module('dist.ui').controller('tilelistDataCtrl',tilelistDataCtrl);
var tooltipCtrl = ['$scope', function($scope) {
    $scope.dynamicTooltip = '此处输入动态提示';
    $scope.htmlTooltip = '自定义<b style="color: #0000ff">HTML</b>提示!';
}];
angular.module('dist.ui').controller('tooltipCtrl',tooltipCtrl);
var TransitionDemoCtrl = ['$scope','$transition', function($scope, $transition) {
    function transitionDone(){
        console.log('变换完成');
    }
    $scope.toggleStyle = function(e){
        var elem = (angular.element(e.target)).parent(),
            change = {'width': '300px'};
        $transition(elem, change).then(transitionDone, transitionDone);//transition （成功，失败）时执行回调函数，返回新的 promise 对象
    };
    $scope.toggleClass = function(e){
        var elem = (angular.element(e.target)).parent(),
            change = 'opened';
        $transition(elem, change).then(transitionDone, transitionDone);
    };
    $scope.toggleFun = function(e){
        var elem = (angular.element(e.target)).parent();
        var change = function(){
            elem.addClass('opened');
        };
        $transition(elem, change).then(transitionDone, transitionDone);
    };
}];
angular.module('dist.ui').controller('TransitionDemoCtrl',TransitionDemoCtrl);
var TreeDemoCustomCtrl = [function() {
    var vm = this;
    var simpleData = [
        {id:'2',name:'node2',pid:'root',cls:'specIcon'},
        {id:'1',name:'node1',pid:'root'},
        {id:'3',name:'node3',pid:'root'},
        {id:'4',name:'node4',pid:'root'},
        {id:'13',name:'node13',pid:'1'},
        {id:'12',name:'node12',pid:'1'},
        {id:'11',name:'node11',pid:'1'},
        {id:'21',name:'node21',pid:'2'},
        {id:'22',name:'node22',pid:'2'},
        {id:'23',name:'node23',pid:'2'},
        {id:'31',name:'node31',pid:'3'},
        {id:'32',name:'node32',pid:'3'},
        {id:'33',name:'node33',pid:'3'},
        {id:'111',name:'node111',pid:'11'},
        {id:'113',name:'node113',pid:'11'},
        {id:'112',name:'node112',pid:'11'}
    ];
    vm.simpleData = simpleData;
}];
angular.module('dist.ui').controller('TreeDemoCustomCtrl',TreeDemoCustomCtrl);
var TreeDemoDataproviderCtrl = [function() {
    var vm = this;
    var simpleData0 = [
        {id:'2',text:'node2',pid:'root',closed:true},
        {id:'1',text:'node1',pid:'root'},
        {id:'3',text:'node3',pid:'root'},
        {id:'4',text:'node4',pid:'root'},
        {id:'13',text:'node13',pid:'1',selected:true},
        {id:'12',text:'node12',pid:'1'},
        {id:'11',text:'node11',pid:'1'},
        {id:'21',text:'node21',pid:'2'},
        {id:'22',text:'node22',pid:'2'},
        {id:'23',text:'node23',pid:'2'},
        {id:'31',text:'node31',pid:'3'},
        {id:'32',text:'node32',pid:'3'},
        {id:'33',text:'node33',pid:'3'},
        {id:'111',text:'node111',pid:'11'},
        {id:'113',text:'node113',pid:'11'},
        {id:'112',text:'node112',pid:'11'}
    ];
    var simpleData1 = [
        {id:'2',text:'节点2',pid:'root'},
        {id:'1',text:'节点1',pid:'root'},
        {id:'3',text:'节点3',pid:'root'},
        {id:'4',text:'节点4',pid:'root'},
        {id:'13',text:'节点13',pid:'1'},
        {id:'12',text:'节点12',pid:'1'},
        {id:'11',text:'节点11',pid:'1'},
        {id:'21',text:'节点21',pid:'2'},
        {id:'22',text:'节点22',pid:'2'},
        {id:'23',text:'节点23',pid:'2'},
        {id:'31',text:'节点31',pid:'3'},
        {id:'32',text:'节点32',pid:'3'},
        {id:'33',text:'节点33',pid:'3'},
        {id:'111',text:'节点111',pid:'11'},
        {id:'113',text:'节点113',pid:'11'},
        {id:'112',text:'节点112',pid:'11'}
    ];
    var treeData = [
        {
            id:'1',
            text: '中国',
            selected: true,
            children: [{
                    id:'11',
                    text: '北京',
                    children: [
                        {id:'111',text: '朝阳区'},
                        {id:'112',text: '宣武区'},
                        {id:'113',text: '海淀区'}
                    ]
                },
                {
                    id:'12',
                    text: '河北',
                    children: [
                        {id:'121',text: '石家庄'},
                        {id:'122',text: '承德' },
                        {id:'123',text: '唐山' }
                    ]
                }
            ]
        },
        {
            id:'2',
            text: '美国',
            children: [
                {
                    id:'21',
                    text: '纽约',
                    children: [
                        { id:'211',  text: '曼哈顿区'},
                        { id:'212',  text: '皇后区'}
                    ]
                },
                {
                    id:'22',
                    text: '德克萨斯州',
                    children: [
                        { id:'221',  text: '休斯顿'},
                        { id:'222',  text: '达拉斯'}
                    ]
                },
                {   id:'23',text: '加利福尼亚州' }
            ]
        }
    ];
    vm.simpleData = simpleData0;
    vm.treeData = treeData;
    vm.myFun = function(){
        vm.simpleData = (vm.simpleData == simpleData0) ?
            simpleData1:simpleData0;
    };
}];
angular.module('dist.ui').controller('TreeDemoDataproviderCtrl',TreeDemoDataproviderCtrl);
var TreeDemoEventCtrl = [function() {
    var vm = this;
    var simpleData = [
        {id:'2',text:'node2',pid:'root'},
        {id:'1',text:'node1延迟',pid:'root',isbranch:true},
        {id:'3',text:'node3',pid:'root'},
        {id:'4',text:'node4',pid:'root'},
        {id:'13',text:'node13',pid:'1'},
        {id:'12',text:'node12',pid:'1'},
        {id:'11',text:'node11',pid:'1'},
        {id:'21',text:'node21',pid:'2'},
        {id:'22',text:'node22',pid:'2'},
        {id:'23',text:'node23',pid:'2'},
        {id:'31',text:'node31',pid:'3'},
        {id:'32',text:'node32',pid:'3'},
        {id:'33',text:'node33',pid:'3'},
        {id:'111',text:'node111',pid:'11'},
        {id:'113',text:'node113',pid:'11'},
        {id:'112',text:'node112',pid:'11'}
    ];
    vm.simpleData = simpleData;

    vm.itemClick = function (data) {
        vm.selectedItem = data.name;
    };
    // 节点展开前
    vm.beforeExpand = function (node) {
        console.log('展开前',node['name']);
    };
    // 节点展开
    vm.itemExpand = function (node) {
        console.log('展开',node['name']);
    };
    // 节点折叠前
    vm.beforeCollapse = function (node) {
        console.log('折叠前',node['name']);
        if(node['name']=='父节点') return false;
    };
    // 节点折叠
    vm.collapse = function (node) {
        console.log('折叠',node['name']);
    };
    // 节点选中前
    vm.beforeSelect = function (node) {
        console.log('选中前',node['name']);
        if(node['name']=='孙子节点一') return false;
    };
    // 节点选中
    vm.select = function (node) {
        console.log('选中',node['name']);
    };
    // 节点取消选中
    vm.cancelSelect = function (node) {
        console.log('取消选中',node['name']);
    };
    vm.loadBranch = function(data, success, error){
        setTimeout(function () {
            var pid=data['id']
                ,children = [
                    {id:pid+'1',text:pid+'1t',pid:pid},
                    {id:pid+'2',text:pid+'2延迟',pid:pid,isbranch:true},
                    {id:pid+'3',text:pid+'3t',pid:pid},
                    {id:pid+'4',text:pid+'4t',pid:pid}
                ];
            success(children);
        },2000);
    };
}];
angular.module('dist.ui').controller('TreeDemoEventCtrl',TreeDemoEventCtrl);
var TreeDemoFilterCtrl = [function() {
    var vm = this;

    vm.simpleData = [
        {id:'2',text:'node2',pid:'root'},
        {id:'1',text:'node1',pid:'root'},
        {id:'3',text:'node3',pid:'root'},
        {id:'4',text:'node4',pid:'root'},
        {id:'13',text:'node13',pid:'1'},
        {id:'12',text:'node12',pid:'1'},
        {id:'11',text:'node11',pid:'1'},
        {id:'21',text:'node21',pid:'2'},
        {id:'22',text:'node22',pid:'2'},
        {id:'23',text:'node23',pid:'2'},
        {id:'31',text:'node31',pid:'3'},
        {id:'32',text:'node32',pid:'3'},
        {id:'33',text:'node33',pid:'3'},
        {id:'111',text:'node111',pid:'11'},
        {id:'113',text:'node113',pid:'11'},
        {id:'112',text:'node112',pid:'11'}
    ];
}];
angular.module('dist.ui').controller('TreeDemoFilterCtrl',TreeDemoFilterCtrl);
var TreeDemoMethodCtrl = [function() {
    var vm = this;
    var simpleData0 = [
        {id:'2',text:'node2',pid:'root'},
        {id:'1',text:'node1',pid:'root'},
        {id:'3',text:'node3',pid:'root'},
        {id:'4',text:'node4',pid:'root'},
        {id:'13',text:'node13',pid:'1'},
        {id:'12',text:'node12',pid:'1'},
        {id:'11',text:'node11',pid:'1'},
        {id:'21',text:'node21',pid:'2'},
        {id:'22',text:'node22',pid:'2'},
        {id:'23',text:'node23',pid:'2'},
        {id:'31',text:'node31',pid:'3'},
        {id:'32',text:'node32',pid:'3'},
        {id:'33',text:'node33',pid:'3'},
        {id:'111',text:'node111',pid:'11'},
        {id:'113',text:'node113',pid:'11'},
        {id:'112',text:'node112',pid:'11'}
    ];
    var simpleData1 = [
        {id:'2',text:'节点2',pid:'root'},
        {id:'1',text:'节点1',pid:'root'},
        {id:'3',text:'节点3',pid:'root'},
        {id:'4',text:'节点4',pid:'root'},
        {id:'13',text:'节点13',pid:'1'},
        {id:'12',text:'节点12',pid:'1'},
        {id:'11',text:'节点11',pid:'1'},
        {id:'21',text:'节点21',pid:'2'},
        {id:'22',text:'节点22',pid:'2'},
        {id:'23',text:'节点23',pid:'2'},
        {id:'31',text:'节点31',pid:'3'},
        {id:'32',text:'节点32',pid:'3'},
        {id:'33',text:'节点33',pid:'3'},
        {id:'111',text:'节点111',pid:'11'},
        {id:'113',text:'节点113',pid:'11'},
        {id:'112',text:'节点112',pid:'11'}
    ];
    vm.mytree={};
    vm.options=function(){
        console.log(vm.mytree.options());
    };
    vm.simpleData = simpleData0;
    var simpleData = simpleData0;
    vm.loadData=function(){
        simpleData = (simpleData == simpleData0) ?
            simpleData1:simpleData0;
        vm.mytree.loadData(simpleData, false);
    };
    vm.getNode=function(){
        console.log(vm.mytree.getNode('text','node1'));
    };
    vm.getNodes=function(){
        console.log(vm.mytree.getNodes('pid','root'));
    };
    vm.getSelected=function(){
        console.log(vm.mytree.getSelected());
    };
    vm.select=function(){
        vm.mytree.select(vm.mytree.getNode('text','node1'));
    };
    vm.collapseNode=function(){
        vm.mytree.collapseNode(vm.mytree.getNode('text','node1'));
    };
    vm.expandNode=function(){
        vm.mytree.expandNode(vm.mytree.getNode('text','node1'));
    };
    vm.append=function(){
        var id = Math.round(Math.random()*Math.pow(10,5));
        var nodes = [
            {id:id,text:'node'+id,pid:'root'}
        ];
        vm.mytree.append(nodes);
    };
    vm.remove=function(){
        vm.mytree.remove(vm.mytree.getNode('text','node1'));
    };
    vm.updateNode=function(){
        vm.mytree.updateNode(vm.mytree.getNode('text','node1')
            ,{text: '天安门',cls:'specIcon'});
    };
}];
angular.module('dist.ui').controller('TreeDemoMethodCtrl',TreeDemoMethodCtrl);
var TreeDemoRendererCtrl = ['$scope',function($scope) {
    var vm = this;
    var simpleData = [
        {id:'2',text:'node2',pid:'root'},
        {id:'1',text:'node1',pid:'root'},
        {id:'3',text:'node3',pid:'root'},
        {id:'4',text:'node4',pid:'root'},
        {id:'13',text:'node13',pid:'1'},
        {id:'12',text:'node12',pid:'1'},
        {id:'11',text:'node11',pid:'1'},
        {id:'21',text:'node21',pid:'2'},
        {id:'22',text:'node22',pid:'2'},
        {id:'23',text:'node23',pid:'2'},
        {id:'31',text:'node31',pid:'3'},
        {id:'32',text:'node32',pid:'3'},
        {id:'33',text:'node33',pid:'3'},
        {id:'111',text:'node111',pid:'11'},
        {id:'113',text:'node113',pid:'11'},
        {id:'112',text:'node112',pid:'11'}
    ];
    vm.simpleData = simpleData;
    vm.mytree={};
    // 增
    $scope.$on('addNode', function (event,data) {
        var id = Math.round(Math.random()*Math.pow(10,5));
        var nodes = [
            {id:id,text:'node'+id,pid:data['id']}
        ];
        vm.mytree.append(nodes,data);
    });
    // 删
    $scope.$on('delNode', function (event,data) {
        vm.mytree.remove(data)
    });
    // 改
    $scope.$on('updateNode', function (event,data) {
        data['text'] += '@#$';
    })
}];
angular.module('dist.ui').controller('TreeDemoRendererCtrl',TreeDemoRendererCtrl);
var TreeDemoSelectCtrl = [function() {
    var vm = this;
    var simpleData = [
        {id:'2',text:'node2',pid:'root'},
        {id:'1',text:'node1',pid:'root'},
        {id:'3',text:'node3',pid:'root'},
        {id:'4',text:'node4',pid:'root'},
        {id:'13',text:'node13',pid:'1'},
        {id:'12',text:'node12',pid:'1'},
        {id:'11',text:'node11',pid:'1'},
        {id:'21',text:'node21',pid:'2'},
        {id:'22',text:'node22',pid:'2'},
        {id:'23',text:'node23',pid:'2'},
        {id:'31',text:'node31',pid:'3'},
        {id:'32',text:'node32',pid:'3'},
        {id:'33',text:'node33',pid:'3'},
        {id:'111',text:'node111',pid:'11'},
        {id:'113',text:'node113',pid:'11'},
        {id:'112',text:'node112',pid:'11'}
    ];
    var cascadeData = [
        {id:'2',text:'节点2',pid:'root'},
        {id:'1',text:'节点1',pid:'root'},
        {id:'3',text:'节点3',pid:'root'},
        {id:'4',text:'节点4',pid:'root'},
        {id:'13',text:'节点13',pid:'1'},
        {id:'12',text:'节点12',pid:'1'},
        {id:'11',text:'节点11',pid:'1'},
        {id:'21',text:'节点21',pid:'2'},
        {id:'22',text:'节点22',pid:'2'},
        {id:'23',text:'节点23',pid:'2'},
        {id:'31',text:'节点31',pid:'3'},
        {id:'32',text:'节点32',pid:'3'},
        {id:'33',text:'节点33',pid:'3'},
        {id:'111',text:'节点111',pid:'11'},
        {id:'113',text:'节点113',pid:'11'},
        {id:'112',text:'节点112',pid:'11'}
    ];
    vm.mul = true;
    vm.myFun=function(){
        vm.mul=!vm.mul;
    };
    vm.simpleData = simpleData;
    vm.cascadeData = cascadeData;
}];
angular.module('dist.ui').controller('TreeDemoSelectCtrl',TreeDemoSelectCtrl);

var HistogramController = ['$scope',function($scope) {
    $scope.series = ['收件','退件','已办'];
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.options={
        legend: { display: true},
    }
    $scope.data = [
        [500, 600, 700, 800, 400, 580, 4000],
        [100, 20, 50, 150, 50, 80, 2100],
        [400, 480, 650, 650, 350, 500, 1900]
    ];
}];
angular.module('dist.ui').controller('HistogramController',HistogramController);
var PieChartController = ['$scope',function($scope) {
	 $scope.options={
        legend: { display: true},
    }
    $scope.labels2 = ["收件", "退件", "已办"];
    $scope.data2 = [10000, 3000, 7000];
}];
angular.module('dist.ui').controller('PieChartController',PieChartController);

var UiGridDemo1Controller = ['$scope',function($scope) {
    $scope.gridOptions = {
        showGridFooter:false,
        showColumnFooter:true,
       enableRowSelection:true,
        enableRowHeaderSelection: false,
        multiSelect:false,
        enableSorting: true,
        rowHeight:30,
        enableGridMenu:true,
        columnDefs: [
            { field: '项目编号', width: '10%',footerCellTemplate: '<div class="ui-grid-cell-contents" >总数：4</div>' },
            { field: '项目名称', width: '25%',  },
            { field: '当前环节', width: '10%' },
            { field: '建设单位', width: '25%',  },
            { field: '承诺办结日期', width: '10%' },
            { field: '剩余时间', width: '10%',footerCellTemplate: '<div class="ui-grid-cell-contents" style="background-color: Red;color: White">超期：4</div>'  },
            { field: '操作', width: '10%', footerCellTemplate: '<div class="ui-grid-cell-contents" >代办：4</div>'}
        ]
    };

	var data=[{
  "项目编号": "TJ2016043",
  "项目名称": "XX市宁杭南路甲城地块综XX市宁杭南路甲城地块综",
  "当前环节": "窗口收件",
  "建设单位":"(未命名)",
  "承诺办结日期":"2016-07-22",
  "剩余时间":"超期11天5.7小时",
  "操作":"办理"
},
  {
    "项目编号": "TJ2016043",
    "项目名称": "XX市宁杭南路甲城地块综XX市宁杭南路甲城地块综",
    "当前环节": "窗口收件",
    "建设单位":"(未命名)",
    "承诺办结日期":"2016-07-22",
    "剩余时间":"超期11天5.7小时",
    "操作":"办理"
  },
  {
    "项目编号": "TJ2016043",
    "项目名称": "(未命名)",
    "当前环节": "窗口收件",
    "建设单位":"(未命名)",
    "承诺办结日期":"2016-07-22",
    "剩余时间":"超期11天5.7小时",
    "操作":"办理"
  },
  {
    "项目编号": "TJ2016043",
    "项目名称": "XX市宁杭南路甲城地块综XX市宁杭南路甲城地块综",
    "当前环节": "窗口收件",
    "建设单位":"春城控股集团公司",
    "承诺办结日期":"2016-07-22",
    "剩余时间":"超期11天5.7小时",
    "操作":"办理"
  },
  {
    "项目编号": "TJ2016043",
    "项目名称": "(未命名)",
    "当前环节": "窗口收件",
    "建设单位":"(未命名)",
    "承诺办结日期":"2016-07-22",
    "剩余时间":"超期11天5.7小时",
    "操作":"办理"
  }]

    $scope.gridOptions.data = data;
   

    $scope.getTableHeight = function() {
        var rowHeight = 30; // your row height
        var headerHeight = 30; // your header height
        var scrollHeight=50;
        return {
            height: ($scope.gridOptions.data.length * rowHeight + headerHeight+scrollHeight) + "px"
        };
    };
}];

angular.module('dist.ui').controller('UiGridDemo1Controller',UiGridDemo1Controller);
var PieChartController = ['$scope',function($scope) {
	 $scope.options={
        legend: { display: true},
    }
    $scope.labels2 = ["收件", "退件", "已办"];
    $scope.data2 = [10000, 3000, 7000];
}];
angular.module('dist.ui').controller('PieChartController',PieChartController);
var UiGridDemo3Ctrl = ['$scope','uiGridConstants',function($scope,uiGridConstants) {
$scope.gridOptionsSimple = {
        rowHeight: 36,
        data: [
          {
              "name": "Ethel Price",
              "gender": "female",
              "company": "Enersol"
          },
          {
              "name": "Claudine Neal",
              "gender": "female",
              "company": "Sealoud"
          },
          {
              "name": "Beryl Rice",
              "gender": "female",
              "company": "Velity"
          },
          {
              "name": "Wilder Gonzales",
              "gender": "male",
              "company": "Geekko"
          },
          {
              "name": "Georgina Schultz",
              "gender": "female",
              "company": "Suretech"
          },
          {
              "name": "Carroll Buchanan",
              "gender": "male",
              "company": "Ecosys"
          },
          {
              "name": "Valarie Atkinson",
              "gender": "female",
              "company": "Hopeli"
          },
          {
              "name": "Schroeder Mathews",
              "gender": "male",
              "company": "Polarium"
          },
          {
              "name": "Lynda Mendoza",
              "gender": "female",
              "company": "Dogspa"
          },
          {
              "name": "Sarah Massey",
              "gender": "female",
              "company": "Bisba"
          },
          {
              "name": "Robles Boyle",
              "gender": "male",
              "company": "Comtract"
          },
          {
              "name": "Evans Hickman",
              "gender": "male",
              "company": "Parleynet"
          },
          {
              "name": "Dawson Barber",
              "gender": "male",
              "company": "Dymi"
          },
          {
              "name": "Bruce Strong",
              "gender": "male",
              "company": "Xyqag"
          },
          {
              "name": "Nellie Whitfield",
              "gender": "female",
              "company": "Exospace"
          },
          {
              "name": "Jackson Macias",
              "gender": "male",
              "company": "Aquamate"
          },
          {
              "name": "Pena Pena",
              "gender": "male",
              "company": "Quarx"
          },
          {
              "name": "Lelia Gates",
              "gender": "female",
              "company": "Proxsoft"
          },
          {
              "name": "Letitia Vasquez",
              "gender": "female",
              "company": "Slumberia"
          },
          {
              "name": "Trevino Moreno",
              "gender": "male",
              "company": "Conjurica"
          }
        ]
      };
      
      $scope.gridOptionsComplex = {
        enableFiltering: true,
        showFooter: true,
        rowHeight: 36,
        columnDefs: [
          { name: 'name', aggregationType: uiGridConstants.aggregationTypes.count, width: 150 },
          { name: 'gender', filter: { term: 'male' }, width: 150, enableCellEdit: false, 
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
              if (grid.getCellValue(row,col) === 'male') {
                return 'blue';
              } else if (grid.getCellValue(row,col) === 'female') {
                return 'pink';
              }
            } 
          },
          { name: 'age', aggregationType: uiGridConstants.aggregationTypes.avg, width: 100 },
          { name: 'company', enableFiltering: false, width: 200 }
        ],
        data: [
          {
              "name": "Ethel Price",
              "gender": "female",
              "company": "Enersol",
              "age": 25
          },
          {
              "name": "Claudine Neal",
              "gender": "female",
              "company": "Sealoud",
              "age": 19
          },
          {
              "name": "Beryl Rice",
              "gender": "female",
              "company": "Velity",
              "age": 44
          },
          {
              "name": "Wilder Gonzales",
              "gender": "male",
              "company": "Geekko",
              "age": 26
          },
          {
              "name": "Georgina Schultz",
              "gender": "female",
              "company": "Suretech",
              "age": 53
          },
          {
              "name": "Carroll Buchanan",
              "gender": "male",
              "company": "Ecosys",
              "age": 64
          },
          {
              "name": "Valarie Atkinson",
              "gender": "female",
              "company": "Hopeli",
              "age": 35
          },
          {
              "name": "Schroeder Mathews",
              "gender": "male",
              "company": "Polarium",
              "age": 29
          },
          {
              "name": "Lynda Mendoza",
              "gender": "female",
              "company": "Dogspa",
              "age": 49
          },
          {
              "name": "Sarah Massey",
              "gender": "female",
              "company": "Bisba",
              "age": 40
          },
          {
              "name": "Robles Boyle",
              "gender": "male",
              "company": "Comtract",
              "age": 32
          },
          {
              "name": "Evans Hickman",
              "gender": "male",
              "company": "Parleynet",
              "age": 38
          },
          {
              "name": "Dawson Barber",
              "gender": "male",
              "company": "Dymi",
              "age": 21
          },
          {
              "name": "Bruce Strong",
              "gender": "male",
              "company": "Xyqag",
              "age": 61
          },
          {
              "name": "Nellie Whitfield",
              "gender": "female",
              "company": "Exospace",
              "age": 54
          },
          {
              "name": "Jackson Macias",
              "gender": "male",
              "company": "Aquamate",
              "age": 49
          },
          {
              "name": "Pena Pena",
              "gender": "male",
              "company": "Quarx",
              "age": 25
          },
          {
              "name": "Lelia Gates",
              "gender": "female",
              "company": "Proxsoft",
              "age": 54
          },
          {
              "name": "Alfred Oscar",
              "gender": "male",
              "company": "Transprop",
              "age": 34
          },
          {
              "name": "John Alfred",
              "gender": "male",
              "company": "Haymans",
              "age": 70
          },
          {
              "name": "Leonie Warren",
              "gender": "female",
              "company": "Hilltop",
              "age": 25
          },
          {
              "name": "Belinda Gosford",
              "gender": "female",
              "company": "Archison",
              "age": 42
          },
          {
              "name": "Tracey Misoni",
              "gender": "female",
              "company": "Verizona",
              "age": 34
          },
          {
              "name": "Trevino Moreno",
              "gender": "male",
              "company": "Conjurica",
              "age": 31
          }
        ]
      };
}];
angular.module('dist.ui').controller('UiGridDemo3Ctrl',UiGridDemo3Ctrl);



FormElementController.$inject=["$scope","$q","$http","$log"];

function FormElementController($scope,$q,$http,$log){

    $scope.totalItems = 50;//分页总数
    $scope.currentPage = 4;//当前页数
    $scope.setPage = function (pageNo) {//设置目标页
        $scope.currentPage = pageNo;
    };
    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };


}
angular.module("dist.ui").controller("FormElementController",FormElementController)


FormUploadController.$inject=["$scope","$q","$http","$log"];

function FormUploadController($scope,$q,$http,$log){

    $scope.maxSize = 4;// 页面最大可见图标
    $scope.bigTotalItems = 175;//总共的分页项数
    $scope.bigCurrentPage = 1;//当前页


}
angular.module("dist.ui").controller("FormUploadController",FormUploadController)



wiTabController2.$inject=["$scope","$q","$http","$log"];

function wiTabController2($scope,$q,$http,$log){

		$scope.tabConfig={
			"lists":[
			{"name":"项目1","param":"","active":false},
			{"name":"项目2","param":"","active":true},
			{"name":"项目3","param":"","active":false}
			]
		};
		$scope.tabClick=function(index,list){
			console.info(index,list);
		}
}
angular.module("dist.ui").controller("wiTabController2",wiTabController2)