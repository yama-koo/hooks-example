import React from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  s: {
    width: "100px",
  },
})

function InputFields() {
  const classes = useStyles()
  return (
    <div>
      <p>
        <span className={classes.s}>1:</span> <TextField></TextField>
      </p>
      <p>
        <span className={classes.s}>2:</span> <TextField></TextField>
      </p>
      <p>
        <span className={classes.s}>answer:</span> <TextField></TextField>
      </p>
    </div>
  )
}

export default InputFields
