## Q1 �ж�һ�������Ƿ��ǻ��ģ�
������ָ����ͬ�Ĵʻ����ӣ��������е���λ�û�ߵ�������������β�ػ�����Ȥ���������ģ�Ҳ�лػ������� mamam redivider .

�ܶ����õ���������Ŀ�ǳ������뵽��for ���ַ����ߵ���ĸ˳��Ȼ��ƥ������ˡ�

��ʵ��Ҫ�Ŀ���ľ��Ƕ���reverse��ʵ�֡���ʵ���ǿ��������ֳɵĺ��������ַ���ת�������飬���˼·����Ҫ�����ǿ���ӵ�и�������ɶ�ȥ�����ַ�����һЩ������

    function checkPalindrom(str) {  
        return str == str.split('').reverse().join('');
    }

## Q2 ȥ��һ�����������ظ���ֵ


����������������ǰ���������У���Ҫ������˶�Object��ʹ�ã�����key������ɸѡ��

    
    /**
    * unique an array 
    **/
    let unique = function(arr) {  
      let hashTable = {};
      let data = [];
      for(let i=0,l=arr.length;i<l;i++) {
        if(!hashTable[arr[i]]) {
          hashTable[arr[i]] = true;
          data.push(arr[i]);
        }
      }
      return data
    
    }
    
    module.exports = unique; 


#### ����,��������es6��set

    var arr = [1,2,3,3,4,5,5];
    var set = new Set(arr);
    var newArr = Array.from(set);
 or   
 
    [...new Set(arr)]

> ES6�ṩ�����ݽṹSet�����������飬����û���ظ�ֵ��

> ����������ȥ��`[...new Set(array)]`
>
> Array.from()�������Խ�Set�ṹת��Ϊ����`Array.from(new Set(array))`


## Q3 ͳ��һ���ַ�������������ĸ
����һ��Ӣ��������Ӣ���ַ��ܣ��ҳ��ظ����ִ���������ĸ

    ���� �� afjghdfraaaasdenas 
    
    ��� �� a
ǰ����ֹ�ȥ�ص��㷨��������Ҫ��ͳ���ظ�������

    function findMaxDuplicateChar(str) {  
      if(str.length == 1) {
        return str;
      }
      let charObj = {};
      for(let i=0;i<str.length;i++) {
        if(!charObj[str.charAt(i)]) {
          charObj[str.charAt(i)] = 1;
        }else{
          charObj[str.charAt(i)] += 1;
        }
      }
      let maxChar = '',
          maxValue = 1;
      for(var k in charObj) {
        if(charObj[k] >= maxValue) {
          maxChar = k;
          maxValue = charObj[k];
        }
      }
      return maxChar;
    
    }
    
    module.exports = findMaxDuplicateChar;  
    
## Q4 �����㷨

ð���������ֽ�Ϊ�������ұ�����������㷨һ����Ҫ������ġ�

ð�������㷨�������αȽϴ�С��С�ĺʹ�Ľ���λ���ϵĽ�����

    function bubbleSort(arr) {  
        for(let i = 0,l=arr.length;i<l-1;i++) {
            for(let j = i+1;j<l;j++) { 
              if(arr[i]>arr[j]) {
                    let tem = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tem;
                }
            }
        }
        return arr;
    }
    module.exports = bubbleSort; 
 
����ð�������⣬��ʵ���кܶ����� ��������,��������ϣ������ȡ�

ÿһ�������㷨���и��Ե��ص㡣ȫ������Ҳ����Ҫ�������ĵ�һ��Ҫ��Ϥ�����㷨�� 

�������������Ч�ʺܸ�

> �ο�ĳ��Ԫ��ֵ����С������ֵ���ŵ��������У���������ֵ��Ԫ�ؾͷŵ��������У�Ȼ��ݹ������һ����������Ĳ��������غϲ�����������Ѿ��ź�˳��������ˡ�

    function quickSort(arr) {
    
        if(arr.length<=1) {
            return arr;
        }
    
        let leftArr = [];
        let rightArr = [];
        let q = arr[0];
        for(let i = 1,l=arr.length; i<l; i++) {
            if(arr[i]>q) {
                rightArr.push(arr[i]);
            }else{
                leftArr.push(arr[i]);
            }
        }
    
        return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
    }
    
    module.exports = quickSort;  

�������һ��ѧϰ�ĵ�ַ��ͨ��������ʾ�㷨��ʵ�֡�

(http://math.hws.edu/eck/jsdemo/sortlab.html "")HTML5 Canvas Demo: Sorting Algorithms

## Q7 �ҳ����������������ֵ����:

    ���� [10,5,11,7,8,9]
    
    ��� 6
    
����ͨ��һ����Ŀȥ���Զ��ڻ�������������ֵ�Ĳ��ң�����������֪��������ֵ�϶���һ�����������ֵ����Сֵ�Ĳ

      function getMaxProfit(arr) {
    
        var minElement = arr[0];
        var maxProfit = 0;
    
        for (var i = 0; i < arr.length; i++) {
            var currentElement = arr[i];
    
            minElement = Math.min(minElement, currentElement);
    
            var potentialProfit = currentElement - minElement;
    
            maxProfit = Math.max(maxProfit, potentialProfit);
        }
    
        return maxProfit;
    }
    
## Q8 �������ָ�����ȵ��ַ���
ʵ��һ���㷨���������ָ�ƶ����ȵ��ַ��ܡ�

������� ���� 8  ��� 4ldkfg9j


    function randomString(n) {  
      let str = 'abcdefghijklmnopqrstuvwxyz9876543210';
      let tmp = '',
          i = 0,
          l = str.length;
      for (i = 0; i < n; i++) {
        tmp += str.charAt(Math.floor(Math.random() * l));
      }
      return tmp;
    }
    
    module.exports = randomString;  
    
## Q9 ʵ������getElementsByClassName �Ĺ���

�Լ�ʵ��һ������������ĳ��DOM�ڵ�����İ���ĳ��class������DOM�ڵ㣿������ʹ��ԭ���ṩ�� getElementsByClassName querySelectorAll ��ԭ���ṩDOM���Һ�����

    function queryClassName(node, name) {  
      var starts = '(^|[ \n\r\t\f])',
           ends = '([ \n\r\t\f]|$)';
      var array = [],
            regex = new RegExp(starts + name + ends),
            elements = node.getElementsByTagName("*"),
            length = elements.length,
            i = 0,
            element;
    
        while (i < length) {
            element = elements[i];
            if (regex.test(element.className)) {
                array.push(element);
            }
    
            i += 1;
        }
    
        return array;
    }
    

## Q10 ʹ��JS ʵ�ֶ��������(Binary Search Tree)

һ���ȫ��д��ĸ��ʱȽ��٣������ص㿼�������������һЩ�����ص��ʵ�֡� �����������Ҳ�ƶ����������������������Ӣ�ordered binary tree����ָһ�ÿ������߾����������ʵĶ�������

- ����ڵ�����������գ��������������н���ֵ��С�����ĸ�����ֵ��
- ����ڵ�����������գ��������������н���ֵ���������ĸ�����ֵ��
- ����ڵ����������Ҳ�ֱ�Ϊ�����������
- û�м�ֵ��ȵĽڵ㡣���������������������ݽṹ���������ڲ��ҡ������ʱ�临�ӶȽϵ�,ΪO(log n)������������ǻ��������ݽṹ�����ڹ�����Ϊ��������ݽṹ���缯�ϡ�multiset����������ȡ�

![f1.png](./f1.png "")

��д��ʱ����Ҫ�㹻���������������ص㣬��Ҫ���趨��ÿ���ڵ�����ݽṹ
    
    class Node {  
      constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
      }
    
    }

�����нڵ㹹�ɣ��ɸ��ڵ��������������ӽڵ㣬������߱������Ľṹ���Ǿ߱�һ�����ڵ㣬�߱���ӣ����Һ�ɾ���ڵ�ķ���.


    class BinarySearchTree {
    
      constructor() {
        this.root = null;
      }
    
      insert(data) {
        let n = new Node(data, null, null);
        if (!this.root) {
          return this.root = n;
        }
        let currentNode = this.root;
        let parent = null;
        while (1) {
          parent = currentNode;
          if (data < currentNode.data) {
            currentNode = currentNode.left;
            if (currentNode === null) {
              parent.left = n;
              break;
            }
          } else {
            currentNode = currentNode.right;
            if (currentNode === null) {
              parent.right = n;
              break;
            }
          }
        }
      }
    
      remove(data) {
        this.root = this.removeNode(this.root, data)
      }
    
      removeNode(node, data) {
        if (node == null) {
          return null;
        }
    
        if (data == node.data) {
          // no children node
          if (node.left == null && node.right == null) {
            return null;
          }
          if (node.left == null) {
            return node.right;
          }
          if (node.right == null) {
            return node.left;
          }
    
          let getSmallest = function(node) {
            if(node.left === null && node.right == null) {
              return node;
            }
            if(node.left != null) {
              return node.left;
            }
            if(node.right !== null) {
              return getSmallest(node.right);
            }
    
          }
          let temNode = getSmallest(node.right);
          node.data = temNode.data;
          node.right = this.removeNode(temNode.right,temNode.data);
          return node;
    
        } else if (data < node.data) {
          node.left = this.removeNode(node.left,data);
          return node;
        } else {
          node.right = this.removeNode(node.right,data);
          return node;
        }
      }
    
      find(data) {
        var current = this.root;
        while (current != null) {
          if (data == current.data) {
            break;
          }
          if (data < current.data) {
            current = current.left;
          } else {
            current = current.right
          }
        }
        return current.data;
      }
    
    }
    
    module.exports = BinarySearchTree;  
    

https://github.com/JackPu/JavaScript-Algorithm-Learning