import React from 'react'
import { Grid } from '@material-ui/core'
import Tile from 'components/Tile'
import {
  TodayOutlined,
  QuestionAnswerOutlined,
  WorkOutlined,
} from '@material-ui/icons'

const Landing = () => (
  <div>
    <Grid container spacing={4}>
      <Grid item lg={4}>
        <Tile
          textPrimary="Todo Items"
          textSecondary="Add/Edit Todo Items"
          icon={TodayOutlined}
          path="/todo"
        />
      </Grid>
      <Grid item lg={4}>
        <Tile
          textPrimary="Job Listing"
          textSecondary="Add/Edit Jobs Postings"
          icon={WorkOutlined}
          path=""
        />
      </Grid>
      <Grid item lg={4}>
        <Tile
          textPrimary="Questionnaires"
          textSecondary="Add/Edit Questionnaires"
          icon={QuestionAnswerOutlined}
          path=""
        />
      </Grid>
    </Grid>
  </div>
)

export default Landing
