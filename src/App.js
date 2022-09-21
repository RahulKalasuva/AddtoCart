import './App.css';
import React, { Component } from 'react'
 import apple from  './apple.png';
 import cherry from  './cheery.png';
 import mango from  './mango.png';
 import orange from  './orange.png';
 import watermelon from  './watermelon.png';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list : [
        {
          id : 1,
          name : "Apple",
          image : apple,
          price : 100,
          netprice : 100,
          count : 1,
          totalcounts :1 
        },
        {
          id : 2,
          name : "Mango",
          image : mango,
          price : 200,
          netprice : 200,
          count : 1,
          totalcounts :1 
        },
        {
          id : 3,
          name : "Orange",
          image : orange,
          price : 80,
          netprice : 80,
          count : 1,
          totalcounts :1 
        },
        {
          id : 4,
          name : "Cherry",
          image : cherry,
          price : 70,
          netprice : 70,
          count : 1,
          totalcounts :1   
        },
        {
          id : 5,
          name : "Watermelon",
          image : watermelon,
          price : 30,
          netprice : 30,
          count : 1,
          totalcounts :1   
        }
          ],
      lists : [],
      totalcountsofitems : 0,
      totalnetprice :0
    }
  }
  handleadd =(e,ele,index) => {
    let lists = [...this.state.lists]  
      let index1 = lists.indexOf(ele)
      if(index1===-1)
      {
        lists.push(this.state.list[index])        
        console.log(index1)
      }
      else{
        lists[index].count = lists[index].count+1
      }
      
    this.setState({
      lists,
    })
  }
  handlecount = (e,index,change,ele) => {
    let lists = [...this.state.lists]
    if(change){
      lists[index].count = lists[index].count+1
      lists[index].netprice = lists[index].netprice + lists[index].price
      lists[index].totalcounts = lists[index].count
      console.log(lists[index].totalcounts)
    }
    else{
      if(lists[index].count===1){
        lists.splice(index,1)
      }
      else{
        lists[index].count = lists[index].count-1
        lists[index].netprice = lists[index].netprice - lists[index].price
        lists[index].totalcounts = lists[index].count
        console.log(lists[index].totalcounts)
      }
      
    }
    this.setState({
      lists,
    })
    

  }

  handlesum = () => {
    let totalcountsofitems = this.state.totalcountsofitems
    let totalnetprice= this.state.totalnetprice
    let lists=[...this.state.lists]
    lists.map((ele,index)=>{
        totalcountsofitems = totalcountsofitems +ele.totalcounts
        totalnetprice = totalnetprice + ele.netprice
    })

    this.setState({
      totalcountsofitems,
      totalnetprice
    })
  }

  render() {
    return (
      <div className="App">
      <div className="heading">
       <h1>Amazon Fresh</h1>
      </div>

      <div className="flex-container">
        {this.state.list.map((ele,index)=>{
            return(
              <div>
                   <img src={ele.image} /><br/><h2>Price : {ele.price} Rs</h2>
                   <button className="add-cart" onClick={(e)=>{this.handleadd(e,ele,index)}}>Add</button>
              </div>
            )
        })}
      </div>
      <div class="row">
        <div class="column">
          <table>
            <tr>
            <th>Image</th>
            <th>Description</th>
            <th>Count</th>
            <th>Price</th>
            <th>NetPrice</th>
            </tr>
            {this.state.lists.length >0 ? this.state.lists.map((ele,index)=>{
            return(
              <>{console.log(ele.name)}
                      <tr>
                          <td><img style={{"width": "70px", "height": "50px"}} src={ele.image}/></td>
                          <td>{ele.name}</td>
                          <td className="flex-container-button">
                              <button onClick={(e)=>{this.handlecount(e,index,false,ele)}}>-</button>
                              <button>{ele.count}</button>
                              <button onClick={(e)=>{this.handlecount(e,index,true,ele)}}>+</button>
                          </td>
                          <td>{ele.price}</td>
                          <td>{ele.netprice}</td>
                      </tr> </> 
                              )
                          })
                          :<>
                          <trbody>Cart Is Empty</trbody></>
                          }
                                      
          </table>
        </div>
        <div div class="column1">
            <table>
              <tr>
                <th>No of items</th>
                <th>Total Price</th>
              </tr>
                        <tr>
                          <td>{this.state.totalcountsofitems}</td>
                          <td>{this.state.totalnetprice}</td>
                        </tr>              
            </table>
            <button className="abc"  style={{'width':'200px','height':'30px','margin':"10px"}} onClick={()=>{this.handlesum()}}>Click to Know Order Summary</button>
        </div>
        
      </div>
    </div>
    )
  }
}
