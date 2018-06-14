## ���õ�javascript���ģʽ

> ���ģʽ̫���ˣ�ò����23�֣���ʵ������ƽʱ�Ĺ�����û�б�Ҫ����ȥ��ʲô�������ģʽ���������ڲ��������Ѿ��������ģʽ���е�һ�֡�
����ּ���ܽ�ƽʱ�����˵�õıȽ϶�����ģʽ��

### ʲô�����ģʽ


�������ģʽ��Design pattern����һ�ױ�����ʹ�á�������֪���ġ����������Ŀ�ġ�������ƾ�����ܽᡣ

����ʹ�����ģʽ��Ϊ�˿����ô��롢�ô�������ױ��������⡢��֤����ɿ��ԡ� �������ʣ����ģʽ�ڼ���������ϵͳ���Ƕ�Ӯ�ģ����ģʽʹ��������������̻������ģʽ���������̵Ļ�ʯ���磬��ͬ���õĽṹһ����

 

#### ʵ�������

���� ���ģʽ���Բ���ֽ��̸����֪ʶ���⿴�����Ϊ�Լ����ˣ���ֻ�Ǿ���֮��֮�������ģʽ�����Ǵ�ʵ��������ʵ����ȥ�ģ�������뾭����٣�Ҳ��̫��������������ģʽ�����������������ǿ���˱��빦�׶����൱��ʵ�ġ�

�������û������������������Ҳ��̫������������ģʽ

## ����ģʽ��
���

����������һ���������������ռ䲢��һ����ص����Ժͷ�����֯��һ��Ķ�����������Ա�ʵ��������ô��ֻ�ܱ�ʵ����һ�Ρ�

�ص㣺��

- ���������������ռ䣬�Ӷ����ȫ�ֱ�����������Σ�ա�
- ���÷�֧����������װ�����֮��Ĳ��졣
- ���԰Ѵ�����֯�ĸ�Ϊһ�壬�����Ķ���ά����

����ʵ�֣�

    
    var Singleton = {
    
        attribute:true,
    
        method1:function(){},
    
    ���� method2:function(){}
    };
    
 

### Ӧ�ó�����

��������ģʽ������ƽʱ��Ӧ�����õıȽ϶�ģ��൱�ڰ����ǵĴ����װ��һ��������ֻ�Ǳ�¶һ����ڣ��Ӷ�����ȫ����������Ⱦ��


## ����ģʽ:
���

��������ģʽ�Ķ��壺�ṩ��������Ľӿڣ���˼���Ǹ����쵼�������ߣ���ָʾ����������������Ӧ�Ĳ�Ʒ�����󣩡�

- ����һ�����󳣳���Ҫ���ӵĹ��̣����Բ��ʺ���һ�����ӵĶ����С�

- ����������ܻᵼ�´������ظ����룬Ҳ�����ṩ�����㹻����ĳ���

- �������ǰѳ�Ա����Ĵ�������ת����һ���ⲿ���󣬺ô�������������֮������(Ҳ�����໥Ӱ��)

���ࣺ

 �� **�򵥹���ģʽ** ��ʹ��һ���࣬ͨ��Ϊ���壬������ʵ����

����**���ӹ���ģʽ** �����ǣ������Ա�����ʵ�л��Ƶ������У����������д����ӿڷ����Ա㴴����ʱ��ָ���Լ��Ķ������͡�

 ��������ֻ�Դ��������е�һ����������д�������Щ������**������̳У�����֮�����໥������**�������ҵ���߼�����������н��б�д��
 
����ʵ�֣� 

�򵥹���ģʽ����


    var XMLHttpFactory =function(){};������������//����һ���򵥹���ģʽ
    ����XMLHttpFactory.createXMLHttp =function(){
    ������ var XMLHttp = null;
    ��������if (window.XMLHttpRequest){
    ������������XMLHttp = new XMLHttpRequest()
    ������ }else if (window.ActiveXObject){
    ������������XMLHttp = new ActiveXObject("Microsoft.XMLHTTP")
    ��������}
    ����return XMLHttp;
    ����}
    ����//XMLHttpFactory.createXMLHttp()����������ݵ�ǰ�����ľ����������һ��XHR����
    ����var AjaxHander =function(){
    ��������var XMLHttp = XMLHttpFactory.createXMLHttp();
    ��������...
    ����}
    

### ����ģʽ���

��������ģʽ������һ������Ĵ������̣��˶���ֻ��һ��������ʵ�������ṩһ����������ȫ�ַ��ʵ㡣Ҳ����˵�������Ǳ�֤һ����ֻ��һ��ʵ����ʵ�ֵķ���һ�������ж�ʵ����������������ֱ�ӷ��أ���������ھʹ������ٷ��أ����ȷ����һ����ֻ��һ��ʵ������

 

����ʵ�֣�

��   ������ʵ���кܶ��֣�����ֻ�������е�һ�֣�ʹ��~~�հ���ʽ~~ (IIFE)��ʵ�ֵ������������£�


    var single = (function(){
        var unique;
    
        function getInstance(){
    ��������// �����ʵ�����ڣ���ֱ�ӷ��أ�����Ͷ���ʵ����
            if( unique === undefined ){
                unique = new Construct();
            }
            return unique;
        }
    
        function Construct(){
            // ... ���ɵ����Ĺ��캯���Ĵ���
        }
    
        return {
            getInstance : getInstance
        }
    })();

     

����Ĵ����У�unique���Ƿ��ض�������ã��� getInstance���Ǿ�̬�������ʵ����Construct ���Ǵ���ʵ���Ĺ��캯����
 
����ͨ�� single.getInstance() ����ȡ������������ÿ�ε��þ���ȡ��ͬһ������������� ����ģʽ ��ʵ�ֵ�Ч����
 

ʹ�ó�����

����ģʽ��һ�ֳ��õ�ģʽ����һЩ������������ֻ��Ҫһ��������ȫ�ֻ��桢�������window������js�����У�����ģʽ����;ͬ���ǳ��㷺��

����һ�£������ǵ�����¼��ť��ʱ��ҳ���л����һ����¼�򣬶����������Ψһ�ģ����۵������ٴε�¼��ť���������ֻ�ᱻ����һ�Ρ���������¼�������ʺ��õ���ģʽ��

�ܽ�һ������ʹ�ó�����

1. �������������������ռ�

2. ��������ģʽ�����԰Ѵ�����֯�ĸ�Ϊһ�£������Ķ���ά��
 

## �۲���ģʽ����������ģʽ��
 

### ���

�������������һ��һ�Զ��������ϵ���Ա㵱һ�������״̬�����ı�ʱ���������������Ķ��󶼵õ�֪ͨ���Զ�ˢ�£�Ҳ����Ϊ�Ƿ�������ģʽ��

����Ҫһ�ָ߼��ĳ�����ԣ��Ա㶩�����ܹ��˴˶����ط����ı䣬�����з��ܹ������κ�����������Ķ����ߡ���

### Ӧ�ó���������

���ģʽҪ��˵Ӧ�ó������ȽϺ����⡣

���磬����԰������һ�����ĵİ�ť��ò����bug��������СA,СB,СC���������ҵĲ��ͣ����ҵĲ���һ�и���ʱ���ͻ�ͳһ�����ʼ��������������ˣ��ͻ�֪ͨ��Щ������

#### ��������ģʽ���������£�

1. ȷ��˭�Ƿ�����(�����ҵĲ���)��

2. Ȼ�������������һ�������б������ڴ�Żص�������֪ͨ�����ߡ�

3. ������Ϣ����������Ҫ������������б������δ��������ŵĶ����߻ص�������

4. �˶������粻���ٽ��յ���Щ���ĵ���Ϣ�ˣ��Ϳ���ȡ������