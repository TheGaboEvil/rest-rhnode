import { Component, OnInit } from '@angular/core';

import { NodetestService } from '../nodetest.service';


@Component({
  selector: 'app-get-nodetest',
  templateUrl: './get-nodetest.component.html',
  styleUrls: ['./get-nodetest.component.css']
})
export class GetNodetestComponent implements OnInit {

  _nodetest: any = [];

  constructor(private nodetestService: NodetestService) { }

  ngOnInit() {
    this.nodetestService.getAllNodetest().subscribe(_nodetest => {
      this._nodetest = _nodetest;
      console.log(this._nodetest);
    });
  }

}
