import React from 'react'
import Cards from "../Cards";
// import event_List from "../Events/events-list.json";
const imgs=[
  {img:"https://drive.google.com/uc?export=view&id=1-gZYQS84DbxjtT9F_e1Jls79zqL93byv"},
  {img:"https://drive.google.com/uc?export=view&id=1q1yO5Q6305vHm6XYovPEinxWpy7OVOE6"},
  {img:"https://drive.google.com/uc?export=view&id=13tohq791UyHSqnzeEbP2_oICrjmCdz2x"},
  {img:"https://drive.google.com/uc?export=view&id=1_qlimsJ-1AtfZQjkx4gi91CRGjqVtXKI"},
  {img:"https://drive.google.com/uc?export=view&id=1_dBvOL0n9X0KZ266rcDTNKbid18DW3_z"},
  {img:"https://drive.google.com/uc?export=view&id=1o2QmkjWFputP_x__n2k0EsygC83SWhEQ"},
  {img:"https://drive.google.com/uc?export=view&id=1pCG3jRgEFC-Gj9F--Aqkre5bsDjp50-z"},
  {img:"https://drive.google.com/uc?export=view&id=1UZ89H9c9fKOlLoy2lcjMbEWTK4N6f_fr"},
  {img:"https://drive.google.com/uc?export=view&id=1tyANMgvEwT5pnG9Fe-JSHa7XXlXbUR5O"},
  {img:"https://drive.google.com/uc?export=view&id=1xJUqhoDyOVf_ZSu3bNbMdfJhTYiClpZE"},
  {img:"https://drive.google.com/uc?export=view&id=1xyshmHmtbtLtPszF18dWBBcLHk9dA47L"},
  {img:"https://drive.google.com/uc?export=view&id=1tvPmvpx0RAhS44Yhgy65dmagXMuNseHe"},
  {img:"https://drive.google.com/uc?export=view&id=1-2ihfgP4S1kDxLBIKC5iUubyXeDvqY8G"},
  {img:"https://drive.google.com/uc?export=view&id=1TTcQk7j3Iyg90SwnZ3Jd4pnl1OLxBZJA"},
  {img:"https://drive.google.com/uc?export=view&id=1Ea0dZbMo6a9HZy__gFBTUPN02uzEt8vW"},
  {img:"https://drive.google.com/uc?export=view&id=12xXQRhmwM8rf1yvjNHmkaxyPlQINgSu6"},
  {img:"https://drive.google.com/uc?export=view&id=1-MrYU8RsRWy9OWGjlYc4LsxI186q5Kli"},
  {img:"https://drive.google.com/uc?export=view&id=1tW0-V_1FAAxudVFuc6XQ7nk-zH-vMo6d"},
  {img:"https://drive.google.com/uc?export=view&id=1qYxZFTCgLtvLm_PEULVwBQ676mB9Jy2k"},
  {img:"https://drive.google.com/uc?export=view&id=1i86UQIOgFv3HZQAK8jwdLV8ViqTH1C3g"},
  {img:"https://drive.google.com/uc?export=view&id=1ST3ObiFH_kMekVX7F9WO7GAKPjTxDkWK"},
  {img:"https://drive.google.com/uc?export=view&id=1QbpFJcn9x8bB9FkBiNx0LbrRlgl8prIY"},
  {img:"https://drive.google.com/uc?export=view&id=1IlAYfY8Gp7Fm6RbYCpojJf9DLFf4MBpR"}
]
function Gallery() {
  return (
    <div>
        <h1>CHEME-E-SORPTION 2023</h1>
        <Cards
         title={"Image Gallery"}
         por={imgs}
         colm={4}
         tilt={false}
         className={"eventcard my-3"}
         
        />


    </div>
  )
}

export default Gallery