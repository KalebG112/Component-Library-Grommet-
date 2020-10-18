import React from "react"

const App = props => {
    <Grommet theme={grommet}>
        <Box align="center" background="neutral-2">
            <Button 
                label="hello world"
                primary
                onClick{...() => alert("hello, world")}
            />
        </Box>
    </Grommet>
};

CanvasRenderingContext2D(<App />)