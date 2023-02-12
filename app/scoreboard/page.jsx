

import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { BsFillTrophyFill } from 'react-icons/bs'

import board from '../../styles/LeaderBoard.module.css'
import Image from "next/image";

export default function Scoreboard() {

	const score_board = [
		{
			teamName: "Team 1",
			members: ["Name1", "Name2", "Name3", "Name3"],
			score: 0
		},
		{
			teamName: "Team 2",
			members: ["Name1", "Name2", "Name3", "Name3"],
			score: 0
		},
		{
			teamName: "Team 3",
			members: ["Name1", "Name2", "Name3", "Name3"],
			score: 0
		},
		{
			teamName: "Team 4",
			members: ["Sarang Kumar", "Avanish", "Anshul", "Monish"],
			score: 0
		},
		{
			teamName: "Team 5",
			members: ["Name1", "Name2", "Name3", "Name3"],
			score: 0
		},
		{
			teamName: "Team 6",
			members: ["Name1", "Name2", "Name3", "Name3"],
			score: 1
		},
		{
			teamName: "Team 7",
			members: ["Name1", "Name2", "Name3", "Name3"],
			score: 10
		},
		{
			teamName: "Team 8",
			members: ["Name1", "Name2", "Name3", "Name3"],
			score: 30
		},
		{
			teamName: "Team 9",
			members: ["Name1", "Name2", "Name3", "Name3"],
			score: 5
		},
		{
			teamName: "Team 10",
			members: ["Name1", "Name2", "Name3", "Name3"],
			score: 0
		}
	]

	score_board.sort((a, b) => {
		return b.score - a.score;
	})

	const top_three = score_board.filter((item) => item.score != 0).slice(0, 3)

	return (


		// <div>
		// 	<Header name="User Name" />
		// 	<div className={board.main_comp_score}>

		// 		{/* <Image src='https://www.shutterstock.com/image-vector/wolf-mascot-logo-design-esport-sport-1552267397' height={30} width={30} alt='dp'></Image> */}
		// 		<div className={board.score_board_banner}>
		// 			<BsFillTrophyFill />
		// 			<h1>LEADERBOARD</h1>
		// 		</div>
		// 		<div className={board.team_ranking}>
		// 			{score_board.map(({ teamName, score }, index) => (teamScoreDetail(teamName, score, index)))}
		// 		</div>



		// 	</div>
		// 	<Footer />
		// </div>

		<>
			<Header name="User Name" />
			<div className={board.main_comp_score}>
				<div className={board.top}>
					{top_three.map(({ teamName, score, members }, index) => (teamLeads(teamName, score, index, members)))}
				</div>
				<div className={board.bottom}>

					{score_board.map(({ teamName, score, members }, index) => (teamScoreDetail(teamName, score, index, members)))}
				</div>
			</div>
			<Footer />
		</>

	);
}


const teamLeads = (teamName, score, index, members) => {
	return (
		<div className={board.top_container}>
			<div className={board.top_rank}>{index + 1}</div>
			<div className={board.top_board}>
				<BsFillTrophyFill className={board.top_trophy} />

				{teamName}
				{score}
				{index}
			</div>
		</div>
	)
}




const teamScoreDetail = (teamName, score, index, members) => {
	return (
		<>
			<div className={board.team_detail_container} key={index}>

				<div className={board.team_detail_rank}>{index + 1}</div>
				
				<div className={board.team_score_details}>
					<div className={board.team_name}>
						<p>{teamName}</p>
						<div className={board.team_mem_names}>
							{members.map((member, i) => (
								<span className={board.team_member}>{member}</span>
							))}
	
						</div>
					</div>
					<div className={board.team_detail_score}>
						<b>{score} pts.</b>
					</div>
				</div>
			</div>
		</>
	)
}


