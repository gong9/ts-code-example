import {after} from 'poor-utils-pro'

const mockFn=()=>{
    console.log(11);
}

const fn= after(2,mockFn)
fn()
fn()