## һ��Flex ������ʲô��

Flex �� Flexible Box ����д����Ϊ"���Բ���"������Ϊ��״ģ���ṩ��������ԡ�

�κ�һ������������ָ��Ϊ Flex ���֡�


    .box{
      display: flex;
    }
����Ԫ��Ҳ����ʹ�� Flex ���֡�


    .box{
      display: inline-flex;
    }

��Ϊ Flex �����Ժ���Ԫ�ص�float��clear��vertical-align���Խ�ʧЧ��


## ������������

���� Flex ���ֵ�Ԫ�أ���Ϊ Flex ������flex container�������"����"������������Ԫ���Զ���Ϊ������Ա����Ϊ Flex ��Ŀ��flex item�������"��Ŀ"��


����Ĭ�ϴ��������᣺ˮƽ�����ᣨ**main axis**���ʹ�ֱ�Ľ����ᣨ**cross axis**��������Ŀ�ʼλ�ã���߿�Ľ���㣩����**main start**������λ�ý���**main end**��������Ŀ�ʼλ�ý���**cross start**������λ�ý���**cross end**��

��ĿĬ�����������С�������Ŀռ�ݵ�����ռ����**main size**��ռ�ݵĽ�����ռ����**cross size**��

![bg2015071004.png](./images/bg2015071004.png "")

## ��������������

### flex-direction
��������ķ��򣨼���Ŀ�����з��򣩡�


    .box {
      flex-direction: row | row-reverse | column | column-reverse;
    }
### flex-wrap����
Ĭ������£���Ŀ������һ���ߣ��ֳ�"����"���ϡ�flex-wrap���Զ��壬���һ�������Ų��£���λ���
    
    .box{
      flex-wrap: nowrap | wrap | wrap-reverse;
    }
    
###  flex-flow

flex-flow������flex-direction���Ժ�flex-wrap���Եļ�д��ʽ��Ĭ��ֵΪrow nowrap��


    .box {
      flex-flow: <flex-direction> || <flex-wrap>;
    }
###  justify-content����
justify-content���Զ�������Ŀ�������ϵĶ��뷽ʽ��


    .box {
      justify-content: flex-start | flex-end | center | space-between | space-around;
    }
    
###  align-items����
align-items���Զ�����Ŀ�ڽ���������ζ��롣


    .box {
      align-items: flex-start | flex-end | center | baseline | stretch;
    }
    
###  align-content����

align-content���Զ����˶�����ߵĶ��뷽ʽ�������Ŀֻ��һ�����ߣ������Բ������á�


    .box {
      align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    }

## �ġ���Ŀ������

###  order����
order���Զ�����Ŀ������˳����ֵԽС������Խ��ǰ��Ĭ��Ϊ0��


    .item {
      order: <integer>;
    }
    
###  flex-grow����
flex-grow���Զ�����Ŀ�ķŴ������Ĭ��Ϊ0�����������ʣ��ռ䣬Ҳ���Ŵ�


    .item {
      flex-grow: <number>; /* default 0 */
    }


���������Ŀ��flex-grow���Զ�Ϊ1�������ǽ��ȷ�ʣ��ռ䣨����еĻ�����

���һ����Ŀ��flex-grow����Ϊ2��������Ŀ��Ϊ1����ǰ��ռ�ݵ�ʣ��ռ佫���������һ����


### flex-shrink����
flex-shrink���Զ�������Ŀ����С������Ĭ��Ϊ1��������ռ䲻�㣬����Ŀ����С��


    .item {
      flex-shrink: <number>; /* default 1 */
    }
    
���������Ŀ��flex-shrink���Զ�Ϊ1�����ռ䲻��ʱ�������ȱ�����С��

���һ����Ŀ��flex-shrink����Ϊ0��������Ŀ��Ϊ1����ռ䲻��ʱ��ǰ�߲���С��

��ֵ�Ը�������Ч��

### flex-basis����
flex-basis���Զ������ڷ������ռ�֮ǰ����Ŀռ�ݵ�����ռ䣨main size�������������������ԣ����������Ƿ��ж���ռ䡣����Ĭ��ֵΪauto������Ŀ�ı�����С��


    .item {
      flex-basis: <length> | auto; /* default auto */
    }
    
��������Ϊ��width��height����һ����ֵ������350px��������Ŀ��ռ�ݹ̶��ռ䡣



###  flex����
flex������flex-grow, flex-shrink �� flex-basis�ļ�д��Ĭ��ֵΪ0 1 auto�����������Կ�ѡ��


    .item {
      flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    }

���������������ֵ��auto (1 1 auto) �� none (0 0 auto)��

��������ʹ��������ԣ������ǵ���д������������ԣ���Ϊ��������������ֵ


### align-self����
align-self������������Ŀ����������Ŀ��һ���Ķ��뷽ʽ���ɸ���align-items���ԡ�Ĭ��ֵΪauto����ʾ�̳и�Ԫ�ص�align-items���ԣ����û�и�Ԫ�أ����ͬ��stretch��


    .item {
      align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }

�����Կ���ȡ6��ֵ������auto����������align-items������ȫһ�¡�