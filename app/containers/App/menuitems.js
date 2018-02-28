import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
  
export const sidebaritems = [
	{
		title: <FormattedMessage {...messages.SidebarItemOne} /> ,
		icon : 'fa-dashboard',
		link : 'dashboard'
	},
	{
		title: <FormattedMessage {...messages.SidebarItemTwo} />,
		icon : 'fa-files-o',
		children: [
			{
				title: <FormattedMessage {...messages.SidebarItemTwoChildOne} /> ,
				icon : 'fa-share',
				link : 'level1'
			},
			{
				title: <FormattedMessage {...messages.SidebarItemTwoChildTwo} /> ,
				icon : 'fa-share',
				link : 'level2'
			}
		]
	},
	{
		title: <FormattedMessage {...messages.SidebarItemThree} />,
		icon : 'fa-th',
		link : 'homepage'
	}
]

export const headeritems = [
	{
		title: <FormattedMessage {...messages.HeaderItemOne} /> ,
		icon : 'fa fa-github',
		href : 'https://github.com/'
	}
]