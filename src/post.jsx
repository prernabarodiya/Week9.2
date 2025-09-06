
const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor:"grey", borderWidth: 1, padding: 20, marginBottom: 10 }

export function PostComponent({firstname, subtitle, time, image, description}){
    return <div style={style}> 
        <div style={{display: "flex"}}>
            <img src={image} style={{
                width: 30,
                height: 30,
                borderRadius: 20
            }} />
            <div style={{fontSize: 10, marginLeft: 10}}>
                <b>
                    {firstname}
                </b>
                <div>{subtitle}</div>
                {(time != undefined ) ? <div style={{display: "flex"}}>
                    <div>{time}</div>
                <img src={"https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-clock-icon-png-image_3782163.jpg"} style={{width: 12, height: 12}}/>
                </div> : null}
            </div>
        </div>
        <div style={{fontSize: 12}}>
            {description}
        </div>
    </div>
    
        
      
}