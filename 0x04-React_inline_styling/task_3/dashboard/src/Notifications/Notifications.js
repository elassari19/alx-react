import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import close_icon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'
import NotificationItemShape from './NotificationItemShape'
import propTypes from 'prop-types'

class Notification extends Component {

	markAsRead(id) {
		console.log(`Notification ${id} has been read`);
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.listNotifications.length > this.props.listNotifications.length;
	}

	render() {
		const { listNotifications, displayDrawer } = this.props;

		return (
			<>
				<p className={css(notificationStyles.p)}>Your notifications</p>
				{displayDrawer && (
					<div className={css(notificationStyles.notifications)}>
						<button style={{
							position: 'absolute',
							background: 'transparent',
							border: 'none',
							right: '20px',
						}}
							aria-label='close'
							onClick={() => {
								console.log('Close button has been clicked');
							}}>
							<img src={close_icon} className={css(notificationStyles.x_button)} alt="close" height="15px" width="15px"></img>
						</button>
						<p>Here is the list of notifications</p>
						<ul>
								{listNotifications.length === 0 && (
								<li>
									<p>No notification available yet</p>
								</li>
							)}
								{listNotifications.map(notification => (
								<NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={this.markAsRead} id={notification.id} />
							))}
						</ul>
					</div>
				)}
			</>
		)
	}
}

const notificationStyles = StyleSheet.create({
	notifications: {
		'@media (min-width: 350px)': {
			position: 'absolute',
			top: '0px',
			left: '0px',
			width: '100%',
			height: '100%',
			background: 'white',
			fontSize: '20px',
		}
	},

	x_button: {
		'@media (min-width: 350px)': {
			position: 'absolute',
			top: '15px',
			right: '10px',
		}
	},

	p: {
		position: 'absolute',
		top: `0px`,
		right: `15px`,
	},
})


Notification.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
}

Notification.propTypes = {
	displayDrawer: propTypes.bool,
	listNotifications: propTypes.arrayOf(NotificationItemShape),
}

export default Notification