### 八种排序算法
### 二分查找算法

二分查找的前提为：数组、有序。

逻辑为：优先和数组的中间元素比较，如果等于中间元素，则直接返回。如果不等于则取半继续查找。

       function search(arr,findval,leftindex,rightindex)  
            {    
                  if( leftindex <= rightindex ) {  
                         var mid_index=Math.floor((leftindex+rightindex)/2);
                         var mid_val=arr[mid_index];  
          
                         if(mid_val>findval){   
                            search(arr,findval,leftindex,mid_index-1);  
                         } else if(mid_val<findval){  
                            search(arr,findval,mid_index+1,rightindex);  
                         } else{  
                            console.log("下标是："+mid_index);  
                            return;  
                         }  
                     } else{  
                            console.log("输入有误");  
                            return;  
                       }   
            }  
                 

### 反转二叉树算法

