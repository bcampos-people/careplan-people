import { AppComponent } from './../../app.component';
import { Observable } from 'rxjs/Observable';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const lastOk: number = parseInt(localStorage.getItem('lastOkForIssues'), 10);
    if (!isNaN(lastOk) && !AppComponent.didOneDayPass(lastOk)) {
      // ainda não passou um dia, segue para a tela do plano
      this.doOk();
    }
    // TODO remover a linha abaixo quando a página estiver pronta. doOk deve ser chamado quando o paciente apertar o botão de ok.
    this.doOk();
  }

  doOk() {
    localStorage.setItem('lastOkForIssues', '' + Date.now());
    this.router.navigate(['/careplan']);
  }
}
