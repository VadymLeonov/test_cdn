/*
 * Copyright (C) Ascensio System SIA 2012-2020. All rights reserved
 *
 * https://www.onlyoffice.com/
 *
 * Version: 0.0.0 (build:0)
 */

var tb;

function ub(f) {
  var e = 0;
  return function () {
    return e < f.length ? { done: !1, value: f[e++] } : { done: !0 };
  };
}

var vb = 'function' == typeof Object.defineProperties ? Object.defineProperty : function (f, e, Pa) {
    f != Array.prototype && f != Object.prototype && (f[e] = Pa.value);
  },
  nd = 'undefined' != typeof window && window === this ? this : 'undefined' != typeof global && null != global ? global : this;

function Gd() {
  Gd = function () {
  };
  nd.Symbol || (nd.Symbol = Hd);
}

function Id(f, e) {
  this.Otg = f;
  vb(this, 'description', { configurable: !0, writable: !0, value: e });
}

Id.prototype.toString = function () {
  return this.Otg;
};
var Hd = function () {
  function f(Pa) {
    if (this instanceof f) throw new TypeError('Symbol is not a constructor');
    return new Id('jscomp_symbol_' + (Pa || '') + '_' + e++, Pa);
  }

  var e = 0;
  return f;
}();

function oe() {
  Gd();
  var f = nd.Symbol.iterator;
  f || (f = nd.Symbol.iterator = nd.Symbol('Symbol.iterator'));
  'function' != typeof Array.prototype[f] && vb(Array.prototype, f, {
    configurable: !0,
    writable: !0,
    value: function () {
      return pe(ub(this));
    }
  });
  oe = function () {
  };
}

function pe(f) {
  oe();
  f = { next: f };
  f[nd.Symbol.iterator] = function () {
    return this;
  };
  return f;
}

function qe(f) {
  var e = 'undefined' != typeof Symbol && Symbol.iterator && f[Symbol.iterator];
  return e ? e.call(f) : { next: ub(f) };
}

function Te(f, e) {
  if (e) {
    var Pa = nd;
    f = f.split('.');
    for (var ab = 0; ab < f.length - 1; ab++) {
      var bb = f[ab];
      bb in Pa || (Pa[bb] = {});
      Pa = Pa[bb];
    }
    f = f[f.length - 1];
    ab = Pa[f];
    e = e(ab);
    e != ab && null != e && vb(Pa, f, { configurable: !0, writable: !0, value: e });
  }
}

Te('Promise', function (f) {
  function e(e) {
    this.Cpf = 0;
    this.Y2f = void 0;
    this.u0d = [];
    var f = this.BUf();
    try {
      e(f.resolve, f.reject);
    } catch (Eb) {
      f.reject(Eb);
    }
  }

  function Pa() {
    this.Njd = null;
  }

  function ab(f) {
    return f instanceof e ? f : new e(function (e) {
      e(f);
    });
  }

  if (f) return f;
  Pa.prototype.ygg = function (e) {
    if (null == this.Njd) {
      this.Njd = [];
      var f = this;
      this.zgg(function () {
        f.HMg();
      });
    }
    this.Njd.push(e);
  };
  var bb = nd.setTimeout;
  Pa.prototype.zgg = function (e) {
    bb(e, 0);
  };
  Pa.prototype.HMg = function () {
    for (; this.Njd && this.Njd.length;) {
      var e = this.Njd;
      this.Njd = [];
      for (var f = 0; f < e.length; ++f) {
        var Pa = e[f];
        e[f] = null;
        try {
          Pa();
        } catch (zb) {
          this.GJg(zb);
        }
      }
    }
    this.Njd = null;
  };
  Pa.prototype.GJg = function (e) {
    this.zgg(function () {
      throw e;
    });
  };
  e.prototype.BUf = function () {
    function e(e) {
      return function (Da) {
        Pa || (Pa = !0, e.call(f, Da));
      };
    }

    var f = this, Pa = !1;
    return { resolve: e(this.HTg), reject: e(this.M2f) };
  };
  e.prototype.HTg = function (f) {
    if (f === this) this.M2f(new TypeError('A Promise cannot resolve to itself')); else if (f instanceof e) this.tUg(f); else {
      a:switch (typeof f) {
        case 'object':
          var Da =
            null != f;
          break a;
        case 'function':
          Da = !0;
          break a;
        default:
          Da = !1;
      }
      Da ? this.GTg(f) : this.Xjg(f);
    }
  };
  e.prototype.GTg = function (e) {
    var f = void 0;
    try {
      f = e.then;
    } catch (Eb) {
      this.M2f(Eb);
      return;
    }
    'function' == typeof f ? this.uUg(f, e) : this.Xjg(e);
  };
  e.prototype.M2f = function (e) {
    this.Zrg(2, e);
  };
  e.prototype.Xjg = function (e) {
    this.Zrg(1, e);
  };
  e.prototype.Zrg = function (e, f) {
    if (0 != this.Cpf) throw Error('Cannot settle(' + e + ', ' + f + '): Promise already settled in state' + this.Cpf);
    this.Cpf = e;
    this.Y2f = f;
    this.IMg();
  };
  e.prototype.IMg = function () {
    if (null !=
      this.u0d) {
      for (var e = 0; e < this.u0d.length; ++e) nb.ygg(this.u0d[e]);
      this.u0d = null;
    }
  };
  var nb = new Pa;
  e.prototype.tUg = function (e) {
    var f = this.BUf();
    e.nxf(f.resolve, f.reject);
  };
  e.prototype.uUg = function (e, f) {
    var Da = this.BUf();
    try {
      e.call(f, Da.resolve, Da.reject);
    } catch (zb) {
      Da.reject(zb);
    }
  };
  e.prototype.then = function (f, Ha) {
    function Da(e, f) {
      return 'function' == typeof e ? function (f) {
        try {
          Pa(e(f));
        } catch (cc) {
          Va(cc);
        }
      } : f;
    }

    var Pa, Va, gb = new e(function (e, f) {
      Pa = e;
      Va = f;
    });
    this.nxf(Da(f, Pa), Da(Ha, Va));
    return gb;
  };
  e.prototype.catch = function (e) {
    return this.then(void 0,
      e);
  };
  e.prototype.nxf = function (e, f) {
    function Da() {
      switch (Ha.Cpf) {
        case 1:
          e(Ha.Y2f);
          break;
        case 2:
          f(Ha.Y2f);
          break;
        default:
          throw Error('Unexpected state: ' + Ha.Cpf);
      }
    }

    var Ha = this;
    null == this.u0d ? nb.ygg(Da) : this.u0d.push(Da);
  };
  e.resolve = ab;
  e.reject = function (f) {
    return new e(function (e, Da) {
      Da(f);
    });
  };
  e.race = function (f) {
    return new e(function (e, Da) {
      for (var Ha = qe(f), Va = Ha.next(); !Va.done; Va = Ha.next()) ab(Va.value).nxf(e, Da);
    });
  };
  e.all = function (f) {
    var Da = qe(f), Pa = Da.next();
    return Pa.done ? ab([]) : new e(function (e, f) {
      function Ha(f) {
        return function (Da) {
          Za[f] =
            Da;
          Va--;
          0 == Va && e(Za);
        };
      }

      var Za = [], Va = 0;
      do Za.push(void 0), Va++, ab(Pa.value).nxf(Ha(Za.length - 1), f), Pa = Da.next(); while (!Pa.done);
    });
  };
  return e;
});
Te('Array.prototype.fill', function (f) {
  return f ? f : function (e, f, ab) {
    var Pa = this.length || 0;
    0 > f && (f = Math.max(0, Pa + f));
    if (null == ab || ab > Pa) ab = Pa;
    ab = Number(ab);
    0 > ab && (ab = Math.max(0, Pa + ab));
    for (f = Number(f || 0); f < ab; f++) this[f] = e;
    return this;
  };
});

function Ih(f, e, Pa) {
  if (null == f) throw new TypeError('The \'this\' value for String.prototype.' + Pa + ' must not be null or undefined');
  if (e instanceof RegExp) throw new TypeError('First argument to String.prototype.' + Pa + ' must not be a regular expression');
  return f + '';
}

Te('String.prototype.repeat', function (f) {
  return f ? f : function (e) {
    var f = Ih(this, null, 'repeat');
    if (0 > e || 1342177279 < e) throw new RangeError('Invalid count value');
    e |= 0;
    for (var ab = ''; e;) if (e & 1 && (ab += f), e >>>= 1) f += f;
    return ab;
  };
});
Te('Number.isFinite', function (f) {
  return f ? f : function (e) {
    return 'number' !== typeof e ? !1 : !isNaN(e) && Infinity !== e && -Infinity !== e;
  };
});
Te('Number.isInteger', function (f) {
  return f ? f : function (e) {
    return Number.isFinite(e) ? e === Math.floor(e) : !1;
  };
});
Te('String.prototype.endsWith', function (f) {
  return f ? f : function (e, f) {
    var Pa = Ih(this, e, 'endsWith');
    e += '';
    void 0 === f && (f = Pa.length);
    f = Math.max(0, Math.min(f | 0, Pa.length));
    for (var bb = e.length; 0 < bb && 0 < f;) if (Pa[--f] != e[--bb]) return !1;
    return 0 >= bb;
  };
});
Te('String.prototype.padStart', function (f) {
  return f ? f : function (e, f) {
    var Pa = Ih(this, null, 'padStart');
    e -= Pa.length;
    f = void 0 !== f ? String(f) : ' ';
    return (0 < e && f ? f.repeat(Math.ceil(e / f.length)).substring(0, e) : '') + Pa;
  };
});

function Cl(f, e) {
  oe();
  f instanceof String && (f += '');
  var Pa = 0, ab = {
    next: function () {
      if (Pa < f.length) {
        var bb = Pa++;
        return { value: e(bb, f[bb]), done: !1 };
      }
      ab.next = function () {
        return { done: !0, value: void 0 };
      };
      return ab.next();
    }
  };
  ab[Symbol.iterator] = function () {
    return ab;
  };
  return ab;
}

Te('Array.prototype.values', function (f) {
  return f ? f : function () {
    return Cl(this, function (e, f) {
      return f;
    });
  };
});
Te('Math.sign', function (f) {
  return f ? f : function (e) {
    e = Number(e);
    return 0 === e || isNaN(e) ? e : 0 < e ? 1 : -1;
  };
});
Te('Array.prototype.keys', function (f) {
  return f ? f : function () {
    return Cl(this, function (e) {
      return e;
    });
  };
});

function cm(f, e) {
  return Object.prototype.hasOwnProperty.call(f, e);
}

Te('WeakMap', function (f) {
  function e(e) {
    this.mcf = (Da += Math.random() + 1).toString();
    if (e) {
      e = qe(e);
      for (var f; !(f = e.next()).done;) f = f.value, this.set(f[0], f[1]);
    }
  }

  function Pa() {
  }

  function ab(e) {
    cm(e, nb) || vb(e, nb, { value: new Pa });
  }

  function bb(e) {
    var f = Object[e];
    f && (Object[e] = function (e) {
      if (e instanceof Pa) return e;
      ab(e);
      return f(e);
    });
  }

  if (function () {
    if (!f || !Object.seal) return !1;
    try {
      var e = Object.seal({}), Da = Object.seal({}), Pa = new f([[e, 2], [Da, 3]]);
      if (2 != Pa.get(e) || 3 != Pa.get(Da)) return !1;
      Pa.delete(e);
      Pa.set(Da,
        4);
      return !Pa.has(e) && 4 == Pa.get(Da);
    } catch (Va) {
      return !1;
    }
  }()) return f;
  var nb = '$jscomp_hidden_' + Math.random();
  bb('freeze');
  bb('preventExtensions');
  bb('seal');
  var Da = 0;
  e.prototype.set = function (e, f) {
    ab(e);
    if (!cm(e, nb)) throw Error('WeakMap key fail: ' + e);
    e[nb][this.mcf] = f;
    return this;
  };
  e.prototype.get = function (e) {
    return cm(e, nb) ? e[nb][this.mcf] : void 0;
  };
  e.prototype.has = function (e) {
    return cm(e, nb) && cm(e[nb], this.mcf);
  };
  e.prototype.delete = function (e) {
    return cm(e, nb) && cm(e[nb], this.mcf) ? delete e[nb][this.mcf] :
      !1;
  };
  return e;
});
Te('Map', function (f) {
  function e() {
    var e = {};
    return e.previous = e.next = e.head = e;
  }

  function Pa(e, f) {
    var Da = e.qQc;
    return pe(function () {
      if (Da) {
        for (; Da.head != e.qQc;) Da = Da.previous;
        for (; Da.next != Da.head;) return Da = Da.next, { done: !1, value: f(Da) };
        Da = null;
      }
      return { done: !0, value: void 0 };
    });
  }

  function ab(e, f) {
    var Ha = f && typeof f;
    'object' == Ha || 'function' == Ha ? nb.has(f) ? Ha = nb.get(f) : (Ha = '' + ++Da, nb.set(f, Ha)) : Ha = 'p_' + f;
    var Va = e.I4e[Ha];
    if (Va && cm(e.I4e, Ha)) for (e = 0; e < Va.length; e++) {
      var Pa = Va[e];
      if (f !== f && Pa.key !== Pa.key || f ===
        Pa.key) return { id: Ha, list: Va, index: e, HDb: Pa };
    }
    return { id: Ha, list: Va, index: -1, HDb: void 0 };
  }

  function bb(f) {
    this.I4e = {};
    this.qQc = e();
    this.size = 0;
    if (f) {
      f = qe(f);
      for (var Da; !(Da = f.next()).done;) Da = Da.value, this.set(Da[0], Da[1]);
    }
  }

  if (function () {
    if (!f || 'function' != typeof f || !f.prototype.entries || 'function' != typeof Object.seal) return !1;
    try {
      var e = Object.seal({ x: 4 }), Da = new f(qe([[e, 's']]));
      if ('s' != Da.get(e) || 1 != Da.size || Da.get({ x: 4 }) || Da.set({ x: 4 }, 't') != Da || 2 != Da.size) return !1;
      var Pa = Da.entries(), Va = Pa.next();
      if (Va.done ||
        Va.value[0] != e || 's' != Va.value[1]) return !1;
      Va = Pa.next();
      return Va.done || 4 != Va.value[0].x || 't' != Va.value[1] || !Pa.next().done ? !1 : !0;
    } catch (gb) {
      return !1;
    }
  }()) return f;
  oe();
  var nb = new WeakMap;
  bb.prototype.set = function (e, f) {
    e = 0 === e ? 0 : e;
    var Da = ab(this, e);
    Da.list || (Da.list = this.I4e[Da.id] = []);
    Da.HDb ? Da.HDb.value = f : (Da.HDb = {
      next: this.qQc,
      previous: this.qQc.previous,
      head: this.qQc,
      key: e,
      value: f
    }, Da.list.push(Da.HDb), this.qQc.previous.next = Da.HDb, this.qQc.previous = Da.HDb, this.size++);
    return this;
  };
  bb.prototype.delete =
    function (e) {
      e = ab(this, e);
      return e.HDb && e.list ? (e.list.splice(e.index, 1), e.list.length || delete this.I4e[e.id], e.HDb.previous.next = e.HDb.next, e.HDb.next.previous = e.HDb.previous, e.HDb.head = null, this.size--, !0) : !1;
    };
  bb.prototype.clear = function () {
    this.I4e = {};
    this.qQc = this.qQc.previous = e();
    this.size = 0;
  };
  bb.prototype.has = function (e) {
    return !!ab(this, e).HDb;
  };
  bb.prototype.get = function (e) {
    return (e = ab(this, e).HDb) && e.value;
  };
  bb.prototype.entries = function () {
    return Pa(this, function (e) {
      return [e.key, e.value];
    });
  };
  bb.prototype.keys =
    function () {
      return Pa(this, function (e) {
        return e.key;
      });
    };
  bb.prototype.values = function () {
    return Pa(this, function (e) {
      return e.value;
    });
  };
  bb.prototype.forEach = function (e, f) {
    for (var Da = this.entries(), Ha; !(Ha = Da.next()).done;) Ha = Ha.value, e.call(f, Ha[1], Ha[0], this);
  };
  bb.prototype[Symbol.iterator] = bb.prototype.entries;
  var Da = 0;
  return bb;
});

function qv(f, e, Pa) {
  f instanceof String && (f = String(f));
  for (var ab = f.length, bb = 0; bb < ab; bb++) {
    var nb = f[bb];
    if (e.call(Pa, nb, bb, f)) return { yp: bb, Mv: nb };
  }
  return { yp: -1, Mv: void 0 };
}

Te('Array.prototype.find', function (f) {
  return f ? f : function (e, f) {
    return qv(this, e, f).Mv;
  };
});
Te('String.prototype.startsWith', function (f) {
  return f ? f : function (e, f) {
    var Pa = Ih(this, e, 'startsWith');
    e += '';
    var bb = Pa.length, nb = e.length;
    f = Math.max(0, Math.min(f | 0, Pa.length));
    for (var Da = 0; Da < nb && f < bb;) if (Pa[f++] != e[Da++]) return !1;
    return Da >= nb;
  };
});
Te('Math.tanh', function (f) {
  return f ? f : function (e) {
    e = Number(e);
    if (0 === e) return e;
    var f = Math.exp(-2 * Math.abs(e));
    f = (1 - f) / (1 + f);
    return 0 > e ? -f : f;
  };
});
Te('Math.log1p', function (f) {
  return f ? f : function (e) {
    e = Number(e);
    if (.25 > e && -.25 < e) {
      for (var f = e, ab = 1, bb = e, nb = 0, Da = 1; nb != bb;) f *= e, Da *= -1, bb = (nb = bb) + Da * f / ++ab;
      return bb;
    }
    return Math.log(1 + e);
  };
});
Te('Math.expm1', function (f) {
  return f ? f : function (e) {
    e = Number(e);
    if (.25 > e && -.25 < e) {
      for (var f = e, ab = 1, bb = e, nb = 0; nb != bb;) f *= e / ++ab, bb = (nb = bb) + f;
      return bb;
    }
    return Math.exp(e) - 1;
  };
});
Te('Math.trunc', function (f) {
  return f ? f : function (e) {
    e = Number(e);
    if (isNaN(e) || Infinity === e || -Infinity === e || 0 === e) return e;
    var f = Math.floor(Math.abs(e));
    return 0 > e ? -f : f;
  };
});
Te('Math.log10', function (f) {
  return f ? f : function (e) {
    return Math.log(e) / Math.LN10;
  };
});
Te('Math.cosh', function (f) {
  if (f) return f;
  var e = Math.exp;
  return function (f) {
    f = Number(f);
    return (e(f) + e(-f)) / 2;
  };
});
Te('Math.sinh', function (f) {
  if (f) return f;
  var e = Math.exp;
  return function (f) {
    f = Number(f);
    return 0 === f ? f : (e(f) - e(-f)) / 2;
  };
});
Te('Math.acosh', function (f) {
  return f ? f : function (e) {
    e = Number(e);
    return Math.log(e + Math.sqrt(e * e - 1));
  };
});
Te('Math.atanh', function (f) {
  if (f) return f;
  var e = Math.log1p;
  return function (f) {
    f = Number(f);
    return (e(f) - e(-f)) / 2;
  };
});
Te('Math.asinh', function (f) {
  return f ? f : function (e) {
    e = Number(e);
    if (0 === e) return e;
    var f = Math.log(Math.abs(e) + Math.sqrt(e * e + 1));
    return 0 > e ? -f : f;
  };
});
Te('Object.is', function (f) {
  return f ? f : function (e, f) {
    return e === f ? 0 !== e || 1 / e === 1 / f : e !== e && f !== f;
  };
});
Te('Array.prototype.includes', function (f) {
  return f ? f : function (e, f) {
    var Pa = this;
    Pa instanceof String && (Pa = String(Pa));
    var bb = Pa.length;
    f = f || 0;
    for (0 > f && (f = Math.max(f + bb, 0)); f < bb; f++) {
      var nb = Pa[f];
      if (nb === e || Object.is(nb, e)) return !0;
    }
    return !1;
  };
});
Te('String.prototype.includes', function (f) {
  return f ? f : function (e, f) {
    return -1 !== Ih(this, e, 'includes').indexOf(e, f || 0);
  };
});
Te('Array.prototype.findIndex', function (f) {
  return f ? f : function (e, f) {
    return qv(this, e, f).yp;
  };
});

(function (f) {
  var e = {
    userAgent: '',
    eH: !1,
    oMa: !1,
    MYa: !1,
    N5b: !1,
    EOa: !1,
    Ggb: !1,
    ttd: !1,
    N3a: !1,
    T1b: !1,
    Htd: !1,
    PQc: !1,
    N1a: !1,
    ktd: !1,
    fcb: !1,
    Zx: !1,
    sKc: !1,
    Ym: 1,
    $Ld: !1,
    WAb: !1,
    qAc: !1,
    Ftd: !1
  };
  e.userAgent = navigator.userAgent.toLowerCase();
  e.eH = -1 < e.userAgent.indexOf('msie') || -1 < e.userAgent.indexOf('trident') || -1 < e.userAgent.indexOf('edge');
  e.Scf = -1 < e.userAgent.indexOf('edge/');
  e.gog = -1 < e.userAgent.indexOf('msie9') || -1 < e.userAgent.indexOf('msie 9');
  e.fog = -1 < e.userAgent.indexOf('msie10') || -1 < e.userAgent.indexOf('msie 10');
  e.oMa = -1 < e.userAgent.indexOf('mac');
  e.N3a = !e.eH && -1 < e.userAgent.indexOf('chrome');
  e.N1a = !e.eH && !e.N3a && -1 < e.userAgent.indexOf('safari');
  e.MYa = e.N1a && e.oMa;
  e.N5b = -1 < e.userAgent.indexOf('ipad') || -1 < e.userAgent.indexOf('iphone') || -1 < e.userAgent.indexOf('ipod');
  e.EOa = -1 < e.userAgent.indexOf('android');
  e.Ggb = /android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent ||
    navigator.vendor || f.opera);
  e.ttd = -1 < e.userAgent.indexOf('gecko/');
  e.T1b = !!f.opera || -1 < e.userAgent.indexOf('opr/');
  e.Htd = !!f.opera;
  e.PQc = !e.eH && -1 < e.userAgent.indexOf('webkit');
  e.ktd = -1 < e.userAgent.indexOf('arm');
  e.fcb = !e.eH && -1 < e.userAgent.indexOf('firefox');
  e.sKc = -1 < e.userAgent.indexOf(' linux ');
  e.$Ld = e.sKc && -1 < e.userAgent.indexOf('vivaldi');
  e.WAb = -1 < e.userAgent.indexOf('sailfish');
  e.qAc = -1 < e.userAgent.indexOf('emulatedevicepixelratio');
  e.Ftd = -1 < e.userAgent.indexOf('needemulateupload');
  e.zoom = 1;
  e.Zld = function () {
    if (e.WAb && e.qAc) {
      var Pa = 1;
      540 >= screen.width ? Pa = 1.5 : 540 < screen.width && 768 >= screen.width ? Pa = 2 : 768 < screen.width && (Pa = 3);
      e.Zx = 1.9 <= Pa;
      e.Ym = Pa;
      f.devicePixelRatio = Pa;
    } else e.EOa ? (e.Zx = 1.9 <= f.devicePixelRatio, e.Ym = f.devicePixelRatio) : (e.zoom = 1, e.Zx = !1, e.Ym = 1, e.N3a && !e.Htd && !e.Ggb && document && document.firstElementChild && document.body ? (.1 < f.devicePixelRatio && (1.99 > f.devicePixelRatio ? e.zoom = f.devicePixelRatio / 1 : (e.zoom = f.devicePixelRatio / 2, e.Zx = !0)), Pa = document.firstElementChild.style, e.fcb ?
      .1 < f.devicePixelRatio ? (Pa.transformOrigin = '0 0', Pa.transform = 'scale(' + 1 / e.zoom + ')', Pa.width = 100 * e.zoom + '%', Pa.height = 100 * e.zoom + '%') : (Pa.transformOrigin = '0 0', Pa.transform = 'scale(1)', Pa.width = '100%', Pa.height = '100%') : Pa.zoom = .1 < f.devicePixelRatio ? 1 / e.zoom : 'normal', e.Zx && (e.Ym = 2)) : (e.Zx = .01 > Math.abs(2 - f.devicePixelRatio / e.zoom), e.Zx && (e.Ym = 2), e.Ggb && (e.Zx = 1.9 <= f.devicePixelRatio, e.Ym = f.devicePixelRatio)));
  };
  e.Zld();
  e.Ev = function (f, ab) {
    return !0 === ab ? f * e.Ym + .5 >> 0 : f / e.Ym + .5 >> 0;
  };
  f.AscCommon = f.AscCommon ||
    {};
  f.AscCommon.qf = e;
})(window);
'use strict';
var ew = window, Fw = String.fromCharCode(5), Gw = {
    mcd: 0,
    zCb: 513,
    T3b: 2305,
    vHc: 2051,
    rMc: 65,
    IXc: 66,
    W4c: 67,
    I6c: 68,
    c1a: 69,
    C3c: 71,
    WYc: 72,
    qZc: 73,
    G3c: 74,
    JXc: 75,
    MXc: 76,
    LXc: 77,
    tZc: 78,
    c5c: 79,
    KXc: 4097,
    bEd: 8193,
    JSON: 2056,
    WNc: 257,
    Ced: 258,
    V4c: 259,
    ZQa: 260,
    Ded: 261,
    Ged: 262,
    Fed: 263,
    sZc: 264,
    b5c: 265,
    Eed: 4098,
    hNc: 129,
    I5c: 130,
    U4c: 131,
    H5c: 132,
    J5c: 133,
    G5c: 134,
    F5c: 135,
    E5c: 136,
    rZc: 137,
    a5c: 138
  }, Hw = {
    il: { xV: -1, ep: 0 }, Fg: {
      zue: 3,
      j9d: 2,
      G$d: 1,
      nY: 0,
      cT: -1,
      cXc: -2,
      MYc: -4,
      pBe: -5,
      Database: -6,
      qae: -7,
      yZc: -8,
      Dcd: -9,
      Ccd: -10,
      hpb: -11,
      Qje: -12,
      s8a: -13,
      W3c: -16,
      FLb: -17,
      Ykb: -18,
      i9b: -19,
      jpb: -20,
      Sbc: -21,
      Ncd: -22,
      j7b: -23,
      pcc: -24,
      ZYc: -25,
      Rad: -30,
      Qad: -31,
      Sad: -32,
      SFd: -35,
      vCb: -40,
      hRd: -41,
      JPd: -45,
      o_b: -50,
      p0a: -51,
      H3d: -52,
      YDd: -53,
      VMc: -54,
      eRd: -55,
      yMc: -56,
      WPd: -57,
      BRd: -64,
      V5c: -65,
      yEd: -66,
      q3b: -72,
      zVc: -71,
      Bcc: -80,
      iPd: -81,
      jFa: -82,
      j9b: -83,
      zhc: -100,
      u0b: -101,
      vcd: -102,
      FRd: -110,
      O9c: -120,
      P9c: -121,
      Q9c: -122,
      dQd: -299,
      e_c: -300,
      P$b: -301,
      fQd: -302,
      eQd: -303,
      CMc: -304,
      F_b: -305,
      Qae: -306,
      ZEd: -307,
      BMc: -308,
      gQd: -309,
      oFd: -310,
      IHc: -311,
      F6a: -312,
      AHa: -331,
      BHa: -332,
      sRd: 500,
      UXc: -600,
      Y4a: -450,
      MHc: -451,
      Pie: -452,
      mRd: -601,
      jPd: -700
    }
  }, Iw = {
    YNa: 0,
    qG: 1,
    S2a: 2,
    msa: 3,
    WG: 4,
    ZN: 5,
    d$b: 6,
    Z6a: 7,
    J4: 8,
    DGc: 9,
    Jzb: 11,
    u3c: 12,
    vCb: 13,
    OPd: 14,
    wGd: 15,
    AHa: 16,
    BHa: 17,
    jvf: 18
  }, Vz = { ZQa: 0, c1a: 1, OGb: 2 }, kA = { Af: 0, fNc: 1, o5c: 2, dke: 3, npb: 255 }, lA = { tvd: 1, oqd: 2, sQc: 3 },
  mA = { oO: 0, Kr: 1 },
  nA = { Af: -1, Ghb: 0, Number: 1, $3b: 2, k7b: 3, ZBb: 4, Date: 5, Z9: 6, Tg: 7, Qga: 8, Text: 9, Gla: 10 },
  XB = { KOd: 0, WRd: 1, JOd: 2, uue: 3 },
  YB = { bb: 0, Table: 1, Image: 2, Vk: 3, Ai: 4, GGd: 5, vH: 6, Slide: 7, Co: 8, Math: 9, scc: 10, THf: 11 },
  ZB = { Af: 0, k$b: 1, xw: 2 }, nC = { pr: 0, Ny: 1, Dua: 2 }, oC = { pr: 0, Dua: 1 },
  pC = { pr: 0, f4a: 1, vertical: 2, nua: 3 },
  qC = { pr: 0, left: 1, top: 2, right: 3, bottom: 4, SYa: 5, m_a: 6, We: 7, Seb: 8 },
  rC = { pr: 0, Ya: 1, PVa: 2, rW: 3, pua: 4, fCa: 5, ee: 6, Jua: 7, r: 8, t: 9 },
  zC = { pr: 0, Rcb: 1, TBc: 2, uBc: 3 }, EC = {
    A5: 0,
    Wfa: 1,
    Xfa: 2,
    Oba: 3,
    Pba: 4,
    Rka: 5,
    B5: 6,
    N5: 7,
    $ba: 8,
    gla: 9,
    sMa: 10,
    tMa: 11,
    vcb: 12,
    L5: 13,
    j9: 14,
    gca: 15,
    PX: 16,
    XZ: 17,
    H5: 18,
    QX: 19,
    YZ: 20,
    I5: 21,
    Lba: 22,
    Mba: 23,
    Oka: 24,
    c9: 25,
    r4: 26,
    a_: 27,
    Gxb: 28,
    IYb: 29,
    JYb: 30,
    KYb: 31,
    Hxb: 32,
    geb: 33,
    HZb: 34,
    IZb: 35,
    oPb: 36,
    pPb: 37,
    jDd: 38
  }, FC = { tt: 0, fixed: 1 }, IC = {
    pr: 0, yFb: 1, WHb: 2, VHb: 3, XHb: 4, SIb: 5, ILb: 6, JLb: 7,
    LLb: 8, hVc: 9, KLb: 10
  }, JC = { M_: 0, jAa: 1, zr: 2, DA: 3 }, KC = { K_: 0, L_: 1, Ow: 2, pN: 3 },
  LC = { tt: 0, maxValue: 1, value: 2, minValue: 3 }, MC = { tt: 0, vBc: 1 }, NC = { grb: 0, BKa: 1 },
  OC = { tt: 0, date: 1, text: 2, Sg: 3, val: 4 }, PC = { xw: 0, vd: 1, Text: 2, AIa: 255 },
  QC = { Pk: 0, EE: 1, Ba: 2, XD: 3, Ra: 4 }, RC = { Xa: 0, Pk: 1, Sq: 2, EE: 3, XD: 4, Qa: 5 },
  SC = { xw: 0, vd: 1, Text: 2 }, TC = { vw: 0, Vr: 1, Wla: 2, G9: 3, xw: 4, oma: 5, vd: 6, R9: 7 },
  UC = { D4a: 0, Wla: 1, wc: 2, xw: 3, oma: 4, vd: 5, bb: 6, l8a: 7 }, VC = {
    Af: 0,
    Lt: 1,
    ySa: 2,
    z0a: 3,
    SRa: 4,
    C0a: 5,
    B0a: 6,
    tJa: 7,
    P0a: 8,
    a1a: 9,
    gTa: 10,
    Q0a: 11,
    rIa: 12,
    sJa: 13
  }, XC = { usa: 0, U6a: 1 }, YC =
    { ska: 0, vWb: 1, K_d: 2 }, ZC = { QUc: 0, q9: 1, sca: 2, YS: 3, sra: 4 },
  $C = { xHa: 0, tu: 1, uB: 2, TC: 3, AJ: 4, WJ: 5, Hfa: 6 }, bD = { Ylb: 1, R$b: 2 }, fD = { rKb: 1, Vgc: 2 },
  gD = { Gec: 0, sKb: 1 }, hD = { Xa: 0, Pk: 1, v3b: 2, M3b: 3, Qa: 4 }, iD = { vXb: 1, Ph: 3, Wqf: 4 },
  jD = { t7a: 1, pkb: 2, XIb: 3 }, kD = { vae: 0, t7a: 1, oSd: 2 },
  lD = { Af: 0, q2: 1, W9b: 2, ddc: 3, Lgc: 4, mhc: 5 },
  mD = { hpf: 0, gpf: 1, fpf: 2, Ref: 3, Qef: 4, Pef: 5, wdf: 6, vdf: 7, udf: 8 }, nD = { y6a: 0, qJa: 1, z4a: 2 },
  oD = { T_b: 0, gbc: 1, pdc: 2 },
  pD = { Dfb: 1, pha: 2, Hka: 3, gwa: 4, M6c: 5, L6c: 6, N6c: 7, udc: 8, tdc: 9, Mle: 10 }, qD = {
    Lhb: 1, xfb: 2, $Ha: 3, KSa: 4, KQd: 5, LQd: 6, IQd: 7,
    JQd: 8
  }, rD = { Ahb: 1, vlb: 2, MNa: 3, Qya: 4, LPd: 5 }, sD = {
    gdc: 210,
    edc: 297,
    xRd: XC.usa,
    wRd: 17.8,
    yRd: 17.8,
    zRd: 19.1,
    tRd: 19.1,
    Jke: 7.62,
    Ike: 7.62,
    fLf: .17,
    gLf: .17,
    hLf: .17,
    eLf: .17,
    uRd: 0,
    vRd: 0
  }, tD = { RLc: 0, TEd: 1, Selection: 2 },
  uD = { G4e: 0, H4e: 1, f5e: 2, Ddf: 3, Edf: 4, Fdf: 5, IBd: 6, hqf: 7, iqf: 8, jqf: 9, kqf: 10 }, vD = {
    Gfa: 0,
    Qga: 1,
    Csa: 2,
    c7a: 3,
    Qmb: 4,
    v9: 5,
    Function: 6,
    kFb: 7,
    B4a: 8,
    uI: 9,
    vkb: 10,
    KIb: 11,
    THb: 12,
    zT: 13,
    aHb: 14,
    Wke: 15
  }, wD = { Qa: 0, Xa: 1 }, xD = { Af: 0, Jha: 1, afa: 2, mS: 3, qdc: 4 }, yD = { uI: 1, ugc: 2, DPa: 3, Q6a: 4 },
  zD = { Af: -1, Qa: 0, Xa: 1 }, AD = { Qa: 0, Pk: 1, Xa: 2 }, DD =
    { Ba: 0, Pk: 1, Ra: 2 }, ED = { Qa: 0, Pk: 1, Xa: 2 }, FD = { jda: 0, mS: 1 }, GD = { Af: -1, Qa: 0, Xa: 1 },
  HD = { w3b: 0, Zac: 1, g1c: 2, d4c: 3, Af: 4, ohc: 5 }, ID = [];
ID[33] = 19;
ID[34] = 1;
ID[35] = 1;
ID[36] = 33;
ID[37] = 19;
ID[38] = 1;
ID[39] = 1;
ID[40] = 37;
ID[41] = 19;
ID[42] = 1;
ID[43] = 1;
ID[44] = 19;
ID[45] = 1;
ID[46] = 19;
ID[47] = 1;
ID[58] = 19;
ID[59] = 19;
ID[60] = 1;
ID[61] = 1;
ID[62] = 17;
ID[63] = 19;
ID[64] = 1;
ID[91] = 37;
ID[92] = 1;
ID[93] = 19;
ID[94] = 1;
ID[95] = 1;
ID[96] = 1;
ID[123] = 37;
ID[124] = 1;
ID[125] = 17;
ID[126] = 1;
ID[161] = 1;
ID[162] = 17;
ID[163] = 33;
ID[164] = 1;
ID[165] = 33;
ID[166] = 1;
ID[167] = 1;
ID[168] = 17;
ID[169] = 1;
ID[170] = 1;
ID[171] = 1;
ID[172] = 1;
ID[173] = 1;
ID[174] = 1;
ID[175] = 1;
ID[176] = 17;
ID[177] = 1;
ID[180] = 1;
ID[182] = 1;
ID[183] = 17;
ID[184] = 1;
ID[186] = 1;
ID[187] = 1;
ID[187] = 1;
ID[191] = 1;
ID[8208] = 1;
ID[8209] = 1;
ID[8210] = 1;
ID[8211] = 1;
ID[8212] = 1;
ID[8213] = 17;
ID[8214] = 17;
ID[8215] = 1;
ID[8216] = 33;
ID[8217] = 17;
ID[8218] = 1;
ID[8219] = 1;
ID[8220] = 33;
ID[8221] = 17;
ID[8222] = 1;
ID[8223] = 1;
ID[8224] = 1;
ID[8225] = 1;
ID[8226] = 1;
ID[8227] = 1;
ID[8228] = 1;
ID[8229] = 1;
ID[8230] = 17;
ID[8231] = 1;
ID[8240] = 17;
ID[8241] = 1;
ID[8242] = 17;
ID[8243] = 17;
ID[8244] = 1;
ID[8245] = 1;
ID[8246] = 1;
ID[8247] = 1;
ID[8248] = 1;
ID[8249] = 1;
ID[8250] = 17;
ID[8251] = 1;
ID[8252] = 1;
ID[8253] = 1;
ID[8254] = 1;
ID[8255] = 1;
ID[8256] = 1;
ID[8257] = 1;
ID[8258] = 1;
ID[8259] = 1;
ID[8260] = 1;
ID[8261] = 1;
ID[8262] = 1;
ID[8263] = 1;
ID[8264] = 1;
ID[8265] = 1;
ID[8266] = 1;
ID[8267] = 1;
ID[8268] = 1;
ID[8269] = 1;
ID[8270] = 1;
ID[8271] = 1;
ID[8272] = 1;
ID[8273] = 1;
ID[8274] = 1;
ID[8275] = 1;
ID[8276] = 1;
ID[8277] = 1;
ID[8278] = 1;
ID[8279] = 1;
ID[8280] = 1;
ID[8281] = 1;
ID[8282] = 1;
ID[8283] = 1;
ID[8284] = 1;
ID[8285] = 1;
ID[8286] = 1;
ID[12289] = 17;
ID[12290] = 17;
ID[12291] = 17;
ID[12292] = 1;
ID[12293] = 1;
ID[12294] = 1;
ID[12295] = 1;
ID[12296] = 33;
ID[12297] = 17;
ID[12298] = 33;
ID[12299] = 17;
ID[12300] = 33;
ID[12301] = 17;
ID[12302] = 33;
ID[12303] = 17;
ID[12304] = 33;
ID[12305] = 17;
ID[12306] = 1;
ID[12307] = 1;
ID[12308] = 33;
ID[12309] = 17;
ID[12310] = 33;
ID[12311] = 17;
ID[12312] = 1;
ID[12313] = 1;
ID[12314] = 1;
ID[12315] = 1;
ID[12316] = 1;
ID[12317] = 33;
ID[12318] = 17;
ID[12319] = 1;
ID[65281] = 275;
ID[65282] = 273;
ID[65283] = 257;
ID[65284] = 289;
ID[65285] = 275;
ID[65286] = 257;
ID[65287] = 273;
ID[65288] = 293;
ID[65289] = 275;
ID[65290] = 257;
ID[65291] = 257;
ID[65292] = 275;
ID[65293] = 257;
ID[65294] = 275;
ID[65295] = 257;
ID[65306] = 275;
ID[65307] = 275;
ID[65308] = 257;
ID[65309] = 257;
ID[65310] = 257;
ID[65311] = 275;
ID[65312] = 257;
ID[65339] = 293;
ID[65340] = 257;
ID[65341] = 275;
ID[65342] = 257;
ID[65343] = 257;
ID[65344] = 273;
ID[65371] = 293;
ID[65372] = 273;
ID[65373] = 275;
ID[65374] = 273;
ID[65375] = 257;
ID[65376] = 257;
ID[65377] = 257;
ID[65378] = 257;
ID[65379] = 257;
ID[65380] = 257;
ID[65381] = 257;
ID[65504] = 273;
ID[65505] = 289;
ID[65506] = 257;
ID[65507] = 257;
ID[65508] = 257;
ID[65509] = 289;
ID[65510] = 257;
ID[65512] = 257;
ID[65513] = 257;
ID[65514] = 257;
ID[65515] = 257;
ID[65516] = 257;
ID[65517] = 257;
ID[65518] = 257;
var JD = {
    yRc: 0,
    VMd: 1,
    yJd: 2,
    sVd: 3,
    zJd: 4,
    xJd: 5,
    Lef: 6,
    WMd: 7,
    tOd: 8,
    sOd: 9,
    UMd: 10,
    s2a: 11,
    link: 12,
    QZa: 13,
    Mdf: 14,
    AGa: 15,
    CWa: 16,
    MBc: 17,
    Hqf: 18,
    c5e: 19,
    eAc: 20,
    ntg: 21,
    Qng: 22,
    j2: 23,
    mdb: 24,
    mDd: 25
  }, KD = { Af: 0, Mf: 4097, sD: 8194, kV: 8195, y5: 8196, jV: 8197, x5: 8198, tPa: 8199, iUc: 4096, T4c: 8192 },
  LD = { hW: 1, nc: 2, Af: 3 }, MD = { Text: 0, Dh: 1 }, ND = { ONa: 1, Rz: 2 }, OD = { d3: 0, Slide: 1, vd: 2, xw: 3 },
  PD = { B6: 0, Ofa: 1, Qca: 2 }, QD;
ew.Asc = ew.Asc || {};
ew.Asc.FONT_THUMBNAIL_HEIGHT = 672 / 25.4 >> 0;
ew.Asc.c_oAscMaxColumnWidth = ew.Asc.POb = 255;
ew.Asc.c_oAscMaxRowHeight = ew.Asc.jmc = 409.5;
ew.Asc.c_nMaxConversionTime = ew.Asc.Kkd = 9E5;
ew.Asc.c_nMaxDownloadTitleLen = ew.Asc.u_e = 255;
ew.Asc.c_nVersionNoBase64 = ew.Asc.TPa = 10;
ew.Asc.c_dMaxParaRunContentLength = ew.Asc.VVa = 256;
ew.Asc.c_rUneditableTypes = ew.Asc.L_e = /^(?:(pdf|djvu|xps))$/;
QD = ew.Asc.c_oAscFileType = ew.Asc.yib = Gw;
QD.UNKNOWN = QD.mcd;
QD.PDF = QD.zCb;
QD.PDFA = QD.T3b;
QD.HTML = QD.vHc;
QD.DOCX = QD.rMc;
QD.DOC = QD.IXc;
QD.ODT = QD.W4c;
QD.RTF = QD.I6c;
QD.TXT = QD.c1a;
QD.MHT = QD.C3c;
QD.EPUB = QD.WYc;
QD.FB2 = QD.qZc;
QD.MOBI = QD.G3c;
QD.DOCM = QD.JXc;
QD.DOTX = QD.MXc;
QD.DOTM = QD.LXc;
QD.FODT = QD.tZc;
QD.OTT = QD.c5c;
QD.DOCY = QD.KXc;
QD.JSON = QD.JSON;
QD.XLSX = QD.WNc;
QD.XLS = QD.Ced;
QD.ODS = QD.V4c;
QD.CSV = QD.ZQa;
QD.XLSM = QD.Ded;
QD.XLTX = QD.Ged;
QD.XLTM = QD.Fed;
QD.FODS = QD.sZc;
QD.OTS = QD.b5c;
QD.XLSY = QD.Eed;
QD.PPTX = QD.hNc;
QD.PPT = QD.I5c;
QD.ODP = QD.U4c;
QD.PPSX = QD.H5c;
QD.PPTM = QD.J5c;
QD.PPSM = QD.G5c;
QD.POTX = QD.F5c;
QD.POTM = QD.E5c;
QD.FODP = QD.rZc;
QD.OTP = QD.a5c;
QD = ew.Asc.c_oAscError = ew.Asc.rl = Hw;
QD.Level = QD.il;
QD.ID = QD.Fg;
QD = Hw.il;
QD.Critical = QD.xV;
QD.NoCritical = QD.ep;
QD = Hw.Fg;
QD.ServerSaveComplete = QD.zue;
QD.ConvertationProgress = QD.j9d;
QD.DownloadProgress = QD.G$d;
QD.No = QD.nY;
QD.Unknown = QD.cT;
QD.ConvertationTimeout = QD.cXc;
QD.DownloadError = QD.MYc;
QD.UnexpectedGuid = QD.pBe;
QD.Database = QD.Database;
QD.FileRequest = QD.qae;
QD.FileVKey = QD.yZc;
QD.UplImageSize = QD.Dcd;
QD.UplImageExt = QD.Ccd;
QD.UplImageFileCount = QD.hpb;
QD.NoSupportClipdoard = QD.Qje;
QD.UplImageUrl = QD.s8a;
QD.MaxDataPointsError = QD.W3c;
QD.StockChartError = QD.FLb;
QD.CoAuthoringDisconnect = QD.Ykb;
QD.ConvertationPassword = QD.i9b;
QD.VKeyEncrypt = QD.jpb;
QD.KeyExpire = QD.Sbc;
QD.UserCountExceed = QD.Ncd;
QD.AccessDeny = QD.j7b;
QD.LoadingScriptError = QD.pcc;
QD.EditingError = QD.ZYc;
QD.SplitCellMaxRows = QD.Rad;
QD.SplitCellMaxCols = QD.Qad;
QD.SplitCellRowsDivider = QD.Sad;
QD.MobileUnexpectedCharCount = QD.SFd;
QD.MailMergeLoadFile = QD.vCb;
QD.MailMergeSaveFile = QD.hRd;
QD.DataValidate = QD.JPd;
QD.AutoFilterDataRangeError = QD.o_b;
QD.AutoFilterChangeFormatTableError = QD.p0a;
QD.AutoFilterChangeError = QD.H3d;
QD.AutoFilterMoveToHiddenRangeError = QD.YDd;
QD.LockedAllError = QD.VMc;
QD.LockedWorksheetRename = QD.eRd;
QD.FTChangeTableRangeError = QD.yMc;
QD.FTRangeIncludedOtherTables = QD.WPd;
QD.PasteMaxRangeError = QD.BRd;
QD.PastInMergeAreaError = QD.V5c;
QD.CopyMultiselectAreaError = QD.yEd;
QD.DataRangeError = QD.q3b;
QD.CannotMoveRange = QD.zVc;
QD.MaxDataSeriesError = QD.Bcc;
QD.CannotFillRange = QD.iPd;
QD.ConvertationOpenError = QD.jFa;
QD.ConvertationSaveError = QD.j9b;
QD.UserDrop = QD.zhc;
QD.Warning = QD.u0b;
QD.PrintMaxPagesCount = QD.FRd;
QD.SessionAbsolute = QD.O9c;
QD.SessionIdle = QD.P9c;
QD.SessionToken = QD.Q9c;
QD.FrmlMaxTextLength = QD.dQd;
QD.FrmlWrongCountParentheses = QD.e_c;
QD.FrmlWrongOperator = QD.P$b;
QD.FrmlWrongMaxArgument = QD.fQd;
QD.FrmlWrongCountArgument = QD.eQd;
QD.FrmlWrongFunctionName = QD.CMc;
QD.FrmlAnotherParsingError = QD.F_b;
QD.FrmlWrongArgumentRange = QD.Qae;
QD.FrmlOperandExpected = QD.ZEd;
QD.FrmlParenthesesCorrectCount = QD.BMc;
QD.FrmlWrongReferences = QD.gQd;
QD.InvalidReferenceOrName = QD.oFd;
QD.LockCreateDefName = QD.IHc;
QD.LockedCellPivot = QD.F6a;
QD.ForceSaveButton = QD.AHa;
QD.ForceSaveTimeout = QD.BHa;
QD.CannotChangeFormulaArray = QD.Y4a;
QD.MultiCellsInTablesFormulaArray = QD.MHc;
QD.MailToClientMissing = QD.Pie;
QD.OpenWarning = QD.sRd;
QD.DataEncrypted = QD.UXc;
QD.NoDataToParse = QD.mRd;
QD.CannotUngroupError = QD.jPd;
QD = ew.Asc.c_oAscAsyncAction = ew.Asc.OG = Iw;
QD.Open = QD.YNa;
QD.Save = QD.qG;
QD.LoadDocumentFonts = QD.S2a;
QD.LoadDocumentImages = QD.msa;
QD.LoadFont = QD.WG;
QD.LoadImage = QD.ZN;
QD.DownloadAs = QD.d$b;
QD.Print = QD.Z6a;
QD.UploadImage = QD.J4;
QD.ApplyChanges = QD.DGc;
QD.SlowOperation = QD.Jzb;
QD.LoadTheme = QD.u3c;
QD.MailMergeLoadFile = QD.vCb;
QD.DownloadMerge = QD.OPd;
QD.SendMailMerge = QD.wGd;
QD.ForceSaveButton = QD.AHa;
QD.ForceSaveTimeout = QD.BHa;
QD = ew.Asc.c_oAscAdvancedOptionsID = ew.Asc.GOb = Vz;
QD.CSV = QD.ZQa;
QD.TXT = QD.c1a;
QD.DRM = QD.OGb;
QD = ew.Asc.c_oAscFontRenderingModeType = ew.Asc.mUd = lA;
QD.noHinting = QD.tvd;
QD.hinting = QD.oqd;
QD.hintingAndSubpixeling = QD.sQc;
QD = ew.Asc.c_oAscAsyncActionType = ew.Asc.EH = mA;
QD.Information = QD.oO;
QD.BlockInteraction = QD.Kr;
QD = ew.Asc.c_oAscNumFormatType = ew.Asc.dX = nA;
QD.None = QD.Af;
QD.General = QD.Ghb;
QD.Number = QD.Number;
QD.Scientific = QD.$3b;
QD.Accounting = QD.k7b;
QD.Currency = QD.ZBb;
QD.Date = QD.Date;
QD.Time = QD.Z9;
QD.Percent = QD.Tg;
QD.Fraction = QD.Qga;
QD.Text = QD.Text;
QD.Custom = QD.Gla;
QD = ew.Asc.c_oAscDrawingLayerType = XB;
QD.BringToFront = QD.KOd;
QD.SendToBack = QD.WRd;
QD.BringForward = QD.JOd;
QD.SendBackward = QD.uue;
QD = ew.Asc.c_oAscTypeSelectElement = ew.Asc.lAb = YB;
QD.Paragraph = QD.bb;
QD.Table = QD.Table;
QD.Image = QD.Image;
QD.Header = QD.Vk;
QD.Hyperlink = QD.Ai;
QD.SpellCheck = QD.GGd;
QD.Shape = QD.vH;
QD.Slide = QD.Slide;
QD.Chart = QD.Co;
QD.Math = QD.Math;
QD.MailMerge = QD.scc;
ew.Asc.linerule_AtLeast = ew.Asc.dJ = 0;
ew.Asc.linerule_Auto = ew.Asc.AB = 1;
ew.Asc.linerule_Exact = ew.Asc.aM = 2;
ew.Asc.c_oAscShdClear = ew.Asc.hka = 0;
ew.Asc.c_oAscShdNil = ew.Asc.xO = 1;
QD = ew.Asc.c_oAscDropCap = ew.Asc.LOb = ZB;
QD.None = QD.Af;
QD.Drop = QD.k$b;
QD.Margin = QD.xw;
QD = ew.Asc.c_oAscChartTitleShowSettings = ew.Asc.IOb = nC;
QD.none = QD.pr;
QD.overlay = QD.Ny;
QD.noOverlay = QD.Dua;
QD = ew.Asc.c_oAscChartHorAxisLabelShowSettings = ew.Asc.Nkd = oC;
QD.none = QD.pr;
QD.noOverlay = QD.Dua;
QD = ew.Asc.c_oAscChartVertAxisLabelShowSettings = ew.Asc.Okd = pC;
QD.none = QD.pr;
QD.rotated = QD.f4a;
QD.vertical = QD.vertical;
QD.horizontal = QD.nua;
QD = ew.Asc.c_oAscChartLegendShowSettings = ew.Asc.z3 = qC;
QD.none = QD.pr;
QD.left = QD.left;
QD.top = QD.top;
QD.right = QD.right;
QD.bottom = QD.bottom;
QD.leftOverlay = QD.SYa;
QD.rightOverlay = QD.m_a;
QD.layout = QD.We;
QD.topRight = QD.Seb;
QD = ew.Asc.c_oAscChartDataLabelsPos = ew.Asc.irb = rC;
QD.none = QD.pr;
QD.b = QD.Ya;
QD.bestFit = QD.PVa;
QD.ctr = QD.rW;
QD.inBase = QD.pua;
QD.inEnd = QD.fCa;
QD.l = QD.ee;
QD.outEnd = QD.Jua;
QD.r = QD.r;
QD.t = QD.t;
QD = ew.Asc.c_oAscGridLinesSettings = ew.Asc.MOb = zC;
QD.none = QD.pr;
QD.major = QD.Rcb;
QD.minor = QD.TBc;
QD.majorMinor = QD.uBc;
QD = ew.Asc.c_oAscChartTypeSettings = ew.Asc.Fk = EC;
QD.barNormal = QD.A5;
QD.barStacked = QD.Wfa;
QD.barStackedPer = QD.Xfa;
QD.barNormal3d = QD.Oba;
QD.barStacked3d = QD.Pba;
QD.barStackedPer3d = QD.Rka;
QD.barNormal3dPerspective = QD.B5;
QD.lineNormal = QD.N5;
QD.lineStacked = QD.$ba;
QD.lineStackedPer = QD.gla;
QD.lineNormalMarker = QD.sMa;
QD.lineStackedMarker = QD.tMa;
QD.lineStackedPerMarker = QD.vcb;
QD.line3d = QD.L5;
QD.pie = QD.j9;
QD.pie3d = QD.gca;
QD.hBarNormal = QD.PX;
QD.hBarStacked = QD.XZ;
QD.hBarStackedPer = QD.H5;
QD.hBarNormal3d = QD.QX;
QD.hBarStacked3d = QD.YZ;
QD.hBarStackedPer3d = QD.I5;
QD.areaNormal = QD.Lba;
QD.areaStacked = QD.Mba;
QD.areaStackedPer = QD.Oka;
QD.doughnut = QD.c9;
QD.stock = QD.r4;
QD.scatter = QD.a_;
QD.scatterLine = QD.Gxb;
QD.scatterLineMarker = QD.IYb;
QD.scatterMarker = QD.JYb;
QD.scatterNone = QD.KYb;
QD.scatterSmooth = QD.Hxb;
QD.scatterSmoothMarker = QD.geb;
QD.unknown = QD.jDd;
QD = ew.Asc.c_oAscValAxisRule = ew.Asc.L9a = FC;
QD.auto = QD.tt;
QD.fixed = QD.fixed;
QD = ew.Asc.c_oAscValAxUnits = ew.Asc.mrb = IC;
QD.BILLIONS = QD.yFb;
QD.HUNDRED_MILLIONS = QD.WHb;
QD.HUNDREDS = QD.VHb;
QD.HUNDRED_THOUSANDS = QD.XHb;
QD.MILLIONS = QD.SIb;
QD.TEN_MILLIONS = QD.ILb;
QD.TEN_THOUSANDS = QD.JLb;
QD.TRILLIONS = QD.LLb;
QD.CUSTOM = QD.hVc;
QD.THOUSANDS = QD.KLb;
QD = ew.Asc.c_oAscTickMark = ew.Asc.w$ = JC;
QD.TICK_MARK_CROSS = QD.M_;
QD.TICK_MARK_IN = QD.jAa;
QD.TICK_MARK_NONE = QD.zr;
QD.TICK_MARK_OUT = QD.DA;
QD = ew.Asc.c_oAscTickLabelsPos = ew.Asc.ZAa = KC;
QD.TICK_LABEL_POSITION_HIGH = QD.K_;
QD.TICK_LABEL_POSITION_LOW = QD.L_;
QD.TICK_LABEL_POSITION_NEXT_TO = QD.Ow;
QD.TICK_LABEL_POSITION_NONE = QD.pN;
QD = ew.Asc.c_oAscCrossesRule = ew.Asc.WVa = LC;
QD.auto = QD.tt;
QD.maxValue = QD.maxValue;
QD.value = QD.value;
QD.minValue = QD.minValue;
QD = ew.Asc.c_oAscBetweenLabelsRule = ew.Asc.HOb = MC;
QD.auto = QD.tt;
QD.manual = QD.vBc;
QD = ew.Asc.c_oAscLabelsPosition = ew.Asc.EKa = NC;
QD.byDivisions = QD.grb;
QD.betweenDivisions = QD.BKa;
QD = ew.Asc.c_oAscAxisType = ew.Asc.Mkd = OC;
QD.auto = QD.tt;
QD.date = QD.date;
QD.text = QD.text;
QD.cat = QD.Sg;
QD.val = QD.val;
QD = ew.Asc.c_oAscHAnchor = ew.Asc.tqa = PC;
QD.Margin = QD.xw;
QD.Page = QD.vd;
QD.Text = QD.Text;
QD.PageInternal = QD.AIa;
QD = ew.Asc.c_oAscXAlign = ew.Asc.nrb = QC;
QD.Center = QD.Pk;
QD.Inside = QD.EE;
QD.Left = QD.Ba;
QD.Outside = QD.XD;
QD.Right = QD.Ra;
QD = ew.Asc.c_oAscYAlign = ew.Asc.orb = RC;
QD.Bottom = QD.Xa;
QD.Center = QD.Pk;
QD.Inline = QD.Sq;
QD.Inside = QD.EE;
QD.Outside = QD.XD;
QD.Top = QD.Qa;
QD = ew.Asc.c_oAscVAnchor = ew.Asc.Lxa = SC;
QD.Margin = QD.xw;
QD.Page = QD.vd;
QD.Text = QD.Text;
QD = ew.Asc.c_oAscRelativeFromH = ew.Asc.JX = TC;
QD.Character = QD.vw;
QD.Column = QD.Vr;
QD.InsideMargin = QD.Wla;
QD.LeftMargin = QD.G9;
QD.Margin = QD.xw;
QD.OutsideMargin = QD.oma;
QD.Page = QD.vd;
QD.RightMargin = QD.R9;
QD = ew.Asc.c_oAscRelativeFromV = ew.Asc.SZ = UC;
QD.BottomMargin = QD.D4a;
QD.InsideMargin = QD.Wla;
QD.Line = QD.wc;
QD.Margin = QD.xw;
QD.OutsideMargin = QD.oma;
QD.Page = QD.vd;
QD.Paragraph = QD.bb;
QD.TopMargin = QD.l8a;
QD = ew.Asc.c_oAscBorderStyles = ew.AscCommon.sqa = VC;
QD.None = QD.Af;
QD.Double = QD.Lt;
QD.Hair = QD.ySa;
QD.DashDotDot = QD.z0a;
QD.DashDot = QD.SRa;
QD.Dotted = QD.C0a;
QD.Dashed = QD.B0a;
QD.Thin = QD.tJa;
QD.MediumDashDotDot = QD.P0a;
QD.SlantDashDot = QD.a1a;
QD.MediumDashDot = QD.gTa;
QD.MediumDashed = QD.Q0a;
QD.Medium = QD.rIa;
QD.Thick = QD.sJa;
QD = ew.Asc.c_oAscPageOrientation = ew.Asc.yta = XC;
QD.PagePortrait = QD.usa;
QD.PageLandscape = QD.U6a;
QD = ew.Asc.c_oAscColor = ew.Asc.kfa = ZC;
QD.COLOR_TYPE_NONE = QD.QUc;
QD.COLOR_TYPE_SRGB = QD.q9;
QD.COLOR_TYPE_PRST = QD.sca;
QD.COLOR_TYPE_SCHEME = QD.YS;
QD.COLOR_TYPE_SYS = QD.sra;
QD = ew.Asc.c_oAscFill = ew.Asc.wy = $C;
QD.FILL_TYPE_NONE = QD.xHa;
QD.FILL_TYPE_BLIP = QD.tu;
QD.FILL_TYPE_NOFILL = QD.uB;
QD.FILL_TYPE_SOLID = QD.TC;
QD.FILL_TYPE_GRAD = QD.AJ;
QD.FILL_TYPE_PATT = QD.WJ;
QD.FILL_TYPE_GRP = QD.Hfa;
QD = ew.Asc.c_oAscFillGradType = ew.Asc.Rkd = bD;
QD.GRAD_LINEAR = QD.Ylb;
QD.GRAD_PATH = QD.R$b;
QD = ew.Asc.c_oAscFillBlipType = ew.Asc.Qkd = fD;
QD.STRETCH = QD.rKb;
QD.TILE = QD.Vgc;
QD = ew.Asc.c_oAscStrokeType = ew.Asc.G_e = gD;
QD.STROKE_NONE = QD.Gec;
QD.STROKE_COLOR = QD.sKb;
QD = ew.Asc.c_oAscVAlign = ew.Asc.yO = hD;
QD.Bottom = QD.Xa;
QD.Center = QD.Pk;
QD.Dist = QD.v3b;
QD.Just = QD.M3b;
QD.Top = QD.Qa;
QD = ew.Asc.c_oAscVertDrawingText = iD;
QD.normal = QD.vXb;
QD.vert = QD.Ph;
QD.vert270 = QD.Wqf;
QD = ew.Asc.c_oAscLineJoinType = jD;
QD.Round = QD.t7a;
QD.Bevel = QD.pkb;
QD.Miter = QD.XIb;
QD = ew.Asc.c_oAscLineCapType = kD;
QD.Flat = QD.vae;
QD.Round = QD.t7a;
QD.Square = QD.oSd;
QD = ew.Asc.c_oAscLineBeginType = lD;
QD.None = QD.Af;
QD.Arrow = QD.q2;
QD.Diamond = QD.W9b;
QD.Oval = QD.ddc;
QD.Stealth = QD.Lgc;
QD.Triangle = QD.mhc;
QD = ew.Asc.c_oAscLineBeginSize = mD;
QD.small_small = QD.hpf;
QD.small_mid = QD.gpf;
QD.small_large = QD.fpf;
QD.mid_small = QD.Ref;
QD.mid_mid = QD.Qef;
QD.mid_large = QD.Pef;
QD.large_small = QD.wdf;
QD.large_mid = QD.vdf;
QD.large_large = QD.udf;
QD = ew.Asc.c_oAscCellTextDirection = ew.Asc.fia = nD;
QD.LRTB = QD.y6a;
QD.TBRL = QD.qJa;
QD.BTLR = QD.z4a;
QD = ew.Asc.c_oAscDocumentUnits = ew.Asc.gxf = oD;
QD.Millimeter = QD.T_b;
QD.Inch = QD.gbc;
QD.Point = QD.pdc;
ew.Asc.c_oAscMaxTooltipLength = ew.Asc.Wkd = 256;
ew.Asc.c_oAscMaxCellOrCommentLength = ew.Asc.Vkd = 32767;
ew.Asc.c_oAscMaxHeaderFooterLength = ew.Asc.ASf = 256;
QD = ew.Asc.c_oAscSelectionType = ew.Asc.gia = pD;
QD.RangeCells = QD.Dfb;
QD.RangeCol = QD.pha;
QD.RangeRow = QD.Hka;
QD.RangeMax = QD.gwa;
QD.RangeImage = QD.M6c;
QD.RangeChart = QD.L6c;
QD.RangeShape = QD.N6c;
QD.RangeShapeText = QD.udc;
QD.RangeChartText = QD.tdc;
QD.RangeFrozen = QD.Mle;
QD = ew.Asc.c_oAscInsertOptions = ew.Asc.U4b = qD;
QD.InsertCellsAndShiftRight = QD.Lhb;
QD.InsertCellsAndShiftDown = QD.xfb;
QD.InsertColumns = QD.$Ha;
QD.InsertRows = QD.KSa;
QD.InsertTableRowAbove = QD.KQd;
QD.InsertTableRowBelow = QD.LQd;
QD.InsertTableColLeft = QD.IQd;
QD.InsertTableColRight = QD.JQd;
QD = ew.Asc.c_oAscDeleteOptions = ew.Asc.S4b = rD;
QD.DeleteCellsAndShiftLeft = QD.Ahb;
QD.DeleteCellsAndShiftTop = QD.vlb;
QD.DeleteColumns = QD.MNa;
QD.DeleteRows = QD.Qya;
QD.DeleteTable = QD.LPd;
QD = ew.Asc.c_oAscPrintType = ew.Asc.W0b = tD;
QD.ActiveSheets = QD.RLc;
QD.EntireWorkbook = QD.TEd;
QD.Selection = QD.Selection;
QD = ew.Asc.c_oDashType = ew.Asc.H_e = uD;
QD.dash = QD.G4e;
QD.dashDot = QD.H4e;
QD.dot = QD.f5e;
QD.lgDash = QD.Ddf;
QD.lgDashDot = QD.Edf;
QD.lgDashDotDot = QD.Fdf;
QD.solid = QD.IBd;
QD.sysDash = QD.hqf;
QD.sysDashDot = QD.iqf;
QD.sysDashDotDot = QD.jqf;
QD.sysDot = QD.kqf;
QD = ew.Asc.c_oAscMathInterfaceType = ew.Asc.AD = vD;
QD.Common = QD.Gfa;
QD.Fraction = QD.Qga;
QD.Script = QD.Csa;
QD.Radical = QD.c7a;
QD.LargeOperator = QD.Qmb;
QD.Delimiter = QD.v9;
QD.Function = QD.Function;
QD.Accent = QD.kFb;
QD.BorderBox = QD.B4a;
QD.Bar = QD.uI;
QD.Box = QD.vkb;
QD.Limit = QD.KIb;
QD.GroupChar = QD.THb;
QD.Matrix = QD.zT;
QD.EqArray = QD.aHb;
QD.Phantom = QD.Wke;
QD = ew.Asc.c_oAscMathInterfaceBarPos = ew.Asc.imc = wD;
QD.Top = wD.Qa;
QD.Bottom = wD.Xa;
QD = ew.Asc.c_oAscMathInterfaceScript = ew.Asc.YAa = xD;
QD.None = xD.Af;
QD.Sup = xD.Jha;
QD.Sub = xD.afa;
QD.SubSup = xD.mS;
QD.PreSubSup = xD.qdc;
QD = ew.Asc.c_oAscMathInterfaceFraction = ew.Asc.XAa = yD;
QD.None = yD.uI;
QD.Skewed = yD.ugc;
QD.Linear = yD.DPa;
QD.NoBar = yD.Q6a;
QD = ew.Asc.c_oAscMathInterfaceLimitPos = ew.Asc.OOb = zD;
QD.None = zD.Af;
QD.Top = zD.Qa;
QD.Bottom = zD.Xa;
QD = ew.Asc.c_oAscMathInterfaceMatrixMatrixAlign = ew.Asc.J9a = AD;
QD.Top = AD.Qa;
QD.Center = AD.Pk;
QD.Bottom = AD.Xa;
QD = ew.Asc.c_oAscMathInterfaceMatrixColumnAlign = ew.Asc.I9a = DD;
QD.Left = DD.Ba;
QD.Center = DD.Pk;
QD.Right = DD.Ra;
QD = ew.Asc.c_oAscMathInterfaceEqArrayAlign = ew.Asc.H9a = ED;
QD.Top = ED.Qa;
QD.Center = ED.Pk;
QD.Bottom = ED.Xa;
QD = ew.Asc.c_oAscMathInterfaceNaryLimitLocation = ew.Asc.ona = FD;
QD.UndOvr = FD.jda;
QD.SubSup = FD.mS;
QD = ew.Asc.c_oAscMathInterfaceGroupCharPos = ew.Asc.NOb = GD;
QD.None = GD.Af;
QD.Top = GD.Qa;
QD.Bottom = GD.Xa;
QD = ew.Asc.c_oAscTabLeader = ew.Asc.Yfa = HD;
QD.None = HD.Af;
QD.Heavy = HD.Zac;
QD.Dot = HD.w3b;
QD.Hyphen = HD.g1c;
QD.MiddleDot = HD.d4c;
QD.Underscore = HD.ohc;
QD = ew.Asc.c_oAscRestrictionType = ew.Asc.rDb = kA;
QD.None = kA.Af;
QD.OnlyForms = kA.fNc;
QD.OnlyComments = kA.o5c;
QD.OnlySignatures = kA.dke;
QD.View = kA.npb;
ew.AscCommon = ew.AscCommon || {};
ew.AscCommon.KPc = Fw;
ew.AscCommon.jQb = 'General';
ew.AscCommon.Vfa = !1;
ew.AscCommon.hrb = { Af: 0, YNa: 1, qG: 2 };
ew.AscCommon.uMc = { Af: '', NPd: 'asc_onDownloadUrl', Z6a: 'asc_onPrintUrl', scc: 'asc_onSaveMailMerge' };
ew.AscCommon.k_ = { Number: 0, String: 1, Ffa: 2, Error: 3 };
ew.AscCommon.G9a = { egb: 0, r1a: 1, fgb: 2 };
ew.AscCommon.jUd = { eyf: 478, dyf: 286 };
ew.AscCommon.dgb = { Ub: 0, Document: 1 };
ew.AscCommon.hmc = { Ba: 0, Pk: 1, Ra: 2, Qa: 0, Xa: 2 };
ew.AscCommon.UP = 0;
ew.AscCommon.YD = 1;
ew.AscCommon.LD = 2;
ew.AscCommon.OAb = 1;
ew.AscCommon.ZDb = 2;
ew.AscCommon.SDa = .65;
ew.AscCommon.c_b = .35;
ew.AscCommon.Ryb = -.141;
ew.AscCommon.kmc = { dFc: 0, H_a: 1, cFc: 2, eFc: 3, BBd: 4, CBd: 5 };
ew.AscCommon.lmc = { yZb: 0, Geb: 1, gFc: 2, fFc: 3, DBd: 4, EBd: 5 };
ew.AscCommon.mmc = { Sq: 0, Oga: 1 };
ew.AscCommon.w_e = { Af: 0, tJa: 1, rIa: 2, sJa: 3 };
ew.AscCommon.UPa = { J_b: 1, t0b: 2, qYc: 3 };
ew.AscCommon.mOa = { H0: 1, h2: 2, Lqa: 3, aMd: 4, rdf: 5 };
ew.AscCommon.kAb = YC;
ew.AscCommon.QOb = { Rke: 0, Qke: 1, u9: 2, w8d: 3 };
ew.AscCommon.y_e = {
  line: 'Line',
  Mjd: 'Bar',
  Z$e: 'HBar',
  Kba: 'Area',
  j9: 'Pie',
  a_: 'Scatter',
  r4: 'Stock',
  c9: 'Doughnut'
};
ew.AscCommon.x_e = { vXb: 'normal', RBd: 'stacked', SBd: 'stackedPer' };
ew.AscCommon.XVa = { Af: 0, hW: 1, tue: 2, k8d: 3, CWc: 4, nc: 5 };
ew.AscCommon.lrb = { N1c: 0, pfe: 1, $Yc: 2 };
ew.AscCommon.Ida = { Gfa: 0, Ai: 1, zpa: 2, rf: 3 };
ew.AscCommon.nUd = sD;
ew.AscCommon.UOb = { pxa: 1, bCb: 2, HPd: 3 };
ew.AscCommon.VPa = { u3b: 0, hn: 1, ima: 2, WRa: 3, RRd: 4, TBb: 5, IGc: 6, KPd: 7, ERd: 8 };
ew.AscCommon.Kda = { v0a: 0, g3b: 1, TPd: 2, R_c: 3, NMc: 4, eSd: 5 };
ew.AscCommon.jrb = [[0, 28596, 'ISO-8859-6', 'Arabic (ISO 8859-6)'], [1, 720, 'DOS-720', 'Arabic (OEM 720)'], [2, 1256, 'windows-1256', 'Arabic (Windows)'], [3, 28594, 'ISO-8859-4', 'Baltic (ISO 8859-4)'], [4, 28603, 'ISO-8859-13', 'Baltic (ISO 8859-13)'], [5, 775, 'IBM775', 'Baltic (OEM 775)'], [6, 1257, 'windows-1257', 'Baltic (Windows)'], [7, 28604, 'ISO-8859-14', 'Celtic (ISO 8859-14)'], [8, 28595, 'ISO-8859-5', 'Cyrillic (ISO 8859-5)'], [9, 20866, 'KOI8-R', 'Cyrillic (KOI8-R)'], [10, 21866, 'KOI8-U', 'Cyrillic (KOI8-U)'], [11, 10007, 'x-mac-cyrillic',
  'Cyrillic (Mac)'], [12, 855, 'IBM855', 'Cyrillic (OEM 855)'], [13, 866, 'cp866', 'Cyrillic (OEM 866)'], [14, 1251, 'windows-1251', 'Cyrillic (Windows)'], [15, 852, 'IBM852', 'Central European (OEM 852)'], [16, 1250, 'windows-1250', 'Central European (Windows)'], [17, 950, 'Big5', 'Chinese (Big5 Traditional)'], [18, 936, 'GB2312', 'Central (GB2312 Simplified)'], [19, 28592, 'ISO-8859-2', 'Eastern European (ISO 8859-2)'], [20, 28597, 'ISO-8859-7', 'Greek (ISO 8859-7)'], [21, 737, 'IBM737', 'Greek (OEM 737)'], [22, 869, 'IBM869', 'Greek (OEM 869)'],
  [23, 1253, 'windows-1253', 'Greek (Windows)'], [24, 28598, 'ISO-8859-8', 'Hebrew (ISO 8859-8)'], [25, 862, 'DOS-862', 'Hebrew (OEM 862)'], [26, 1255, 'windows-1255', 'Hebrew (Windows)'], [27, 932, 'Shift_JIS', 'Japanese (Shift-JIS)'], [52, 950, 'EUC-JP', 'Japanese (EUC-JP)'], [28, 949, 'KS_C_5601-1987', 'Korean (Windows)'], [29, 51949, 'EUC-KR', 'Korean (EUC)'], [30, 861, 'IBM861', 'North European (Icelandic OEM 861)'], [31, 865, 'IBM865', 'North European (Nordic OEM 865)'], [32, 874, 'windows-874', 'Thai (TIS-620)'], [33, 28593, 'ISO-8859-3',
    'Turkish (ISO 8859-3)'], [34, 28599, 'ISO-8859-9', 'Turkish (ISO 8859-9)'], [35, 857, 'IBM857', 'Turkish (OEM 857)'], [36, 1254, 'windows-1254', 'Turkish (Windows)'], [37, 28591, 'ISO-8859-1', 'Western European (ISO-8859-1)'], [38, 28605, 'ISO-8859-15', 'Western European (ISO-8859-15)'], [39, 850, 'IBM850', 'Western European (OEM 850)'], [40, 858, 'IBM858', 'Western European (OEM 858)'], [41, 860, 'IBM860', 'Western European (OEM 860 : Portuguese)'], [42, 863, 'IBM863', 'Western European (OEM 863 : French)'], [43, 437, 'IBM437', 'Western European (OEM-US)'],
  [44, 1252, 'windows-1252', 'Western European (Windows)'], [45, 1258, 'windows-1258', 'Vietnamese (Windows)'], [46, 65001, 'UTF-8', 'Unicode (UTF-8)'], [47, 65E3, 'UTF-7', 'Unicode (UTF-7)'], [48, 1200, 'UTF-16LE', 'Unicode (UTF-16)'], [49, 1201, 'UTF-16BE', 'Unicode (UTF-16 Big Endian)'], [50, 12E3, 'UTF-32LE', 'Unicode (UTF-32)'], [51, 12001, 'UTF-32BE', 'Unicode (UTF-32 Big Endian)']];
ew.AscCommon.xSf = {
  437: 43,
  720: 1,
  737: 21,
  775: 5,
  850: 39,
  852: 15,
  855: 12,
  857: 35,
  858: 40,
  860: 41,
  861: 30,
  862: 25,
  863: 42,
  865: 31,
  866: 13,
  869: 22,
  874: 32,
  932: 27,
  936: 18,
  949: 28,
  950: 17,
  1200: 48,
  1201: 49,
  1250: 16,
  1251: 14,
  1252: 44,
  1253: 23,
  1254: 36,
  1255: 26,
  1256: 2,
  1257: 6,
  1258: 45,
  10007: 11,
  12E3: 50,
  12001: 51,
  20866: 9,
  21866: 10,
  28591: 37,
  28592: 19,
  28593: 33,
  28594: 3,
  28595: 8,
  28596: 0,
  28597: 20,
  28598: 24,
  28599: 34,
  28603: 4,
  28604: 7,
  28605: 38,
  51949: 29,
  65E3: 47,
  65001: 46
};
ew.AscCommon.kUd = -1;
ew.AscCommon.JOb = 47;
ew.AscCommon.KOb = 46;
ew.AscCommon.z_e = 48;
ew.AscCommon.A_e = 49;
ew.AscCommon.B_e = 50;
ew.AscCommon.C_e = 51;
ew.AscCommon.D_e = 8192;
ew.AscCommon.Qpa = 1;
ew.AscCommon.O5 = 2;
ew.AscCommon.hjb = 3;
ew.AscCommon.XAc = 4;
ew.AscCommon.YAc = 5;
ew.AscCommon.A3 = 0;
ew.AscCommon.UK = 1;
ew.AscCommon.FU = 2;
ew.AscCommon.pOa = 3;
ew.AscCommon.dT = 4;
ew.AscCommon.Dta = 10;
ew.AscCommon.Uka = 11;
ew.AscCommon.jka = 12;
ew.AscCommon.Cld = 13;
ew.AscCommon.Vka = 20;
ew.AscCommon.Cmc = 21;
ew.AscCommon.hgb = 23;
ew.AscCommon.Ald = 24;
ew.AscCommon.GId = 25;
ew.AscCommon.YPa = 26;
ew.AscCommon.ggb = 30;
ew.AscCommon.sna = 40;
ew.AscCommon.twa = 41;
ew.AscCommon.SFa = 51;
ew.AscCommon.cPc = 60;
ew.AscCommon.Axf = 61;
ew.AscCommon.c1e = 62;
ew.AscCommon.vUd = 64;
ew.AscCommon.f1e = 65;
ew.AscCommon.d1e = 66;
ew.AscCommon.uUd = 67;
ew.AscCommon.lJc = 68;
ew.AscCommon.bPc = 70;
ew.AscCommon.a1e = 71;
ew.AscCommon.$0e = 72;
ew.AscCommon.zxf = 73;
ew.AscCommon.b1e = 74;
ew.AscCommon.e1e = 75;
ew.AscCommon.Bld = 76;
ew.AscCommon.FId = 1;
ew.AscCommon.Z0e = 2;
ew.AscCommon.tUd = 3;
ew.AscCommon.eBa = 4;
ew.AscCommon.kia = 5;
ew.AscCommon.sUd = 6;
ew.AscCommon.Y0e = 7;
ew.AscCommon.h7 = 1;
ew.AscCommon.i7 = 2;
ew.AscCommon.nag = 1;
ew.AscCommon.Fke = 16;
ew.AscCommon.Gke = 32;
ew.AscCommon.oag = 256;
ew.AscCommon.Utf = 2;
ew.AscCommon.Vtf = 4;
ew.AscCommon.H3a = ID;
ew.AscCommon.Cff = '_offline_';
ew.AscCommon.h1e = '_chart_';
ew.AscCommon.align_Right = ew.AscCommon.nF = 0;
ew.AscCommon.align_Left = ew.AscCommon.Pq = 1;
ew.AscCommon.align_Center = ew.AscCommon.ey = 2;
ew.AscCommon.align_Justify = ew.AscCommon.wO = 3;
ew.AscCommon.c_oAscFormatPainterState = YC;
YC.kOff = YC.ska;
YC.kOn = YC.vWb;
YC.kMultiple = YC.K_d;
QD = ew.Asc.c_oSpecialPasteProps = ew.Asc.ME = JD;
QD.paste = QD.yRc;
QD.pasteOnlyFormula = QD.VMd;
QD.formulaNumberFormat = QD.yJd;
QD.formulaAllFormatting = QD.sVd;
QD.formulaWithoutBorders = QD.zJd;
QD.formulaColumnWidth = QD.xJd;
QD.mergeConditionalFormating = QD.Lef;
QD.pasteOnlyValues = QD.WMd;
QD.valueNumberFormat = QD.tOd;
QD.valueAllFormating = QD.sOd;
QD.pasteOnlyFormating = QD.UMd;
QD.transpose = QD.s2a;
QD.link = QD.link;
QD.picture = QD.QZa;
QD.linkedPicture = QD.Mdf;
QD.sourceformatting = QD.AGa;
QD.destinationFormatting = QD.CWa;
QD.mergeFormatting = QD.MBc;
QD.uniteList = QD.Hqf;
QD.doNotUniteList = QD.c5e;
QD.keepTextOnly = QD.j2;
QD.insertAsNestedTable = QD.eAc;
QD.overwriteCells = QD.mdb;
QD.useTextImport = QD.mDd;
QD = ew.Asc.c_oAscNumberingFormat = ew.Asc.Ag = KD;
QD.None = KD.Af;
QD.Bullet = KD.Mf;
QD.Decimal = KD.sD;
QD.LowerRoman = KD.kV;
QD.UpperRoman = KD.y5;
QD.LowerLetter = KD.jV;
QD.UpperLetter = KD.x5;
QD.DecimalZero = KD.tPa;
QD = ew.Asc.c_oAscNumberingSuff = ew.Asc.GY = LD;
QD.Tab = LD.hW;
QD.Space = LD.nc;
QD.None = LD.Af;
QD = ew.Asc.c_oAscNumberingLvlTextType = ew.Asc.krb = MD;
QD.Text = MD.Text;
QD.Num = MD.Dh;
QD = ew.Asc.c_oAscSdtAppearance = ew.Asc.K9a = ND;
QD.Frame = ND.ONa;
QD.Hidden = ND.Rz;
QD = ew.Asc.c_oAscObjectsAlignType = ew.Asc.FKa = OD;
QD.Selected = OD.d3;
QD.Slide = OD.Slide;
QD.Page = OD.vd;
QD.Margin = OD.xw;
QD = ew.Asc.c_oAscItemType = ew.Asc.FH = {
  Ub: 0,
  YLc: 1,
  wl: 2,
  lMc: 3,
  Cs: 4,
  xr: 5,
  Gnb: 6,
  b1a: 7,
  QNc: 8,
  CUa: 9,
  s0b: 10,
  VNc: 11,
  xb: 12,
  kza: 13,
  B4: 14
};
QD.Data = QD.xb;
QD.Default = QD.Ub;
QD.Sum = QD.CUa;
QD.CountA = QD.lMc;
QD.Avg = QD.YLc;
QD.Max = QD.Cs;
QD.Min = QD.xr;
QD.Product = QD.Gnb;
QD.Count = QD.wl;
QD.StdDev = QD.b1a;
QD.StdDevP = QD.QNc;
QD.Var = QD.s0b;
QD.VarP = QD.VNc;
QD.Grand = QD.kza;
QD.Blank = QD.B4;
QD = ew.Asc.c_oAscRevisionsMove = ew.Asc.hQ = PD;
QD.NoMove = PD.B6;
QD.MoveTo = PD.Ofa;
QD.MoveFrom = PD.Qca;
'use strict';
(function (f, e) {
  function Pa(f) {
    this.userName = this.aAc = this.id = null;
    this.state = e;
    this.tcf = -1;
    this.color = null;
    this.view = !1;
    this.kOe(f);
    return this;
  }

  Pa.prototype.kOe = function (e) {
    e && (this.id = e.id, this.aAc = e.idOriginal, this.userName = e.username, this.tcf = e.indexUser, this.color = f.AscCommon.MAb(this.aAc, this.userName, !1, !0), this.view = e.view);
  };
  Pa.prototype.zD = function () {
    return this.id;
  };
  Pa.prototype.wSe = function () {
    return this.aAc;
  };
  Pa.prototype.Hxa = function () {
    return this.userName;
  };
  Pa.prototype.RNb = function () {
    return this.S5e;
  };
  Pa.prototype.SNb = function () {
    return this.xKc;
  };
  Pa.prototype.UUe = function () {
    return this.state;
  };
  Pa.prototype.kW = function () {
    return '#' + ('000000' + this.color.toString(16)).substr(-6);
  };
  Pa.prototype.Cid = function () {
    return this.view;
  };
  Pa.prototype.uv = function (e) {
    this.id = e;
  };
  Pa.prototype.KEc = function (e) {
    this.userName = e;
  };
  Pa.prototype.lof = function (e) {
    this.S5e = e;
  };
  Pa.prototype.Bof = function (e) {
    this.xKc = e;
  };
  Pa.prototype.hBd = function (e) {
    this.state = e;
  };
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.NNb = Pa;
  var ab = Pa.prototype;
  ab.asc_getId =
    ab.zD;
  ab.asc_getIdOriginal = ab.wSe;
  ab.asc_getUserName = ab.Hxa;
  ab.asc_getState = ab.UUe;
  ab.asc_getColor = ab.kW;
  ab.asc_getView = ab.Cid;
  f.AscCommon.uGb = { hte: -1, Af: 0, bCe: 1, RQa: 2, hWc: 3, gWc: 4, uKb: 10, F7b: 11 };
  f.AscCommon.$z = { zm: 0, uO: 1, RA: 2 };
  f.AscCommon.Ykd = { Szd: 4001, Uzd: 4002, Tzd: 4003, POe: 4004, pdf: 4005, odf: 4006, tnd: 4007, Nqf: 4008 };
  f.AscCommon.E_e = { hTa: 0, b9f: 1, xag: 2, dcg: 3, Sje: 4, ccg: 5, jhc: 6, $bg: 7 };
  f.AscCommon.Tkd = { ux: 0, ZE: 1, Zbg: 2 };
})(window);
'use strict';
(function (f, e) {
  function Pa(e) {
    this.cl = new bb;
    this.WI = !1;
    e && (this.Boa = e.Boa, this.UMa = e.UMa, this.PCa = e.PCa, this.SCa = e.SCa, this.UEa = e.UEa, this.QCa = e.QCa, this.TCa = e.TCa, this.LCa = e.LCa, this.lja = e.lja, this.NCa = e.NCa, this.Gua = e.Gua, this.mja = e.mja, this.Qqa = e.Qqa, this.R0 = e.R0, this.WCa = e.WCa, this.Fua = e.Fua, this.Coa = e.Coa, this.UCa = e.UCa, this.VCa = e.VCa, this.Rqa = e.Rqa, this.Hua = e.Hua, this.EZa = e.EZa, this.Doa = e.Doa, this.RCa = e.RCa, this.SMa = e.SMa, this.MCa = e.MCa, this.OCa = e.OCa, this.TMa = e.TMa);
  }

  function ab(e, f) {
    this.ZJe =
      e ? e.slice() : null;
    this.PJa = f;
  }

  function bb(f) {
    f && (this.Boa = f.Boa, this.UMa = f.UMa, this.PCa = f.PCa, this.SCa = f.SCa, this.UEa = f.UEa, this.QCa = f.QCa, this.TCa = f.TCa, this.LCa = f.LCa, this.lja = f.lja, this.NCa = f.NCa, this.Gua = f.Gua, this.mja = f.mja, this.Qqa = f.Qqa, this.R0 = f.R0, this.WCa = f.WCa, this.UCa = f.UCa, this.VCa = f.VCa, this.Rqa = f.Rqa, this.Fua = f.Fua, this.Coa = f.Coa, this.Doa = f.Doa, this.RCa = f.RCa, this.SMa = f.SMa, this.MCa = f.MCa, this.OCa = f.OCa, this.TMa = f.TMa);
    this.BH = Ha.Af;
    this.gta = {};
    this.W8a;
    this.O8a = 0;
    this.Btd = !1;
    this.AH =
      {};
    this.eqb = [];
    this.sNb = [];
    this.VJa = {};
    this.T8a = {};
    this.LAa = [];
    this.vgd = this.qNb = this.dhd = this.ngd = this.Oyb = this.Toa = this.tNa = null;
    this.bqb = -1;
    this.mCa = this.$bb = !1;
    this.Vud = 2E4;
    this.deleteIndex = this.qWa = 0;
    this.$jc = null;
    this.Xtd = this.LAc = -1;
    this.yrb = 0;
    this.boc = null;
    this.YOb = this.JY = !1;
    this.oVa = '';
    this.k_a = null;
    this.ulc = 0;
    this.Uud = 50;
    this.Zyd = 2E3;
    this.Znc = 1E4;
    this.y5e = 6E4;
    this.a9a = this.phd = this.Ifd = this.Xpb = null;
    this.aKa = 'Anonymous';
    this.DXb = [];
    this.gpa = this.ryb = null;
    this.znd = -1;
    this.pNb = this.lVa = this.UJa =
      !1;
    this.Jfd = 0;
    this.End = this.uWb = this.tWb = this.lang = this.permissions = this.mode = e;
    this.djc = this.ugd = !1;
    this.rNb = [];
    this.$Mb = [];
    this.aNb = [];
  }

  var nb = f.Asc, Da = f.AscCommon, Ha = Da.uGb, Eb = Da.$z, zb = Da.Ykd, Va = Da.E_e, gb = Da.Tkd;
  Pa.prototype.se = function (e, f, Da, Ha, Va, Pa, Ra) {
    if (this.cl && this.cl.CAc()) {
      var Ia = this;
      this.cl.Boa = function (e, f) {
        Ia.d0e(e, f);
      };
      this.cl.UMa = function (e) {
        Ia.u0e(e);
      };
      this.cl.PCa = function (e, f) {
        Ia.s0e(e, f);
      };
      this.cl.SCa = function (e) {
        Ia.x0e(e);
      };
      this.cl.UEa = function (e) {
        Ia.f0e(e);
      };
      this.cl.QCa = function (e) {
        Ia.t0e(e);
      };
      this.cl.TCa = function (e) {
        Ia.y0e(e);
      };
      this.cl.LCa = function (e) {
        Ia.i0e(e);
      };
      this.cl.NCa = function (e) {
        Ia.m0e(e);
      };
      this.cl.lja = function (e) {
        Ia.l0e(e);
      };
      this.cl.Gua = function (e) {
        Ia.kld(e);
      };
      this.cl.mja = function (e, f) {
        Ia.q0e(e, f);
      };
      this.cl.Qqa = function () {
        Ia.r0e();
      };
      this.cl.R0 = function (e, f) {
        Ia.umc(e, f);
      };
      this.cl.WCa = function (e) {
        Ia.B0e(e);
      };
      this.cl.Fua = function () {
        Ia.k0e();
      };
      this.cl.Coa = function (e) {
        Ia.e0e(e);
      };
      this.cl.UCa = function (e) {
        Ia.lld(e);
      };
      this.cl.VCa = function (e) {
        Ia.mld(e);
      };
      this.cl.Rqa = function (e, f, Da) {
        Ia.w0e(e, f, Da);
      };
      this.cl.Hua = function (e, f) {
        Ia.A0e(e, f);
      };
      this.cl.EZa = function (e) {
        Ia.h0e(e);
      };
      this.cl.Doa = function () {
        Ia.nld();
      };
      this.cl.RCa = function (e) {
        Ia.v0e(e);
      };
      this.cl.SMa = function (e) {
        Ia.g0e(e);
      };
      this.cl.MCa = function () {
        Ia.j0e();
      };
      this.cl.OCa = function (e) {
        Ia.o0e(e);
      };
      this.cl.TMa = function (e) {
        Ia.p0e(e);
      };
      this.cl.se(e, f, Da, Ha, Va, Pa, Ra);
      this.WI = !0;
    } else this.MCa(), this.OCa(null);
  };
  Pa.prototype.Koc = function () {
    return this.cl ? this.cl.Koc() : e;
  };
  Pa.prototype.XYb = function (e) {
    if (this.cl) return this.cl.XYb(e);
  };
  Pa.prototype.cOb = function (e,
                               f, Da) {
    this.cl && this.WI ? this.cl.cOb(e, f, Da) : (this.mld(''), this.lld('123'), this.Fua());
  };
  Pa.prototype.y_a = function (e) {
    this.cl && this.cl.y_a(e);
  };
  Pa.prototype.oXa = function () {
    return this.cl ? this.cl.oXa() : 0;
  };
  Pa.prototype.FZa = function (e) {
    this.cl && this.WI && this.cl.FZa(e);
  };
  Pa.prototype.Roc = function () {
    this.cl && this.WI && this.cl.Roc();
  };
  Pa.prototype.lEc = function (e) {
    this.cl && this.WI && this.cl.lEc(e);
  };
  Pa.prototype.J2b = function (e) {
    this.cl && this.WI && this.cl.J2b(e);
  };
  Pa.prototype.wDa = function (e) {
    this.cl && this.WI && this.cl.wDa(e);
  };
  Pa.prototype.bOb = function (e, Da) {
    if (this.cl && this.WI) this.cl.bOb(e, Da); else {
      var Ha = this;
      f.setTimeout(function () {
        if (Da) {
          var f = e ? e.length : 0;
          if (0 < f) {
            Da({ lock: e[0] });
            for (var Za = 0; Za < f; ++Za) Ha.kld({ state: 2, block: e[Za] });
          }
        }
      }, 1);
    }
  };
  Pa.prototype.t3a = function (e) {
    this.cl && this.WI ? this.cl.t3a(e) : f.setTimeout(function () {
      e && e({ saveLock: !1 });
    }, 100);
  };
  Pa.prototype.VZb = function () {
    if (this.cl && this.WI) this.cl.VZb(); else {
      var e = this;
      f.setTimeout(function () {
        e.nld();
      }, 100);
    }
  };
  Pa.prototype.g4a = function (e, f, Da, Ha, Va) {
    this.cl &&
    this.WI && (this.cl.JY = Ha, this.cl.YOb = Va, this.cl.g4a(e, null, f, Da));
  };
  Pa.prototype.Teb = function (e, f, Da, Ha) {
    this.cl && this.WI && (this.cl.JY = f, this.cl.YOb = Ha, this.cl.Teb(e, Da));
  };
  Pa.prototype.gpc = function () {
    this.cl && this.WI && this.cl.gpc();
  };
  Pa.prototype.zOa = function () {
    return this.cl && this.WI ? this.cl.zOa() : null;
  };
  Pa.prototype.Gpc = function () {
    return this.cl && this.WI ? this.cl.Gpc() : null;
  };
  Pa.prototype.WQb = function () {
    return this.cl && this.WI ? this.cl.WQb() : null;
  };
  Pa.prototype.UBa = function () {
    return this.cl && this.WI ? this.cl.UBa() :
      null;
  };
  Pa.prototype.RDc = function (e) {
    this.cl && this.WI && this.cl.RDc(e);
  };
  Pa.prototype.disconnect = function (e, f) {
    this.cl && this.WI && this.cl.disconnect(e, f);
  };
  Pa.prototype.doc = function (e) {
    this.cl && this.WI && this.cl.doc(e);
  };
  Pa.prototype.oGc = function (e) {
    this.cl && this.WI && this.cl.oGc(e);
  };
  Pa.prototype.SWa = function () {
    return this.cl && this.WI ? this.cl.SWa() : !1;
  };
  Pa.prototype.d0e = function (e, f) {
    this.Boa && this.Boa(e, f);
  };
  Pa.prototype.u0e = function (e) {
    this.UMa && this.UMa(e);
  };
  Pa.prototype.s0e = function (e, f) {
    this.PCa && this.PCa(e,
      f);
  };
  Pa.prototype.x0e = function (e) {
    this.SCa && this.SCa(e);
  };
  Pa.prototype.f0e = function (e) {
    this.UEa && this.UEa(e);
  };
  Pa.prototype.t0e = function (e) {
    this.QCa && this.QCa(e);
  };
  Pa.prototype.y0e = function (e) {
    this.TCa && this.TCa(e);
  };
  Pa.prototype.i0e = function (e) {
    this.LCa && this.LCa(e);
  };
  Pa.prototype.l0e = function (e) {
    this.lja && this.lja(e);
  };
  Pa.prototype.m0e = function (e) {
    this.NCa && this.NCa(e);
  };
  Pa.prototype.kld = function (e) {
    this.Gua && this.Gua(e);
  };
  Pa.prototype.q0e = function (e, f) {
    this.mja && this.mja(e, f);
  };
  Pa.prototype.r0e = function () {
    this.Qqa &&
    this.Qqa();
  };
  Pa.prototype.umc = function (e, f) {
    this.R0 && this.R0(e, f);
  };
  Pa.prototype.B0e = function (e) {
    this.WCa && this.WCa(e);
  };
  Pa.prototype.k0e = function () {
    this.Fua && this.Fua();
  };
  Pa.prototype.e0e = function (e) {
    this.Coa && this.Coa(e);
  };
  Pa.prototype.lld = function (e) {
    this.UCa && this.UCa(e);
  };
  Pa.prototype.mld = function (e) {
    this.VCa && this.VCa(e);
  };
  Pa.prototype.w0e = function (e, f, Da) {
    this.Rqa && this.Rqa(e, f, Da);
  };
  Pa.prototype.A0e = function (e, f) {
    this.Hua && this.Hua(e, f);
  };
  Pa.prototype.h0e = function (e) {
    this.EZa && this.EZa(e);
  };
  Pa.prototype.nld =
    function () {
      this.Doa && this.Doa();
    };
  Pa.prototype.v0e = function (e) {
    this.RCa && this.RCa(e);
  };
  Pa.prototype.g0e = function (e) {
    this.SMa && this.SMa(e);
  };
  Pa.prototype.j0e = function () {
    this.MCa && this.MCa();
  };
  Pa.prototype.o0e = function (e) {
    this.OCa && this.OCa(e);
  };
  Pa.prototype.p0e = function (e) {
    this.TMa && this.TMa(e);
  };
  bb.prototype.CAc = function () {
    return '' != this.oVa;
  };
  bb.prototype.y_a = function (e) {
    this.oVa = e;
  };
  bb.prototype.oXa = function () {
    return this.BH;
  };
  bb.prototype.fWa = function () {
    return Ha.RQa === this.BH || Ha.uKb === this.BH || Ha.F7b ===
      this.BH;
  };
  bb.prototype.Gpc = function () {
    return this.bqb;
  };
  bb.prototype.WQb = function () {
    return this.pNb;
  };
  bb.prototype.UBa = function () {
    return this.uWb || this.tWb;
  };
  bb.prototype.zOa = function () {
    return this.aKa;
  };
  bb.prototype.yjc = function () {
    for (var e, f = 0, Da = this.rNb.length; f < Da; ++f) e = this.rNb[f], this.bOb(e.ZJe, e.PJa);
    this.rNb = [];
  };
  bb.prototype.bOb = function (e, Da) {
    if (Ha.uKb === this.BH || Ha.F7b === this.BH) this.rNb.push(new ab(e, Da)); else {
      for (var Za = this, Va = 0, Pa = e ? e.length : 0, gb = !1, Ra = null; Va < Pa; ++Va) if (Ra = this.UJa || this.lVa ?
        e[Va].guid : e[Va], this.AH[Ra] && 0 !== this.AH[Ra].state) {
        gb = !0;
        break;
      }
      0 === Pa && (gb = !0);
      Ra = this.UJa || this.lVa ? e[0].guid : e[0];
      gb ? f.setTimeout(function () {
        Da && Da({ error: Ra + '-lock' });
      }, 100) : this.T8a.hasOwnProperty(Ra) || (this.AH[Ra] = { state: 1 }, Da && (this.VJa[Ra] = Da, this.T8a[Ra] = f.setTimeout(function () {
        Za.VJa.hasOwnProperty(Ra) && (Za.VJa[Ra]({ error: 'Timed out' }), delete Za.VJa[Ra], delete Za.T8a[Ra]);
      }, this.Znc)), this.AU({ type: 'getLock', block: e }));
    }
  };
  bb.prototype.t3a = function (e) {
    if (!this.LAa[this.LAa.length - 1]) if (null !==
    this.tNa && clearTimeout(this.tNa), Ha.RQa !== this.BH) this.tNa = f.setTimeout(function () {
      e && e({ error: 'No connection' });
    }, 100); else {
      if (e) {
        var Da = this, Za = this.LAa.length;
        this.LAa[Za] = e;
        this.tNa = f.setTimeout(function () {
          Da.tNa = null;
          var e = Da.LAa[Za];
          e && (Da.LAa[Za] = null, e({ error: 'Timed out' }), Da.BH = Ha.RQa, Da.yjc());
        }, this.Znc);
      }
      this.BH = Ha.F7b;
      this.AU({ type: 'isSaveLock' });
    }
  };
  bb.prototype.VZb = function () {
    var e = this;
    this.Oyb = f.setTimeout(function () {
      e.Oyb = null;
      e.VZb();
    }, this.Znc);
    this.AU({ type: 'unSaveLock' });
  };
  bb.prototype.RDc =
    function (e) {
      this.AH[e] && 2 === this.AH[e].state && (this.AH[e] = { state: 0 });
    };
  bb.prototype.Wgd = function (f) {
    this.g4a(this.$jc, this.qWa, e, e, f);
  };
  bb.prototype.g4a = function (e, Da, Va, Pa, gb) {
    null === Da ? (this.deleteIndex = Va, null != this.deleteIndex && -1 !== this.deleteIndex && (this.deleteIndex += this.yrb), this.qWa = 0, this.$jc = e, this.boc = Pa) : this.qWa = Da;
    Da = this.qWa * this.Vud;
    Va = Math.min(this.Vud * (this.qWa + 1), e.length);
    if (Va === e.length) for (var Za in this.AH) this.AH.hasOwnProperty(Za) && 2 === this.AH[Za].state && delete this.AH[Za];
    var Ra = this;
    this.Toa = f.setTimeout(function () {
      Ra.Toa = null;
      Ra.Wgd(1);
    }, this.y5e);
    this.BH = Ha.uKb;
    this.AU({
      type: 'saveChanges',
      changes: JSON.stringify(e.slice(Da, Va)),
      startSaveChanges: 0 === Da,
      endSaveChanges: Va === e.length,
      isCoAuthoring: this.$bb,
      isExcel: this.UJa,
      deleteIndex: this.deleteIndex,
      excelAdditionalInfo: this.boc ? JSON.stringify(this.boc) : null,
      unlock: this.JY,
      releaseLocks: this.YOb,
      reSave: gb
    });
  };
  bb.prototype.Teb = function (e, f) {
    this.deleteIndex = f;
    null != this.deleteIndex && -1 !== this.deleteIndex && (this.deleteIndex +=
      this.yrb);
    this.AU({
      type: 'unLockDocument',
      isSave: e,
      unlock: this.JY,
      deleteIndex: this.deleteIndex,
      releaseLocks: this.YOb
    });
  };
  bb.prototype.gpc = function () {
    this.Boa && this.Boa(this.gta, this.aKa);
  };
  bb.prototype.disconnect = function (e, f) {
    this.mCa = !0;
    e ? this.gpa.close(e, f) : (this.AU({ type: 'close' }), this.BH = Ha.hWc);
  };
  bb.prototype.doc = function (e) {
    this.AU({ type: 'extendSession', idletime: e });
  };
  bb.prototype.oGc = function (e) {
    this.AU({ type: 'versionHistory', cmd: e });
  };
  bb.prototype.SWa = function () {
    var e = !1, f = Math.max(this.LAc, this.Xtd);
    this.qNb < f && (this.qNb = f, this.AU({ type: 'forceSaveStart' }), e = !0);
    return e;
  };
  bb.prototype.FZa = function (e) {
    this.AU({ type: 'openDocument', message: e });
  };
  bb.prototype.Roc = function () {
    this.AU({ type: 'getMessages' });
  };
  bb.prototype.lEc = function (e) {
    'string' === typeof e && this.AU({ type: 'message', message: e });
  };
  bb.prototype.J2b = function (e) {
    'string' === typeof e && this.AU({ type: 'cursor', cursor: e });
  };
  bb.prototype.wDa = function (e) {
    'string' === typeof e && this.AU({ type: 'changesError', stack: e });
  };
  bb.prototype.efd = function () {
    for (var e =
      0; e < this.sNb.length; ++e) this.sNb[e]();
    this.sNb = [];
  };
  bb.prototype.fOe = function () {
    for (var e = 0; e < this.eqb.length; e++) this.gOe(this.eqb[e]);
    this.eqb = [];
  };
  bb.prototype.AU = function (e, f) {
    !f && e && 'saveChanges' == e.type && Da.AE && Da.AE.K5() ? Da.AE.GQa(this, e, Da.Jla.C5a) : null !== e && 'object' === typeof e && (0 < this.BH ? this.gpa.send(JSON.stringify(e)) : this.eqb.push(JSON.stringify(e)));
  };
  bb.prototype.gOe = function (e) {
    null !== e && 'string' === typeof e && (0 < this.BH ? this.gpa.send(e) : this.eqb.push(e));
  };
  bb.prototype.ijc = function (e, f) {
    this.fWa() &&
    e.messages && this.PCa && this.PCa(e.messages, f);
  };
  bb.prototype.kNe = function (e) {
    this.SCa && this.SCa(e.buildVersion, e.buildNumber);
  };
  bb.prototype.XMe = function (e) {
    this.fWa() && e.messages && this.UEa && this.UEa(e.messages);
  };
  bb.prototype.dNe = function (e) {
    e.messages && this.QCa && this.QCa(e.messages);
  };
  bb.prototype.lNe = function (e) {
    this.fWa() && e.messages && this.TCa && this.TCa(e.messages);
  };
  bb.prototype.YMe = function () {
    this.LCa && this.LCa();
  };
  bb.prototype.aNe = function () {
    this.NCa && this.NCa();
  };
  bb.prototype.Jgd = function (f) {
    this.tWb =
      e;
    f && (this.uWb = f);
  };
  bb.prototype.$Me = function (e) {
    var f = e.code;
    f === Va.hTa ? (this.qNb = e.time, this.lja({ type: gb.ZE, start: !0 })) : f === Va.Sje ? this.lja({
      type: gb.ZE,
      Ymf: !0
    }) : this.WCa(nb.rl.Fg.cT);
  };
  bb.prototype.ZMe = function (e) {
    var f = e.type;
    gb.ZE === f ? this.qNb == e.time && this.lja({ type: f, success: e.success }) : e.start ? (this.lja({
      type: f,
      start: !0
    }), this.vgd = e.time) : this.vgd == e.time && this.lja({ type: f, success: e.success });
  };
  bb.prototype.hjc = function (e) {
    if (this.fWa() && e.locks) for (var f in e.locks) if (e.locks.hasOwnProperty(f)) {
      var Da =
        e.locks[f], Ha = this.UJa || this.lVa ? Da.block.guid : f, Va = this.UJa || this.lVa ? Da.block : f;
      if (null !== Da) {
        var Za = !0;
        this.AH[Ha] && 1 !== this.AH[Ha].state && (Za = !(this.AH[Ha].state === (Da.user === this.aKa ? 2 : 3) && this.AH[Ha].user === Da.user && this.AH[Ha].time === Da.time && this.AH[Ha].block === Ha));
        Za && (this.AH[Ha] = {
          state: Da.user === this.aKa ? 2 : 3,
          user: Da.user,
          time: Da.time,
          block: Ha,
          blockValue: Va
        });
        if (this.VJa.hasOwnProperty(Ha)) {
          if (Da.user === this.aKa) this.VJa[Ha]({ lock: this.AH[Ha] }); else this.VJa[Ha]({
            error: 'Already locked by ' +
              Da.user
          });
          this.T8a.hasOwnProperty(Ha) && (clearTimeout(this.T8a[Ha]), delete this.T8a[Ha]);
          delete this.VJa[Ha];
        }
        this.Gua && Za && this.Gua(this.AH[Ha]);
      }
    }
  };
  bb.prototype.eNe = function (e) {
    if (this.fWa() && e.locks) {
      var f = !1, Da;
      for (Da in e.locks) if (e.locks.hasOwnProperty(Da)) {
        var Ha = e.locks[Da], Va = this.UJa || this.lVa ? Ha.block.guid : Ha.block;
        null !== Ha && (this.AH[Va] = {
          state: 0,
          user: Ha.user,
          time: Ha.time,
          changes: Ha.changes,
          block: Ha.block
        }, this.mja && (this.mja(this.AH[Va], !1), f = !0));
      }
      f && this.Qqa && this.Qqa();
    }
  };
  bb.prototype.vLe =
    function (e) {
      this.SMa(e);
    };
  bb.prototype.A0b = function (e, f) {
    if (this.fWa()) {
      if (!f && Da.AE && Da.AE.K5()) return Da.AE.GQa(this, e, Da.Jla.ulb);
      if (e.locks) {
        f = !1;
        for (var Ha in e.locks) if (e.locks.hasOwnProperty(Ha)) {
          var Va = e.locks[Ha], Za = this.UJa || this.lVa ? Va.block.guid : Va.block;
          null !== Va && (this.AH[Za] = {
            state: 0,
            user: Va.user,
            time: Va.time,
            changes: Va.changes,
            block: Va.block
          }, this.mja && (this.mja(this.AH[Za], !0), f = !0));
        }
        f && this.Qqa && this.Qqa();
      }
      this.Gjc(e.changes, e.changesIndex, !1);
      this.RCa && this.RCa(e.excelAdditionalInfo);
    } else this.WQb() ||
    this.aNb.push(e);
  };
  bb.prototype.Mgd = function (e, f) {
    f && !1 === this.$bb && !this.Hua && this.wDa('Error: connection state changed waitAuth;this.onStartCoAuthoring:' + !!this.Hua);
    !1 === this.$bb ? (this.$bb = !0, this.Hua && this.Hua(e, f)) : f && (this.JY = !0, this.Teb(!1));
  };
  bb.prototype.Fgd = function (e) {
    !0 === this.$bb && (this.$bb = !1, this.EZa && this.EZa(e));
  };
  bb.prototype.fNe = function (e) {
    if (null != e.saveLock) {
      var f = this.LAa.length - 1, Da = this.LAa[f];
      Da && (null !== this.tNa && (clearTimeout(this.tNa), this.tNa = null), this.LAa[f] = null, Da(e));
    }
    if (null ==
      e.saveLock || e.error || e.saveLock) this.BH = Ha.RQa, this.yjc();
  };
  bb.prototype.qNe = function (e) {
    null !== this.Toa && (clearTimeout(this.Toa), this.Toa = null);
    null !== this.Oyb && (clearTimeout(this.Oyb), this.Oyb = null);
    this.BH = Ha.RQa;
    this.yjc();
    -1 !== e.index && (this.yrb = e.index);
    -1 !== e.time && (this.Xtd = e.time);
    this.Doa && this.Doa();
  };
  bb.prototype.Gjc = function (e, f, Da) {
    if (this.Rqa && (this.yrb = f, e)) for (f = 0; f < e.length; ++f) {
      var Ha = e[f], Va = Ha.change;
      Va && (Ha.user !== this.aKa && (this.LAc = Ha.time), this.Rqa(JSON.parse(Va), Ha.useridoriginal,
        Da));
    }
  };
  bb.prototype.mNe = function (e) {
    this.UCa && this.UCa(e);
  };
  bb.prototype.pNe = function (e) {
    this.VCa && this.VCa(e);
  };
  bb.prototype.gNe = function (e) {
    null !== this.Toa && (clearTimeout(this.Toa), this.Toa = null);
    -1 !== e.changesIndex && (this.yrb = e.changesIndex);
    this.g4a(this.$jc, this.qWa + 1);
  };
  bb.prototype.Igd = function (e, f) {
    var Ha = {}, Va = 0, Za = 0, Pa, Ra = [];
    if (e) for (Pa = 0; Pa < e.length; ++Pa) {
      var Ia = new Da.NNb(e[Pa]);
      Ha[Ia.zD()] = Ia;
      Ia.Cid() || ++Va;
      ++Za;
    }
    if (f) {
      for (Pa in Ha) this.gta[Pa] || (Ia = Ha[Pa], Ia.hBd(!0), Ra.push(Ia));
      for (Pa in this.gta) Ha[Pa] ||
      (Ia = this.gta[Pa], Ia.hBd(!1), Ra.push(Ia));
    }
    this.gta = Ha;
    this.O8a = Va;
    return Ra;
  };
  bb.prototype.Cgd = function (e) {
    this.gta = {};
    this.O8a = 0;
    e && (this.Igd(e), this.Boa && this.Boa(this.gta, this.aKa), 1 < this.O8a ? this.Mgd(!0) : this.Fgd(!0));
  };
  bb.prototype.Dgd = function (e) {
    var f = this;
    if (this.fWa()) {
      var Da = e.waitAuth;
      if (Da && (!this.Coa || this.W8a && !(this.W8a <= e.participantsTimestamp))) {
        var Ha = 'Error: connection state changed waitAuth;onConnectionStateChanged:' + !!this.Coa + ';this._participantsTimestamp:' + this.W8a + ';data.participantsTimestamp:' +
          e.participantsTimestamp;
        this.wDa(Ha);
      }
      if (this.Coa && (!this.W8a || this.W8a <= e.participantsTimestamp)) {
        this.W8a = e.participantsTimestamp;
        var Va = this.Igd(e.participants, !0);
        !Da || 0 < Va.length && 1 < this.O8a || (Ha = 'Error: connection state changed waitAuth;usersStateChanged:' + JSON.stringify(Va) + ';this._countEditUsers:' + this.O8a, this.wDa(Ha));
        if (0 < Va.length) for (1 < this.O8a ? this.Mgd(!1, Da) : this.Fgd(!1), this.UMa(this.gta), Da = 0; Da < Va.length; ++Da) this.Coa(Va[Da]);
      }
    } else this.sNb.push(function () {
      f.Dgd(e);
    });
  };
  bb.prototype.Ggd =
    function (e) {
      this.TMa(e.licenseType);
    };
  bb.prototype.Egd = function (e) {
    this.disconnect();
    this.R0(e ? e.description : '', this.Wfd(e && e.code));
  };
  bb.prototype.sNe = function () {
    this.WCa(nb.rl.Fg.u0b);
  };
  bb.prototype.cNe = function (e) {
    this.Btd || (this.Btd = !0, this.OCa(e.license));
  };
  bb.prototype.TMe = function (e) {
    var Da = this;
    this.Jgd(e.jwt);
    if (!0 === this.pNb) {
      if (this.BH = Ha.RQa, !this.mCa && (this.kNe(e), this.Ggd(e), this.Cgd(e.participants), this.ijc(e, !0), this.hjc(e), this.efd(), this.djc)) {
        this.djc = !1;
        var Va = function (e) {
          !1 === e.saveLock ?
            Da.Wgd(2) : setTimeout(function () {
              Da.t3a(Va);
            }, 1E3);
        };
        this.t3a(Va);
      }
    } else if (1 === e.result) {
      this.pNb = !0;
      this.BH = Ha.RQa;
      this.ngd = e.sessionId;
      this.bqb = e.indexUser;
      this.aKa = this.a9a.zD() + this.bqb;
      this.dhd = e.sessionTimeConnect;
      e.settings && e.settings.reconnection && (this.Uud = e.settings.reconnection.attempts, this.Zyd = e.settings.reconnection.delay);
      this.Ggd(e);
      this.Cgd(e.participants);
      this.pNe(e.g_cAscSpellCheckUrl);
      this.mNe(this.bqb);
      this.ijc(e, !1);
      this.hjc(e);
      e.hasForgotten && this.aNe();
      if (f.AscApplyChanges &&
        f.AscChanges) {
        e = f.AscChanges;
        for (var Za, Pa = 0; Pa < e.length; ++Pa) {
          Za = e[Pa];
          for (var gb = 0; gb < Za.length; ++gb) this.Rqa(Za[gb], null, !0);
        }
      }
      this.COe();
      this.Fua && this.Fua();
      this.efd();
      this.fOe();
    }
  };
  bb.prototype.UMe = function (e) {
    this.$Mb.push(e.changes);
  };
  bb.prototype.COe = function () {
    var e = 0, f;
    for (f = 0; f < this.$Mb.length; ++f) {
      var Da = this.$Mb[f];
      e += Da.length;
      this.Gjc(Da, e, !0);
    }
    this.$Mb = [];
    for (f = 0; f < this.aNb.length; ++f) {
      Da = this.aNb[f];
      var Ha = Da.changesIndex - e;
      0 < Ha && (Da = Ha >= Da.changes.length ? Da.changes : Da.changes.splice(Da.changes.length -
        Ha, Ha), e += Da.length, this.Gjc(Da, e, !0));
    }
    this.aNb = [];
  };
  bb.prototype.se = function (e, f, Da, Ha, Va, Pa, Ra) {
    this.a9a = e;
    this.Xpb = null;
    this.Ifd = Da;
    this.phd = Ha;
    this.DXb = [];
    this.ryb = null;
    this.znd = Va;
    this.UJa = Eb.uO === Va;
    this.lVa = Eb.RA === Va;
    this.pNb = !1;
    this.Jfd = Pa;
    this.mode = Ra.N9e();
    this.permissions = Ra.Q9e();
    this.lang = Ra.hab();
    this.tWb = Ra.m$e();
    this.End = Ra.Lpd();
    this.XYb(f);
    this.rgd();
  };
  bb.prototype.Koc = function () {
    return this.Xpb;
  };
  bb.prototype.XYb = function (e) {
    this.Xpb = e;
    this.ryb = Da.xod() + '../../../../doc/' + e + '/c';
  };
  bb.prototype.cOb = function (e, f, Da) {
    this.ugd = e;
    if (this.AH) {
      this.DXb = [];
      for (var Ha in this.AH) this.AH.hasOwnProperty(Ha) && (e = this.AH[Ha], 2 === e.state && this.DXb.push(e.blockValue));
      this.AH = {};
    }
    this.AU({
      type: 'auth',
      docid: this.Xpb,
      documentCallbackUrl: this.Ifd,
      token: this.phd,
      user: {
        id: this.a9a.zD(),
        username: this.a9a.Hxa(),
        firstname: this.a9a.RNb(),
        lastname: this.a9a.SNb(),
        indexUser: this.bqb
      },
      editorType: this.znd,
      lastOtherSaveTime: this.LAc,
      block: this.DXb,
      sessionId: this.ngd,
      sessionTimeConnect: this.dhd,
      sessionTimeIdle: 0 <=
      Da ? Da : 0,
      documentFormatSave: this.Jfd,
      view: this.ugd,
      isCloseCoAuthoring: this.mCa,
      openCmd: f,
      lang: this.lang,
      mode: this.mode,
      permissions: this.permissions,
      encrypted: this.End,
      jwtOpen: this.tWb,
      jwtSession: this.uWb
    });
  };
  bb.prototype.rgd = function () {
    var e = this;
    if (f.IS_NATIVE_EDITOR) {
      var Ha = this.gpa = f.SockJS;
      Ha.open();
    } else Ha = this.gpa = new (Da.upd())(this.ryb, null, { transports: ['websocket', 'xdr-polling', 'xhr-polling', 'iframe-xhr-polling', 'jsonp-polling'] }), Ha.onopen = function () {
      e.jNe();
    }, Ha.onmessage = function (f) {
      e.iNe(f.data);
    },
      Ha.onclose = function (f) {
        e.hNe(f);
      };
  };
  bb.prototype.jNe = function () {
    this.k_a && (clearTimeout(this.k_a), this.k_a = null, this.ulc = 0);
    this.BH = Ha.bCe;
    this.MCa();
  };
  bb.prototype.iNe = function (e) {
    e = JSON.parse(e);
    switch (e.type) {
      case 'auth':
        this.TMe(e);
        break;
      case 'message':
        this.ijc(e, !1);
        break;
      case 'cursor':
        this.XMe(e);
        break;
      case 'meta':
        this.dNe(e);
        break;
      case 'getLock':
        this.hjc(e);
        break;
      case 'releaseLock':
        this.eNe(e);
        break;
      case 'connectState':
        this.Dgd(e);
        break;
      case 'saveChanges':
        this.A0b(e);
        break;
      case 'authChanges':
        this.UMe(e);
        break;
      case 'saveLock':
        this.fNe(e);
        break;
      case 'unSaveLock':
        this.qNe(e);
        break;
      case 'savePartChanges':
        this.gNe(e);
        break;
      case 'drop':
        this.Egd(e);
        break;
      case 'error':
        this.Egd(e);
        break;
      case 'documentOpen':
        this.vLe(e);
        break;
      case 'warning':
        this.sNe();
        break;
      case 'license':
        this.cNe(e);
        break;
      case 'session':
        this.lNe(e);
        break;
      case 'refreshToken':
        this.Jgd(e.messages);
        break;
      case 'expiredToken':
        this.YMe();
        break;
      case 'forceSaveStart':
        this.$Me(e.messages);
        break;
      case 'forceSave':
        this.ZMe(e.messages);
    }
  };
  bb.prototype.hNe =
    function (e) {
      Ha.uKb === this.BH && (this.djc = !0, null !== this.Toa && (clearTimeout(this.Toa), this.Toa = null));
      this.BH = Ha.hte;
      var f = zb.Szd <= e.code && e.code <= zb.tnd || this.ulc >= this.Uud, Da = null;
      f && (this.BH = Ha.gWc, Da = this.Wfd(e.code));
      this.R0 && this.R0(e.reason, Da);
      f || this.AOe();
    };
  bb.prototype.WNe = function () {
    delete this.gpa;
    this.rgd();
  };
  bb.prototype.AOe = function () {
    var e = this;
    this.k_a && (clearTimeout(this.k_a), e.k_a = null);
    ++this.ulc;
    this.k_a = setTimeout(function () {
      e.WNe();
    }, this.Zyd);
  };
  bb.prototype.Wfd = function (e) {
    var f =
      this.mCa ? nb.rl.Fg.zhc : nb.rl.Fg.Ykb, Da = nb.rl.il.ep;
    zb.Szd === e ? f = nb.rl.Fg.Ykb : zb.Uzd === e ? f = nb.rl.Fg.P9c : zb.Tzd === e ? f = nb.rl.Fg.O9c : zb.POe === e ? f = nb.rl.Fg.j7b : zb.pdf === e ? this.uWb ? f = nb.rl.Fg.Q9c : (f = nb.rl.Fg.Sbc, Da = nb.rl.il.xV) : zb.odf === e ? (f = nb.rl.Fg.jpb, Da = nb.rl.il.xV) : zb.tnd === e ? f = nb.rl.Fg.zhc : zb.Nqf === e && (f = nb.rl.Fg.vcd);
    return { code: f, level: Da };
  };
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.fEd = Pa;
})(window);
'use strict';
(function (f) {
  function e() {
    this.ldb = this.VMa = this.Mvd = this.R0 = null;
    this.BH = 0;
    this.K5 = this.mCa = !1;
    this.languages = null;
    this.Vmd = [];
    this.oVa = '';
  }

  function Pa() {
    this.o3 = new e;
    this.WI = !1;
    this.VMa = this.R0 = null;
  }

  function ab(e, Ha) {
    function Da() {
      bb && clearTimeout(bb);
      nb++;
      bb = setTimeout(function () {
        delete Ha.gpa;
        Ha.gpa = ab(e, Ha);
      }, 500 * nb);
    }

    if (!f.IS_NATIVE_EDITOR) {
      var Pa = new (AscCommon.upd())(e, null, { transports: ['websocket', 'xdr-polling', 'xhr-polling', 'iframe-xhr-polling', 'jsonp-polling'] });
      Pa.onopen = function () {
        bb &&
        (clearTimeout(bb), nb = 0);
        Ha.BH = 1;
        Ha.Mvd && Ha.Mvd();
        Ha.dOe();
      };
      Pa.onmessage = function (e) {
        e = JSON.parse(e.data);
        switch (e.type) {
          case 'spellCheck':
            Ha.oNe(e);
            break;
          case 'init':
            Ha.bNe(e);
        }
      };
      Pa.onclose = function (e) {
        Ha.BH = -1;
        var f = 20 <= nb || Ha.mCa;
        f && (Ha.BH = 3);
        Ha.R0 && Ha.R0(e.reason, f, Ha.mCa);
        Ha.mCa || 20 > nb && Da();
      };
      return Pa;
    }
  }

  Pa.prototype.se = function (e) {
    if (this.o3 && this.o3.CAc()) {
      var f = this;
      this.o3.R0 = function (e, Da, Ha) {
        f.umc(e, Da, Ha);
      };
      this.o3.VMa = function (e) {
        f.z0e(e);
      };
      this.o3.ldb = function (e) {
        f.n0e(e);
      };
      this.o3.se(e);
      this.WI = !0;
    }
  };
  Pa.prototype.y_a = function (e) {
    this.o3 && this.o3.y_a(e);
  };
  Pa.prototype.oXa = function () {
    return this.o3 ? this.o3.oXa() : 0;
  };
  Pa.prototype.disconnect = function () {
    this.o3 && this.WI && this.o3.disconnect();
  };
  Pa.prototype.Heb = function (e) {
    this.o3 && this.WI && this.o3.Heb(e);
  };
  Pa.prototype.ePb = function (e) {
    return this.o3 && this.WI ? this.o3.ePb(e) : !0;
  };
  Pa.prototype.z0e = function (e) {
    this.VMa && this.VMa(e);
  };
  Pa.prototype.n0e = function (e) {
    this.ldb && this.ldb(e);
  };
  Pa.prototype.umc = function (e, f, Pa) {
    this.R0 && this.R0(e, f, Pa);
  };
  e.prototype.CAc = function () {
    return '' !== this.oVa;
  };
  e.prototype.y_a = function (e) {
    this.oVa = e;
  };
  e.prototype.oXa = function () {
    return this.BH;
  };
  e.prototype.Heb = function (e) {
    this.AU({ type: 'spellCheck', spellCheckData: e });
  };
  e.prototype.ePb = function (e) {
    return !this.K5 || !!this.languages[e];
  };
  e.prototype.disconnect = function () {
    this.mCa = !0;
    return this.gpa.close();
  };
  e.prototype.AU = function (e) {
    null !== e && 'object' === typeof e && (0 < this.BH ? this.gpa.send(JSON.stringify(e)) : this.Vmd.push(e));
  };
  e.prototype.dOe = function () {
    for (var e; 0 <
    this.BH && void 0 !== (e = this.Vmd.shift());) this.AU(e);
  };
  e.prototype.oNe = function (e) {
    e.spellCheckData && this.VMa && this.VMa(e.spellCheckData);
  };
  e.prototype.bNe = function (e) {
    !this.K5 && e.languages && (this.ldb && this.ldb(e.languages), this.languages = e.languages.reduce(function (e, f) {
      e[f] = 1;
      return e;
    }, {}), this.K5 = !0);
  };
  var bb, nb = 0;
  e.prototype.se = function (e) {
    this.Xpb = e;
    e = this.oVa + '/doc/' + e + '/c';
    this.ryb = /^https?:\/\//.test(this.oVa) ? e : AscCommon.xod() + '../../../..' + e;
    this.gpa = ab(this.ryb, this);
  };
  f.AscCommon = f.AscCommon ||
    {};
  f.AscCommon.C6d = Pa;
})(window);
'use strict';
(function (f, e) {
  function Pa(f, w, Ia, Da) {
    var Oa = new gb;
    Oa.type = zd.q9;
    Oa.r = f;
    Oa.wb = w;
    Oa.Ya = Ia;
    Oa.a = 255;
    Oa.kf = e === Da ? !1 : Da;
    return Oa;
  }

  function ab(e) {
    if (null == e || null == e.color) return new gb;
    var f = new gb;
    f.r = e.RGBA.R;
    f.wb = e.RGBA.G;
    f.Ya = e.RGBA.B;
    f.a = e.RGBA.Bf;
    e = e.color;
    switch (e.type) {
      case zd.sca:
      case zd.YS:
        f.type = e.type, f.value = e.id;
    }
    return f;
  }

  function bb() {
    this.id = e;
    this.hAc = this.L$ = this.Eaa = this.xZb = this.Yy = '';
    this.zBd = !1;
    this.valid = 0;
    this.date = this.image = '';
    this.sWb = this.Ttd = !1;
  }

  function nb() {
    this.eud = Nn.Error;
    this.dud = Qi.Af;
    this.Ctd = !1;
    this.tzd = dj.Af;
    this.D0e = this.C0e = !0;
    this.zJc = this.old = !1;
    this.Hcf = !0;
    this.L3d = 300;
    this.Gcf = !1;
    this.ikd = this.jkd = null;
    return this;
  }

  function Da() {
    this.dl = this.E$ = this.Qja = this.aq = this.Kp = this.nyb = this.units = this.YKa = this.eJ = this.zcb = this.Xbb = this.Zia = this.jZa = this.toa = this.Ucb = null;
    this.RAa = Fg.val;
  }

  function Ha() {
    this.xWb = this.dl = this.E$ = this.Qja = this.aq = this.Kp = this.wWb = this.fWb = this.bWb = this.cWb = this.dWb = null;
    this.RAa = Fg.Sg;
    this.wPb = this.xPb = null;
  }

  function Eb() {
    this.F_a = this.D_a =
      this.Mp = this.CU = this.nT = this.Wba = this.Cg = this.u2a = this.NEa = this.separator = this.HF = this.FF = this.GF = this.type = this.Syb = this.Xub = this.UVb = this.d_b = this.BPb = this.cA = this.e_b = this.VVb = this.HYb = this.title = this.style = null;
  }

  function zb(e, f, w, Ia) {
    this.dDb = e;
    this.fib = f;
    this.GIc = w;
    this.m4b = Ia;
  }

  function Va(f, w, Ia, Da) {
    this.r = e == f ? 0 : f;
    this.wb = e == w ? 0 : w;
    this.Ya = e == Ia ? 0 : Ia;
    this.a = e == Da ? 1 : Da;
  }

  function gb() {
    this.type = zd.q9;
    this.value = null;
    this.Ya = this.wb = this.r = 0;
    this.a = 255;
    this.kf = !1;
    this.ne = [];
    1 === arguments.length ? (this.r =
      arguments[0].r, this.wb = arguments[0].wb, this.Ya = arguments[0].Ya) : (3 <= arguments.length && (this.r = arguments[0], this.wb = arguments[1], this.Ya = arguments[2]), 4 === arguments.length && (this.a = arguments[3]));
  }

  function Za(w) {
    w ? (this.Aa = w.Aa instanceof gb ? w.Aa : e != w.Aa && null != w.Aa ? Pa(w.Aa.r, w.Aa.wb, w.Aa.Ya) : null, this.Ab = e != w.Ab ? w.Ab : null, this.ua = e != w.ua ? w.ua : null, this.nc = e != w.nc ? w.nc : null) : (this.Aa = Pa(0, 0, 0), this.Ab = .5 * f.AscCommonWord.i6e, this.ua = f.AscCommonWord.g_e, this.nc = 0);
  }

  function bc(f) {
    f ? (this.Ba = e != f.Ba && null !=
    f.Ba ? new Za(f.Ba) : null, this.Qa = e != f.Qa && null != f.Qa ? new Za(f.Qa) : null, this.Ra = e != f.Ra && null != f.Ra ? new Za(f.Ra) : null, this.Xa = e != f.Xa && null != f.Xa ? new Za(f.Xa) : null, this.wi = e != f.wi && null != f.wi ? new Za(f.wi) : null) : this.wi = this.Xa = this.Ra = this.Qa = this.Ba = null;
  }

  function Nc(f) {
    f ? (this.ka = e == f.ka ? null : f.ka, this.rC = e == f.ka ? null : f.rC) : this.rC = this.ka = null;
  }

  function cc(f) {
    f ? (this.Ha = e != f.Ha ? f.Ha : null, this.Ta = e != f.Ta ? f.Ta : null) : (this.Ha = 'Times New Roman', this.Ta = -1);
  }

  function Rb(e, f, w) {
    this.Ua = e;
    this.ua = f;
    this.xX =
      w;
  }

  function ob(f) {
    this.hg = [];
    if (e != f) for (var w = f.hg.length, Oa = 0; Oa < w; Oa++) this.hg.push(new Rb(f.hg[Oa].Ua, f.hg[Oa].ua, f.hg[Oa].xX));
  }

  function Ra(f) {
    f ? (this.ua = e != f.ua ? f.ua : null, this.Aa = f.cb && f.cb.fill && f.cb.fill.type === Ke.TC && f.cb.fill.color ? ab(f.cb.fill.color) : e != f.Aa && null != f.Aa ? Pa(f.Aa.r, f.Aa.wb, f.Aa.Ya) : null) : (this.ua = Oe.xO, this.Aa = Pa(255, 255, 255));
  }

  function Ia(f) {
    f ? (this.Q$b = !1, this.RB = f.RB, this.Vb = f.Vb, this.mG = f.mG, this.xn = f.xn, this.vE = f.vE, this.Nb = f.Nb, this.rG = f.rG, this.bI = f.bI, this.W = f.W, this.PF =
      f.PF, this.pa = f.pa, this.CC = f.CC, this.qa = f.qa, this.yD = f.yD, this.tc = e != f.tc && null != f.tc ? new bc(f.tc) : null, this.Ob = e != f.Ob && null != f.Ob ? new Ra(f.Ob) : null, this.cf = e != f.cf && null != f.cf ? new cc(f.cf) : null) : (this.Q$b = !1, this.yD = this.qa = this.CC = this.pa = this.PF = this.W = this.bI = this.rG = this.Nb = this.vE = this.xn = this.mG = this.Vb = this.RB = e, this.cf = this.tc = this.Ob = null);
  }

  function Ab(f) {
    f ? (this.wc = e != f.wc ? f.wc : null, this.aj = e != f.aj ? f.aj : null, this.Ji = e != f.Ji ? f.Ji : null, this.tg = e != f.tg ? f.tg : null) : this.tg = this.Ji = this.aj = this.wc =
      e;
  }

  function $d(f) {
    f ? (this.Ba = e != f.Ba ? f.Ba : null, this.Ra = e != f.Ra ? f.Ra : null, this.Ce = e != f.Ce ? f.Ce : null) : this.Ce = this.Ra = this.Ba = e;
  }

  function re(w) {
    w ? (this.gp = e != w.gp ? w.gp : null, this.gc = e != w.gc && null != w.gc ? new $d(w.gc) : null, this.nn = e != w.nn ? w.nn : null, this.Cn = e != w.Cn ? w.Cn : e, this.lp = e != w.lp ? w.lp : e, this.jp = e != w.jp ? w.jp : null, this.kc = e != w.kc && null != w.kc ? new Ab(w.kc) : null, this.tc = e != w.tc && null != w.tc ? new bc(w.tc) : null, this.Ob = e != w.Ob && null != w.Ob ? new Ra(w.Ob) : null, this.hg = e != w.hg ? new ob(w.hg) : e, this.Hu = null != w.Hu ?
      w.Hu : f.AscCommonWord.rR, this.Ln = e != w.Ln && null != w.Ln ? w.Ln : !1, this.xla = e != w.xla ? w.xla : !0, this.Sh = e != w.Sh ? new Ia(w.Sh) : e, this.V4a = e != w.V4a ? w.V4a : !1, this.Ikb = e != w.Ikb ? w.Ikb : !1, this.I_ = e != w.I_ ? w.I_ : e, this.J_ = e != w.J_ ? w.J_ : e, this.Yk = e != w.Yk ? w.Yk : e, this.rT = e != w.rT ? w.rT : e, this.Ii = e != w.Ii ? w.Ii : e, this.zj = e != w.zj ? w.zj : e, this.uU = e != w.uU ? w.uU : e, this.ze = e != w.ze ? w.ze : e, this.Ne = e != w.Ne ? w.Ne : e, this.D6a = e != w.D6a ? w.D6a : e, this.Xr = e != w.Xr ? w.Xr : e, this.nma = e != w.nma ? w.nma : !1) : (this.gp = e, this.gc = new $d, this.jp = this.lp = this.Cn =
      this.nn = e, this.kc = new Ab, this.Ob = this.tc = e, this.Ln = !1, this.xla = !0, this.Xr = this.D6a = this.Ne = this.ze = this.uU = this.zj = this.Ii = this.rT = this.Yk = this.J_ = this.I_ = this.hg = e, this.nma = !1);
  }

  function ie() {
    this.Ja = 0;
    this.Image = '';
  }

  function xf(f, w, Ia) {
    this.pd = e == f ? 0 : f;
    this.Uc = e == w ? 0 : w;
    this.qge = Ia;
  }

  function Wc(f) {
    f ? (this.Ba = e == f.Ba ? null : f.Ba, this.Qa = e == f.Qa ? null : f.Qa, this.Xa = e == f.Xa ? null : f.Xa, this.Ra = e == f.Ra ? null : f.Ra) : this.Ra = this.Xa = this.Qa = this.Ba = null;
  }

  function Pi() {
    this.Px = this.stroke = this.fill = this.type = null;
    this.gP = !0;
    this.Ln = this.aia = this.q$ = this.QL = !1;
    this.ABa = this.zBa = this.Xf = this.Wf = this.Soa = this.Sd = this.CNa = this.yS = this.columnNumber = this.description = this.title = this.Zs = this.rI = this.zJ = this.Ph = this.Bb = this.pb = null;
    this.cD = e;
  }

  function Jd(f) {
    f ? (this.zb = f.zb, this.wc = f.wc, this.Lla = f.Lla, this.lf = f.lf) : this.lf = this.Lla = this.wc = this.zb = e;
  }

  function eg(f) {
    f ? (this.He = e === f.He ? e : f.He, this.Up = e === f.Up ? e : f.Up, this.Ue = e === f.Ue ? e : f.Ue, this.ua = e === f.ua ? e : f.ua, this.Tg = e === f.Tg ? e : f.Tg) : this.Tg = this.ua = this.Ue = this.Up =
      this.He = e;
  }

  function Ye(f) {
    f ? (this.He = e === f.He ? e : f.He, this.Up = e === f.Up ? e : f.Up, this.Ue = e === f.Ue ? e : f.Ue, this.ua = e === f.ua ? e : f.ua, this.Tg = e === f.Tg ? e : f.Tg) : this.Tg = this.ua = this.Ue = this.Up = this.He = e;
  }

  function af(f) {
    f ? (this.pa = e == f.pa ? null : f.pa, this.qa = e == f.qa ? null : f.qa) : this.qa = this.pa = null;
  }

  function Qf(f) {
    f ? (this.f5 = e != f.f5 ? f.f5 : !0, this.pd = e != f.pd ? f.pd : e, this.Uc = e != f.Uc ? f.Uc : e, this.mK = e != f.mK ? f.mK : e, this.mv = e != f.mv ? new Wc(f.mv) : e, this.ze = e != f.ze ? new af(f.ze) : e, this.Hy = e != f.Hy ? f.Hy : e, this.Ef = e != f.Ef ? new eg(f.Ef) :
      e, this.If = e != f.If ? new Ye(f.If) : e, this.ry = e != f.ry ? new eg(f.ry) : e, this.sy = e != f.sy ? new Ye(f.sy) : e, this.cu = e != f.cu ? f.cu : null, this.yn = e != f.yn ? f.yn : null, this.Ln = e != f.Ln ? f.Ln : !1, this.Zs = e != f.Zs ? f.Zs : !1, this.pR = e != f.pR ? f.pR : null, this.Zm = e != f.Zm ? f.Zm : null, this.vra = e != f.vra ? f.vra : null, this.Cba = f.Cba != e ? f.Cba : null, this.GEa = f.GEa != e ? f.GEa : null, this.cpa = f.cpa != e ? f.cpa : !1, this.Efa = f.Efa != e ? f.Efa : e, this.Dfa = f.Dfa != e ? f.Dfa : e, this.zJ = f.zJ != e ? f.zJ : e, this.Ph = f.Ph != e ? f.Ph : e, this.Rwa = f.Rwa !== e ? f.Rwa : e, this.Qwa = f.Qwa !==
    e ? f.Qwa : e, this.Nwa = f.Nwa != e ? f.Nwa : e, this.Mwa = f.Mwa != e ? f.Mwa : e, this.title = f.title != e ? f.title : e, this.description = f.description != e ? f.description : e, this.columnNumber = f.columnNumber != e ? f.columnNumber : e, this.yS = f.yS != e ? f.yS : e, this.cD = f.cD != e ? f.cD : e, this.Sd = f.Sd != e ? f.Sd : e, this.Wf = f.Wf != e ? f.Wf : e, this.Xf = f.Xf != e ? f.Xf : e, this.Zgb = f.Zgb != e ? f.Zgb : e) : (this.f5 = !0, this.sy = this.ry = this.If = this.Ef = this.ze = this.mv = this.mK = this.Uc = this.pd = e, this.yn = this.cu = null, this.Ln = !1, this.GEa = this.Cba = this.vra = this.Zm = this.pR = null,
      this.cpa = !1, this.Zgb = this.Xf = this.Wf = this.Soa = this.Sd = this.yS = this.columnNumber = this.description = this.title = this.Mwa = this.Nwa = this.Qwa = this.Rwa = this.Ph = this.zJ = this.Dfa = this.Efa = e);
  }

  function sh(f, w) {
    this.ka = e != f ? f : null;
    this.ua = e != w ? w : null;
  }

  function Mf() {
    this.oi = this.fill = this.type = null;
  }

  function sb() {
    this.type = ad.rKb;
    this.url = '';
    this.LFc = null;
  }

  function xc() {
    this.po = this.Mn = this.Vza = e;
  }

  function Ce() {
    this.vTa = this.mRa = e;
    this.wSa = 0;
    this.dTa = e;
    this.eTa = !0;
    this.ndc = 0;
  }

  function he() {
    this.color = new gb;
  }

  function De() {
    this.aK =
      this.icc = this.fcc = this.gcc = this.Wmb = this.Cza = this.HD = this.color = this.width = this.type = null;
    this.QL = !1;
  }

  function be() {
    this.Sb = [];
    this.name = '';
  }

  function ge(f) {
    if (f) switch (this.ka = e != f.ka ? f.ka : Xb.Gfa, this.RK = e != f.RK ? f.RK : 0, this.SK = e != f.SK ? f.SK : 0, this.ka) {
      case Xb.Ai:
        this.Ai = e != f.Le ? f.Le : 0;
        break;
      case Xb.zpa:
        this.Ol = e != f.Ol ? f.Ol : '';
        this.Ula = e != f.Ula ? f.Ula : !1;
        this.Iza = e != f.Iza ? f.Iza : Oe.c_oAscMouseMoveLockedObjectType.Gfa;
        break;
      case Xb.rf:
        this.Text = '', this.Number = 1;
    } else this.ka = Xb.Gfa, this.SK = this.RK = 0;
  }

  function ae(f) {
    f ?
      (this.Text = e != f.Text ? f.Text : null, this.ua = e != f.ua ? f.ua : '', this.Iz = e != f.Iz ? f.Iz : '', this.Oa = e !== f.Oa ? f.Oa : null, this.Dq = e !== f.Dq ? f.Dq : null, this.Xja = f.Xja ? f.Xja : null) : (this.Text = null, this.Iz = this.ua = '', this.Xja = this.Dq = this.Oa = null);
  }

  function ch() {
    this.V2c = this.IZc = this.i_c = this.Ja = null;
  }

  function Td() {
    this.Vf = this.Permissions = this.Tn = this.Wbd = this.rVc = this.t5c = this.Wsa = this.jhc = this.XLb = this.jn = this.vZ = this.wZ = this.Ja = null;
    this.XNa = !1;
    this.bZc;
  }

  function Cc() {
    this.ka = Oe.OG.YNa;
    this.B_b = this.MMc = this.KGb = this.VZc =
      0;
  }

  function vh() {
    this.ua = 0;
  }

  function Yg() {
    this.qa = this.pa = this.Ja = 0;
  }

  function $b() {
    this.Ja = 0;
    this.xb = [];
    this.Vb = this.W = 0;
  }

  function yc(e, f, w, Ia) {
    this.name = e;
    this.displayName = null;
    this.type = f;
    this.image = w;
    this.VN = Ia;
  }

  function Eg(e, f, w, Ia, Da) {
    this.zm = e;
    this.jG = f;
    this.Ysa = w;
    this.BV = Ia;
    this.Element = Da;
  }

  function sd() {
    this.wta = this.url = this.description = '';
    this.index = 0;
    this.Zub = ['1x', '2x'];
    this.pvb = !1;
    this.Glb = ['word', 'cell', 'slide'];
    this.ivb = this.kvb = this.mvb = this.mcb = this.IH = !1;
    this.initDataType = Uj.pr;
    this.initData =
      '';
    this.lcb = !1;
    this.buttons = [{ text: 'Ok', primary: !0 }, { text: 'Cancel', primary: !1 }];
    this.Vbb = this.size = e;
    this.WPb = [];
    this.aoc = {};
  }

  function Hf() {
    this.wta = this.Yy = this.name = '';
    this.bV = [];
  }

  var Oe = f.Asc, Ee = f.AscCommon, Xb = Ee.Ida, zd = Oe.kfa, Ke = Oe.wy, ad = Oe.Qkd, uc = Oe.Fk, Be = Oe.w$,
    Fg = Oe.Mkd, Nn = { Error: 1, iae: 2, Tye: 3, rBe: 4, vGb: 5, jae: 6, Uye: 7, UBe: 8, z8d: 9, VBe: 10 },
    dj = { Af: 0, W$d: 1, Pte: 2, Comment: 3, npb: 4 }, Qi = { Af: 0, jBe: 1, z$d: 2 },
    Uj = { pr: 'none', text: 'text', Dff: 'ole', html: 'html', $4e: 'desktop' };
  bb.prototype.zD = function () {
    return this.id;
  };
  bb.prototype.FYe = function (e) {
    this.id = e;
  };
  bb.prototype.s3a = function () {
    return this.Yy;
  };
  bb.prototype.DYe = function (e) {
    this.Yy = e;
  };
  bb.prototype.Dkc = function () {
    return this.xZb;
  };
  bb.prototype.vZe = function (e) {
    this.xZb = e;
  };
  bb.prototype.Ekc = function () {
    return this.Eaa;
  };
  bb.prototype.wZe = function (e) {
    this.Eaa = e;
  };
  bb.prototype.okc = function () {
    return this.L$;
  };
  bb.prototype.vYe = function (e) {
    this.L$ = e;
  };
  bb.prototype.CSe = function () {
    return this.hAc;
  };
  bb.prototype.HYe = function (e) {
    this.hAc = e;
  };
  bb.prototype.GUe = function () {
    return this.zBd;
  };
  bb.prototype.sZe = function (e) {
    this.zBd = e;
  };
  bb.prototype.uVe = function () {
    return this.valid;
  };
  bb.prototype.zZe = function (e) {
    this.valid = e;
  };
  bb.prototype.zRe = function () {
    return this.date;
  };
  bb.prototype.mYe = function (e) {
    this.date = e;
  };
  bb.prototype.bId = function () {
    return this.Ttd;
  };
  bb.prototype.DOc = function (e) {
    this.Ttd = e;
  };
  bb.prototype.sUe = function () {
    return this.sWb;
  };
  bb.prototype.mZe = function (e) {
    this.sWb = e;
  };
  nb.prototype.fTe = function () {
    return this.eud;
  };
  nb.prototype.HQe = function () {
    return this.C0e;
  };
  nb.prototype.JQe = function () {
    return this.D0e;
  };
  nb.prototype.GQe = function () {
    return this.old;
  };
  nb.prototype.vRe = function () {
    return this.zJc;
  };
  nb.prototype.GSe = function () {
    return this.Hcf;
  };
  nb.prototype.rQe = function () {
    return this.L3d;
  };
  nb.prototype.DSe = function () {
    return this.Gcf;
  };
  nb.prototype.RSe = function () {
    return this.Ctd;
  };
  nb.prototype.eTe = function () {
    return this.dud;
  };
  nb.prototype.wUe = function () {
    return this.tzd;
  };
  nb.prototype.yQe = function () {
    return this.jkd;
  };
  nb.prototype.xQe = function () {
    return this.ikd;
  };
  nb.prototype.CAd = function (e) {
    this.eud = e;
  };
  nb.prototype.Wnf =
    function (e) {
      this.old = e;
    };
  nb.prototype.aof = function (e) {
    this.zJc = e;
  };
  nb.prototype.wof = function (e) {
    this.Ctd = e;
  };
  nb.prototype.Cof = function (e) {
    this.dud = e;
  };
  nb.prototype.Qof = function (e) {
    this.tzd = e;
  };
  nb.prototype.Unf = function (e) {
    this.jkd = e;
  };
  nb.prototype.Tnf = function (e) {
    this.ikd = e;
  };
  Da.prototype = {
    isEqual: function (e) {
      return e && this.Ucb === e.Ucb && this.toa === e.toa && this.jZa === e.jZa && this.Zia === e.Zia && this.Xbb === e.Xbb && this.zcb === e.zcb && this.eJ === e.eJ && this.YKa === e.YKa && this.units === e.units && this.nyb === e.nyb && this.Kp ===
      e.Kp && this.aq === e.aq && this.Qja === e.Qja && this.E$ === e.E$ && this.dl === e.dl && this.RAa === e.RAa ? !0 : !1;
    }, nDc: function (e) {
      this.RAa = e;
    }, Moa: function (e) {
      this.Ucb = e;
    }, gNa: function (e) {
      this.toa = e;
    }, mDa: function (e) {
      this.jZa = e;
    }, Ndb: function (e) {
      this.Zia = e;
    }, mxb: function (e) {
      this.Xbb = e;
    }, oDc: function (e) {
      this.zcb = e;
    }, Qxd: function (e) {
      this.eJ = e;
    }, Rxd: function (e) {
      this.units = e;
    }, nxb: function (e) {
      this.nyb = e;
    }, zea: function (e) {
      this.Kp = e;
    }, Aea: function (e) {
      this.aq = e;
    }, Bea: function (e) {
      this.Qja = e;
    }, S0: function (e) {
      this.E$ = e;
    }, tja: function (e) {
      this.dl =
        e;
    }, fNa: function (e) {
      this.YKa = e;
    }, FS: function () {
      return this.RAa;
    }, V6e: function () {
      return this.YKa;
    }, F7e: function () {
      return this.Ucb;
    }, E7e: function () {
      return this.toa;
    }, B7e: function () {
      return this.jZa;
    }, A7e: function () {
      return this.Zia;
    }, m7e: function () {
      return this.Xbb;
    }, y7e: function () {
      return this.zcb;
    }, x7e: function () {
      return this.eJ;
    }, zpd: function () {
      return this.units;
    }, e8e: function () {
      return this.nyb;
    }, EQb: function () {
      return this.Kp;
    }, GQb: function () {
      return this.aq;
    }, RQb: function () {
      return this.Qja;
    }, BQb: function () {
      return this.E$;
    },
    AQb: function () {
      return this.dl;
    }, OH: function () {
      this.Moa(Oe.L9a.tt);
      this.mDa(Oe.L9a.tt);
      this.Bea(Oe.ZAa.Ow);
      this.mxb(!1);
      this.fNa(Oe.mrb.pr);
      this.zea(Be.DA);
      this.Aea(Be.zr);
      this.S0(Oe.WVa.tt);
    }
  };
  Ha.prototype = {
    isEqual: function (e) {
      return e && this.dWb === e.dWb && this.cWb === e.cWb && this.bWb === e.bWb && this.fWb === e.fWb && this.wWb === e.wWb && this.Kp === e.Kp && this.aq === e.aq && this.Qja === e.Qja && this.E$ === e.E$ && this.dl === e.dl && this.xWb === e.xWb && this.RAa === e.RAa && this.xPb === e.xPb && this.wPb === e.wPb ? !0 : !1;
    }, Ldb: function (e) {
      this.dWb =
        e;
    }, Kdb: function (e) {
      this.cWb = e;
    }, Pxd: function (e) {
      this.bWb = e;
    }, mYb: function (e) {
      this.fWb = e;
    }, Mdb: function (e) {
      this.wWb = e;
    }, zea: function (e) {
      this.Kp = e;
    }, Aea: function (e) {
      this.aq = e;
    }, Bea: function (e) {
      this.Qja = e;
    }, S0: function (e) {
      this.E$ = e;
    }, tja: function (e) {
      this.dl = e;
    }, nDc: function (e) {
      this.RAa = e;
    }, Loa: function (e) {
      this.xWb = e;
    }, Yod: function () {
      return this.dWb;
    }, Xod: function () {
      return this.cWb;
    }, Wod: function () {
      return this.bWb;
    }, Zod: function () {
      return this.fWb;
    }, $od: function () {
      return this.wWb;
    }, EQb: function () {
      return this.Kp;
    }, GQb: function () {
      return this.aq;
    },
    RQb: function () {
      return this.Qja;
    }, BQb: function () {
      return this.E$;
    }, AQb: function () {
      return this.dl;
    }, FS: function () {
      return this.RAa;
    }, apd: function () {
      return this.xWb;
    }, O6e: function () {
      return this.xPb;
    }, N6e: function () {
      return this.wPb;
    }, Oxd: function (e) {
      this.xPb = e;
    }, Nxd: function (e) {
      this.wPb = e;
    }, OH: function () {
      this.Kdb(Oe.HOb.tt);
      this.Loa(Oe.EKa.BKa);
      this.Bea(Oe.ZAa.Ow);
      this.Mdb(100);
      this.zea(Be.DA);
      this.Aea(Be.zr);
      this.Ldb(1);
      this.S0(Oe.WVa.tt);
    }
  };
  Eb.prototype = {
    sBa: function (e, f) {
      return !!e === !!f;
    }, isEqual: function (e) {
      if (!(e &&
        this.style === e.style && this.title === e.title && this.HYb === e.HYb && this.VVb === e.VVb && this.e_b === e.e_b && this.cA === e.cA && this.BPb === e.BPb && this.d_b === e.d_b && this.UVb === e.UVb && this.Xub === e.Xub && this.Syb === e.Syb && this.type === e.type && this.sBa(this.GF, e.GF) && this.sBa(this.FF, e.FF) && this.sBa(this.HF, e.HF) && (this.separator === e.separator || ' ' === this.separator && null == e.separator || ' ' === e.separator && null == this.separator))) return !1;
      if (!this.NEa) {
        if (e.NEa) return !1;
      } else if (!this.NEa.isEqual(e.NEa)) return !1;
      if (!this.u2a) {
        if (e.u2a) return !1;
      } else if (!this.u2a.isEqual(e.u2a)) return !1;
      return this.Cg === e.Cg && this.sBa(this.Wba, e.Wba) && this.sBa(this.nT, e.nT) && this.sBa(this.CU, e.CU) && this.sBa(this.Mp, e.Mp) && this.sBa(this.D_a, e.D_a) && this.sBa(this.F_a, e.F_a) ? !0 : !1;
    }, Odb: function (e) {
      this.nT = e;
    }, c8e: function () {
      return this.nT;
    }, c_a: function (e) {
      this.CU = e;
    }, s7e: function () {
      return this.CU;
    }, Pdb: function (e) {
      this.Mp = e;
    }, j8e: function () {
      return this.Mp;
    }, sDc: function (e) {
      this.style = parseInt(e, 10);
    }, f2: function () {
      return this.style;
    }, Cjb: function (e) {
      this.Cg = e;
    }, TA: function () {
      return this.Cg;
    }, Jdb: function (e) {
      this.Wba =
        e;
    }, Rsb: function () {
      return this.Wba;
    }, Qdb: function (e) {
      this.title = e;
    }, Ona: function () {
      return this.title;
    }, Bkf: function (e) {
      this.HYb = e;
    }, W7e: function () {
      return this.HYb;
    }, lxb: function (e) {
      this.VVb = e;
    }, oxb: function (e) {
      this.e_b = e;
    }, nYb: function (e) {
      this.cA = e;
    }, kxb: function (e) {
      this.BPb = e;
    }, Akf: function (e) {
      this.d_b = e;
    }, Ckf: function (e) {
      this.UVb = e;
    }, Tod: function () {
      return this.VVb;
    }, Cpd: function () {
      return this.e_b;
    }, cpd: function () {
      return this.cA;
    }, X$a: function () {
      return this.BPb;
    }, u8e: function () {
      return this.d_b;
    }, f7e: function () {
      return this.UVb;
    },
    Idb: function (e) {
      this.Xub = e;
    }, Uod: function () {
      return this.Xub;
    }, Sdb: function (e) {
      this.Syb = e;
    }, Dpd: function () {
      return this.Syb;
    }, vm: function () {
      return this.type;
    }, Rdb: function (e) {
      return this.type = e;
    }, qDc: function (e) {
      return this.GF = e;
    }, pDc: function (e) {
      return this.FF = e;
    }, rDc: function (e) {
      return this.HF = e;
    }, d8e: function () {
      return this.GF;
    }, b8e: function () {
      return this.FF;
    }, f8e: function () {
      return this.HF;
    }, oYb: function (e) {
      this.separator = e;
    }, Z7e: function () {
      return this.separator;
    }, T0: function (e) {
      this.NEa = e;
    }, Qsb: function () {
      return this.NEa;
    },
    R7: function (e) {
      this.u2a = e;
    }, dtb: function () {
      return this.u2a;
    }, Uld: function (e) {
      var f = this.Qsb(), w = this.dtb();
      e ? (f ? f.FS() !== Fg.val && (w && w.FS() === Fg.val ? this.T0(w) : (e = new Da, e.OH(), this.T0(e))) : (e = new Da, e.OH(), this.T0(e)), w ? w.FS() !== Fg.Sg && (f && f.FS() === Fg.Sg ? this.R7(f) : (f = new Ha, f.OH(), this.R7(f))) : (f = new Ha, f.OH(), this.R7(f))) : (f ? f.FS() !== Fg.Sg && (w && w.FS() === Fg.Sg ? this.T0(w) : (e = new Ha, e.OH(), this.T0(e))) : (e = new Ha, e.OH(), this.T0(e)), w ? w.FS() !== Fg.val && (f && f.FS() === Fg.val ? this.R7(f) : (f = new Da, f.OH(), this.R7(f))) :
        (f = new Da, f.OH(), this.R7(f)));
    }, xld: function (e) {
      if (null === this.type) this.Rdb(e); else if (this.type !== e) {
        var f = (this.type === uc.PX || this.type === uc.XZ || this.type === uc.H5 || this.type === uc.QX || this.type === uc.YZ || this.type === uc.I5) !== (e === uc.PX || e === uc.XZ || e === uc.H5 || this.type === uc.QX || this.type === uc.YZ || this.type === uc.I5),
          w = (e === uc.N5 || e === uc.$ba || e === uc.gla || e === uc.sMa || e === uc.tMa || e === uc.vcb || e === uc.L5) !== (this.type === uc.N5 || this.type === uc.$ba || this.type === uc.gla || this.type === uc.sMa || this.type === uc.tMa ||
            this.type === uc.vcb || this.type === uc.L5), Oa = this.type === uc.a_ !== (e === uc.a_), Ia = this.type;
        this.Rdb(e);
        var Ra = this.Qsb(), Ha = this.dtb();
        f && (f = Ra, Ra = Ha, Ha = f, this.T0(Ra), this.R7(Ha), f = this.Xub, this.Idb(this.Syb), this.Sdb(f));
        switch (e) {
          case uc.j9:
          case uc.gca:
          case uc.c9:
            this.T0(null);
            this.R7(null);
            this.lxb(null);
            this.oxb(null);
            this.uja(null);
            this.Sua(null);
            break;
          case uc.A5:
          case uc.Wfa:
          case uc.Xfa:
          case uc.Oba:
          case uc.Pba:
          case uc.Rka:
          case uc.B5:
          case uc.N5:
          case uc.$ba:
          case uc.gla:
          case uc.sMa:
          case uc.tMa:
          case uc.vcb:
          case uc.L5:
          case uc.Lba:
          case uc.Mba:
          case uc.Oka:
          case uc.r4:
          case uc.HZb:
          case uc.IZb:
          case uc.oPb:
          case uc.pPb:
            this.Uld(!1);
            w && (this.Odb(!1), this.Pdb(null), this.c_a(!0));
            if (Ia === uc.PX || Ia === uc.XZ || Ia === uc.H5 || Ia === uc.QX || Ia === uc.YZ || Ia === uc.I5) Oa = this.D_a, this.uja(this.F_a), this.Sua(Oa); else if (Ia === uc.j9 || Ia === uc.gca || Ia === uc.c9) this.uja(!0), this.Sua(!0);
            (Oa = this.Qsb()) && Oa.FS() === Fg.Sg && (e === uc.Lba || e === uc.Mba || e === uc.Oka || e === uc.r4 || e === uc.HZb || e === uc.IZb || e === uc.oPb || e === uc.pPb ? Oa.Loa(Oe.EKa.grb) : Oa.Loa(Oe.EKa.BKa));
            break;
          case uc.PX:
          case uc.XZ:
          case uc.H5:
          case uc.QX:
          case uc.YZ:
          case uc.I5:
            this.Uld(!0);
            if (Ia === uc.j9 ||
              Ia === uc.gca || Ia === uc.c9) this.uja(!0), this.Sua(!0); else if (Ia !== uc.PX && Ia !== uc.XZ && Ia !== uc.H5 || Ia !== uc.QX || Ia !== uc.YZ || Ia !== uc.I5) Oa = this.D_a, this.uja(this.F_a), this.Sua(Oa);
            (e = this.dtb()) && e.FS() === Fg.Sg && e.Loa(Oe.EKa.BKa);
            break;
          case uc.a_:
          case uc.Gxb:
          case uc.IYb:
          case uc.JYb:
          case uc.KYb:
          case uc.Hxb:
          case uc.geb:
            if (Ra && Ra.FS() === Fg.val || (e = new Da, e.OH(), this.T0(e)), Ha && Ha.FS() === Fg.val || (e = new Da, e.OH(), this.R7(e)), Oa && (this.Odb(!0), this.Pdb(null), this.c_a(!1)), Ia === uc.PX || Ia === uc.XZ || Ia === uc.H5 || Ia ===
            uc.QX || Ia === uc.YZ || Ia === uc.I5) Oa = this.D_a, this.uja(this.F_a), this.Sua(Oa); else if (Ia === uc.j9 || Ia === uc.gca || Ia === uc.c9) this.uja(!0), this.Sua(!0);
        }
      }
    }, uja: function (e) {
      this.D_a = e;
    }, Zoc: function () {
      return this.D_a;
    }, Sua: function (e) {
      this.F_a = e;
    }, $oc: function () {
      return this.F_a;
    }
  };
  zb.prototype = {
    Gqb: function () {
      return this.dDb;
    }, Hqb: function () {
      return this.fib;
    }, zda: function () {
      return this.GIc;
    }, yda: function () {
      return this.m4b;
    }
  };
  Va.prototype = {
    constructor: Va, FN: function () {
      return this.r;
    }, N$e: function () {
      return this.r;
    }, wmf: function (f) {
      this.r =
        f;
      this.Jia = e;
    }, CZ: function () {
      return this.wb;
    }, G$e: function () {
      return this.wb;
    }, vmf: function (f) {
      this.wb = f;
      this.Jia = e;
    }, BZ: function () {
      return this.Ya;
    }, B$e: function () {
      return this.Ya;
    }, umf: function (f) {
      this.Ya = f;
      this.Jia = e;
    }, P$a: function () {
      return this.a;
    }, I$e: function () {
      if (!this.Jia) {
        var e = this.r.toString(16), f = this.wb.toString(16), w = this.Ya.toString(16);
        this.Jia = (1 == e.length ? '0' + e : e) + (1 == f.length ? '0' + f : f) + (1 == w.length ? '0' + w : w);
      }
      return this.Jia;
    }, eh: function (e) {
      return this.r === e.r && this.wb === e.wb && this.Ya === e.Ya &&
        this.a === e.a;
    }, Wa: function () {
      return new Va(this.r, this.wb, this.Ya, this.a);
    }
  };
  gb.prototype = {
    constructor: gb, lDb: function () {
      return this.r;
    }, hlc: function (f) {
      this.r = f;
      this.Jia = e;
    }, kDb: function () {
      return this.wb;
    }, Zkc: function (f) {
      this.wb = f;
      this.Jia = e;
    }, jDb: function () {
      return this.Ya;
    }, Qkc: function (f) {
      this.Ya = f;
      this.Jia = e;
    }, gQe: function () {
      return this.a;
    }, WIc: function (f) {
      this.a = f;
      this.Jia = e;
    }, Sw: function () {
      return this.type;
    }, hfa: function (e) {
      this.type = e;
    }, nKa: function () {
      return this.value;
    }, BVa: function (e) {
      this.value = e;
    },
    nid: function () {
      if (!this.Jia) {
        var e = this.a.toString(16), f = this.r.toString(16), w = this.wb.toString(16), Ia = this.Ya.toString(16);
        this.Jia = (1 == e.length ? '0' + e : e) + (1 == f.length ? '0' + f : f) + (1 == w.length ? '0' + w : w) + (1 == Ia.length ? '0' + Ia : Ia);
      }
      return this.Jia;
    }, kW: function () {
      return new Va(this.r, this.wb, this.Ya);
    }, TVe: function (e) {
      this.kf = e;
    }, pQe: function () {
      return this.kf;
    }
  };
  Za.prototype.kW = function () {
    return this.Aa;
  };
  Za.prototype.AVa = function (e) {
    this.Aa = e;
  };
  Za.prototype.Fkc = function () {
    return this.Ab;
  };
  Za.prototype.jXe = function (e) {
    this.Ab =
      e;
  };
  Za.prototype.nKa = function () {
    return this.ua;
  };
  Za.prototype.BVa = function (e) {
    this.ua = e;
  };
  Za.prototype.RUe = function () {
    return this.nc;
  };
  Za.prototype.nXe = function (e) {
    this.nc = e;
  };
  Za.prototype.ZRe = function () {
    return this.K5a;
  };
  Za.prototype.nWe = function (e) {
    this.K5a = e;
  };
  bc.prototype = {
    y8: function () {
      return this.Ba;
    }, Jqb: function (e) {
      this.Ba = e ? new Za(e) : null;
    }, A8: function () {
      return this.Qa;
    }, llc: function (e) {
      this.Qa = e ? new Za(e) : null;
    }, z8: function () {
      return this.Ra;
    }, Kqb: function (e) {
      this.Ra = e ? new Za(e) : null;
    }, ffa: function () {
      return this.Xa;
    },
    Skc: function (e) {
      this.Xa = e ? new Za(e) : null;
    }, uQe: function () {
      return this.wi;
    }, UVe: function (e) {
      this.wi = e ? new Za(e) : null;
    }
  };
  Nc.prototype.rTe = function () {
    return this.ka;
  };
  Nc.prototype.qTe = function () {
    return this.rC;
  };
  cc.prototype = {
    aD: function () {
      return this.Ha;
    }, Qka: function () {
      return this.Ta;
    }, RWe: function (e) {
      this.Ha = e;
    }, BWe: function (e) {
      this.Ta = e;
    }
  };
  Rb.prototype.nKa = function () {
    return this.ua;
  };
  Rb.prototype.BVa = function (e) {
    this.ua = e;
  };
  Rb.prototype.hUe = function () {
    return this.Ua;
  };
  Rb.prototype.$We = function (e) {
    this.Ua = e;
  };
  Rb.prototype.dTe = function () {
    return Oe.Yfa.Zac === this.xX ? Oe.Yfa.ohc : this.xX;
  };
  Rb.prototype.LWe = function (e) {
    this.xX = e;
  };
  ob.prototype = {
    nkc: function () {
      return this.hg.length;
    }, bVe: function (e) {
      return this.hg[e];
    }, YPe: function (e) {
      this.hg.push(e);
    }, $Pe: function () {
      this.hg.length = 0;
    }
  };
  Ra.prototype = {
    nKa: function () {
      return this.ua;
    }, BVa: function (e) {
      this.ua = e;
    }, kW: function () {
      return this.Aa;
    }, AVa: function (e) {
      this.Aa = e ? e : null;
    }
  };
  Ia.prototype.JRe = function () {
    return this.RB;
  };
  Ia.prototype.iWe = function (e) {
    this.RB = e;
  };
  Ia.prototype.nSe =
    function () {
      return this.Vb;
    };
  Ia.prototype.vWe = function (e) {
    this.Vb = e;
  };
  Ia.prototype.oSe = function () {
    return this.mG;
  };
  Ia.prototype.wWe = function (e) {
    this.mG = e;
  };
  Ia.prototype.pSe = function () {
    return this.xn;
  };
  Ia.prototype.xWe = function (e) {
    this.xn = e;
  };
  Ia.prototype.qSe = function () {
    return this.vE;
  };
  Ia.prototype.yWe = function (e) {
    this.vE = e;
  };
  Ia.prototype.vkc = function () {
    return this.Nb;
  };
  Ia.prototype.OWe = function (e) {
    this.Nb = e;
  };
  Ia.prototype.qVe = function () {
    return this.rG;
  };
  Ia.prototype.DXe = function (e) {
    this.rG = e;
  };
  Ia.prototype.sVe =
    function () {
      return this.bI;
    };
  Ia.prototype.FXe = function (e) {
    this.bI = e;
  };
  Ia.prototype.zVe = function () {
    return this.W;
  };
  Ia.prototype.HXe = function (e) {
    this.W = e;
  };
  Ia.prototype.CVe = function () {
    return this.PF;
  };
  Ia.prototype.JXe = function (e) {
    this.PF = e;
  };
  Ia.prototype.Gqb = function () {
    return this.pa;
  };
  Ia.prototype.KXe = function (e) {
    this.pa = e;
  };
  Ia.prototype.FVe = function () {
    return this.CC;
  };
  Ia.prototype.LXe = function (e) {
    this.CC = e;
  };
  Ia.prototype.Hqb = function () {
    return this.qa;
  };
  Ia.prototype.MXe = function (e) {
    this.qa = e;
  };
  Ia.prototype.GVe =
    function () {
      return this.yD;
    };
  Ia.prototype.NXe = function (e) {
    this.yD = e;
  };
  Ia.prototype.Cqb = function () {
    return this.tc;
  };
  Ia.prototype.Rkc = function (e) {
    this.tc = e;
  };
  Ia.prototype.Ckc = function () {
    return this.Ob;
  };
  Ia.prototype.klc = function (e) {
    this.Ob = e;
  };
  Ia.prototype.TRe = function () {
    return this.cf;
  };
  Ia.prototype.mWe = function (e) {
    this.cf = e;
  };
  Ia.prototype.qWe = function (e) {
    this.Q$b = e;
  };
  Ab.prototype = {
    TNb: function () {
      return this.wc;
    }, gTe: function () {
      return this.aj;
    }, tQe: function () {
      return this.Ji;
    }, hQe: function () {
      return this.tg;
    }
  };
  $d.prototype =
    {
      y8: function () {
        return this.Ba;
      }, Jqb: function (e) {
        this.Ba = e;
      }, z8: function () {
        return this.Ra;
      }, Kqb: function (e) {
        this.Ra = e;
      }, RRe: function () {
        return this.Ce;
      }, kWe: function (e) {
        this.Ce = e;
      }
    };
  re.prototype = {
    nRe: function () {
      return this.gp;
    }, dWe: function (e) {
      this.gp = e;
    }, ASe: function () {
      return this.gc;
    }, AWe: function (e) {
      this.gc = e;
    }, USe: function () {
      return this.Ne;
    }, CWe: function (e) {
      this.Ne = e;
    }, VSe: function () {
      return this.nn;
    }, DWe: function (e) {
      this.nn = e;
    }, WSe: function () {
      return this.Cn;
    }, EWe: function (e) {
      this.Cn = e;
    }, XTe: function () {
      return this.jp;
    },
    UWe: function (e) {
      this.jp = e;
    }, AVe: function () {
      return this.lp;
    }, IXe: function (e) {
      this.lp = e;
    }, SUe: function () {
      return this.kc;
    }, oXe: function (e) {
      this.kc = e;
    }, Cqb: function () {
      return this.tc;
    }, Rkc: function (e) {
      this.tc = e;
    }, Ckc: function () {
      return this.Ob;
    }, klc: function (e) {
      this.Ob = e;
    }, zVa: function () {
      return this.Ln;
    }, EQe: function () {
      return this.xla;
    }, Gkc: function () {
      return this.I_;
    }, tXe: function (e) {
      this.I_ = e;
    }, Hkc: function () {
      return this.J_;
    }, uXe: function (e) {
      this.J_ = e;
    }, QUe: function () {
      return this.Yk;
    }, mXe: function (e) {
      this.Yk = e;
    }, iQe: function () {
      return this.rT;
    },
    RVe: function (e) {
      this.rT = e;
    }, E4b: function () {
      return this.Ii;
    }, pXe: function (e) {
      this.Ii = e;
    }, wRe: function () {
      return this.zj;
    }, gWe: function (e) {
      this.zj = e;
    }, iVe: function () {
      return this.uU;
    }, yXe: function (e) {
      this.uU = e;
    }, Fqb: function () {
      return this.ze;
    }, glc: function (e) {
      this.ze = e;
    }, dVe: function () {
      return this.hg;
    }, vXe: function (e) {
      this.hg = e;
    }, BRe: function () {
      return this.Hu;
    }, hWe: function (e) {
      this.Hu = e;
    }, eSe: function () {
      return this.Sh;
    }, pWe: function (e) {
      this.Sh = e;
    }, CQe: function () {
      return this.V4a;
    }, DQe: function () {
      return this.Ikb;
    }, VTe: function () {
      return this.Xr;
    },
    TWe: function (e) {
      this.Xr = e;
    }, WTe: function () {
      return this.nma;
    }
  };
  ie.prototype = {
    zD: function () {
      return this.Ja;
    }, ukc: function () {
      return this.Image;
    }
  };
  xf.prototype = {
    pid: function () {
      return this.pd;
    }, oid: function () {
      return this.Uc;
    }, HSe: function () {
      return this.qge;
    }
  };
  Wc.prototype = {
    y8: function () {
      return this.Ba;
    }, Jqb: function (e) {
      this.Ba = e;
    }, A8: function () {
      return this.Qa;
    }, llc: function (e) {
      this.Qa = e;
    }, ffa: function () {
      return this.Xa;
    }, Skc: function (e) {
      this.Xa = e;
    }, z8: function () {
      return this.Ra;
    }, Kqb: function (e) {
      this.Ra = e;
    }
  };
  Pi.prototype =
    {
      constructor: Pi, Sw: function () {
        return this.type;
      }, hfa: function (e) {
        this.type = e;
      }, NFa: function () {
        return this.fill;
      }, RPa: function (e) {
        this.fill = e;
      }, WUe: function () {
        return this.stroke;
      }, qXe: function (e) {
        this.stroke = e;
      }, zkc: function () {
        return this.Px;
      }, flc: function (e) {
        this.Px = e;
      }, IQe: function () {
        return this.gP;
      }, WVe: function (e) {
        this.gP = e;
      }, kkc: function () {
        return this.QL;
      }, YXe: function (e) {
        this.QL = e;
      }, fSe: function () {
        return this.q$;
      }, BYe: function (e) {
        this.q$ = e;
      }, zVa: function () {
        return this.Ln;
      }, SYe: function (e) {
        this.Ln = e;
      }, zda: function () {
        return this.pb;
      },
      Lqb: function (e) {
        this.pb = e;
      }, yda: function () {
        return this.Bb;
      }, alc: function (e) {
        this.Bb = e;
      }, Lkc: function () {
        return this.zJ;
      }, nlc: function (e) {
        this.zJ = e;
      }, Kkc: function () {
        return this.Ph;
      }, mlc: function (e) {
        this.Ph = e;
      }, hVe: function () {
        return this.rI;
      }, xXe: function (e) {
        this.rI = e;
      }, wkc: function () {
        return this.Zs;
      }, dlc: function (e) {
        this.Zs = e;
      }, gfa: function () {
        return this.title;
      }, oKa: function (e) {
        this.title = e;
      }, xEa: function () {
        return this.description;
      }, Iqb: function (e) {
        this.description = e;
      }, lkc: function () {
        return this.columnNumber;
      }, Tkc: function (e) {
        this.columnNumber =
          e;
      }, mkc: function () {
        return this.yS;
      }, Ukc: function (e) {
        this.yS = e;
      }, VNb: function () {
        return this.CNa;
      }, iXe: function (e) {
        this.CNa = e;
      }, gSe: function () {
        return this.aia;
      }, rWe: function (e) {
        this.aia = e;
      }, Akc: function () {
        return this.Sd;
      }, ilc: function (e) {
        this.Sd = e;
      }, Bkc: function () {
        return this.Soa;
      }, jlc: function (e) {
        this.Soa = e;
      }, pkc: function () {
        return this.Wf;
      }, Vkc: function (e) {
        this.Wf = e;
      }, rkc: function () {
        return this.Xf;
      }, Xkc: function (e) {
        this.Xf = e;
      }, qkc: function () {
        return this.zBa;
      }, Wkc: function (e) {
        this.zBa = e;
      }, skc: function () {
        return this.ABa;
      },
      Ykc: function (e) {
        this.ABa = e;
      }, Aid: function () {
        return this.cD;
      }, Sid: function (e) {
        this.cD = e;
      }
    };
  Jd.prototype.RPa = function (e) {
    this.zb = e;
  };
  Jd.prototype.NFa = function () {
    return this.zb;
  };
  Jd.prototype.Kid = function (e) {
    this.wc = e;
  };
  Jd.prototype.TNb = function () {
    return this.wc;
  };
  Jd.prototype.Iid = function (e) {
    this.Lla = e;
  };
  Jd.prototype.B4b = function () {
    return this.Lla;
  };
  Jd.prototype.rXe = function (e) {
    this.lf = e;
  };
  Jd.prototype.WNb = function () {
    return this.lf;
  };
  eg.prototype.mXa = function () {
    return this.He;
  };
  eg.prototype.nDa = function (e) {
    this.He =
      e;
  };
  eg.prototype.nXa = function () {
    return this.Up;
  };
  eg.prototype.tGa = function (e) {
    this.Up = e;
  };
  eg.prototype.gea = function () {
    return this.Ue;
  };
  eg.prototype.H8 = function (e) {
    this.Ue = e;
  };
  eg.prototype.nP = function () {
    return this.ua;
  };
  eg.prototype.xM = function (e) {
    this.ua = e;
  };
  eg.prototype.Apc = function () {
    return this.Tg;
  };
  eg.prototype.CDc = function (e) {
    this.Tg = e;
  };
  Ye.prototype.mXa = function () {
    return this.He;
  };
  Ye.prototype.nDa = function (e) {
    this.He = e;
  };
  Ye.prototype.nXa = function () {
    return this.Up;
  };
  Ye.prototype.tGa = function (e) {
    this.Up =
      e;
  };
  Ye.prototype.gea = function () {
    return this.Ue;
  };
  Ye.prototype.H8 = function (e) {
    this.Ue = e;
  };
  Ye.prototype.nP = function () {
    return this.ua;
  };
  Ye.prototype.xM = function (e) {
    this.ua = e;
  };
  Ye.prototype.Apc = function () {
    return this.Tg;
  };
  Ye.prototype.CDc = function (e) {
    this.Tg = e;
  };
  af.prototype.Xxa = function () {
    return this.pa;
  };
  af.prototype.rmf = function (e) {
    this.pa = e;
  };
  af.prototype.Yxa = function () {
    return this.qa;
  };
  af.prototype.tmf = function (e) {
    this.qa = e;
  };
  Qf.prototype = {
    constructor: Qf, PQe: function () {
      return this.vra;
    }, YVe: function (e) {
      this.vra =
        e;
    }, FQe: function () {
      return this.f5;
    }, zda: function () {
      return this.pd;
    }, Lqb: function (e) {
      this.pd = e;
    }, yda: function () {
      return this.Uc;
    }, alc: function (e) {
      this.Uc = e;
    }, EVe: function () {
      return this.mK;
    }, OTd: function (e) {
      this.mK = e;
    }, zkc: function () {
      return this.mv;
    }, flc: function (e) {
      this.mv = e;
    }, jQe: function () {
      return this.Hy;
    }, SVe: function (e) {
      this.Hy = e;
    }, Fqb: function () {
      return this.ze;
    }, glc: function (e) {
      this.ze = e;
    }, iUe: function () {
      return this.Ef;
    }, Pid: function (e) {
      this.Ef = e;
    }, jUe: function () {
      return this.If;
    }, Qid: function (e) {
      this.If = e;
    }, NUe: function () {
      return this.ry;
    },
    kXe: function (e) {
      this.ry = e;
    }, OUe: function () {
      return this.sy;
    }, lXe: function (e) {
      this.sy = e;
    }, vVe: function (e) {
      return null != this.cu ? this.cu.jPa(e) : 0;
    }, wVe: function (e) {
      return null != this.cu ? this.cu.kPa(e) : 0;
    }, ySe: function () {
      return this.yn;
    }, Jid: function (e) {
      this.yn = e;
    }, lSe: function () {
      return this.Cba;
    }, uWe: function (e) {
      this.Cba = e;
    }, ZHd: function () {
      return this.GEa;
    }, dId: function (e) {
      this.GEa = e;
    }, HVe: function () {
      return this.KLd;
    }, OXe: function (e) {
      this.KLd = e;
    }, DUe: function () {
      return this.cpa;
    }, gXe: function (e) {
      this.cpa = e;
    }, CUe: function () {
      return this.Efa;
    },
    fXe: function (e) {
      this.Efa = e;
    }, BUe: function () {
      return this.Dfa;
    }, eXe: function (e) {
      this.Dfa = e;
    }, Lkc: function () {
      return this.zJ;
    }, nlc: function (e) {
      this.zJ = e;
    }, Kkc: function () {
      return this.Ph;
    }, mlc: function (e) {
      this.Ph = e;
    }, zVa: function () {
      return this.Ln;
    }, wkc: function () {
      return this.Zs;
    }, dlc: function (e) {
      this.Zs = e;
    }, UQe: function () {
      return this.pR;
    }, ZVe: function (e) {
      this.pR = e;
    }, EUe: function () {
      return this.Zm;
    }, hXe: function (e) {
      this.Zm = e;
    }, q9a: function (w) {
      if (f.AscFormat.lb(this.Nwa) && f.AscFormat.lb(this.Mwa)) return new xf(this.Nwa,
        this.Mwa, !0);
      if (null === this.yn) return new xf(50, 50, !1);
      var Oa;
      w.La && w.La.Za && (Oa = w.La.Za.AQd());
      var Ia = Ee.V6a, Da = Ee.BIa, Ra = Ee.OMb, Ha = Ee.TMb, Va = Ee.PMb, Za = Ee.SMb;
      Oa && (Oa.W && (Ia = Oa.W), Oa.Vb && (Da = Oa.Vb));
      var Pa = 0;
      Oa = 0;
      w = w.bs.TX[Ee.rV(this.yn)];
      w != e && null != w.Image && w.Bx == f.AscFonts.gqa.u9 ? (Pa = w.Image.width, Oa = w.Image.height) : f.AscDesktopEditor && f.AscDesktopEditor.GetImageOriginalSize && (w = f.AscDesktopEditor.GetImageOriginalSize(this.yn), 0 != w.W && 0 != w.Vb && (Pa = w.W, Oa = w.Vb));
      return 0 != Pa && 0 != Oa ? (Ia = Math.max(1,
        Ia - (Ra + Va)), Ha = Math.max(1, Da - (Ha + Za)), Da = !1, Pa = Math.max(Pa * Ee.eI, 1), Oa = Math.max(Oa * Ee.eI, 1), Ha = Math.max(Pa / Ia, Oa / Ha), 1 < Ha ? (Ia = Math.max(5, Pa / Ha), Ha = Math.max(5, Oa / Ha), Da = !0) : (Ia = Pa, Ha = Oa), new xf(Ia, Ha, Da)) : new xf(50, 50, !1);
    }, gUe: function () {
      return this.Rwa;
    }, ZWe: function (e) {
      this.Rwa = e;
    }, fUe: function () {
      return this.Qwa;
    }, YWe: function (e) {
      this.Qwa = e;
    }, gfa: function () {
      return this.title;
    }, oKa: function (e) {
      this.title = e;
    }, xEa: function () {
      return this.description;
    }, Iqb: function (e) {
      this.description = e;
    }, lkc: function () {
      return this.columnNumber;
    },
    Tkc: function (e) {
      this.columnNumber = e;
    }, mkc: function () {
      return this.yS;
    }, Ukc: function (e) {
      this.yS = e;
    }, VNb: function () {
      return this.Zm ? this.Zm.VNb() : e;
    }, Akc: function () {
      return this.Sd;
    }, ilc: function (e) {
      this.Sd = e;
    }, Bkc: function () {
      return this.Soa;
    }, jlc: function (e) {
      this.Soa = e;
    }, pkc: function () {
      return this.Wf;
    }, Vkc: function (e) {
      this.Wf = e;
    }, qkc: function () {
      return this.zBa;
    }, Wkc: function (e) {
      this.zBa = e;
    }, rkc: function () {
      return this.Xf;
    }, Xkc: function (e) {
      this.Xf = e;
    }, skc: function () {
      return this.ABa;
    }, Ykc: function (e) {
      this.ABa = e;
    }, cXe: function (e) {
      this.Zgb =
        e;
    }, Aid: function () {
      return this.cD;
    }, Sid: function (e) {
      this.cD = e;
    }
  };
  sh.prototype = {
    STe: function () {
      return this.ka;
    }, TTe: function () {
      return this.ua;
    }
  };
  Mf.prototype = {
    Sw: function () {
      return this.type;
    }, hfa: function (e) {
      this.type = e;
    }, NFa: function () {
      return this.fill;
    }, RPa: function (e) {
      this.fill = e;
    }, oVe: function () {
      return this.oi;
    }, BXe: function (e) {
      this.oi = e;
    }, fkc: function () {
      return null != this.oi || null != this.fill && null != this.fill.vTa ? !0 : !1;
    }
  };
  sb.prototype = {
    Sw: function () {
      return this.type;
    }, hfa: function (e) {
      this.type = e;
    }, XNb: function () {
      return this.url;
    },
    jOa: function (e) {
      this.url = e;
    }, Bid: function () {
      return this.LFc;
    }, zXe: function (e) {
      this.LFc = e;
    }
  };
  xc.prototype = {
    bUe: function () {
      return this.Vza;
    }, WWe: function (e) {
      this.Vza = e;
    }, $Qe: function () {
      return this.Mn;
    }, aWe: function (e) {
      this.Mn = e;
    }, ZQe: function () {
      return this.po;
    }, $Ve: function (e) {
      this.po = e;
    }
  };
  Ce.prototype = {
    iRe: function () {
      return this.mRa;
    }, bWe: function (e) {
      this.mRa = e;
    }, kUe: function () {
      return this.vTa;
    }, aXe: function (e) {
      this.vTa = e;
    }, iSe: function () {
      return this.wSa;
    }, tWe: function (e) {
      this.wSa = e;
    }, hTe: function () {
      return this.dTa;
    },
    MWe: function (e) {
      this.dTa = e;
    }, iTe: function () {
      return this.eTa;
    }, NWe: function (e) {
      this.eTa = e;
    }, $Te: function () {
      return this.ndc;
    }, VWe: function (e) {
      this.ndc = e;
    }
  };
  he.prototype = {
    kW: function () {
      return this.color;
    }, AVa: function (e) {
      this.color = e;
    }
  };
  De.prototype = {
    Sw: function () {
      return this.type;
    }, hfa: function (e) {
      this.type = e;
    }, zda: function () {
      return this.width;
    }, Lqb: function (e) {
      this.width = e;
    }, kW: function () {
      return this.color;
    }, AVa: function (e) {
      this.color = e;
    }, oTe: function () {
      return this.Cza;
    }, Oid: function (e) {
      this.Cza = e;
    }, lTe: function () {
      return this.Wmb;
    },
    Mid: function (e) {
      this.Wmb = e;
    }, kTe: function () {
      return this.gcc;
    }, blc: function (e) {
      this.gcc = e;
    }, jTe: function () {
      return this.fcc;
    }, Lid: function (e) {
      this.fcc = e;
    }, nTe: function () {
      return this.icc;
    }, clc: function (e) {
      this.icc = e;
    }, mTe: function () {
      return this.aK;
    }, Nid: function (e) {
      this.aK = e;
    }, kkc: function () {
      return this.QL;
    }, bXe: function (e) {
      this.HD = e;
    }, oUe: function () {
      return this.HD;
    }
  };
  be.prototype.C$e = function () {
    return this.Sb;
  };
  be.prototype.lQc = function () {
    return this.name;
  };
  be.prototype.D$e = function () {
    return this.Sb[0];
  };
  be.prototype.K$e =
    function () {
      return this.Sb[1];
    };
  be.prototype.E$e = function () {
    return this.Sb[2];
  };
  be.prototype.L$e = function () {
    return this.Sb[3];
  };
  be.prototype.v$e = function () {
    return this.Sb[4];
  };
  be.prototype.w$e = function () {
    return this.Sb[5];
  };
  be.prototype.x$e = function () {
    return this.Sb[6];
  };
  be.prototype.y$e = function () {
    return this.Sb[7];
  };
  be.prototype.z$e = function () {
    return this.Sb[8];
  };
  be.prototype.A$e = function () {
    return this.Sb[9];
  };
  be.prototype.J$e = function () {
    return this.Sb[10];
  };
  be.prototype.F$e = function () {
    return this.Sb[11];
  };
  ge.prototype.BO = function () {
    return this.ka;
  };
  ge.prototype.Xxa = function () {
    return this.RK;
  };
  ge.prototype.Yxa = function () {
    return this.SK;
  };
  ge.prototype.VQb = function () {
    return this.Ai;
  };
  ge.prototype.Aqa = function () {
    return this.Ol;
  };
  ge.prototype.e9e = function () {
    return this.Ula;
  };
  ge.prototype.I9e = function () {
    return this.Iza;
  };
  ge.prototype.b9e = function () {
    return this.Text;
  };
  ge.prototype.a9e = function () {
    return this.Number;
  };
  ae.prototype.nP = function () {
    return this.ua;
  };
  ae.prototype.xM = function (e) {
    this.ua = e;
  };
  ae.prototype.Xpd =
    function () {
      return this.Iz;
    };
  ae.prototype.ayd = function (e) {
    this.Iz = e ? e.slice(0, Oe.Wkd) : e;
  };
  ae.prototype.vLa = function () {
    return this.Text;
  };
  ae.prototype.Swa = function (e) {
    this.Text = e;
  };
  ae.prototype.vDc = function (e) {
    this.Oa = e;
  };
  ae.prototype.B1b = function () {
    return this.Oa;
  };
  ae.prototype.ndf = function () {
    return '_top' === this.Dq;
  };
  ae.prototype.mmf = function () {
    this.Dq = '_top';
  };
  ae.prototype.opc = function () {
    return this.Dq;
  };
  ae.prototype.YKc = function (e) {
    this.Dq = e;
  };
  ae.prototype.mdf = function () {
    return this.Xja instanceof AscCommonWord.bb ?
      !0 : !1;
  };
  ae.prototype.ERc = function (e) {
    this.Xja = e;
  };
  ae.prototype.D5b = function () {
    return this.Xja;
  };
  f.Asc.CHyperlinkProperty = f.Asc.ffb = ae;
  ae.prototype.get_Value = ae.prototype.nP;
  ae.prototype.put_Value = ae.prototype.xM;
  ae.prototype.get_ToolTip = ae.prototype.Xpd;
  ae.prototype.put_ToolTip = ae.prototype.ayd;
  ae.prototype.get_Text = ae.prototype.vLa;
  ae.prototype.put_Text = ae.prototype.Swa;
  ae.prototype.get_InternalHyperlink = ae.prototype.B1b;
  ae.prototype.put_InternalHyperlink = ae.prototype.vDc;
  ae.prototype.is_TopOfDocument =
    ae.prototype.ndf;
  ae.prototype.put_TopOfDocument = ae.prototype.mmf;
  ae.prototype.get_Bookmark = ae.prototype.opc;
  ae.prototype.put_Bookmark = ae.prototype.YKc;
  ae.prototype.is_Heading = ae.prototype.mdf;
  ae.prototype.put_Heading = ae.prototype.ERc;
  ae.prototype.get_Heading = ae.prototype.D5b;
  ch.prototype.Q0b = ch.prototype.w6b = function (e) {
    this.Ja = e;
  };
  ch.prototype.zD = ch.prototype.TBa = function () {
    return this.Ja;
  };
  ch.prototype.sWe = function (e) {
    this.i_c = e;
  };
  ch.prototype.hSe = ch.prototype.jWd = function () {
    return this.i_c;
  };
  ch.prototype.lWe =
    function (e) {
      this.IZc = e;
    };
  ch.prototype.RNb = ch.prototype.rpc = function () {
    return this.IZc;
  };
  ch.prototype.JWe = function (e) {
    this.V2c = e;
  };
  ch.prototype.SNb = ch.prototype.wpc = function () {
    return this.V2c;
  };
  var w = Td.prototype;
  w.TBa = w.zD = function () {
    return this.Ja;
  };
  w.w6b = w.Q0b = function (e) {
    this.Ja = e;
  };
  w.ZJc = w.XNb = function () {
    return this.wZ;
  };
  w.s2f = w.jOa = function (e) {
    this.wZ = e;
  };
  w.iQc = w.gfa = function () {
    return this.vZ;
  };
  w.Zqg = w.oKa = function (e) {
    this.vZ = e;
  };
  w.gab = w.$Re = function () {
    return this.jn;
  };
  w.uDc = w.oWe = function (e) {
    this.jn = e;
  };
  w.plg = w.rVe = function () {
    return this.XLb;
  };
  w.brg = w.EXe = function (e) {
    this.XLb = e;
  };
  w.m$e = w.lVe = function () {
    return this.jhc;
  };
  w.$qg = w.AXe = function (e) {
    this.jhc = e;
  };
  w.glg = function () {
    return this.XNa;
  };
  w.Vxd = function (e) {
    this.XNa = e;
  };
  w.Aqa = w.PFa = function () {
    return this.Wsa ? this.Wsa.TBa() : null;
  };
  w.UDb = w.Hxa = function () {
    return this.Wsa ? this.Wsa.jWd() : null;
  };
  w.rpc = w.RNb = function () {
    return this.Wsa ? this.Wsa.rpc() : null;
  };
  w.wpc = w.SNb = function () {
    return this.Wsa ? this.Wsa.wpc() : null;
  };
  w.hlg = w.OFa = function () {
    return this.t5c;
  };
  w.Rqg =
    w.SWe = function (e) {
      this.t5c = e;
    };
  w.E8e = w.BQe = function () {
    return this.rVc;
  };
  w.Mqg = w.VVe = function (e) {
    this.rVc = e;
  };
  w.l$e = w.fVe = function () {
    return this.Wbd;
  };
  w.Yqg = w.wXe = function (e) {
    this.Wbd = e;
  };
  w.aYf = w.pVe = function () {
    return this.Wsa;
  };
  w.arg = w.CXe = function (e) {
    this.Wsa = e;
  };
  w.N9e = w.LTe = function () {
    return this.Tn;
  };
  w.Qqg = w.PWe = function (e) {
    this.Tn = e;
  };
  w.Q9e = w.dUe = function () {
    return this.Permissions;
  };
  w.Sqg = w.XWe = function (e) {
    this.Permissions = e;
  };
  w.hab = w.YSe = function () {
    return this.Vf;
  };
  w.ZKc = w.GWe = function (e) {
    this.Vf = e;
  };
  w.Lpd =
    w.MRe = function () {
      return this.bZc;
    };
  w.Xkf = w.jWe = function (e) {
    this.bZc = e;
  };
  Cc.prototype.Sw = function () {
    return this.ka;
  };
  Cc.prototype.YRe = function () {
    return this.VZc;
  };
  Cc.prototype.sRe = function () {
    return this.KGb;
  };
  Cc.prototype.zSe = function () {
    return this.MMc;
  };
  Cc.prototype.tRe = function () {
    return this.B_b;
  };
  vh.prototype.xM = function (e) {
    this.ua = e;
  };
  vh.prototype.nP = function () {
    return this.ua;
  };
  Yg.prototype.TBa = function () {
    return this.Ja;
  };
  Yg.prototype.Xxa = function () {
    return this.pa;
  };
  Yg.prototype.Yxa = function () {
    return this.qa;
  };
  $b.prototype.TBa = function () {
    return this.Ja;
  };
  $b.prototype.V8e = function () {
    return this.xb;
  };
  $b.prototype.Wxa = function () {
    return this.W;
  };
  $b.prototype.L3a = function () {
    return this.Vb;
  };
  yc.prototype.zD = yc.prototype.aD = yc.prototype.AOa = function () {
    return this.name;
  };
  yc.prototype.XHd = function () {
    return this.displayName;
  };
  yc.prototype.Sw = yc.prototype.BO = function () {
    return this.type;
  };
  yc.prototype.ukc = function () {
    return this.image;
  };
  Eg.prototype.s$e = function () {
    return this.zm;
  };
  Eg.prototype.O8e = function () {
    return this.jG;
  };
  Eg.prototype.r$e = function () {
    return this.Ysa;
  };
  sd.prototype.get_Description = function () {
    return this.description;
  };
  sd.prototype.set_Description = function (e) {
    this.description = e;
  };
  sd.prototype.get_Url = function () {
    return this.url;
  };
  sd.prototype.set_Url = function (e) {
    this.url = e;
  };
  sd.prototype.get_Icons = function () {
    return this.Zub;
  };
  sd.prototype.set_Icons = function (e) {
    this.Zub = e;
  };
  sd.prototype.get_System = function () {
    return this.IH;
  };
  sd.prototype.set_System = function (e) {
    this.IH = e;
  };
  sd.prototype.get_Viewer = function () {
    return this.pvb;
  };
  sd.prototype.set_Viewer = function (e) {
    this.pvb = e;
  };
  sd.prototype.get_EditorsSupport = function () {
    return this.Glb;
  };
  sd.prototype.set_EditorsSupport = function (e) {
    this.Glb = e;
  };
  sd.prototype.get_Visual = function () {
    return this.mcb;
  };
  sd.prototype.set_Visual = function (e) {
    this.mcb = e;
  };
  sd.prototype.get_Modal = function () {
    return this.mvb;
  };
  sd.prototype.set_Modal = function (e) {
    this.mvb = e;
  };
  sd.prototype.get_InsideMode = function () {
    return this.kvb;
  };
  sd.prototype.set_InsideMode = function (e) {
    this.kvb = e;
  };
  sd.prototype.get_CustomWindow = function () {
    return this.ivb;
  };
  sd.prototype.set_CustomWindow = function (e) {
    this.ivb = e;
  };
  sd.prototype.get_InitDataType = function () {
    return this.initDataType;
  };
  sd.prototype.set_InitDataType = function (e) {
    this.initDataType = e;
  };
  sd.prototype.get_InitData = function () {
    return this.initData;
  };
  sd.prototype.set_InitData = function (e) {
    this.initData = e;
  };
  sd.prototype.get_UpdateOleOnResize = function () {
    return this.lcb;
  };
  sd.prototype.set_UpdateOleOnResize = function (e) {
    this.lcb = e;
  };
  sd.prototype.get_Buttons = function () {
    return this.buttons;
  };
  sd.prototype.set_Buttons =
    function (e) {
      this.buttons = e;
    };
  sd.prototype.get_Size = function () {
    return this.size;
  };
  sd.prototype.set_Size = function (e) {
    this.size = e;
  };
  sd.prototype.get_InitOnSelectionChanged = function () {
    return this.Vbb;
  };
  sd.prototype.set_InitOnSelectionChanged = function (e) {
    this.Vbb = e;
  };
  sd.prototype.get_Events = function () {
    return this.WPb;
  };
  sd.prototype.set_Events = function (e) {
    if (e) for (this.WPb = e.slice(0, e.length), this.aoc = {}, e = 0; e < this.WPb.length; e++) this.aoc[this.WPb[e]] = !0;
  };
  sd.prototype.serialize = function () {
    var e = {};
    e.description =
      this.description;
    e.url = this.url;
    e.index = this.index;
    e.icons = this.Zub;
    e.isViewer = this.pvb;
    e.EditorsSupport = this.Glb;
    e.isSystem = this.IH;
    e.isVisual = this.mcb;
    e.isModal = this.mvb;
    e.isInsideMode = this.kvb;
    e.isCustomWindow = this.ivb;
    e.initDataType = this.initDataType;
    e.initData = this.initData;
    e.isUpdateOleOnResize = this.lcb;
    e.buttons = this.buttons;
    e.size = this.size;
    e.initOnSelectionChanged = this.Vbb;
    return e;
  };
  sd.prototype.deserialize = function (e) {
    this.description = null != e.description ? e.description : this.description;
    this.url =
      null != e.url ? e.url : this.url;
    this.index = null != e.index ? e.index : this.index;
    this.Zub = null != e.icons ? e.icons : this.Zub;
    this.pvb = null != e.isViewer ? e.isViewer : this.pvb;
    this.Glb = null != e.EditorsSupport ? e.EditorsSupport : this.Glb;
    this.mcb = null != e.isVisual ? e.isVisual : this.mcb;
    this.mvb = null != e.isModal ? e.isModal : this.mvb;
    this.kvb = null != e.isInsideMode ? e.isInsideMode : this.kvb;
    this.ivb = null != e.isCustomWindow ? e.isCustomWindow : this.ivb;
    this.initDataType = null != e.initDataType ? e.initDataType : this.initDataType;
    this.initData =
      null != e.initData ? e.initData : this.initData;
    this.lcb = null != e.isUpdateOleOnResize ? e.isUpdateOleOnResize : this.lcb;
    this.buttons = null != e.buttons ? e.buttons : this.buttons;
    this.size = null != e.size ? e.size : this.size;
    this.Vbb = null != e.initOnSelectionChanged ? e.initOnSelectionChanged : this.Vbb;
  };
  Hf.prototype.get_Name = function () {
    return this.name;
  };
  Hf.prototype.set_Name = function (e) {
    this.name = e;
  };
  Hf.prototype.get_Guid = function () {
    return this.Yy;
  };
  Hf.prototype.set_Guid = function (e) {
    this.Yy = e;
  };
  Hf.prototype.get_BaseUrl = function () {
    return this.wta;
  };
  Hf.prototype.set_BaseUrl = function (e) {
    this.wta = e;
  };
  Hf.prototype.get_Variations = function () {
    return this.bV;
  };
  Hf.prototype.set_Variations = function (e) {
    this.bV = e;
  };
  Hf.prototype.serialize = function () {
    var e = {};
    e.name = this.name;
    e.guid = this.Yy;
    e.baseUrl = this.wta;
    e.variations = [];
    for (var f = 0; f < this.bV.length; f++) e.variations.push(this.bV[f].serialize());
    return e;
  };
  Hf.prototype.deserialize = function (e) {
    this.name = null != e.name ? e.name : this.name;
    this.Yy = null != e.guid ? e.guid : this.Yy;
    this.wta = null != e.baseUrl ? e.baseUrl : this.wta;
    this.bV = [];
    for (var f = 0; f < e.variations.length; f++) {
      var w = new sd;
      w.deserialize(e.variations[f]);
      this.bV.push(w);
    }
  };
  f.AscCommon = f.AscCommon || {};
  f.Asc = f.Asc || {};
  f.Asc.c_oAscArrUserColors = f.Asc.Lkd = [16757719, 7929702, 56805, 10081791, 12884479, 16751001, 6748927, 16762931, 6865407, 15650047, 16737894, 3407768, 16759142, 10852863, 6750176, 16774656, 13926655, 13815039, 3397375, 11927347, 16752947, 9404671, 4980531, 16744678, 3407830, 15919360, 16731553, 52479, 13330175, 16743219, 3386367, 14221056, 16737966, 1896960, 65484, 10970879, 16759296,
    16711680, 13496832, 62072, 49906, 16734720, 10682112, 7890687, 16731610, 65406, 38655, 16747008, 59890, 12733951, 15859712, 47077, 15050496, 15224319, 10154496, 58807, 16724950, 1759488, 9981439, 15064320, 15893248, 16724883, 58737, 15007744, 36594, 12772608, 12137471, 6442495, 15039488, 16718470, 14274816, 53721, 16718545, 1625088, 15881472, 13419776, 32985, 16711800, 1490688, 16711884, 8991743, 13407488, 41932, 7978752, 15028480, 52387, 15007927, 12114176, 1421824, 55726, 13041893, 10665728, 30924, 49049, 14241024, 36530, 11709440, 13397504, 45710, 34214];
  f.AscCommon.rPa = Pa;
  f.AscCommon.FGb = ab;
  f.AscCommon.uRa = function () {
    function e() {
      return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }

    var f = '{' + e() + e() + '-' + e() + '-' + e() + '-' + e() + '-' + e() + e() + e() + '}';
    return f = f.toUpperCase();
  };
  f.AscCommon.KEd = function () {
    return Math.floor(4294967296 * Math.random());
  };
  w = f.Asc.c_oLicenseResult = f.Asc.thg = Nn;
  w.Error = w.Error;
  w.Expired = w.iae;
  w.Success = w.Tye;
  w.UnknownUser = w.rBe;
  w.Connections = w.vGb;
  w.ExpiredTrial = w.jae;
  w.SuccessLimit = w.Uye;
  w.UsersCount = w.UBe;
  w.ConnectionsOS =
    w.z8d;
  w.UsersCountOS = w.VBe;
  w = f.Asc.c_oRights = f.Asc.uhg = dj;
  w.None = w.Af;
  w.Edit = w.W$d;
  w.Review = w.Pte;
  w.Comment = w.Comment;
  w.View = w.npb;
  w = f.Asc.c_oLicenseMode = f.Asc.shg = Qi;
  w.None = w.Af;
  w.Trial = w.jBe;
  w.Developer = w.z$d;
  w = f.Asc.EPluginDataType = f.Asc.m$b = Uj;
  w.none = w.pr;
  w.text = w.text;
  w.ole = w.Dff;
  w.html = w.html;
  f.AscCommon.asc_CSignatureLine = f.AscCommon.Uhd = bb;
  w = bb.prototype;
  w.asc_getId = w.zD;
  w.asc_setId = w.FYe;
  w.asc_getGuid = w.s3a;
  w.asc_setGuid = w.DYe;
  w.asc_getSigner1 = w.Dkc;
  w.asc_setSigner1 = w.vZe;
  w.asc_getSigner2 =
    w.Ekc;
  w.asc_setSigner2 = w.wZe;
  w.asc_getEmail = w.okc;
  w.asc_setEmail = w.vYe;
  w.asc_getInstructions = w.CSe;
  w.asc_setInstructions = w.HYe;
  w.asc_getShowDate = w.GUe;
  w.asc_setShowDate = w.sZe;
  w.asc_getValid = w.uVe;
  w.asc_setValid = w.zZe;
  w.asc_getDate = w.zRe;
  w.asc_setDate = w.mYe;
  w.asc_getVisible = w.bId;
  w.asc_setVisible = w.DOc;
  w.asc_getRequested = w.sUe;
  w.asc_setRequested = w.mZe;
  f.AscCommon.ckc = nb;
  w = nb.prototype;
  w.asc_getLicenseType = w.fTe;
  w.asc_getCanCoAuthoring = w.HQe;
  w.asc_getCanReaderMode = w.JQe;
  w.asc_getCanBranding = w.GQe;
  w.asc_getCustomization =
    w.vRe;
  w.asc_getIsAutosaveEnable = w.GSe;
  w.asc_getAutosaveMinInterval = w.rQe;
  w.asc_getIsAnalyticsEnable = w.DSe;
  w.asc_getIsLight = w.RSe;
  w.asc_getLicenseMode = w.eTe;
  w.asc_getRights = w.wUe;
  w.asc_getBuildVersion = w.yQe;
  w.asc_getBuildNumber = w.xQe;
  f.AscCommon.yVa = Da;
  w = Da.prototype;
  w.putMinValRule = w.Moa;
  w.putMinVal = w.gNa;
  w.putMaxValRule = w.mDa;
  w.putMaxVal = w.Ndb;
  w.putInvertValOrder = w.mxb;
  w.putLogScale = w.oDc;
  w.putLogBase = w.Qxd;
  w.putUnits = w.Rxd;
  w.putShowUnitsOnChart = w.nxb;
  w.putMajorTickMark = w.zea;
  w.putMinorTickMark =
    w.Aea;
  w.putTickLabelsPos = w.Bea;
  w.putCrossesRule = w.S0;
  w.putCrosses = w.tja;
  w.putDispUnitsRule = w.fNa;
  w.getDispUnitsRule = w.V6e;
  w.putAxisType = w.nDc;
  w.getAxisType = w.FS;
  w.getMinValRule = w.F7e;
  w.getMinVal = w.E7e;
  w.getMaxValRule = w.B7e;
  w.getMaxVal = w.A7e;
  w.getInvertValOrder = w.m7e;
  w.getLogScale = w.y7e;
  w.getLogBase = w.x7e;
  w.getUnits = w.zpd;
  w.getShowUnitsOnChart = w.e8e;
  w.getMajorTickMark = w.EQb;
  w.getMinorTickMark = w.GQb;
  w.getTickLabelsPos = w.RQb;
  w.getCrossesRule = w.BQb;
  w.getCrosses = w.AQb;
  w.setDefault = w.OH;
  f.AscCommon.zqb =
    Ha;
  w = Ha.prototype;
  w.putIntervalBetweenTick = w.Ldb;
  w.putIntervalBetweenLabelsRule = w.Kdb;
  w.putIntervalBetweenLabels = w.Pxd;
  w.putInvertCatOrder = w.mYb;
  w.putLabelsAxisDistance = w.Mdb;
  w.putMajorTickMark = w.zea;
  w.putMinorTickMark = w.Aea;
  w.putTickLabelsPos = w.Bea;
  w.putCrossesRule = w.S0;
  w.putCrosses = w.tja;
  w.putAxisType = w.nDc;
  w.putLabelsPosition = w.Loa;
  w.putCrossMaxVal = w.Nxd;
  w.putCrossMinVal = w.Oxd;
  w.getIntervalBetweenTick = w.Yod;
  w.getIntervalBetweenLabelsRule = w.Xod;
  w.getIntervalBetweenLabels = w.Wod;
  w.getInvertCatOrder =
    w.Zod;
  w.getLabelsAxisDistance = w.$od;
  w.getMajorTickMark = w.EQb;
  w.getMinorTickMark = w.GQb;
  w.getTickLabelsPos = w.RQb;
  w.getCrossesRule = w.BQb;
  w.getCrosses = w.AQb;
  w.getAxisType = w.FS;
  w.getLabelsPosition = w.apd;
  w.getCrossMaxVal = w.N6e;
  w.getCrossMinVal = w.O6e;
  w.setDefault = w.OH;
  f.Asc.asc_ChartSettings = f.Asc.eka = Eb;
  w = Eb.prototype;
  w.putStyle = w.sDc;
  w.putTitle = w.Qdb;
  w.putRowCols = w.Bkf;
  w.putHorAxisLabel = w.lxb;
  w.putVertAxisLabel = w.oxb;
  w.putLegendPos = w.nYb;
  w.putDataLabelsPos = w.kxb;
  w.putCatAx = w.Akf;
  w.putValAx = w.Ckf;
  w.getStyle =
    w.f2;
  w.getTitle = w.Ona;
  w.getRowCols = w.W7e;
  w.getHorAxisLabel = w.Tod;
  w.getVertAxisLabel = w.Cpd;
  w.getLegendPos = w.cpd;
  w.getDataLabelsPos = w.X$a;
  w.getHorAx = w.f7e;
  w.getVertAx = w.u8e;
  w.getHorGridLines = w.Uod;
  w.putHorGridLines = w.Idb;
  w.getVertGridLines = w.Dpd;
  w.putVertGridLines = w.Sdb;
  w.getType = w.vm;
  w.putType = w.Rdb;
  w.putShowSerName = w.qDc;
  w.getShowSerName = w.d8e;
  w.putShowCatName = w.pDc;
  w.getShowCatName = w.b8e;
  w.putShowVal = w.rDc;
  w.getShowVal = w.f8e;
  w.putSeparator = w.oYb;
  w.getSeparator = w.Z7e;
  w.putHorAxisProps = w.T0;
  w.getHorAxisProps =
    w.Qsb;
  w.putVertAxisProps = w.R7;
  w.getVertAxisProps = w.dtb;
  w.putRange = w.Cjb;
  w.getRange = w.TA;
  w.putInColumns = w.Jdb;
  w.getInColumns = w.Rsb;
  w.putShowMarker = w.Odb;
  w.getShowMarker = w.c8e;
  w.putLine = w.c_a;
  w.getLine = w.s7e;
  w.putSmooth = w.Pdb;
  w.getSmooth = w.j8e;
  w.changeType = w.xld;
  w.putShowHorAxis = w.uja;
  w.getShowHorAxis = w.Zoc;
  w.putShowVerAxis = w.Sua;
  w.getShowVerAxis = w.$oc;
  f.AscCommon.LFa = zb;
  w = zb.prototype;
  w.asc_getX = w.Gqb;
  w.asc_getY = w.Hqb;
  w.asc_getWidth = w.zda;
  w.asc_getHeight = w.yda;
  f.AscCommon.uL = Va;
  w = Va.prototype;
  w.getR =
    w.FN;
  w.get_r = w.N$e;
  w.put_r = w.wmf;
  w.getG = w.CZ;
  w.get_g = w.G$e;
  w.put_g = w.vmf;
  w.getB = w.BZ;
  w.get_b = w.B$e;
  w.put_b = w.umf;
  w.getA = w.P$a;
  w.get_hex = w.I$e;
  f.Asc.asc_CColor = f.Asc.Gxa = gb;
  w = gb.prototype;
  w.get_r = w.asc_getR = w.lDb;
  w.put_r = w.asc_putR = w.hlc;
  w.get_g = w.asc_getG = w.kDb;
  w.put_g = w.asc_putG = w.Zkc;
  w.get_b = w.asc_getB = w.jDb;
  w.put_b = w.asc_putB = w.Qkc;
  w.get_a = w.asc_getA = w.gQe;
  w.put_a = w.asc_putA = w.WIc;
  w.get_auto = w.asc_getAuto = w.pQe;
  w.put_auto = w.asc_putAuto = w.TVe;
  w.get_type = w.asc_getType = w.Sw;
  w.put_type = w.asc_putType =
    w.hfa;
  w.get_value = w.asc_getValue = w.nKa;
  w.put_value = w.asc_putValue = w.BVa;
  w.get_hex = w.asc_getHex = w.nid;
  w.get_color = w.asc_getColor = w.kW;
  w.get_hex = w.asc_getHex = w.nid;
  f.Asc.asc_CTextBorder = f.Asc.Yha = Za;
  w = Za.prototype;
  w.get_Color = w.asc_getColor = w.kW;
  w.put_Color = w.asc_putColor = w.AVa;
  w.get_Size = w.asc_getSize = w.Fkc;
  w.put_Size = w.asc_putSize = w.jXe;
  w.get_Value = w.asc_getValue = w.nKa;
  w.put_Value = w.asc_putValue = w.BVa;
  w.get_Space = w.asc_getSpace = w.RUe;
  w.put_Space = w.asc_putSpace = w.nXe;
  w.get_ForSelectedCells = w.asc_getForSelectedCells =
    w.ZRe;
  w.put_ForSelectedCells = w.asc_putForSelectedCells = w.nWe;
  f.Asc.asc_CParagraphBorders = bc;
  w = bc.prototype;
  w.get_Left = w.asc_getLeft = w.y8;
  w.put_Left = w.asc_putLeft = w.Jqb;
  w.get_Top = w.asc_getTop = w.A8;
  w.put_Top = w.asc_putTop = w.llc;
  w.get_Right = w.asc_getRight = w.z8;
  w.put_Right = w.asc_putRight = w.Kqb;
  w.get_Bottom = w.asc_getBottom = w.ffa;
  w.put_Bottom = w.asc_putBottom = w.Skc;
  w.get_Between = w.asc_getBetween = w.uQe;
  w.put_Between = w.asc_putBetween = w.UVe;
  f.AscCommon.BPe = Nc;
  w = Nc.prototype;
  w.get_ListType = w.asc_getListType =
    w.rTe;
  w.get_ListSubType = w.asc_getListSubType = w.qTe;
  f.AscCommon.Zzb = cc;
  f.AscCommon.asc_CTextFontFamily = cc;
  w = cc.prototype;
  w.get_Name = w.asc_getName = w.AOa = w.aD;
  w.get_Index = w.asc_getIndex = w.$zf = w.Qka;
  w.put_Name = w.asc_putName = w.qBb = w.RWe;
  w.put_Index = w.asc_putIndex = w.Oqg = w.BWe;
  f.Asc.asc_CParagraphTab = f.Asc.Cfg = Rb;
  w = Rb.prototype;
  w.get_Value = w.asc_getValue = w.nKa;
  w.put_Value = w.asc_putValue = w.BVa;
  w.get_Pos = w.asc_getPos = w.hUe;
  w.put_Pos = w.asc_putPos = w.$We;
  w.get_Leader = w.asc_getLeader = w.dTe;
  w.put_Leader = w.asc_putLeader =
    w.LWe;
  f.Asc.asc_CParagraphTabs = f.Asc.Dfg = ob;
  w = ob.prototype;
  w.get_Count = w.asc_getCount = w.nkc;
  w.get_Tab = w.asc_getTab = w.bVe;
  w.add_Tab = w.asc_addTab = w.YPe;
  w.clear = w.clear = w.asc_clear = w.$Pe;
  f.Asc.asc_CParagraphShd = f.Asc.vOc = Ra;
  w = Ra.prototype;
  w.get_Value = w.asc_getValue = w.nKa;
  w.put_Value = w.asc_putValue = w.BVa;
  w.get_Color = w.asc_getColor = w.kW;
  w.put_Color = w.asc_putColor = w.AVa;
  f.Asc.asc_CParagraphFrame = f.Asc.Bfg = Ia;
  w = Ia.prototype;
  w.asc_getDropCap = w.get_DropCap = w.JRe;
  w.asc_putDropCap = w.put_DropCap = w.iWe;
  w.asc_getH =
    w.get_H = w.nSe;
  w.asc_putH = w.put_H = w.vWe;
  w.asc_getHAnchor = w.get_HAnchor = w.oSe;
  w.asc_putHAnchor = w.put_HAnchor = w.wWe;
  w.asc_getHRule = w.get_HRule = w.pSe;
  w.asc_putHRule = w.put_HRule = w.xWe;
  w.asc_getHSpace = w.get_HSpace = w.qSe;
  w.asc_putHSpace = w.put_HSpace = w.yWe;
  w.asc_getLines = w.get_Lines = w.vkc;
  w.asc_putLines = w.put_Lines = w.OWe;
  w.asc_getVAnchor = w.get_VAnchor = w.qVe;
  w.asc_putVAnchor = w.put_VAnchor = w.DXe;
  w.asc_getVSpace = w.get_VSpace = w.sVe;
  w.asc_putVSpace = w.put_VSpace = w.FXe;
  w.asc_getW = w.get_W = w.zVe;
  w.asc_putW = w.put_W =
    w.HXe;
  w.asc_getWrap = w.get_Wrap = w.CVe;
  w.asc_putWrap = w.put_Wrap = w.JXe;
  w.asc_getX = w.get_X = w.Gqb;
  w.asc_putX = w.put_X = w.KXe;
  w.asc_getXAlign = w.get_XAlign = w.FVe;
  w.asc_putXAlign = w.put_XAlign = w.LXe;
  w.asc_getY = w.get_Y = w.Hqb;
  w.asc_putY = w.put_Y = w.MXe;
  w.asc_getYAlign = w.get_YAlign = w.GVe;
  w.asc_putYAlign = w.put_YAlign = w.NXe;
  w.asc_getBorders = w.get_Borders = w.Cqb;
  w.asc_putBorders = w.put_Borders = w.Rkc;
  w.asc_getShade = w.get_Shade = w.Ckc;
  w.asc_putShade = w.put_Shade = w.klc;
  w.asc_getFontFamily = w.get_FontFamily = w.TRe;
  w.asc_putFontFamily =
    w.put_FontFamily = w.mWe;
  w.asc_putFromDropCapMenu = w.put_FromDropCapMenu = w.qWe;
  f.AscCommon.LNb = Ab;
  w = Ab.prototype;
  w.get_Line = w.asc_getLine = w.TNb;
  w.get_LineRule = w.asc_getLineRule = w.gTe;
  w.get_Before = w.asc_getBefore = w.tQe;
  w.get_After = w.asc_getAfter = w.hQe;
  f.Asc.asc_CParagraphInd = f.Asc.uOc = $d;
  w = $d.prototype;
  w.get_Left = w.asc_getLeft = w.y8;
  w.put_Left = w.asc_putLeft = w.Jqb;
  w.get_Right = w.asc_getRight = w.z8;
  w.put_Right = w.asc_putRight = w.Kqb;
  w.get_FirstLine = w.asc_getFirstLine = w.RRe;
  w.put_FirstLine = w.asc_putFirstLine =
    w.kWe;
  f.Asc.asc_CParagraphProperty = f.Asc.p9a = re;
  w = re.prototype;
  w.get_ContextualSpacing = w.asc_getContextualSpacing = w.nRe;
  w.put_ContextualSpacing = w.asc_putContextualSpacing = w.dWe;
  w.get_Ind = w.asc_getInd = w.ASe;
  w.put_Ind = w.asc_putInd = w.AWe;
  w.get_Jc = w.asc_getJc = w.USe;
  w.put_Jc = w.asc_putJc = w.CWe;
  w.get_KeepLines = w.asc_getKeepLines = w.VSe;
  w.put_KeepLines = w.asc_putKeepLines = w.DWe;
  w.get_KeepNext = w.asc_getKeepNext = w.WSe;
  w.put_KeepNext = w.asc_putKeepNext = w.EWe;
  w.get_PageBreakBefore = w.asc_getPageBreakBefore = w.XTe;
  w.put_PageBreakBefore = w.asc_putPageBreakBefore = w.UWe;
  w.get_WidowControl = w.asc_getWidowControl = w.AVe;
  w.put_WidowControl = w.asc_putWidowControl = w.IXe;
  w.get_Spacing = w.asc_getSpacing = w.SUe;
  w.put_Spacing = w.asc_putSpacing = w.oXe;
  w.get_Borders = w.asc_getBorders = w.Cqb;
  w.put_Borders = w.asc_putBorders = w.Rkc;
  w.get_Shade = w.asc_getShade = w.Ckc;
  w.put_Shade = w.asc_putShade = w.klc;
  w.get_Locked = w.asc_getLocked = w.zVa;
  w.get_CanAddTable = w.asc_getCanAddTable = w.EQe;
  w.get_Subscript = w.asc_getSubscript = w.Gkc;
  w.put_Subscript = w.asc_putSubscript =
    w.tXe;
  w.get_Superscript = w.asc_getSuperscript = w.Hkc;
  w.put_Superscript = w.asc_putSuperscript = w.uXe;
  w.get_SmallCaps = w.asc_getSmallCaps = w.QUe;
  w.put_SmallCaps = w.asc_putSmallCaps = w.mXe;
  w.get_AllCaps = w.asc_getAllCaps = w.iQe;
  w.put_AllCaps = w.asc_putAllCaps = w.RVe;
  w.get_Strikeout = w.asc_getStrikeout = w.E4b;
  w.put_Strikeout = w.asc_putStrikeout = w.pXe;
  w.get_DStrikeout = w.asc_getDStrikeout = w.wRe;
  w.put_DStrikeout = w.asc_putDStrikeout = w.gWe;
  w.get_TextSpacing = w.asc_getTextSpacing = w.iVe;
  w.put_TextSpacing = w.asc_putTextSpacing =
    w.yXe;
  w.get_Position = w.asc_getPosition = w.Fqb;
  w.put_Position = w.asc_putPosition = w.glc;
  w.get_Tabs = w.asc_getTabs = w.dVe;
  w.put_Tabs = w.asc_putTabs = w.vXe;
  w.get_DefaultTab = w.asc_getDefaultTab = w.BRe;
  w.put_DefaultTab = w.asc_putDefaultTab = w.hWe;
  w.get_FramePr = w.asc_getFramePr = w.eSe;
  w.put_FramePr = w.asc_putFramePr = w.pWe;
  w.get_CanAddDropCap = w.asc_getCanAddDropCap = w.CQe;
  w.get_CanAddImage = w.asc_getCanAddImage = w.DQe;
  w.get_OutlineLvl = w.asc_getOutlineLvl = w.VTe;
  w.put_OutlineLvl = w.asc_putOutLineLvl = w.TWe;
  w.get_OutlineLvlStyle =
    w.asc_getOutlineLvlStyle = w.WTe;
  f.AscCommon.DPe = ie;
  w = ie.prototype;
  w.get_id = w.asc_getId = w.zD;
  w.get_image = w.asc_getImage = w.ukc;
  f.AscCommon.ekc = xf;
  w = xf.prototype;
  w.get_ImageWidth = w.asc_getImageWidth = w.pid;
  w.get_ImageHeight = w.asc_getImageHeight = w.oid;
  w.get_IsCorrect = w.asc_getIsCorrect = w.HSe;
  f.Asc.asc_CPaddings = f.Asc.o9a = Wc;
  w = Wc.prototype;
  w.get_Left = w.asc_getLeft = w.y8;
  w.put_Left = w.asc_putLeft = w.Jqb;
  w.get_Top = w.asc_getTop = w.A8;
  w.put_Top = w.asc_putTop = w.llc;
  w.get_Bottom = w.asc_getBottom = w.ffa;
  w.put_Bottom =
    w.asc_putBottom = w.Skc;
  w.get_Right = w.asc_getRight = w.z8;
  w.put_Right = w.asc_putRight = w.Kqb;
  f.Asc.asc_CShapeProperty = f.Asc.r3a = Pi;
  w = Pi.prototype;
  w.get_type = w.asc_getType = w.Sw;
  w.put_type = w.asc_putType = w.hfa;
  w.get_fill = w.asc_getFill = w.NFa;
  w.put_fill = w.asc_putFill = w.RPa;
  w.get_stroke = w.asc_getStroke = w.WUe;
  w.put_stroke = w.asc_putStroke = w.qXe;
  w.get_paddings = w.asc_getPaddings = w.zkc;
  w.put_paddings = w.asc_putPaddings = w.flc;
  w.get_CanFill = w.asc_getCanFill = w.IQe;
  w.put_CanFill = w.asc_putCanFill = w.WVe;
  w.get_CanChangeArrows =
    w.asc_getCanChangeArrows = w.kkc;
  w.set_CanChangeArrows = w.asc_setCanChangeArrows = w.YXe;
  w.get_FromChart = w.asc_getFromChart = w.fSe;
  w.set_FromChart = w.asc_setFromChart = w.BYe;
  w.get_Locked = w.asc_getLocked = w.zVa;
  w.set_Locked = w.asc_setLocked = w.SYe;
  w.get_Width = w.asc_getWidth = w.zda;
  w.put_Width = w.asc_putWidth = w.Lqb;
  w.get_Height = w.asc_getHeight = w.yda;
  w.put_Height = w.asc_putHeight = w.alc;
  w.get_VerticalTextAlign = w.asc_getVerticalTextAlign = w.Lkc;
  w.put_VerticalTextAlign = w.asc_putVerticalTextAlign = w.nlc;
  w.get_Vert = w.asc_getVert =
    w.Kkc;
  w.put_Vert = w.asc_putVert = w.mlc;
  w.get_TextArtProperties = w.asc_getTextArtProperties = w.hVe;
  w.put_TextArtProperties = w.asc_putTextArtProperties = w.xXe;
  w.get_LockAspect = w.asc_getLockAspect = w.wkc;
  w.put_LockAspect = w.asc_putLockAspect = w.dlc;
  w.get_Title = w.asc_getTitle = w.gfa;
  w.put_Title = w.asc_putTitle = w.oKa;
  w.get_Description = w.asc_getDescription = w.xEa;
  w.put_Description = w.asc_putDescription = w.Iqb;
  w.get_ColumnNumber = w.asc_getColumnNumber = w.lkc;
  w.put_ColumnNumber = w.asc_putColumnNumber = w.Tkc;
  w.get_ColumnSpace =
    w.asc_getColumnSpace = w.mkc;
  w.put_ColumnSpace = w.asc_putColumnSpace = w.Ukc;
  w.get_SignatureId = w.asc_getSignatureId = w.VNb;
  w.put_SignatureId = w.asc_putSignatureId = w.iXe;
  w.get_FromImage = w.asc_getFromImage = w.gSe;
  w.put_FromImage = w.asc_putFromImage = w.rWe;
  w.get_Rot = w.asc_getRot = w.Akc;
  w.put_Rot = w.asc_putRot = w.ilc;
  w.get_RotAdd = w.asc_getRotAdd = w.Bkc;
  w.put_RotAdd = w.asc_putRotAdd = w.jlc;
  w.get_FlipH = w.asc_getFlipH = w.pkc;
  w.put_FlipH = w.asc_putFlipH = w.Vkc;
  w.get_FlipV = w.asc_getFlipV = w.rkc;
  w.put_FlipV = w.asc_putFlipV = w.Xkc;
  w.get_FlipHInvert = w.asc_getFlipHInvert = w.qkc;
  w.put_FlipHInvert = w.asc_putFlipHInvert = w.Wkc;
  w.get_FlipVInvert = w.asc_getFlipVInvert = w.skc;
  w.put_FlipVInvert = w.asc_putFlipVInvert = w.Ykc;
  w.put_shadow = w.crg = w.asc_putShadow = w.Sid;
  w.get_shadow = w.slg = w.asc_getShadow = w.Aid;
  f.Asc.asc_TextArtProperties = f.Asc.xOc = Jd;
  w = Jd.prototype;
  w.asc_putFill = w.RPa;
  w.asc_getFill = w.NFa;
  w.asc_putLine = w.Kid;
  w.asc_getLine = w.TNb;
  w.asc_putForm = w.Iid;
  w.asc_getForm = w.B4b;
  w.asc_putStyle = w.rXe;
  w.asc_getStyle = w.WNb;
  f.Asc.CImagePositionH =
    f.Asc.Y5d = eg;
  w = eg.prototype;
  w.get_RelativeFrom = w.mXa;
  w.put_RelativeFrom = w.nDa;
  w.get_UseAlign = w.nXa;
  w.put_UseAlign = w.tGa;
  w.get_Align = w.gea;
  w.put_Align = w.H8;
  w.get_Value = w.nP;
  w.put_Value = w.xM;
  w.get_Percent = w.Apc;
  w.put_Percent = w.CDc;
  f.Asc.CImagePositionV = f.Asc.Z5d = Ye;
  w = Ye.prototype;
  w.get_RelativeFrom = w.mXa;
  w.put_RelativeFrom = w.nDa;
  w.get_UseAlign = w.nXa;
  w.put_UseAlign = w.tGa;
  w.get_Align = w.gea;
  w.put_Align = w.H8;
  w.get_Value = w.nP;
  w.put_Value = w.xM;
  w.get_Percent = w.Apc;
  w.put_Percent = w.CDc;
  f.Asc.CPosition = f.Asc.bPd =
    af;
  w = af.prototype;
  w.get_X = w.Xxa;
  w.put_X = w.rmf;
  w.get_Y = w.Yxa;
  w.put_Y = w.tmf;
  f.Asc.asc_CImgProperty = f.Asc.x8 = Qf;
  w = Qf.prototype;
  w.get_ChangeLevel = w.asc_getChangeLevel = w.PQe;
  w.put_ChangeLevel = w.asc_putChangeLevel = w.YVe;
  w.get_CanBeFlow = w.asc_getCanBeFlow = w.FQe;
  w.get_Width = w.asc_getWidth = w.zda;
  w.put_Width = w.asc_putWidth = w.Lqb;
  w.get_Height = w.asc_getHeight = w.yda;
  w.put_Height = w.asc_putHeight = w.alc;
  w.get_WrappingStyle = w.asc_getWrappingStyle = w.EVe;
  w.put_WrappingStyle = w.asc_putWrappingStyle = w.OTd;
  w.get_Paddings =
    w.asc_getPaddings = w.zkc;
  w.put_Paddings = w.asc_putPaddings = w.flc;
  w.get_AllowOverlap = w.asc_getAllowOverlap = w.jQe;
  w.put_AllowOverlap = w.asc_putAllowOverlap = w.SVe;
  w.get_Position = w.asc_getPosition = w.Fqb;
  w.put_Position = w.asc_putPosition = w.glc;
  w.get_PositionH = w.asc_getPositionH = w.iUe;
  w.put_PositionH = w.asc_putPositionH = w.Pid;
  w.get_PositionV = w.asc_getPositionV = w.jUe;
  w.put_PositionV = w.asc_putPositionV = w.Qid;
  w.get_SizeRelH = w.asc_getSizeRelH = w.NUe;
  w.put_SizeRelH = w.asc_putSizeRelH = w.kXe;
  w.get_SizeRelV = w.asc_getSizeRelV =
    w.OUe;
  w.put_SizeRelV = w.asc_putSizeRelV = w.lXe;
  w.get_Value_X = w.asc_getValue_X = w.vVe;
  w.get_Value_Y = w.asc_getValue_Y = w.wVe;
  w.get_ImageUrl = w.asc_getImageUrl = w.ySe;
  w.put_ImageUrl = w.asc_putImageUrl = w.Jid;
  w.get_Group = w.asc_getGroup = w.lSe;
  w.put_Group = w.asc_putGroup = w.uWe;
  w.get_FromGroup = w.asc_getFromGroup = w.ZHd;
  w.put_FromGroup = w.asc_putFromGroup = w.dId;
  w.get_isChartProps = w.asc_getisChartProps = w.HVe;
  w.put_isChartPross = w.asc_putisChartPross = w.OXe;
  w.get_SeveralCharts = w.asc_getSeveralCharts = w.DUe;
  w.put_SeveralCharts =
    w.asc_putSeveralCharts = w.gXe;
  w.get_SeveralChartTypes = w.asc_getSeveralChartTypes = w.CUe;
  w.put_SeveralChartTypes = w.asc_putSeveralChartTypes = w.fXe;
  w.get_SeveralChartStyles = w.asc_getSeveralChartStyles = w.BUe;
  w.put_SeveralChartStyles = w.asc_putSeveralChartStyles = w.eXe;
  w.get_VerticalTextAlign = w.asc_getVerticalTextAlign = w.Lkc;
  w.put_VerticalTextAlign = w.asc_putVerticalTextAlign = w.nlc;
  w.get_Vert = w.asc_getVert = w.Kkc;
  w.put_Vert = w.asc_putVert = w.mlc;
  w.get_Locked = w.asc_getLocked = w.zVa;
  w.getLockAspect = w.asc_getLockAspect =
    w.wkc;
  w.putLockAspect = w.asc_putLockAspect = w.dlc;
  w.get_ChartProperties = w.asc_getChartProperties = w.UQe;
  w.put_ChartProperties = w.asc_putChartProperties = w.ZVe;
  w.get_ShapeProperties = w.asc_getShapeProperties = w.EUe;
  w.put_ShapeProperties = w.asc_putShapeProperties = w.hXe;
  w.get_OriginSize = w.asc_getOriginSize = w.q9a;
  w.get_PluginGuid = w.asc_getPluginGuid = w.gUe;
  w.put_PluginGuid = w.asc_putPluginGuid = w.ZWe;
  w.get_PluginData = w.asc_getPluginData = w.fUe;
  w.put_PluginData = w.asc_putPluginData = w.YWe;
  w.get_Rot = w.asc_getRot = w.Akc;
  w.put_Rot = w.asc_putRot = w.ilc;
  w.get_RotAdd = w.asc_getRotAdd = w.Bkc;
  w.put_RotAdd = w.asc_putRotAdd = w.jlc;
  w.get_FlipH = w.asc_getFlipH = w.pkc;
  w.put_FlipH = w.asc_putFlipH = w.Vkc;
  w.get_FlipV = w.asc_getFlipV = w.rkc;
  w.put_FlipV = w.asc_putFlipV = w.Xkc;
  w.get_FlipHInvert = w.asc_getFlipHInvert = w.qkc;
  w.put_FlipHInvert = w.asc_putFlipHInvert = w.Wkc;
  w.get_FlipVInvert = w.asc_getFlipVInvert = w.skc;
  w.put_FlipVInvert = w.asc_putFlipVInvert = w.Ykc;
  w.put_ResetCrop = w.asc_putResetCrop = w.cXe;
  w.get_Title = w.asc_getTitle = w.gfa;
  w.put_Title = w.asc_putTitle =
    w.oKa;
  w.get_Description = w.asc_getDescription = w.xEa;
  w.put_Description = w.asc_putDescription = w.Iqb;
  w.get_ColumnNumber = w.asc_getColumnNumber = w.lkc;
  w.put_ColumnNumber = w.asc_putColumnNumber = w.Tkc;
  w.get_ColumnSpace = w.asc_getColumnSpace = w.mkc;
  w.put_ColumnSpace = w.asc_putColumnSpace = w.Ukc;
  w.asc_getSignatureId = w.asc_getSignatureId = w.VNb;
  f.AscCommon.Yzb = sh;
  w = sh.prototype;
  w.get_ObjectType = w.asc_getObjectType = w.STe;
  w.get_ObjectValue = w.asc_getObjectValue = w.TTe;
  f.Asc.asc_CShapeFill = f.Asc.o1a = Mf;
  w = Mf.prototype;
  w.get_type =
    w.asc_getType = w.Sw;
  w.put_type = w.asc_putType = w.hfa;
  w.get_fill = w.asc_getFill = w.NFa;
  w.put_fill = w.asc_putFill = w.RPa;
  w.get_transparent = w.asc_getTransparent = w.oVe;
  w.put_transparent = w.asc_putTransparent = w.BXe;
  w.asc_CheckForseSet = w.asc_CheckForseSet = w.fkc;
  f.Asc.asc_CFillBlip = f.Asc.O0b = sb;
  w = sb.prototype;
  w.get_type = w.asc_getType = w.Sw;
  w.put_type = w.asc_putType = w.hfa;
  w.get_url = w.asc_getUrl = w.XNb;
  w.put_url = w.asc_putUrl = w.jOa;
  w.get_texture_id = w.asc_getTextureId = w.Bid;
  w.put_texture_id = w.asc_putTextureId = w.zXe;
  f.Asc.asc_CFillHatch =
    f.Asc.APe = xc;
  w = xc.prototype;
  w.get_pattern_type = w.asc_getPatternType = w.bUe;
  w.put_pattern_type = w.asc_putPatternType = w.WWe;
  w.get_color_fg = w.asc_getColorFg = w.$Qe;
  w.put_color_fg = w.asc_putColorFg = w.aWe;
  w.get_color_bg = w.asc_getColorBg = w.ZQe;
  w.put_color_bg = w.asc_putColorBg = w.$Ve;
  f.Asc.asc_CFillGrad = f.Asc.Shd = Ce;
  w = Ce.prototype;
  w.get_colors = w.asc_getColors = w.iRe;
  w.put_colors = w.asc_putColors = w.bWe;
  w.get_positions = w.asc_getPositions = w.kUe;
  w.put_positions = w.asc_putPositions = w.aXe;
  w.get_grad_type = w.asc_getGradType =
    w.iSe;
  w.put_grad_type = w.asc_putGradType = w.tWe;
  w.get_linear_angle = w.asc_getLinearAngle = w.hTe;
  w.put_linear_angle = w.asc_putLinearAngle = w.MWe;
  w.get_linear_scale = w.asc_getLinearScale = w.iTe;
  w.put_linear_scale = w.asc_putLinearScale = w.NWe;
  w.get_path_type = w.asc_getPathType = w.$Te;
  w.put_path_type = w.asc_putPathType = w.VWe;
  f.Asc.asc_CFillSolid = f.Asc.dkc = he;
  w = he.prototype;
  w.get_color = w.asc_getColor = w.kW;
  w.put_color = w.asc_putColor = w.AVa;
  f.Asc.asc_CStroke = f.Asc.Vhd = De;
  w = De.prototype;
  w.get_type = w.asc_getType = w.Sw;
  w.put_type =
    w.asc_putType = w.hfa;
  w.get_width = w.asc_getWidth = w.zda;
  w.put_width = w.asc_putWidth = w.Lqb;
  w.get_color = w.asc_getColor = w.kW;
  w.put_color = w.asc_putColor = w.AVa;
  w.get_linejoin = w.asc_getLinejoin = w.oTe;
  w.put_linejoin = w.asc_putLinejoin = w.Oid;
  w.get_linecap = w.asc_getLinecap = w.lTe;
  w.put_linecap = w.asc_putLinecap = w.Mid;
  w.get_linebeginstyle = w.asc_getLinebeginstyle = w.kTe;
  w.put_linebeginstyle = w.asc_putLinebeginstyle = w.blc;
  w.get_linebeginsize = w.asc_getLinebeginsize = w.jTe;
  w.put_linebeginsize = w.asc_putLinebeginsize = w.Lid;
  w.get_lineendstyle = w.asc_getLineendstyle = w.nTe;
  w.put_lineendstyle = w.asc_putLineendstyle = w.clc;
  w.get_lineendsize = w.asc_getLineendsize = w.mTe;
  w.put_lineendsize = w.asc_putLineendsize = w.Nid;
  w.get_canChangeArrows = w.asc_getCanChangeArrows = w.kkc;
  w.put_prstDash = w.asc_putPrstDash = w.bXe;
  w.get_prstDash = w.asc_getPrstDash = w.oUe;
  f.AscCommon.pUc = be;
  w = be.prototype;
  w.get_colors = w.C$e;
  w.get_name = w.lQc;
  f.AscCommon.d6 = ge;
  w = ge.prototype;
  w.get_Type = w.BO;
  w.get_X = w.Xxa;
  w.get_Y = w.Yxa;
  w.get_Hyperlink = w.VQb;
  w.get_UserId = w.Aqa;
  w.get_HaveChanges = w.e9e;
  w.get_LockedObjectType = w.I9e;
  w.get_FootnoteText = w.b9e;
  w.get_FootnoteNumber = w.a9e;
  f.Asc.asc_CUserInfo = f.Asc.Gfg = ch;
  w = ch.prototype;
  w.asc_putId = w.put_Id = w.Q0b;
  w.asc_getId = w.get_Id = w.zD;
  w.asc_putFullName = w.put_FullName = w.sWe;
  w.asc_getFullName = w.get_FullName = w.hSe;
  w.asc_putFirstName = w.put_FirstName = w.lWe;
  w.asc_getFirstName = w.get_FirstName = w.RNb;
  w.asc_putLastName = w.put_LastName = w.JWe;
  w.asc_getLastName = w.get_LastName = w.SNb;
  f.Asc.asc_CDocInfo = f.Asc.zPe = Td;
  w = Td.prototype;
  w.get_Id = w.asc_getId =
    w.zD;
  w.put_Id = w.asc_putId = w.Q0b;
  w.get_Url = w.asc_getUrl = w.XNb;
  w.put_Url = w.asc_putUrl = w.jOa;
  w.get_Title = w.asc_getTitle = w.gfa;
  w.put_Title = w.asc_putTitle = w.oKa;
  w.get_Format = w.asc_getFormat = w.$Re;
  w.put_Format = w.asc_putFormat = w.oWe;
  w.get_VKey = w.asc_getVKey = w.rVe;
  w.put_VKey = w.asc_putVKey = w.EXe;
  w.get_UserId = w.asc_getUserId = w.PFa;
  w.get_UserName = w.asc_getUserName = w.Hxa;
  w.get_Options = w.asc_getOptions = w.OFa;
  w.put_Options = w.asc_putOptions = w.SWe;
  w.get_CallbackUrl = w.asc_getCallbackUrl = w.BQe;
  w.put_CallbackUrl = w.asc_putCallbackUrl =
    w.VVe;
  w.get_TemplateReplacement = w.asc_getTemplateReplacement = w.fVe;
  w.put_TemplateReplacement = w.asc_putTemplateReplacement = w.wXe;
  w.get_UserInfo = w.asc_getUserInfo = w.pVe;
  w.put_UserInfo = w.asc_putUserInfo = w.CXe;
  w.get_Token = w.asc_getToken = w.lVe;
  w.put_Token = w.asc_putToken = w.AXe;
  w.get_Mode = w.asc_getMode = w.LTe;
  w.put_Mode = w.asc_putMode = w.PWe;
  w.get_Permissions = w.asc_getPermissions = w.dUe;
  w.put_Permissions = w.asc_putPermissions = w.XWe;
  w.get_Lang = w.asc_getLang = w.YSe;
  w.put_Lang = w.asc_putLang = w.GWe;
  w.get_Encrypted =
    w.asc_getEncrypted = w.MRe;
  w.put_Encrypted = w.asc_putEncrypted = w.jWe;
  f.AscCommon.l6d = Cc;
  w = Cc.prototype;
  w.asc_getType = w.Sw;
  w.asc_getFontsCount = w.YRe;
  w.asc_getCurrentFont = w.sRe;
  w.asc_getImagesCount = w.zSe;
  w.asc_getCurrentImage = w.tRe;
  f.AscCommon.$7b = vh;
  w = vh.prototype;
  w.put_Value = w.xM;
  w.get_Value = w.nP;
  f.AscCommon.qUc = Yg;
  w = Yg.prototype;
  w.get_Id = w.TBa;
  w.get_X = w.Xxa;
  w.get_Y = w.Yxa;
  f.AscCommon.F4a = $b;
  w = $b.prototype;
  w.get_Id = w.TBa;
  w.get_Data = w.V8e;
  w.get_W = w.Wxa;
  w.get_H = w.L3a;
  f.AscCommon.SFb = yc;
  w = yc.prototype;
  w.asc_getId =
    w.asc_getName = w.get_Name = w.aD;
  w.asc_getDisplayName = w.XHd;
  w.asc_getType = w.get_Type = w.Sw;
  w.asc_getImage = w.ukc;
  f.AscCommon.RHd = Eg;
  w = Eg.prototype;
  w.get_Word = w.s$e;
  w.get_Checked = w.O8e;
  w.get_Variants = w.r$e;
  f.AscCommon.jVc = function (w) {
    this.ZVb = w;
    'object' === typeof this.ZVb && (this.ZVb = JSON.stringify(this.ZVb));
    this.DYb = {};
    this.image = null;
    this.WVb = e;
    this.height = this.width = 0;
    this.oi = .3;
    this.zoom = 1;
    this.ild = -1;
    this.SVc = function (e) {
      this.DYb['%user_name%'] = e.EV.userName;
    };
    this.qfb = function () {
      if (this.zoom != this.ild) {
        this.ild =
          this.zoom;
        var f = this.ZVb;
        for (w in this.DYb) this.DYb.hasOwnProperty(w) && (f = f.replace(new RegExp(w, 'g'), this.DYb[w]));
        var w = {};
        try {
          w = JSON.parse(f);
        } catch (rm) {
        }
        this.oi = e == w.transparent ? .3 : w.transparent;
        this.Ehf(w);
      }
    };
    this.Hi = function (f, w, Oa, Ia, Da) {
      this.image && (e == Ia ? (w = w - this.width >> 1, Oa = Oa - this.height >> 1) : (w = w + (Ia - this.width) / 2 >> 0, Oa = Oa + (Da - this.height) / 2 >> 0), Da = f.globalAlpha, f.globalAlpha = this.oi, f.drawImage(this.image, w, Oa), f.globalAlpha = Da);
    };
    this.qSd = function () {
      var e = document.createElement('canvas');
      e.width = this.image.width;
      e.height = this.image.height;
      var f = e.getContext('2d');
      f.globalAlpha = this.oi;
      f.drawImage(this.image, 0, 0);
      this.WVb = e.toDataURL('image/png');
    };
    this.UPd = function () {
      delete this.WVb;
      this.WVb = e;
    };
    this.RPd = function (e, f, w) {
      var Oa = this.width * Ee.eI / this.zoom, Ia = this.height * Ee.eI / this.zoom;
      e.xhc = !0;
      e.drawImage(this.WVb, (f - Oa) / 2, (w - Ia) / 2, Oa, Ia);
      e.xhc = !1;
    };
    this.Ehf = function (w) {
      AscFormat.Li(function (w) {
        var Oa = new AscFormat.Tu, Ia = !1, Da = Oe.editor || editor;
        if (!Da) return null;
        switch (Da.QC) {
          case Ee.$z.zm:
            Oa.k9(!0);
            Ia = !0;
            break;
          case Ee.$z.RA:
            Oa.k9(!1);
            Oa.Ac(Da.La.Za.ie[Da.La.Za.lc]);
            break;
          case Ee.$z.uO:
            Oa.k9(!1), Oa.CB(Da.ud.ag().Bc);
        }
        Oa.cn(!1);
        Oa.la = new AscFormat.pg;
        Oa.la.Ac(Oa);
        Oa.la.tB(new AscFormat.Cz);
        Oa.la.nb.Ac(Oa.la);
        Oa.la.nb.bj(0);
        Oa.la.nb.cj(0);
        Oa.la.nb.ap(w.width);
        Oa.la.nb.vp(w.height);
        Oa.la.nb.eG(AscFormat.nx(w.rotate ? w.rotate * Math.PI / 180 : 0));
        Oa.la.OJ(AscFormat.aU(w.type));
        w.fill && 3 === w.fill.length && Oa.la.xf(AscFormat.$E(w.fill[0], w.fill[1], w.fill[2]));
        if (AscFormat.lb(w['stroke-width']) || Array.isArray(w.stroke) &&
          3 === w.stroke.length) Da = Array.isArray(w.stroke) && 3 === w.stroke.length ? AscFormat.$E(w.stroke[0], w.stroke[1], w.stroke[2]) : AscFormat.$E(0, 0, 0), Oa.la.Om(AscFormat.bU(Da, e, e, e, e, AscFormat.lb(w['stroke-width']) ? w['stroke-width'] : 12700 / 36E3));
        Ia ? Oa.Kpa() : Oa.D$();
        Da = w.align;
        e != Da && Oa.IZ(Da);
        Array.isArray(w.margins) && 4 === w.margins.length && Oa.t_a({
          Ba: w.margins[0],
          Qa: w.margins[1],
          Ra: w.margins[2],
          Xa: w.margins[3]
        });
        Da = Oa.Rg();
        w = w.paragraphs;
        0 < w.length && (Da.fa.length = 0);
        for (var Ra = 0; Ra < w.length; ++Ra) {
          var Ha = w[Ra],
            Va = new AscCommonWord.bb(Da.yb, Da, !Ia);
          AscFormat.lb(Ha.align) && Va.CT(Ha.align);
          if (Array.isArray(Ha.fill) && 3 === Ha.fill.length) {
            var Za = new CDocumentShd;
            Za.ua = Oe.hka;
            Za.Aa.r = Ha.fill[0];
            Za.Aa.wb = Ha.fill[1];
            Za.Aa.Ya = Ha.fill[2];
            Va.oN(Za, !0);
          }
          AscFormat.lb(Ha.linespacing) && Va.cL({ wc: Ha.linespacing, aj: Oe.AB }, !0);
          Ha = Ha.runs;
          for (Za = 0; Za < Ha.length; ++Za) {
            var Pa = Ha[Za], Ab = new AscCommonWord.Uza(Va, !1);
            Array.isArray(Pa.fill) && 3 === Pa.fill.length && Ab.ZO(AscFormat.$E(Pa.fill[0], Pa.fill[1], Pa.fill[2]));
            Pa['font-family'] &&
            (Ab.Ema({ Ha: Pa['font-family'], Ta: -1 }), Ab.Fma({
              Ha: Pa['font-family'],
              Ta: -1
            }), Ab.Gma({ Ha: Pa['font-family'], Ta: -1 }), Ab.Hma({ Ha: Pa['font-family'], Ta: -1 }));
            Pa['font-size'] && Ab.qU(Pa['font-size']);
            Ab.Isa(!0 === Pa.bold);
            Ab.fJa(!0 === Pa.italic);
            Ab.fAa(!0 === Pa.strikeout);
            Ab.V9(!0 === Pa.underline);
            Pa = Pa.text;
            '<%br%>' === Pa ? Ab.zk(0, new AscCommonWord.eGd(AscCommonWord.h_e), !1) : Ab.Ru(Pa);
            Va.yf(Ra, Ab, !1);
          }
          Da.yf(Da.fa.length, Va);
        }
        Oa.Ch();
        Oa.yo && Oa.wka();
        if (f.editor) {
          var yc = editor.Oq;
          editor.Oq = !1;
        }
        Ee.Mfa = !0;
        Ia = new AscFormat.GG;
        Da = Ee.qf.Ev(210 * Ee.wA * this.zoom, !0);
        w = Ee.qf.Ev(297 * Ee.wA * this.zoom, !0);
        Ia.se(Da, w, 210, 297);
        Ia.transform(1, 0, 0, 1, 0, 0);
        Ia.c3b = !0;
        Ia.kEd(Oa);
        Oa.Md(Ia, 0);
        Ia.VGc();
        Ra = Ia.Gb.kj - Ia.Gb.uh + 1;
        Va = Ia.Gb.vj - Ia.Gb.vh + 1;
        0 >= Ra || 0 >= Va || (this.image || (this.image = document.createElement('canvas')), this.image.width = Ra, this.image.height = Va, this.width = Ra, this.height = Va, Ra = this.image.getContext('2d'), Va = new Ee.aN, Va.se(Ra, Da, w, 210, 297), Va.nv = Ee.lP, Va.Nn.Eb = -Ia.Gb.uh, Va.Nn.bf = -Ia.Gb.vh, Va.transform(1, 0, 0, 1, 0, 0), Oa.Md(Va, 0),
          Ee.Mfa = !1, f.editor && (f.editor.Oq = yc));
      }, this, [w]);
    };
  };
  f.Asc.CPluginVariation = f.Asc.q6d = sd;
  f.Asc.CPlugin = f.Asc.h8b = Hf;
})(window);
'use strict';
(function (f) {
  function e(e) {
    function f() {
    }

    f.prototype = e;
    return new f;
  }

  function Pa(e) {
    this.memory = e;
  }

  function ab(e) {
    this.stream = e;
  }

  function bb(e, f) {
    this.Hv = null;
    this.data = e;
    this.size = f;
    this.Cb = this.wa = 0;
    this.Ilc = !1;
  }

  function nb(e, f) {
    this.mc = e;
    this.Pc = f;
  }

  function Da() {
    var e = arguments.length;
    this.Hjc = !0;
    this.cqb = this.dqb = !1;
    this.Pc = this.mc = this.id = null;
    this.Hlc = this.Dlc = this.N4b = this.O4b = !1;
    this.iBa = null;
    1 == e ? (this.id = arguments[0].toUpperCase(), this.cqb = !0, this.yfd()) : 2 == e ? (this.mc = arguments[0], this.Pc = arguments[1],
      this.Dic(), this.dqb = !0) : 3 == e && (this.mc = arguments[0] + 1, this.Pc = arguments[1] + 1, this.Dic(), this.dqb = !0);
  }

  function Ha(e) {
    if (65536 > e) return String.fromCharCode(e);
    e -= 65536;
    return String.fromCharCode(55296 | e >> 10 & 1023) + String.fromCharCode(56320 | e & 1023);
  }

  Object.create && Object.create || (Object.create = Object.create = e);
  var Eb = { z9f: -2, iZc: -1, Hb: 0, Jb: 1, Mlb: 85 },
    zb = { ER: 0, Ze: 1, iad: 2, ihc: 3, Lg: 4, Lt: 5, ek: 6, KYc: 7, S$f: 8 }, Va = { kf: 0 },
    gb = { Aa: 0, nc: 1, Ab: 2, ua: 3, Bra: 4, Ead: 5, rad: 6 }, Za = {
      left: 0, top: 1, right: 2, bottom: 3, htd: 4, ftd: 5, start: 6,
      end: 7, Ssg: 8, $sg: 9, Mjd: 10, Pjd: 11
    }, bc = { left: 0, top: 1, right: 2, bottom: 3, aud: 4, YCd: 5, szd: 6, hkd: 7 };
  Pa.prototype.ta = function (e, f) {
    this.memory.va(e);
    this.Dk(f);
  };
  Pa.prototype.Dk = function (e) {
    var f = this.Vdd();
    e();
    this.Udd(f);
  };
  Pa.prototype.Vdd = function () {
    var e = this.memory.wa;
    this.memory.ym(4);
    return e;
  };
  Pa.prototype.Udd = function (e) {
    var f = this.memory.wa;
    this.memory.ck(e);
    this.memory.eb(f - e - 4);
    this.memory.ck(f);
  };
  Pa.prototype.Zsa = function (e) {
    var Ia = this;
    if (null != e.ua) {
      var Da = null;
      null != e.Aa ? Da = e.Aa : null != e.cb && (Da =
        f.editor.La.Za, e.cb.check(Da.zi(), Da.Jl()), Da = e.cb.vt(), Da = new f.AscCommonWord.ixa(Da.R, Da.G, Da.B));
      null == Da || Da.kf || this.C8a(gb.Aa, Da);
      null != e.nc && (this.memory.va(gb.Ead), this.memory.va(zb.Lg), this.Vyb(e.nc));
      null != e.Ab && (this.memory.va(gb.rad), this.memory.va(zb.Lg), this.Vyb(8 * e.Ab));
      if (null != e.cb || null != e.Aa && e.Aa.kf) this.memory.va(gb.Bra), this.memory.va(zb.ek), this.Dk(function () {
        Ia.zpb(e.cb, e.Aa);
      });
      this.memory.va(gb.ua);
      this.memory.va(zb.Ze);
      this.memory.va(e.ua);
    }
  };
  Pa.prototype.rpb = function (e) {
    var f =
      this;
    null != e.Ba && this.ta(Za.left, function () {
      f.Zsa(e.Ba);
    });
    null != e.Qa && this.ta(Za.top, function () {
      f.Zsa(e.Qa);
    });
    null != e.Ra && this.ta(Za.right, function () {
      f.Zsa(e.Ra);
    });
    null != e.Xa && this.ta(Za.bottom, function () {
      f.Zsa(e.Xa);
    });
    null != e.nk && this.ta(Za.htd, function () {
      f.Zsa(e.nk);
    });
    null != e.Tj && this.ta(Za.ftd, function () {
      f.Zsa(e.Tj);
    });
    null != e.wi && this.ta(Za.Pjd, function () {
      f.Zsa(e.wi);
    });
  };
  Pa.prototype.C8a = function (e, f) {
    this.memory.va(e);
    this.memory.va(zb.ihc);
    this.memory.va(f.r);
    this.memory.va(f.wb);
    this.memory.va(f.Ya);
  };
  Pa.prototype.IMb = function (e) {
    var f = this;
    null != e.ua && (this.memory.va(0), this.memory.va(zb.Ze), this.memory.va(e.ua));
    var Da = null;
    null != e.Aa ? Da = e.Aa : null != e.cb && (Da = editor.La.Za, e.cb.check(Da.zi(), Da.Jl()), Da = e.cb.vt(), Da = new AscCommonWord.ixa(Da.R, Da.G, Da.B));
    null == Da || Da.kf || this.C8a(1, Da);
    if (null != e.cb || null != e.Aa && e.Aa.kf) this.memory.va(2), this.memory.va(zb.ek), this.Dk(function () {
      f.zpb(e.cb, e.Aa);
    });
  };
  Pa.prototype.jHe = function (e) {
    null != e.tf && (this.memory.va(bc.aud), this.memory.va(zb.Lg), this.Nv(e.tf));
    null != e.ug && (this.memory.va(bc.YCd), this.memory.va(zb.Lg), this.Nv(e.ug));
    null != e.R && (this.memory.va(bc.szd), this.memory.va(zb.Lg), this.Nv(e.R));
    null != e.B && (this.memory.va(bc.hkd), this.memory.va(zb.Lg), this.Nv(e.B));
  };
  Pa.prototype.wU = function (e) {
    e instanceof AscCommonExcel.d1a ? (null != e.Dd && (this.memory.va(2), this.memory.va(zb.Ze), this.memory.va(e.Dd)), null != e.KK && (this.memory.va(3), this.memory.va(zb.Lt), this.memory.ir(e.KK))) : (this.memory.va(0), this.memory.va(zb.Lg), this.memory.eb(e.pu));
  };
  Pa.prototype.zpb =
    function (e, f) {
      null != f && f.kf && (this.memory.va(0), this.memory.va(zb.ER));
      if (null != e && null != e.fill && null != e.fill.color && e.fill.color.color instanceof AscFormat.e8) {
        e = e.fill.color;
        if (null != e.color) {
          f = AscCommonWord.V$d;
          var Ia = f.UN;
          switch (e.color.id) {
            case 0:
              Ia = f.fv;
              break;
            case 1:
              Ia = f.gv;
              break;
            case 2:
              Ia = f.hv;
              break;
            case 3:
              Ia = f.iv;
              break;
            case 4:
              Ia = f.Fu;
              break;
            case 5:
              Ia = f.Lv;
              break;
            case 6:
              Ia = f.QCd;
              break;
            case 7:
              Ia = f.RCd;
              break;
            case 8:
              Ia = f.SCd;
              break;
            case 9:
              Ia = f.TCd;
              break;
            case 10:
              Ia = f.UCd;
              break;
            case 11:
              Ia = f.VCd;
              break;
            case 12:
              Ia = f.IF;
              break;
            case 13:
              Ia = f.WCd;
              break;
            case 14:
              Ia = f.UN;
              break;
            case 15:
              Ia = f.Jr;
              break;
            case 16:
              Ia = f.XCd;
          }
          this.memory.va(1);
          this.memory.va(zb.Ze);
          this.memory.va(Ia);
        }
        if (null != e.ne) for (f = 0, Ia = e.ne.ne.length; f < Ia; ++f) {
          var Da = e.ne.ne[f];
          'wordTint' == Da.name ? (this.memory.va(2), this.memory.va(zb.Ze), this.memory.va(Math.round(Da.val))) : 'wordShade' == Da.name && (this.memory.va(3), this.memory.va(zb.Ze), this.memory.va(Math.round(Da.val)));
        }
      }
    };
  Pa.prototype.yCe = function (e) {
    var f = this;
    null !== e.o9 && this.ta(0, function () {
      f.memory.eb(e.o9);
    });
    e.Qb && null !== e.YP && (this.memory.va(1), this.memory.Wb(e.YP));
  };
  Pa.prototype.UBc = function (e) {
    return Math.round(AscCommonWord.h6e * e);
  };
  Pa.prototype.Nv = function (e) {
    this.memory.eb(this.UBc(e));
  };
  Pa.prototype.Vyb = function (e) {
    this.memory.eb(Math.round(AscCommonWord.g6e * e));
  };
  Pa.prototype.VDa = function (e) {
    this.memory.eb(Math.round(AscCommonWord.lod * e));
  };
  Pa.prototype.$eb = function (e) {
    this.memory.Qn(Math.round(AscCommonWord.lod * e));
  };
  ab.prototype.yX = function (e) {
    var f = this.stream.TF(4);
    if (Eb.Hb != f) return f;
    var Da =
      this.stream.$d();
    f = this.stream.TF(Da);
    return Eb.Hb != f ? f : this.ab(Da, e);
  };
  ab.prototype.ab = function (e, f) {
    for (var Ia = Eb.Hb, Da = 0; Da < e;) {
      this.stream.Ilc = !1;
      Ia = this.stream.tb();
      var Ra = this.stream.$d();
      Da + Ra + 5 >= e && (this.stream.Ilc = !0);
      Ia = f(Ia, Ra);
      if (Ia === Eb.Jb) {
        if (Ia = this.stream.Fd(Ra), Eb.Hb != Ia) break;
      } else if (Ia !== Eb.Hb) break;
      Da += Ra + 5;
    }
    return Ia;
  };
  ab.prototype.Of = function (e, f) {
    for (var Ia = Eb.Hb, Da = 0; Da < e;) {
      Ia = this.stream.tb();
      var Ra = 2;
      switch (this.stream.tb()) {
        case zb.ER:
          var Ha = 0;
          break;
        case zb.Ze:
          Ha = 1;
          break;
        case zb.iad:
          Ha =
            2;
          break;
        case zb.ihc:
          Ha = 3;
          break;
        case zb.Lg:
        case zb.Lt:
          Ha = 4;
          break;
        case zb.KYc:
          Ha = 8;
          break;
        case zb.Lg:
          Ha = 8;
          break;
        case zb.ek:
          Ha = this.stream.$d();
          Ra += 4;
          break;
        default:
          return Eb.iZc;
      }
      Ia = f(Ia, Ha);
      if (Ia === Eb.Jb) {
        if (Ia = this.stream.Fd(Ha), Eb.Hb != Ia) break;
      } else if (Ia !== Eb.Hb) break;
      Da += Ha + Ra;
    }
    return Ia;
  };
  ab.prototype.vu = function (e, f) {
    for (var Ia = Eb.Hb, Da = 0; Da < e;) {
      Ia = this.stream.tb();
      var Ra = 2;
      switch (this.stream.tb()) {
        case zb.ER:
          var Ha = 0;
          break;
        case zb.Ze:
          Ha = 1;
          break;
        case zb.iad:
          Ha = 2;
          break;
        case zb.ihc:
          Ha = 3;
          break;
        case zb.Lg:
          Ha =
            4;
          break;
        case zb.Lt:
          Ha = 8;
          break;
        case zb.KYc:
          Ha = 8;
          break;
        case zb.Lg:
          Ha = 8;
          break;
        case zb.ek:
          Ha = this.stream.$d();
          Ra += 4;
          break;
        default:
          return Eb.iZc;
      }
      Ia = f(Ia, Ha);
      if (Ia === Eb.Jb) {
        if (Ia = this.stream.Fd(Ha), Eb.Hb != Ia) break;
      } else if (Ia !== Eb.Hb) break;
      Da += Ha + Ra;
    }
    return Ia;
  };
  ab.prototype.Gm = function () {
    var e = 0 | this.stream.tb();
    e |= this.stream.tb() << 8;
    e |= this.stream.tb() << 16;
    e |= this.stream.tb() << 24;
    return e / 1E5;
  };
  ab.prototype.Qnb = function () {
    var e = this.stream.tb(), f = this.stream.tb(), Da = this.stream.tb();
    return new AscCommonWord.ixa(e,
      f, Da);
  };
  ab.prototype.TJb = function (e, f, Da, Ha) {
    var Ia = Eb.Hb, Ra = this;
    switch (e) {
      case 0:
        Da.ua = this.stream.tb();
        break;
      case 1:
        Da.Aa = this.Qnb();
        break;
      case 2:
        Ia = this.Of(f, function (e) {
          return Ra.JJb(e, Ha);
        });
        break;
      default:
        Ia = Eb.Jb;
    }
    return Ia;
  };
  ab.prototype.Tne = function (e, f) {
    var Ia = Eb.Hb;
    1 == e ? f.tt = Va.kf == this.stream.tb() : 0 == e ? f.pu = 16777215 & this.stream.$d() : 2 == e ? f.Dd = this.stream.tb() : 3 == e ? f.KK = this.stream.Fq() : Ia = Eb.Jb;
    return Ia;
  };
  ab.prototype.JJb = function (e, f) {
    var Ia = Eb.Hb;
    0 == e ? f.kf = !0 : 1 == e ? f.Aa = this.stream.tD() :
      2 == e ? f.a$ = this.stream.tD() : 3 == e ? f.W9 = this.stream.tD() : Ia = Eb.Jb;
    return Ia;
  };
  ab.prototype.S6c = function (e, f, Da) {
    var Ia = Eb.Hb;
    0 === e ? Da.o9 = this.stream.$d() : 1 === e ? Da.YP = this.stream.gf(f) : Ia = Eb.Jb;
    return Ia;
  };
  bb.prototype.ck = function (e) {
    if (e > this.size) return Eb.Mlb;
    this.wa = e;
    return Eb.Hb;
  };
  bb.prototype.Wd = function (e) {
    if (e > this.size) return Eb.Mlb;
    this.Cb = e;
    return Eb.Hb;
  };
  bb.prototype.ym = function (e) {
    return 0 > e ? Eb.Mlb : this.ck(this.wa + e);
  };
  bb.prototype.Fd = function (e) {
    return 0 > e ? Eb.Mlb : this.Wd(this.Cb + e);
  };
  bb.prototype.tb =
    function () {
      return this.Cb >= this.size ? 0 : this.data[this.Cb++];
    };
  bb.prototype.s_ = function () {
    if (this.Cb >= this.size) return 0;
    var e = this.data[this.Cb++];
    127 < e && (e -= 256);
    return e;
  };
  bb.prototype.tD = function () {
    return this.tb();
  };
  bb.prototype.ub = function () {
    return 0 == this.tb() ? !1 : !0;
  };
  bb.prototype.RNa = function () {
    return this.Cb + 1 >= this.size ? 0 : this.data[this.Cb++] | this.data[this.Cb++] << 8;
  };
  bb.prototype.wQd = function () {
    return AscFonts.dU.r8(this.RNa());
  };
  bb.prototype.$d = function () {
    return this.Cb + 3 >= this.size ? 0 : this.data[this.Cb++] |
      this.data[this.Cb++] << 8 | this.data[this.Cb++] << 16 | this.data[this.Cb++] << 24;
  };
  bb.prototype.fV = function () {
    return AscFonts.dU.Gpa(this.$d());
  };
  bb.prototype.ob = function () {
    return this.$d();
  };
  bb.prototype.Hd = function () {
    return this.$d();
  };
  var Nc = new ArrayBuffer(8), cc = new Uint8Array(Nc), Rb = new Float64Array(Nc);
  bb.prototype.Fq = function () {
    if (this.Cb + 7 >= this.size) return 0;
    cc[0] = this.tb();
    cc[1] = this.tb();
    cc[2] = this.tb();
    cc[3] = this.tb();
    cc[4] = this.tb();
    cc[5] = this.tb();
    cc[6] = this.tb();
    cc[7] = this.tb();
    return Rb[0];
  };
  bb.prototype.ic = function () {
    var e = this.ob();
    return this.gf(e);
  };
  bb.prototype.gf = function (e) {
    if (this.Cb + e > this.size) return '';
    for (var f = [], Da = 0; Da + 1 < e; Da += 2) f.push(String.fromCharCode(this.data[this.Cb + Da] | this.data[this.Cb + Da + 1] << 8));
    this.Cb += e;
    return f.join('');
  };
  bb.prototype.Qaa = function () {
    var e = this.ob();
    if (this.Cb + 2 * e > this.size) return '';
    for (var f = '', Da = 0; Da + 1 < 2 * e; Da += 2) {
      var Ha = this.data[this.Cb + Da];
      Ha |= this.data[this.Cb + Da + 1] << 8;
      f += String.fromCharCode(Ha);
    }
    this.Cb += 2 * e;
    return f;
  };
  bb.prototype.C3b = function () {
    return this.size;
  };
  bb.prototype.TF = function (e) {
    if (this.size - this.wa < e) return Eb.Mlb;
    this.Cb = this.wa;
    this.wa += e;
    return Eb.Hb;
  };
  bb.prototype.eg = function () {
    var e = 0 | this.tb();
    e |= this.tb() << 8;
    e |= this.tb() << 16;
    e |= this.tb() << 24;
    return e / 1E5;
  };
  bb.prototype.sHb = function (e) {
    for (var f = Array(e), Da = 0; Da < e; ++Da) f[Da] = this.data[this.Cb++];
    return f;
  };
  bb.prototype.RLb = function () {
    var e = new AscCommon.l5;
    e.Hv = this.Hv;
    e.data = this.data;
    e.size = this.size;
    e.wa = this.wa;
    e.Cb = this.Cb;
    return e;
  };
  bb.prototype.mHb = function (e) {
    this.wa = e.wa;
    this.Cb = e.Cb;
  };
  bb.prototype.Ked = function () {
    var e = this.tb();
    if (0 != (e & 128)) {
      var f = this.tb();
      e = e & 127 | (f & 127) << 7;
    }
    return e;
  };
  bb.prototype.eic = function () {
    this.Fd(this.dic());
  };
  bb.prototype.dic = function () {
    for (var e = 0, f = 0; 4 > f; ++f) {
      var Da = this.tb();
      e |= (Da & 127) << 7 * f;
      if (0 == (Da & 128)) break;
    }
    return e;
  };
  var ob = new function () {
    this.SMe = 65;
    this.YMb = [];
    this.Fvd = {};
    this.b1b = function (e) {
      var f = this.YMb[e];
      if (null != f) return f;
      if (0 == e) return '';
      f = e - 1;
      var Da = String.fromCharCode(65 + f % 26);
      return this.YMb[e] = 26 > f ? Da : this.b1b(Math.floor(f / 26)) +
        Da;
    };
    this.Oxa = function (e) {
      var f = this.YMb[e];
      if (!f) {
        f = '';
        if (0 < e) for (var Da = e, Ra; 0 < Da;) Ra = (Da - 1) % 26, f = String.fromCharCode(Ra + 65) + f, Da = (Da - (Ra + 1)) / 26;
        this.YMb[e] = f;
      }
      return f;
    };
    this.lPb = function (e) {
      for (var f = 0, Da = 0; Da < e.length; ++Da) f = 26 * f + (e.charCodeAt(Da) - this.SMe + 1);
      return f;
    };
    this.A6e = function (e, f) {
      return ob.Oxa(f + 1) + (e + 1);
    };
    this.r7 = function (e) {
      var f = this.Fvd[e];
      null == f && (f = new Da(e), this.Fvd[e] = f);
      return f;
    };
  };
  nb.prototype.NE = function () {
    this.Pc = this.mc = 0;
  };
  nb.prototype.clone = function () {
    return new nb(this.mc,
      this.Pc);
  };
  nb.prototype.isEqual = function (e) {
    return this.mc === e.mc && this.Pc === e.Pc;
  };
  nb.prototype.aR = function () {
    return 0 === this.mc && 0 === this.Pc;
  };
  nb.prototype.getName = function () {
    return ob.Oxa(this.Pc + 1) + (this.mc + 1);
  };
  Da.prototype = Object.create(nb.prototype);
  Da.prototype.constructor = Da;
  Da.prototype.BMe = function (e) {
    return 'A' <= e && 'Z' >= e;
  };
  Da.prototype.yfd = function () {
    this.cqb = !0;
    this.v8(!0, !1);
    this.Dic();
  };
  Da.prototype.Dic = function () {
    this.Hjc = 1 <= this.mc && 1048576 >= this.mc ? 1 <= this.Pc && 16384 >= this.Pc ? !0 : !1 : !1;
  };
  Da.prototype.v8 = function (e, f) {
    if (e && this.cqb) {
      this.cqb = !1;
      e = this.id;
      this.mc = this.Pc = 0;
      f = {};
      for (var Ia = -1, Da = 0; -1 != (Ia = e.indexOf("$", Ia + 1));) f[Ia - Da++] = 1;
      if (2 >= Da && (0 < Da && (e = e.replace(/\$/g, '')), Ia = e.length, 0 < Ia)) {
        for (var Ra = 0; this.BMe(e.charAt(Ra)) && Ra < Ia;) Ra++;
        0 == Ra ? (this.Hlc = !0, this.Pc = 1, this.iBa = ob.Oxa(this.Pc), this.mc = e.substring(Ra) - 0, null != f[0] && (this.O4b = !0, Da--)) : Ra == Ia ? (this.Dlc = !0, this.iBa = e, this.Pc = ob.lPb(this.iBa), this.mc = 1, null != f[0] && (this.N4b = !0, Da--)) : (this.iBa = e.substring(0, Ra), this.Pc =
          ob.lPb(this.iBa), this.mc = e.substring(Ra) - 0, null != f[0] && (this.N4b = !0, Da--), null != f[Ra] && (this.O4b = !0, Da--));
        0 < Da && (this.mc = this.Pc = 0);
      }
    } else f && this.dqb && (this.dqb = !1, this.iBa = ob.Oxa(this.Pc), this.id = this.Dlc ? this.iBa : this.Hlc ? this.mc : this.iBa + this.mc);
  };
  Da.prototype.pB = function () {
    return this.Hjc;
  };
  Da.prototype.MVd = function () {
    this.v8(!1, !0);
    return this.id;
  };
  Da.prototype.Vta = function () {
    this.v8(!0, !1);
    return '$' + this.H6e() + '$' + this.TJd();
  };
  Da.prototype.TJd = function () {
    this.v8(!0, !1);
    return this.mc;
  };
  Da.prototype.QU =
    function () {
      this.v8(!0, !1);
      return this.mc - 1;
    };
  Da.prototype.opd = function () {
    this.v8(!0, !1);
    return this.O4b;
  };
  Da.prototype.Qoc = function () {
    this.v8(!0, !1);
    return this.Hlc;
  };
  Da.prototype.lzf = function () {
    this.v8(!0, !1);
    return this.Pc;
  };
  Da.prototype.GS = function () {
    this.v8(!0, !1);
    return this.Pc - 1;
  };
  Da.prototype.Fod = function () {
    this.v8(!0, !1);
    return this.N4b;
  };
  Da.prototype.Poc = function () {
    this.v8(!0, !1);
    return this.Dlc;
  };
  Da.prototype.H6e = function () {
    this.v8(!1, !0);
    return this.iBa;
  };
  Da.prototype.VRc = function (e) {
    0 <= this.mc &&
    1048576 >= this.mc || (this.Hjc = !1);
    this.dqb = !0;
    this.mc = e;
  };
  Da.prototype.uv = function (e) {
    this.cqb = !0;
    this.id = e;
    this.yfd();
  };
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.V4b = Eb;
  f.AscCommon.SOb = zb;
  f.AscCommon.$kd = Va;
  f.AscCommon.I_e = gb;
  f.AscCommon.J_e = Za;
  f.AscCommon.K_e = bc;
  f.AscCommon.z1a = 0;
  f.AscCommon.tgb = 1;
  f.AscCommon.$Wa = 2;
  f.AscCommon.pod = 3;
  f.AscCommon.rkb = Pa;
  f.AscCommon.M7b = ab;
  f.AscCommon.x9 = bb;
  f.AscCommon.Qib = 1048576;
  f.AscCommon.Sxa = 16384;
  f.AscCommon.kQa = 1048575;
  f.AscCommon.jQa = 16383;
  f.AscCommon.Fsb = ob;
  f.AscCommon.Fm =
    nb;
  f.AscCommon.u0a = Da;
  f.AscCommon.so = function (e) {
    return null !== e && 'object' === typeof e;
  };
  f.AscCommon.l5 = function (e, f) {
    this.Hv = null;
    this.data = e;
    this.size = f;
    this.Cb = this.wa = 0;
    this.ck = function (e) {
      if (e > this.size) return 1;
      this.wa = e;
      return 0;
    };
    this.Wd = function (e) {
      if (e > this.size) return 1;
      this.Cb = e;
      return 0;
    };
    this.ym = function (e) {
      return 0 > e ? 1 : this.ck(this.wa + e);
    };
    this.Fd = function (e) {
      return 0 > e ? 1 : this.Wd(this.Cb + e);
    };
    this.tb = function () {
      return this.Cb >= this.size ? 0 : this.data[this.Cb++];
    };
    this.ub = function () {
      return this.Cb >=
      this.size ? 0 : 1 == this.data[this.Cb++] ? !0 : !1;
    };
    this.Et = function () {
      return this.Cb + 1 >= this.size ? 0 : this.data[this.Cb++] | this.data[this.Cb++] << 8;
    };
    this.Hd = function () {
      if (this.Cb + 3 >= this.size) return 0;
      var e = this.data[this.Cb++] | this.data[this.Cb++] << 8 | this.data[this.Cb++] << 16 | this.data[this.Cb++] << 24;
      0 > e && (e += 4294967296);
      return e;
    };
    this.ob = function () {
      return this.Cb + 3 >= this.size ? 0 : this.data[this.Cb++] | this.data[this.Cb++] << 8 | this.data[this.Cb++] << 16 | this.data[this.Cb++] << 24;
    };
    this.Qaa = function (e) {
      e *= 2;
      if (this.Cb +
        e > this.size) return '';
      for (var f = '', Ia = 0; Ia < e; Ia += 2) {
        var Da = this.data[this.Cb + Ia + 1] << 8 | this.data[this.Cb + Ia];
        if (0 == Da) break;
        f += String.fromCharCode(Da);
      }
      this.Cb += e;
      return f;
    };
    this.Ihb = function (e) {
      if (this.Cb + e > this.size) return '';
      for (var f = '', Ia = 0; Ia < e; Ia++) {
        var Da = this.data[this.Cb + Ia];
        if (0 == Da) break;
        f += String.fromCharCode(Da);
      }
      this.Cb += e;
      return f;
    };
    this.ic = function () {
      var e = this.Hd();
      return this.Qaa(e);
    };
    this.Y_c = function () {
      var e = this.Hd();
      this.Ihb(e);
    };
    this.TF = function (e) {
      if (this.wa >= this.size || this.size -
        this.wa < e) return 1;
      this.Cb = this.wa;
      this.wa += e;
      return 0;
    };
    this.ph = function () {
      var e = this.Hd();
      this.Fd(e);
    };
    this.GHb = function () {
      var e = this.ic(), f = e.length;
      if (0 == f) return null;
      f - 1 == e.indexOf('%') ? (e = parseFloat(e), isNaN(e) && (e = null)) : (e = parseFloat(e), e = isNaN(e) ? null : e / 1E3);
      return e;
    };
  };
  f.AscCommon.wac = function (e, f) {
    if (e.Cb + f > e.size) return '';
    var Ia = '';
    f = e.Cb + f;
    for (var Da; e.Cb < f;) Da = e.data[e.Cb], 0 == (Da & 128) ? (Ia += Ha(Da), ++e.Cb) : 0 == (Da & 32) ? (Da = (Da & 31) << 6 | e.data[e.Cb + 1] & 63, Ia += Ha(Da), e.Cb += 2) : 0 == (Da & 16) ? (Da = (Da &
      15) << 12 | (e.data[e.Cb + 1] & 63) << 6 | e.data[e.Cb + 2] & 63, Ia += Ha(Da), e.Cb += 3) : 0 == (Da & 8) ? (Da = (Da & 7) << 18 | (e.data[e.Cb + 1] & 63) << 12 | (e.data[e.Cb + 2] & 63) << 6 | e.data[e.Cb + 3] & 63, Ia += Ha(Da), e.Cb += 4) : 0 == (Da & 4) ? (Da = (Da & 3) << 24 | (e.data[e.Cb + 1] & 63) << 18 | (e.data[e.Cb + 2] & 63) << 12 | (e.data[e.Cb + 3] & 63) << 6 | e.data[e.Cb + 4] & 63, Ia += Ha(Da), e.Cb += 5) : (Da = (Da & 1) << 30 | (e.data[e.Cb + 1] & 63) << 24 | (e.data[e.Cb + 2] & 63) << 18 | (e.data[e.Cb + 3] & 63) << 12 | (e.data[e.Cb + 4] & 63) << 6 | e.data[e.Cb + 5] & 63, Ia += Ha(Da), e.Cb += 6);
    return Ia;
  };
  f.AscCommon.YWa = 250;
  f.AscCommon.K$a =
    251;
})(window);
'use strict';
(function (f, e) {
  function Pa() {
    return f.JSZipUtils || require('jsziputils');
  }

  function ab() {
    return f.JSZip || require('jszip');
  }

  function bb() {
    this.files = {};
  }

  function nb(e) {
    this.data = e;
  }

  function Da() {
    this.urls = {};
    this.iGc = {};
    this.mgb = '';
    this.iMa = 0;
  }

  function Ha() {
    this.tib = !1;
    this.BEa = this.url = this.data = null;
  }

  function Eb(e, f, w, Oa, Ia) {
    var Da = Ia.index;
    null == Ia.GXb && (!Ia.data || 5242880 >= Ia.data.length) ? Oa.savetype = AscCommon.QOb.w8d : (0 == Da ? (Oa.savetype = AscCommon.QOb.Rke, Ia.count = Math.ceil(Ia.data.length / 5242880)) : Oa.savetype =
      Da != Ia.count - 1 ? AscCommon.QOb.Qke : AscCommon.QOb.u9, Ia.GXb = 'string' === typeof Ia.data ? Ia.data.substring(5242880 * Da, 5242880 * (Da + 1)) : Ia.data.subarray(5242880 * Da, 5242880 * (Da + 1)));
    Ia.index++;
    Oa.saveindex = Ia.index;
    e(function (Da, Xa, Ra) {
      null != Da && 'ok' == Da.status ? Ia.index < Ia.count ? (Oa.savekey = Da.data, Eb(e, f, w, Oa, Ia)) : w && w(Da, Ra) : w ? w(Da, Ra) : f(Da, Ra);
    }, Oa, Ia);
  }

  function zb(e, f, w) {
    eg({
      url: e, dataType: 'text', responseType: w, success: f, error: function () {
        f(null);
      }
    });
  }

  function Va(e) {
    if ('undefined' !== typeof ArrayBuffer) var f =
      new Uint8Array(e.response); else if (AscCommon.qf.eH) {
      e = (new VBArray(e.responseBody)).toArray();
      var w = e.length;
      f = g_memory.hO(w);
      var Oa = new AscCommon.x9(f.data, w);
      Oa.Hv = f.Hv;
      f = Oa.data;
      for (Oa = 0; Oa < w;) f[Oa] = e[Oa], Oa++;
    }
    return f;
  }

  function gb(e, f) {
    if (e.length > f.length) {
      for (var w = 0; w < f.length; ++w) if (e[w] !== f.charCodeAt(w)) return !1;
      return !0;
    }
    return !1;
  }

  function Za(e, f) {
    var w = Asc.rl.Fg.cT;
    switch (e) {
      case zd.hTa:
        w = Asc.rl.Fg.nY;
        break;
      case zd.dBe:
      case zd.eBe:
        w = Asc.rl.Fg.Database;
        break;
      case zd.T8d:
        w = Asc.rl.Fg.MYc;
        break;
      case zd.h9d:
      case zd.S8d:
        w = Asc.rl.Fg.cXc;
        break;
      case zd.R8d:
      case zd.a9d:
        w = Asc.rl.Fg.i9b;
        break;
      case zd.X8d:
      case zd.Q8d:
      case zd.W8d:
      case zd.$8d:
      case zd.Y8d:
      case zd.i9d:
      case zd.c9d:
      case zd.O8d:
        w = AscCommon.hrb.qG === f ? Asc.rl.Fg.j9b : Asc.rl.Fg.jFa;
        break;
      case zd.Ecd:
        w = Asc.rl.Fg.Dcd;
        break;
      case zd.Fcd:
        w = Asc.rl.Fg.Ccd;
        break;
      case zd.whc:
        w = Asc.rl.Fg.hpb;
        break;
      case zd.RBe:
        w = Asc.rl.Fg.s8a;
        break;
      case zd.XLb:
        w = Asc.rl.Fg.yZc;
        break;
      case zd.jpb:
        w = Asc.rl.Fg.jpb;
        break;
      case zd.WBe:
        w = Asc.rl.Fg.Sbc;
        break;
      case zd.XBe:
        w = Asc.rl.Fg.Ncd;
        break;
      case zd.Storage:
      case zd.Nye:
      case zd.Pye:
      case zd.Rye:
      case zd.Qye:
      case zd.Mye:
      case zd.Oye:
      case zd.PBe:
      case zd.Ire:
      case zd.cT:
        w = Asc.rl.Fg.cT;
    }
    return w;
  }

  function bc(e) {
    return 55296 <= e && 57343 >= e;
  }

  function Nc(e, f) {
    return 56320 > e && 56320 <= f && 57343 >= f ? 65536 + ((e & 1023) << 10) | f & 1023 : null;
  }

  function cc(e) {
    if (65536 > e) return String.fromCharCode(e);
    e -= 65536;
    return String.fromCharCode(55296 | e >> 10) + String.fromCharCode(56320 | e & 1023);
  }

  function Rb(e) {
    this.Nt = this.eib = 0;
    this.YJa = e;
  }

  function ob(e) {
    Hf = e ? e : {
      h: 'Headers', d: 'Data',
      a: 'All', tr: 'This Row', t: 'Totals'
    };
    return Ra();
  }

  function Ra() {
    var e = Hf.a, f = Hf.h, w = Hf.d, Oa = Hf.t, Ia = Hf.tr,
      Da = new XRegExp('(?:\\[\\#' + f + '\\]\\' + ad.bGa + '\\[\\#' + w + '\\])'),
      Ra = new XRegExp('(?:\\[\\#' + w + '\\]\\' + ad.bGa + '\\[\\#' + Oa + '\\])'),
      Ha = new XRegExp('(?:\'\\[|\'\\]|[^[\\]])+');
    e = new XRegExp('\\#(?:' + e + '|' + f + '|' + Oa + '|' + w + '|' + Ia + ')|@');
    return XRegExp.build('^(?<tableName>{{tableName}})\\[(?<columnName>{{columnName}})?\\]', {
      tableName: new XRegExp('^(:?[' + Be + '][' + Be + '\\d.]*)'),
      columnName: XRegExp.build('(?<reservedColumn>{{reservedColumn}})|(?<oneColumn>{{userColumn}})|(?<columnRange>{{userColumnRange}})|(?<hdtcc>{{hdtcc}})',
        {
          userColumn: Ha,
          reservedColumn: e,
          userColumnRange: XRegExp.build('\\[(?<colStart>{{uc}})\\]\\:\\[(?<colEnd>{{uc}})\\]', { uc: Ha }),
          hdtcc: XRegExp.build('(?<hdt>\\[{{rc}}\\]|{{hd}}|{{dt}})(?:\\' + ad.bGa + '(?:\\[(?<hdtcstart>{{uc}})\\])(?:\\:(?:\\[(?<hdtcend>{{uc}})\\]))?)?', {
            rc: e,
            hd: Da,
            dt: Ra,
            uc: Ha
          })
        })
    }, 'i');
  }

  function Ia(e) {
    var f = Ee.t = e.t.toUpperCase();
    e = Ee.f = e.f.toUpperCase();
    return new RegExp('^(' + f + '|' + e + ')([-+*\\/^&%<=>: ;),}]|$)', 'i');
  }

  function Ab(e) {
    e = e ? e : {
      nil: '#NULL!', div: '#DIV/0!', value: '#VALUE!', ref: '#REF!',
      name: '#NAME\\?', num: '#NUM!', na: '#N/A', getdata: '#GETTING_DATA', uf: '#UNSUPPORTED_FUNCTION!'
    };
    Xb.nil = e.nil;
    Xb.div = e.div;
    Xb.value = e.value;
    Xb.ref = e.ref;
    Xb.name = e.name;
    Xb.num = e.num;
    Xb.na = e.na;
    Xb.getdata = e.getdata;
    Xb.uf = e.uf;
    return new RegExp('^(' + Xb.nil + '|' + Xb.div + '|' + Xb.value + '|' + Xb.ref + '|' + Xb.name + '|' + Xb.num + '|' + Xb.na + '|' + Xb.getdata + '|' + Xb.uf + ')', 'i');
  }

  function $d(e) {
    var f = e ? e.lastIndexOf('.') : -1;
    return -1 != f ? e.substring(f + 1).toLowerCase() : null;
  }

  function re(e) {
    var f = e ? e.lastIndexOf('.') : -1;
    return -1 != f ? e.substring(0,
      f) : null;
  }

  function ie(e) {
    var f = zd.hTa;
    if (0 < e.length) for (var w = 0, Oa = e.length; w < Oa; w++) {
      var Ia = e[w], Da = Ia.fileName || Ia.name;
      if (Da) {
        var Xa = !1;
        Da = $d(Da);
        if (null !== Da) for (var Ra = 0, Ha = Ke.HLb.length; Ra < Ha; Ra++) if (Ke.HLb[Ra] == Da) {
          Xa = !0;
          break;
        }
        0 == Xa && (f = zd.Fcd);
      }
      Asc.rl.Fg.nY == f && (Ia = Ia.fileSize || Ia.size) && Ke.uje < Ia && (f = zd.Ecd);
      if (zd.hTa != f) break;
    } else f = zd.whc;
    return f;
  }

  function xf(e) {
    if (!(f.Asc.editor ? f.Asc.editor : f.editor).u_d()) return !1;
    var w = !1;
    if (e.dataTransfer.types) for (var Oa = 0, Ia = e.dataTransfer.types.length; Oa <
    Ia; ++Oa) {
      var Da = e.dataTransfer.types[Oa].toLowerCase();
      if ('files' == Da) {
        if (e.dataTransfer.items) for (Oa = 0, Ia = e.dataTransfer.items.length; Oa < Ia; Oa++) {
          if (Da = e.dataTransfer.items[Oa], Da.type && Da.kind && 'file' == Da.kind.toLowerCase()) {
            w = !1;
            for (var Xa = 0, Ra = Ke.HLb.length; Xa < Ra; Xa++) if (-1 != Da.type.indexOf(Ke.HLb[Xa])) {
              w = !0;
              break;
            }
            if (0 == w) break;
          }
        } else w = !0;
        break;
      } else if ('text' == Da || 'text/plain' == Da || 'text/html' == Da) {
        w = !0;
        break;
      }
    }
    return w;
  }

  function Wc() {
    if (!document.getElementById('apiImageUpload')) {
      var e = document.createElement('iframe');
      e.name = 'apiImageUpload';
      e.id = 'apiImageUpload';
      e.setAttribute('style', 'position:absolute;left:-2px;top:-2px;width:1px;height:1px;z-index:-1000;');
      document.body.appendChild(e);
    }
    return f.frames.apiImageUpload;
  }

  function Pi(e) {
    var f = document.getElementById('apiiuFile');
    f && document.body.removeChild(f);
    f = document.createElement('input');
    f.setAttribute('id', 'apiiuFile');
    f.setAttribute('name', 'apiiuFile');
    f.setAttribute('type', 'file');
    f.setAttribute('accept', 'image/*');
    f.setAttribute('style', 'position:absolute;left:-2px;top:-2px;width:1px;height:1px;z-index:-1000;cursor:pointer;');
    f.onchange = e;
    document.body.appendChild(f);
    return f;
  }

  function Jd() {
    this.vo = this.Bt = null;
  }

  function eg(e) {
    var w = '', Oa = 'GET', Ia = !0, Da = null, Xa, Ra = null, Ha = null, Va = null,
      Za = 'application/x-www-form-urlencoded', Pa = '';
    (function (e) {
      'undefined' !== typeof e.url && (w = e.url);
      'undefined' !== typeof e.type && (Oa = e.type);
      'undefined' !== typeof e.async && (Ia = e.async);
      'undefined' !== typeof e.data && (Da = e.data);
      'undefined' !== typeof e.dataType && (Xa = e.dataType);
      'undefined' !== typeof e.error && (Ra = e.error);
      'undefined' !== typeof e.success &&
      (Ha = e.success);
      'undefined' !== typeof e.contentType && (Za = e.contentType);
      'undefined' !== typeof e.responseType && (Pa = e.responseType);
      if (f.XMLHttpRequest) Va = new XMLHttpRequest, Va.overrideMimeType && Xa && Va.overrideMimeType(Xa); else if (f.ActiveXObject) try {
        Va = new ActiveXObject('Msxml2.XMLHTTP');
      } catch (vv) {
        try {
          Va = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (fw) {
        }
      }
      Va.onreadystatechange = function () {
        switch (this.readyState) {
          case 4:
            200 === this.status || 1223 === this.status ? 'function' === typeof Ha && Ha(this) : 'function' ===
              typeof Ra && Ra(this, this.statusText, this.status);
        }
      };
      Va.open(Oa, w, Ia);
      'POST' === Oa && Va.setRequestHeader('Content-Type', Za);
      Pa && (Va.responseType = Pa);
      Va.send(Da);
    })(e);
  }

  function Ye() {
    this.RP = null;
    this.$p = !0;
    this.uV = !1;
    this.kBc = this.lBc = 0;
  }

  function af() {
    this.ka = be;
    this.Ol = null;
  }

  function Qf() {
    this.gT = [];
  }

  function sh(e, f, w, Oa) {
    this.tP = e;
    this.Fud = w;
    this.LJ = Oa;
    this.tka = this.Rie(e, f, w);
  }

  function Mf(e) {
    return e ? e - 0 : null;
  }

  function sb(e) {
    this.QXc = this.h3c = null;
    this.se(e);
  }

  function xc(w, Oa, Ia) {
    if (!0 === f.NATIVE_EDITOR_ENJINE ||
      f.Native !== e) Oa(); else {
      if (f.AscDesktopEditor && f.local_load_add) {
        f.local_load_add({
          completeLoad: function () {
            return Oa();
          }
        }, 'sdk-all-from-min', w);
        var Da = f.AscDesktopEditor.LoadJS(w);
        2 != Da && f.local_load_remove(w);
        if (1 == Da) {
          setTimeout(Oa, 1);
          return;
        }
        if (2 == Da) return;
      }
      Da = document.createElement('script');
      Da.type = 'text/javascript';
      Da.src = w;
      Da.onload = Oa;
      Da.onerror = Ia;
      document.head.appendChild(Da);
    }
  }

  function Ce(e, w, Oa, Ia) {
    f.Asc.ZWa = this;
    this.Zc = w;
    this.bGb = document.getElementById(e);
    this.Jy = document.createElement('canvas');
    this.Jy.style.position = 'absolute';
    this.Jy.style.left = '0px';
    this.Jy.style.top = '0px';
    e = parseInt(this.bGb.offsetWidth);
    w = parseInt(this.bGb.offsetHeight);
    0 == e && (e = 300);
    0 == w && (w = 80);
    this.Jy.width = e;
    this.Jy.height = w;
    this.bGb.appendChild(this.Jy);
    this.Image = '';
    this.JSa = null;
    this.Text = '';
    this.Un = 'Arial';
    this.Ab = 10;
    this.Ye = !0;
    this.Nd = !1;
    this.pd = Oa;
    this.Uc = Ia;
    this.vca = null;
    this.rbc = !1;
  }

  function he() {
    this.c6b = {};
  }

  var De = AscCommon.qf, be = AscCommon.Qpa, ge = AscCommon.O5, ae = AscCommon.hjb, ch = AscCommon.XAc,
    Td = AscCommon.YAc,
    Cc = AscCommon.h7, vh = AscCommon.uL, Yg = AscCommon.Fsb, $b = Asc.yib;
  'function' !== typeof String.prototype.startsWith && (String.prototype.startsWith = function (e) {
    return 0 === this.indexOf(e);
  }, String.prototype.startsWith = String.prototype.startsWith);
  'function' !== typeof String.prototype.endsWith && (String.prototype.endsWith = function (e) {
    return -1 !== this.indexOf(e, this.length - e.length);
  }, String.prototype.endsWith = String.prototype.endsWith);
  'function' !== typeof String.prototype.repeat && (String.prototype.repeat = function (e) {
    if (null ==
      this) throw new TypeError('can\'t convert ' + this + ' to object');
    var f = '' + this;
    e = +e;
    e != e && (e = 0);
    if (0 > e) throw new RangeError('repeat count must be non-negative');
    if (Infinity == e) throw new RangeError('repeat count must be less than infinity');
    e = Math.floor(e);
    if (0 == f.length || 0 == e) return '';
    if (268435456 <= f.length * e) throw new RangeError('repeat count must not overflow maximum string size');
    for (var w = ''; ;) {
      1 == (e & 1) && (w += f);
      e >>>= 1;
      if (0 == e) break;
      f += f;
    }
    return w;
  }, String.prototype.repeat = String.prototype.repeat);
  'function' !==
  typeof String.prototype.padStart && (String.prototype.padStart = function (e, f) {
    e >>= 0;
    f = String(f || ' ');
    if (this.length > e) return String(this);
    e -= this.length;
    e > f.length && (f += f.repeat(e / f.length));
    return f.slice(0, e) + String(this);
  }, String.prototype.padStart = String.prototype.padStart);
  Number.isInteger = Number.isInteger || function (e) {
    return 'number' === typeof e && Number.isFinite(e) && !(e % 1);
  };
  Number.isFinite = Number.isFinite || function (e) {
    return 'number' === typeof e && isFinite(e);
  };
  String.prototype.GZb = function (e) {
    return e &&
    e instanceof RegExp ? (e = this.toString().match(e), !!(e && 0 < e.length && e[0].length == this.length)) : !1;
  };
  'function' !== typeof require || f.XRegExp || (f.XRegExp = require('xregexp'));
  var yc = null;
  bb.prototype.loadAsync = function (e, w) {
    var Oa = this;
    return f['native'] ? new Promise(function (Ia, Da) {
      var Ra = w && !0 === w.base64 ? f['native'].ZipOpenBase64(e) : f['native'].ZipOpen(e);
      if (null != Ra) {
        for (var Xa in Ra) Oa.files[Xa] = new nb(Ra[Xa]);
        Ia(Oa);
      } else Da(Error('Failed archive'));
    }) : AscCommon.n7e().loadAsync(e, w).then(function (e) {
      for (var f in e.files) Oa.files[f] =
        new nb(e.files[f]);
      return Oa;
    });
  };
  bb.prototype.close = function () {
    f['native'] && f['native'].ZipClose();
  };
  nb.prototype.async = function (e) {
    if (f['native']) {
      var w = this;
      return new Promise(function (e, Oa) {
        var Ia = f['native'].ZipFileAsString(w.data);
        null != Ia ? e(Ia) : Oa(Error('Failed file in archive'));
      });
    }
    return this.data.async(e);
  };
  Da.prototype = {
    $ia: 'media/', se: function (e) {
      this.PAa(e);
    }, PAa: function (e) {
      for (var w in e) {
        var Oa = e[w];
        this.urls[w] = Oa;
        this.iGc[Oa] = w;
        this.iMa++;
      }
      f.IS_NATIVE_EDITOR && f['native'].setUrlsCount(this.iMa);
    },
    FHd: function (e, f) {
      var w = {};
      w[this.$ia + e] = f;
      this.PAa(w);
    }, t7: function (e) {
      return this.A5b(this.$ia + e);
    }, E8: function (e) {
      if (e && 0 === e.indexOf('data:image')) return null;
      (e = this.Z$a(e)) && this.$ia == e.substring(0, this.$ia.length) && (e = e.substring(this.$ia.length));
      return e;
    }, bjb: function (e) {
      e && this.$ia == e.substring(0, this.$ia.length) && (e = e.substring(this.$ia.length));
      return e;
    }, A5b: function (e) {
      return this.urls ? this.urls[e] : null;
    }, Z$a: function (e) {
      if (this.iGc) {
        var f = this.iGc[e];
        !f && 'undefined' !== typeof editor && editor.MG &&
        0 == e.indexOf(editor.MG.Ofb) && (f = e.substring(editor.MG.Ofb.length));
        return f;
      }
      return null;
    }, j7e: function (e) {
      var f = [], w = re(e), Oa;
      for (Oa in this.urls) 0 == Oa.indexOf(this.$ia + w + '.') && this.$ia + e !== Oa && f.push(this.urls[Oa]);
      return f;
    }
  };
  var Eg = new Da;
  Rb.prototype = {
    Tcf: function () {
      return this.Nt < this.YJa.length;
    }, value: function () {
      if (this.Nt >= this.YJa.length) return 0;
      var e = this.YJa.charCodeAt(this.Nt);
      return AscCommon.fEb(e) && this.YJa.length - 1 != this.Nt ? AscCommon.b5b(e, this.YJa.charCodeAt(this.Nt + 1)) : e;
    }, next: function () {
      this.Nt >=
      this.YJa.length || (this.eib++, AscCommon.fEb(this.YJa.charCodeAt(this.Nt)) ? this.Nt == this.YJa.length - 1 ? ++this.Nt : this.Nt += 2 : ++this.Nt);
    }, position: function () {
      return this.eib;
    }
  };
  Rb.prototype.check = Rb.prototype.Tcf;
  String.prototype.xR = function () {
    return new Rb(this);
  };
  var sd = { all: 1, data: 2, headers: 3, Z2b: 4, Ujb: 5, wwa: 6 }, Hf = null, Oe = { t: 'TRUE', f: 'FALSE' }, Ee = {},
    Xb = {}, zd = {
      hTa: 0,
      cT: -1,
      Ire: -3,
      dBe: -20,
      eBe: -40,
      Storage: -60,
      Nye: -61,
      Pye: -62,
      Rye: -63,
      Qye: -64,
      Mye: -65,
      Oye: -66,
      O8d: -80,
      T8d: -81,
      i9d: -82,
      h9d: -83,
      c9d: -84,
      Q8d: -86,
      W8d: -87,
      $8d: -88,
      Y8d: -89,
      R8d: -90,
      a9d: -91,
      A8f: -92,
      X8d: -93,
      S8d: -99,
      PBe: -100,
      Ecd: -101,
      Fcd: -102,
      whc: -103,
      RBe: -104,
      XLb: -120,
      jpb: -121,
      WBe: -122,
      XBe: -123
    }, Ke = { uje: 25E6, HLb: 'jpg jpeg jpe png gif bmp'.split(' ') },
    ad = { N0b: ';', u4b: ',', uAb: '.', BJd: ',', JNb: ';', M0b: ',', sOa: '.', bGa: ',' },
    uc = [37, 38, 42, 43, 45, 47, 58, 94],
    Be = 'A-Za-z_\u0080-\u0081\u0083\u0085-\u0087\u0089-\u008a\u008c-\u0091\u0093-\u0094\u0096-\u0097\u0099-\u009a\u009c-\u009f\u00a1-\u00a5\u00a7-\u00a8\u00aa\u00ad\u00af-\u00ba\u00bc-\u02b8\u02bb-\u02c1\u02c7\u02c9-\u02cb\u02cd\u02d0-\u02d1\u02d8-\u02db\u02dd\u02e0-\u02e4\u02ee\u0370-\u0373\u0376-\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0621-\u064a\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4-\u07f5\u07fa\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0972\u097b-\u097f\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58-\u0c59\u0c60-\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d3d\u0d60-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e3a\u0e40-\u0e4e\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edd\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8b\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10d0-\u10fa\u10fc\u1100-\u1159\u115f-\u11a2\u11a8-\u11f9\u1200-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u1676\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19a9\u19c1-\u19c7\u1a00-\u1a16\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae-\u1baf\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200e\u2010\u2013-\u2016\u2018\u201c-\u201d\u2020-\u2021\u2025-\u2027\u2030\u2032-\u2033\u2035\u203b\u2071\u2074\u207f\u2081-\u2084\u2090-\u2094\u2102-\u2103\u2105\u2107\u2109-\u2113\u2115-\u2116\u2119-\u211d\u2121-\u2122\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2153-\u2154\u215b-\u215e\u2160-\u2188\u2190-\u2199\u21d2\u21d4\u2200\u2202-\u2203\u2207-\u2208\u220b\u220f\u2211\u2215\u221a\u221d-\u2220\u2223\u2225\u2227-\u222c\u222e\u2234-\u2237\u223c-\u223d\u2248\u224c\u2252\u2260-\u2261\u2264-\u2267\u226a-\u226b\u226e-\u226f\u2282-\u2283\u2286-\u2287\u2295\u2299\u22a5\u22bf\u2312\u2460-\u24b5\u24d0-\u24e9\u2500-\u254b\u2550-\u2574\u2581-\u258f\u2592-\u2595\u25a0-\u25a1\u25a3-\u25a9\u25b2-\u25b3\u25b6-\u25b7\u25bc-\u25bd\u25c0-\u25c1\u25c6-\u25c8\u25cb\u25ce-\u25d1\u25e2-\u25e5\u25ef\u2605-\u2606\u2609\u260e-\u260f\u261c\u261e\u2640\u2642\u2660-\u2661\u2663-\u2665\u2667-\u266a\u266c-\u266d\u266f\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2c6f\u2c71-\u2c7d\u2c80-\u2ce4\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3000-\u3003\u3005-\u3017\u301d-\u301f\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31b7\u31f0-\u321c\u3220-\u3229\u3231-\u3232\u3239\u3260-\u327b\u327f\u32a3-\u32a8\u3303\u330d\u3314\u3318\u3322-\u3323\u3326-\u3327\u332b\u3336\u333b\u3349-\u334a\u334d\u3351\u3357\u337b-\u337e\u3380-\u3384\u3388-\u33ca\u33cd-\u33d3\u33d5-\u33d6\u33d8\u33db-\u33dd\u3400-\u4db5\u4e00-\u9fc3\ua000-\ua48c\ua500-\ua60c\ua610-\ua61f\ua62a-\ua62b\ua640-\ua65f\ua662-\ua66e\ua680-\ua697\ua722-\ua787\ua78b-\ua78c\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua90a-\ua925\ua930-\ua946\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uac00-\ud7a3\ue000-\uf848\uf900-\ufa2d\ufa30-\ufa6a\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe30-\ufe31\ufe33-\ufe44\ufe49-\ufe52\ufe54-\ufe57\ufe59-\ufe66\ufe68-\ufe6b\ufe70-\ufe74\ufe76-\ufefc\uff01-\uff5e\uff61-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc\uffe0-\uffe6',
    Fg = /^ *[-+*\/^&%<=>:] */, Nn = new XRegExp('^((?:_xlfn.)?[\\p{L}\\d.]+ *)[-+*/^&%<=>:;\\(\\)]'),
    dj = /^(\$?[A-Za-z]+\$?\d+:\$?[A-Za-z]+\$?\d+)(?:[-+*\/^&%<=>: ;),]|$)/,
    Qi = /^(([Rr]{1}(\[)?(-?\d*)(\])?)([Cc]{1}(\[)?(-?\d*)(\])?):([Rr]{1}(\[)?(-?\d*)(\])?)([Cc]{1}(\[)?(-?\d*)(\])?))([-+*\/^&%<=>: ;),]|$)/,
    Uj = /^(\$?[A-Za-z]+:\$?[A-Za-z]+)(?:[-+*\/^&%<=>: ;),]|$)/,
    w = /^(([Cc]{1}(\[)?(-?\d*)(\])?(:)?)([Cc]?(\[)?(-?\d*)(\])?))([-+*\/^&%<=>: ;),]|$)/,
    Oa = /^(\$?\d+:\$?\d+)(?:[-+*\/^&%<=>: ;),]|$)/,
    Km = /^(([Rr]{1}(\[)?(-?\d*)(\])?(:)?)([Rr]?(\[)?(-?\d*)(\])?))([-+*\/^&%<=>: ;),]|$)/,
    fj = /^ *(\$?[A-Za-z]{1,3}\$?(\d{1,7}))([-+*\/^&%<=>: ;),]|$)/,
    rm = /^(\$?[A-Za-z]+\$?(\d+))([-+*\/^&%<=>: ;),]|$)/,
    Ak = /^(([Rr]{1}(\[)?(-?\d*)(\])?)([Cc]{1}(\[)?(-?\d*)(\])?))([-+*\/^&%<=>: ;),]|$)/,
    Bj = new XRegExp('^(?<name_from>[' + Be + '][' + Be + '\\d.]*)(:(?<name_to>[' + Be + '][' + Be + '\\d.]*))?!', 'i'),
    Oo = new XRegExp('^\'(?<name_from>(?:\'\'|[^\\[\\]\'\\/*?:])*)(?::(?<name_to>(?:\'\'|[^\\[\\]\'\\/*?:])*))?\'!');
  new XRegExp('^(?<name_from>[^:]+)(:(?<name_to>[^:]+))?!');
  var Yd = /^ *[+-]?\d*(\d|\.)\d*([eE][+-]?\d+)?/, Ri =
      /^ *\)/, Qr = /^ *[,;] */, Jw = Ab(null), Yi = Ab(null), sk = Ia(Oe), Gn = sk, Ku = /^"((""|[^"])*)"/,
    Vk = new function () {
      this.bzd = /[A-Z_\u0080-\u0081\u0083\u0085-\u0087\u0089-\u008a\u008c-\u0091\u0093-\u0094\u0096-\u0097\u0099-\u009a\u009c-\u009f\u00a1-\u00a5\u00a7-\u00a8\u00aa\u00ad\u00af-\u00ba\u00bc-\u02b8\u02bb-\u02c1\u02c7\u02c9-\u02cb\u02cd\u02d0-\u02d1\u02d8-\u02db\u02dd\u02e0-\u02e4\u02ee\u0370-\u0373\u0376-\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0621-\u064a\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4-\u07f5\u07fa\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0972\u097b-\u097f\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58-\u0c59\u0c60-\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d3d\u0d60-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e3a\u0e40-\u0e4e\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edd\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8b\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10d0-\u10fa\u10fc\u1100-\u1159\u115f-\u11a2\u11a8-\u11f9\u1200-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u1676\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19a9\u19c1-\u19c7\u1a00-\u1a16\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae-\u1baf\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2010\u2013-\u2016\u2018\u201c-\u201d\u2020-\u2021\u2025-\u2027\u2030\u2032-\u2033\u2035\u203b\u2071\u2074\u207f\u2081-\u2084\u2090-\u2094\u2102-\u2103\u2105\u2107\u2109-\u2113\u2115-\u2116\u2119-\u211d\u2121-\u2122\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2153-\u2154\u215b-\u215e\u2160-\u2188\u2190-\u2199\u21d2\u21d4\u2200\u2202-\u2203\u2207-\u2208\u220b\u220f\u2211\u2215\u221a\u221d-\u2220\u2223\u2225\u2227-\u222c\u222e\u2234-\u2237\u223c-\u223d\u2248\u224c\u2252\u2260-\u2261\u2264-\u2267\u226a-\u226b\u226e-\u226f\u2282-\u2283\u2286-\u2287\u2295\u2299\u22a5\u22bf\u2312\u2460-\u24b5\u24d0-\u24e9\u2500-\u254b\u2550-\u2574\u2581-\u258f\u2592-\u2595\u25a0-\u25a1\u25a3-\u25a9\u25b2-\u25b3\u25b6-\u25b7\u25bc-\u25bd\u25c0-\u25c1\u25c6-\u25c8\u25cb\u25ce-\u25d1\u25e2-\u25e5\u25ef\u2605-\u2606\u2609\u260e-\u260f\u261c\u261e\u2640\u2642\u2660-\u2661\u2663-\u2665\u2667-\u266a\u266c-\u266d\u266f\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2c6f\u2c71-\u2c7d\u2c80-\u2ce4\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3000-\u3003\u3005-\u3017\u301d-\u301f\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31b7\u31f0-\u321c\u3220-\u3229\u3231-\u3232\u3239\u3260-\u327b\u327f\u32a3-\u32a8\u3303\u330d\u3314\u3318\u3322-\u3323\u3326-\u3327\u332b\u3336\u333b\u3349-\u334a\u334d\u3351\u3357\u337b-\u337e\u3380-\u3384\u3388-\u33ca\u33cd-\u33d3\u33d5-\u33d6\u33d8\u33db-\u33dd\u3400-\u4db5\u4e00-\u9fc3\ua000-\ua48c\ua500-\ua60c\ua610-\ua61f\ua62a-\ua62b\ua640-\ua65f\ua662-\ua66e\ua680-\ua697\ua722-\ua787\ua78b-\ua78c\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua90a-\ua925\ua930-\ua946\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uac00-\ud7a3\ue000-\uf848\uf900-\ufa2d\ufa30-\ufa6a\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe30-\ufe31\ufe33-\ufe44\ufe49-\ufe52\ufe54-\ufe57\ufe59-\ufe66\ufe68-\ufe6b\ufe70-\ufe74\ufe76-\ufefc\uff01-\uff5e\uff61-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc\uffe0-\uffe6]/i;
      this.czd = /[\u0001-&(-)+--;->@^`{-\u007f\u0082\u0084\u008b\u0092\u0095\u0098\u009b\u00a0\u00a6\u00a9\u00ab-\u00ac\u00ae\u00bb\u0378-\u0379\u037e-\u0383\u0387\u038b\u038d\u03a2\u0524-\u0530\u0557-\u0558\u055a-\u0560\u0588-\u0590\u05be\u05c0\u05c3\u05c6\u05c8-\u05cf\u05eb-\u05ef\u05f3-\u05ff\u0604-\u0605\u0609-\u060a\u060c-\u060d\u061b-\u061e\u0620\u065f\u066a-\u066d\u06d4\u0700-\u070e\u074b-\u074c\u07b2-\u07bf\u07f7-\u07f9\u07fb-\u0900\u093a-\u093b\u094e-\u094f\u0955-\u0957\u0964-\u0965\u0970\u0973-\u097a\u0980\u0984\u098d-\u098e\u0991-\u0992\u09a9\u09b1\u09b3-\u09b5\u09ba-\u09bb\u09c5-\u09c6\u09c9-\u09ca\u09cf-\u09d6\u09d8-\u09db\u09de\u09e4-\u09e5\u09fb-\u0a00\u0a04\u0a0b-\u0a0e\u0a11-\u0a12\u0a29\u0a31\u0a34\u0a37\u0a3a-\u0a3b\u0a3d\u0a43-\u0a46\u0a49-\u0a4a\u0a4e-\u0a50\u0a52-\u0a58\u0a5d\u0a5f-\u0a65\u0a76-\u0a80\u0a84\u0a8e\u0a92\u0aa9\u0ab1\u0ab4\u0aba-\u0abb\u0ac6\u0aca\u0ace-\u0acf\u0ad1-\u0adf\u0ae4-\u0ae5\u0af0\u0af2-\u0b00\u0b04\u0b0d-\u0b0e\u0b11-\u0b12\u0b29\u0b31\u0b34\u0b3a-\u0b3b\u0b45-\u0b46\u0b49-\u0b4a\u0b4e-\u0b55\u0b58-\u0b5b\u0b5e\u0b64-\u0b65\u0b72-\u0b81\u0b84\u0b8b-\u0b8d\u0b91\u0b96-\u0b98\u0b9b\u0b9d\u0ba0-\u0ba2\u0ba5-\u0ba7\u0bab-\u0bad\u0bba-\u0bbd\u0bc3-\u0bc5\u0bc9\u0bce-\u0bcf\u0bd1-\u0bd6\u0bd8-\u0be5\u0bfb-\u0c00\u0c04\u0c0d\u0c11\u0c29\u0c34\u0c3a-\u0c3c\u0c45\u0c49\u0c4e-\u0c54\u0c57\u0c5a-\u0c5f\u0c64-\u0c65\u0c70-\u0c77\u0c80-\u0c81\u0c84\u0c8d\u0c91\u0ca9\u0cb4\u0cba-\u0cbb\u0cc5\u0cc9\u0cce-\u0cd4\u0cd7-\u0cdd\u0cdf\u0ce4-\u0ce5\u0cf0\u0cf3-\u0d01\u0d04\u0d0d\u0d11\u0d29\u0d3a-\u0d3c\u0d45\u0d49\u0d4e-\u0d56\u0d58-\u0d5f\u0d64-\u0d65\u0d76-\u0d78\u0d80-\u0d81\u0d84\u0d97-\u0d99\u0db2\u0dbc\u0dbe-\u0dbf\u0dc7-\u0dc9\u0dcb-\u0dce\u0dd5\u0dd7\u0de0-\u0df1\u0df4-\u0e00\u0e3b-\u0e3e\u0e4f\u0e5a-\u0e80\u0e83\u0e85-\u0e86\u0e89\u0e8b-\u0e8c\u0e8e-\u0e93\u0e98\u0ea0\u0ea4\u0ea6\u0ea8-\u0ea9\u0eac\u0eba\u0ebe-\u0ebf\u0ec5\u0ec7\u0ece-\u0ecf\u0eda-\u0edb\u0ede-\u0eff\u0f04-\u0f12\u0f3a-\u0f3d\u0f48\u0f6d-\u0f70\u0f85\u0f8c-\u0f8f\u0f98\u0fbd\u0fcd\u0fd0-\u0fff\u104a-\u104f\u109a-\u109d\u10c6-\u10cf\u10fb\u10fd-\u10ff\u115a-\u115e\u11a3-\u11a7\u11fa-\u11ff\u1249\u124e-\u124f\u1257\u1259\u125e-\u125f\u1289\u128e-\u128f\u12b1\u12b6-\u12b7\u12bf\u12c1\u12c6-\u12c7\u12d7\u1311\u1316-\u1317\u135b-\u135e\u1361-\u1368\u137d-\u137f\u139a-\u139f\u13f5-\u1400\u166d-\u166e\u1677-\u167f\u169b-\u169f\u16eb-\u16ed\u16f1-\u16ff\u170d\u1715-\u171f\u1735-\u173f\u1754-\u175f\u176d\u1771\u1774-\u177f\u17d4-\u17d6\u17d8-\u17da\u17de-\u17df\u17ea-\u17ef\u17fa-\u180a\u180f\u181a-\u181f\u1878-\u187f\u18ab-\u18ff\u191d-\u191f\u192c-\u192f\u193c-\u193f\u1941-\u1945\u196e-\u196f\u1975-\u197f\u19aa-\u19af\u19ca-\u19cf\u19da-\u19df\u1a1c-\u1aff\u1b4c-\u1b4f\u1b5a-\u1b60\u1b7d-\u1b7f\u1bab-\u1bad\u1bba-\u1bff\u1c38-\u1c3f\u1c4a-\u1c4c\u1c7e-\u1cff\u1de7-\u1dfd\u1f16-\u1f17\u1f1e-\u1f1f\u1f46-\u1f47\u1f4e-\u1f4f\u1f58\u1f5a\u1f5c\u1f5e\u1f7e-\u1f7f\u1fb5\u1fc5\u1fd4-\u1fd5\u1fdc\u1ff0-\u1ff1\u1ff5\u1fff\u2011-\u2012\u2017\u2019-\u201b\u201e-\u201f\u2022-\u2024\u2031\u2034\u2036-\u203a\u203c-\u2043\u2045-\u2051\u2053-\u205e\u2065-\u2069\u2072-\u2073\u207d-\u207e\u208d-\u208f\u2095-\u209f\u20b6-\u20cf\u20f1-\u20ff\u2150-\u2152\u2189-\u218f\u2329-\u232a\u23e8-\u23ff\u2427-\u243f\u244b-\u245f\u269e-\u269f\u26bd-\u26bf\u26c4-\u2700\u2705\u270a-\u270b\u2728\u274c\u274e\u2753-\u2755\u2757\u275f-\u2760\u2768-\u2775\u2795-\u2797\u27b0\u27bf\u27c5-\u27c6\u27cb\u27cd-\u27cf\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc-\u29fd\u2b4d-\u2b4f\u2b55-\u2bff\u2c2f\u2c5f\u2c70\u2c7e-\u2c7f\u2ceb-\u2cfc\u2cfe-\u2cff\u2d26-\u2d2f\u2d66-\u2d6e\u2d70-\u2d7f\u2d97-\u2d9f\u2da7\u2daf\u2db7\u2dbf\u2dc7\u2dcf\u2dd7\u2ddf\u2e00-\u2e2e\u2e30-\u2e7f\u2e9a\u2ef4-\u2eff\u2fd6-\u2fef\u2ffc-\u2fff\u3018-\u301c\u3030\u303d\u3040\u3097-\u3098\u30a0\u3100-\u3104\u312e-\u3130\u318f\u31b8-\u31bf\u31e4-\u31ef\u321f\u3244-\u324f\u32ff\u4db6-\u4dbf\u9fc4-\u9fff\ua48d-\ua48f\ua4c7-\ua4ff\ua60d-\ua60f\ua62c-\ua63f\ua660-\ua661\ua673-\ua67b\ua67e\ua698-\ua6ff\ua78d-\ua7fa\ua82c-\ua83f\ua874-\ua87f\ua8c5-\ua8cf\ua8da-\ua8ff\ua92f\ua954-\ua9ff\uaa37-\uaa3f\uaa4e-\uaa4f\uaa5a-\uabff\ud7a4-\ud7ff\ufa2e-\ufa2f\ufa6b-\ufa6f\ufada-\ufaff\ufb07-\ufb12\ufb18-\ufb1c\ufb37\ufb3d\ufb3f\ufb42\ufb45\ufbb2-\ufbd2\ufd3e-\ufd4f\ufd90-\ufd91\ufdc8-\ufdef\ufdfe-\ufdff\ufe10-\ufe1f\ufe27-\ufe2f\ufe32\ufe45-\ufe48\ufe53\ufe58\ufe67\ufe6c-\ufe6f\ufe75\ufefd-\ufefe\uff00\uff5f-\uff60\uffbf-\uffc1\uffc8-\uffc9\uffd0-\uffd1\uffd8-\uffd9\uffdd-\uffdf\uffe7\uffef-\ufff8\ufffe-\uffff]/ig;
      this.ezd = /[,\s-+/^&%<=>]/ig;
      this.dzd = /['*\[\]\:/?]/ig;
      this.test = function (f) {
        var w = f.substr(0, 1);
        this.dzd.lastIndex = 0;
        this.bzd.lastIndex = 0;
        this.czd.lastIndex = 0;
        this.ezd.lastIndex = 0;
        if (this.dzd.test(f)) return e;
        if (this.bzd.test(w)) {
          if (this.czd.test(f) || this.ezd.test(f)) return !1;
          f = f.match(fj);
          if (null != f) {
            w = f[1];
            var Oa = f[2];
            if (3 <= f.length && Yg.lPb(w.substr(0, w.length - Oa.length)) <= AscCommon.Sxa && parseInt(Oa) <= AscCommon.Qib) return !1;
          }
          return !0;
        }
        return !1;
      };
      return this;
    }, up = /^ +/, Ji = new XRegExp('^(?<name>[' + Be +
    '][' + Be + '\\d.]*)([-+*\\/^&%<=>: ;/\n/),]|$)'), On = new function () {
      var e = new RegExp('(^([' + Be + '_])([' + Be + '_0-9]*)$)', 'i');
      this.test = function (f) {
        if (!e.test(f) && '_xlnm.print_area' !== f) return !1;
        f = f.match(fj);
        if (null != f) {
          var w = f[1];
          var Oa = f[2];
          if (3 <= f.length && Yg.lPb(w.substr(0, w.length - Oa.length)) <= AscCommon.Sxa && parseInt(Oa) <= AscCommon.Qib) return !1;
        }
        return !0;
      };
      return this;
    }, tp = /^ *[,;] */, Ju = /^ *[+-]?\d*(\d|\.)\d*([eE][+-]?\d+)?/, vj = /^ *[,;] */,
    ht = /^(mailto:)?([a-z0-9'\._-]+@[a-z0-9\.-]+\.[a-z0-9]{2,4})([a-\u044f\u04510-9\._%+-=\? :&]*)/i,
    vp = /^(((https?)|(ftps?)):\/\/)?([\-\w\u0430-\u044f\u0451]*:?[\-\w\u0430-\u044f\u0451]*@)?(((1[0-9]{2}|2[0-4][0-9]|25[0-5]|[1-9][0-9]|[0-9])\.){3}(1[0-9]{2}|2[0-4][0-9]|25[0-5]|[1-9][0-9]|[0-9]))(:\d+)?(\/[%\-\w\u0430-\u044f\u0451]*(\.[\w\u0430-\u044f\u0451]{2,})?(([\w\u0430-\u044f\u0451\-\.\?\\\/+@&#;:`~=%!,\(\)]*)(\.[\w\u0430-\u044f\u0451]{2,})?)*)*\/?/i,
    wr = /^(((https?)|(ftps?)):\/\/)?([\-\w\u0430-\u044f\u0451]*:?[\-\w\u0430-\u044f\u0451]*@)?(([\-\w\u0430-\u044f\u0451]+\.)+[\w\u0430-\u044f\u0451\-]{2,}(:\d+)?(\/[%\-\w\u0430-\u044f\u0451]*(\.[\w\u0430-\u044f\u0451]{2,})?(([\w\u0430-\u044f\u0451\-\.\?\\\/+@&#;:`'~=%!,\(\)]*)(\.[\w\u0430-\u044f\u0451]{2,})?)*)*\/?)/i,
    Hs = /^(((https?)|(ftps?)):\/\/)([\-\w\u0430-\u044f\u0451]*:?[\-\w\u0430-\u044f\u0451]*@)?(([\-\w\u0430-\u044f\u0451]+)(:\d+)?(\/[%\-\w\u0430-\u044f\u0451]*(\.[\w\u0430-\u044f\u0451]{2,})?(([\w\u0430-\u044f\u0451\-\.\?\\\/+@&#;:`'~=%!,\(\)]*)(\.[\w\u0430-\u044f\u0451]{2,})?)*)*\/?)/i,
    Ym = ob(null), Hq = ob(null);
  Jd.prototype.jW = function () {
    this.vo = this.Bt = null;
  };
  Jd.prototype.Itd = function (e, f) {
    this instanceof Jd && this.jW();
    for (var w, Oa = !1, Ia = e.length; f !== Ia;) if (w = e.charCodeAt(f), -1 !== uc.indexOf(w)) {
      this.Bt =
        e[f];
      ++f;
      Oa = !0;
      break;
    } else if (60 <= w && 62 >= w) {
      this.Bt = e[f];
      for (++f; f !== Ia;) {
        w = e.charCodeAt(f);
        if (60 > w || 62 < w) break;
        this.Bt += e[f];
        ++f;
      }
      Oa = !0;
      break;
    } else if (32 === w || 10 === w) ++f; else break;
    if (Oa) {
      for (; f !== Ia;) {
        w = e.charCodeAt(f);
        if (32 !== w && 10 !== w) break;
        ++f;
      }
      this.vo = f;
      return !0;
    }
    return !1;
  };
  Jd.prototype.KZf = function (e, f) {
    this instanceof Jd && this.jW();
    e = e.substring(f).match(Nn);
    return null != e && 2 == e.length ? (this.vo += e[1].length, this.Bt = e[1], !0) : !1;
  };
  Jd.prototype.kWa = function (e, f, w, Oa) {
    var Ia = AscCommonExcel.m5b, Da = '';
    null !== e && null !== f ? (isNaN(e) && (e = 0, w = !1), isNaN(f) && (f = 0, Oa = !1), f = Yg.b1b(!Oa && Ia ? Ia.Ga + 1 + f : f), e = !w && Ia ? Ia.Ea + 1 + e : e, Oa && (f = '$' + f), w && (e = '$' + e), Da = f + e) : null !== f ? (isNaN(f) && (f = 0, Oa = !1), f = Yg.b1b(!Oa && Ia ? Ia.Ga + 1 + f : f), Oa && (f = '$' + f), Da = f) : null !== e && (isNaN(e) && (e = 0, w = !1), e = !w && Ia ? Ia.Ea + 1 + e + '' : e + '', w && (e = '$' + e), Da = e);
    return Da;
  };
  Jd.prototype.O5b = function (f, Ia) {
    function Da(f) {
      var w = !0;
      '' === f[9] || f[9] === e || ':' === f[6] && '' !== f[7] && f[7] !== e ? '' !== f[7] && f[7] !== e && ':' !== f[6] ? w = !1 : '' !== f[7] && f[7] !== e || ':' !== f[6] || (w =
        !1) : w = !1;
      return w;
    }

    function Ra(f, w) {
      var Oa = null;
      f === w && f === e ? Oa = !0 : '[' === f && ']' === w && (Oa = !1);
      return Oa;
    }

    this instanceof Jd && this.jW();
    Ia = f.substring(Ia);
    if (AscCommonExcel.eT) if (null !== (f = Ia.match(Qi))) {
      var Xa = Ra(f[3], f[5]);
      Ia = Ra(f[7], f[9]);
      var Ha = Ra(f[11], f[13]);
      var Va = Ra(f[15], f[17]);
      if (null !== Xa && null !== Ia && null !== Ha && null !== Va && (Xa = AscCommon.PT.kWa(parseInt(f[4]), parseInt(f[8]), Xa, Ia), Ia = AscCommon.PT.kWa(parseInt(f[12]), parseInt(f[16]), Ha, Va), Yg.r7(Xa).pB() && Yg.r7(Ia).pB())) return this.vo += f[1].length,
        this.Bt = f[1], this.Cea = Xa + ':' + Ia, !0;
    } else if (null != (f = Ia.match(w))) {
      if (Da(f) && (Xa = Ra(f[3], f[5]), Ia = Ra(f[8], f[10]), null !== Xa && null !== Ia && (Xa = AscCommon.PT.kWa(null, parseInt(f[4]), null, Xa), Ia = '' !== f[7] ? AscCommon.PT.kWa(null, parseInt(f[9]), null, Ia) : Xa, Yg.r7(Xa).pB() && Yg.r7(Ia).pB()))) return this.vo += f[1].length, this.Bt = f[1], this.Cea = Xa + ':' + Ia, !0;
    } else {
      if (null != (f = Ia.match(Km)) && Da(f) && (Xa = Ra(f[3], f[5]), Ia = Ra(f[8], f[10]), null !== Xa && null !== Ia && (Xa = AscCommon.PT.kWa(parseInt(f[4]), null, Xa), Ia = '' !== f[7] ? AscCommon.PT.kWa(parseInt(f[9]),
        null, Ia) : Xa, Yg.r7(Xa).pB() && Yg.r7(Ia).pB()))) return this.vo += f[1].length, this.Bt = f[1], this.Cea = Xa + ':' + Ia, !0;
    } else if (f = Ia.match(dj) || Ia.match(Uj) || Ia.match(Oa), null != f && (Ia = f[1].split(':'), Yg.r7(Ia[0]).pB() && Yg.r7(Ia[1]).pB())) return this.vo += f[1].length, this.Bt = f[1], !0;
    return !1;
  };
  Jd.prototype.V5b = function (f, w, Oa) {
    this instanceof Jd && this.jW();
    var Ia = f.substring(w);
    if (AscCommonExcel.eT) {
      var Da = Ia.match(Ak);
      if (null != Da && (Da[3] === Da[5] || '[' === Da[3] && ']' === Da[5]) && (Da[7] === Da[9] || '[' === Da[7] && ']' === Da[9]) &&
        (f = Da[0], w = Da[1], Oa = AscCommon.PT.kWa(parseInt(Da[4]), parseInt(Da[8]), !Da[3], !Da[7]), Yg.r7(Oa).pB())) return this.vo += -1 < f.indexOf(' ') ? f.length - 1 : w.length, this.Bt = w, this.Cea = Oa, !0;
    } else if (Da = Ia.match(fj), null != Da) {
      f = Da[0];
      w = Da[1];
      if (Yg.r7(w).pB()) return this.vo += -1 < f.indexOf(' ') ? f.length - 1 : w.length, this.Bt = w, !0;
      if (Oa && (Da = Ia.match(rm), (null != Da || Da != e) && 3 <= Da.length)) return w = Da[1], this.vo += w.length, this.Bt = w, !0;
    }
    return !1;
  };
  Jd.prototype.jtd = function (e, f) {
    this instanceof Jd && this.jW();
    e = e.substring(f);
    e = XRegExp.exec(e, Oo) || XRegExp.exec(e, Bj);
    return null != e ? (this.vo += e[0].length, this.Bt = e[1], [!0, e.name_from ? e.name_from.replace(/''/g, '\'') : null, e.name_to ? e.name_to.replace(/''/g, '\'') : null]) : [!1, null, null];
  };
  Jd.prototype.UZf = function (e, f) {
    this instanceof Jd && this.jW();
    e = e.substring(f);
    var w;
    return null == e.match(Ri) && null == e.match(vj) && null == e.match(Fg) && null != (w = e.match(up)) ? (this.vo += w[0].length, this.Bt = w[0][0], !0) : !1;
  };
  Jd.prototype.hEb = function (e, f, w) {
    this instanceof Jd && this.jW();
    e = e.substring(f).match(w ?
      Yd : Ju);
    return null != e ? (this.Bt = e[0].replace(ad.sOa, ad.uAb), this.vo += e[0].length, !0) : !1;
  };
  Jd.prototype.OZf = function (e, f) {
    this instanceof Jd && this.jW();
    for (var w, Oa = !1, Ia = e.length; f !== Ia;) if (w = e.charCodeAt(f), 40 === w) {
      this.Bt = e[f];
      ++f;
      Oa = !0;
      break;
    } else if (32 === w) ++f; else break;
    if (Oa) {
      for (; f !== Ia;) {
        w = e.charCodeAt(f);
        if (32 !== w) break;
        ++f;
      }
      this.vo = f;
      return !0;
    }
    return !1;
  };
  Jd.prototype.$Zf = function (e, f) {
    this instanceof Jd && this.jW();
    for (var w, Oa = !1, Ia = e.length; f !== Ia;) if (w = e.charCodeAt(f), 41 === w) {
      this.Bt = e[f];
      ++f;
      Oa = !0;
      break;
    } else if (32 === w) ++f; else break;
    if (Oa) {
      for (; f !== Ia;) {
        w = e.charCodeAt(f);
        if (32 !== w) break;
        ++f;
      }
      this.vo = f;
      return !0;
    }
  };
  Jd.prototype.CZf = function (e, f) {
    this instanceof Jd && this.jW();
    e = e.substring(f).match(vj);
    return null != e ? (this.Bt = e[0], this.vo += e[0].length, !0) : !1;
  };
  Jd.prototype.yZf = function (e, f, w) {
    this instanceof Jd && this.jW();
    e = e.substring(f).match(w ? Qr : tp);
    return null != e ? (this.Bt = e[0], this.vo += e[0].length, !0) : !1;
  };
  Jd.prototype.fCf = function (e, f, w) {
    this instanceof Jd && this.jW();
    e = e.substring(f).match(w ?
      Yi : Jw);
    return null != e ? (this.Bt = e[0], this.vo += e[0].length, !0) : !1;
  };
  Jd.prototype.Icf = function (e, f, w) {
    this instanceof Jd && this.jW();
    e = e.substring(f).match(w ? Gn : sk);
    return null != e ? (this.Bt = e[1], this.vo += e[1].length, !0) : !1;
  };
  Jd.prototype.oCf = function (e, f) {
    this instanceof Jd && this.jW();
    e = e.substring(f).match(Ku);
    return null != e ? (this.Bt = e[1].replace('""', '"'), this.vo += e[0].length, !0) : !1;
  };
  Jd.prototype.djb = function (e, f) {
    this instanceof Jd && this.jW();
    e = XRegExp.exec(e.substring(f), Ji);
    if (null != e) {
      if ((e = e.name) &&
        0 !== e.length && e.toUpperCase() !== Ee.t && e.toUpperCase() !== Ee.f) return this.vo += e.length, this.Bt = e, [!0, e];
      this.Bt = e;
    }
    return [!1];
  };
  Jd.prototype.NZf = function (e, f) {
    this instanceof Jd && this.jW();
    for (var w, Oa = !1, Ia = e.length; f !== Ia;) if (w = e.charCodeAt(f), 123 === w) {
      this.Bt = e[f];
      ++f;
      Oa = !0;
      break;
    } else if (32 === w) ++f; else break;
    if (Oa) {
      for (; f !== Ia;) {
        w = e.charCodeAt(f);
        if (32 !== w) break;
        ++f;
      }
      this.vo = f;
      return !0;
    }
  };
  Jd.prototype.ZZf = function (e, f) {
    this instanceof Jd && this.jW();
    for (var w, Oa = !1, Ia = e.length; f !== Ia;) if (w = e.charCodeAt(f),
    125 === w) {
      this.Bt = e[f];
      ++f;
      Oa = !0;
      break;
    } else if (32 === w) ++f; else break;
    if (Oa) {
      for (; f !== Ia;) {
        w = e.charCodeAt(f);
        if (32 !== w) break;
        ++f;
      }
      this.vo = f;
      return !0;
    }
  };
  Jd.prototype.LS = function (e, f, w) {
    this instanceof Jd && this.jW();
    e = XRegExp.exec(e.substring(f), w ? Hq : Ym);
    return null != e && e.tableName ? (this.Bt = e[0], this.vo += e[0].length, e) : !1;
  };
  Jd.prototype.Upa = function (e) {
    var f = this.jtd(e, 0);
    if (f && !0 === f[0]) {
      var w = f[1], Oa = null !== this.vo ? this.vo : e.indexOf('!') + 1;
      if ((this.O5b(e, Oa) || this.V5b(e, Oa)) && this.Bt.length == e.substring(Oa).length) return {
        sheet: w,
        A_a: f[2], Cg: this.Bt
      };
    }
    return null;
  };
  Jd.prototype.PY = function (f, w) {
    f = f.split(':');
    var Oa = f[0];
    f = f[1] === e ? Oa : f[1];
    if (Vk.test(Oa) && Vk.test(f)) return (Oa !== f ? Oa + ':' + f : Oa) + '!' + w;
    Oa = Oa.replace(/'/g, '\'\'');
    f = f.replace(/'/g, '\'\'');
    return '\'' + (Oa !== f ? Oa + ':' + f : Oa) + '\'!' + w;
  };
  Jd.prototype.zgb = function (e) {
    return Vk.test(e) ? e : '\'' + e.replace(/'/g, '\'\'') + '\'';
  };
  Jd.prototype.yUd = function (e, f, w, Oa, Ia, Da, Ra) {
    var Xa, Ha, Va;
    Asc.cgb.Co === w ? (Xa = ox.Upa(Oa)) && (Va = e.Bwa(Xa.sheet)) && (Ha = AscCommonExcel.gI.mP(Xa.Cg)) : Ha = AscCommonExcel.gI.mP(Oa);
    if (!Ha) return Asc.rl.Fg.q3b;
    if (Ia) if (Asc.cgb.Co === w) if (Da ? (e = Ha.kb - Ha.Ea + 1, Ha = Ha.ib - Ha.Ga + 1) : (e = Ha.ib - Ha.Ga + 1, Ha = Ha.kb - Ha.Ea + 1), Asc.Fk.r4 === Ra) {
      if (Ra = new Asc.eka, Ra.Rdb(Asc.Fk.r4), Ra.Cjb(Oa), Ra.Jdb(!Da), Oa = AscFormat.wQb(Va, Ra).mb, 4 !== Oa.length || !Oa[0].Jc || !Oa[0].Jc.Al || 4 > Oa[0].Jc.Al.length) return Asc.rl.Fg.FLb;
    } else {
      if (255 < e) return Asc.rl.Fg.Bcc;
      if (4096 < Ha) return Asc.rl.Fg.W3c;
    } else if (Asc.cgb.Fae === w) {
      if (!0 === f.ag().Bc.ro.YZf(Ha)) return Asc.rl.Fg.o_b;
      if (f.ag().FQc(Ha, !0, !0)) return Asc.rl.Fg.MHc;
    } else if (Asc.cgb.Jsf ===
      w && (Oa = f.ag().jQf(Ha), null !== Oa)) return Oa;
    return Asc.rl.Fg.nY;
  };
  Jd.prototype.SEf = function (e) {
    e != ad.uAb ? (ad.sOa = e, ad.JNb = ';', ad.M0b = '\\', ad.bGa = ';', Yd = new RegExp('^ *[+-]?\\d*(\\d|\\' + ad.sOa + ')\\d*([eE][+-]?\\d+)?'), Qr = new RegExp('^ *[' + ad.JNb + '\\' + ad.M0b + '] *')) : (ad.JNb = ad.N0b, ad.M0b = ad.u4b, ad.sOa = ad.uAb, ad.bGa = ad.BJd, Yd = new RegExp('^ *[+-]?\\d*(\\d|\\' + ad.uAb + ')\\d*([eE][+-]?\\d+)?'), Qr = new RegExp('^ *[' + ad.N0b + '\\' + ad.u4b + '] *'));
    Hq = Ra();
  };
  Jd.prototype.nzf = function (e) {
    switch (e.toLowerCase()) {
      case '#' +
      Hf.a.toLocaleLowerCase():
      case '#All'.toLocaleLowerCase():
        e = sd.all;
        break;
      case '#' + Hf.d.toLocaleLowerCase():
      case '#Data'.toLocaleLowerCase():
        e = sd.data;
        break;
      case '#' + Hf.h.toLocaleLowerCase():
      case '#Headers'.toLocaleLowerCase():
        e = sd.headers;
        break;
      case '#' + Hf.t.toLocaleLowerCase():
      case '#Totals'.toLocaleLowerCase():
        e = sd.Z2b;
        break;
      case '#' + Hf.tr.toLocaleLowerCase():
      case '@'.toLocaleLowerCase():
      case '#This Row'.toLocaleLowerCase():
        e = sd.Ujb;
        break;
      default:
        e = sd.data;
    }
    return e;
  };
  Jd.prototype.MWf = function (e, f) {
    switch (e) {
      case sd.all:
        return f ?
          '#' + Hf.a : '#All';
      case sd.data:
        return f ? '#' + Hf.d : '#Data';
      case sd.headers:
        return f ? '#' + Hf.h : '#Headers';
      case sd.Z2b:
        return f ? '#' + Hf.t : '#Totals';
      case sd.Ujb:
        return f ? '#' + Hf.tr : '#This Row';
    }
    return null;
  };
  var ox = new Jd, tv = new function () {
    this.map = {};
    this.Sud = {};
    this.value = function (e) {
      var w = this.map;
      f.AscDesktopEditor && !AscCommon.qf.oMa && AscCommon.qf.Zx && (w = this.Sud);
      return w[e] ? w[e] : e;
    };
    this.register = function (e, w, Oa, Ia) {
      De.eH ? w.lastIndexOf('.cur') != w.length - 4 ? this.map[e] = 'url(../../../../sdkjs/common/Images/' +
        w + (De.Zx ? '_2x' : '') + '.cur), ' + Ia : this.map[e] = 'url(../../../../sdkjs/common/Images/' + w + '), ' + Ia : f.opera ? this.map[e] = Ia : (this.map[e] = 'url(\'../../../../sdkjs/common/Images/' + Oa[0] + '.png\') ' + Oa[1] + ' ' + Oa[2] + ', ' + Ia, this.Sud[e] = 'url(\'../../../../sdkjs/common/Images/' + Oa[0] + '_2x.png\') ' + (Oa[1] << 1) + ' ' + (Oa[2] << 1) + ', ' + Ia);
    };
  };
  tv.register('de-formatpainter', 'text_copy', ['text_copy', 2, 11], 'pointer');
  Ye.prototype.lg = function () {
    if (!0 === this.$p || null === this.RP) return this.lBc++, '' + this.lBc;
    this.kBc++;
    return '' + this.RP +
      '_' + this.kBc;
  };
  Ye.prototype.i0b = function (e) {
    this.RP = e;
  };
  Ye.prototype.gUa = function (e) {
    this.$p = e;
  };
  Ye.prototype.Oi = function () {
    this.RP = null;
    this.$p = !0;
    this.kBc = this.lBc = 0;
  };
  af.prototype.Ui = function () {
    return this.ka;
  };
  af.prototype.GJ = function (e, f) {
    e === be && (this.Ol = null);
    this.ka = e;
    var w = editor;
    e = w.La.Za;
    if (0 != f && e) {
      f = e.yb;
      f.VD();
      f.HG();
      if (w.QC === AscCommon.$z.RA) {
        var Oa = e.ie[e.lc];
        Oa && Oa.QR && Oa.QR.Hf === this && f.Czb(e.lc, Oa.Cfb, Oa.Usb());
      }
      var Ia = w.oTd();
      w = [];
      f = 0;
      for (Oa = Ia.length; f < Oa; ++f) w.push(Ia[f].Element);
      Ia = !1;
      f = 0;
      for (Oa = w.length; f < Oa; ++f) if (w[f].U5a() === this) {
        Ia = !0;
        break;
      }
      Ia && (e.wz.f8d(), e.Ge(!1));
    }
  };
  af.prototype.gn = function (e) {
    this.ka === ge ? AscCommon.Rd.n9(!1) : this.ka === ae || this.ka === ch || this.ka === Td ? AscCommon.Rd.n9(!0) : AscCommon.Rd.n9(e);
  };
  af.prototype.Hf = function (e) {
    be === this.ka && (!0 === e ? this.ka = ge : (!0).ka = ae);
  };
  af.prototype.u6 = function () {
    return be != this.ka && ge != this.ka ? !0 : !1;
  };
  af.prototype.i0b = function (e) {
    this.Ol = e;
  };
  af.prototype.NZ = function () {
    return ch === this.ka || Td === this.ka ? !0 : !1;
  };
  Qf.prototype.ma =
    function (e) {
      this.gT.push(e);
    };
  Qf.prototype.auf = function (e) {
    for (var f = 0, w = this.gT.length; f < w; ++f) if (this.gT[f].LJ === e) {
      this.gT.splice(f, 1);
      break;
    }
  };
  Qf.prototype.Oi = function () {
    this.gT.length = 0;
  };
  Qf.prototype.gn = function (e, f) {
    var w = f;
    f = this.gT.length;
    for (var Oa = 0; Oa < f; Oa++) if (w = this.gT[Oa].L7d(e, w), !1 === w) return !1;
    return w;
  };
  Qf.prototype.tha = function () {
    for (var e = this.gT.length, f = 0; f < e; f++) this.gT[f].qGd();
  };
  sh.prototype.qGd = function () {
    var e = AscCommon.History.Oaa, f = e.wa;
    this.LJ.xb.xz = !0;
    this.LJ.xb.xm = this.tka;
    e.Wb(this.LJ.Oa.sb());
    e.eb(this.LJ.xb.ka);
    this.LJ.xb.Ie(e);
    e = e.wa - f;
    this.LJ.TQa.Ua = f;
    this.LJ.TQa.R2a = e;
  };
  sh.prototype.L7d = function (e, f) {
    if (Cc === e) for (e = 0; e < this.Fud; e++) !1 !== this.tka[e] && (f <= this.tka[e] ? this.tka[e]++ : Cc === this.tP ? f++ : f--); else for (e = 0; e < this.Fud; e++) if (!1 !== this.tka[e]) if (f < this.tka[e]) this.tka[e]--; else if (f > this.tka[e]) Cc === this.tP ? f++ : f--; else {
      if (AscCommon.i7 === this.tP) return this.tka[e] = !1;
      f++;
    }
    return f;
  };
  sh.prototype.Rie = function (e, f, w) {
    var Oa = [];
    if (Cc === e) for (e = 0; e < w; e++) Oa[e] =
      f + e; else for (e = 0; e < w; e++) Oa[e] = f;
    return Oa;
  };
  var Mm = {}, Kw = 0;
  sb.prototype.se = function (e) {
    var f = e >> 16 & 255, w = e >> 8 & 255;
    e &= 255;
    var Oa = Math.max(0, Math.min(255, .299 * f + .587 * w + .114 * e)),
      Ia = Math.max(0, Math.min(255, 128 - .168736 * f - .331264 * w + .5 * e)),
      Da = Math.max(0, Math.min(255, 128 + .5 * f - .418688 * w - .081312 * e));
    63 < Oa && (Oa = 63);
    var Ra = Math.max(0, Math.min(255, Oa + 1.402 * (Da - 128))) | 0;
    Da = Math.max(0, Math.min(255, Oa - .34414 * (Ia - 128) - .71414 * (Da - 128))) | 0;
    Oa = Math.max(0, Math.min(255, Oa + 1.772 * (Ia - 128))) | 0;
    this.h3c = new vh(f, w, e, 255);
    this.QXc = new vh(Ra, Da, Oa, 255);
  };
  var Lu = new Ye;
  f.SetDoctRendererParams = function (e) {
    !0 === e.retina && (De.Zx = !0);
  };
  f.Asc.ZWa = null;
  Ce.prototype.S$a = function () {
    return null == this.vca ? this.Jy : this.vca;
  };
  Ce.prototype.k7e = function () {
    if (!this.pB()) return ['', ''];
    this.vca = document.createElement('canvas');
    this.vca.width = this.pd * AscCommon.wA;
    this.vca.height = this.Uc * AscCommon.wA;
    '' != this.Text ? this.YFa() : this.drawImage();
    var e = [];
    e.push(this.vca.toDataURL('image/png'));
    var f = this.vca.getContext('2d');
    f.strokeStyle = '#FF0000';
    f.lineWidth = 2;
    f.moveTo(0, 0);
    f.lineTo(this.vca.width, this.vca.height);
    f.moveTo(0, this.vca.height);
    f.lineTo(this.vca.width, 0);
    f.stroke();
    e.push(this.vca.toDataURL('image/png'));
    this.vca = null;
    return e;
  };
  Ce.prototype.Vof = function (e, w, Oa, Ia, Da) {
    this.rbc ? this.Text = e : (this.Image = '', this.JSa = null, this.Text = e, this.Un = w, this.Ab = Oa, this.Ye = Ia, this.Nd = Da, this.rbc = !0, AscFonts.ms.V9a(this.Text, this, function () {
      this.rbc = !1;
      var e = AscCommon.LR, Oa = AscFonts.Sba.Gka(w);
      !1 === e.WG(Oa, function () {
        f.Asc.ZWa.Zc.hx(Asc.EH.oO,
          Asc.OG.WG);
        f.Asc.ZWa.YFa();
      }) && this.YFa();
    }));
  };
  Ce.prototype.YFa = function () {
    var e = this.Zc.iy, f = this.Zc.Oq;
    this.Zc.iy = !0;
    this.Zc.Oq = !1;
    AscFormat.Li(AscCommon.L$d, this, []);
    this.Zc.iy = e;
    this.Zc.Oq = f;
  };
  Ce.prototype.drawImage = function () {
    var e = this.S$a(), f = e.width, w = e.height;
    e = e.getContext('2d');
    e.clearRect(0, 0, f, w);
    var Oa = this.JSa.width / this.JSa.height;
    if (f / w > Oa) {
      var Ia = w;
      var Da = Oa * Ia >> 0;
      w = 0;
      f = f - Da >> 1;
    } else Da = f, Ia = Da / Oa >> 0, f = 0, w = w - Ia >> 1;
    e.drawImage(this.JSa, f, w, Da, Ia);
  };
  Ce.prototype.Inf = Ce.prototype.selectImage =
    function () {
      this.Text = '';
      f.AscDesktopEditor.OpenFilenameDialog('images', !1, function (e) {
        Array.isArray(e) && (e = e[0]);
        if ('' != e) {
          var w = f.Asc.ZWa;
          w.Image = f.AscDesktopEditor.GetImageBase64(e);
          w.JSa = new Image;
          w.JSa.onload = function () {
            f.Asc.ZWa.drawImage();
          };
          w.JSa.src = w.Image;
          w = null;
        }
      });
    };
  Ce.prototype.pB = function () {
    return '' != this.Image || '' != this.Text;
  };
  Ce.prototype.rOa = function () {
    f.Asc.ZWa.bGb.removeChild(this.Jy);
    delete f.Asc.ZWa;
  };
  AscCommon.Jla = { C5a: 0, ulb: 1 };
  AscCommon.AE = new function () {
    this.Z1 = !1;
    this.a7 = [];
    this.iOa =
      [];
    this.cua = null;
    this.gWb = !1;
    this.Gmd = 0;
    this.sAc = this.U3 = !1;
    this.g$a = f.AscDesktopEditor && f.AscDesktopEditor.GetEncryptedHeader ? f.AscDesktopEditor.GetEncryptedHeader() : 'ENCRYPTED;';
    this.wnc = this.g$a.length;
    this.QC = null;
    this.Bwb = -1;
    this.T5b = !1;
    this.se = function () {
      this.Z1 = !0;
    };
    this.K5 = function () {
      return this.Z1;
    };
    this.LYa = function () {
      return f.Ni && !f.Ni.fdf() || !f.AscDesktopEditor || this.U3 ? !1 : 2 == this.Gmd ? !0 : 0 === f.AscDesktopEditor.CryptoMode ? !1 : !0;
    };
    this.pAc = function () {
      return this.LYa() && this.T5b;
    };
    this.SOe = function (e) {
      var w =
        this;
      f.AscDesktopEditor.OpenFilenameDialog('images', !0, function (Oa) {
        Array.isArray(Oa) || (Oa = [Oa]);
        for (var Ia = [], Da = {
          wAc: !0,
          f7: e,
          ext: []
        }, Ra = 0; Ra < Oa.length; Ra++) Ia.push(f.AscDesktopEditor.GetImageBase64(Oa[Ra], !0)), Da.ext.push(AscCommon.eac(Oa[Ra]));
        w.GQa(this, Ia, AscCommon.Jla.C5a, Da);
      });
    };
    this.TOe = function (e, w) {
      var Oa = f.Asc.editor ? f.Asc.editor : f.editor;
      Oa.fG(Asc.EH.Kr, Asc.OG.ZN);
      var Ia = this;
      f.AscDesktopEditor.DownloadFiles(e, [], function (e) {
        Oa.hx(Asc.EH.Kr, Asc.OG.ZN);
        Oa.fG(Asc.EH.Kr, Asc.OG.J4);
        var Da =
          [], Ra = { wAc: !0, jdf: !0, f7: w, ext: [], zg: Oa }, Ha;
        for (Ha in e) Da.push(f.AscDesktopEditor.GetImageBase64(e[Ha], !0)), Ra.ext.push(f.AscDesktopEditor.GetImageFormat(e[Ha])), f.AscDesktopEditor.RemoveFile(e[Ha]);
        Ia.GQa(this, Da, AscCommon.Jla.C5a, Ra);
      });
    };
    this.wCc = function () {
      (f.Asc.editor ? f.Asc.editor : f.editor).Re('asc_onError', Asc.rl.Fg.UXc, Asc.rl.il.xV);
    };
    this.Hmc = function () {
      null == this.QC && (this.QC = (f.Asc.editor ? f.Asc.editor : f.editor).QC);
    };
    this.P4e = function (e, f, w) {
      this.GQa(this, [w], AscCommon.Jla.ulb, {
        wtd: !0, src: e,
        nD: f
      });
    };
    this.dff = function () {
      this.Bwb = setTimeout(function () {
        AscCommon.AE.GQa(e, e);
        this.Bwb = -1;
      }, 10);
    };
    this.GQa = function (w, Oa, Ia, Da) {
      this.LYa() ? (e !== Ia && this.a7.push({
        sender: w,
        type: Ia,
        data: Oa,
        options: Da
      }), 0 != this.a7.length && (e === Ia || 1 == this.a7.length && this.gWb) && (e !== Ia && -1 != this.Bwb && (clearTimeout(this.Bwb), this.Bwb = -1), AscCommon.Jla.C5a == this.a7[0].type ? this.a7[0].options && this.a7[0].options.wAc ? f.Ni.$ua({
          type: 'encryptData',
          data: this.a7[0].data
        }) : f.Ni.$ua({ type: 'encryptData', data: JSON.parse(this.a7[0].data.changes) }) :
        AscCommon.Jla.ulb == this.a7[0].type && (this.a7[0].options && this.a7[0].options.wtd ? f.Ni.$ua({
          type: 'decryptData',
          data: this.a7[0].data
        }) : f.Ni.$ua({
          type: 'decryptData',
          data: this.a7[0].data.changes
        })))) : AscCommon.Jla.C5a == Ia ? w.AU(Oa, !0) : AscCommon.Jla.ulb == Ia && (this.std(Oa.changes) ? this.wCc() : w.A0b(Oa, !0));
    };
    this.Smf = function (e) {
      var w = e.data;
      if (e.check) {
        if (this.cua) {
          this.sAc = !0;
          this.Hmc();
          if (this.QC == AscCommon.$z.uO) for (var Oa = w.length - 1; 0 <= Oa; Oa--) this.cua.zld[Oa] = w[Oa]; else for (Oa = w.length - 1; 0 <= Oa; Oa--) this.cua.zld[Oa].LJ =
            w[Oa];
          this.gWb = !0;
          this.cua.f7.call(this.cua.sender);
          this.cua = null;
        } else if (e = this.a7[0], this.a7.splice(0, 1), AscCommon.Jla.C5a == e.type) if (e.options && e.options.wAc) {
          for (Oa = 0; Oa < w.length; Oa++) this.g$a == w[Oa].substr(0, this.wnc) && (w[Oa] = this.g$a + e.options.ext[Oa] + ';' + w[Oa].substr(this.wnc));
          e.options.jdf ? AscCommon.QBe(w, e.options.zg.KY, e.options.zg.tia, e.options.zg.al.UBa(), function (f) {
            e.options.zg.hx(Asc.EH.Kr, Asc.OG.J4);
            e.options.f7(f);
          }) : e.options.f7(Asc.rl.Fg.nY, w);
        } else e.data.changes = JSON.stringify(w),
          e.sender.AU(e.data, !0); else AscCommon.Jla.ulb == e.type && (e.options && e.options.wtd ? (f.AscDesktopEditor.ResaveFile(e.options.src, w[0]), e.options.nD.onload_crypto(e.options.src)) : (this.sAc = !0, e.data.changes = w, e.sender.A0b(e.data, !0)));
        this.dff();
      } else this.wCc();
    };
    this.std = function (e) {
      if (0 == e.length) return !1;
      this.Hmc();
      var f = this.wnc + 1;
      if (e[0].change) {
        for (var w = e.length - 1; 0 <= w; w--) if (e[w].change.length > f) {
          var Oa = e[w].change.substr(0, f);
          if (-1 != Oa.indexOf(this.g$a)) {
            Ia = !0;
            break;
          }
        }
        return Ia;
      }
      var Ia = !1;
      if (this.QC ==
        AscCommon.$z.uO) for (w = e.length - 1; 0 <= w; w--) {
        if (e[w].length > f && (Oa = e[w].substr(0, f), -1 != Oa.indexOf(this.g$a))) {
          Ia = !0;
          break;
        }
      } else for (w = e.length - 1; 0 <= w; w--) if (e[w].LJ.length > f && (Oa = e[w].LJ.substr(0, f), -1 != Oa.indexOf(this.g$a))) {
        Ia = !0;
        break;
      }
      return Ia;
    };
    this.S$e = function (e, w, Oa) {
      if (0 != e.length && this.LYa()) {
        this.cua = { zld: e, BEa: [], sender: w, f7: Oa };
        this.Hmc();
        if (this.QC == AscCommon.$z.uO) for (w = e.length - 1; 0 <= w; w--) this.cua.BEa[w] = e[w]; else for (w = e.length - 1; 0 <= w; w--) this.cua.BEa[w] = e[w].LJ;
        f.Ni.$ua({
          type: 'decryptData',
          data: this.cua.BEa
        });
      } else this.std(e) ? this.wCc() : (this.gWb = !0, Oa.call(w));
    };
    this.DVa = function (e, w, Oa) {
      if (f.mWb) f.AscDesktopEditor.NativeViewerOpen(Oa.Eqb()); else {
        if (f.oAc || !this.LYa()) return !1;
        f.T9a = !0;
        if (f.Asc.GOb.c1a === w) w = '<m_nCsvTxtEncoding>' + Oa.QPa() + '</m_nCsvTxtEncoding>', f.AscDesktopEditor.SetAdvancedOptions(w); else if (f.Asc.GOb.ZQa === w) {
          e = Oa.P0b();
          var Ia = Oa.$zb();
          w = '<m_nCsvTxtEncoding>' + Oa.QPa() + '</m_nCsvTxtEncoding>';
          null != e && (w += '<m_nCsvDelimiter>' + e + '</m_nCsvDelimiter>');
          null != Ia && (w += '<m_nCsvDelimiterChar>' +
            Ia + '</m_nCsvDelimiterChar>');
          f.AscDesktopEditor.SetAdvancedOptions(w);
        } else f.Asc.GOb.OGb === w && (w = '<m_sPassword>' + AscCommon.hXc(Oa.Eqb()) + '</m_sPassword>', e.qOa = Oa.Eqb(), f.AscDesktopEditor.SetAdvancedOptions(w));
        return !0;
      }
    };
  };
  AscCommon.PGf = function (e, f) {
    this.RJa = this.QJa = 0;
    this.o3a = this.n3a = !1;
    this.kqb = -1;
    this.XJe = e;
    this.chd = f;
    this.mVa = 120;
    this.cjc = !1;
    this.I3f = function (e) {
      this.cjc = !0;
      this.mVa = e;
    };
    this.MXf = function (e) {
      this.n3a = !1;
      if (!AscCommon.qf.oMa) return e;
      this.QJa += e;
      if (Math.abs(this.QJa) >= this.mVa) return this.cjc ?
        0 < this.QJa ? this.mVa : -this.mVa : this.QJa;
      this.n3a = !0;
      return 0;
    };
    this.NXf = function (e) {
      this.o3a = !1;
      if (!AscCommon.qf.oMa) return e;
      this.RJa += e;
      if (Math.abs(this.RJa) >= this.mVa) return this.cjc ? 0 < this.RJa ? this.mVa : -this.mVa : this.RJa;
      this.o3a = !0;
      return 0;
    };
    this.rTf = function () {
      -1 != this.kqb && (clearTimeout(this.kqb), this.kqb = -1);
      if ((this.n3a || this.o3a) && this.chd) {
        var e = this, f = this.n3a ? this.QJa : 0, w = this.o3a ? this.RJa : 0;
        this.kqb = setTimeout(function () {
          e.chd.call(e.XJe, f, w);
          e.kqb = -1;
          e.QJa = 0;
          e.RJa = 0;
        }, 100);
      }
      this.n3a || (this.QJa =
        0);
      this.o3a || (this.RJa = 0);
      this.o3a = this.n3a = !1;
    };
  };
  he.prototype.se = function (e) {
    this.c6b = e || {};
  };
  he.prototype.Db = function (e) {
    return this.c6b.hasOwnProperty(e) ? this.c6b[e] : e;
  };
  Array.prototype.fill || Object.defineProperty(Array.prototype, 'fill', {
    value: function (f, w, Oa) {
      if (null == this) throw new TypeError('this is null or not defined');
      var Ia = Object(this), Da = Ia.length >>> 0;
      w >>= 0;
      w = 0 > w ? Math.max(Da + w, 0) : Math.min(w, Da);
      Oa = Oa === e ? Da : Oa >> 0;
      for (Da = 0 > Oa ? Math.max(Da + Oa, 0) : Math.min(Oa, Da); w < Da;) Ia[w] = f, w++;
      return Ia;
    }
  });
  'undefined' === typeof Int8Array || Int8Array.prototype.fill || (Int8Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Uint8Array || Uint8Array.prototype.fill || (Uint8Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Uint8ClampedArray || Uint8ClampedArray.prototype.fill || (Uint8ClampedArray.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Int16Array || Int16Array.prototype.fill || (Int16Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Uint16Array || Uint16Array.prototype.fill ||
  (Uint16Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Int32Array || Int32Array.prototype.fill || (Int32Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Uint32Array || Uint32Array.prototype.fill || (Uint32Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Float32Array || Float32Array.prototype.fill || (Float32Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Float64Array || Float64Array.prototype.fill || (Float64Array.prototype.fill = Array.prototype.fill);
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.upd = function () {
    return f.SockJS || require('sockjs');
  };
  f.AscCommon.o7e = Pa;
  f.AscCommon.n7e = ab;
  f.AscCommon.xod = function () {
    var e = f.location.href, w = e.indexOf('?');
    0 < w && (e = e.substring(0, w));
    return e.substring(0, e.lastIndexOf('/') + 1);
  };
  f.AscCommon.MJd = function () {
    for (var e = [], f = 0; f < AscCommon.jrb.length; ++f) {
      var w = AscCommon.jrb[f];
      e.push({ codepage: w[0], lcid: w[1], name: w[3] });
    }
    return e;
  };
  f.AscCommon.SWf = function (e) {
    var f = { encoding: AscCommon.kUd, size: 0 };
    2 <= e.length && (f.size =
      2, 255 == e[0] && 254 == e[1] ? f.encoding = AscCommon.z_e : 254 == e[0] && 255 == e[1] ? f.encoding = AscCommon.A_e : 3 <= e.length && (f.size = 3, 239 == e[0] && 187 == e[1] && 191 == e[2] ? f.encoding = AscCommon.KOb : 4 <= e.length && (f.size = 4, 255 == e[0] && 254 == e[1] && 0 == e[2] && 0 == e[3] ? f.encoding = AscCommon.B_e : 0 == e[0] && 0 == e[1] && 254 == e[2] && 255 == e[3] ? f.encoding = AscCommon.C_e : 43 == e[0] && 47 == e[1] && 118 == e[2] && 56 == e[3] ? f.encoding = AscCommon.JOb : 43 == e[0] && 47 == e[1] && 118 == e[2] && 57 == e[3] ? f.encoding = AscCommon.JOb : 43 == e[0] && 47 == e[1] && 118 == e[2] && 43 == e[3] ? f.encoding =
      AscCommon.JOb : 43 == e[0] && 47 == e[1] && 118 == e[2] && 47 == e[3] && (f.encoding = AscCommon.JOb))));
    return f;
  };
  f.AscCommon.g1d = Eb;
  f.AscCommon.zCf = zb;
  f.AscCommon.i7e = function (e) {
    var f, w = $d(e);
    return null !== w && yc && (f = yc[e]) ? 'data:image/' + w + ';base64,' + AscCommon.AFb(f, f.length, 0) : null;
  };
  f.AscCommon.Mff = function (e, w, Oa, Ia) {
    function Da() {
      Za && Ab && Ia && Ia(Ra, Xa);
    }

    var Ra = !1, Xa = new Ha, Za = !1, Ab = !1, hb = e;
    hb = hb.replace(/\\/g, '/');
    f.IS_NATIVE_EDITOR || zb(hb, function (e) {
      hb.lastIndexOf('/');
      e ? (e = Va(e)) ? (Xa.tib = gb(e, Oa), Xa.data = e) : Ra =
        !0 : Ra = !0;
      Za = !0;
      Da();
    }, 'arraybuffer');
    w ? (yc = {}, Pa().getBinaryContent(w, function (e, f) {
      e ? (Ra = Ab = !0, Da()) : (Xa.BEa = [], ab().loadAsync(f).then(function (e) {
        var f = [], w = [];
        e.forEach(function (e, Oa) {
          f.push(e);
          w.push(Oa.async(e.endsWith('.json') ? 'string' : 'uint8array'));
        });
        Promise.all(w).then(function (e) {
          for (var w, Oa = 0; Oa < e.length; ++Oa) (w = f[Oa]).endsWith('.json') ? Xa.BEa[parseInt(w.slice(7))] = JSON.parse(e[Oa]) : yc[w] = e[Oa];
          Ab = !0;
          Da();
        });
      }));
    })) : (yc = null, Ab = !0);
    f.IS_NATIVE_EDITOR && (e = f['native'].openFileCommand(hb, w, Oa),
      hb.lastIndexOf('/'), e ? (Xa.tib = gb(e, Oa), Xa.data = e) : Ra = !0, Za = !0, Da());
  };
  f.AscCommon.OYb = function (e, f, w, Oa) {
    var Ia = e.al.Koc();
    Ia && Ia !== w.id && (w.docconnectionid = Ia);
    null == w.savetype ? e.al.FZa(w) : (w.userconnectionid = e.al.zOa(), eg({
      type: 'POST',
      url: '../../../../downloadas/' + w.id + '?cmd=' + encodeURIComponent(JSON.stringify(w)),
      data: Oa.GXb || Oa.data,
      contentType: 'application/octet-stream',
      error: function (e, w, Oa) {
        f && f(null, !0, Oa);
      },
      success: function (e) {
        f && f(JSON.parse(e.responseText), !0);
      }
    }));
  };
  f.AscCommon.Mnf = function (e,
                              f, w, Oa, Ia, Da, Ra) {
    eg({
      type: 'POST',
      url: '../../../../savefile/' + e + '?cmd=' + encodeURIComponent(JSON.stringify({
        id: e,
        userid: f,
        jwt: Oa,
        outputpath: w
      })),
      data: Ia,
      contentType: 'application/octet-stream',
      error: Da,
      success: Ra
    });
  };
  f.AscCommon.eBb = Za;
  f.AscCommon.m_f = function (e, f) {
    e = e.split('/');
    f = f.split('/');
    e.pop();
    for (var w = 0; w < f.length; w++) '.' != f[w] && ('..' == f[w] ? e.pop() : e.push(f[w]));
    return e.join('/');
  };
  f.AscCommon.rV = function (e) {
    if (f.NATIVE_EDITOR_ENJINE) return e;
    var w = e.slice(0, 6);
    return 0 === w.indexOf('theme') &&
    editor.MG ? editor.MG.Ofb + e : 0 !== w.indexOf('http:') && 0 !== w.indexOf('data:') && 0 !== w.indexOf('https:') && 0 !== w.indexOf('file:') && 0 !== w.indexOf('ftp:') && (w = Eg.t7(e)) ? w : e;
  };
  f.AscCommon.xia = function (e, f) {
    return e - f;
  };
  f.AscCommon.ZVf = function (e, f) {
    return f - e;
  };
  f.AscCommon.fEb = bc;
  f.AscCommon.b5b = Nc;
  f.AscCommon.v$a = cc;
  f.AscCommon.onc = function (e) {
    for (var f = '', w = e.length, Oa = 0; Oa < w; Oa++) f += cc(e[Oa]);
    return f;
  };
  f.AscCommon.zmd = function (e) {
    for (var f = [], w = e.length, Oa = 0; Oa < w; Oa++) {
      var Ia = null, Da = e.charCodeAt(Oa);
      bc(Da) ?
        Oa + 1 < w && (Oa++, Ia = Nc(Da, e.charCodeAt(Oa))) : Ia = Da;
      null !== Ia && f.push(Ia);
    }
    return f;
  };
  f.AscCommon.jSf = function (e) {
    Hq = ob(e ? e.StructureTables : null);
    Gn = Ia(e && e.CONST_TRUE_FALSE || Oe);
    Yi = Ab(e ? e.CONST_ERROR : null);
  };
  f.AscCommon.sce = re;
  f.AscCommon.eac = $d;
  f.AscCommon.U0e = function (e, f, w) {
    var Oa = $d(e);
    Oa = Oa ? e.length - Oa.length - 1 : e.length;
    w && Oa + f.length + 1 > w && (Oa = w - f.length - 1);
    return Oa < e.length ? e.substring(0, Oa) + '.' + f : e + '.' + f;
  };
  f.AscCommon.X6e = function (e) {
    switch (e) {
      case $b.zCb:
      case $b.T3b:
        return 'pdf';
      case $b.vHc:
        return 'html';
      case $b.rMc:
        return 'docx';
      case $b.IXc:
        return 'doc';
      case $b.W4c:
        return 'odt';
      case $b.I6c:
        return 'rtf';
      case $b.c1a:
        return 'txt';
      case $b.C3c:
        return 'mht';
      case $b.WYc:
        return 'epub';
      case $b.qZc:
        return 'fb2';
      case $b.G3c:
        return 'mobi';
      case $b.JXc:
        return 'docm';
      case $b.MXc:
        return 'dotx';
      case $b.LXc:
        return 'dotm';
      case $b.tZc:
        return 'fodt';
      case $b.c5c:
        return 'ott';
      case $b.KXc:
        return 'doct';
      case $b.bEd:
        return 'bin';
      case $b.JSON:
        return 'json';
      case $b.WNc:
        return 'xlsx';
      case $b.Ced:
        return 'xls';
      case $b.V4c:
        return 'ods';
      case $b.ZQa:
        return 'csv';
      case $b.Ded:
        return 'xlsm';
      case $b.Ged:
        return 'xltx';
      case $b.Fed:
        return 'xltm';
      case $b.sZc:
        return 'fods';
      case $b.b5c:
        return 'ots';
      case $b.Eed:
        return 'xlst';
      case $b.hNc:
        return 'pptx';
      case $b.I5c:
        return 'ppt';
      case $b.U4c:
        return 'odp';
      case $b.H5c:
        return 'ppsx';
      case $b.J5c:
        return 'pptm';
      case $b.G5c:
        return 'ppsm';
      case $b.F5c:
        return 'potx';
      case $b.E5c:
        return 'potm';
      case $b.rZc:
        return 'fodp';
      case $b.a5c:
        return 'otp';
    }
    return '';
  };
  f.AscCommon.Bfe = function (w) {
    f.addEventListener && f.addEventListener('message', function (Oa) {
      if (null !=
        Oa && null != Oa.data) try {
        var Ia = JSON.parse(Oa.data);
        if (null != Ia && null != Ia.type && 0 == Ia.type) if (zd.hTa == Ia.error) {
          var Da = Ia.urls;
          if (Da) {
            Eg.PAa(Da);
            var Ra;
            for (Ra in Da) if (Da.hasOwnProperty(Ra)) {
              var Ha = Da[Ra];
              break;
            }
            w(Asc.rl.Fg.nY, Ha);
          }
        } else w(Za(Ia.error)); else if ('onExternalPluginMessage' === Ia.type) {
          if (f.Ni) {
            if ('internalCommand' == Ia.subType) switch (Ia.data.type) {
              case 'onbeforedrop':
              case 'ondrop':
                f.Ni.zg.Dhf(Ia.data);
                return;
            }
            f.Ni.Onf(Oa.data);
          }
        } else 'emulateUploadInFrame' === Ia.type && f._private_emulate_upload &&
        (f._private_emulate_upload(Ia.name, Ia.content), f._private_emulate_upload = e);
      } catch (uv) {
      }
    }, !1);
  };
  f.AscCommon.mad = function (e, w, Oa, Ia, Da) {
    if (AscCommon.qf.Ftd && f.emulateUpload) f.emulateUpload(function (e, f) {
      '' === f ? Ia(Asc.rl.Fg.cT) : (f = AscFonts.tXc(f), f = new Blob([f.data.slice(0, f.size)]), f.name = e, f.fileName = e, e = ie([f]), Ia(Za(e), [f]));
    }, ':<iframe><image>'); else if (AscCommon.AE && AscCommon.AE.pAc()) AscCommon.AE.SOe(Ia); else {
      if ('undefined' != typeof FileReader) var Ra = Pi(function (e) {
        if (e && e.target && e.target.files) {
          var f =
            ie(e.target.files);
          Ia(Za(f), e.target.files);
        } else Ia(Asc.rl.Fg.cT);
      }); else {
        var Ha = Wc();
        e = '../../../../uploadold/' + e + '/' + w + '/' + Eg.iMa;
        Oa && (e += '?token=' + encodeURIComponent(Oa));
        Oa = '<html><head></head><body><form action="' + e + '" method="POST" enctype="multipart/form-data"><input id="apiiuFile" name="apiiuFile" type="file" accept="image/*" size="1"><input id="apiiuSubmit" name="apiiuSubmit" type="submit" style="display:none;"></form></body></html>';
        Ha.document.open();
        Ha.document.write(Oa);
        Ha.document.close();
        Ra = Ha.document.getElementById('apiiuFile');
        var Xa = Ha.document.getElementById('apiiuSubmit');
        Ra.onchange = function (e) {
          if (e && e.target && e.target.files && (e = ie(e.target.files), zd.hTa != e)) {
            Da(Za(e));
            return;
          }
          Da(Asc.rl.Fg.nY);
          Xa.click();
        };
      }
      De.T1b ? setTimeout(function () {
        Ra.click();
      }, 0) : Ra.click();
    }
  };
  f.AscCommon.Afe = function (e, w) {
    'undefined' != typeof FileReader && null != e && (e.ondragover = function (e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = xf(e) ? 'copy' : 'none';
      'copy' == e.dataTransfer.dropEffect && (f.Asc.editor ? f.Asc.editor :
        f.editor).hJc(e);
      return !1;
    }, e.ondrop = function (e) {
      e.preventDefault();
      var Oa = e.dataTransfer.files, Ia = ie(Oa), Da = f.Asc.editor ? f.Asc.editor : f.editor;
      Da.HJc();
      if (Ia == zd.whc) {
        try {
          var Ra = e.dataTransfer.getData('text/html');
          if (Ra && !AscCommon.qf.eH) {
            var Ha = Ra.indexOf('StartHTML'), Xa = Ra.indexOf('<html');
            -1 == Xa && (Xa = Ra.indexOf('<HTML'));
            0 < Ha && 0 < Xa && Ha < Xa && (Ra = Ra.substr(Xa));
            Da.pluginMethod_PasteHtml(Ra);
            return;
          }
        } catch (Sr) {
        }
        try {
          var Va = e.dataTransfer.getData('text/plain');
          if (Va) {
            Da.pluginMethod_PasteText(Va);
            return;
          }
        } catch (Sr) {
        }
        try {
          if (Va =
            e.dataTransfer.getData('Text')) {
            Da.pluginMethod_PasteText(Va);
            return;
          }
        } catch (Sr) {
        }
      }
      w(Za(Ia), Oa);
    });
  };
  f.AscCommon.Gcd = function (e, f, w, Oa, Ia) {
    if (0 < e.length) {
      var Da = '../../../../upload/' + f + '/' + w + '/' + Eg.iMa;
      Oa && (Da += '?token=' + encodeURIComponent(Oa));
      for (var Ra = [], Ha = e.length - 1; -1 < Ha; --Ha) Ra.push(e[Ha]);
      var Xa = Ra.pop(), Va = [], Za = function () {
        if (4 == this.readyState) if (200 == this.status || 1223 == this.status) {
          var e = JSON.parse(this.responseText);
          Eg.PAa(e);
          for (var Ha in e) if (e.hasOwnProperty(Ha)) {
            Va.push(e[Ha]);
            break;
          }
          0 ===
          Ra.length ? Ia(Asc.rl.Fg.nY, Va) : (Xa = Ra.pop(), e = new XMLHttpRequest, Da = '../../../../upload/' + f + '/' + w + '/' + Eg.iMa, Oa && (Da += '?token=' + encodeURIComponent(Oa)), e.open('POST', Da, !0), e.setRequestHeader('Content-Type', Xa.type || 'application/octet-stream'), e.onreadystatechange = Za, e.send(Xa));
        } else Ia(Asc.rl.Fg.hpb);
      };
      e = new XMLHttpRequest;
      e.open('POST', Da, !0);
      e.setRequestHeader('Content-Type', Xa.type || 'application/octet-stream');
      e.onreadystatechange = Za;
      e.send(Xa);
    } else Ia(Asc.rl.Fg.hpb);
  };
  f.AscCommon.QBe = function (e,
                              f, w, Oa, Ia) {
    if (0 < e.length) {
      var Da = '../../../../upload/' + f + '/' + w + '/' + Eg.iMa;
      Oa && (Da += '?token=' + encodeURIComponent(Oa));
      for (var Ra = [], Ha = e.length - 1; -1 < Ha; --Ha) Ra.push(e[Ha]);
      var Xa = Ra.pop(), Va = [], Za = function () {
        if (4 == this.readyState) if (200 == this.status || 1223 == this.status) {
          var e = JSON.parse(this.responseText);
          Eg.PAa(e);
          for (var Ha in e) if (e.hasOwnProperty(Ha)) {
            Va.push({ path: Ha, url: e[Ha] });
            break;
          }
          0 === Ra.length ? Ia(Va) : (Xa = Ra.pop(), e = new XMLHttpRequest, Da = '../../../../upload/' + f + '/' + w + '/' + Eg.iMa, Oa && (Da += '?token=' +
            encodeURIComponent(Oa)), e.open('POST', Da, !0), e.setRequestHeader('Content-Type', Xa.type || 'application/octet-stream'), e.onreadystatechange = Za, e.send(Xa));
        } else Ia([]);
      };
      e = new XMLHttpRequest;
      e.open('POST', Da, !0);
      e.setRequestHeader('Content-Type', Xa.type || 'application/octet-stream');
      e.onreadystatechange = Za;
      e.send(Xa);
    } else Ia(Asc.rl.Fg.hpb);
  };
  f.AscCommon.Y7f = xf;
  f.AscCommon.Apd = function (e) {
    var f = e.replace(/ /g, '%20');
    e = f.GZb(wr);
    !e && (e = f.GZb(vp));
    !e && (e = f.GZb(Hs));
    f = f.GZb(ht);
    !e && (e = f);
    return e ? f ? AscCommon.lrb.$Yc :
      AscCommon.lrb.pfe : AscCommon.lrb.N1c;
  };
  f.AscCommon.zhf = function (e, f) {
    /(((^https?)|(^ftp)):\/\/)|(^mailto:)/i.test(e) || (e = (AscCommon.lrb.$Yc == f ? 'mailto:' : 'http://') + e);
    return e.replace(/%20/g, ' ');
  };
  f.AscCommon.MAb = function (e, f, w, Oa) {
    if (!(e && '' !== e || f && '' !== f)) return new vh(0, 0, 0, 255);
    if (Mm.hasOwnProperty(e)) e = Mm[e]; else if (Mm.hasOwnProperty(f)) e = Mm[f]; else {
      var Ia = Asc.Lkd[Kw % Asc.Lkd.length];
      ++Kw;
      e = Mm[e || f] = new sb(Ia);
    }
    if (!e) return new vh(0, 0, 0, 255);
    w = !0 === w ? e.QXc : e.h3c;
    return !0 === Oa ? w.r << 16 & 16711680 | w.wb <<
      8 & 65280 | w.Ya & 255 : w;
  };
  f.AscCommon.gEb = function (f) {
    return f == e || null == f || '' == f;
  };
  f.AscCommon.fw = function (e) {
    return (' ' + e).substr(1);
  };
  f.AscCommon.kNa = function (e) {
    return e() ? (e = e().val) ? e : null : null;
  };
  f.AscCommon.J7e = Mf;
  f.AscCommon.Nsb = function (e) {
    if (e()) {
      e = e();
      if (null != e.theme) return AscCommonExcel.p7.z1(Mf(e.theme), Mf(e.tint));
      if (null != e.rgb) return new AscCommonExcel.Q9(16777215 & Mf(e.rgb));
    }
    return null;
  };
  f.AscCommon.Dl = function (e) {
    return '0' !== e && 'false' !== e && 'off' !== e;
  };
  f.AscCommon.rZf = Va;
  f.AscCommon.Tld =
    gb;
  f.AscCommon.c9f = Da;
  f.AscCommon.q5c = Ha;
  f.AscCommon.e5 = af;
  f.AscCommon.Ct = Qf;
  f.AscCommon.$Lc = sh;
  f.AscCommon.Gra = function (e) {
    return 25.4 * (1440 * e / 25.4 + .5 | 0) / 20 / 72;
  };
  f.AscCommon.o8a = function (f) {
    return 25.4 * (null !== f && e !== f ? f : 1) / 20 / 72;
  };
  f.AscCommon.aW = function (e) {
    return 1440 * e / 25.4 + .5 | 0;
  };
  f.AscCommon.g9c = function (e) {
    e = e.toUpperCase();
    if (1 > e) return 0;
    if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/i.test(e)) return NaN;
    var f = {
      M: 1E3, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4,
      I: 1
    }, w = 0;
    e.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function (e) {
      w += f[e];
    });
    return w;
  };
  f.AscCommon.Z2c = function (e) {
    e = e.toUpperCase();
    if (0 >= e.length) return NaN;
    var f = e.length, w = e.charCodeAt(0);
    if (65 > w || 90 < w) return NaN;
    for (var Oa = 1; Oa < f; ++Oa) if (e.charCodeAt(Oa) !== w) return NaN;
    return w - 64 + 26 * (f - 1);
  };
  f.AscCommon.Ife = function (e, f) {
    var w = '';
    switch (f) {
      case Asc.Ag.sD:
        w = '' + e;
        break;
      case Asc.Ag.tPa:
        w = '' + e;
        1 === w.length && (w = '0' + w);
        break;
      case Asc.Ag.jV:
      case Asc.Ag.x5:
        --e;
        var Oa = (e - e % 26) / 26;
        e %= 26;
        e = Asc.Ag.jV === f ? String.fromCharCode(e +
          97) : String.fromCharCode(e + 65);
        for (f = 0; f < Oa + 1; ++f) w += e;
        break;
      case Asc.Ag.kV:
      case Asc.Ag.y5:
        Oa = Asc.Ag.kV === f ? 'm;cm;d;cd;c;xc;l;xl;x;ix;v;iv;i; '.split(';') : 'M;CM;D;CD;C;XC;L;XL;X;IX;V;IV;I; '.split(';');
        var Ia = [1E3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1, 0];
        for (f = 0; 0 < e;) {
          for (; Ia[f] <= e;) w += Oa[f], e -= Ia[f];
          f++;
          if (f >= Oa.length) break;
        }
    }
    return w;
  };
  f.AscCommon.Odf = function (e, w, Oa) {
    f.AscNotLoadAllScript ? w() : xc('https://determined-easley-10afef.netlify.app/sdkjs/word/sdk-all.js', w, Oa);
  };
  f.AscCommon.iEb = xc;
  f.AscCommon.Msb = function (e) {
    var f = e.metaKey ||
      e.ctrlKey;
    return e.altKey && (De.oMa ? !f : f);
  };
  f.AscCommon.q1b = function (e) {
    for (var f = 0; f < AscCommon.p5b.length; ++f) {
      var w = AscCommon.p5b[f];
      if (w.name === e) return e = new AscFormat.hzb, e.name = w.name, f = w.D$e(), e.Sb[8] = AscFormat.XR(f.r, f.wb, f.Ya), f = w.K$e(), e.Sb[12] = AscFormat.XR(f.r, f.wb, f.Ya), f = w.E$e(), e.Sb[9] = AscFormat.XR(f.r, f.wb, f.Ya), f = w.L$e(), e.Sb[13] = AscFormat.XR(f.r, f.wb, f.Ya), f = w.v$e(), e.Sb[0] = AscFormat.XR(f.r, f.wb, f.Ya), f = w.w$e(), e.Sb[1] = AscFormat.XR(f.r, f.wb, f.Ya), f = w.x$e(), e.Sb[2] = AscFormat.XR(f.r,
        f.wb, f.Ya), f = w.y$e(), e.Sb[3] = AscFormat.XR(f.r, f.wb, f.Ya), f = w.z$e(), e.Sb[4] = AscFormat.XR(f.r, f.wb, f.Ya), f = w.A$e(), e.Sb[5] = AscFormat.XR(f.r, f.wb, f.Ya), f = w.J$e(), e.Sb[11] = AscFormat.XR(f.r, f.wb, f.Ya), f = w.F$e(), e.Sb[10] = AscFormat.XR(f.r, f.wb, f.Ya), e;
    }
    return null;
  };
  f.AscCommon.sod = function (e, f) {
    var w = { R: 0, G: 0, B: 0, Bf: 255 };
    var Oa = new AscCommon.pUc;
    Oa.name = e.name;
    e.Sb[8].Xe(f, null, null, null, w);
    var Ia = e.Sb[8].RGBA;
    Oa.Sb.push(new AscCommon.uL(Ia.R, Ia.G, Ia.B));
    e.Sb[12].Xe(f, null, null, null, w);
    Ia = e.Sb[12].RGBA;
    Oa.Sb.push(new AscCommon.uL(Ia.R,
      Ia.G, Ia.B));
    e.Sb[9].Xe(f, null, null, null, w);
    Ia = e.Sb[9].RGBA;
    Oa.Sb.push(new AscCommon.uL(Ia.R, Ia.G, Ia.B));
    e.Sb[13].Xe(f, null, null, null, w);
    Ia = e.Sb[13].RGBA;
    Oa.Sb.push(new AscCommon.uL(Ia.R, Ia.G, Ia.B));
    e.Sb[0].Xe(f, null, null, null, w);
    Ia = e.Sb[0].RGBA;
    Oa.Sb.push(new AscCommon.uL(Ia.R, Ia.G, Ia.B));
    e.Sb[1].Xe(f, null, null, null, w);
    Ia = e.Sb[1].RGBA;
    Oa.Sb.push(new AscCommon.uL(Ia.R, Ia.G, Ia.B));
    e.Sb[2].Xe(f, null, null, null, w);
    Ia = e.Sb[2].RGBA;
    Oa.Sb.push(new AscCommon.uL(Ia.R, Ia.G, Ia.B));
    e.Sb[3].Xe(f, null, null, null,
      w);
    Ia = e.Sb[3].RGBA;
    Oa.Sb.push(new AscCommon.uL(Ia.R, Ia.G, Ia.B));
    e.Sb[4].Xe(f, null, null, null, w);
    Ia = e.Sb[4].RGBA;
    Oa.Sb.push(new AscCommon.uL(Ia.R, Ia.G, Ia.B));
    e.Sb[5].Xe(f, null, null, null, w);
    Ia = e.Sb[5].RGBA;
    Oa.Sb.push(new AscCommon.uL(Ia.R, Ia.G, Ia.B));
    e.Sb[11].Xe(f, null, null, null, w);
    Ia = e.Sb[11].RGBA;
    Oa.Sb.push(new AscCommon.uL(Ia.R, Ia.G, Ia.B));
    e.Sb[10].Xe(f, null, null, null, w);
    Ia = e.Sb[10].RGBA;
    Oa.Sb.push(new AscCommon.uL(Ia.R, Ia.G, Ia.B));
    return Oa;
  };
  f.AscCommon.t_d = function (e) {
    return 12544 <= e && 12591 >= e ||
      12704 <= e && 12735 >= e || 19968 <= e && 40938 >= e || 13312 <= e && 19893 >= e || 131072 <= e && 173782 >= e || 173824 <= e && 177972 >= e || 177984 <= e && 178205 >= e || 178208 <= e && 183969 >= e || 183984 <= e && 191456 >= e || 63744 <= e && 64255 >= e || 194560 <= e && 195103 >= e || 12032 <= e && 12255 >= e || 11904 <= e && 12031 >= e || 12736 <= e && 12783 >= e || 12272 <= e && 12287 >= e || 4352 <= e && 4607 >= e || 43360 <= e && 43391 >= e || 55216 <= e && 55295 >= e || 12592 <= e && 12687 >= e || 65280 <= e && 65519 >= e || 44032 <= e && 55215 >= e || 12352 <= e && 12447 >= e || 110848 <= e && 110895 >= e || 110592 <= e && 110847 >= e || 12688 <= e && 12703 >= e || 12448 <=
      e && 12543 >= e || 12784 <= e && 12799 >= e || 42192 <= e && 42239 >= e || 93952 <= e && 94111 >= e || 110960 <= e && 111359 >= e || 94208 <= e && 100332 >= e || 100352 <= e && 101119 >= e || 40960 <= e && 42127 >= e || 42128 <= e && 42191 >= e;
  };
  f.AscCommon.$Qd = bb;
  f.AscCommon.fI = Eg;
  f.AscCommon.Ehb = sd;
  f.AscCommon.wId = Ee;
  f.AscCommon.QOc = {
    nil: '#NULL!',
    div: '#DIV/0!',
    value: '#VALUE!',
    ref: '#REF!',
    name: '#NAME?',
    num: '#NUM!',
    na: '#N/A',
    getdata: '#GETTING_DATA',
    uf: '#UNSUPPORTED_FUNCTION!'
  };
  f.AscCommon.hUd = Xb;
  f.AscCommon.hHc = ad;
  f.AscCommon.IEf = /\s/g;
  f.AscCommon.Hrg = /\s/;
  f.AscCommon.Czd =
    On;
  f.AscCommon.qdf = 'de-formatpainter';
  f.AscCommon.PT = ox;
  f.AscCommon.kg = Lu;
  f.AscCommon.iQa = tv;
  f.AscCommon.P7f = f.AscCommon.CSignatureDrawer = Ce;
  var Rl = Ce.prototype;
  Rl.getImages = Rl.k7e;
  Rl.setText = Rl.Vof;
  Rl.selectImage = Rl.Inf;
  Rl.isValid = Rl.pB;
  Rl.destroy = Rl.rOa;
  f.AscCommon.Bw = new he;
  f.AscCommon.TKc = function (f, w, Oa) {
    if (w.$zb()) var Ia = w.$zb(); else switch (w.P0b()) {
      case AscCommon.XVa.Af:
        Ia = e;
        break;
      case AscCommon.XVa.hW:
        Ia = '\t';
        break;
      case AscCommon.XVa.tue:
        Ia = ';';
        break;
      case AscCommon.XVa.k8d:
        Ia = ':';
        break;
      case AscCommon.XVa.CWc:
        Ia =
          ',';
        break;
      case AscCommon.XVa.nc:
        Ia = ' ';
    }
    w = [];
    f = f.split(/\r?\n/);
    for (var Da = 0; Da < f.length; ++Da) {
      var Ra = f[Da];
      if (' ' === Ia && Oa) {
        var Ha = !1;
        Ra[0] === Ia && (Ha = !0);
        Ra = Ha ? Ia + Ra.trim() : Ra.trim();
      }
      w.push(Ra.split(Ia));
    }
    return w;
  };
  f.AscCommon.yOa = function (e) {
    return e ? e.endsWith('Z') ? Date.parse(e) : Date.parse(e + 'Z') : NaN;
  };
})(window);
window.asc_initAdvancedOptions = function (f, e, Pa) {
  if (window.mWb) return window.NativeFileOpen_error(window.mWb, e, Pa);
  var ab = window.Asc.editor ? window.Asc.editor : window.editor;
  if (90 == f || 91 == f) {
    if (window.AscDesktopEditor && 0 !== window.AscDesktopEditor.CryptoMode && !ab.T4) {
      ab.pta = [];
      ab.pta.push(f);
      ab.pta.push(e);
      ab.pta.push(Pa);
      return;
    }
    if (AscCommon.AE.LYa() && !window.T9a) {
      window.T9a = !0;
      window.Ni.$ua({ type: 'getPasswordByFile', hash: e, docinfo: Pa });
      return;
    }
  }
  window.T9a = !1;
  ab.U8a(void 0, 90 == f || 91 == f ? !0 : void 0);
};
window.asc_IsNeedBuildCryptedFile = function () {
  if (!window.AscDesktopEditor || !window.AscDesktopEditor.CryptoMode) return !1;
  var f = window.Asc.editor ? window.Asc.editor : window.editor, e = !1, Pa = null;
  f.al && f.al.cl && f.al.cl.gta && (Pa = f.al.cl.gta);
  var ab = 0, bb;
  for (bb in Pa) ab++;
  1 >= ab ? null != AscCommon.History.$K && -1 != AscCommon.History.$K ? e = !0 : f.QC == AscCommon.$z.uO ? AscCommon.AE.sAc && (e = !0) : 0 != AscCommon.Rd.hoa.length && (e = !0) : e = !1;
  window.AscDesktopEditor.execCommand('encrypt:isneedbuild', '' + e);
  return e;
};
window.UpdateSystemPlugins = function () {
  var f = JSON.parse(window.AscDesktopEditor.GetInstallPlugins());
  f[0].url = f[0].url.replace(' ', '%20');
  f[1].url = f[1].url.replace(' ', '%20');
  for (var e = 0; 2 > e; e++) for (var Pa = f[e], ab = Pa.pluginsData.length, bb = 0; bb < ab; bb++) Pa.pluginsData[bb].baseUrl = Pa.url + Pa.pluginsData[bb].guid.substring(4) + '/', window.AscDesktopEditor.IsLocalFile() || (Pa.pluginsData[bb].baseUrl = 'ascdesktop://plugin_content/' + Pa.pluginsData[bb].baseUrl);
  var nb = [];
  for (e = 0; 2 > e; e++) for (Pa = f[e], ab = Pa.pluginsData.length,
                                 bb = 0; bb < ab; bb++) for (var Da = Pa.pluginsData[bb], Ha = 0; Ha < Da.variations.length; Ha++) {
    var Eb = Da.variations[Ha];
    if ('desktop' == Eb.initDataType) {
      if ('encryption' == Eb.initData) {
        (Ha = Eb.cryptoMode) || (Ha = '1');
        AscCommon.AE.Gmd = parseInt(Ha);
        nb.push(Da);
        break;
      }
      nb.push(Da);
      break;
    }
  }
  f = [];
  for (bb = 0; bb < nb.length; bb++) e = new Asc.h8b, e.deserialize(nb[bb]), f.push(e);
  window.Ni.Zmf('', f);
  window.Ni.znf();
};
window.buildCryptoFile_Start = function () {
  (window.Asc.editor ? window.Asc.editor : window.editor).fG(Asc.EH.Kr, Asc.OG.qG);
  window.Ni.$ua({ type: 'generatePassword' });
};
window.buildCryptoFile_End = function (f, e, Pa, ab) {
  var bb = window.Asc.editor ? window.Asc.editor : window.editor;
  bb.hx(Asc.EH.Kr, Asc.OG.qG);
  0 != e ? bb.Re('asc_onError', Asc.rl.Fg.j9b, Asc.rl.il.ep) : (bb.Cic = function () {
    this.Cic = null;
    bb.fG(Asc.EH.Kr, Asc.OG.qG);
    var e = new XMLHttpRequest;
    e.open('GET', 'ascdesktop://fonts/' + f, !0);
    e.responseType = 'arraybuffer';
    e.overrideMimeType ? e.overrideMimeType('text/plain; charset=x-user-defined') : e.setRequestHeader('Accept-Charset', 'x-user-defined');
    e.onload = function () {
      if (200 == this.status) {
        var e =
          new Uint8Array(this.response), f = '.docx';
        switch (bb.QC) {
          case AscCommon.$z.RA:
            f = '.pptx';
            break;
          case AscCommon.$z.uO:
            f = '.xlsx';
        }
        AscCommon.Mnf(bb.KY, bb.tia, 'output' + f, bb.zid(), e, function () {
          bb.hx(Asc.EH.Kr, Asc.OG.qG);
          bb.Re('asc_onError', Asc.rl.Fg.jFa, Asc.rl.il.xV);
          window.AscDesktopEditor.buildCryptedEnd(!1);
        }, function (e) {
          try {
            var f = {
              accounts: e.responseText ? JSON.parse(e.responseText) : void 0,
              hash: Pa,
              password: ab,
              type: 'share',
              docinfo: bb.Omd
            };
            bb.Omd = void 0;
            window.AscDesktopEditor.sendSystemMessage(f);
            window.AscDesktopEditor.CallInAllWindows('function(){ if (window.DesktopUpdateFile) { window.DesktopUpdateFile(undefined); } }');
            bb.hx(Asc.EH.Kr, Asc.OG.qG);
            setTimeout(function () {
              window.AscDesktopEditor.buildCryptedEnd(!0);
            }, 1E3);
          } catch (Va) {
          }
        });
      }
    };
    e.send(null);
  }, window.Ni.$ua({ type: 'setPasswordByFile', hash: Pa, password: ab }));
};
window.NativeFileOpen_error = function (f, e, Pa) {
  var ab = window.Asc.editor ? window.Asc.editor : window.editor;
  'password' == f ? (window.mWb = f, window.AscDesktopEditor && 0 !== window.AscDesktopEditor.CryptoMode && !ab.T4 ? (ab.pta = [], ab.pta.push(90), ab.pta.push(e), ab.pta.push(Pa)) : AscCommon.AE.LYa() && !window.T9a ? (window.T9a = !0, window.Ni.$ua({
    type: 'getPasswordByFile',
    hash: e,
    docinfo: Pa
  })) : (window.T9a = !1, ab.U8a(void 0, !0))) : 'error' == f && ab.Re('asc_onError', c_oAscError.Fg.jFa, c_oAscError.il.xV);
};
window.CryptoDownloadAsEnd = function () {
  (window.Asc.editor ? window.Asc.editor : window.editor).hx(Asc.EH.Kr, Asc.OG.d$b);
  window.oAc = void 0;
};
window.AscDesktopEditor_Save = function () {
  (window.Asc.editor ? window.Asc.editor : window.editor).cba(!1) || window.AscDesktopEditor.OnSave();
};
'use strict';
(function (f, e) {
  function Pa(e) {
    this.Oa = e;
    this.Aec = !1;
  }

  function ab(e, f, Ia, Da) {
    Pa.call(this, e);
    this.Ua = f;
    this.xd = Ia;
    this.xz = !1;
    this.xm = [];
    this.ma = Da;
    this.Aec = !1;
  }

  function bb(e, f, Ia, Da) {
    Pa.call(this, e);
    this.Aa = !0 === Da ? !0 : !1;
    this.vb = f;
    this.Ia = Ia;
  }

  function nb(e, f, Ia, Da) {
    bb.call(this, e, f, Ia, Da);
  }

  function Da(e, f, Ia, Da) {
    bb.call(this, e, f, Ia, Da);
  }

  function Ha(e, f, Ia, Da) {
    bb.call(this, e, f, Ia, Da);
  }

  function Eb(e, f, Ia, Da) {
    bb.call(this, e, f, Ia, Da);
  }

  function zb(e, f, Ia, Da) {
    bb.call(this, e, f, Ia, Da);
  }

  function Va(e, f, Ia, Da) {
    bb.call(this,
      e, f, Ia, Da);
  }

  function gb(e, f, Ia, Da) {
    bb.call(this, e, f, Ia, Da);
  }

  function Za(e, f, Ia, Da) {
    bb.call(this, e, f, Ia, Da);
  }

  function bc(e, f, Ia, Da) {
    bb.call(this, e, f, Ia, Da);
  }

  function Nc(e, f, Ia, Da) {
    bb.call(this, e, f, Ia, Da);
  }

  function cc(e, f, Ia, Da) {
    bb.call(this, e, f, Ia, Da);
  }

  function Rb(e, f, Ia, Da) {
    bb.call(this, e, f, Ia, Da);
  }

  f.AscDFH = f.AscDFH || {};
  f.AscDFH.f$f = function (e) {
    var f = 'Unknown';
    switch (e) {
      case AscDFH.CWd:
        f = 'Cut';
        break;
      case AscDFH.vaf:
        f = 'PasteButtonIE';
        break;
      case AscDFH.waf:
        f = 'PasteButtonNotIE';
        break;
      case AscDFH.pqd:
        f = 'ChartDrawingObjects';
        break;
      case AscDFH.qqd:
        f = 'CommonControllerCheckChartText';
        break;
      case AscDFH.rqd:
        f = 'CommonControllerUnGroup';
        break;
      case AscDFH.$Jc:
        f = 'CommonControllerCheckSelected';
        break;
      case AscDFH.baf:
        f = 'CommonControllerSetGraphicObject';
        break;
      case AscDFH.xKd:
        f = 'CommonStatesAddNewShape';
        break;
      case AscDFH.caf:
        f = 'CommonStatesRotate';
        break;
      case AscDFH.xaf:
        f = 'PasteNative';
        break;
      case AscDFH.pXd:
        f = 'Document_GroupUnGroup';
        break;
      case AscDFH.IKd:
        f = 'Document_SetDefaultLanguage';
        break;
      case AscDFH.XWd:
        f = 'Document_ChangeColorScheme';
        break;
      case AscDFH.GWd:
        f = 'Document_AddChart';
        break;
      case AscDFH.gXd:
        f = 'Document_EditChart';
        break;
      case AscDFH.xQc:
        f = 'Document_DragText';
        break;
      case AscDFH.Rqd:
        f = 'Document_DocumentContentExtendToPos';
        break;
      case AscDFH.yqd:
        f = 'Document_AddHeader';
        break;
      case AscDFH.wqd:
        f = 'Document_AddFooter';
        break;
      case AscDFH.brd:
        f = 'Document_ParagraphExtendToPos';
        break;
      case AscDFH.ard:
        f = 'Document_ParagraphChangeFrame';
        break;
      case AscDFH.erd:
        f = 'Document_ReplaceAll';
        break;
      case AscDFH.frd:
        f = 'Document_ReplaceSingle';
        break;
      case AscDFH.yrd:
        f =
          'Document_TableAddNewRowByTab';
        break;
      case AscDFH.PWd:
        f = 'Document_AddNewShape';
        break;
      case AscDFH.hXd:
        f = 'Document_EditWrapPolygon';
        break;
      case AscDFH.tXd:
        f = 'Document_MoveInlineObject';
        break;
      case AscDFH.dXd:
        f = 'Document_CopyAndMoveInlineObject';
        break;
      case AscDFH.GXd:
        f = 'Document_RotateInlineDrawing';
        break;
      case AscDFH.EXd:
        f = 'Document_RotateFlowDrawingCtrl';
        break;
      case AscDFH.FXd:
        f = 'Document_RotateFlowDrawingNoCtrl';
        break;
      case AscDFH.sXd:
        f = 'Document_MoveInGroup';
        break;
      case AscDFH.aXd:
        f = 'Document_ChangeWrapContour';
        break;
      case AscDFH.bXd:
        f = 'Document_ChangeWrapContourAddPoint';
        break;
      case AscDFH.lXd:
        f = 'Document_GrObjectsBringToFront';
        break;
      case AscDFH.kXd:
        f = 'Document_GrObjectsBringForwardGroup';
        break;
      case AscDFH.jXd:
        f = 'Document_GrObjectsBringForward';
        break;
      case AscDFH.oXd:
        f = 'Document_GrObjectsSendToBackGroup';
        break;
      case AscDFH.nXd:
        f = 'Document_GrObjectsSendToBack';
        break;
      case AscDFH.iXd:
        f = 'Document_GrObjectsBringBackwardGroup';
        break;
      case AscDFH.FKd:
        f = 'Document_GrObjectsBringBackward';
        break;
      case AscDFH.mXd:
        f = 'Document_GrObjectsChangeWrapPolygon';
        break;
      case AscDFH.Ppc:
        f = 'Document_MathAutoCorrect';
        break;
      case AscDFH.JXd:
        f = 'Document_SetFramePrWithFontFamily';
        break;
      case AscDFH.IXd:
        f = 'Document_SetFramePr';
        break;
      case AscDFH.KXd:
        f = 'Document_SetFramePrWithFontFamilyLong';
        break;
      case AscDFH.nYd:
        f = 'Document_SetTextFontName';
        break;
      case AscDFH.pYd:
        f = 'Document_SetTextFontSize';
        break;
      case AscDFH.jYd:
        f = 'Document_SetTextBold';
        break;
      case AscDFH.sYd:
        f = 'Document_SetTextItalic';
        break;
      case AscDFH.xYd:
        f = 'Document_SetTextUnderline';
        break;
      case AscDFH.wYd:
        f = 'Document_SetTextStrikeout';
        break;
      case AscDFH.mYd:
        f = 'Document_SetTextDStrikeout';
        break;
      case AscDFH.vYd:
        f = 'Document_SetTextSpacing';
        break;
      case AscDFH.kYd:
        f = 'Document_SetTextCaps';
        break;
      case AscDFH.uYd:
        f = 'Document_SetTextSmallCaps';
        break;
      case AscDFH.tYd:
        f = 'Document_SetTextPosition';
        break;
      case AscDFH.PKd:
        f = 'Document_SetTextLang';
        break;
      case AscDFH.aYd:
        f = 'Document_SetParagraphLineSpacing';
        break;
      case AscDFH.bYd:
        f = 'Document_SetParagraphLineSpacingBeforeAfter';
        break;
      case AscDFH.qXd:
        f = 'Document_IncFontSize';
        break;
      case AscDFH.fXd:
        f = 'Document_DecFontSize';
        break;
      case AscDFH.UXd:
        f = 'Document_SetParagraphBorders';
        break;
      case AscDFH.fYd:
        f = 'Document_SetParagraphPr';
        break;
      case AscDFH.TXd:
        f = 'Document_SetParagraphAlign';
        break;
      case AscDFH.yYd:
        f = 'Document_SetTextVertAlign';
        break;
      case AscDFH.cYd:
        f = 'Document_SetParagraphNumbering';
        break;
      case AscDFH.hYd:
        f = 'Document_SetParagraphStyle';
        break;
      case AscDFH.eYd:
        f = 'Document_SetParagraphPageBreakBefore';
        break;
      case AscDFH.iYd:
        f = 'Document_SetParagraphWidowControl';
        break;
      case AscDFH.ZXd:
        f = 'Document_SetParagraphKeepLines';
        break;
      case AscDFH.$Xd:
        f = 'Document_SetParagraphKeepNext';
        break;
      case AscDFH.VXd:
        f = 'Document_SetParagraphContextualSpacing';
        break;
      case AscDFH.rYd:
        f = 'Document_SetTextHighlightNone';
        break;
      case AscDFH.qYd:
        f = 'Document_SetTextHighlightColor';
        break;
      case AscDFH.lYd:
        f = 'Document_SetTextColor';
        break;
      case AscDFH.gYd:
        f = 'Document_SetParagraphShd';
        break;
      case AscDFH.WXd:
        f = 'Document_SetParagraphIndent';
        break;
      case AscDFH.Vqd:
        f = 'Document_IncParagraphIndent';
        break;
      case AscDFH.Pqd:
        f = 'Document_DecParagraphIndent';
        break;
      case AscDFH.YXd:
        f =
          'Document_SetParagraphIndentRight';
        break;
      case AscDFH.XXd:
        f = 'Document_SetParagraphIndentFirstLine';
        break;
      case AscDFH.RXd:
        f = 'Document_SetPageOrientation';
        break;
      case AscDFH.SXd:
        f = 'Document_SetPageSize';
        break;
      case AscDFH.AKd:
        f = 'Document_AddPageBreak';
        break;
      case AscDFH.SWd:
        f = 'Document_AddPageNumToHdrFtr';
        break;
      case AscDFH.RWd:
        f = 'Document_AddPageNumToCurrentPos';
        break;
      case AscDFH.NXd:
        f = 'Document_SetHdrFtrDistance';
        break;
      case AscDFH.PXd:
        f = 'Document_SetHdrFtrFirstPage';
        break;
      case AscDFH.OXd:
        f = 'Document_SetHdrFtrEvenAndOdd';
        break;
      case AscDFH.QXd:
        f = 'Document_SetHdrFtrLink';
        break;
      case AscDFH.TWd:
        f = 'Document_AddTable';
        break;
      case AscDFH.CYd:
        f = 'Document_TableAddRowAbove';
        break;
      case AscDFH.DYd:
        f = 'Document_TableAddRowBelow';
        break;
      case AscDFH.AYd:
        f = 'Document_TableAddColumnLeft';
        break;
      case AscDFH.BYd:
        f = 'Document_TableAddColumnRight';
        break;
      case AscDFH.FYd:
        f = 'Document_TableRemoveRow';
        break;
      case AscDFH.EYd:
        f = 'Document_TableRemoveColumn';
        break;
      case AscDFH.DXd:
        f = 'Document_RemoveTable';
        break;
      case AscDFH.rXd:
        f = 'Document_MergeTableCells';
        break;
      case AscDFH.zYd:
        f = 'Document_SplitTableCells';
        break;
      case AscDFH.WWd:
        f = 'Document_ApplyTablePr';
        break;
      case AscDFH.LWd:
        f = 'Document_AddImageUrl';
        break;
      case AscDFH.MWd:
        f = 'Document_AddImageUrlLong';
        break;
      case AscDFH.KWd:
        f = 'Document_AddImageToPage';
        break;
      case AscDFH.UWd:
        f = 'Document_ApplyImagePrWithUrl';
        break;
      case AscDFH.VWd:
        f = 'Document_ApplyImagePrWithUrlLong';
        break;
      case AscDFH.gaf:
        f = 'Document_ApplyImagePrWithFillUrl';
        break;
      case AscDFH.haf:
        f = 'Document_ApplyImagePrWithFillUrlLong';
        break;
      case AscDFH.Iqd:
        f =
          'Document_ApplyImagePr';
        break;
      case AscDFH.IWd:
        f = 'Document_AddHyperlink';
        break;
      case AscDFH.ZWd:
        f = 'Document_ChangeHyperlink';
        break;
      case AscDFH.BXd:
        f = 'Document_RemoveHyperlink';
        break;
      case AscDFH.HKd:
        f = 'Document_ReplaceMisspelledWord';
        break;
      case AscDFH.HWd:
        f = 'Document_AddComment';
        break;
      case AscDFH.xXd:
        f = 'Document_RemoveComment';
        break;
      case AscDFH.YWd:
        f = 'Document_ChangeComment';
        break;
      case AscDFH.oYd:
        f = 'Document_SetTextFontNameLong';
        break;
      case AscDFH.JWd:
        f = 'Document_AddImage';
        break;
      case AscDFH.cXd:
        f = 'Document_ClearFormatting';
        break;
      case AscDFH.BKd:
        f = 'Document_AddSectionBreak';
        break;
      case AscDFH.zKd:
        f = 'Document_AddMath';
        break;
      case AscDFH.NKd:
        f = 'Document_SetParagraphTabs';
        break;
      case AscDFH.MKd:
        f = 'Document_SetParagraphIndentFromRulers';
        break;
      case AscDFH.JKd:
        f = 'Document_SetDocumentMargin_Hor';
        break;
      case AscDFH.Spc:
        f = 'Document_SetTableMarkup_Hor';
        break;
      case AscDFH.KKd:
        f = 'Document_SetDocumentMargin_Ver';
        break;
      case AscDFH.LKd:
        f = 'Document_SetHdrFtrBounds';
        break;
      case AscDFH.OKd:
        f = 'Document_SetTableMarkup_Ver';
        break;
      case AscDFH.Sqd:
        f =
          'Document_DocumentExtendToPos';
        break;
      case AscDFH.uqd:
        f = 'Document_AddDropCap';
        break;
      case AscDFH.mRb:
        f = 'Document_RemoveDropCap';
        break;
      case AscDFH.rrd:
        f = 'Document_SetTextHighlight';
        break;
      case AscDFH.wQc:
        f = 'Document_BackSpaceButton';
        break;
      case AscDFH.Zqd:
        f = 'Document_MoveParagraphByTab';
        break;
      case AscDFH.Dqd:
        f = 'Document_AddTab';
        break;
      case AscDFH.yQc:
        f = 'Document_EnterButton';
        break;
      case AscDFH.Tpc:
        f = 'Document_SpaceButton';
        break;
      case AscDFH.taf:
        f = 'Document_ShiftInsert';
        break;
      case AscDFH.uaf:
        f = 'Document_ShiftInsertSafari';
        break;
      case AscDFH.Qqd:
        f = 'Document_DeleteButton';
        break;
      case AscDFH.saf:
        f = 'Document_ShiftDeleteButton';
        break;
      case AscDFH.nrd:
        f = 'Document_SetStyleHeading1';
        break;
      case AscDFH.ord:
        f = 'Document_SetStyleHeading2';
        break;
      case AscDFH.prd:
        f = 'Document_SetStyleHeading3';
        break;
      case AscDFH.urd:
        f = 'Document_SetTextStrikeoutHotKey';
        break;
      case AscDFH.qrd:
        f = 'Document_SetTextBoldHotKey';
        break;
      case AscDFH.G1b:
        f = 'Document_SetParagraphAlignHotKey';
        break;
      case AscDFH.vqd:
        f = 'Document_AddEuroLetter';
        break;
      case AscDFH.trd:
        f = 'Document_SetTextItalicHotKey';
        break;
      case AscDFH.oaf:
        f = 'Document_SetParagraphAlignHotKey2';
        break;
      case AscDFH.lrd:
        f = 'Document_SetParagraphNumberingHotKey';
        break;
      case AscDFH.paf:
        f = 'Document_SetParagraphAlignHotKey3';
        break;
      case AscDFH.Cqd:
        f = 'Document_AddPageNumHotKey';
        break;
      case AscDFH.qaf:
        f = 'Document_SetParagraphAlignHotKey4';
        break;
      case AscDFH.vrd:
        f = 'Document_SetTextUnderlineHotKey';
        break;
      case AscDFH.Tqd:
        f = 'Document_FormatPasteHotKey';
        break;
      case AscDFH.lRb:
        f = 'Document_PasteHotKey';
        break;
      case AscDFH.maf:
        f = 'Document_PasteSafariHotKey';
        break;
      case AscDFH.kaf:
        f = 'Document_CutHotKey';
        break;
      case AscDFH.raf:
        f = 'Document_SetTextVertAlignHotKey';
        break;
      case AscDFH.Aqd:
        f = 'Document_AddMathHotKey';
        break;
      case AscDFH.wrd:
        f = 'Document_SetTextVertAlignHotKey2';
        break;
      case AscDFH.Wqd:
        f = 'Document_MinusButton';
        break;
      case AscDFH.xrd:
        f = 'Document_SetTextVertAlignHotKey3';
        break;
      case AscDFH.zqd:
        f = 'Document_AddLetter';
        break;
      case AscDFH.$qd:
        f = 'Document_MoveTableBorder';
        break;
      case AscDFH.Uqd:
        f = 'Document_FormatPasteHotKey2';
        break;
      case AscDFH.srd:
        f = 'Document_SetTextHighlight2';
        break;
      case AscDFH.Hqd:
        f = 'Document_AddTextFromTextBox';
        break;
      case AscDFH.OWd:
        f = 'Document_AddMailMergeField';
        break;
      case AscDFH.Yqd:
        f = 'Document_MoveInlineTable';
        break;
      case AscDFH.Xqd:
        f = 'Document_MoveFlowTable';
        break;
      case AscDFH.hrd:
        f = 'Document_RestoreFieldTemplateText';
        break;
      case AscDFH.Xpc:
        f = 'Spreadsheet_SetCellFontName';
        break;
      case AscDFH.Jrd:
        f = 'Spreadsheet_SetCellFontSize';
        break;
      case AscDFH.Hrd:
        f = 'Spreadsheet_SetCellBold';
        break;
      case AscDFH.Ord:
        f = 'Spreadsheet_SetCellItalic';
        break;
      case AscDFH.Trd:
        f =
          'Spreadsheet_SetCellUnderline';
        break;
      case AscDFH.Prd:
        f = 'Spreadsheet_SetCellStrikeout';
        break;
      case AscDFH.Qrd:
        f = 'Spreadsheet_SetCellSubscript';
        break;
      case AscDFH.Rrd:
        f = 'Spreadsheet_SetCellSuperscript';
        break;
      case AscDFH.Frd:
        f = 'Spreadsheet_SetCellAlign';
        break;
      case AscDFH.qtb:
        f = 'Spreadsheet_SetCellVertAlign';
        break;
      case AscDFH.Srd:
        f = 'Spreadsheet_SetCellTextColor';
        break;
      case AscDFH.Grd:
        f = 'Spreadsheet_SetCellBackgroundColor';
        break;
      case AscDFH.Nrd:
        f = 'Spreadsheet_SetCellIncreaseFontSize';
        break;
      case AscDFH.Ird:
        f =
          'Spreadsheet_SetCellDecreaseFontSize';
        break;
      case AscDFH.Krd:
        f = 'Spreadsheet_SetCellHyperlinkAdd';
        break;
      case AscDFH.Lrd:
        f = 'Spreadsheet_SetCellHyperlinkModify';
        break;
      case AscDFH.Mrd:
        f = 'Spreadsheet_SetCellHyperlinkRemove';
        break;
      case AscDFH.Crd:
        f = 'Spreadsheet_EditChart';
        break;
      case AscDFH.Wpc:
        f = 'Spreadsheet_Remove';
        break;
      case AscDFH.Brd:
        f = 'Spreadsheet_AddTab';
        break;
      case AscDFH.Upc:
        f = 'Spreadsheet_AddNewParagraph';
        break;
      case AscDFH.TKd:
        f = 'Spreadsheet_AddSpace';
        break;
      case AscDFH.Ard:
        f = 'Spreadsheet_AddItem';
        break;
      case AscDFH.Erd:
        f = 'Spreadsheet_PutPrLineSpacing';
        break;
      case AscDFH.Vrd:
        f = 'Spreadsheet_SetParagraphSpacing';
        break;
      case AscDFH.Urd:
        f = 'Spreadsheet_SetGraphicObjectsProps';
        break;
      case AscDFH.Drd:
        f = 'Spreadsheet_ParaApply';
        break;
      case AscDFH.ptb:
        f = 'Spreadsheet_GraphicObjectLayer';
        break;
      case AscDFH.UKd:
        f = 'Spreadsheet_ParagraphAdd';
        break;
      case AscDFH.Vpc:
        f = 'Spreadsheet_CreateGroup';
        break;
      case AscDFH.vKd:
        f = 'CommonDrawings_ChangeAdj';
        break;
      case AscDFH.uQc:
        f = 'CommonDrawings_EndTrack';
        break;
      case AscDFH.wKd:
        f =
          'CommonDrawings_CopyCtrl';
        break;
      case AscDFH.oZd:
        f = 'Presentation_ParaApply';
        break;
      case AscDFH.pZd:
        f = 'Presentation_ParaFormatPaste';
        break;
      case AscDFH.LYd:
        f = 'Presentation_AddNewParagraph';
        break;
      case AscDFH.aZd:
        f = 'Presentation_CreateGroup';
        break;
      case AscDFH.LZd:
        f = 'Presentation_UnGroup';
        break;
      case AscDFH.GYd:
        f = 'Presentation_AddChart';
        break;
      case AscDFH.eZd:
        f = 'Presentation_EditChart';
        break;
      case AscDFH.Fqa:
        f = 'Presentation_ParagraphAdd';
        break;
      case AscDFH.qZd:
        f = 'Presentation_ParagraphClearFormatting';
        break;
      case AscDFH.CZd:
        f = 'Presentation_SetParagraphAlign';
        break;
      case AscDFH.EZd:
        f = 'Presentation_SetParagraphSpacing';
        break;
      case AscDFH.FZd:
        f = 'Presentation_SetParagraphTabs';
        break;
      case AscDFH.DZd:
        f = 'Presentation_SetParagraphIndent';
        break;
      case AscDFH.zQc:
        f = 'Presentation_SetParagraphNumbering';
        break;
      case AscDFH.rZd:
        f = 'Presentation_ParagraphIncDecFontSize';
        break;
      case AscDFH.sZd:
        f = 'Presentation_ParagraphIncDecIndent';
        break;
      case AscDFH.BZd:
        f = 'Presentation_SetImageProps';
        break;
      case AscDFH.GZd:
        f = 'Presentation_SetShapeProps';
        break;
      case AscDFH.$Yd:
        f = 'Presentation_ChartApply';
        break;
      case AscDFH.XYd:
        f = 'Presentation_ChangeShapeType';
        break;
      case AscDFH.HZd:
        f = 'Presentation_SetVerticalAlign';
        break;
      case AscDFH.fZd:
        f = 'Presentation_HyperlinkAdd';
        break;
      case AscDFH.gZd:
        f = 'Presentation_HyperlinkModify';
        break;
      case AscDFH.hZd:
        f = 'Presentation_HyperlinkRemove';
        break;
      case AscDFH.cZd:
        f = 'Presentation_DistHor';
        break;
      case AscDFH.dZd:
        f = 'Presentation_DistVer';
        break;
      case AscDFH.SYd:
        f = 'Presentation_BringToFront';
        break;
      case AscDFH.RYd:
        f = 'Presentation_BringForward';
        break;
      case AscDFH.AZd:
        f = 'Presentation_SendToBack';
        break;
      case AscDFH.QYd:
        f = 'Presentation_BringBackward';
        break;
      case AscDFH.PYd:
        f = 'Presentation_ApplyTiming';
        break;
      case AscDFH.mZd:
        f = 'Presentation_MoveSlidesToEnd';
        break;
      case AscDFH.kZd:
        f = 'Presentation_MoveSlidesNextPos';
        break;
      case AscDFH.lZd:
        f = 'Presentation_MoveSlidesPrevPos';
        break;
      case AscDFH.nZd:
        f = 'Presentation_MoveSlidesToStart';
        break;
      case AscDFH.jZd:
        f = 'Presentation_MoveComments';
        break;
      case AscDFH.Qaf:
        f = 'Presentation_TableBorder';
        break;
      case AscDFH.RKd:
        f =
          'Presentation_AddFlowImage';
        break;
      case AscDFH.KYd:
        f = 'Presentation_AddFlowTable';
        break;
      case AscDFH.TYd:
        f = 'Presentation_ChangeBackground';
        break;
      case AscDFH.MYd:
        f = 'Presentation_AddNextSlide';
        break;
      case AscDFH.IZd:
        f = 'Presentation_ShiftSlides';
        break;
      case AscDFH.bZd:
        f = 'Presentation_DeleteSlides';
        break;
      case AscDFH.WYd:
        f = 'Presentation_ChangeLayout';
        break;
      case AscDFH.YYd:
        f = 'Presentation_ChangeSlideSize';
        break;
      case AscDFH.UYd:
        f = 'Presentation_ChangeColorScheme';
        break;
      case AscDFH.JYd:
        f = 'Presentation_AddComment';
        break;
      case AscDFH.VYd:
        f = 'Presentation_ChangeComment';
        break;
      case AscDFH.Haf:
        f = 'Presentation_PutTextPrFontName';
        break;
      case AscDFH.Iaf:
        f = 'Presentation_PutTextPrFontSize';
        break;
      case AscDFH.Faf:
        f = 'Presentation_PutTextPrBold';
        break;
      case AscDFH.Kaf:
        f = 'Presentation_PutTextPrItalic';
        break;
      case AscDFH.Paf:
        f = 'Presentation_PutTextPrUnderline';
        break;
      case AscDFH.Oaf:
        f = 'Presentation_PutTextPrStrikeout';
        break;
      case AscDFH.Laf:
        f = 'Presentation_PutTextPrLineSpacing';
        break;
      case AscDFH.Naf:
        f = 'Presentation_PutTextPrSpacingBeforeAfter';
        break;
      case AscDFH.Jaf:
        f = 'Presentation_PutTextPrIncreaseFontSize';
        break;
      case AscDFH.Gaf:
        f = 'Presentation_PutTextPrDecreaseFontSize';
        break;
      case AscDFH.wZd:
        f = 'Presentation_PutTextPrAlign';
        break;
      case AscDFH.Eaf:
        f = 'Presentation_PutTextPrBaseline';
        break;
      case AscDFH.Maf:
        f = 'Presentation_PutTextPrListType';
        break;
      case AscDFH.Caf:
        f = 'Presentation_PutTextColor';
        break;
      case AscDFH.Daf:
        f = 'Presentation_PutTextColor2';
        break;
      case AscDFH.uZd:
        f = 'Presentation_PutPrIndent';
        break;
      case AscDFH.vZd:
        f = 'Presentation_PutPrIndentRight';
        break;
      case AscDFH.tZd:
        f = 'Presentation_PutPrFirstLineIndent';
        break;
      case AscDFH.yaf:
        f = 'Presentation_AddPageBreak';
        break;
      case AscDFH.NYd:
        f = 'Presentation_AddRowAbove';
        break;
      case AscDFH.OYd:
        f = 'Presentation_AddRowBelow';
        break;
      case AscDFH.HYd:
        f = 'Presentation_AddColLeft';
        break;
      case AscDFH.IYd:
        f = 'Presentation_AddColRight';
        break;
      case AscDFH.yZd:
        f = 'Presentation_RemoveRow';
        break;
      case AscDFH.xZd:
        f = 'Presentation_RemoveCol';
        break;
      case AscDFH.zZd:
        f = 'Presentation_RemoveTable';
        break;
      case AscDFH.iZd:
        f = 'Presentation_MergeCells';
        break;
      case AscDFH.JZd:
        f = 'Presentation_SplitCells';
        break;
      case AscDFH.KZd:
        f = 'Presentation_TblApply';
        break;
      case AscDFH.SKd:
        f = 'Presentation_RemoveComment';
        break;
      case AscDFH.zaf:
        f = 'Presentation_EndFontLoad';
        break;
      case AscDFH.ZYd:
        f = 'Presentation_ChangeTheme';
        break;
      case AscDFH.Raf:
        f = 'Presentation_TableMoveFromRulers';
        break;
      case AscDFH.Saf:
        f = 'Presentation_TableMoveFromRulersInline';
        break;
      case AscDFH.Aaf:
        f = 'Presentation_PasteOnThumbnails';
        break;
      case AscDFH.Baf:
        f = 'Presentation_PasteOnThumbnailsSafari';
        break;
      case AscDFH.Oqd:
        f = 'Document_ConvertOldEquation';
        break;
      case AscDFH.QWd:
        f = 'Document_AddNewStyle';
        break;
      case AscDFH.CXd:
        f = 'Document_RemoveStyle';
        break;
      case AscDFH.CKd:
        f = 'Document_AddTextArt';
        break;
      case AscDFH.wXd:
        f = 'Document_RemoveAllCustomStyles';
        break;
      case AscDFH.DWd:
        f = 'Document_AcceptAllRevisionChanges';
        break;
      case AscDFH.uXd:
        f = 'Document_RejectAllRevisionChanges';
        break;
      case AscDFH.EWd:
        f = 'Document_AcceptRevisionChange';
        break;
      case AscDFH.vXd:
        f = 'Document_RejectRevisionChange';
        break;
      case AscDFH.yKd:
        f =
          'Document_AcceptRevisionChangesBySelection';
        break;
      case AscDFH.naf:
        f = 'Document_RejectRevisionChangesBySelection';
        break;
      case AscDFH.vQc:
        f = 'Document_AddLetterUnion';
        break;
      case AscDFH.ird:
        f = 'Document_SetColumnsFromRuler';
        break;
      case AscDFH.Rpc:
        f = 'Document_SetColumnsProps';
        break;
      case AscDFH.daf:
        f = 'Document_AddColumnBreak';
        break;
      case AscDFH.Eqd:
        f = 'Document_AddTabToMath';
        break;
      case AscDFH.iaf:
        f = 'Document_ApplyPrToMath';
        break;
      case AscDFH.krd:
        f = 'Document_SetMathProps';
        break;
      case AscDFH.mrd:
        f = 'Document_SetColumnsProps';
        break;
      case AscDFH.aKc:
        f = 'Document_ApiBuilder';
        break;
      case AscDFH.eaf:
        f = 'Document_AddOleObject';
        break;
      case AscDFH.laf:
        f = 'Document_EditOleObject';
        break;
      case AscDFH.Cgb:
        f = 'Document_CompositeInput';
        break;
      case AscDFH.pab:
        f = 'Document_CompositeInputReplace';
        break;
      case AscDFH.Bqd:
        f = 'Document_AddPageCount';
        break;
      case AscDFH.xqd:
        f = 'Document_AddFootnote';
        break;
      case AscDFH.jrd:
        f = 'Document_SetFootnotePr';
        break;
      case AscDFH.crd:
        f = 'Document_RemoveAllFootnotes';
        break;
      case AscDFH.GKd:
        f = 'Document_InsertDocumentsByUrls';
        break;
      case AscDFH.FWd:
        f = 'Document_AddBlockLevelContentControl';
        break;
      case AscDFH.NWd:
        f = 'Document_AddInlineLevelContentControl';
        break;
      case AscDFH.zXd:
        f = 'Document_RemoveContentControl';
        break;
      case AscDFH.AXd:
        f = 'Document_RemoveContentControlWrapper';
        break;
      case AscDFH.DKd:
        f = 'Document_ChangeContentControlProperties';
        break;
      case AscDFH.Npc:
        f = 'DocumentMacros_Data';
        break;
      case AscDFH.tqd:
        f = 'Document_AddBookmark';
        break;
      case AscDFH.Gqd:
        f = 'Document_AddTableOfContents';
        break;
      case AscDFH.Lqd:
        f = 'Document_ChangeOutlineLevel';
        break;
      case AscDFH.Opc:
        f = 'Document_AddElementToOutline';
        break;
      case AscDFH.grd:
        f = 'Document_ResizeTable';
        break;
      case AscDFH.yXd:
        f = 'Document_RemoveComplexField';
        break;
      case AscDFH.bKc:
        f = 'Document_SetComplexFieldPr';
        break;
      case AscDFH.QKd:
        f = 'Document_UpdateTableOfContents';
        break;
      case AscDFH.HXd:
        f = 'Document_SectionStartPage';
        break;
      case AscDFH.EKd:
        f = 'Document_DistributeTableCells';
        break;
      case AscDFH.drd:
        f = 'Document_RemoveBookmark';
        break;
      case AscDFH.Nqd:
        f = 'Document_ContinueNumbering';
        break;
      case AscDFH.Qpc:
        f =
          'Document_RestartNumbering';
        break;
      case AscDFH.Kqd:
        f = 'Document_AutomaticListAsType';
        break;
      case AscDFH.eXd:
        f = 'Document_CreateNum';
        break;
      case AscDFH.$Wd:
        f = 'Document_ChangeNumLvl';
        break;
      case AscDFH.Jqd:
        f = 'Document_AutoCorrectSmartQuotes';
        break;
      case AscDFH.jaf:
        f = 'Document_AutoCorrectHyphensWithDash';
        break;
      case AscDFH.LXd:
        f = 'Document_SetGlobalSdtHighlightColor';
        break;
      case AscDFH.MXd:
        f = 'Document_SetGlobalSdtShowHighlight';
        break;
      case AscDFH.zrd:
        f = 'Document_UpdateFields';
        break;
      case AscDFH.sqd:
        f = 'Document_AddBlankPage';
        break;
      case AscDFH.Fqd:
        f = 'Document_AddTableFormula';
        break;
      case AscDFH.Mqd:
        f = 'Document_ChangeTableFormula';
        break;
      case AscDFH.dYd:
        f = 'Document_SetParagraphOutlineLvl';
    }
    return f;
  };
  f.AscDFH.e$f = function (e) {
    return e >> 16 & 65535;
  };
  f.AscDFH.iKc = 0;
  f.AscDFH.xLd = 1;
  f.AscDFH.yLd = 2;
  f.AscDFH.J1b = 3;
  f.AscDFH.zLd = 4;
  f.AscDFH.Wzc = 0;
  f.AscDFH.Isd = 65536;
  f.AscDFH.tYa = 131072;
  f.AscDFH.Lx = 196608;
  f.AscDFH.rE = 262144;
  f.AscDFH.YQ = 327680;
  f.AscDFH.wng = 393216;
  f.AscDFH.yng = 458752;
  f.AscDFH.xng = 524288;
  f.AscDFH.qE = 589824;
  f.AscDFH.Oia = 655360;
  f.AscDFH.D0 = 720896;
  f.AscDFH.AVb = 786432;
  f.AscDFH.zng = 851968;
  f.AscDFH.Bng = 917504;
  f.AscDFH.zsd = 983040;
  f.AscDFH.qYa = 1048576;
  f.AscDFH.$ib = 1114112;
  f.AscDFH.vsd = 1179648;
  f.AscDFH.dcf = 1245184;
  f.AscDFH.Ang = 1310720;
  f.AscDFH.uYa = 1376256;
  f.AscDFH.pE = 1507328;
  f.AscDFH.ZQ = 1572864;
  f.AscDFH.vng = 1638400;
  f.AscDFH.Zp = 1703936;
  f.AscDFH.ALd = 1769472;
  f.AscDFH.Bu = 1835008;
  f.AscDFH.Bsd = 1900544;
  f.AscDFH.RC = 1966080;
  f.AscDFH.Jsd = 2031616;
  f.AscDFH.Ksd = 2097152;
  f.AscDFH.Lsd = 2162688;
  f.AscDFH.Msd = 2228224;
  f.AscDFH.Psd = 2293760;
  f.AscDFH.Qsd =
    2359296;
  f.AscDFH.Rsd = 2424832;
  f.AscDFH.Usd = 2490368;
  f.AscDFH.Ssd = 2555904;
  f.AscDFH.Tsd = 2621440;
  f.AscDFH.Vsd = 2686976;
  f.AscDFH.Wsd = 2752512;
  f.AscDFH.Eng = 2818048;
  f.AscDFH.Dng = 2883584;
  f.AscDFH.Hng = 2949120;
  f.AscDFH.Cng = 3014656;
  f.AscDFH.Gng = 3080192;
  f.AscDFH.Ing = 3145728;
  f.AscDFH.Xsd = 3211264;
  f.AscDFH.Ysd = 3276800;
  f.AscDFH.Osd = 3342336;
  f.AscDFH.Fng = 3407872;
  f.AscDFH.Nsd = 3473408;
  f.AscDFH.fcf = 3538944;
  f.AscDFH.Ibb = 3604480;
  f.AscDFH.aMa = 3670016;
  f.AscDFH.ysd = 3735552;
  f.AscDFH.Nia = 3801088;
  f.AscDFH.usd = 3866624;
  f.AscDFH.dMa =
    3932160;
  f.AscDFH.Asd = 3997696;
  f.AscDFH.BLd = 4063232;
  f.AscDFH.HVb = 4128768;
  f.AscDFH.Tub = 4194304;
  f.AscDFH.Csd = 4259840;
  f.AscDFH.gcf = 4325376;
  f.AscDFH.y7 = 65536E3;
  f.AscDFH.Mzc = 65601536;
  f.AscDFH.Nzc = 65667072;
  f.AscDFH.Vub = 65732608;
  f.AscDFH.Dsd = 65798144;
  f.AscDFH.Esd = 65863680;
  f.AscDFH.Fsd = 65929216;
  f.AscDFH.Uzc = 65994752;
  f.AscDFH.Hsd = 66060288;
  f.AscDFH.rYa = 66125824;
  f.AscDFH.Gsd = 66191360;
  f.AscDFH.Szc = 66256896;
  f.AscDFH.Qzc = 66322432;
  f.AscDFH.Rzc = 66387968;
  f.AscDFH.Lbb = 66453504;
  f.AscDFH.KVb = 66519040;
  f.AscDFH.ecf = 66584576;
  f.AscDFH.Vzc = 66650112;
  f.AscDFH.BVb = 66715648;
  f.AscDFH.Tzc = 66781184;
  f.AscDFH.jua = 66846720;
  f.AscDFH.Gbb = 66912256;
  f.AscDFH.bCa = 66977792;
  f.AscDFH.Obb = 67043328;
  f.AscDFH.vYa = 67108864;
  f.AscDFH.Qbb = 67174400;
  f.AscDFH.QVb = 67239936;
  f.AscDFH.Pzc = 67305472;
  f.AscDFH.VY = 67371008;
  f.AscDFH.Zr = 67436544;
  f.AscDFH.iua = 67502080;
  f.AscDFH.Wna = 67567616;
  f.AscDFH.Oub = 67633152;
  f.AscDFH.xYa = 67698688;
  f.AscDFH.wW = 67764224;
  f.AscDFH.Pub = 67829760;
  f.AscDFH.lea = 67895296;
  f.AscDFH.ung = 67960832;
  f.AscDFH.IVb = 68026368;
  f.AscDFH.zYa = 68091904;
  f.AscDFH.$La = 68157440;
  f.AscDFH.HH = 68222976;
  f.AscDFH.A0 = 68288512;
  f.AscDFH.Wub = 68354048;
  f.AscDFH.qw = 68419584;
  f.AscDFH.Tna = 68485120;
  f.AscDFH.aC = 68550656;
  f.AscDFH.Mia = 68616192;
  f.AscDFH.av = 68681728;
  f.AscDFH.Xna = 68747264;
  f.AscDFH.nE = 68812800;
  f.AscDFH.B0 = 68878336;
  f.AscDFH.C0 = 68943872;
  f.AscDFH.wVb = 69009408;
  f.AscDFH.XQ = 69074944;
  f.AscDFH.JS = 69140480;
  f.AscDFH.cCa = 69206016;
  f.AscDFH.hua = 69271552;
  f.AscDFH.EVb = 69337088;
  f.AscDFH.Qub = 69402624;
  f.AscDFH.Rub = 69468160;
  f.AscDFH.JVb = 69533696;
  f.AscDFH.nea = 69599232;
  f.AscDFH.SVb =
    69664768;
  f.AscDFH.OVb = 69730304;
  f.AscDFH.MVb = 69795840;
  f.AscDFH.NVb = 69861376;
  f.AscDFH.AYa = 69926912;
  f.AscDFH.GVb = 69992448;
  f.AscDFH.FVb = 70057984;
  f.AscDFH.PVb = 70123520;
  f.AscDFH.TVb = 70189056;
  f.AscDFH.vW = 70254592;
  f.AscDFH.sYa = 70320128;
  f.AscDFH.wYa = 70385664;
  f.AscDFH.Yna = 70451200;
  f.AscDFH.P3 = 70516736;
  f.AscDFH.pP = 70582272;
  f.AscDFH.z7 = 70647808;
  f.AscDFH.eCa = 70713344;
  f.AscDFH.R3 = 70778880;
  f.AscDFH.CVb = 70844416;
  f.AscDFH.LVb = 70909952;
  f.AscDFH.yYa = 70975488;
  f.AscDFH.Mub = 71041024;
  f.AscDFH.eMa = 71106560;
  f.AscDFH.zVb =
    71172096;
  f.AscDFH.Pbb = 71237632;
  f.AscDFH.T$ = 71303168;
  f.AscDFH.dCa = 71368704;
  f.AscDFH.Lzc = 71434240;
  f.AscDFH.Kzc = 71499776;
  f.AscDFH.DVb = 71565312;
  f.AscDFH.Jbb = 71630848;
  f.AscDFH.Nub = 71696384;
  f.AscDFH.Kbb = 71761920;
  f.AscDFH.RVb = 71827456;
  f.AscDFH.Mbb = 71892992;
  f.AscDFH.yVb = 71958528;
  f.AscDFH.xVb = 72024064;
  f.AscDFH.Uub = 72089600;
  f.AscDFH.Vna = 72155136;
  f.AscDFH.bMa = 72220672;
  f.AscDFH.kea = 72286208;
  f.AscDFH.Lr = 72351744;
  f.AscDFH.Hbb = 72417280;
  f.AscDFH.St = 72482816;
  f.AscDFH.hy = 72548352;
  f.AscDFH.Una = 72613888;
  f.AscDFH.cMa =
    72679424;
  f.AscDFH.rQa = 72744960;
  f.AscDFH.$B = 72810496;
  f.AscDFH.Gv = 72876032;
  f.AscDFH.ajb = 72941568;
  f.AscDFH.HA = 73007104;
  f.AscDFH.qP = 73072640;
  f.AscDFH.dla = 73138176;
  f.AscDFH.KS = 73203712;
  f.AscDFH.mea = 73269248;
  f.AscDFH.Zna = 73334784;
  f.AscDFH.K1b = 73400320;
  f.AscDFH.jKc = 73465856;
  f.AscDFH.Pia = 73531392;
  f.AscDFH.gy = 73596928;
  f.AscDFH.ccf = 73662464;
  f.AscDFH.KN = 73728E3;
  f.AscDFH.xsd = 73793536;
  f.AscDFH.oE = 73859072;
  f.AscDFH.gya = 73924608;
  f.AscDFH.iba = 73990144;
  f.AscDFH.LV = 74055680;
  f.AscDFH.bEb = 74121216;
  f.AscDFH.CQc = 74186752;
  f.AscDFH.Nbb = 74252288;
  f.AscDFH.iGa = 74317824;
  f.AscDFH.fya = 74383360;
  f.AscDFH.wsd = 74448896;
  f.AscDFH.Ozc = 131072E3;
  f.AscDFH.qsd = f.AscDFH.Wzc | 0;
  f.AscDFH.kVb = f.AscDFH.Isd | 1;
  f.AscDFH.gbb = f.AscDFH.Isd | 65535;
  f.AscDFH.aya = f.AscDFH.tYa | 1;
  f.AscDFH.bya = f.AscDFH.tYa | 2;
  f.AscDFH.stb = f.AscDFH.tYa | 3;
  f.AscDFH.ttb = f.AscDFH.tYa | 4;
  f.AscDFH.RRb = f.AscDFH.tYa | 5;
  f.AscDFH.utb = f.AscDFH.tYa | 6;
  f.AscDFH.SRb = f.AscDFH.tYa | 7;
  f.AscDFH.cya = f.AscDFH.Lx | 1;
  f.AscDFH.KEa = f.AscDFH.Lx | 2;
  f.AscDFH.OLa = f.AscDFH.Lx | 3;
  f.AscDFH.FXa = f.AscDFH.Lx | 4;
  f.AscDFH.JXa = f.AscDFH.Lx | 5;
  f.AscDFH.LXa = f.AscDFH.Lx | 6;
  f.AscDFH.KXa = f.AscDFH.Lx | 7;
  f.AscDFH.GXa = f.AscDFH.Lx | 8;
  f.AscDFH.MXa = f.AscDFH.Lx | 9;
  f.AscDFH.NXa = f.AscDFH.Lx | 10;
  f.AscDFH.OXa = f.AscDFH.Lx | 11;
  f.AscDFH.VXa = f.AscDFH.Lx | 12;
  f.AscDFH.WXa = f.AscDFH.Lx | 13;
  f.AscDFH.TXa = f.AscDFH.Lx | 14;
  f.AscDFH.RXa = f.AscDFH.Lx | 15;
  f.AscDFH.SXa = f.AscDFH.Lx | 16;
  f.AscDFH.UXa = f.AscDFH.Lx | 17;
  f.AscDFH.$Ba = f.AscDFH.Lx | 18;
  f.AscDFH.YBa = f.AscDFH.Lx | 19;
  f.AscDFH.ZBa = f.AscDFH.Lx | 20;
  f.AscDFH.Rna = f.AscDFH.Lx | 21;
  f.AscDFH.YXa = f.AscDFH.Lx | 22;
  f.AscDFH.XXa =
    f.AscDFH.Lx | 23;
  f.AscDFH.WBa = f.AscDFH.Lx | 24;
  f.AscDFH.gua = f.AscDFH.Lx | 25;
  f.AscDFH.Gqa = f.AscDFH.Lx | 26;
  f.AscDFH.Hqa = f.AscDFH.Lx | 27;
  f.AscDFH.Iqa = f.AscDFH.Lx | 28;
  f.AscDFH.Jqa = f.AscDFH.Lx | 29;
  f.AscDFH.$u = f.AscDFH.Lx | 30;
  f.AscDFH.PXa = f.AscDFH.Lx | 31;
  f.AscDFH.QXa = f.AscDFH.Lx | 32;
  f.AscDFH.IXa = f.AscDFH.Lx | 33;
  f.AscDFH.Gtb = f.AscDFH.Lx | 34;
  f.AscDFH.XBa = f.AscDFH.Lx | 35;
  f.AscDFH.PLa = f.AscDFH.Lx | 36;
  f.AscDFH.Ftb = f.AscDFH.Lx | 37;
  f.AscDFH.HXa = f.AscDFH.Lx | 38;
  f.AscDFH.kbb = f.AscDFH.rE | 1;
  f.AscDFH.sbb = f.AscDFH.rE | 2;
  f.AscDFH.ybb =
    f.AscDFH.rE | 3;
  f.AscDFH.zbb = f.AscDFH.rE | 4;
  f.AscDFH.pbb = f.AscDFH.rE | 5;
  f.AscDFH.mbb = f.AscDFH.rE | 6;
  f.AscDFH.Bbb = f.AscDFH.rE | 7;
  f.AscDFH.rbb = f.AscDFH.rE | 8;
  f.AscDFH.vbb = f.AscDFH.rE | 9;
  f.AscDFH.xbb = f.AscDFH.rE | 10;
  f.AscDFH.nbb = f.AscDFH.rE | 11;
  f.AscDFH.lbb = f.AscDFH.rE | 12;
  f.AscDFH.wbb = f.AscDFH.rE | 13;
  f.AscDFH.ubb = f.AscDFH.rE | 14;
  f.AscDFH.bA = f.AscDFH.rE | 15;
  f.AscDFH.Lia = f.AscDFH.rE | 16;
  f.AscDFH.VLa = f.AscDFH.rE | 17;
  f.AscDFH.YLa = f.AscDFH.rE | 18;
  f.AscDFH.WLa = f.AscDFH.rE | 19;
  f.AscDFH.XLa = f.AscDFH.rE | 20;
  f.AscDFH.ZLa = f.AscDFH.rE |
    21;
  f.AscDFH.Sna = f.AscDFH.rE | 22;
  f.AscDFH.SLa = f.AscDFH.rE | 23;
  f.AscDFH.TLa = f.AscDFH.rE | 24;
  f.AscDFH.ULa = f.AscDFH.rE | 25;
  f.AscDFH.Abb = f.AscDFH.rE | 26;
  f.AscDFH.qbb = f.AscDFH.rE | 27;
  f.AscDFH.tbb = f.AscDFH.rE | 28;
  f.AscDFH.obb = f.AscDFH.rE | 29;
  f.AscDFH.WRb = f.AscDFH.YQ | 1;
  f.AscDFH.Atb = f.AscDFH.YQ | 2;
  f.AscDFH.wtb = f.AscDFH.YQ | 3;
  f.AscDFH.URb = f.AscDFH.YQ | 4;
  f.AscDFH.YRb = f.AscDFH.YQ | 5;
  f.AscDFH.ZRb = f.AscDFH.YQ | 6;
  f.AscDFH.VRb = f.AscDFH.YQ | 7;
  f.AscDFH.xtb = f.AscDFH.YQ | 8;
  f.AscDFH.eSb = f.AscDFH.YQ | 9;
  f.AscDFH.COa = f.AscDFH.YQ | 10;
  f.AscDFH.fSb =
    f.AscDFH.YQ | 11;
  f.AscDFH.aSb = f.AscDFH.YQ | 12;
  f.AscDFH.dSb = f.AscDFH.YQ | 13;
  f.AscDFH.$Rb = f.AscDFH.YQ | 14;
  f.AscDFH.cSb = f.AscDFH.YQ | 15;
  f.AscDFH.bSb = f.AscDFH.YQ | 16;
  f.AscDFH.XRb = f.AscDFH.YQ | 17;
  f.AscDFH.ytb = f.AscDFH.YQ | 18;
  f.AscDFH.ztb = f.AscDFH.YQ | 19;
  f.AscDFH.pYa = f.AscDFH.qE | 1;
  f.AscDFH.kYa = f.AscDFH.qE | 2;
  f.AscDFH.dYa = f.AscDFH.qE | 3;
  f.AscDFH.lYa = f.AscDFH.qE | 4;
  f.AscDFH.hYa = f.AscDFH.qE | 5;
  f.AscDFH.jYa = f.AscDFH.qE | 6;
  f.AscDFH.iYa = f.AscDFH.qE | 7;
  f.AscDFH.eYa = f.AscDFH.qE | 8;
  f.AscDFH.fYa = f.AscDFH.qE | 9;
  f.AscDFH.gYa = f.AscDFH.qE |
    10;
  f.AscDFH.jbb = f.AscDFH.qE | 11;
  f.AscDFH.zub = f.AscDFH.qE | 12;
  f.AscDFH.eya = f.AscDFH.qE | 13;
  f.AscDFH.MEa = f.AscDFH.qE | 14;
  f.AscDFH.Dub = f.AscDFH.qE | 15;
  f.AscDFH.Eub = f.AscDFH.qE | 16;
  f.AscDFH.oYa = f.AscDFH.qE | 17;
  f.AscDFH.nYa = f.AscDFH.qE | 18;
  f.AscDFH.Fub = f.AscDFH.qE | 19;
  f.AscDFH.xub = f.AscDFH.qE | 20;
  f.AscDFH.Aub = f.AscDFH.qE | 21;
  f.AscDFH.Bub = f.AscDFH.qE | 22;
  f.AscDFH.yub = f.AscDFH.qE | 23;
  f.AscDFH.JN = f.AscDFH.qE | 24;
  f.AscDFH.mYa = f.AscDFH.qE | 25;
  f.AscDFH.ibb = f.AscDFH.qE | 26;
  f.AscDFH.hbb = f.AscDFH.qE | 27;
  f.AscDFH.mVb = f.AscDFH.qE |
    28;
  f.AscDFH.Cub = f.AscDFH.qE | 29;
  f.AscDFH.$Xa = f.AscDFH.Oia | 1;
  f.AscDFH.ZXa = f.AscDFH.Oia | 2;
  f.AscDFH.aYa = f.AscDFH.Oia | 3;
  f.AscDFH.bYa = f.AscDFH.Oia | 4;
  f.AscDFH.dya = f.AscDFH.Oia | 5;
  f.AscDFH.LEa = f.AscDFH.Oia | 6;
  f.AscDFH.cYa = f.AscDFH.Oia | 7;
  f.AscDFH.jea = f.AscDFH.Oia | 8;
  f.AscDFH.wub = f.AscDFH.Oia | 9;
  f.AscDFH.lVb = f.AscDFH.Oia | 10;
  f.AscDFH.Yab = f.AscDFH.D0 | 1;
  f.AscDFH.$ab = f.AscDFH.D0 | 2;
  f.AscDFH.bbb = f.AscDFH.D0 | 3;
  f.AscDFH.ebb = f.AscDFH.D0 | 4;
  f.AscDFH.Vab = f.AscDFH.D0 | 5;
  f.AscDFH.Wab = f.AscDFH.D0 | 6;
  f.AscDFH.Xab = f.AscDFH.D0 | 7;
  f.AscDFH.Uab = f.AscDFH.D0 | 8;
  f.AscDFH.dbb = f.AscDFH.D0 | 9;
  f.AscDFH.fbb = f.AscDFH.D0 | 10;
  f.AscDFH.RU = f.AscDFH.D0 | 11;
  f.AscDFH.cbb = f.AscDFH.D0 | 12;
  f.AscDFH.abb = f.AscDFH.D0 | 13;
  f.AscDFH.Zab = f.AscDFH.D0 | 14;
  f.AscDFH.vub = f.AscDFH.D0 | 15;
  f.AscDFH.Zxa = f.AscDFH.AVb | 1;
  f.AscDFH.$xa = f.AscDFH.AVb | 2;
  f.AscDFH.BLa = f.AscDFH.qYa | 1;
  f.AscDFH.rab = f.AscDFH.qYa | 2;
  f.AscDFH.qab = f.AscDFH.qYa | 3;
  f.AscDFH.oRb = f.AscDFH.qYa | 4;
  f.AscDFH.nRb = f.AscDFH.qYa | 5;
  f.AscDFH.BTb = f.AscDFH.HVb | 1;
  f.AscDFH.ATb = f.AscDFH.HVb | 2;
  f.AscDFH.Cwc = f.AscDFH.Tub | 1;
  f.AscDFH.Bwc = f.AscDFH.Tub | 2;
  f.AscDFH.Dwc = f.AscDFH.Tub | 3;
  f.AscDFH.Zib = f.AscDFH.$ib | 1;
  f.AscDFH.H1b = f.AscDFH.$ib | 2;
  f.AscDFH.NZd = f.AscDFH.$ib | 3;
  f.AscDFH.QAb = f.AscDFH.vsd | 1;
  f.AscDFH.RAb = f.AscDFH.vsd | 2;
  f.AscDFH.vSb = f.AscDFH.uYa | 1;
  f.AscDFH.uSb = f.AscDFH.uYa | 2;
  f.AscDFH.hGa = f.AscDFH.uYa | 3;
  f.AscDFH.DOa = f.AscDFH.uYa | 4;
  f.AscDFH.tSb = f.AscDFH.uYa | 5;
  f.AscDFH.pub = f.AscDFH.pE | 1;
  f.AscDFH.Xtb = f.AscDFH.pE | 2;
  f.AscDFH.kub = f.AscDFH.pE | 3;
  f.AscDFH.lub = f.AscDFH.pE | 4;
  f.AscDFH.fub = f.AscDFH.pE | 5;
  f.AscDFH.bub = f.AscDFH.pE | 6;
  f.AscDFH.cub =
    f.AscDFH.pE | 7;
  f.AscDFH.dub = f.AscDFH.pE | 8;
  f.AscDFH.eub = f.AscDFH.pE | 9;
  f.AscDFH.gub = f.AscDFH.pE | 10;
  f.AscDFH.hub = f.AscDFH.pE | 11;
  f.AscDFH.iub = f.AscDFH.pE | 12;
  f.AscDFH.jub = f.AscDFH.pE | 13;
  f.AscDFH.mub = f.AscDFH.pE | 14;
  f.AscDFH.nub = f.AscDFH.pE | 15;
  f.AscDFH.$tb = f.AscDFH.pE | 16;
  f.AscDFH.aub = f.AscDFH.pE | 17;
  f.AscDFH.oub = f.AscDFH.pE | 18;
  f.AscDFH.Vtb = f.AscDFH.pE | 101;
  f.AscDFH.Stb = f.AscDFH.pE | 102;
  f.AscDFH.Wtb = f.AscDFH.pE | 103;
  f.AscDFH.qub = f.AscDFH.pE | 104;
  f.AscDFH.Ytb = f.AscDFH.pE | 105;
  f.AscDFH.rub = f.AscDFH.pE | 106;
  f.AscDFH.Ttb =
    f.AscDFH.pE | 107;
  f.AscDFH.Ztb = f.AscDFH.pE | 108;
  f.AscDFH.tub = f.AscDFH.pE | 109;
  f.AscDFH.Utb = f.AscDFH.pE | 110;
  f.AscDFH.osd = f.AscDFH.pE | 111;
  f.AscDFH.QLa = f.AscDFH.ZQ | 1;
  f.AscDFH.RLa = f.AscDFH.ZQ | 2;
  f.AscDFH.gVb = f.AscDFH.ZQ | 3;
  f.AscDFH.aVb = f.AscDFH.ZQ | 4;
  f.AscDFH.bVb = f.AscDFH.ZQ | 5;
  f.AscDFH.PUb = f.AscDFH.ZQ | 6;
  f.AscDFH.ZUb = f.AscDFH.ZQ | 7;
  f.AscDFH.fVb = f.AscDFH.ZQ | 8;
  f.AscDFH.eVb = f.AscDFH.ZQ | 9;
  f.AscDFH.VUb = f.AscDFH.ZQ | 10;
  f.AscDFH.$Ub = f.AscDFH.ZQ | 11;
  f.AscDFH.UUb = f.AscDFH.ZQ | 12;
  f.AscDFH.QUb = f.AscDFH.ZQ | 13;
  f.AscDFH.WUb = f.AscDFH.ZQ |
    14;
  f.AscDFH.TUb = f.AscDFH.ZQ | 15;
  f.AscDFH.SUb = f.AscDFH.ZQ | 16;
  f.AscDFH.RUb = f.AscDFH.ZQ | 17;
  f.AscDFH.YUb = f.AscDFH.ZQ | 18;
  f.AscDFH.hVb = f.AscDFH.ZQ | 19;
  f.AscDFH.dVb = f.AscDFH.ZQ | 20;
  f.AscDFH.cVb = f.AscDFH.ZQ | 21;
  f.AscDFH.XUb = f.AscDFH.ZQ | 22;
  f.AscDFH.yXa = f.AscDFH.Zp | 101;
  f.AscDFH.zXa = f.AscDFH.Zp | 102;
  f.AscDFH.eTb = f.AscDFH.Zp | 103;
  f.AscDFH.vTb = f.AscDFH.Zp | 201;
  f.AscDFH.wXa = f.AscDFH.Zp | 301;
  f.AscDFH.xXa = f.AscDFH.Zp | 302;
  f.AscDFH.ISb = f.AscDFH.Zp | 303;
  f.AscDFH.RSb = f.AscDFH.Zp | 304;
  f.AscDFH.GSb = f.AscDFH.Zp | 305;
  f.AscDFH.WSb =
    f.AscDFH.Zp | 306;
  f.AscDFH.VSb = f.AscDFH.Zp | 307;
  f.AscDFH.SSb = f.AscDFH.Zp | 308;
  f.AscDFH.HSb = f.AscDFH.Zp | 309;
  f.AscDFH.KSb = f.AscDFH.Zp | 310;
  f.AscDFH.FSb = f.AscDFH.Zp | 311;
  f.AscDFH.LSb = f.AscDFH.Zp | 312;
  f.AscDFH.OSb = f.AscDFH.Zp | 313;
  f.AscDFH.MSb = f.AscDFH.Zp | 314;
  f.AscDFH.NSb = f.AscDFH.Zp | 315;
  f.AscDFH.PSb = f.AscDFH.Zp | 316;
  f.AscDFH.JSb = f.AscDFH.Zp | 317;
  f.AscDFH.QSb = f.AscDFH.Zp | 318;
  f.AscDFH.TSb = f.AscDFH.Zp | 319;
  f.AscDFH.USb = f.AscDFH.Zp | 320;
  f.AscDFH.Etb = f.AscDFH.Zp | 401;
  f.AscDFH.vab = f.AscDFH.Zp | 402;
  f.AscDFH.lTb = f.AscDFH.Zp |
    501;
  f.AscDFH.wTb = f.AscDFH.Zp | 601;
  f.AscDFH.sTb = f.AscDFH.Zp | 701;
  f.AscDFH.uTb = f.AscDFH.Zp | 702;
  f.AscDFH.tTb = f.AscDFH.Zp | 703;
  f.AscDFH.gTb = f.AscDFH.Zp | 801;
  f.AscDFH.hTb = f.AscDFH.Zp | 802;
  f.AscDFH.iTb = f.AscDFH.Zp | 803;
  f.AscDFH.kTb = f.AscDFH.Zp | 804;
  f.AscDFH.jTb = f.AscDFH.Zp | 805;
  f.AscDFH.mTb = f.AscDFH.Zp | 901;
  f.AscDFH.nTb = f.AscDFH.Zp | 1001;
  f.AscDFH.aTb = f.AscDFH.Zp | 1101;
  f.AscDFH.XSb = f.AscDFH.Zp | 1102;
  f.AscDFH.ZSb = f.AscDFH.Zp | 1103;
  f.AscDFH.$Sb = f.AscDFH.Zp | 1104;
  f.AscDFH.YSb = f.AscDFH.Zp | 1105;
  f.AscDFH.dTb = f.AscDFH.Zp | 1106;
  f.AscDFH.bTb = f.AscDFH.Zp | 1107;
  f.AscDFH.cTb = f.AscDFH.Zp | 1108;
  f.AscDFH.ESb = f.AscDFH.Zp | 1201;
  f.AscDFH.BXa = f.AscDFH.Zp | 1301;
  f.AscDFH.DXa = f.AscDFH.Zp | 1302;
  f.AscDFH.AXa = f.AscDFH.Zp | 1303;
  f.AscDFH.CXa = f.AscDFH.Zp | 1304;
  f.AscDFH.oTb = f.AscDFH.Zp | 1305;
  f.AscDFH.pTb = f.AscDFH.Zp | 1306;
  f.AscDFH.qTb = f.AscDFH.Zp | 1307;
  f.AscDFH.rTb = f.AscDFH.Zp | 1308;
  f.AscDFH.fTb = f.AscDFH.Zp | 1401;
  f.AscDFH.Vba = f.AscDFH.Bu | 1;
  f.AscDFH.qka = f.AscDFH.Bu | 2;
  f.AscDFH.wab = f.AscDFH.Bu | 3;
  f.AscDFH.Dab = f.AscDFH.Bu | 4;
  f.AscDFH.Kab = f.AscDFH.Bu | 5;
  f.AscDFH.Nab =
    f.AscDFH.Bu | 6;
  f.AscDFH.kbf = f.AscDFH.Bu | 7;
  f.AscDFH.Bab = f.AscDFH.Bu | 8;
  f.AscDFH.yab = f.AscDFH.Bu | 9;
  f.AscDFH.Pab = f.AscDFH.Bu | 10;
  f.AscDFH.Cab = f.AscDFH.Bu | 11;
  f.AscDFH.Gab = f.AscDFH.Bu | 12;
  f.AscDFH.Jab = f.AscDFH.Bu | 13;
  f.AscDFH.Aab = f.AscDFH.Bu | 14;
  f.AscDFH.xab = f.AscDFH.Bu | 15;
  f.AscDFH.Iab = f.AscDFH.Bu | 16;
  f.AscDFH.Fab = f.AscDFH.Bu | 17;
  f.AscDFH.mbf = f.AscDFH.Bu | 18;
  f.AscDFH.Kia = f.AscDFH.Bu | 19;
  f.AscDFH.eua = f.AscDFH.Bu | 20;
  f.AscDFH.JLa = f.AscDFH.Bu | 21;
  f.AscDFH.MLa = f.AscDFH.Bu | 22;
  f.AscDFH.KLa = f.AscDFH.Bu | 23;
  f.AscDFH.LLa = f.AscDFH.Bu |
    24;
  f.AscDFH.NLa = f.AscDFH.Bu | 25;
  f.AscDFH.CLa = f.AscDFH.Bu | 26;
  f.AscDFH.DLa = f.AscDFH.Bu | 27;
  f.AscDFH.ELa = f.AscDFH.Bu | 28;
  f.AscDFH.Uw = f.AscDFH.Bu | 29;
  f.AscDFH.Oab = f.AscDFH.Bu | 30;
  f.AscDFH.Hab = f.AscDFH.Bu | 31;
  f.AscDFH.Eab = f.AscDFH.Bu | 32;
  f.AscDFH.fua = f.AscDFH.Bu | 33;
  f.AscDFH.EXa = f.AscDFH.Bu | 34;
  f.AscDFH.HLa = f.AscDFH.Bu | 35;
  f.AscDFH.Lab = f.AscDFH.Bu | 36;
  f.AscDFH.Mab = f.AscDFH.Bu | 37;
  f.AscDFH.ILa = f.AscDFH.Bu | 38;
  f.AscDFH.zab = f.AscDFH.Bu | 39;
  f.AscDFH.Rvc = f.AscDFH.Bu | 40;
  f.AscDFH.Qvc = f.AscDFH.Bu | 41;
  f.AscDFH.FLa = f.AscDFH.Bu |
    42;
  f.AscDFH.GLa = f.AscDFH.Bu | 43;
  f.AscDFH.tUb = f.AscDFH.RC | 1;
  f.AscDFH.uUb = f.AscDFH.RC | 2;
  f.AscDFH.pUb = f.AscDFH.RC | 3;
  f.AscDFH.wUb = f.AscDFH.RC | 4;
  f.AscDFH.ZTb = f.AscDFH.RC | 5;
  f.AscDFH.bUb = f.AscDFH.RC | 6;
  f.AscDFH.aUb = f.AscDFH.RC | 7;
  f.AscDFH.XTb = f.AscDFH.RC | 8;
  f.AscDFH.YTb = f.AscDFH.RC | 9;
  f.AscDFH.$Tb = f.AscDFH.RC | 10;
  f.AscDFH.cUb = f.AscDFH.RC | 11;
  f.AscDFH.Sab = f.AscDFH.RC | 12;
  f.AscDFH.oUb = f.AscDFH.RC | 13;
  f.AscDFH.nUb = f.AscDFH.RC | 14;
  f.AscDFH.Ntb = f.AscDFH.RC | 15;
  f.AscDFH.iUb = f.AscDFH.RC | 16;
  f.AscDFH.hUb = f.AscDFH.RC | 17;
  f.AscDFH.vUb =
    f.AscDFH.RC | 18;
  f.AscDFH.rUb = f.AscDFH.RC | 19;
  f.AscDFH.qUb = f.AscDFH.RC | 20;
  f.AscDFH.sUb = f.AscDFH.RC | 21;
  f.AscDFH.dUb = f.AscDFH.RC | 22;
  f.AscDFH.gUb = f.AscDFH.RC | 23;
  f.AscDFH.eUb = f.AscDFH.RC | 24;
  f.AscDFH.fUb = f.AscDFH.RC | 25;
  f.AscDFH.Qab = f.AscDFH.RC | 26;
  f.AscDFH.Rab = f.AscDFH.RC | 27;
  f.AscDFH.mUb = f.AscDFH.RC | 28;
  f.AscDFH.lUb = f.AscDFH.RC | 29;
  f.AscDFH.kUb = f.AscDFH.RC | 30;
  f.AscDFH.jUb = f.AscDFH.RC | 31;
  f.AscDFH.cKc = f.AscDFH.fcf | 1;
  f.AscDFH.uXa = f.AscDFH.Ibb | 1;
  f.AscDFH.vXa = f.AscDFH.Ibb | 2;
  f.AscDFH.iSb = f.AscDFH.Ibb | 3;
  f.AscDFH.hSb =
    f.AscDFH.Ibb | 4;
  f.AscDFH.jSb = f.AscDFH.aMa | 1;
  f.AscDFH.qSb = f.AscDFH.aMa | 2;
  f.AscDFH.lSb = f.AscDFH.aMa | 3;
  f.AscDFH.kSb = f.AscDFH.aMa | 4;
  f.AscDFH.pSb = f.AscDFH.aMa | 5;
  f.AscDFH.oSb = f.AscDFH.aMa | 6;
  f.AscDFH.nSb = f.AscDFH.aMa | 7;
  f.AscDFH.mSb = f.AscDFH.aMa | 8;
  f.AscDFH.PTb = f.AscDFH.dMa | 1;
  f.AscDFH.TTb = f.AscDFH.dMa | 2;
  f.AscDFH.WTb = f.AscDFH.dMa | 3;
  f.AscDFH.UTb = f.AscDFH.dMa | 4;
  f.AscDFH.VTb = f.AscDFH.dMa | 5;
  f.AscDFH.STb = f.AscDFH.dMa | 6;
  f.AscDFH.QTb = f.AscDFH.dMa | 7;
  f.AscDFH.RTb = f.AscDFH.dMa | 8;
  f.AscDFH.tab = f.AscDFH.y7 | 101;
  f.AscDFH.uRb =
    f.AscDFH.y7 | 102;
  f.AscDFH.WKd = f.AscDFH.y7 | 103;
  f.AscDFH.XKd = f.AscDFH.y7 | 104;
  f.AscDFH.Wrd = f.AscDFH.y7 | 105;
  f.AscDFH.rqc = f.AscDFH.y7 | 106;
  f.AscDFH.qqc = f.AscDFH.y7 | 107;
  f.AscDFH.tRb = f.AscDFH.y7 | 108;
  f.AscDFH.pqc = f.AscDFH.y7 | 109;
  f.AscDFH.Xrd = f.AscDFH.y7 | 201;
  f.AscDFH.IN = f.AscDFH.y7 | 301;
  f.AscDFH.x7 = f.AscDFH.y7 | 302;
  f.AscDFH.tXa = f.AscDFH.y7 | 303;
  f.AscDFH.ZB = f.AscDFH.y7 | 304;
  f.AscDFH.MRb = f.AscDFH.y7 | 401;
  f.AscDFH.JTb = f.AscDFH.Nia | 1;
  f.AscDFH.L5b = f.AscDFH.Nia | 2;
  f.AscDFH.dKc = f.AscDFH.Nia | 3;
  f.AscDFH.qbf = f.AscDFH.Nia | 4;
  f.AscDFH.SZd = f.AscDFH.Nia | 5;
  f.AscDFH.RZd = f.AscDFH.Nia | 6;
  f.AscDFH.TZd = f.AscDFH.Nia | 7;
  f.AscDFH.isd = f.AscDFH.Nia | 8;
  f.AscDFH.Xmg = f.AscDFH.Nia | 9;
  f.AscDFH.Ymg = f.AscDFH.Nia | 10;
  f.AscDFH.rbf = f.AscDFH.Nia | 11;
  f.AscDFH.sbf = f.AscDFH.Nia | 12;
  f.AscDFH.Ylg = f.AscDFH.Mzc | 1;
  f.AscDFH.Zlg = f.AscDFH.Mzc | 2;
  f.AscDFH.$lg = f.AscDFH.Nzc | 1;
  f.AscDFH.amg = f.AscDFH.Nzc | 2;
  f.AscDFH.lng = f.AscDFH.Vub | 1;
  f.AscDFH.mng = f.AscDFH.Vub | 2;
  f.AscDFH.kng = f.AscDFH.Vub | 3;
  f.AscDFH.jng = f.AscDFH.Vub | 4;
  f.AscDFH.Zmg = f.AscDFH.Dsd | 1;
  f.AscDFH.$mg = f.AscDFH.Esd |
    1;
  f.AscDFH.bng = f.AscDFH.Fsd | 1;
  f.AscDFH.qng = f.AscDFH.Uzc | 1;
  f.AscDFH.rng = f.AscDFH.Uzc | 2;
  f.AscDFH.gng = f.AscDFH.Hsd | 1;
  f.AscDFH.Olg = f.AscDFH.rYa | 1;
  f.AscDFH.Tlg = f.AscDFH.rYa | 2;
  f.AscDFH.Qlg = f.AscDFH.rYa | 3;
  f.AscDFH.Rlg = f.AscDFH.rYa | 4;
  f.AscDFH.Slg = f.AscDFH.rYa | 5;
  f.AscDFH.Plg = f.AscDFH.rYa | 6;
  f.AscDFH.fng = f.AscDFH.Gsd | 1;
  f.AscDFH.Amg = f.AscDFH.Szc | 1;
  f.AscDFH.Bmg = f.AscDFH.Szc | 2;
  f.AscDFH.wmg = f.AscDFH.Qzc | 1;
  f.AscDFH.xmg = f.AscDFH.Qzc | 2;
  f.AscDFH.ymg = f.AscDFH.Rzc | 1;
  f.AscDFH.zmg = f.AscDFH.Rzc | 2;
  f.AscDFH.tmg = f.AscDFH.Lbb |
    1;
  f.AscDFH.umg = f.AscDFH.Lbb | 2;
  f.AscDFH.vmg = f.AscDFH.Lbb | 3;
  f.AscDFH.Omg = f.AscDFH.KVb | 1;
  f.AscDFH.Pmg = f.AscDFH.KVb | 2;
  f.AscDFH.Nmg = f.AscDFH.KVb | 3;
  f.AscDFH.sng = f.AscDFH.Vzc | 1;
  f.AscDFH.tng = f.AscDFH.Vzc | 2;
  f.AscDFH.dmg = f.AscDFH.BVb | 1;
  f.AscDFH.cmg = f.AscDFH.BVb | 2;
  f.AscDFH.emg = f.AscDFH.BVb | 3;
  f.AscDFH.Dmg = f.AscDFH.Tzc | 1;
  f.AscDFH.Cmg = f.AscDFH.Tzc | 2;
  f.AscDFH.Hmg = f.AscDFH.jua | 1;
  f.AscDFH.Kmg = f.AscDFH.jua | 2;
  f.AscDFH.Jmg = f.AscDFH.jua | 3;
  f.AscDFH.Img = f.AscDFH.jua | 4;
  f.AscDFH.Lmg = f.AscDFH.jua | 5;
  f.AscDFH.Emg = f.AscDFH.jua |
    6;
  f.AscDFH.Fmg = f.AscDFH.jua | 7;
  f.AscDFH.Gmg = f.AscDFH.jua | 8;
  f.AscDFH.Mmg = f.AscDFH.jua | 9;
  f.AscDFH.xtc = f.AscDFH.Gbb | 1;
  f.AscDFH.ORb = f.AscDFH.Gbb | 2;
  f.AscDFH.PRb = f.AscDFH.Gbb | 3;
  f.AscDFH.ytc = f.AscDFH.Gbb | 4;
  f.AscDFH.erc = f.AscDFH.bCa | 1;
  f.AscDFH.grc = f.AscDFH.bCa | 2;
  f.AscDFH.frc = f.AscDFH.bCa | 3;
  f.AscDFH.drc = f.AscDFH.bCa | 4;
  f.AscDFH.hrc = f.AscDFH.bCa | 5;
  f.AscDFH.FRb = f.AscDFH.bCa | 6;
  f.AscDFH.GRb = f.AscDFH.bCa | 7;
  f.AscDFH.ovc = f.AscDFH.Obb | 1;
  f.AscDFH.qvc = f.AscDFH.Obb | 2;
  f.AscDFH.pvc = f.AscDFH.Obb | 3;
  f.AscDFH.CTb = f.AscDFH.Obb |
    4;
  f.AscDFH.Xvc = f.AscDFH.vYa | 1;
  f.AscDFH.Yvc = f.AscDFH.vYa | 2;
  f.AscDFH.Zvc = f.AscDFH.vYa | 3;
  f.AscDFH.$vc = f.AscDFH.vYa | 4;
  f.AscDFH.awc = f.AscDFH.vYa | 5;
  f.AscDFH.Xyc = f.AscDFH.Qbb | 1;
  f.AscDFH.psd = f.AscDFH.Qbb | 2;
  f.AscDFH.Yyc = f.AscDFH.Qbb | 3;
  f.AscDFH.rVb = f.AscDFH.Qbb | 4;
  f.AscDFH.ing = f.AscDFH.QVb | 1;
  f.AscDFH.hng = f.AscDFH.QVb | 2;
  f.AscDFH.kmg = f.AscDFH.Pzc | 1;
  f.AscDFH.jmg = f.AscDFH.Pzc | 2;
  f.AscDFH.bsc = f.AscDFH.VY | 1;
  f.AscDFH.csc = f.AscDFH.VY | 2;
  f.AscDFH.dsc = f.AscDFH.VY | 3;
  f.AscDFH.esc = f.AscDFH.VY | 4;
  f.AscDFH.fsc = f.AscDFH.VY | 5;
  f.AscDFH.KRb = f.AscDFH.VY | 6;
  f.AscDFH.gsc = f.AscDFH.VY | 7;
  f.AscDFH.hsc = f.AscDFH.VY | 8;
  f.AscDFH.isc = f.AscDFH.VY | 9;
  f.AscDFH.jsc = f.AscDFH.VY | 10;
  f.AscDFH.ksc = f.AscDFH.VY | 11;
  f.AscDFH.lsc = f.AscDFH.VY | 12;
  f.AscDFH.HRb = f.AscDFH.Zr | 1;
  f.AscDFH.Krc = f.AscDFH.Zr | 2;
  f.AscDFH.Lrc = f.AscDFH.Zr | 3;
  f.AscDFH.Mrc = f.AscDFH.Zr | 4;
  f.AscDFH.Orc = f.AscDFH.Zr | 5;
  f.AscDFH.Rrc = f.AscDFH.Zr | 6;
  f.AscDFH.Src = f.AscDFH.Zr | 7;
  f.AscDFH.Trc = f.AscDFH.Zr | 8;
  f.AscDFH.Urc = f.AscDFH.Zr | 9;
  f.AscDFH.Vrc = f.AscDFH.Zr | 10;
  f.AscDFH.IRb = f.AscDFH.Zr | 11;
  f.AscDFH.JRb =
    f.AscDFH.Zr | 12;
  f.AscDFH.Vlg = f.AscDFH.Zr | 13;
  f.AscDFH.Wrc = f.AscDFH.Zr | 14;
  f.AscDFH.Nrc = f.AscDFH.Zr | 15;
  f.AscDFH.Qrc = f.AscDFH.Zr | 16;
  f.AscDFH.Prc = f.AscDFH.Zr | 17;
  f.AscDFH.Xaf = f.AscDFH.Zr | 18;
  f.AscDFH.Ulg = f.AscDFH.Zr | 19;
  f.AscDFH.Guc = f.AscDFH.iua | 1;
  f.AscDFH.ySb = f.AscDFH.iua | 2;
  f.AscDFH.Huc = f.AscDFH.iua | 3;
  f.AscDFH.Iuc = f.AscDFH.iua | 4;
  f.AscDFH.Juc = f.AscDFH.iua | 5;
  f.AscDFH.Kuc = f.AscDFH.iua | 6;
  f.AscDFH.uuc = f.AscDFH.Wna | 1;
  f.AscDFH.vuc = f.AscDFH.Wna | 2;
  f.AscDFH.wuc = f.AscDFH.Wna | 3;
  f.AscDFH.xuc = f.AscDFH.Wna | 4;
  f.AscDFH.yuc =
    f.AscDFH.Wna | 5;
  f.AscDFH.zuc = f.AscDFH.Wna | 6;
  f.AscDFH.Auc = f.AscDFH.Wna | 7;
  f.AscDFH.Buc = f.AscDFH.Wna | 8;
  f.AscDFH.Cuc = f.AscDFH.Wna | 9;
  f.AscDFH.Duc = f.AscDFH.Oub | 1;
  f.AscDFH.Euc = f.AscDFH.Oub | 2;
  f.AscDFH.Fuc = f.AscDFH.Oub | 3;
  f.AscDFH.rwc = f.AscDFH.xYa | 1;
  f.AscDFH.swc = f.AscDFH.xYa | 2;
  f.AscDFH.twc = f.AscDFH.xYa | 3;
  f.AscDFH.uwc = f.AscDFH.xYa | 4;
  f.AscDFH.vwc = f.AscDFH.xYa | 5;
  f.AscDFH.nsc = f.AscDFH.wW | 1;
  f.AscDFH.msc = f.AscDFH.wW | 2;
  f.AscDFH.osc = f.AscDFH.wW | 3;
  f.AscDFH.psc = f.AscDFH.wW | 4;
  f.AscDFH.qsc = f.AscDFH.wW | 5;
  f.AscDFH.rsc = f.AscDFH.wW |
    6;
  f.AscDFH.ssc = f.AscDFH.wW | 7;
  f.AscDFH.tsc = f.AscDFH.wW | 8;
  f.AscDFH.usc = f.AscDFH.wW | 9;
  f.AscDFH.vsc = f.AscDFH.wW | 10;
  f.AscDFH.wsc = f.AscDFH.wW | 11;
  f.AscDFH.xsc = f.AscDFH.wW | 12;
  f.AscDFH.ysc = f.AscDFH.wW | 13;
  f.AscDFH.zsc = f.AscDFH.wW | 14;
  f.AscDFH.Bsc = f.AscDFH.wW | 15;
  f.AscDFH.$uc = f.AscDFH.Pub | 1;
  f.AscDFH.avc = f.AscDFH.Pub | 2;
  f.AscDFH.bvc = f.AscDFH.Pub | 3;
  f.AscDFH.Jtb = f.AscDFH.lea | 1;
  f.AscDFH.nbf = f.AscDFH.lea | 2;
  f.AscDFH.obf = f.AscDFH.lea | 3;
  f.AscDFH.ywc = f.AscDFH.lea | 4;
  f.AscDFH.zwc = f.AscDFH.lea | 5;
  f.AscDFH.Vmg = f.AscDFH.lea |
    6;
  f.AscDFH.Awc = f.AscDFH.lea | 7;
  f.AscDFH.Wmg = f.AscDFH.lea | 8;
  f.AscDFH.GTb = f.AscDFH.lea | 9;
  f.AscDFH.ITb = f.AscDFH.lea | 10;
  f.AscDFH.HTb = f.AscDFH.lea | 11;
  f.AscDFH.gvc = f.AscDFH.IVb | 1;
  f.AscDFH.hvc = f.AscDFH.IVb | 2;
  f.AscDFH.Wwc = f.AscDFH.zYa | 1;
  f.AscDFH.Xwc = f.AscDFH.zYa | 2;
  f.AscDFH.Ywc = f.AscDFH.zYa | 3;
  f.AscDFH.Zwc = f.AscDFH.zYa | 4;
  f.AscDFH.$wc = f.AscDFH.zYa | 5;
  f.AscDFH.Xsc = f.AscDFH.$La | 1;
  f.AscDFH.Ysc = f.AscDFH.$La | 2;
  f.AscDFH.Zsc = f.AscDFH.$La | 3;
  f.AscDFH.$sc = f.AscDFH.$La | 4;
  f.AscDFH.atc = f.AscDFH.$La | 5;
  f.AscDFH.btc = f.AscDFH.$La |
    6;
  f.AscDFH.zSb = f.AscDFH.HH | 1;
  f.AscDFH.ASb = f.AscDFH.HH | 2;
  f.AscDFH.Luc = f.AscDFH.HH | 3;
  f.AscDFH.BSb = f.AscDFH.HH | 4;
  f.AscDFH.Muc = f.AscDFH.HH | 5;
  f.AscDFH.CSb = f.AscDFH.HH | 6;
  f.AscDFH.Ctb = f.AscDFH.HH | 7;
  f.AscDFH.DSb = f.AscDFH.HH | 8;
  f.AscDFH.Nuc = f.AscDFH.HH | 9;
  f.AscDFH.Ouc = f.AscDFH.HH | 10;
  f.AscDFH.Dsc = f.AscDFH.A0 | 1;
  f.AscDFH.NRb = f.AscDFH.A0 | 2;
  f.AscDFH.Csc = f.AscDFH.A0 | 3;
  f.AscDFH.Esc = f.AscDFH.A0 | 4;
  f.AscDFH.Fsc = f.AscDFH.A0 | 5;
  f.AscDFH.Gsc = f.AscDFH.A0 | 6;
  f.AscDFH.Hsc = f.AscDFH.A0 | 7;
  f.AscDFH.Isc = f.AscDFH.A0 | 8;
  f.AscDFH.Jsc =
    f.AscDFH.A0 | 9;
  f.AscDFH.Ksc = f.AscDFH.A0 | 10;
  f.AscDFH.Lsc = f.AscDFH.A0 | 11;
  f.AscDFH.Msc = f.AscDFH.A0 | 12;
  f.AscDFH.Nsc = f.AscDFH.A0 | 13;
  f.AscDFH.Osc = f.AscDFH.A0 | 14;
  f.AscDFH.Psc = f.AscDFH.A0 | 15;
  f.AscDFH.Zyc = f.AscDFH.Wub | 1;
  f.AscDFH.$yc = f.AscDFH.Wub | 2;
  f.AscDFH.azc = f.AscDFH.Wub | 3;
  f.AscDFH.vRb = f.AscDFH.qw | 1;
  f.AscDFH.xRb = f.AscDFH.qw | 2;
  f.AscDFH.yRb = f.AscDFH.qw | 3;
  f.AscDFH.uqc = f.AscDFH.qw | 4;
  f.AscDFH.ARb = f.AscDFH.qw | 5;
  f.AscDFH.vqc = f.AscDFH.qw | 6;
  f.AscDFH.rtb = f.AscDFH.qw | 7;
  f.AscDFH.wqc = f.AscDFH.qw | 8;
  f.AscDFH.xqc = f.AscDFH.qw |
    9;
  f.AscDFH.wRb = f.AscDFH.qw | 10;
  f.AscDFH.zRb = f.AscDFH.qw | 11;
  f.AscDFH.BRb = f.AscDFH.qw | 12;
  f.AscDFH.DRb = f.AscDFH.Tna | 1;
  f.AscDFH.Kqc = f.AscDFH.Tna | 2;
  f.AscDFH.Lqc = f.AscDFH.Tna | 3;
  f.AscDFH.Mqc = f.AscDFH.Tna | 4;
  f.AscDFH.ERb = f.AscDFH.Tna | 5;
  f.AscDFH.Nqc = f.AscDFH.Tna | 6;
  f.AscDFH.Oqc = f.AscDFH.Tna | 7;
  f.AscDFH.Pqc = f.AscDFH.Tna | 8;
  f.AscDFH.TRb = f.AscDFH.aC | 1;
  f.AscDFH.Dtc = f.AscDFH.aC | 2;
  f.AscDFH.Etc = f.AscDFH.aC | 3;
  f.AscDFH.vtb = f.AscDFH.aC | 4;
  f.AscDFH.Ftc = f.AscDFH.aC | 5;
  f.AscDFH.DTb = f.AscDFH.Mia | 1;
  f.AscDFH.rvc = f.AscDFH.Mia | 2;
  f.AscDFH.svc = f.AscDFH.Mia | 3;
  f.AscDFH.tvc = f.AscDFH.Mia | 4;
  f.AscDFH.uvc = f.AscDFH.Mia | 5;
  f.AscDFH.ETb = f.AscDFH.Mia | 6;
  f.AscDFH.vvc = f.AscDFH.Mia | 7;
  f.AscDFH.wvc = f.AscDFH.Mia | 8;
  f.AscDFH.xvc = f.AscDFH.Mia | 9;
  f.AscDFH.yvc = f.AscDFH.Mia | 10;
  f.AscDFH.FTb = f.AscDFH.av | 1;
  f.AscDFH.hwc = f.AscDFH.av | 2;
  f.AscDFH.Htb = f.AscDFH.av | 3;
  f.AscDFH.iwc = f.AscDFH.av | 4;
  f.AscDFH.gwc = f.AscDFH.av | 5;
  f.AscDFH.KTb = f.AscDFH.Xna | 1;
  f.AscDFH.LTb = f.AscDFH.Xna | 2;
  f.AscDFH.Mwc = f.AscDFH.Xna | 3;
  f.AscDFH.Ktb = f.AscDFH.Xna | 4;
  f.AscDFH.Nwc = f.AscDFH.Xna | 5;
  f.AscDFH.MTb =
    f.AscDFH.nE | 1;
  f.AscDFH.NTb = f.AscDFH.nE | 2;
  f.AscDFH.OTb = f.AscDFH.nE | 3;
  f.AscDFH.Mtb = f.AscDFH.nE | 4;
  f.AscDFH.axc = f.AscDFH.nE | 5;
  f.AscDFH.LUb = f.AscDFH.B0 | 1;
  f.AscDFH.hyc = f.AscDFH.B0 | 2;
  f.AscDFH.iyc = f.AscDFH.B0 | 3;
  f.AscDFH.jyc = f.AscDFH.B0 | 4;
  f.AscDFH.MUb = f.AscDFH.B0 | 5;
  f.AscDFH.kyc = f.AscDFH.B0 | 6;
  f.AscDFH.iVb = f.AscDFH.C0 | 1;
  f.AscDFH.jVb = f.AscDFH.C0 | 2;
  f.AscDFH.uub = f.AscDFH.C0 | 3;
  f.AscDFH.qyc = f.AscDFH.C0 | 4;
  f.AscDFH.sqc = f.AscDFH.wVb | 1;
  f.AscDFH.tqc = f.AscDFH.wVb | 2;
  f.AscDFH.pRb = f.AscDFH.XQ | 1;
  f.AscDFH.qRb = f.AscDFH.XQ | 2;
  f.AscDFH.dqc = f.AscDFH.XQ | 3;
  f.AscDFH.rRb = f.AscDFH.XQ | 4;
  f.AscDFH.sab = f.AscDFH.XQ | 5;
  f.AscDFH.eqc = f.AscDFH.XQ | 6;
  f.AscDFH.bxc = f.AscDFH.JS | 1;
  f.AscDFH.cxc = f.AscDFH.JS | 2;
  f.AscDFH.dxc = f.AscDFH.JS | 3;
  f.AscDFH.exc = f.AscDFH.JS | 4;
  f.AscDFH.fxc = f.AscDFH.JS | 5;
  f.AscDFH.gxc = f.AscDFH.JS | 6;
  f.AscDFH.hxc = f.AscDFH.JS | 7;
  f.AscDFH.ixc = f.AscDFH.JS | 8;
  f.AscDFH.jxc = f.AscDFH.JS | 9;
  f.AscDFH.kxc = f.AscDFH.JS | 10;
  f.AscDFH.lxc = f.AscDFH.JS | 11;
  f.AscDFH.mxc = f.AscDFH.JS | 12;
  f.AscDFH.Qsc = f.AscDFH.cCa | 1;
  f.AscDFH.Rsc = f.AscDFH.cCa | 2;
  f.AscDFH.Ssc =
    f.AscDFH.cCa | 3;
  f.AscDFH.Tsc = f.AscDFH.cCa | 4;
  f.AscDFH.Usc = f.AscDFH.cCa | 5;
  f.AscDFH.Vsc = f.AscDFH.cCa | 6;
  f.AscDFH.Wsc = f.AscDFH.cCa | 7;
  f.AscDFH.Gtc = f.AscDFH.hua | 1;
  f.AscDFH.Htc = f.AscDFH.hua | 2;
  f.AscDFH.Itc = f.AscDFH.hua | 3;
  f.AscDFH.Jtc = f.AscDFH.hua | 4;
  f.AscDFH.Ktc = f.AscDFH.hua | 5;
  f.AscDFH.Ltc = f.AscDFH.hua | 6;
  f.AscDFH.Mtc = f.AscDFH.hua | 7;
  f.AscDFH.Ntc = f.AscDFH.hua | 8;
  f.AscDFH.cvc = f.AscDFH.EVb | 1;
  f.AscDFH.dvc = f.AscDFH.EVb | 2;
  f.AscDFH.ivc = f.AscDFH.Qub | 1;
  f.AscDFH.yTb = f.AscDFH.Qub | 2;
  f.AscDFH.jvc = f.AscDFH.Qub | 3;
  f.AscDFH.lvc =
    f.AscDFH.Rub | 1;
  f.AscDFH.mvc = f.AscDFH.Rub | 2;
  f.AscDFH.nvc = f.AscDFH.Rub | 3;
  f.AscDFH.zTb = f.AscDFH.JVb | 1;
  f.AscDFH.kvc = f.AscDFH.JVb | 2;
  f.AscDFH.Kyc = f.AscDFH.nea | 1;
  f.AscDFH.Lyc = f.AscDFH.nea | 2;
  f.AscDFH.Myc = f.AscDFH.nea | 3;
  f.AscDFH.Nyc = f.AscDFH.nea | 4;
  f.AscDFH.Oyc = f.AscDFH.nea | 5;
  f.AscDFH.Pyc = f.AscDFH.nea | 6;
  f.AscDFH.Qyc = f.AscDFH.nea | 7;
  f.AscDFH.Ryc = f.AscDFH.nea | 8;
  f.AscDFH.Syc = f.AscDFH.nea | 9;
  f.AscDFH.Tyc = f.AscDFH.nea | 10;
  f.AscDFH.Uyc = f.AscDFH.nea | 11;
  f.AscDFH.Vyc = f.AscDFH.SVb | 1;
  f.AscDFH.Wyc = f.AscDFH.SVb | 2;
  f.AscDFH.oyc =
    f.AscDFH.OVb | 1;
  f.AscDFH.pyc = f.AscDFH.OVb | 2;
  f.AscDFH.NUb = f.AscDFH.MVb | 1;
  f.AscDFH.lyc = f.AscDFH.MVb | 2;
  f.AscDFH.myc = f.AscDFH.NVb | 1;
  f.AscDFH.nyc = f.AscDFH.NVb | 2;
  f.AscDFH.Czc = f.AscDFH.AYa | 1;
  f.AscDFH.Dzc = f.AscDFH.AYa | 2;
  f.AscDFH.Ezc = f.AscDFH.AYa | 3;
  f.AscDFH.Fzc = f.AscDFH.AYa | 4;
  f.AscDFH.Gzc = f.AscDFH.AYa | 5;
  f.AscDFH.evc = f.AscDFH.GVb | 1;
  f.AscDFH.fvc = f.AscDFH.GVb | 2;
  f.AscDFH.xTb = f.AscDFH.FVb | 1;
  f.AscDFH.gsd = f.AscDFH.FVb | 2;
  f.AscDFH.OUb = f.AscDFH.PVb | 1;
  f.AscDFH.nsd = f.AscDFH.PVb | 2;
  f.AscDFH.Izc = f.AscDFH.TVb | 1;
  f.AscDFH.Jzc =
    f.AscDFH.TVb | 2;
  f.AscDFH.fqc = f.AscDFH.vW | 1;
  f.AscDFH.gqc = f.AscDFH.vW | 2;
  f.AscDFH.sRb = f.AscDFH.vW | 3;
  f.AscDFH.hqc = f.AscDFH.vW | 4;
  f.AscDFH.iqc = f.AscDFH.vW | 5;
  f.AscDFH.jqc = f.AscDFH.vW | 6;
  f.AscDFH.kqc = f.AscDFH.vW | 7;
  f.AscDFH.lqc = f.AscDFH.vW | 8;
  f.AscDFH.mqc = f.AscDFH.vW | 9;
  f.AscDFH.nqc = f.AscDFH.vW | 10;
  f.AscDFH.oqc = f.AscDFH.vW | 11;
  f.AscDFH.Frc = f.AscDFH.sYa | 1;
  f.AscDFH.Grc = f.AscDFH.sYa | 2;
  f.AscDFH.Hrc = f.AscDFH.sYa | 3;
  f.AscDFH.Irc = f.AscDFH.sYa | 4;
  f.AscDFH.Jrc = f.AscDFH.sYa | 5;
  f.AscDFH.bwc = f.AscDFH.wYa | 1;
  f.AscDFH.cwc = f.AscDFH.wYa |
    2;
  f.AscDFH.dwc = f.AscDFH.wYa | 3;
  f.AscDFH.ewc = f.AscDFH.wYa | 4;
  f.AscDFH.fwc = f.AscDFH.wYa | 5;
  f.AscDFH.iea = f.AscDFH.Yna | 1;
  f.AscDFH.Owc = f.AscDFH.Yna | 2;
  f.AscDFH.Ltb = f.AscDFH.Yna | 3;
  f.AscDFH.Pwc = f.AscDFH.Yna | 4;
  f.AscDFH.ubf = f.AscDFH.Yna | 5;
  f.AscDFH.vbf = f.AscDFH.Yna | 6;
  f.AscDFH.wbf = f.AscDFH.Yna | 7;
  f.AscDFH.xbf = f.AscDFH.Yna | 8;
  f.AscDFH.ybf = f.AscDFH.Yna | 9;
  f.AscDFH.yqc = f.AscDFH.P3 | 1;
  f.AscDFH.zqc = f.AscDFH.P3 | 2;
  f.AscDFH.CRb = f.AscDFH.P3 | 3;
  f.AscDFH.Aqc = f.AscDFH.P3 | 4;
  f.AscDFH.Bqc = f.AscDFH.P3 | 5;
  f.AscDFH.Cqc = f.AscDFH.P3 | 6;
  f.AscDFH.Dqc =
    f.AscDFH.P3 | 7;
  f.AscDFH.Eqc = f.AscDFH.P3 | 8;
  f.AscDFH.Fqc = f.AscDFH.P3 | 9;
  f.AscDFH.Gqc = f.AscDFH.P3 | 10;
  f.AscDFH.Hqc = f.AscDFH.P3 | 11;
  f.AscDFH.Iqc = f.AscDFH.P3 | 12;
  f.AscDFH.Jqc = f.AscDFH.P3 | 13;
  f.AscDFH.Puc = f.AscDFH.pP | 1;
  f.AscDFH.Quc = f.AscDFH.pP | 2;
  f.AscDFH.Dtb = f.AscDFH.pP | 3;
  f.AscDFH.Ruc = f.AscDFH.pP | 4;
  f.AscDFH.Suc = f.AscDFH.pP | 5;
  f.AscDFH.Tuc = f.AscDFH.pP | 6;
  f.AscDFH.Uuc = f.AscDFH.pP | 7;
  f.AscDFH.Vuc = f.AscDFH.pP | 8;
  f.AscDFH.Wuc = f.AscDFH.pP | 9;
  f.AscDFH.Xuc = f.AscDFH.pP | 10;
  f.AscDFH.Yuc = f.AscDFH.pP | 11;
  f.AscDFH.Zuc = f.AscDFH.pP |
    12;
  f.AscDFH.jwc = f.AscDFH.z7 | 1;
  f.AscDFH.kwc = f.AscDFH.z7 | 2;
  f.AscDFH.Itb = f.AscDFH.z7 | 3;
  f.AscDFH.lwc = f.AscDFH.z7 | 4;
  f.AscDFH.mwc = f.AscDFH.z7 | 5;
  f.AscDFH.nwc = f.AscDFH.z7 | 6;
  f.AscDFH.owc = f.AscDFH.z7 | 7;
  f.AscDFH.pwc = f.AscDFH.z7 | 8;
  f.AscDFH.qwc = f.AscDFH.z7 | 9;
  f.AscDFH.ryc = f.AscDFH.eCa | 1;
  f.AscDFH.syc = f.AscDFH.eCa | 2;
  f.AscDFH.tyc = f.AscDFH.eCa | 3;
  f.AscDFH.uyc = f.AscDFH.eCa | 4;
  f.AscDFH.vyc = f.AscDFH.eCa | 5;
  f.AscDFH.wyc = f.AscDFH.eCa | 6;
  f.AscDFH.Qqc = f.AscDFH.R3 | 1;
  f.AscDFH.Rqc = f.AscDFH.R3 | 2;
  f.AscDFH.Sqc = f.AscDFH.R3 | 3;
  f.AscDFH.Tqc =
    f.AscDFH.R3 | 4;
  f.AscDFH.Uqc = f.AscDFH.R3 | 5;
  f.AscDFH.Vqc = f.AscDFH.R3 | 6;
  f.AscDFH.Wqc = f.AscDFH.R3 | 7;
  f.AscDFH.Xqc = f.AscDFH.R3 | 8;
  f.AscDFH.Yqc = f.AscDFH.R3 | 9;
  f.AscDFH.Zqc = f.AscDFH.R3 | 10;
  f.AscDFH.$qc = f.AscDFH.R3 | 11;
  f.AscDFH.brc = f.AscDFH.R3 | 12;
  f.AscDFH.crc = f.AscDFH.R3 | 13;
  f.AscDFH.Zrd = f.AscDFH.CVb | 1;
  f.AscDFH.Otc = f.AscDFH.CVb | 2;
  f.AscDFH.wwc = f.AscDFH.LVb | 1;
  f.AscDFH.xwc = f.AscDFH.LVb | 2;
  f.AscDFH.Hwc = f.AscDFH.yYa | 1;
  f.AscDFH.Iwc = f.AscDFH.yYa | 2;
  f.AscDFH.Jwc = f.AscDFH.yYa | 3;
  f.AscDFH.Kwc = f.AscDFH.yYa | 4;
  f.AscDFH.Lwc = f.AscDFH.yYa |
    5;
  f.AscDFH.Zrc = f.AscDFH.Mub | 1;
  f.AscDFH.$rc = f.AscDFH.Mub | 2;
  f.AscDFH.asc = f.AscDFH.Mub | 3;
  f.AscDFH.vzc = f.AscDFH.eMa | 1;
  f.AscDFH.wzc = f.AscDFH.eMa | 2;
  f.AscDFH.xzc = f.AscDFH.eMa | 3;
  f.AscDFH.yzc = f.AscDFH.eMa | 4;
  f.AscDFH.zzc = f.AscDFH.eMa | 5;
  f.AscDFH.Azc = f.AscDFH.eMa | 6;
  f.AscDFH.Xrc = f.AscDFH.zVb | 1;
  f.AscDFH.Yrc = f.AscDFH.zVb | 2;
  f.AscDFH.JUb = f.AscDFH.Pbb | 1;
  f.AscDFH.HUb = f.AscDFH.Pbb | 2;
  f.AscDFH.IUb = f.AscDFH.Pbb | 3;
  f.AscDFH.GUb = f.AscDFH.Pbb | 4;
  f.AscDFH.Fbb = f.AscDFH.T$ | 1;
  f.AscDFH.Lub = f.AscDFH.T$ | 2;
  f.AscDFH.Ebb = f.AscDFH.T$ |
    3;
  f.AscDFH.Kub = f.AscDFH.T$ | 4;
  f.AscDFH.Dbb = f.AscDFH.T$ | 5;
  f.AscDFH.Jub = f.AscDFH.T$ | 6;
  f.AscDFH.Cbb = f.AscDFH.T$ | 7;
  f.AscDFH.Iub = f.AscDFH.T$ | 8;
  f.AscDFH.tVb = f.AscDFH.T$ | 9;
  f.AscDFH.uVb = f.AscDFH.T$ | 10;
  f.AscDFH.vVb = f.AscDFH.T$ | 11;
  f.AscDFH.Hzc = f.AscDFH.T$ | 12;
  f.AscDFH.Fxc = f.AscDFH.dCa | 1;
  f.AscDFH.Hxc = f.AscDFH.dCa | 2;
  f.AscDFH.KUb = f.AscDFH.dCa | 3;
  f.AscDFH.Qtb = f.AscDFH.dCa | 4;
  f.AscDFH.Rtb = f.AscDFH.dCa | 5;
  f.AscDFH.Gxc = f.AscDFH.dCa | 6;
  f.AscDFH.Ptb = f.AscDFH.dCa | 7;
  f.AscDFH.Wlg = f.AscDFH.Lzc | 1;
  f.AscDFH.Xlg = f.AscDFH.Lzc | 2;
  f.AscDFH.LRb =
    f.AscDFH.Kzc | 1;
  f.AscDFH.gSb = f.AscDFH.DVb | 1;
  f.AscDFH.Ptc = f.AscDFH.DVb | 2;
  f.AscDFH.hmg = f.AscDFH.Jbb | 1;
  f.AscDFH.img = f.AscDFH.Jbb | 2;
  f.AscDFH.gmg = f.AscDFH.Jbb | 3;
  f.AscDFH.fmg = f.AscDFH.Jbb | 4;
  f.AscDFH.nmg = f.AscDFH.Nub | 1;
  f.AscDFH.lmg = f.AscDFH.Nub | 2;
  f.AscDFH.mmg = f.AscDFH.Nub | 3;
  f.AscDFH.smg = f.AscDFH.Kbb | 1;
  f.AscDFH.qmg = f.AscDFH.Kbb | 2;
  f.AscDFH.rmg = f.AscDFH.Kbb | 3;
  f.AscDFH.pmg = f.AscDFH.Kbb | 4;
  f.AscDFH.omg = f.AscDFH.Kbb | 5;
  f.AscDFH.nng = f.AscDFH.RVb | 1;
  f.AscDFH.png = f.AscDFH.RVb | 2;
  f.AscDFH.ong = f.AscDFH.RVb | 3;
  f.AscDFH.$tc =
    f.AscDFH.Mbb | 1;
  f.AscDFH.auc = f.AscDFH.Mbb | 2;
  f.AscDFH.buc = f.AscDFH.Mbb | 3;
  f.AscDFH.cuc = f.AscDFH.Mbb | 4;
  f.AscDFH.Jlg = f.AscDFH.yVb | 1;
  f.AscDFH.Klg = f.AscDFH.yVb | 2;
  f.AscDFH.Nlg = f.AscDFH.xVb | 1;
  f.AscDFH.Llg = f.AscDFH.xVb | 2;
  f.AscDFH.Mlg = f.AscDFH.xVb | 3;
  f.AscDFH.Ewc = f.AscDFH.Uub | 1;
  f.AscDFH.Fwc = f.AscDFH.Uub | 2;
  f.AscDFH.Gwc = f.AscDFH.Uub | 3;
  f.AscDFH.duc = f.AscDFH.Vna | 1;
  f.AscDFH.euc = f.AscDFH.Vna | 2;
  f.AscDFH.fuc = f.AscDFH.Vna | 3;
  f.AscDFH.guc = f.AscDFH.Vna | 4;
  f.AscDFH.huc = f.AscDFH.Vna | 5;
  f.AscDFH.iuc = f.AscDFH.Vna | 6;
  f.AscDFH.juc =
    f.AscDFH.Vna | 7;
  f.AscDFH.kuc = f.AscDFH.Vna | 8;
  f.AscDFH.luc = f.AscDFH.Vna | 9;
  f.AscDFH.zvc = f.AscDFH.bMa | 1;
  f.AscDFH.Avc = f.AscDFH.bMa | 2;
  f.AscDFH.Bvc = f.AscDFH.bMa | 3;
  f.AscDFH.Cvc = f.AscDFH.bMa | 4;
  f.AscDFH.Dvc = f.AscDFH.bMa | 5;
  f.AscDFH.Evc = f.AscDFH.bMa | 6;
  f.AscDFH.Fvc = f.AscDFH.kea | 1;
  f.AscDFH.Gvc = f.AscDFH.kea | 2;
  f.AscDFH.Hvc = f.AscDFH.kea | 3;
  f.AscDFH.Ivc = f.AscDFH.kea | 4;
  f.AscDFH.Jvc = f.AscDFH.kea | 5;
  f.AscDFH.Kvc = f.AscDFH.kea | 6;
  f.AscDFH.Lvc = f.AscDFH.kea | 7;
  f.AscDFH.Mvc = f.AscDFH.kea | 8;
  f.AscDFH.Nvc = f.AscDFH.kea | 9;
  f.AscDFH.Ovc =
    f.AscDFH.kea | 10;
  f.AscDFH.Pvc = f.AscDFH.kea | 11;
  f.AscDFH.aCa = f.AscDFH.Lr | 1;
  f.AscDFH.yUb = f.AscDFH.Lr | 2;
  f.AscDFH.BUb = f.AscDFH.Lr | 3;
  f.AscDFH.CUb = f.AscDFH.Lr | 4;
  f.AscDFH.EUb = f.AscDFH.Lr | 5;
  f.AscDFH.DUb = f.AscDFH.Lr | 6;
  f.AscDFH.zUb = f.AscDFH.Lr | 7;
  f.AscDFH.xUb = f.AscDFH.Lr | 8;
  f.AscDFH.Otb = f.AscDFH.Lr | 9;
  f.AscDFH.FUb = f.AscDFH.Lr | 10;
  f.AscDFH.AUb = f.AscDFH.Lr | 11;
  f.AscDFH.ztc = f.AscDFH.Hbb | 1;
  f.AscDFH.Atc = f.AscDFH.Hbb | 2;
  f.AscDFH.Btc = f.AscDFH.Hbb | 3;
  f.AscDFH.Ctc = f.AscDFH.Hbb | 4;
  f.AscDFH.sSb = f.AscDFH.St | 1;
  f.AscDFH.Ztc = f.AscDFH.St |
    2;
  f.AscDFH.$Db = f.AscDFH.St | 3;
  f.AscDFH.Ytc = f.AscDFH.St | 4;
  f.AscDFH.Xtc = f.AscDFH.St | 5;
  f.AscDFH.aEb = f.AscDFH.St | 6;
  f.AscDFH.wSb = f.AscDFH.hy | 1;
  f.AscDFH.suc = f.AscDFH.hy | 2;
  f.AscDFH.Btb = f.AscDFH.hy | 3;
  f.AscDFH.ruc = f.AscDFH.hy | 4;
  f.AscDFH.ouc = f.AscDFH.hy | 5;
  f.AscDFH.tuc = f.AscDFH.hy | 6;
  f.AscDFH.nuc = f.AscDFH.hy | 7;
  f.AscDFH.muc = f.AscDFH.hy | 8;
  f.AscDFH.xSb = f.AscDFH.hy | 9;
  f.AscDFH.puc = f.AscDFH.hy | 10;
  f.AscDFH.quc = f.AscDFH.hy | 11;
  f.AscDFH.fsd = f.AscDFH.hy | 12;
  f.AscDFH.Rtc = f.AscDFH.Una | 1;
  f.AscDFH.$rd = f.AscDFH.Una | 2;
  f.AscDFH.bsd =
    f.AscDFH.Una | 3;
  f.AscDFH.asd = f.AscDFH.Una | 4;
  f.AscDFH.dsd = f.AscDFH.Una | 5;
  f.AscDFH.csd = f.AscDFH.Una | 6;
  f.AscDFH.Qtc = f.AscDFH.Una | 7;
  f.AscDFH.esd = f.AscDFH.Una | 8;
  f.AscDFH.Stc = f.AscDFH.Una | 9;
  f.AscDFH.Wvc = f.AscDFH.cMa | 1;
  f.AscDFH.Svc = f.AscDFH.cMa | 2;
  f.AscDFH.Tvc = f.AscDFH.cMa | 3;
  f.AscDFH.Uvc = f.AscDFH.cMa | 4;
  f.AscDFH.Vvc = f.AscDFH.cMa | 5;
  f.AscDFH.hsd = f.AscDFH.cMa | 6;
  f.AscDFH.nVb = f.AscDFH.rQa | 1;
  f.AscDFH.oVb = f.AscDFH.rQa | 2;
  f.AscDFH.xyc = f.AscDFH.rQa | 3;
  f.AscDFH.yyc = f.AscDFH.rQa | 4;
  f.AscDFH.irc = f.AscDFH.$B | 1;
  f.AscDFH.jrc =
    f.AscDFH.$B | 2;
  f.AscDFH.krc = f.AscDFH.$B | 3;
  f.AscDFH.lrc = f.AscDFH.$B | 4;
  f.AscDFH.mrc = f.AscDFH.$B | 5;
  f.AscDFH.nrc = f.AscDFH.$B | 6;
  f.AscDFH.orc = f.AscDFH.$B | 7;
  f.AscDFH.prc = f.AscDFH.$B | 8;
  f.AscDFH.qrc = f.AscDFH.$B | 9;
  f.AscDFH.rrc = f.AscDFH.$B | 10;
  f.AscDFH.trc = f.AscDFH.$B | 11;
  f.AscDFH.urc = f.AscDFH.$B | 12;
  f.AscDFH.vrc = f.AscDFH.$B | 13;
  f.AscDFH.wrc = f.AscDFH.$B | 14;
  f.AscDFH.xrc = f.AscDFH.$B | 15;
  f.AscDFH.yrc = f.AscDFH.$B | 16;
  f.AscDFH.zrc = f.AscDFH.$B | 17;
  f.AscDFH.Arc = f.AscDFH.$B | 18;
  f.AscDFH.Brc = f.AscDFH.$B | 19;
  f.AscDFH.Crc = f.AscDFH.$B |
    20;
  f.AscDFH.Drc = f.AscDFH.$B | 21;
  f.AscDFH.Erc = f.AscDFH.$B | 22;
  f.AscDFH.bzc = f.AscDFH.Gv | 1;
  f.AscDFH.czc = f.AscDFH.Gv | 2;
  f.AscDFH.dzc = f.AscDFH.Gv | 3;
  f.AscDFH.ezc = f.AscDFH.Gv | 4;
  f.AscDFH.fzc = f.AscDFH.Gv | 5;
  f.AscDFH.gzc = f.AscDFH.Gv | 6;
  f.AscDFH.hzc = f.AscDFH.Gv | 7;
  f.AscDFH.izc = f.AscDFH.Gv | 8;
  f.AscDFH.jzc = f.AscDFH.Gv | 9;
  f.AscDFH.kzc = f.AscDFH.Gv | 10;
  f.AscDFH.lzc = f.AscDFH.Gv | 11;
  f.AscDFH.mzc = f.AscDFH.Gv | 12;
  f.AscDFH.nzc = f.AscDFH.Gv | 13;
  f.AscDFH.ozc = f.AscDFH.Gv | 14;
  f.AscDFH.pzc = f.AscDFH.Gv | 15;
  f.AscDFH.qzc = f.AscDFH.Gv | 16;
  f.AscDFH.rzc =
    f.AscDFH.Gv | 17;
  f.AscDFH.szc = f.AscDFH.Gv | 18;
  f.AscDFH.tzc = f.AscDFH.Gv | 19;
  f.AscDFH.uzc = f.AscDFH.Gv | 20;
  f.AscDFH.f_d = f.AscDFH.ajb | 1;
  f.AscDFH.g_d = f.AscDFH.ajb | 2;
  f.AscDFH.h_d = f.AscDFH.ajb | 3;
  f.AscDFH.ctc = f.AscDFH.HA | 1;
  f.AscDFH.dtc = f.AscDFH.HA | 2;
  f.AscDFH.etc = f.AscDFH.HA | 3;
  f.AscDFH.ftc = f.AscDFH.HA | 4;
  f.AscDFH.gtc = f.AscDFH.HA | 5;
  f.AscDFH.htc = f.AscDFH.HA | 6;
  f.AscDFH.itc = f.AscDFH.HA | 7;
  f.AscDFH.jtc = f.AscDFH.HA | 8;
  f.AscDFH.ktc = f.AscDFH.HA | 9;
  f.AscDFH.uab = f.AscDFH.HA | 10;
  f.AscDFH.ltc = f.AscDFH.HA | 11;
  f.AscDFH.mtc = f.AscDFH.HA |
    12;
  f.AscDFH.ntc = f.AscDFH.HA | 13;
  f.AscDFH.bmg = f.AscDFH.HA | 14;
  f.AscDFH.otc = f.AscDFH.HA | 15;
  f.AscDFH.ptc = f.AscDFH.HA | 16;
  f.AscDFH.qtc = f.AscDFH.HA | 17;
  f.AscDFH.rtc = f.AscDFH.HA | 18;
  f.AscDFH.stc = f.AscDFH.HA | 19;
  f.AscDFH.ttc = f.AscDFH.HA | 20;
  f.AscDFH.utc = f.AscDFH.HA | 21;
  f.AscDFH.vtc = f.AscDFH.HA | 22;
  f.AscDFH.wtc = f.AscDFH.HA | 23;
  f.AscDFH.nxc = f.AscDFH.qP | 1;
  f.AscDFH.oxc = f.AscDFH.qP | 2;
  f.AscDFH.pxc = f.AscDFH.qP | 3;
  f.AscDFH.qxc = f.AscDFH.qP | 4;
  f.AscDFH.rxc = f.AscDFH.qP | 5;
  f.AscDFH.sxc = f.AscDFH.qP | 6;
  f.AscDFH.txc = f.AscDFH.qP | 7;
  f.AscDFH.uxc =
    f.AscDFH.qP | 8;
  f.AscDFH.vxc = f.AscDFH.qP | 9;
  f.AscDFH.wxc = f.AscDFH.qP | 10;
  f.AscDFH.xxc = f.AscDFH.qP | 11;
  f.AscDFH.yxc = f.AscDFH.qP | 12;
  f.AscDFH.zxc = f.AscDFH.qP | 13;
  f.AscDFH.Axc = f.AscDFH.qP | 14;
  f.AscDFH.Bxc = f.AscDFH.qP | 15;
  f.AscDFH.Cxc = f.AscDFH.qP | 16;
  f.AscDFH.Dxc = f.AscDFH.qP | 17;
  f.AscDFH.Exc = f.AscDFH.qP | 18;
  f.AscDFH.Fyc = f.AscDFH.dla | 1;
  f.AscDFH.Gyc = f.AscDFH.dla | 2;
  f.AscDFH.Hyc = f.AscDFH.dla | 3;
  f.AscDFH.Iyc = f.AscDFH.dla | 4;
  f.AscDFH.Jyc = f.AscDFH.dla | 5;
  f.AscDFH.Sbf = f.AscDFH.KS | 1;
  f.AscDFH.Vbf = f.AscDFH.KS | 2;
  f.AscDFH.Xbf = f.AscDFH.KS |
    3;
  f.AscDFH.Wbf = f.AscDFH.KS | 4;
  f.AscDFH.ZZd = f.AscDFH.KS | 5;
  f.AscDFH.Ubf = f.AscDFH.KS | 6;
  f.AscDFH.b_d = f.AscDFH.KS | 7;
  f.AscDFH.a_d = f.AscDFH.KS | 8;
  f.AscDFH.pLd = f.AscDFH.KS | 9;
  f.AscDFH.$Zd = f.AscDFH.KS | 10;
  f.AscDFH.jsd = f.AscDFH.KS | 11;
  f.AscDFH.AQc = f.AscDFH.KS | 12;
  f.AscDFH.Qbf = f.AscDFH.KS | 13;
  f.AscDFH.Rbf = f.AscDFH.KS | 14;
  f.AscDFH.Tbf = f.AscDFH.KS | 15;
  f.AscDFH.Ebf = f.AscDFH.mea | 1;
  f.AscDFH.Fbf = f.AscDFH.mea | 2;
  f.AscDFH.Jbf = f.AscDFH.mea | 3;
  f.AscDFH.UZd = f.AscDFH.mea | 4;
  f.AscDFH.Cbf = f.AscDFH.mea | 5;
  f.AscDFH.Gbf = f.AscDFH.mea | 6;
  f.AscDFH.Ibf =
    f.AscDFH.mea | 7;
  f.AscDFH.Hbf = f.AscDFH.mea | 8;
  f.AscDFH.Dbf = f.AscDFH.mea | 9;
  f.AscDFH.Bbf = f.AscDFH.mea | 10;
  f.AscDFH.VZd = f.AscDFH.mea | 11;
  f.AscDFH.Lbf = f.AscDFH.Zna | 1;
  f.AscDFH.Obf = f.AscDFH.Zna | 2;
  f.AscDFH.WZd = f.AscDFH.Zna | 3;
  f.AscDFH.YZd = f.AscDFH.Zna | 4;
  f.AscDFH.Mbf = f.AscDFH.Zna | 5;
  f.AscDFH.Nbf = f.AscDFH.Zna | 6;
  f.AscDFH.Kbf = f.AscDFH.Zna | 7;
  f.AscDFH.Pbf = f.AscDFH.Zna | 8;
  f.AscDFH.XZd = f.AscDFH.Zna | 9;
  f.AscDFH.zbf = f.AscDFH.K1b | 1;
  f.AscDFH.Abf = f.AscDFH.K1b | 2;
  f.AscDFH.tbf = f.AscDFH.jKc | 1;
  f.AscDFH.Gub = f.AscDFH.Pia | 1;
  f.AscDFH.qVb =
    f.AscDFH.Pia | 2;
  f.AscDFH.pVb = f.AscDFH.Pia | 3;
  f.AscDFH.Cyc = f.AscDFH.Pia | 4;
  f.AscDFH.Ayc = f.AscDFH.Pia | 5;
  f.AscDFH.Dyc = f.AscDFH.Pia | 6;
  f.AscDFH.Byc = f.AscDFH.Pia | 7;
  f.AscDFH.Eyc = f.AscDFH.Pia | 8;
  f.AscDFH.zyc = f.AscDFH.Pia | 9;
  f.AscDFH.Wtc = f.AscDFH.gy | 1;
  f.AscDFH.Ttc = f.AscDFH.gy | 2;
  f.AscDFH.Vtc = f.AscDFH.gy | 3;
  f.AscDFH.rSb = f.AscDFH.gy | 4;
  f.AscDFH.Utc = f.AscDFH.gy | 5;
  f.AscDFH.fyc = f.AscDFH.oE | 1;
  f.AscDFH.Xxc = f.AscDFH.oE | 2;
  f.AscDFH.Qxc = f.AscDFH.oE | 3;
  f.AscDFH.ayc = f.AscDFH.oE | 4;
  f.AscDFH.Vxc = f.AscDFH.oE | 5;
  f.AscDFH.Yxc = f.AscDFH.oE |
    6;
  f.AscDFH.Uxc = f.AscDFH.oE | 7;
  f.AscDFH.Wxc = f.AscDFH.oE | 8;
  f.AscDFH.dyc = f.AscDFH.oE | 9;
  f.AscDFH.Sxc = f.AscDFH.oE | 10;
  f.AscDFH.Rxc = f.AscDFH.oE | 11;
  f.AscDFH.cyc = f.AscDFH.oE | 12;
  f.AscDFH.byc = f.AscDFH.oE | 13;
  f.AscDFH.eyc = f.AscDFH.oE | 14;
  f.AscDFH.Zxc = f.AscDFH.oE | 15;
  f.AscDFH.$xc = f.AscDFH.oE | 16;
  f.AscDFH.Pxc = f.AscDFH.oE | 17;
  f.AscDFH.Oxc = f.AscDFH.oE | 18;
  f.AscDFH.Nxc = f.AscDFH.oE | 19;
  f.AscDFH.Ixc = f.AscDFH.oE | 20;
  f.AscDFH.Mxc = f.AscDFH.oE | 21;
  f.AscDFH.Jxc = f.AscDFH.oE | 22;
  f.AscDFH.gyc = f.AscDFH.oE | 23;
  f.AscDFH.Kxc = f.AscDFH.oE | 24;
  f.AscDFH.Lxc = f.AscDFH.oE | 25;
  f.AscDFH.Txc = f.AscDFH.oE | 26;
  f.AscDFH.ksd = f.AscDFH.oE | 27;
  f.AscDFH.lsd = f.AscDFH.oE | 28;
  f.AscDFH.msd = f.AscDFH.oE | 29;
  f.AscDFH.sBf = f.AscDFH.CQc | 1;
  f.AscDFH.abf = f.AscDFH.gya | 1;
  f.AscDFH.PZd = f.AscDFH.gya | 2;
  f.AscDFH.cbf = f.AscDFH.gya | 3;
  f.AscDFH.Zaf = f.AscDFH.gya | 4;
  f.AscDFH.$af = f.AscDFH.gya | 5;
  f.AscDFH.OZd = f.AscDFH.gya | 6;
  f.AscDFH.rBf = f.AscDFH.gya | 7;
  f.AscDFH.bbf = f.AscDFH.gya | 8;
  f.AscDFH.ebf = f.AscDFH.iba | 1;
  f.AscDFH.hbf = f.AscDFH.iba | 2;
  f.AscDFH.ibf = f.AscDFH.iba | 3;
  f.AscDFH.Yaf = f.AscDFH.iba |
    4;
  f.AscDFH.dbf = f.AscDFH.iba | 5;
  f.AscDFH.QZd = f.AscDFH.iba | 6;
  f.AscDFH.fbf = f.AscDFH.iba | 7;
  f.AscDFH.jbf = f.AscDFH.iba | 8;
  f.AscDFH.gbf = f.AscDFH.iba | 9;
  f.AscDFH.pbf = f.AscDFH.bEb | 1;
  f.AscDFH.tBf = f.AscDFH.bEb | 2;
  f.AscDFH.uBf = f.AscDFH.bEb | 3;
  f.AscDFH.Qwc = f.AscDFH.iGa | 1;
  f.AscDFH.Rwc = f.AscDFH.iGa | 2;
  f.AscDFH.Uwc = f.AscDFH.iGa | 3;
  f.AscDFH.Vwc = f.AscDFH.iGa | 4;
  f.AscDFH.Swc = f.AscDFH.iGa | 5;
  f.AscDFH.Twc = f.AscDFH.iGa | 6;
  f.AscDFH.$pc = f.AscDFH.fya | 1;
  f.AscDFH.aqc = f.AscDFH.fya | 2;
  f.AscDFH.Ypc = f.AscDFH.fya | 3;
  f.AscDFH.Zpc = f.AscDFH.fya |
    4;
  f.AscDFH.bqc = f.AscDFH.fya | 5;
  f.AscDFH.cqc = f.AscDFH.fya | 6;
  f.AscDFH.QRb = f.Asc.Ozc | 1;
  f.AscDFH.Yrd = f.AscDFH.wsd | 1;
  f.AscDFH.CWd = 1;
  f.AscDFH.vaf = 2;
  f.AscDFH.waf = 3;
  f.AscDFH.pqd = 4;
  f.AscDFH.qqd = 5;
  f.AscDFH.rqd = 6;
  f.AscDFH.$Jc = 7;
  f.AscDFH.baf = 8;
  f.AscDFH.xKd = 9;
  f.AscDFH.caf = 10;
  f.AscDFH.xaf = 11;
  f.AscDFH.pXd = 12;
  f.AscDFH.IKd = 13;
  f.AscDFH.XWd = 14;
  f.AscDFH.GWd = 15;
  f.AscDFH.gXd = 16;
  f.AscDFH.xQc = 17;
  f.AscDFH.Rqd = 18;
  f.AscDFH.yqd = 19;
  f.AscDFH.wqd = 20;
  f.AscDFH.brd = 21;
  f.AscDFH.ard = 22;
  f.AscDFH.erd = 23;
  f.AscDFH.frd = 24;
  f.AscDFH.yrd = 25;
  f.AscDFH.PWd = 26;
  f.AscDFH.hXd = 27;
  f.AscDFH.tXd = 28;
  f.AscDFH.dXd = 29;
  f.AscDFH.GXd = 30;
  f.AscDFH.EXd = 31;
  f.AscDFH.FXd = 32;
  f.AscDFH.sXd = 33;
  f.AscDFH.aXd = 34;
  f.AscDFH.bXd = 35;
  f.AscDFH.lXd = 36;
  f.AscDFH.kXd = 37;
  f.AscDFH.jXd = 38;
  f.AscDFH.oXd = 39;
  f.AscDFH.nXd = 40;
  f.AscDFH.iXd = 41;
  f.AscDFH.FKd = 42;
  f.AscDFH.mXd = 43;
  f.AscDFH.Ppc = 44;
  f.AscDFH.JXd = 45;
  f.AscDFH.IXd = 46;
  f.AscDFH.KXd = 47;
  f.AscDFH.nYd = 48;
  f.AscDFH.pYd = 49;
  f.AscDFH.jYd = 50;
  f.AscDFH.sYd = 51;
  f.AscDFH.xYd = 52;
  f.AscDFH.wYd = 53;
  f.AscDFH.mYd = 54;
  f.AscDFH.vYd = 55;
  f.AscDFH.kYd = 56;
  f.AscDFH.uYd =
    57;
  f.AscDFH.tYd = 58;
  f.AscDFH.PKd = 59;
  f.AscDFH.aYd = 60;
  f.AscDFH.bYd = 61;
  f.AscDFH.qXd = 62;
  f.AscDFH.fXd = 63;
  f.AscDFH.UXd = 64;
  f.AscDFH.fYd = 65;
  f.AscDFH.TXd = 66;
  f.AscDFH.yYd = 67;
  f.AscDFH.cYd = 68;
  f.AscDFH.hYd = 69;
  f.AscDFH.eYd = 70;
  f.AscDFH.iYd = 71;
  f.AscDFH.ZXd = 72;
  f.AscDFH.$Xd = 73;
  f.AscDFH.VXd = 74;
  f.AscDFH.rYd = 75;
  f.AscDFH.qYd = 76;
  f.AscDFH.lYd = 77;
  f.AscDFH.gYd = 78;
  f.AscDFH.WXd = 79;
  f.AscDFH.Vqd = 80;
  f.AscDFH.Pqd = 81;
  f.AscDFH.YXd = 82;
  f.AscDFH.XXd = 83;
  f.AscDFH.RXd = 84;
  f.AscDFH.SXd = 85;
  f.AscDFH.AKd = 86;
  f.AscDFH.SWd = 87;
  f.AscDFH.RWd = 88;
  f.AscDFH.NXd =
    89;
  f.AscDFH.PXd = 90;
  f.AscDFH.OXd = 91;
  f.AscDFH.QXd = 92;
  f.AscDFH.TWd = 93;
  f.AscDFH.CYd = 94;
  f.AscDFH.DYd = 95;
  f.AscDFH.AYd = 96;
  f.AscDFH.BYd = 97;
  f.AscDFH.FYd = 98;
  f.AscDFH.EYd = 99;
  f.AscDFH.DXd = 100;
  f.AscDFH.rXd = 101;
  f.AscDFH.zYd = 102;
  f.AscDFH.WWd = 103;
  f.AscDFH.LWd = 104;
  f.AscDFH.MWd = 105;
  f.AscDFH.KWd = 106;
  f.AscDFH.UWd = 107;
  f.AscDFH.VWd = 108;
  f.AscDFH.gaf = 109;
  f.AscDFH.haf = 110;
  f.AscDFH.Iqd = 111;
  f.AscDFH.IWd = 112;
  f.AscDFH.ZWd = 113;
  f.AscDFH.BXd = 114;
  f.AscDFH.HKd = 115;
  f.AscDFH.HWd = 116;
  f.AscDFH.xXd = 117;
  f.AscDFH.YWd = 118;
  f.AscDFH.oYd = 119;
  f.AscDFH.JWd = 120;
  f.AscDFH.cXd = 121;
  f.AscDFH.BKd = 122;
  f.AscDFH.zKd = 123;
  f.AscDFH.NKd = 124;
  f.AscDFH.MKd = 125;
  f.AscDFH.JKd = 126;
  f.AscDFH.Spc = 127;
  f.AscDFH.KKd = 128;
  f.AscDFH.LKd = 129;
  f.AscDFH.OKd = 130;
  f.AscDFH.Sqd = 131;
  f.AscDFH.uqd = 132;
  f.AscDFH.mRb = 133;
  f.AscDFH.rrd = 134;
  f.AscDFH.wQc = 135;
  f.AscDFH.Zqd = 136;
  f.AscDFH.Dqd = 137;
  f.AscDFH.yQc = 138;
  f.AscDFH.Tpc = 139;
  f.AscDFH.taf = 140;
  f.AscDFH.uaf = 141;
  f.AscDFH.Qqd = 142;
  f.AscDFH.saf = 143;
  f.AscDFH.nrd = 144;
  f.AscDFH.ord = 145;
  f.AscDFH.prd = 146;
  f.AscDFH.urd = 147;
  f.AscDFH.qrd = 148;
  f.AscDFH.G1b =
    149;
  f.AscDFH.vqd = 150;
  f.AscDFH.trd = 151;
  f.AscDFH.oaf = 152;
  f.AscDFH.lrd = 153;
  f.AscDFH.paf = 154;
  f.AscDFH.Cqd = 155;
  f.AscDFH.qaf = 156;
  f.AscDFH.vrd = 157;
  f.AscDFH.Tqd = 158;
  f.AscDFH.lRb = 159;
  f.AscDFH.maf = 160;
  f.AscDFH.kaf = 161;
  f.AscDFH.raf = 162;
  f.AscDFH.Aqd = 163;
  f.AscDFH.wrd = 164;
  f.AscDFH.Wqd = 165;
  f.AscDFH.xrd = 166;
  f.AscDFH.zqd = 167;
  f.AscDFH.$qd = 168;
  f.AscDFH.Uqd = 169;
  f.AscDFH.srd = 170;
  f.AscDFH.Hqd = 171;
  f.AscDFH.OWd = 172;
  f.AscDFH.Yqd = 173;
  f.AscDFH.Xqd = 174;
  f.AscDFH.hrd = 175;
  f.AscDFH.Xpc = 176;
  f.AscDFH.Jrd = 177;
  f.AscDFH.Hrd = 178;
  f.AscDFH.Ord =
    179;
  f.AscDFH.Trd = 180;
  f.AscDFH.Prd = 181;
  f.AscDFH.Qrd = 182;
  f.AscDFH.Rrd = 183;
  f.AscDFH.Frd = 184;
  f.AscDFH.qtb = 185;
  f.AscDFH.Srd = 186;
  f.AscDFH.Grd = 187;
  f.AscDFH.Nrd = 188;
  f.AscDFH.Ird = 189;
  f.AscDFH.Krd = 190;
  f.AscDFH.Lrd = 191;
  f.AscDFH.Mrd = 192;
  f.AscDFH.Crd = 193;
  f.AscDFH.Wpc = 194;
  f.AscDFH.Brd = 195;
  f.AscDFH.Upc = 196;
  f.AscDFH.TKd = 197;
  f.AscDFH.Ard = 198;
  f.AscDFH.Erd = 199;
  f.AscDFH.Vrd = 200;
  f.AscDFH.Urd = 201;
  f.AscDFH.Drd = 202;
  f.AscDFH.ptb = 203;
  f.AscDFH.UKd = 204;
  f.AscDFH.Vpc = 205;
  f.AscDFH.vKd = 206;
  f.AscDFH.uQc = 207;
  f.AscDFH.wKd = 208;
  f.AscDFH.oZd =
    209;
  f.AscDFH.pZd = 210;
  f.AscDFH.LYd = 211;
  f.AscDFH.aZd = 212;
  f.AscDFH.LZd = 213;
  f.AscDFH.GYd = 214;
  f.AscDFH.eZd = 215;
  f.AscDFH.Fqa = 216;
  f.AscDFH.qZd = 217;
  f.AscDFH.CZd = 218;
  f.AscDFH.EZd = 219;
  f.AscDFH.FZd = 220;
  f.AscDFH.DZd = 221;
  f.AscDFH.zQc = 222;
  f.AscDFH.rZd = 223;
  f.AscDFH.sZd = 224;
  f.AscDFH.BZd = 225;
  f.AscDFH.GZd = 226;
  f.AscDFH.$Yd = 227;
  f.AscDFH.XYd = 228;
  f.AscDFH.HZd = 229;
  f.AscDFH.fZd = 230;
  f.AscDFH.gZd = 231;
  f.AscDFH.hZd = 232;
  f.AscDFH.cZd = 233;
  f.AscDFH.dZd = 234;
  f.AscDFH.SYd = 235;
  f.AscDFH.RYd = 236;
  f.AscDFH.AZd = 237;
  f.AscDFH.QYd = 239;
  f.AscDFH.PYd =
    240;
  f.AscDFH.mZd = 241;
  f.AscDFH.kZd = 242;
  f.AscDFH.lZd = 243;
  f.AscDFH.nZd = 244;
  f.AscDFH.jZd = 245;
  f.AscDFH.Qaf = 246;
  f.AscDFH.RKd = 247;
  f.AscDFH.KYd = 248;
  f.AscDFH.TYd = 249;
  f.AscDFH.MYd = 250;
  f.AscDFH.IZd = 251;
  f.AscDFH.bZd = 252;
  f.AscDFH.WYd = 253;
  f.AscDFH.YYd = 254;
  f.AscDFH.UYd = 255;
  f.AscDFH.JYd = 256;
  f.AscDFH.VYd = 257;
  f.AscDFH.Haf = 258;
  f.AscDFH.Iaf = 259;
  f.AscDFH.Faf = 260;
  f.AscDFH.Kaf = 261;
  f.AscDFH.Paf = 262;
  f.AscDFH.Oaf = 263;
  f.AscDFH.Laf = 264;
  f.AscDFH.Naf = 265;
  f.AscDFH.Jaf = 266;
  f.AscDFH.Gaf = 267;
  f.AscDFH.wZd = 268;
  f.AscDFH.Eaf = 269;
  f.AscDFH.Maf =
    270;
  f.AscDFH.Caf = 271;
  f.AscDFH.Daf = 271;
  f.AscDFH.uZd = 271;
  f.AscDFH.vZd = 271;
  f.AscDFH.tZd = 271;
  f.AscDFH.yaf = 271;
  f.AscDFH.NYd = 272;
  f.AscDFH.OYd = 273;
  f.AscDFH.HYd = 274;
  f.AscDFH.IYd = 275;
  f.AscDFH.yZd = 276;
  f.AscDFH.xZd = 277;
  f.AscDFH.zZd = 278;
  f.AscDFH.iZd = 279;
  f.AscDFH.JZd = 280;
  f.AscDFH.KZd = 281;
  f.AscDFH.SKd = 282;
  f.AscDFH.zaf = 283;
  f.AscDFH.ZYd = 284;
  f.AscDFH.Raf = 285;
  f.AscDFH.Saf = 286;
  f.AscDFH.Aaf = 287;
  f.AscDFH.Baf = 288;
  f.AscDFH.Oqd = 289;
  f.AscDFH.SYf = 290;
  f.AscDFH.QWd = 291;
  f.AscDFH.CXd = 292;
  f.AscDFH.CKd = 293;
  f.AscDFH.wXd = 294;
  f.AscDFH.DWd =
    295;
  f.AscDFH.uXd = 296;
  f.AscDFH.EWd = 297;
  f.AscDFH.vXd = 298;
  f.AscDFH.yKd = 299;
  f.AscDFH.naf = 300;
  f.AscDFH.vQc = 301;
  f.AscDFH.PYf = 302;
  f.AscDFH.ird = 303;
  f.AscDFH.Rpc = 304;
  f.AscDFH.daf = 305;
  f.AscDFH.mrd = 306;
  f.AscDFH.Eqd = 307;
  f.AscDFH.krd = 308;
  f.AscDFH.iaf = 309;
  f.AscDFH.aKc = 310;
  f.AscDFH.eaf = 311;
  f.AscDFH.laf = 312;
  f.AscDFH.Cgb = 313;
  f.AscDFH.pab = 314;
  f.AscDFH.Bqd = 315;
  f.AscDFH.xqd = 316;
  f.AscDFH.jrd = 317;
  f.AscDFH.crd = 318;
  f.AscDFH.GKd = 319;
  f.AscDFH.rAf = 320;
  f.AscDFH.FWd = 321;
  f.AscDFH.NWd = 322;
  f.AscDFH.zXd = 323;
  f.AscDFH.AXd = 324;
  f.AscDFH.DKd =
    325;
  f.AscDFH.QYf = 326;
  f.AscDFH.Npc = 327;
  f.AscDFH.tqd = 328;
  f.AscDFH.Gqd = 329;
  f.AscDFH.Lqd = 330;
  f.AscDFH.Opc = 331;
  f.AscDFH.grd = 332;
  f.AscDFH.yXd = 333;
  f.AscDFH.bKc = 334;
  f.AscDFH.QKd = 335;
  f.AscDFH.HXd = 336;
  f.AscDFH.EKd = 337;
  f.AscDFH.drd = 338;
  f.AscDFH.Nqd = 339;
  f.AscDFH.Qpc = 340;
  f.AscDFH.Kqd = 341;
  f.AscDFH.eXd = 342;
  f.AscDFH.$Wd = 343;
  f.AscDFH.Jqd = 344;
  f.AscDFH.jaf = 345;
  f.AscDFH.LXd = 346;
  f.AscDFH.MXd = 347;
  f.AscDFH.zrd = 348;
  f.AscDFH.sqd = 349;
  f.AscDFH.Fqd = 350;
  f.AscDFH.Mqd = 350;
  f.AscDFH.sAf = 351;
  f.AscDFH.faf = 352;
  f.AscDFH.RYf = 353;
  f.AscDFH.OYf =
    354;
  f.AscDFH.dYd = 355;
  f.AscDFH.Ca = {};
  f.AscDFH.Ca[f.AscDFH.qsd] = Pa;
  f.AscDFH.Dc = {};
  Pa.prototype.ka = f.AscDFH.qsd;
  Pa.prototype.Ll = function () {
    this.Oa && this.Oa.Ll && this.Oa.Ll(this);
  };
  Pa.prototype.Yg = function () {
    this.Oa && this.Oa.Yg && this.Oa.Yg(this);
  };
  Pa.prototype.Ie = function () {
  };
  Pa.prototype.te = function () {
  };
  Pa.prototype.Wg = function () {
    this.Yg();
  };
  Pa.prototype.hS = function () {
    this.Oa && this.Oa.nf && this.Oa.nf(this);
  };
  Pa.prototype.SSa = function () {
    return !1;
  };
  Pa.prototype.Mm = function () {
    return null;
  };
  Pa.prototype.Ec = function () {
    return !0;
  };
  Pa.prototype.DHc = function () {
    return !1;
  };
  Pa.prototype.n$c = function (e) {
    this.Aec = e;
  };
  Pa.prototype.tza = function () {
    return !1;
  };
  Pa.prototype.Afb = function () {
    return !0;
  };
  f.AscDFH.nm = Pa;
  ab.prototype = Object.create(Pa.prototype);
  ab.prototype.constructor = ab;
  ab.prototype.SSa = function () {
    return !0;
  };
  ab.prototype.gEa = function () {
    return this.ma;
  };
  ab.prototype.Wa = function () {
    var e = new this.constructor(this.Oa, this.Ua, this.xd, this.ma);
    e.xz = this.xz;
    for (var f = 0, Ia = this.xm.length; f < Ia; ++f) e.xm[f] = this.xm[f];
    return e;
  };
  ab.prototype.dFd =
    function () {
      return this.xd.length;
    };
  ab.prototype.Ie = function (f) {
    var Da = this.xz, Ia = this.xd.length, Ha = f.wa;
    f.ym(4);
    for (var Va = Ia, Za = 0; Za < Ia; ++Za) !0 === Da ? !1 === this.xm[Za] ? Va-- : (f.eb(this.xm[Za]), this.pL(f, this.xd[Za])) : (f.eb(this.Ua), this.pL(f, this.xd[Za]));
    Da = f.wa;
    f.ck(Ha);
    f.eb(Va);
    f.ck(Da);
    Ha = 0;
    e !== this.Aa && (Ha |= 1, !0 === this.Aa && (Ha |= 2));
    f.eb(Ha);
  };
  ab.prototype.te = function (e) {
    this.xz = !0;
    this.xd = [];
    this.xm = [];
    for (var f = e.ob(), Ia = 0; Ia < f; ++Ia) this.xm[Ia] = e.ob(), this.xd[Ia] = this.RM(e);
    e = e.ob();
    e & 1 && (this.Aa =
      e & 2 ? !0 : !1);
  };
  ab.prototype.pL = function () {
  };
  ab.prototype.RM = function () {
    return null;
  };
  ab.prototype.SGc = function () {
    var e = [];
    if (this.xz) for (var f = 0, Ia = this.xd.length; f < Ia; ++f) e.push({
      F9: this.xd[f],
      Ua: this.xm[f],
      ma: this.ma
    }); else {
      var Da = this.Ua;
      f = 0;
      for (Ia = this.xd.length; f < Ia; ++f) e.push({ F9: this.xd[f], Ua: Da + f, ma: this.ma });
    }
    return e;
  };
  ab.prototype.QGc = function (e) {
    this.xz = !0;
    this.Ua = 0;
    this.xd = [];
    this.xm = [];
    for (var f = 0, Ia = e.length; f < Ia; ++f) this.xm[f] = e[f].Ua, this.xd[f] = e[f].F9;
  };
  ab.prototype.sR = function (e) {
    return this.Oa !==
    e.Oa || this.ka !== e.ka ? !1 : !0;
  };
  ab.prototype.AR = function (e) {
    e = new e;
    e.Oa = this.Oa;
    e.Ua = this.Ua;
    e.xd = this.xd;
    e.ma = !this.ma;
    e.xz = this.xz;
    e.xm = [];
    for (var f = 0, Ia = this.xm.length; f < Ia; ++f) e.xm[f] = this.xm[f];
    return e;
  };
  ab.prototype.Ec = function () {
    return !0;
  };
  ab.prototype.gFd = function () {
    var e = null;
    if (this.xz) {
      for (var f = 0, Ia = this.xm.length; f < Ia; ++f) if (null === e || e > this.xm[f]) e = this.xm[f];
      null === e && (e = 0);
    } else e = this.Ua;
    return e;
  };
  f.AscDFH.Su = ab;
  bb.prototype = Object.create(Pa.prototype);
  bb.prototype.constructor = bb;
  bb.prototype.Ll =
    function () {
      this.Sc(this.vb);
    };
  bb.prototype.Yg = function () {
    this.Sc(this.Ia);
  };
  bb.prototype.Sc = function () {
  };
  bb.prototype.Mm = function () {
    return new this.constructor(this.Oa, this.Ia, this.vb, this.Aa);
  };
  bb.prototype.Ec = function (e) {
    return e.Oa === this.Oa && e.ka === this.ka ? (this.Ia = e.Ia, !1) : !0;
  };
  f.AscDFH.Ig = bb;
  nb.prototype = Object.create(bb.prototype);
  nb.prototype.constructor = nb;
  nb.prototype.Ie = function (f) {
    var Da = 0;
    !1 !== this.Aa && (Da |= 1);
    e === this.Ia ? Da |= 2 : !0 === this.Ia && (Da |= 4);
    e === this.vb ? Da |= 8 : !0 === this.vb && (Da |= 16);
    f.eb(Da);
  };
  nb.prototype.te = function (f) {
    f = f.ob();
    this.Aa = f & 1 ? !0 : !1;
    this.Ia = f & 2 ? e : f & 4 ? !0 : !1;
    this.vb = f & 8 ? e : f & 16 ? !0 : !1;
  };
  f.AscDFH.Zk = nb;
  Da.prototype = Object.create(bb.prototype);
  Da.prototype.constructor = Da;
  Da.prototype.Ie = function (f) {
    var Da = 0;
    !1 !== this.Aa && (Da |= 1);
    e === this.Ia && (Da |= 2);
    e === this.vb && (Da |= 4);
    f.eb(Da);
    e !== this.Ia && f.Se(this.Ia);
    e !== this.vb && f.Se(this.vb);
  };
  Da.prototype.te = function (f) {
    var Da = f.ob();
    this.Aa = Da & 1 ? !0 : !1;
    this.Ia = Da & 2 ? e : f.eg();
    this.vb = Da & 4 ? e : f.eg();
  };
  f.AscDFH.eB = Da;
  Ha.prototype = Object.create(bb.prototype);
  Ha.prototype.constructor = Ha;
  Ha.prototype.Ie = function (f) {
    var Da = 0;
    !1 !== this.Aa && (Da |= 1);
    e === this.Ia && (Da |= 2);
    e === this.vb && (Da |= 4);
    f.eb(Da);
    e !== this.Ia && this.Ia.zc && this.Ia.zc(f);
    e !== this.vb && this.vb.zc && this.vb.zc(f);
  };
  Ha.prototype.te = function (f) {
    var Da = f.ob();
    this.Aa = Da & 1 ? !0 : !1;
    Da & 2 ? this.Ia = !0 === this.mba() ? this.xl() : e : (this.Ia = this.xl()) && this.Ia.yc && this.Ia.yc(f);
    Da & 4 ? this.vb = !0 === this.mba() ? this.xl() : e : (this.vb = this.xl()) && this.vb.yc && this.vb.yc(f);
  };
  Ha.prototype.xl = function () {
    return null;
  };
  Ha.prototype.mba =
    function () {
      return !1;
    };
  f.AscDFH.yj = Ha;
  Eb.prototype = Object.create(bb.prototype);
  Eb.prototype.constructor = Eb;
  Eb.prototype.Ie = function (f) {
    var Da = 0;
    !1 !== this.Aa && (Da |= 1);
    e === this.Ia && (Da |= 2);
    e === this.vb && (Da |= 4);
    f.eb(Da);
    e !== this.Ia && f.eb(this.Ia);
    e !== this.vb && f.eb(this.vb);
  };
  Eb.prototype.te = function (f) {
    var Da = f.ob();
    this.Aa = Da & 1 ? !0 : !1;
    this.Ia = Da & 2 ? e : f.ob();
    this.vb = Da & 4 ? e : f.ob();
  };
  f.AscDFH.oj = Eb;
  zb.prototype = Object.create(bb.prototype);
  zb.prototype.constructor = zb;
  zb.prototype.Ie = function (f) {
    var Da = 0;
    !1 !==
    this.Aa && (Da |= 1);
    e === this.Ia && (Da |= 2);
    e === this.vb && (Da |= 4);
    f.eb(Da);
    e !== this.Ia && f.Wb(this.Ia);
    e !== this.vb && f.Wb(this.vb);
  };
  zb.prototype.te = function (f) {
    var Da = f.ob();
    this.Aa = Da & 1 ? !0 : !1;
    this.Ia = Da & 2 ? e : f.ic();
    this.vb = Da & 4 ? e : f.ic();
  };
  f.AscDFH.pD = zb;
  Va.prototype = Object.create(bb.prototype);
  Va.prototype.constructor = Va;
  Va.prototype.Ie = function (f) {
    var Da = 0;
    !1 !== this.Aa && (Da |= 1);
    e === this.Ia && (Da |= 2);
    e === this.vb && (Da |= 4);
    f.eb(Da);
    e !== this.Ia && f.va(this.Ia);
    e !== this.vb && f.va(this.vb);
  };
  Va.prototype.te = function (f) {
    var Da =
      f.ob();
    this.Aa = Da & 1 ? !0 : !1;
    this.Ia = Da & 2 ? e : f.tD();
    this.vb = Da & 4 ? e : f.tD();
  };
  f.AscDFH.vUc = Va;
  gb.prototype = Object.create(bb.prototype);
  gb.prototype.constructor = gb;
  gb.prototype.Ie = function (e) {
    e.eb(this.Ia);
    e.eb(this.vb);
  };
  gb.prototype.te = function (e) {
    this.Ia = e.ob();
    this.vb = e.ob();
  };
  f.AscDFH.uga = gb;
  Za.prototype = Object.create(bb.prototype);
  Za.prototype.constructor = Za;
  Za.prototype.Ie = function (e) {
    e.Ib(this.Ia);
    e.Ib(this.vb);
  };
  Za.prototype.te = function (e) {
    this.Ia = e.ub();
    this.vb = e.ub();
  };
  f.AscDFH.ZX = Za;
  bc.prototype =
    Object.create(Ha.prototype);
  bc.prototype.constructor = bc;
  bc.prototype.mba = function () {
    return !0;
  };
  f.AscDFH.hw = bc;
  Nc.prototype = Object.create(bb.prototype);
  Nc.prototype.constructor = Nc;
  Nc.prototype.Ie = function (e) {
    e.Wb(this.Ia);
    e.Wb(this.vb);
  };
  Nc.prototype.te = function (e) {
    this.Ia = e.ic();
    this.vb = e.ic();
  };
  f.AscDFH.H4a = Nc;
  cc.prototype = Object.create(bb.prototype);
  cc.prototype.constructor = cc;
  cc.prototype.Ie = function (e) {
    e.va(this.Ia);
    e.va(this.vb);
  };
  cc.prototype.te = function (e) {
    this.Ia = e.tD();
    this.vb = e.tD();
  };
  f.AscDFH.nra =
    cc;
  Rb.prototype = Object.create(bb.prototype);
  Rb.prototype.constructor = Rb;
  Rb.prototype.Ie = function (e) {
    e.Se(this.Ia);
    e.Se(this.vb);
  };
  Rb.prototype.te = function (e) {
    this.Ia = e.eg();
    this.vb = e.eg();
  };
  f.AscDFH.G4a = Rb;
})(window);
'use strict';
(function (f) {
  function e() {
    this.VYa = null;
    this.AF = !1;
    this.Tf = {};
    this.Ja = null;
    this.K5 = !1;
  }

  e.prototype.se = function () {
    this.VYa = {};
    this.AF = !1;
    this.Tf = {};
    this.Ja = AscCommon.kg.lg();
    this.ma(this, this.Ja);
    this.Fif();
    this.K5 = !0;
  };
  e.prototype.ma = function (e, f) {
    !1 === this.AF && (e.Ja = f, this.VYa[f] = e, AscCommon.History.ma(new AscCommon.yUc(this, f, e)));
  };
  e.prototype.Sv = function () {
    this.AF = !0;
  };
  e.prototype.Gt = function () {
    this.AF = !1;
  };
  e.prototype.Zf = function (e) {
    return '' === e ? null : this.VYa[e] ? this.VYa[e] : null;
  };
  e.prototype.sb = function () {
    return this.Ja;
  };
  e.prototype.Oi = function () {
    this.VYa = {};
    this.AF = !1;
    this.Ja = AscCommon.kg.lg();
    this.ma(this, this.Ja);
  };
  e.prototype.Fif = function () {
    this.Tf[AscDFH.Lx] = AscCommonWord.bb;
    this.Tf[AscDFH.rE] = AscCommonWord.rM;
    this.Tf[AscDFH.uYa] = AscCommonWord.Nke;
    this.Tf[AscDFH.YQ] = AscCommonWord.V1;
    this.Tf[AscDFH.qE] = AscCommonWord.f3b;
    this.Tf[AscDFH.Oia] = AscCommonWord.dVc;
    this.Tf[AscDFH.D0] = AscCommonWord.G6d;
    this.Tf[AscDFH.AVb] = AscCommonWord.Z7b;
    this.Tf[AscDFH.zsd] = AscCommonWord.b8b;
    this.Tf[AscDFH.qYa] = AscCommonWord.U4d;
    this.Tf[AscDFH.$ib] =
      AscCommon.X7b;
    this.Tf[AscDFH.pE] = AscCommonWord.E6d;
    this.Tf[AscDFH.ALd] = AscCommon.Lke;
    this.Tf[AscDFH.Bu] = AscCommonWord.Uza;
    this.Tf[AscDFH.RC] = AscCommonWord.x6d;
    this.Tf[AscDFH.Ibb] = AscCommonWord.rTa;
    this.Tf[AscDFH.ysd] = AscCommonWord.K5d;
    this.Tf[AscDFH.Gbb] = AscFormat.eYc;
    this.Tf[AscDFH.bCa] = AscFormat.PUc;
    this.Tf[AscDFH.Obb] = AscFormat.Tje;
    this.Tf[AscDFH.vYa] = AscFormat.Bnb;
    this.Tf[AscDFH.Qbb] = AscFormat.T6;
    this.Tf[AscDFH.QVb] = AscFormat.OCb;
    this.Tf[AscDFH.Pzc] = AscFormat.Eo;
    this.Tf[AscDFH.VY] = AscFormat.ora;
    this.Tf[AscDFH.Zr] = AscFormat.u2;
    this.Tf[AscDFH.iua] = AscFormat.rca;
    this.Tf[AscDFH.Wna] = AscFormat.YT;
    this.Tf[AscDFH.Oub] = AscFormat.QFb;
    this.Tf[AscDFH.xYa] = AscFormat.SUc;
    this.Tf[AscDFH.wW] = AscFormat.iO;
    this.Tf[AscDFH.Pub] = AscFormat.SV;
    this.Tf[AscDFH.lea] = AscFormat.tra;
    this.Tf[AscDFH.IVb] = AscFormat.vL;
    this.Tf[AscDFH.zYa] = AscFormat.iH;
    this.Tf[AscDFH.$La] = AscFormat.BUc;
    this.Tf[AscDFH.HH] = AscFormat.qra;
    this.Tf[AscDFH.A0] = AscFormat.qD;
    this.Tf[AscDFH.Wub] = AscFormat.S4a;
    this.Tf[AscDFH.qw] = AscFormat.UQa;
    this.Tf[AscDFH.Tna] =
      AscFormat.U7b;
    this.Tf[AscDFH.aC] = AscFormat.ykb;
    this.Tf[AscDFH.Mia] = AscFormat.e8b;
    this.Tf[AscDFH.av] = AscFormat.WQa;
    this.Tf[AscDFH.Xna] = AscFormat.j8b;
    this.Tf[AscDFH.nE] = AscFormat.N4a;
    this.Tf[AscDFH.B0] = AscFormat.O4a;
    this.Tf[AscDFH.C0] = AscFormat.Ekb;
    this.Tf[AscDFH.wVb] = AscFormat.KFb;
    this.Tf[AscDFH.XQ] = AscFormat.E4a;
    this.Tf[AscDFH.JS] = AscFormat.$Qa;
    this.Tf[AscDFH.cCa] = AscFormat.a6;
    this.Tf[AscDFH.hua] = AscFormat.J4a;
    this.Tf[AscDFH.EVb] = AscFormat.d8b;
    this.Tf[AscDFH.Qub] = AscFormat.VQa;
    this.Tf[AscDFH.Rub] =
      AscFormat.rra;
    this.Tf[AscDFH.JVb] = AscFormat.Akb;
    this.Tf[AscDFH.nea] = AscFormat.R4a;
    this.Tf[AscDFH.SVb] = AscFormat.ura;
    this.Tf[AscDFH.OVb] = AscFormat.Q4a;
    this.Tf[AscDFH.MVb] = AscFormat.P4a;
    this.Tf[AscDFH.NVb] = AscFormat.UGa;
    this.Tf[AscDFH.AYa] = AscFormat.Gkb;
    this.Tf[AscDFH.GVb] = AscFormat.OUc;
    this.Tf[AscDFH.FVb] = AscFormat.NUc;
    this.Tf[AscDFH.PVb] = AscFormat.D6d;
    this.Tf[AscDFH.TVb] = AscFormat.ZT;
    this.Tf[AscDFH.vW] = AscFormat.JFb;
    this.Tf[AscDFH.sYa] = AscFormat.YX;
    this.Tf[AscDFH.wYa] = AscFormat.Ckb;
    this.Tf[AscDFH.Yna] =
      AscFormat.WUc;
    this.Tf[AscDFH.P3] = AscFormat.xkb;
    this.Tf[AscDFH.pP] = AscFormat.zya;
    this.Tf[AscDFH.z7] = AscFormat.XQa;
    this.Tf[AscDFH.eCa] = AscFormat.TFb;
    this.Tf[AscDFH.R3] = AscFormat.tUc;
    this.Tf[AscDFH.CVb] = AscFormat.F5d;
    this.Tf[AscDFH.LVb] = AscFormat.TUc;
    this.Tf[AscDFH.yYa] = AscFormat.UUc;
    this.Tf[AscDFH.Mub] = AscFormat.pra;
    this.Tf[AscDFH.eMa] = AscFormat.VGa;
    this.Tf[AscDFH.zVb] = AscFormat.Z5;
    this.Tf[AscDFH.Pbb] = AscFormat.YUc;
    this.Tf[AscDFH.T$] = AscFormat.Cz;
    this.Tf[AscDFH.dCa] = AscFormat.pg;
    this.Tf[AscDFH.Lzc] =
      AscFormat.hzb;
    this.Tf[AscDFH.Kzc] = AscFormat.x0a;
    this.Tf[AscDFH.DVb] = AscFormat.pZc;
    this.Tf[AscDFH.Jbb] = AscFormat.Aae;
    this.Tf[AscDFH.Nub] = AscFormat.Bae;
    this.Tf[AscDFH.Kbb] = AscFormat.xae;
    this.Tf[AscDFH.RVb] = AscFormat.Zbd;
    this.Tf[AscDFH.Mbb] = AscFormat.JMc;
    this.Tf[AscDFH.yVb] = AscFormat.d3b;
    this.Tf[AscDFH.xVb] = AscFormat.phb;
    this.Tf[AscDFH.Uub] = AscFormat.i8b;
    this.Tf[AscDFH.Vna] = AscFormat.c8b;
    this.Tf[AscDFH.bMa] = AscFormat.f8b;
    this.Tf[AscDFH.kea] = AscFormat.g8b;
    this.Tf[AscDFH.Lr] = AscFormat.Tu;
    this.Tf[AscDFH.Hbb] =
      AscFormat.DUc;
    this.Tf[AscDFH.St] = AscFormat.b6;
    this.Tf[AscDFH.hy] = AscFormat.c6;
    this.Tf[AscDFH.Una] = AscFormat.CHa;
    this.Tf[AscDFH.cMa] = AscFormat.fwa;
    this.Tf[AscDFH.rQa] = AscFormat.l1;
    this.Tf[AscDFH.$B] = AscFormat.s2;
    this.Tf[AscDFH.Gv] = AscFormat.VR;
    this.Tf[AscDFH.ajb] = AscCommonWord.Frf;
    this.Tf[AscDFH.HA] = AscFormat.SGa;
    this.Tf[AscDFH.qP] = AscFormat.Dkb;
    this.Tf[AscDFH.dla] = AscFormat.f8;
    this.Tf[AscDFH.KN] = AscFormat.RFb;
    this.Tf[AscDFH.LV] = AscFormat.NFb;
    this.Tf[AscDFH.xsd] = AscFormat.C4;
    this.Tf[AscDFH.Zp] = AscCommonWord.Hg;
    this.Tf[AscDFH.Bsd] = AscCommonWord.d6d;
    this.Tf[AscDFH.Jsd] = AscCommonWord.V4d;
    this.Tf[AscDFH.Ksd] = AscCommonWord.f5d;
    this.Tf[AscDFH.Msd] = AscCommonWord.k5d;
    this.Tf[AscDFH.Lsd] = AscCommonWord.j5d;
    this.Tf[AscDFH.Psd] = AscCommonWord.z5d;
    this.Tf[AscDFH.Qsd] = AscCommonWord.E5d;
    this.Tf[AscDFH.Rsd] = AscCommonWord.L5d;
    this.Tf[AscDFH.Usd] = AscCommonWord.e6d;
    this.Tf[AscDFH.Ssd] = AscCommonWord.Q5d;
    this.Tf[AscDFH.Tsd] = AscCommonWord.a6d;
    this.Tf[AscDFH.Vsd] = AscCommonWord.f6d;
    this.Tf[AscDFH.Wsd] = AscCommonWord.i6d;
    this.Tf[AscDFH.Xsd] =
      AscCommonWord.p6d;
    this.Tf[AscDFH.Ysd] = AscCommonWord.s6d;
    this.Tf[AscDFH.Osd] = AscCommonWord.y5d;
    this.Tf[AscDFH.Nsd] = AscCommonWord.x5d;
    this.Tf[AscDFH.usd] = AscCommonWord.LFb;
    this.Tf[AscDFH.Asd] = AscCommonWord.PBb;
    this.Tf[AscDFH.BLd] = AscCommonWord.CParagraphBookmark;
    this.Tf[AscDFH.HVb] = AscCommonWord.j6d;
    this.Tf[AscDFH.Tub] = AscCommonWord.B2a;
    this.Tf[AscDFH.iGa] = AscFormat.M4a;
    this.Tf[AscDFH.fya] = AscFormat.P7b;
    this.Tf[AscDFH.Csd] = AscCommon.o6d;
    this.Tf[AscDFH.gcf] = AscCommon.v6d;
    f.AscCommonSlide && (this.Tf[AscDFH.KS] =
      AscCommonSlide.Slide, this.Tf[AscDFH.mea] = AscCommonSlide.SlideLayout, this.Tf[AscDFH.Zna] = AscCommonSlide.MasterSlide, this.Tf[AscDFH.K1b] = AscCommonSlide.ZMf, this.Tf[AscDFH.jKc] = AscCommonSlide.F6c, this.Tf[AscDFH.gya] = AscCommonSlide.$Od, this.Tf[AscDFH.iba] = AscCommonSlide.bzb, this.Tf[AscDFH.bEb] = AscCommonSlide.RGf);
    this.Tf[AscDFH.Pia] = AscFormat.gVc;
    this.Tf[AscDFH.gy] = AscFormat.I1;
    f.AscCommonExcel && (this.Tf[AscDFH.oE] = AscCommonExcel.OBd, this.Tf[AscDFH.CQc] = Asc.Erf);
    this.Tf[AscDFH.Ozc] = AscCommon.EUc;
  };
  e.prototype.Xbe =
    function (e) {
      return this.Tf[e] ? new this.Tf[e] : null;
    };
  e.prototype.nf = function () {
  };
  f.AscCommon.qg = new e;
  f.AscCommon.cPd = e;
})(window);
'use strict';
(function (f) {
  function e(e, f, Da) {
    AscDFH.nm.call(this, e);
    this.Ja = f;
    this.Scc = Da;
  }

  function Pa(e, f, Da, Ha, Pa, ab, Va, gb, Za, bc) {
    AscDFH.nm.call(this, e);
    this.dHb = f;
    this.eHb = Da;
    this.vPa = Ha;
    this.F2c = Pa;
    this.i6c = ab;
    this.Yad = Va;
    this.X2c = gb;
    this.Ebd = Za;
    this.V9b = bc;
    this.Ocd = '0.0.0.0.@@Rev';
  }

  function ab(e, f) {
    AscDFH.nm.call(this, e);
    this.wZ = f ? f : '';
  }

  e.prototype = Object.create(AscDFH.nm.prototype);
  e.prototype.constructor = e;
  e.prototype.ka = AscDFH.kVb;
  e.prototype.Ll = function () {
  };
  e.prototype.Yg = function () {
  };
  e.prototype.Ie =
    function (e) {
      e.Wb(this.Ja);
      this.Scc.Vg(e);
    };
  e.prototype.te = function (e) {
    this.Ja = e.ic();
    this.Scc = this.jjf(e);
  };
  e.prototype.Wg = function () {
    this.Oa.VYa[this.Ja] = this.Scc;
  };
  e.prototype.hS = function () {
  };
  e.prototype.jjf = function (e) {
    var f = this.Oa, Da = e.ob();
    f.Sv();
    Da = f.Xbe(Da);
    null !== Da && Da.ah(e);
    f.Gt();
    return Da;
  };
  e.prototype.Mm = function () {
    return null;
  };
  f.AscCommon.yUc = e;
  Pa.prototype = Object.create(AscDFH.nm.prototype);
  Pa.prototype.constructor = Pa;
  Pa.prototype.ka = AscDFH.gbb;
  Pa.prototype.Ll = function () {
  };
  Pa.prototype.Yg =
    function () {
    };
  Pa.prototype.Ie = function (e) {
    e.eb(this.dHb);
    e.eb(this.eHb);
    e.eb(this.vPa);
    e.eb(this.F2c);
    e.eb(this.i6c);
    e.eb(this.Yad);
    e.eb(this.X2c);
    e.eb(this.Ebd);
    e.eb(null === this.V9b ? -10 : this.V9b);
    e.Wb(this.Ocd);
  };
  Pa.prototype.te = function (e) {
    this.dHb = e.ob();
    this.eHb = e.ob();
    this.vPa = e.ob();
    this.F2c = e.ob();
    this.i6c = e.ob();
    this.Yad = e.ob();
    this.X2c = e.ob();
    this.Ebd = e.ob();
    this.V9b = e.ob();
    this.Ocd = e.ic();
  };
  Pa.prototype.Wg = function () {
  };
  Pa.prototype.hS = function () {
  };
  Pa.prototype.Mm = function () {
    return null;
  };
  f.AscCommon.dEd =
    Pa;
  ab.prototype = Object.create(AscDFH.nm.prototype);
  ab.prototype.constructor = ab;
  ab.prototype.ka = AscDFH.MRb;
  ab.prototype.Ll = function () {
  };
  ab.prototype.Yg = function () {
  };
  ab.prototype.Ie = function (e) {
    e.Wb(this.wZ);
  };
  ab.prototype.te = function (e) {
    this.wZ = e.ic();
  };
  ab.prototype.Wg = function () {
    var e = this.wZ;
    if (editor && editor.La && editor.La.Za) {
      var Pa = editor.La.Za;
      if (Pa instanceof AscCommonWord.NBb) {
        var Da = Pa.oc.HXf(e), Ha = Pa.t_();
        AscFormat.Li(function () {
          var e = new AscCommonWord.Uza;
          e.fa.splice(0, 0, Da);
          Ha.fa.splice(0,
            0, e);
          Pa.oc.eDb(Da);
        }, this, []);
      } else if (Pa instanceof AscCommonSlide.CPresentation && Pa.ie[0]) {
        var ab = Pa.ie[0].Xl.vnc(e);
        ab.la.nb.Kj = (Pa.pd - ab.la.nb.fb) / 2;
        ab.la.nb.Sj = (Pa.Uc - ab.la.nb.gb) / 2;
        ab.parent = Pa.ie[0];
        Pa.ie[0].Nf.Qc.push(ab);
      }
    } else if (ab = f.Asc.editor.Io.Dm[0]) {
      var zb = (new AscFormat.oc).lWa(AscCommon.G9a.egb);
      e = AscFormat.TG.prototype.vnc(e);
      zb.ext.Hn = e.la.nb.fb;
      zb.ext.In = e.la.nb.gb;
      zb.Mc = e;
      ab.wg.push(zb);
    }
  };
  ab.prototype.hS = function () {
  };
  ab.prototype.Mm = function () {
    return null;
  };
  f.AscCommon.q5d = ab;
})(window);
AscDFH.Ca[AscDFH.kVb] = AscCommon.yUc;
AscDFH.Ca[AscDFH.gbb] = AscCommon.dEd;
AscDFH.Ca[AscDFH.MRb] = AscCommon.q5d;
AscDFH.Dc[AscDFH.kVb] = [AscDFH.kVb];
AscDFH.Dc[AscDFH.Ybf] = [AscDFH.Ybf];
AscDFH.Dc[AscDFH.gbb] = [AscDFH.gbb];
AscDFH.Dc[AscDFH.MRb] = [AscDFH.MRb];
'use strict';
(function (f) {
  function e(e, f) {
    this.ogb = e;
    this.JQc = !!f;
    this.wEa = null;
    this.jCf = this.RId = !1;
    this.f7 = this.PKc = this.OKc = this.iVd = null;
  }

  function Pa(e) {
    for (var f = [], Da, Ha = e.encodings, Va = 0; Va < Ha.length; Va++) Da = new nb, Da.se(Ha[Va]), f.push(Da);
    this.Q1e = f;
    this.Tmf = new ab(e.codepage, e.delimiter);
    this.data = e.data;
  }

  function ab(e, f, Da) {
    this.Y9a = e;
    this.BWa = f;
    this.gnd = Da;
  }

  function bb(e) {
    this.password = e;
  }

  function nb() {
    this.PAc = this.text = this.Y9a = this.Xmc = null;
  }

  function Da(e) {
    this.hnd = e;
  }

  function Ha(e) {
    this.R$e = e;
    this.fod =
      [];
  }

  function Eb(e) {
    this.name = e.name;
  }

  e.prototype.wYe = function (e) {
    this.ogb = e;
  };
  e.prototype.JYe = function (e) {
    this.JQc = e;
  };
  e.prototype.DVa = function (e) {
    this.wEa = e;
  };
  e.prototype.jYe = function (e) {
    this.RId = e;
  };
  Pa.prototype.WQe = function () {
    return this.Q1e;
  };
  Pa.prototype.qUe = function () {
    return this.Tmf;
  };
  Pa.prototype.WHd = function () {
    return this.data;
  };
  ab.prototype.P0b = function () {
    return this.BWa;
  };
  ab.prototype.oYe = function (e) {
    this.BWa = e;
  };
  ab.prototype.$zb = function () {
    return this.gnd;
  };
  ab.prototype.pYe = function (e) {
    this.gnd = e;
  };
  ab.prototype.QPa = function () {
    return this.Y9a;
  };
  ab.prototype.plc = function (e) {
    this.Y9a = e;
  };
  bb.prototype.Eqb = function () {
    return this.password;
  };
  bb.prototype.iZe = function (e) {
    this.password = e;
  };
  nb.prototype.se = function (e) {
    this.Xmc = e.name;
    this.Y9a = e.codepage;
    this.text = e.text;
    this.PAc = e.lcid;
  };
  nb.prototype.VQe = function () {
    return this.Xmc;
  };
  nb.prototype.aYe = function (e) {
    this.Xmc = e;
  };
  nb.prototype.QPa = function () {
    return this.Y9a;
  };
  nb.prototype.plc = function (e) {
    this.Y9a = e;
  };
  nb.prototype.Zha = function () {
    return this.text;
  };
  nb.prototype.pib =
    function (e) {
      this.text = e;
    };
  nb.prototype.cTe = function () {
    return this.PAc;
  };
  nb.prototype.PYe = function (e) {
    this.PAc = e;
  };
  Da.prototype.DRe = function () {
    return this.hnd;
  };
  Da.prototype.qYe = function (e) {
    this.hnd = e;
  };
  Ha.prototype.mSe = function () {
    return this.R$e;
  };
  Ha.prototype.dSe = function () {
    return this.fod;
  };
  Ha.prototype.rTd = function (e) {
    return this.fod.push(e);
  };
  Eb.prototype.aD = function () {
    return this.name;
  };
  Eb.prototype.sTe = function () {
    return AscCommonExcel.EOb ? AscCommonExcel.EOb[this.name] : this.name;
  };
  f.Asc = f.Asc || {};
  f.AscCommon =
    f.AscCommon || {};
  f.Asc.MIc = f.Asc.asc_CDownloadOptions = e;
  var zb = e.prototype;
  zb.asc_setFileType = zb.wYe;
  zb.asc_setIsDownloadEvent = zb.JYe;
  zb.asc_setAdvancedOptions = zb.DVa;
  zb.asc_setCompatible = zb.jYe;
  f.AscCommon.sOc = Pa;
  zb = Pa.prototype;
  zb.asc_getCodePages = zb.WQe;
  zb.asc_getRecommendedSettings = zb.qUe;
  zb.asc_getData = zb.WHd;
  f.Asc.OIc = f.Asc.asc_CTextOptions = ab;
  zb = ab.prototype;
  zb.asc_getDelimiter = zb.P0b;
  zb.asc_setDelimiter = zb.oYe;
  zb.asc_getDelimiterChar = zb.$zb;
  zb.asc_setDelimiterChar = zb.pYe;
  zb.asc_getCodePage =
    zb.QPa;
  zb.asc_setCodePage = zb.plc;
  f.Asc.zfg = f.Asc.asc_CDRMAdvancedOptions = bb;
  zb = bb.prototype;
  zb.asc_getPassword = zb.Eqb;
  zb.asc_setPassword = zb.iZe;
  zb = nb.prototype;
  zb.asc_getCodePageName = zb.VQe;
  zb.asc_setCodePageName = zb.aYe;
  zb.asc_getCodePage = zb.QPa;
  zb.asc_setCodePage = zb.plc;
  zb.asc_getText = zb.Zha;
  zb.asc_setText = zb.pib;
  zb.asc_getLcid = zb.cTe;
  zb.asc_setLcid = zb.PYe;
  zb = Da.prototype;
  zb.asc_getDelimiterName = zb.DRe;
  zb.asc_setDelimiterName = zb.qYe;
  f.AscCommon.KQf = Ha;
  zb = Ha.prototype;
  zb.asc_getGroupName = zb.mSe;
  zb.asc_getFormulasArray =
    zb.dSe;
  zb.asc_addFormulaElement = zb.rTd;
  f.AscCommon.JQf = Eb;
  zb = Eb.prototype;
  zb.asc_getName = zb.aD;
  zb.asc_getLocaleName = zb.sTe;
})(window);
'use strict';
(function (f, e) {
  function Pa() {
    this.data = this.Hv = null;
    this.wa = 0;
  }

  function ab() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 1;
    this.canvas.height = 1;
    this.Kt = this.canvas.getContext('2d');
    this.hO = function (e) {
      var f = new Pa;
      f.Hv = this.Kt.createImageData(1, parseInt((e + 3) / 4));
      f.data = f.Hv.data;
      f.wa = 0;
      return f;
    };
  }

  f.AscFonts = f.AscFonts || {};
  f.AscFonts.rAc = !1;
  f.AscFonts.zg = null;
  f.AscFonts.Gwb = null;
  f.AscFonts.iBb = null;
  f.AscFonts.FBc = 5;
  f.AscFonts.zPb = 0;
  f.AscFonts.h9a = function (e) {
    if ('undefined' != typeof Uint8Array &&
      !f.opera) return new Uint8Array(e);
    for (var Pa = Array(e), Da = 0; Da < e; Da++) Pa[Da] = 0;
    return Pa;
  };
  f.AscFonts.hfg = function (e) {
    return { data: f.AscFonts.h9a(e) };
  };
  f.AscFonts.yEb = function () {
    f.AscFonts.rAc || (++f.AscFonts.zPb, f.AscFonts.zPb == f.AscFonts.FBc && (f.AscFonts.zg && (f.AscFonts.rAc = !0, f.AscFonts.Gwb.call(f.AscFonts.zg)), delete f.AscFonts.zPb, delete f.AscFonts.FBc, delete f.AscFonts.zg, delete f.AscFonts.Gwb, delete f.AscFonts.iBb));
  };
  f.AscFonts.load = function (Pa, nb, Da) {
    f.AscFonts.zg = Pa;
    f.AscFonts.Gwb = nb;
    f.AscFonts.iBb =
      Da;
    !0 === f.NATIVE_EDITOR_ENJINE || !0 === f.IS_NATIVE_EDITOR || f.Native !== e ? (f.AscFonts.rAc = !0, f.AscFonts.Gwb.call(f.AscFonts.zg), delete f.AscFonts.zPb, delete f.AscFonts.FBc, delete f.AscFonts.zg, delete f.AscFonts.Gwb, delete f.AscFonts.iBb) : (Pa = '../../../../sdkjs/common/libfont', nb = !1, Da = f.WebAssembly, 'object' !== typeof Da || 'function' !== typeof Da.Memory || 'function' !== typeof Da.instantiateStreaming && 'function' !== typeof Da.instantiate || (nb = !0), nb ? Pa += '/wasm' : Pa += '/js', nb || f.AscFonts.yEb(), nb = function () {
    }, Da =
      function () {
        f.AscFonts.iBb();
      }, f.AscNotLoadAllScript ? (AscCommon.iEb(Pa + '/engine.js', nb, Da), AscCommon.iEb(Pa + '/file.js', nb, Da), AscCommon.iEb(Pa + '/manager.js', nb, Da)) : AscCommon.iEb(Pa + '/fonts.js', nb, Da));
  };
  f.AscFonts.I5a = function (e, f) {
    this.data = e;
    this.size = f;
  };
  f.AscFonts.dU = {
    Gpa: function (e) {
      return 2147483647 < e ? e - 4294967296 : e;
    }, r8: function (e) {
      return 32767 < e ? e - 65536 : e;
    }, aQ: function (e) {
      return 0 > e ? e + 4294967296 : e;
    }, Huf: function (e) {
      return 0 > e ? e + 65536 : e;
    }, h0f: function (e, f, Da) {
      for (var Ha = 0; Ha < Da; Ha++) e[Ha] = f;
    }
  };
  f.AscFonts.fJf =
    ab;
  f.AscFonts.uOa = new ab;
  f.AscFonts.tYb = new function () {
    this.pitch = this.height = this.width = 0;
    this.ZYa = null;
    this.WH = function (e, Pa) {
      if (this.width < e + 1 || this.height < Pa + 1) this.width = Math.max(this.width, e + 1), this.pitch = 4 * this.width, this.height = Math.max(this.height, Pa + 1), this.ZYa = null, this.ZYa = f.AscFonts.uOa.Kt.createImageData(this.width, this.height);
    };
  };
})(window, void 0);
'use strict';
var c_oAscWrapStyle2 = { Sq: 0, oSd: 1, eYg: 2, dYg: 3, fYg: 4, qWg: 5, vXg: 6 },
  c_oAscTableSelectionType = { jc: 0, hb: 1, Vr: 2, Table: 3 }, SD = { Gfa: 0, FVc: 1 },
  c_oAscCollaborativeMarksShowType = { Af: -1, Zl: 0, U2c: 1 }, c_oAscAlignH = { Pk: 0, EE: 1, Ba: 2, XD: 3, Ra: 4 },
  c_oAscAlignV = { Xa: 0, Pk: 1, EE: 2, XD: 3, Qa: 4 }, c_oAscVertAlignJc = { Qa: 0, Pk: 1, Xa: 2 },
  c_oAscTableLayout = { XLc: 0, LZc: 1 }, TD = { h7b: 0, i7b: 1, QLc: 2, OLc: 3, g7b: 4, PLc: 5 },
  TABLE_STYLE_WIDTH_PIX = 70, TABLE_STYLE_HEIGHT_PIX = 50,
  c_oAscSectionBreakType = { zXg: 0, AXg: 1, KWg: 2, w8f: 3, Vr: 4 }, c_oAscRevisionsChangeType =
    { cT: 0, bYg: 1, cYg: 2, DXg: 3, EXg: 4, rb: 5, Mb: 6, bg: 7, OXg: 8, PXg: 9, kRd: 254, wXg: 255 },
  UD = { sEa: 5, dOa: 'DOCY' }, VD = { bug: 0, rvg: 1, Cxg: 2, iyg: 3 }, WD = { w8f: 0, Fvg: 1, Evg: 2 },
  c_oAscSdtLockType = { Lya: 0, $Na: 1, aOa: 2, xJa: 3 }, c_oAscSdtLevelType = { bqa: 1, Sq: 2, hb: 3, jc: 4 },
  XD = { kO: 0, lIc: 1, nIc: 2, LHc: 3, NGc: 4 }, YD = { bb: 1, ef: 2, Table: 3, vw: 4 },
  c_oAscHyperlinkAnchor = { Xja: 1, bfb: 2 }, ZD = { Af: 0, Text: 1, Image: 2 };
window.flat_desine = !1;
var $D;
window.Asc = window.Asc || {};
$D = window.Asc.c_oAscWrapStyle2 = c_oAscWrapStyle2;
$D.Inline = 0;
$D.Square = 1;
$D.Tight = 2;
$D.Through = 3;
$D.TopAndBottom = 4;
$D.Behind = 5;
$D.InFront = 6;
$D = window.Asc.c_oAscContextMenuTypes = window.Asc.WAa = SD;
$D.Common = SD.Gfa;
$D.ChangeHdrFtr = SD.FVc;
$D = window.Asc.c_oAscCollaborativeMarksShowType = c_oAscCollaborativeMarksShowType;
$D.None = c_oAscCollaborativeMarksShowType.Af;
$D.All = c_oAscCollaborativeMarksShowType.Zl;
$D.LastChanges = c_oAscCollaborativeMarksShowType.U2c;
$D = window.Asc.c_oAscAlignH = c_oAscAlignH;
$D.Center = c_oAscAlignH.Pk;
$D.Inside = c_oAscAlignH.EE;
$D.Left = c_oAscAlignH.Ba;
$D.Outside = c_oAscAlignH.XD;
$D.Right = c_oAscAlignH.Ra;
$D = window.Asc.c_oAscAlignV = c_oAscAlignV;
$D.Bottom = c_oAscAlignV.Xa;
$D.Center = c_oAscAlignV.Pk;
$D.Inside = c_oAscAlignV.EE;
$D.Outside = c_oAscAlignV.XD;
$D.Top = c_oAscAlignV.Qa;
$D = window.Asc.c_oAscChangeLevel = { KOd: 0, JOd: 1, WRd: 2, rWg: 3 };
$D.BringToFront = 0;
$D.BringForward = 1;
$D.SendToBack = 2;
$D.BringBackward = 3;
$D = window.Asc.c_oAscVertAlignJc = c_oAscVertAlignJc;
$D.Top = c_oAscVertAlignJc.Qa;
$D.Center = c_oAscVertAlignJc.Pk;
$D.Bottom = c_oAscVertAlignJc.Xa;
$D = window.Asc.c_oAscTableLayout = c_oAscTableLayout;
$D.AutoFit = c_oAscTableLayout.XLc;
$D.Fixed = c_oAscTableLayout.LZc;
$D = window.Asc.c_oAscAlignShapeType = TD;
$D.ALIGN_LEFT = TD.h7b;
$D.ALIGN_RIGHT = TD.i7b;
$D.ALIGN_TOP = TD.QLc;
$D.ALIGN_BOTTOM = TD.OLc;
$D.ALIGN_CENTER = TD.g7b;
$D.ALIGN_MIDDLE = TD.PLc;
$D = window.Asc.c_oAscSectionBreakType = c_oAscSectionBreakType;
$D.NextPage = 0;
$D.OddPage = 1;
$D.EvenPage = 2;
$D.Continuous = 3;
$D.Column = 4;
$D = window.Asc.c_oAscRevisionsChangeType = c_oAscRevisionsChangeType;
$D.Unknown = 0;
$D.TextAdd = 1;
$D.TextRem = 2;
$D.ParaAdd = 3;
$D.ParaRem = 4;
$D.TextPr = 5;
$D.ParaPr = 6;
$D.TablePr = 7;
$D.RowsAdd = 8;
$D.RowsRem = 9;
$D.MoveMark = 254;
$D = window.Asc.c_oAscFootnotePos = VD;
$D.BeneathText = VD.bug;
$D.DocEnd = VD.rvg;
$D.PageBottom = VD.Cxg;
$D.SectEnd = VD.iyg;
$D = window.Asc.c_oAscFootnoteRestart = WD;
$D.Continuous = WD.w8f;
$D.EachSect = WD.Fvg;
$D.EachPage = WD.Evg;
$D = window.Asc.c_oAscSdtLockType = c_oAscSdtLockType;
$D.ContentLocked = c_oAscSdtLockType.Lya;
$D.SdtContentLocked = c_oAscSdtLockType.$Na;
$D.SdtLocked = c_oAscSdtLockType.aOa;
$D.Unlocked = c_oAscSdtLockType.xJa;
$D = window.Asc.c_oAscSdtLevelType = window.Asc.c_oAscSdtLevelType = c_oAscSdtLevelType;
$D.Block = c_oAscSdtLevelType.bqa;
$D.Inline = c_oAscSdtLevelType.Sq;
$D.Row = c_oAscSdtLevelType.hb;
$D.Cell = c_oAscSdtLevelType.jc;
$D = window.Asc.c_oAscTOCStylesType = window.Asc.C5 = XD;
$D.Current = XD.kO;
$D.Simple = XD.lIc;
$D.Standard = XD.nIc;
$D.Modern = XD.LHc;
$D.Classic = XD.NGc;
$D = window.Asc.c_oAscStyleType = window.Asc.CSf = YD;
$D.Paragraph = YD.bb;
$D.Numbering = YD.ef;
$D.Table = YD.Table;
$D.Character = YD.vw;
$D = window.Asc.c_oAscHyperlinkAnchor = window.Asc.c_oAscHyperlinkAnchor = c_oAscHyperlinkAnchor;
$D.Heading = c_oAscHyperlinkAnchor.Xja;
$D.Bookmark = c_oAscHyperlinkAnchor.bfb;
window.AscCommon = window.AscCommon || {};
window.AscCommon.Jpa = UD;
window.AscCommon.aEa = UD.sEa;
$D = window.Asc.c_oAscWatermarkType = window.Asc.Zfa = ZD;
$D.None = $D.Af;
$D.Text = $D.Text;
$D.Image = $D.Image;
'use strict';
(function (f, e) {
  function Pa() {
    this.NV = this.LJ = null;
  }

  function ab() {
    this.g9 = 1;
    this.gT = [];
    this.Gwa = [];
    this.Jvb = [];
    this.Dcb = [];
    this.R3a = [];
    this.Ivb = [];
    this.LWb = this.f9 = 0;
    this.Fwa = [];
    this.yMa = [];
    this.Kvb = [];
    this.sCa = [];
    this.Bcb = {};
    this.Gvb = {};
    this.PEa = {};
    this.V1b = {};
    this.YA = !1;
    this.Za = null;
    this.sP = new bb;
    this.Rpa = new bb;
    this.jjb = {};
    this.FWb = {};
    this.Eud = 0;
    this.hoa = [];
    this.UYa = [];
    this.TWb = [];
  }

  function bb() {
    this.sP = [];
    this.Ccb = [];
    this.Hvb = [];
  }

  Pa.prototype.gLb = function (e) {
    this.LJ = e;
  };
  Pa.prototype.iS = function (e) {
    this.NV =
      e;
  };
  Pa.prototype.jIc = function (e, f) {
    e.sb && (this.LJ = this.akf(f));
  };
  Pa.prototype.z3d = function () {
    var e = AscCommon.Rd, f = this.Oif(this.LJ), Ha = f.ic();
    if (Ha = AscCommon.qg.Zf(Ha)) {
      var Pa = f.Cb, bb = f.ob();
      (bb = AscDFH.Ca[bb]) ? (Ha = new bb(Ha), Ha.te(f), !0 === e.BEb(Ha) && Ha.Wg(this.NV)) : (e.BEb(this.LJ), f.Wd(Pa));
    }
  };
  Pa.prototype.Oif = function (e) {
    return this.FMc(e, 0, e.length);
  };
  Pa.prototype.FMc = function (Pa, Da, Ha) {
    var nb = 0;
    Da = -1 + Da;
    for (var bb = ''; ;) {
      Da++;
      var Va = Pa.charCodeAt(Da);
      if (59 == Va) {
        Da++;
        break;
      }
      bb += String.fromCharCode(Va);
    }
    bb =
      parseInt(bb);
    Va = AscFonts.uOa.hO(bb);
    bb = new AscCommon.x9(Va.data, bb);
    bb.Hv = Va.Hv;
    Va = bb.data;
    if (f.UFa) for (; Da < Ha;) {
      var gb = 0, Za, ab = 0;
      for (Za = 0; 4 > Za && !(Da >= Ha); Za++) {
        var Nc = AscFonts.G2a(Pa.charCodeAt(Da++));
        -1 == Nc ? Za-- : (gb <<= 6, gb |= Nc, ab += 6);
      }
      gb <<= 24 - ab;
      for (Za = 0; Za < ab / 8; Za++) Va[nb++] = (gb & 16711680) >>> 16, gb <<= 8;
    } else for (var cc = AscFonts.v3a; Da < Ha;) {
      for (Za = ab = gb = 0; 4 > Za && !(Da >= Ha); Za++) Nc = cc[Pa.charCodeAt(Da++)], Nc == e ? Za-- : (gb <<= 6, gb |= Nc, ab += 6);
      gb <<= 24 - ab;
      for (Za = 0; Za < ab / 8; Za++) Va[nb++] = (gb & 16711680) >>> 16, gb <<=
        8;
    }
    return bb;
  };
  Pa.prototype.akf = function (e) {
    var f = e.R2a;
    return f + ';' + AscCommon.History.Oaa.qHb(e.Ua, f);
  };
  ab.prototype.Oi = function () {
    this.g9 = 1;
    this.gT = [];
    this.Gwa = [];
    this.Jvb = [];
    this.Dcb = [];
    this.R3a = [];
    this.Ivb = [];
    this.Fwa = [];
    this.yMa = [];
    this.Kvb = [];
    this.sCa = [];
  };
  ab.prototype.FCb = function (e) {
    this.YA = e;
    !1 === e && (this.sGd(), this.PRd());
  };
  ab.prototype.k8 = function () {
    return 1 === this.g9;
  };
  ab.prototype.yqa = function () {
    return !this.k8();
  };
  ab.prototype.k0b = function () {
    this.g9 = -1;
  };
  ab.prototype.hae = function () {
    0 >= this.g9 &&
    (this.g9 = 0);
  };
  ab.prototype.UDd = function (e) {
    this.gT.push(e);
  };
  ab.prototype.t3d = function (e) {
    this.Gwa.push(e);
  };
  ab.prototype.o0a = function (e) {
    this.Jvb.push(e);
    editor.q3a();
  };
  ab.prototype.lCb = function () {
    return 0 < this.gT.length;
  };
  ab.prototype.m_b = function () {
    if (!0 === 0 < this.gT.length) {
      AscFonts.hV = !0;
      editor.La.Za.KGd();
      editor.La.Za.vMc();
      editor.fG(Asc.EH.Kr, Asc.OG.DGc);
      var e = this.txd();
      this.c8d();
      this.wTc();
      this.dRd();
      this.sxd(e);
      this.qRd();
      AscFonts.hV = !1;
    }
  };
  ab.prototype.wTc = function () {
    AscCommon.kg.gUa(!0);
    0 < this.gT.length &&
    this.Gwd();
    for (var e = this.gT.length, Da = 0; Da < e && (!0 !== f.NATIVE_EDITOR_ENJINE || !f["native"].CheckNextChange || f["native"].CheckNextChange()); Da++) this.gT[Da].z3d();
    this.Fwd();
    this.EGc();
    this.Skb();
    this.j5c();
    AscCommon.kg.gUa(!1);
  };
  ab.prototype.Toc = function () {
    return this.Jvb.length;
  };
  ab.prototype.Vec = function () {
  };
  ab.prototype.UHc = function () {
  };
  ab.prototype.pPd = function () {
  };
  ab.prototype.VRd = function (e) {
    var f = {}, Ha = editor || Asc.editor, Pa;
    if (Ha) {
      f.c = 'pathurls';
      f.data = [];
      for (Pa = 0; Pa < e.length; ++Pa) f.data.push(e[Pa]);
      var nb = [].concat(AscCommon.Rd.sCa);
      this.pPd(nb);
      AscCommon.Rd.sCa.length = 0;
      !1 === Ha.FOa && (Ha.FOa = !0);
      Ha.lka = function (f) {
        var Da;
        if ('ok' === f.status) {
          f = f.data;
          var Ha = {};
          for (Da = 0; Da < f.length; ++Da) Ha[e[Da]] = f[Da];
          AscCommon.fI.PAa(Ha);
        }
        AscCommon.Rd.aIc(nb);
      };
      AscCommon.OYb(Ha, null, f);
    }
  };
  ab.prototype.aIc = function (e) {
    (editor || Asc.editor).C0d(e);
  };
  ab.prototype.vPd = function () {
    var e = editor || Asc.editor, f = [], Ha, Pa = {}, bb = this.sCa, Va = {};
    for (Ha = 0; Ha < bb.length; ++Ha) {
      var gb = bb[Ha];
      Va[gb] || (Va[gb] = 1, 0 === gb.indexOf('theme') &&
      e.MG ? Pa[gb] = e.MG.Ofb + gb : 0 !== gb.indexOf('http:') && 0 !== gb.indexOf('data:') && 0 !== gb.indexOf('https:') && 0 !== gb.indexOf('file:') && 0 !== gb.indexOf('ftp:') && (gb = AscCommon.fI.$ia + gb, AscCommon.fI.A5b(gb) || f.push(gb)));
    }
    AscCommon.fI.PAa(Pa);
    return f;
  };
  ab.prototype.qRd = function () {
    this.zxa(!0);
    this.E$c(!0);
    var e = this.vPd();
    0 < e.length ? this.VRd(e) : (this.aIc([].concat(this.sCa)), this.sCa.length = 0);
  };
  ab.prototype.ZFd = function () {
  };
  ab.prototype.tEd = function () {
    this.R3a.length = 0;
  };
  ab.prototype.aqa = function (e, f) {
    this.R3a.push({
      Oa: e,
      DFd: f
    });
  };
  ab.prototype.EGc = function () {
    for (var e = this.R3a.length, f = 0; f < e; f++) {
      var Ha = this.R3a[f];
      Ha.Oa.ema(Ha.DFd);
    }
    this.tEd();
  };
  ab.prototype.Skb = function () {
  };
  ab.prototype.Rla = function () {
    return 0 === this.f9 ? !1 : !0;
  };
  ab.prototype.zxa = function (e) {
    e ? this.f9++ : this.f9 = Math.max(0, this.f9 - 1);
  };
  ab.prototype.E$c = function (e) {
    e ? this.LWb++ : this.LWb = Math.max(0, this.LWb - 1);
  };
  ab.prototype.vpa = function () {
    return 0 === this.LWb ? !1 : !0;
  };
  ab.prototype.S3b = function () {
    this.Fwa.length = 0;
    this.yMa.length = 0;
  };
  ab.prototype.n9 = function (e) {
    this.Fwa.push(e);
    this.yMa.push(e);
  };
  ab.prototype.jJb = function () {
  };
  ab.prototype.eNc = function () {
  };
  ab.prototype.Qtf = function () {
    this.yMa.length = 0;
  };
  ab.prototype.Mtf = function () {
    for (var e = !1, f = 0, Ha = this.yMa.length; f < Ha; ++f) if (!0 === this.yMa[f]) {
      e = !0;
      break;
    }
    e && (Ha = this.yMa.length, this.Fwa.splice(this.Fwa.length - Ha, Ha));
    this.yMa.length = 0;
    return e;
  };
  ab.prototype.SRd = function () {
    this.Dcb = {};
  };
  ab.prototype.EOd = function (e, f) {
    this.Dcb[e] = f;
  };
  ab.prototype.ute = function (e) {
    delete this.Dcb[e];
  };
  ab.prototype.dRd = function () {
    for (var e in this.Dcb) {
      var f =
        AscCommon.qg.Zf(e);
      if (null != f) {
        var Ha = f.Hf;
        Ha.GJ(AscCommon.hjb, !1);
        f.Fb && f.Fb() === AscDFH.KS && editor.La.Za.yb.r0b && editor.La.Za.yb.r0b(f.Mk);
        Ha.i0b(this.Dcb[e]);
      }
    }
    this.SRd();
  };
  ab.prototype.uPd = function () {
    this.Kvb.length = 0;
  };
  ab.prototype.IBb = function (e) {
    this.Kvb.push(e);
    e.Rae = !0;
  };
  ab.prototype.b8d = function () {
    this.Ivb.length = 0;
  };
  ab.prototype.oFb = function (e, f) {
    this.Ivb.push({ Oa: e, xb: f });
  };
  ab.prototype.j5c = function () {
    for (var e = this.Kvb.length, f = 0; f < e; f++) this.Kvb[f].Rae = !1;
    e = this.Ivb.length;
    for (f = 0; f < e; f++) {
      var Ha =
        this.Ivb[f];
      Ha.Oa.C6c(Ha.xb);
    }
    this.b8d();
    this.uPd();
  };
  ab.prototype.c8d = function () {
    this.sCa.length = 0;
  };
  ab.prototype.JNa = function (e) {
    this.sCa.push(e);
  };
  ab.prototype.CGc = function (e) {
    var f = e.sb();
    this.Bcb[f] = e;
  };
  ab.prototype.eWc = function () {
    for (var e in this.Bcb) this.Bcb[e].s9();
    this.Bcb = {};
  };
  ab.prototype.rGd = function () {
    for (var e in this.Bcb) this.Bcb[e].P9();
    this.eWc();
  };
  ab.prototype.k3d = function () {
  };
  ab.prototype.pGd = function () {
  };
  ab.prototype.Qte = function () {
  };
  ab.prototype.pGd = function () {
  };
  ab.prototype.s7b = function (e) {
    var f =
      e.sb();
    this.Gvb[f] = e;
  };
  ab.prototype.fHa = function (e) {
    for (var f in this.Gvb) this.Gvb[f].fHa();
    this.Gvb = {};
    !0 === e && (editor.La.Za.yb.VD(), editor.La.Za.yb.HG());
  };
  ab.prototype.rrf = function (e, f, Ha) {
    this.PEa[e] = f;
    this.V1b[e] = Ha;
  };
  ab.prototype.ORd = function () {
    if (this.Za) {
      for (var e in this.PEa) this.Za.UNc(this.PEa[e], e, !1, this.V1b[e]), this.TLc && this.TLc(e);
      this.PEa = {};
      this.V1b = {};
    }
  };
  ab.prototype.gzb = function () {
    this.sP.gzb();
  };
  ab.prototype.o2 = function (e) {
    this.sP.o2(e);
  };
  ab.prototype.WDd = function (e, f, Ha) {
    this.Rpa.WHc(this.PEa[e]);
    this.jjb[e] = f;
    this.Rpa.o2(f);
    this.FWb[e] = Ha;
  };
  ab.prototype.W0a = function (e) {
    this.Rpa.WHc(this.PEa[e]);
    delete this.jjb[e];
  };
  ab.prototype.sGd = function () {
  };
  ab.prototype.PRd = function () {
  };
  ab.prototype.t8 = function (e, f) {
    this.sP.t8(e, f);
    this.Rpa.t8(e, f);
  };
  ab.prototype.I4 = function (e, f, Ha) {
    this.sP.I4(e, f, Ha);
    this.Rpa.I4(e, f, Ha);
  };
  ab.prototype.kTa = function (e, f) {
    this.sP.kTa(e, f);
    this.Rpa.kTa(e, f);
  };
  ab.prototype.jTa = function (e) {
    this.sP.jTa(e);
    this.Rpa.jTa(e);
  };
  ab.prototype.w5 = function (e) {
    this.sP.w5(e);
  };
  ab.prototype.fpb =
    function () {
    };
  ab.prototype.txd = function () {
    var e = editor.La.Za;
    !0 !== this.YA ? (e = e.Wja(), this.PEa = {}) : e = e.iEa();
    return e;
  };
  ab.prototype.sxd = function (e) {
    var f = editor.La.Za;
    !0 !== this.YA ? f.cka(e) : (f.E6a(e), this.ORd());
  };
  ab.prototype.ESd = function (e) {
    this.gzb();
    e.Ua && this.o2(e.Ua);
    e.xa && this.o2(e.xa);
    e.ya && this.o2(e.ya);
    e.eN && e.eN.Ua && this.o2(e.eN.Ua);
    e.eN && e.eN.xa && this.o2(e.eN.xa);
    e.eN && e.eN.ya && this.o2(e.eN.ya);
    e.dN && e.dN.Ua && this.o2(e.dN.Ua);
    e.dN && e.dN.xa && this.o2(e.dN.xa);
    e.dN && e.dN.ya && this.o2(e.dN.ya);
  };
  ab.prototype.ASd = function (e) {
    e.Ua && this.w5(e.Ua);
    e.xa && this.w5(e.xa);
    e.ya && this.w5(e.ya);
    e.eN && e.eN.Ua && this.w5(e.eN.Ua);
    e.eN && e.eN.xa && this.w5(e.eN.xa);
    e.eN && e.eN.ya && this.w5(e.eN.ya);
    e.dN && e.dN.Ua && this.w5(e.dN.Ua);
    e.dN && e.dN.xa && this.w5(e.dN.xa);
    e.dN && e.dN.ya && this.w5(e.dN.ya);
  };
  ab.prototype.Fwd = function () {
    this.gT = [];
  };
  ab.prototype.Gwd = function () {
  };
  ab.prototype.BEb = function () {
    return !0;
  };
  ab.prototype.Fwd = function () {
    this.gT = [];
    this.TWb = [];
  };
  ab.prototype.Gwd = function () {
    var e = null === AscCommon.History.$K ?
      0 : AscCommon.History.$K + 1, f;
    for (f = 0 >= this.g9 ? AscCommon.History.Sm.length - 1 : AscCommon.History.Ta; e <= f; e++) for (var Ha = AscCommon.History.Sm[e], Pa = 0; Pa < Ha.xd.length; Pa++) this.TWb.push(Ha.xd[Pa].xb);
  };
  ab.prototype.BEb = function (e, f) {
    for (var Da = 0, Pa = this.TWb.length; Da < Pa; ++Da) if (e && e.Ec && !1 === e.Ec(this.TWb[Da])) return !1;
    !1 !== f && this.hoa.push(e);
    return !0;
  };
  ab.prototype.ZDf = function (e, f) {
    null !== f ? this.hoa.length = this.Eud + f : this.Eud = this.hoa.length;
    0 < e.length && (this.UYa.push({ ze: this.hoa.length, wl: e.length }),
      this.hoa = this.hoa.concat(e));
  };
  ab.prototype.Ll = function () {
    if (!0 !== this.Rla()) {
      if (0 >= this.UYa.length) return !1;
      for (var e = [], f = this.UYa[this.UYa.length - 1], Ha = f.ze, Pa = f.wl, bb = Pa - 1; 0 <= bb; --bb) {
        var Va = this.hoa[Ha + bb];
        if (Va) {
          var gb;
          Va.SSa() ? (f = Va.Wa(), this.Thf(f, Ha + Pa) && e.push(f), Va.n$c(!0)) : (f = Va, this.Uhf(f) && e.push(f));
        }
      }
      --this.UYa.length;
      Ha = [];
      bb = 0;
      for (Pa = e.length; bb < Pa; ++bb) {
        var Za = e[bb].Mm();
        Za && (Ha.push(Za), Za.n$c(!0));
      }
      e = this.Za;
      e.yb.D5a(null, !0);
      e.Nzb();
      f = this.txd();
      var ab = {};
      bb = 0;
      for (Pa = Ha.length; bb <
      Pa; ++bb) (gb = Ha[bb].Oa) && gb.parent && gb.parent instanceof AscCommonWord.V1 && (ab[gb.parent.sb()] = gb.parent), Ha[bb].Wg(), this.hoa.push(Ha[bb]);
      var Nc = {};
      Za = {};
      var cc = {}, Rb = {}, ob = {}, Ra = {}, Ia = {}, Ab = !1, $d = !1, re = {};
      bb = 0;
      for (Pa = Ha.length; bb < Pa; ++bb) if (Va = Ha[bb], gb = Va.Oa, gb instanceof AscCommonWord.NBb || gb instanceof AscCommonWord.Z7b) Nc[gb.sb()] = gb; else if (gb instanceof AscCommonWord.bb) Za[gb.sb()] = gb; else if (gb.Mge && !0 === Va.SSa() && gb.pq()) Za[gb.pq().sb()] = gb.pq(), gb instanceof AscCommonWord.Uza && (cc[gb.sb()] =
        gb); else if (gb instanceof AscCommonWord.V1) ab[gb.sb()] = gb; else if (gb instanceof AscCommonWord.Uza) cc[gb.sb()] = gb; else if (gb instanceof AscCommonWord.f3b) Rb[gb.sb()] = gb; else if (gb instanceof AscFormat.Tu || gb instanceof AscFormat.c6 || gb instanceof AscFormat.u2 || gb instanceof AscFormat.b6 || gb instanceof AscFormat.I1) ob[gb.sb()] = gb; else if ('undefined' !== typeof AscCommonSlide) if (AscCommonSlide.Slide && gb instanceof AscCommonSlide.Slide) Ra[gb.sb()] = gb; else if (AscCommonSlide.SlideLayout && gb instanceof AscCommonSlide.SlideLayout) Ia[gb.sb()] =
        gb, Ab = !0; else if (AscCommonSlide.CPresentation && gb instanceof AscCommonSlide.CPresentation && (Va.ka === AscDFH.L5b || Va.ka === AscDFH.JTb)) {
        $d = !0;
        for (var ie = 0; ie < Va.xd.length; ++ie) re[Va.xd[ie].sb()] = Va.xd[ie];
      }
      gb = AscCommon.History;
      gb.nsf();
      if ($d) for (ie = e.ie.length - 1; -1 < ie; --ie) re[e.ie[ie].sb()] && !e.ie[ie].cs && e.HRc(ie);
      for (var xf in Ra) Ra.hasOwnProperty(xf) && Ra[xf].xUf();
      if (Ab) for (ie = e.ie.length - 1; -1 < ie; --ie) if (bb = e.ie[ie].cs, !bb || Ia[bb.sb()]) e.ie[ie].AHf() || e.HRc(ie);
      for (xf in ob) bb = ob[xf], bb.dPb() ? bb.FYb &&
        bb.FYb() : (bb.cn(!0), bb.group ? bb.group.Ejb(bb.sb()) : AscFormat.Slide && bb.parent instanceof AscFormat.Slide ? bb.parent.EQa(bb.sb()) : AscCommonWord.V1 && bb.parent instanceof AscCommonWord.V1 && (ab[bb.parent.sb()] = bb.parent));
      for (xf in ab) ab.hasOwnProperty(xf) && (bb = ab[xf], bb.O8() || (Pa = bb.KP(), bb.gz(), bb.CCb(!1), Pa && (Za[Pa.sb()] = Pa)));
      for (xf in cc) if (cc.hasOwnProperty(xf)) for (Pa = cc[xf], bb = Pa.fa.length - 1; -1 < bb; --bb) Pa.fa[bb] instanceof AscCommonWord.V1 && !Pa.fa[bb].O8() && (Pa.ol(bb, 1, !1), Pa.bb && (Za[Pa.bb.sb()] =
        Pa.bb));
      for (xf in Rb) {
        bb = Rb[xf];
        for (Pa = bb.fa.length - 1; 0 <= Pa; --Pa) 0 >= bb.RHa(Pa).fa.length && bb.rja(Pa);
        if (bb.Fa instanceof AscCommonWord.NBb || bb.Fa instanceof AscCommonWord.Z7b) Nc[bb.Fa.sb()] = bb.Fa;
      }
      for (xf in Nc) {
        Pa = Nc[xf];
        bb = Pa.fa.length;
        for (--bb; 0 <= bb; --bb) Va = Pa.fa[bb], (AscCommonWord.Nyb === Va.Kc() || AscCommonWord.Dqf === Va.Kc()) && 0 >= Va.fa.length && Pa.ol(bb, 1);
        bb = Pa.fa.length;
        if (0 >= bb || AscCommonWord.Nyb !== Pa.fa[bb - 1].Kc()) Va = new AscCommonWord.bb(e.yb, Pa, 0, 0, 0, 0, 0, !1), Pa.mf(bb, Va);
      }
      for (xf in Za) bb = Za[xf],
        bb.D7d(), bb.So(null, null, !0);
      Rb = AscCommon.History.Oaa;
      xf = [];
      bb = 0;
      for (Pa = Ha.length; bb < Pa; ++bb) Za = Ha[bb], Nc = Za.Oa, cc = Rb.wa, Rb.Wb(Nc.sb()), Rb.eb(Za.ka), Za.Ie(Rb), Za = Rb.wa - cc, Va = new AscCommon.rhb, Va.jIc(Nc, {
        Ua: cc,
        R2a: Za
      }), xf.push(Va.LJ);
      Rb = gb.Sm[gb.Sm.length - 1];
      bb = 0;
      for (Pa = Rb.xd.length; bb < Pa; ++bb) Za = Rb.xd[bb].xb, Nc = Za.Oa, Va = new AscCommon.rhb, Va.jIc(Nc, {
        Ua: Rb.xd[bb].TQa.Ua,
        R2a: Rb.xd[bb].TQa.R2a
      }), xf.push(Va.LJ), Ha.push(Rb.xd[bb].xb);
      gb.xFa();
      this.eWc();
      editor.al.g4a(xf, null, null, !1, this.yqa());
      this.sxd(f);
      e.Ozb();
      this.iNd(AscCommon.History.Khb(null, Ha));
      e.vi();
      e.Ge();
      e.Um();
    }
  };
  ab.prototype.gfb = function () {
    return 0 >= this.UYa.length ? !1 : !0;
  };
  ab.prototype.Thf = function (e, f) {
    for (var Da = e.SGc(), Pa = [], bb = Da.length - 1; 0 <= bb; --bb) {
      for (var Va = Da[bb], gb = Va, Za = f, nb = this.hoa.length; Za < nb; ++Za) {
        var ab = this.hoa[Za];
        if (ab) {
          if (e.sR(ab) && !0 !== ab.Aec) {
            for (var cc = ab.SGc(), Rb = 0, ob = cc.length; Rb < ob; ++Rb) if (!1 === this.Shf(Va, cc[Rb])) {
              cc.splice(Rb, 1);
              gb = null;
              break;
            }
            ab.QGc(cc);
          }
          if (!gb) break;
        }
      }
      null !== gb && Pa.push(gb);
    }
    if (0 < Pa.length) e.QGc(Pa);
    else return !1;
    return !0;
  };
  ab.prototype.Shf = function (e, f) {
    if (e.ma) if (f.ma) e.Ua >= f.Ua ? e.Ua++ : f.Ua--; else if (e.Ua > f.Ua) e.Ua--; else {
      if (e.Ua === f.Ua) return !1;
      f.Ua--;
    } else f.ma ? e.Ua >= f.Ua ? e.Ua++ : f.Ua++ : e.Ua > f.Ua ? e.Ua-- : f.Ua++;
    return !0;
  };
  ab.prototype.Uhf = function (e) {
    return e.O8 && !e.O8() ? !1 : !0;
  };
  ab.prototype.iNd = function () {
  };
  bb.prototype.gzb = function () {
    this.sP = [];
    this.Ccb = [];
    this.Hvb = [];
  };
  bb.prototype.o2 = function (e) {
    this.sP.push(e);
  };
  bb.prototype.t8 = function (f, Da) {
    for (var Ha = 0, Pa = this.sP.length; Ha < Pa; ++Ha) for (var bb =
      this.sP[Ha], Va = 0, gb = bb.length; Va < gb; ++Va) {
      var Za = bb[Va];
      if (f === Za.Oa && e !== Za.ze && (Za.ze > Da || Za.ze === Da && !(f instanceof AscCommonWord.Uza))) {
        Za.ze++;
        break;
      }
    }
  };
  bb.prototype.I4 = function (f, Da, Ha) {
    for (var Pa = 0, bb = this.sP.length; Pa < bb; ++Pa) for (var Va = this.sP[Pa], gb = 0, Za = Va.length; gb < Za; ++gb) {
      var nb = Va[gb];
      if (f === nb.Oa && e !== nb.ze) {
        nb.ze > Da + Ha ? nb.ze -= Ha : nb.ze >= Da && (f instanceof AscCommonWord.f3b ? (nb.ze = Da, Va[gb + 1] && Va[gb + 1].Oa instanceof AscCommonWord.dVc && e !== Va[gb + 1].ze && f.fa[Da] && (Va[gb + 1].ze = Math.max(0,
          Math.min(Va[gb + 1].ze, f.fa.length - 1)))) : (nb.ze = Da, nb.dY = !0));
        break;
      }
    }
  };
  bb.prototype.kTa = function (e, f) {
    this.Ccb = [];
    for (var Da = 0, Pa = this.sP.length; Da < Pa; ++Da) for (var bb = this.sP[Da], Va = 0, gb = bb.length; Va < gb; ++Va) {
      var Za = bb[Va];
      e === Za.Oa && Za.ze && Za.ze >= f && this.Ccb.push({ E$d: bb, Mje: Za.ze - f });
    }
  };
  bb.prototype.jTa = function (e) {
    if (e) for (var f = 0, Ha = this.Ccb.length; f < Ha; ++f) {
      var Pa = [];
      Pa.push({ Oa: e, ze: this.Ccb[f].Mje });
      this.sP.push(Pa);
      this.Hvb.push({ xa: this.Ccb[f].E$d, ya: Pa });
    }
  };
  bb.prototype.w5 = function (e) {
    for (var f =
      e, Ha = 0, Pa = this.Hvb.length; Ha < Pa; ++Ha) this.Hvb[Ha].xa === f && (f = this.Hvb[Ha].ya);
    f !== e && 1 === f.length && f[0].Oa instanceof AscCommonWord.Uza ? (Ha = f[0].Oa, Pa = Ha.pq(), AscCommonWord.vVc(Pa, Ha) && (e.length = 0, e.push({
      Oa: Ha,
      ze: f[0].ze
    }), Ha.CJ(e))) : 0 < e.length && e[e.length - 1].Oa instanceof AscCommonWord.Uza && (Ha = e[e.length - 1].Oa, f = e[e.length - 1].ze, Pa = Ha.pq(), AscCommonWord.vVc(Pa, Ha) && (e.length = 0, e.push({
      Oa: Ha,
      ze: f
    }), Ha.CJ(e)));
  };
  bb.prototype.WHc = function (e) {
    for (var f = 0, Ha = this.sP.length; f < Ha; ++f) if (this.sP[f] === e) {
      this.sP.splice(f,
        1);
      break;
    }
  };
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.Fsf = 1500;
  f.AscCommon.rhb = Pa;
  f.AscCommon.GGc = ab;
  f.AscCommon.UOd = bb;
})(window);
'use strict';

function aE() {
  AscCommon.GGc.call(this);
  this.Za = null;
  this.sP = new AscCommon.UOd;
  this.Rpa = new AscCommon.UOd;
  this.jjb = {};
  this.IOa = {};
  this.iMd = {};
  this.J_f = {};
}

aE.prototype = Object.create(AscCommon.GGc.prototype);
tb = aE.prototype;
tb.constructor = aE;
tb.Oi = function () {
  AscCommon.GGc.prototype.Oi.apply(this, arguments);
  this.sGd();
};
tb.Vec = function (f, e, Pa, ab) {
  this.rGd();
  var bb = null === AscCommon.History.$K ? 0 : AscCommon.History.$K + 1;
  if (0 >= this.g9) {
    AscCommon.History.Wkb();
    var nb = AscCommon.History.Sm.length - 1;
  } else nb = AscCommon.History.Ta;
  for (var Da = 0, Ha = Math.min(bb, nb + 1), Eb = 0; Eb < Ha; Eb++) {
    var zb = AscCommon.History.Sm[Eb];
    Da += zb.xd.length;
  }
  var Va = null === AscCommon.History.$K ? null : Da;
  Ha = [];
  var gb = [];
  for (Eb = bb; Eb <= nb; Eb++) {
    zb = AscCommon.History.Sm[Eb];
    AscCommon.History.TNf(Eb, bb, nb, Da, Va);
    for (var Za = 0; Za < zb.xd.length; Za++) {
      var bc = zb.xd[Za],
        Nc = new AscCommon.rhb;
      Nc.jIc(bc.Oa, bc.TQa);
      gb.push(bc.xb);
      Ha.push(Nc.LJ);
    }
  }
  bb = 0;
  if (nb = this.yqa()) {
    bb = this.Gwa.length;
    this.UHc();
    Va = this.Jvb.length;
    for (Za = 0; Za < Va; Za++) Eb = this.Jvb[Za], Eb.Hf.GJ(AscCommon.Qpa, !1), editor.al.RDc(Eb.sb());
    this.Gwa.length = 0;
    this.Jvb.length = 0;
  }
  Va = null === AscCommon.History.$K ? null : Da;
  0 < Ha.length || null !== Va ? (this.ZDf(gb, Va), editor.al.g4a(Ha, Va, e, editor.ZOb, nb), AscCommon.History.p8b = !0) : editor.al.Teb(!!ab, editor.ZOb, null, nb);
  editor.ZOb = !1;
  -1 === this.g9 ? (AscCommon.History.Oi(), AscCommon.History.$K =
    null) : 0 === this.g9 ? (AscCommon.History.Oi(), AscCommon.History.$K = null, this.g9 = 1) : AscCommon.History.Kte(f);
  !1 !== Pa && editor.La.Za.Ge();
  editor.La.Za.awa();
  if (0 !== bb || 1 !== this.g9) editor.La.Za.yb.VD(), editor.La.Za.yb.HG();
  editor.La.Za.KHf();
};
tb.UHc = function () {
  for (var f = this.Gwa.length, e = 0; e < f; e++) {
    var Pa = this.Gwa[e].Hf.Ui();
    AscCommon.YAc != Pa && AscCommon.hjb != Pa ? (this.Gwa[e].Hf.GJ(AscCommon.Qpa, !1), this.Gwa[e] instanceof AscCommonWord.U5d ? editor.S5f() : this.Gwa[e] instanceof AscCommonWord.NBb ? editor.Q5f() : this.Gwa[e] instanceof AscCommon.X7b ? editor.Q1d(this.Gwa[e].sb()) : this.Gwa[e] instanceof AscCommonWord.MGf ? editor.R5f() : this.Gwa[e] instanceof AscCommon.efb && editor.Re('asc_onLockCore', !1)) : AscCommon.YAc === Pa && this.Gwa[e].Hf.GJ(AscCommon.hjb,
      !1);
  }
};
tb.ZFd = function () {
  AscCommon.Rd.zxa(!1);
  AscCommon.Rd.E$c(!1);
  editor.La.Za.b0b(!0);
  editor.hx(Asc.EH.Kr, Asc.OG.DGc);
};
tb.Skb = function () {
  editor.La.Za.Jk.Skb();
};
tb.jJb = function (f) {
  for (var e = [], Pa = this.Fwa.length, ab = 0; ab < Pa; ab++) {
    var bb = this.Fwa[ab];
    if (!0 === bb) return !0;
    !1 !== bb && e.push(bb);
  }
  if (!0 === f && !0 === this.YA) return !1;
  if (0 < e.length) if (editor.al.bOb(e, this.eNc), -1 === this.g9) this.zxa(!0); else {
    Pa = this.Fwa.length;
    for (ab = 0; ab < Pa; ab++) bb = this.Fwa[ab], !0 !== bb && !1 !== bb && (f = AscCommon.qg.Zf(bb), null != f && (f.Hf.GJ(AscCommon.O5, !1), this.o0a(f)));
    this.Fwa.length = 0;
  }
  return !1;
};
tb.eNc = function (f) {
  var e = AscCommon.Rd, Pa = editor;
  if (!0 === e.Rla() && 0 != Pa.KId(e.eNc, f)) {
    e.zxa(!1);
    if (f.lock) {
      f = e.Fwa.length;
      for (var ab = 0; ab < f; ab++) {
        var bb = e.Fwa[ab];
        !0 !== bb && !1 !== bb && (bb = AscCommon.qg.Zf(bb), null != bb && (bb.Hf.GJ(AscCommon.O5), e.o0a(bb)));
      }
    } else f.error && (!0 === Pa.U3 && Pa.gqf(), Pa.La.Za.Kra(), AscCommon.History.Wkb());
    Pa.U3 = !1;
  }
};
tb.k7f = function (f) {
  this.J_f[f.vk()] = f;
};
tb.Mag = function (f) {
  delete this.J_f[f.vk()];
};
tb.G$f = function (f) {
  return this.J_f[f.vk()] === f ? !0 : !1;
};
tb.k0b = function () {
  this.g9 = -1;
};
tb.hae = function () {
  0 >= this.g9 && (this.g9 = !this.Za || this.Za.History.NZ() || this.lCb() ? 0 : 1);
};
tb.gzb = function () {
  this.sP.gzb();
};
tb.o2 = function (f) {
  this.sP.o2(f);
};
tb.WDd = function (f, e, Pa) {
  this.Rpa.WHc(this.PEa[f]);
  this.jjb[f] = e;
  this.Rpa.o2(e);
  this.FWb[f] = Pa;
};
tb.W0a = function (f) {
  this.Rpa.WHc(this.PEa[f]);
  delete this.jjb[f];
  this.Za.yb.nGb(f);
  this.duf(f);
  this.QRd(f);
};
tb.sGd = function () {
  for (var f in this.jjb) this.W0a(f);
};
tb.PRd = function () {
  this.Za.Zc.al.J2b('');
};
tb.t8 = function (f, e) {
  this.sP.t8(f, e);
  this.Rpa.t8(f, e);
};
tb.I4 = function (f, e, Pa) {
  this.sP.I4(f, e, Pa);
  this.Rpa.I4(f, e, Pa);
};
tb.kTa = function (f, e) {
  this.sP.kTa(f, e);
  this.Rpa.kTa(f, e);
};
tb.jTa = function (f) {
  this.sP.jTa(f);
  this.Rpa.jTa(f);
};
tb.w5 = function (f) {
  this.sP.w5(f);
};
tb.fpb = function () {
  for (var f in this.jjb) {
    var e = this.jjb[f];
    !e || 0 >= e.length || (this.Rpa.w5(e), this.bHd(f, e[e.length - 1].Oa, e[e.length - 1].ze, !1));
  }
};
tb.bHd = function (f, e, Pa, ab) {
  var bb = this.Za.yb;
  if (e instanceof AscCommonWord.Uza) {
    var nb = e.pq();
    nb ? (e = nb.CE(e)) ? (e.hf(Pa, e.aT() + 1), (Pa = nb.dtf(e)) && .001 < Pa.Uc ? (bb.j8d(f, this.FWb[f] ? this.FWb[f] : f, Pa.pa, Pa.qa, Pa.Uc, Pa.Le, nb.Or()), this.eGf(f, Pa.pa, Pa.qa, Pa.Le, Pa.Uc, nb, ab), !0 === this.iMd[f] && (this.dye(f), this.QRd(f))) : (bb.nGb(f), this.duf(f), this.QRd(f))) : bb.nGb(f) : bb.nGb(f);
  }
};
tb.O7d = function (f, e, Pa) {
  if (this.Za) {
    var ab = this.Za.yb, bb = ab.Nla(7);
    ab = ab.Nla(3);
    for (var nb in this.IOa) {
      var Da = this.IOa[nb];
      (!0 === Da.ot && Da.bk === Pa && Da.Ej - ab < f && f < Da.Si + ab && Da.Bo - ab < e && e < Da.hk + ab || Math.abs(f - Da.pa) < bb && Da.qa - ab < e && e < Da.qa + Da.Vb + ab && Da.bk === Pa) && this.dye(nb);
    }
  }
};
tb.dye = function (f) {
  if (this.Za) {
    var e = this.Za.Zc, Pa = this.Za.yb;
    if (this.IOa[f]) {
      var ab = this.IOa[f];
      ab.mUa && clearTimeout(ab.mUa);
      ab.mUa = setTimeout(function () {
        ab.mUa = null;
        e.XNd(f);
      }, AscCommon.Fsf);
      var bb = AscCommon.MAb(this.FWb[f] ? this.FWb[f] : f, null, !0);
      Pa = Pa.OHf(f);
      bb && Pa && this.GBe(f, Pa.pa, Pa.qa, bb);
    }
  }
};
tb.TLc = function (f) {
  this.iMd[f] = !0;
};
tb.QRd = function (f) {
  delete this.iMd[f];
};
tb.eGf = function (f, e, Pa, ab, bb, nb, Da) {
  if (this.IOa[f]) {
    var Ha = this.IOa[f];
    Ha.mUa ? !0 === Da && (Da = this.Za.Zc, clearTimeout(Ha.mUa), Ha.mUa = null, Da.XNd(f)) : Ha.mUa = null;
    Ha.pa = e;
    Ha.qa = Pa;
    Ha.bk = ab;
    Ha.Vb = bb;
  } else Ha = { pa: e, qa: Pa, Vb: bb, bk: ab, ot: !1, mUa: null }, this.IOa[f] = Ha;
  (ab = nb.Or()) ? (Ha.ot = !0, f = ab.Yb(Ha.pa, Ha.qa), e = ab.Xb(Ha.pa, Ha.qa), Pa = ab.Yb(Ha.pa, Ha.qa + Ha.Vb), ab = ab.Xb(Ha.pa, Ha.qa + Ha.Vb), Ha.Ej = Math.min(f, Pa), Ha.Bo = Math.min(e, ab), Ha.Si = Math.max(f, Pa), Ha.hk = Math.max(e, ab)) : Ha.ot = !1;
};
tb.duf = function (f) {
  this.IOa[f] && (this.IOa[f].mUa && (this.Za.Zc.XNd(f), clearTimeout(this.IOa[f].mUa)), delete this.IOa[f]);
};
tb.GBe = function (f, e, Pa, ab) {
  if (this.Za) {
    var bb = this.IOa[f];
    bb && bb.mUa && this.Za.Zc.J5f(f, e, Pa, ab);
  }
};
tb.iNd = function (f) {
  this.Za.W3b(f);
};
window.AscCommon = window.AscCommon || {};
window.AscCommon.gPd = aE;
window.AscCommon.Rd = new aE;
'use strict';
(function (f) {
  function e() {
    this.Ja = '_macrosGlobalId';
    this.Hf = new AscCommon.e5;
    this.xb = '';
    AscCommon.qg.ma(this, this.Ja);
  }

  function Pa(e, f, Pa) {
    AscDFH.pD.call(this, e, f, Pa);
  }

  e.prototype.iob = function (e) {
    AscCommon.History.ma(new Pa(this, this.xb, e));
    this.xb = e;
  };
  e.prototype.Ura = function () {
    return this.xb;
  };
  e.prototype.sb = function () {
    return this.Ja;
  };
  e.prototype.y7d = function () {
    this.Hf.gn(this.Ja);
  };
  e.prototype.Vg = function (e) {
    e.eb(AscDFH.Ozc);
    e.Wb('' + this.Ja);
    e.Wb(this.xb);
  };
  e.prototype.ah = function (e) {
    this.Ja = e.ic();
    this.xb = e.ic();
  };
  e.prototype.nf = function () {
  };
  AscDFH.Ca[AscDFH.QRb] = Pa;
  AscDFH.Dc[AscDFH.QRb] = [AscDFH.QRb];
  Pa.prototype = Object.create(AscDFH.pD.prototype);
  Pa.prototype.constructor = Pa;
  Pa.prototype.ka = AscDFH.QRb;
  Pa.prototype.Sc = function (e) {
    this.Oa.xb = e;
  };
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.EUc = e;
})(window);
'use strict';
(function (f, e) {
  function Pa(Da, Ha) {
    f.AscDesktopEditor && f.AscDesktopEditor.CreateEditorApi();
    this.QC = Ha;
    this.Etd = this.T4 = !1;
    this.CXb = null;
    this.e1c = Da['id-view'] || '';
    this.Ve = null;
    this.PR = !0 === Da.mobile;
    this.NLd = !0 === Da.embedded;
    this.iy = !1;
    this.FEb = Asc.rDb.Af;
    this.NIb = this.bs = this.m5 = null;
    this.DocumentType = 0;
    this.Eq = null;
    this.tia = this.KY = e;
    this.mgb = 'null';
    this.cVd = null;
    this.jnd = e;
    this.wna = this.EDb = 'null';
    this.knd = Asc.yib.mcd;
    this.DPc = e;
    this.E0b = AscCommon.hrb.Af;
    this.ZNa = new AscCommon.l6d;
    Ha = f.location.protocol;
    this.nyf = (Ha && '' !== Ha ? Ha + '//' : '') + f.location.host;
    this.rVf = f.location.pathname;
    this.ANc = !1;
    this.zfb = 0;
    this.$mb = [];
    this.PIb = [];
    this.sjd = 0;
    this.pcb = null;
    this.GZe = 2E3;
    this.HZe = 6E5;
    this.$Bf = 1E3;
    this.KYa = this.vrb = this.ZOb = this.JY = !1;
    this.Bw = AscCommon.Bw.se(Da.translate);
    this.XOa = this.MDa = this.Arb = null;
    this.ZMc = this.S1b = this.U3 = !1;
    this.EV = e;
    this.al = new AscCommon.fEd;
    this.IQc = !0;
    this.INb = [];
    this.CLb = '';
    this.doa = null;
    this.nCa = this.pWb = this.oWb = !1;
    this.a0 = this.HQc = this.Ltd = !0;
    this.tAc = this.jIa = !1;
    this.TWa =
      null;
    this.CBa = !1;
    this.Yrb = this.gLa = null;
    this.Csb = !1;
    this.lpb = null;
    this.Mtd = this.D6b = this.v1a = this.kka = this.TEa = !1;
    this.lba = this.lka = this.OFc = null;
    this.PZf = !1;
    this.NAc = 0;
    this.DNa = [];
    this.qOa = '';
    this.BXb = this.sea = null;
    this.Bmd = !1 !== Da.copyoutenabled;
    this.VP = Da.watermark_on_draw ? new AscCommon.jVc(Da.watermark_on_draw) : null;
    this.v7a = !1;
    this.j3 = new AscCommon.C6d;
    this.OQc = !0;
    this.jdb = [];
    this.hcb = !1;
    return this;
  }

  var ab = AscCommon.$z, bb = AscCommon.Ykd, nb = AscCommon.uMc, Da = Asc.rl, Ha = Asc.OG, Eb = Asc.EH;
  Pa.prototype.Z1 =
    function () {
      var e = this;
      this.Ve = document.getElementById(this.e1c);
      AscCommon.Bfe(function (f, Va) {
        Da.Fg.nY !== f ? e.Re('asc_onError', f, Da.il.ep) : e.ric([Va]);
        e.hx(Eb.Kr, Ha.J4);
      });
      AscCommon.Odf(this.Mfd(), function () {
        e.T4 = !0;
        e.fjc();
        e.Nvd();
      }, function () {
        e.Re('asc_onError', Asc.rl.Fg.pcc, Da.il.xV);
      });
      AscFonts.load(e, function () {
        e.Etd = !0;
        e.zXb(null);
      }, function () {
        e.Re('asc_onError', Asc.rl.Fg.pcc, Da.il.xV);
      });
      var Pa = f.onerror;
      f.onerror = function (Ha, Va, gb, bb, nb) {
        f.onerror = Pa;
        e.al.wDa('Error: ' + Ha + ' Script: ' + Va + ' Line: ' +
          gb + ':' + bb + ' userAgent: ' + (navigator.userAgent || navigator.vendor || f.opera) + ' platform: ' + navigator.platform + ' isLoadFullApi: ' + e.T4 + ' isDocumentLoadComplete: ' + e.nCa + ' StackTrace: ' + (nb ? nb.stack : ''));
        e.T4 && e.nCa && (e.Re('asc_onError', Asc.rl.Fg.ZYc, Da.il.ep), e.EVa(!0));
        return Pa ? Pa.apply(this, arguments) : !1;
      };
      AscCommon.qf.oMa && (document.body.onmousewheel = function (e) {
        e.stopPropagation && e.stopPropagation();
        return e.returnValue = !1;
      });
    };
  Pa.prototype.Mfd = function () {
    var e = '';
    switch (this.QC) {
      case ab.zm:
        e = 'word';
        break;
      case ab.uO:
        e = 'cell';
        break;
      case ab.RA:
        e = 'slide';
    }
    return e;
  };
  Pa.prototype.FPe = function () {
    return '../Common/Images/';
  };
  Pa.prototype.IRe = function () {
    return this.wna;
  };
  Pa.prototype.hid = function () {
    return null;
  };
  Pa.prototype.oRe = function () {
    var e = this.Ooc();
    return e ? e.zn() : null;
  };
  Pa.prototype.Ooc = function () {
    return null;
  };
  Pa.prototype.Wid = function () {
  };
  Pa.prototype.BOc = function (Da) {
    var Ha = this.Eq;
    Da && (this.Eq = Da);
    this.Eq && (this.KY = this.Eq.TBa(), this.tia = this.Eq.Aqa(), this.mgb = this.Eq.ZJc(), this.wna = this.Eq.iQc(),
      this.EDb = this.Eq.gab(), this.jnd = this.Eq.E8e(), this.DPc = this.Eq.OFa(), this.EV = new AscCommon.NNb, this.EV.uv(this.Eq.Aqa()), this.EV.KEc(this.Eq.UDb()), this.EV.lof(this.Eq.rpc()), this.EV.Bof(this.Eq.wpc()), this.al.XYb(this.KY), this.VP && this.VP.SVc(this));
    AscCommon.h1e === this.mgb ? (this.U3 = !0, AscCommon.AE.U3 = !0, this.Eq.Vxd(!0)) : AscCommon.Cff === this.mgb && this.Eq.Vxd(!0);
    e === f.AscDesktopEditor || this.Eq && this.Eq.XNa || f.AscDesktopEditor.SetDocumentName(this.wna);
    this.U3 || e === f.AscDesktopEditor || e === f.AscDesktopEditor.CryptoMode ||
    this.Eq.Xkf(0 < f.AscDesktopEditor.CryptoMode);
    Ha || this.Nvd();
  };
  Pa.prototype.b7 = function () {
  };
  Pa.prototype.pwa = function (e) {
    var f = !1;
    this.La.hsa && (f = !0);
    f && e && this.La.Xuf && (f = !1);
    return f;
  };
  Pa.prototype.acb = function () {
    return this.Bmd;
  };
  Pa.prototype.F_d = function () {
    return !1;
  };
  Pa.prototype.Re = function () {
  };
  Pa.prototype.BKb = function () {
    this.Re('asc_onOpenDocumentProgress', this.ZNa);
  };
  Pa.prototype.Opf = function (e) {
    this.iy || this.Re('asc_onInitEditorFonts', e);
  };
  Pa.prototype.fG = function (e, f) {
    this.Re('asc_onStartAction',
      e, f);
    Eb.Kr === e && this.Egb();
  };
  Pa.prototype.hx = function (e, f) {
    this.Re('asc_onEndAction', e, f);
    Eb.Kr === e && this.kgb();
  };
  Pa.prototype.P5f = function () {
    this.Re('asc_OnTryUndoInFastCollaborative');
  };
  Pa.prototype.EVa = function () {
  };
  Pa.prototype.nZe = function (e) {
    this.FEb = e;
  };
  Pa.prototype.etb = function () {
    return this.iy;
  };
  Pa.prototype.GH = function () {
    return !this.iy && this.FEb === Asc.rDb.Af;
  };
  Pa.prototype.XLd = function () {
    return this.FEb === Asc.rDb.fNc;
  };
  Pa.prototype.tKc = function () {
    return this.FEb === Asc.rDb.o5c;
  };
  Pa.prototype.G0 = function () {
    return 0 !==
      this.zfb;
  };
  Pa.prototype.Egb = function () {
    ++this.zfb;
  };
  Pa.prototype.kgb = function () {
    this.zfb--;
    0 > this.zfb && (this.zfb = 0);
    if (!this.G0()) {
      for (var e = this.$mb.length, f = 0; f < e; f++) this.$mb[f](this.PIb[f]);
      this.$mb.splice(0, e);
      this.PIb.splice(0, e);
    }
  };
  Pa.prototype.KId = function (e, f) {
    return this.G0() ? (this.$mb[this.$mb.length] = e, this.PIb[this.PIb.length] = f, !1) : !0;
  };
  Pa.prototype.Ige = function () {
    var e = !1;
    switch (this.QC) {
      case ab.zm:
        e = !this.F_d();
        break;
      case ab.RA:
        e = !0;
    }
    return e;
  };
  Pa.prototype.qRc = function () {
    this.Re('asc_onPrint');
  };
  Pa.prototype.wOc = function (e, Da) {
    this.E0b = AscCommon.hrb.YNa;
    var Va = null;
    this.Eq && this.Eq.XNa || (Va = {
      c: 'open',
      id: this.KY,
      userid: this.tia,
      format: this.EDb,
      url: this.mgb,
      title: this.wna,
      nobase64: !0
    }, e && (Va.serverVersion = e.o1d, Va.closeonerror = e.G_d, Va.jwt = e.Y1d, Va.userconnectionid = this.al.zOa()));
    e ? this.al.oGc(Va) : this.al.cOb(this.etb(), Va);
    Da || this.fG(Eb.Kr, Ha.YNa);
    if (this.Eq.Lpd() && f.AscDesktopEditor && !f.AscDesktopEditor.IsLocalFile(!0)) {
      var Pa = this;
      f.AscDesktopEditor.OpenFileCrypt(this.Eq.iQc(), this.Eq.ZJc(),
        function () {
          Pa.Qvd.apply(Pa, arguments);
        });
    }
  };
  Pa.prototype.vNe = function () {
    this.wNe();
  };
  Pa.prototype.wNe = function () {
    var e = new AscCommon.q5c;
    e.data = 'XLSY;v2;5958;BAKAAgAAA7kDAAAEzAMAAABaBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADUBAAAAHgAAAAEZAAAAAAAAAAABAAAAAAIAAAAABAAAAAAFAAAAAAQKAAAABQAAAAAFAAAAAAYvAAAAByoAAAABBgMAAAACAQEEBg4AAABDAGEAbABpAGIAcgBpAAkBAQYFAAAAAAAAJkAOHQAAAAMYAAAABgQAAAAABwQAAAAACAQAAAAACQQAAAAAAiMAAAADHgAAAAYEAAAAAAcEAAAAAAgEAAAAAAkEAAAAAAwEAAAAAA8oAAAAECMAAAAABAAAAAAAAAAEDAAAAE4AbwByAG0AYQBsAAUEAAAAAAAAAAoAAAAADE4AAAAAIgAAAFQAYQBiAGwAZQBTAHQAeQBsAGUATQBlAGQAaQB1AG0AMgABIgAAAFAAaQB2AG8AdABTAHQAeQBsAGUATABpAGcAaAB0ADEANgAPAAAAAAAAAAABBQAAAAIAAAAAigAAAACFAAAAARgAAAAABgwAAABTAGgAZQBlAHQAMQABBAEAAAAEBAAAAEEAMQAWBQAAABcAAAAACwoAAAABBQAAAAAAAC5ADjwAAAAABUfhehSuxzFAAQXMzMzMzAwzQAIFR+F6FK7HMUADBczMzMzMDDNABAV7FK5H4XoeQAUFexSuR+F6HkAJAAAAAOgSAAAF4xIAABTeEgAA+gAMAAAATwBmAGYAaQBjAGUAIABUAGgAZQBtAGUA+wCxEgAAABUBAAD6AAYAAABPAGYAZgBpAGMAZQD7DB4AAAAEGQAAAPoABgAAAHcAaQBuAGQAbwB3AAH/Av8D//sNDQAAAAEIAAAA+gDuAewC4fsIJgAAAAQhAAAA+gAKAAAAdwBpAG4AZABvAHcAVABlAHgAdAABAAIAAwD7Cg0AAAABCAAAAPoAgAEAAoD7AA0AAAABCAAAAPoATwGBAr37CQ0AAAABCAAAAPoAHwFJAn37AQ0AAAABCAAAAPoAwAFQAk37Ag0AAAABCAAAAPoAmwG7Aln7Aw0AAAABCAAAAPoAgAFkAqL7Cw0AAAABCAAAAPoAAAEAAv/7BA0AAAABCAAAAPoASwGsAsb7BQ0AAAABCAAAAPoA9wGWAkb7AakKAAD6AAkAAABDAG8AbQBwAG8AcwBpAHQAZQD7AEMFAAAAFQAAAPoDBwAAAEMAYQBsAGkAYgByAGkA+wERAAAA+gMFAAAAQQByAGkAYQBsAPsCEQAAAPoDBQAAAEEAcgBpAGEAbAD7A/gEAAAeAAAAACQAAAD6AAQAAABKAHAAYQBuAAEIAAAALf8z/yAAMP+0MLcwwzCvMPsAHgAAAPoABAAAAEgAYQBuAGcAAQUAAADRuUDHIADgrBW1+wAYAAAA+gAEAAAASABhAG4AcwABAgAAAItbU0/7AB4AAAD6AAQAAABIAGEAbgB0AAEFAAAArl/fjmNr0Z7UmvsAHgAAAPoABAAAAEEAcgBhAGIAAQUAAABBAHIAaQBhAGwA+wAeAAAA+gAEAAAASABlAGIAcgABBQAAAEEAcgBpAGEAbAD7ACgAAAD6AAQAAABUAGgAYQBpAAEKAAAAQwBvAHIAZABpAGEAIABOAGUAdwD7AB4AAAD6AAQAAABFAHQAaABpAAEFAAAATgB5AGEAbABhAPsAIAAAAPoABAAAAEIAZQBuAGcAAQYAAABWAHIAaQBuAGQAYQD7ACAAAAD6AAQAAABHAHUAagByAAEGAAAAUwBoAHIAdQB0AGkA+wAkAAAA+gAEAAAASwBoAG0AcgABCAAAAEQAYQB1AG4AUABlAG4AaAD7AB4AAAD6AAQAAABLAG4AZABhAAEFAAAAVAB1AG4AZwBhAPsAHgAAAPoABAAAAEcAdQByAHUAAQUAAABSAGEAYQB2AGkA+wAkAAAA+gAEAAAAQwBhAG4AcwABCAAAAEUAdQBwAGgAZQBtAGkAYQD7ADwAAAD6AAQAAABDAGgAZQByAAEUAAAAUABsAGEAbgB0AGEAZwBlAG4AZQB0ACAAQwBoAGUAcgBvAGsAZQBlAPsAOAAAAPoABAAAAFkAaQBpAGkAARIAAABNAGkAYwByAG8AcwBvAGYAdAAgAFkAaQAgAEIAYQBpAHQAaQD7ADgAAAD6AAQAAABUAGkAYgB0AAESAAAATQBpAGMAcgBvAHMAbwBmAHQAIABIAGkAbQBhAGwAYQB5AGEA+wAiAAAA+gAEAAAAVABoAGEAYQABBwAAAE0AVgAgAEIAbwBsAGkA+wAgAAAA+gAEAAAARABlAHYAYQABBgAAAE0AYQBuAGcAYQBsAPsAIgAAAPoABAAAAFQAZQBsAHUAAQcAAABHAGEAdQB0AGEAbQBpAPsAHgAAAPoABAAAAFQAYQBtAGwAAQUAAABMAGEAdABoAGEA+wA2AAAA+gAEAAAAUwB5AHIAYwABEQAAAEUAcwB0AHIAYQBuAGcAZQBsAG8AIABFAGQAZQBzAHMAYQD7ACIAAAD6AAQAAABPAHIAeQBhAAEHAAAASwBhAGwAaQBuAGcAYQD7ACIAAAD6AAQAAABNAGwAeQBtAAEHAAAASwBhAHIAdABpAGsAYQD7ACYAAAD6AAQAAABMAGEAbwBvAAEJAAAARABvAGsAQwBoAGEAbQBwAGEA+wAsAAAA+gAEAAAAUwBpAG4AaAABDAAAAEkAcwBrAG8AbwBsAGEAIABQAG8AdABhAPsAMgAAAPoABAAAAE0AbwBuAGcAAQ8AAABNAG8AbgBnAG8AbABpAGEAbgAgAEIAYQBpAHQAaQD7AB4AAAD6AAQAAABWAGkAZQB0AAEFAAAAQQByAGkAYQBsAPsANAAAAPoABAAAAFUAaQBnAGgAARAAAABNAGkAYwByAG8AcwBvAGYAdAAgAFUAaQBnAGgAdQByAPsAIgAAAPoABAAAAEcAZQBvAHIAAQcAAABTAHkAbABmAGEAZQBuAPsBQwUAAAAVAAAA+gMHAAAAQwBhAGwAaQBiAHIAaQD7AREAAAD6AwUAAABBAHIAaQBhAGwA+wIRAAAA+gMFAAAAQQByAGkAYQBsAPsD+AQAAB4AAAAAJAAAAPoABAAAAEoAcABhAG4AAQgAAAAt/zP/IAAw/7QwtzDDMK8w+wAeAAAA+gAEAAAASABhAG4AZwABBQAAANG5QMcgAOCsFbX7ABgAAAD6AAQAAABIAGEAbgBzAAECAAAAi1tTT/sAHgAAAPoABAAAAEgAYQBuAHQAAQUAAACuX9+OY2vRntSa+wAeAAAA+gAEAAAAQQByAGEAYgABBQAAAEEAcgBpAGEAbAD7AB4AAAD6AAQAAABIAGUAYgByAAEFAAAAQQByAGkAYQBsAPsAKAAAAPoABAAAAFQAaABhAGkAAQoAAABDAG8AcgBkAGkAYQAgAE4AZQB3APsAHgAAAPoABAAAAEUAdABoAGkAAQUAAABOAHkAYQBsAGEA+wAgAAAA+gAEAAAAQgBlAG4AZwABBgAAAFYAcgBpAG4AZABhAPsAIAAAAPoABAAAAEcAdQBqAHIAAQYAAABTAGgAcgB1AHQAaQD7ACQAAAD6AAQAAABLAGgAbQByAAEIAAAARABhAHUAbgBQAGUAbgBoAPsAHgAAAPoABAAAAEsAbgBkAGEAAQUAAABUAHUAbgBnAGEA+wAeAAAA+gAEAAAARwB1AHIAdQABBQAAAFIAYQBhAHYAaQD7ACQAAAD6AAQAAABDAGEAbgBzAAEIAAAARQB1AHAAaABlAG0AaQBhAPsAPAAAAPoABAAAAEMAaABlAHIAARQAAABQAGwAYQBuAHQAYQBnAGUAbgBlAHQAIABDAGgAZQByAG8AawBlAGUA+wA4AAAA+gAEAAAAWQBpAGkAaQABEgAAAE0AaQBjAHIAbwBzAG8AZgB0ACAAWQBpACAAQgBhAGkAdABpAPsAOAAAAPoABAAAAFQAaQBiAHQAARIAAABNAGkAYwByAG8AcwBvAGYAdAAgAEgAaQBtAGEAbABhAHkAYQD7ACIAAAD6AAQAAABUAGgAYQBhAAEHAAAATQBWACAAQgBvAGwAaQD7ACAAAAD6AAQAAABEAGUAdgBhAAEGAAAATQBhAG4AZwBhAGwA+wAiAAAA+gAEAAAAVABlAGwAdQABBwAAAEcAYQB1AHQAYQBtAGkA+wAeAAAA+gAEAAAAVABhAG0AbAABBQAAAEwAYQB0AGgAYQD7ADYAAAD6AAQAAABTAHkAcgBjAAERAAAARQBzAHQAcgBhAG4AZwBlAGwAbwAgAEUAZABlAHMAcwBhAPsAIgAAAPoABAAAAE8AcgB5AGEAAQcAAABLAGEAbABpAG4AZwBhAPsAIgAAAPoABAAAAE0AbAB5AG0AAQcAAABLAGEAcgB0AGkAawBhAPsAJgAAAPoABAAAAEwAYQBvAG8AAQkAAABEAG8AawBDAGgAYQBtAHAAYQD7ACwAAAD6AAQAAABTAGkAbgBoAAEMAAAASQBzAGsAbwBvAGwAYQAgAFAAbwB0AGEA+wAyAAAA+gAEAAAATQBvAG4AZwABDwAAAE0AbwBuAGcAbwBsAGkAYQBuACAAQgBhAGkAdABpAPsAHgAAAPoABAAAAFYAaQBlAHQAAQUAAABBAHIAaQBhAGwA+wA0AAAA+gAEAAAAVQBpAGcAaAABEAAAAE0AaQBjAHIAbwBzAG8AZgB0ACAAVQBpAGcAaAB1AHIA+wAiAAAA+gAEAAAARwBlAG8AcgABBwAAAFMAeQBsAGYAYQBlAG4A+wLkBgAA+gAGAAAATwBmAGYAaQBjAGUA+wCyAgAAAwAAAAATAAAAAw4AAAAACQAAAAMEAAAA+gAO+wBDAQAABD4BAAD6AQH7ACcBAAADAAAAAFwAAAD6AAAAAAD7AFAAAAADSwAAAPoADvsAQgAAAAIAAAABGAAAAPoABgAAAGEAOgB0AGkAbgB0AAFQwwAA+wEcAAAA+gAIAAAAYQA6AHMAYQB0AE0AbwBkAAHgkwQA+wBcAAAA+gC4iAAA+wBQAAAAA0sAAAD6AA77AEIAAAACAAAAARgAAAD6AAYAAABhADoAdABpAG4AdAABiJAAAPsBHAAAAPoACAAAAGEAOgBzAGEAdABNAG8AZAAB4JMEAPsAXAAAAPoAoIYBAPsAUAAAAANLAAAA+gAO+wBCAAAAAgAAAAEYAAAA+gAGAAAAYQA6AHQAaQBuAHQAAZg6AAD7ARwAAAD6AAgAAABhADoAcwBhAHQATQBvAGQAATBXBQD7AQkAAAD6AEAx9wABAfsASQEAAAREAQAA+gEB+wAtAQAAAwAAAABeAAAA+gAAAAAA+wBSAAAAA00AAAD6AA77AEQAAAACAAAAARoAAAD6AAcAAABhADoAcwBoAGEAZABlAAE4xwAA+wEcAAAA+gAIAAAAYQA6AHMAYQB0AE0AbwBkAAHQ+wEA+wBeAAAA+gCAOAEA+wBSAAAAA00AAAD6AA77AEQAAAACAAAAARoAAAD6AAcAAABhADoAcwBoAGEAZABlAAFIawEA+wEcAAAA+gAIAAAAYQA6AHMAYQB0AE0AbwBkAAHQ+wEA+wBeAAAA+gCghgEA+wBSAAAAA00AAAD6AA77AEQAAAACAAAAARoAAAD6AAcAAABhADoAcwBoAGEAZABlAAEwbwEA+wEcAAAA+gAIAAAAYQA6AHMAYQB0AE0AbwBkAAFYDwIA+wEJAAAA+gBAMfcAAQD7AQoBAAADAAAAAIMAAAD6AAABAAIBAzUlAAD7AFwAAAADVwAAAABSAAAAA00AAAD6AA77AEQAAAACAAAAARoAAAD6AAcAAABhADoAcwBoAGEAZABlAAEYcwEA+wEcAAAA+gAIAAAAYQA6AHMAYQB0AE0AbwBkAAEomgEA+wEEAAAA+gAG+wIHAAAA+gAAAAAA+wA6AAAA+gAAAQACAQM4YwAA+wATAAAAAw4AAAAACQAAAAMEAAAA+gAO+wEEAAAA+gAG+wIHAAAA+gAAAAAA+wA6AAAA+gAAAQACAQPUlAAA+wATAAAAAw4AAAAACQAAAAMEAAAA+gAO+wEEAAAA+gAG+wIHAAAA+gAAAAAA+wITAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAPuAgAAAwAAAAATAAAAAw4AAAAACQAAAAMEAAAA+gAO+wCmAQAABKEBAAD6AQH7AEgBAAADAAAAAFwAAAD6AAAAAAD7AFAAAAADSwAAAPoADvsAQgAAAAIAAAABGAAAAPoABgAAAGEAOgB0AGkAbgB0AAFAnAAA+wEcAAAA+gAIAAAAYQA6AHMAYQB0AE0AbwBkAAEwVwUA+wB7AAAA+gBAnAAA+wBvAAAAA2oAAAD6AA77AGEAAAADAAAAARgAAAD6AAYAAABhADoAdABpAG4AdAAByK8AAPsBGgAAAPoABwAAAGEAOgBzAGgAYQBkAGUAAbiCAQD7ARwAAAD6AAgAAABhADoAcwBhAHQATQBvAGQAATBXBQD7AF4AAAD6AKCGAQD7AFIAAAADTQAAAPoADvsARAAAAAIAAAABGgAAAPoABwAAAGEAOgBzAGgAYQBkAGUAASBOAAD7ARwAAAD6AAgAAABhADoAcwBhAHQATQBvAGQAARjkAwD7AksAAAD6AAD7AEIAAAD6AAUAAAA1ADAAMAAwADAAAQYAAAAtADgAMAAwADAAMAACBQAAADUAMAAwADAAMAADBgAAADEAOAAwADAAMAAwAPsAIgEAAAQdAQAA+gEB+wDIAAAAAgAAAABcAAAA+gAAAAAA+wBQAAAAA0sAAAD6AA77AEIAAAACAAAAARgAAAD6AAYAAABhADoAdABpAG4AdAABgDgBAPsBHAAAAPoACAAAAGEAOgBzAGEAdABNAG8AZAAB4JMEAPsAXgAAAPoAoIYBAPsAUgAAAANNAAAA+gAO+wBEAAAAAgAAAAEaAAAA+gAHAAAAYQA6AHMAaABhAGQAZQABMHUAAPsBHAAAAPoACAAAAGEAOgBzAGEAdABNAG8AZAABQA0DAPsCRwAAAPoAAPsAPgAAAPoABQAAADUAMAAwADAAMAABBQAAADUAMAAwADAAMAACBQAAADUAMAAwADAAMAADBQAAADUAMAAwADAAMAD7BAQAAAAAAAAA';
    e.tib = AscCommon.Tld(e.data, AscCommon.Jpa.dOa);
    this.zXb(e);
  };
  Pa.prototype.Uzb = function () {
  };
  Pa.prototype.BHd = function () {
  };
  Pa.prototype.Hgd = function (e) {
    var f = this;
    AscCommon.Mff(e, this.cVd, AscCommon.Jpa.dOa, function (e, Ha) {
      e || !Ha.tib && !Asc.L_e.test(f.Eq && f.Eq.gab()) ? f.Re('asc_onError', e ? Da.Fg.cT : Da.Fg.jFa, Da.il.xV) : f.zXb(Ha);
    });
    this.BHd();
  };
  Pa.prototype.Qvd = function (e) {
    if (this.T4) if (this.BXb = null, null == e) this.Re('asc_onError', Da.Fg.jFa, Da.il.xV); else {
      var f = new AscCommon.q5c;
      f.tib = AscCommon.Tld(e, AscCommon.Jpa.dOa);
      f.data = e;
      this.FZa(f);
      this.Re('asc_onDocumentPassword', '' !== this.qOa);
    } else this.BXb = e;
  };
  Pa.prototype.U8a = function () {
  };
  Pa.prototype.hjd = function () {
    this.ANc = !0;
    this.Uzb();
  };
  Pa.prototype.FZe = function () {
    this.fG(Eb.oO, Ha.WG);
  };
  Pa.prototype.pRc = function () {
    var e = this;
    this.nCa = !0;
    f.IS_NATIVE_EDITOR || setInterval(function () {
      e.bKe();
    }, 40);
    this.hx(Eb.Kr, Ha.YNa);
    this.Re('asc_onDocumentContentReady');
    f.Ni && f.Ni.CQa('onDocumentContentReady');
    ab.uO === this.QC && this.Ovd(this.Nwf());
    this.Eq && this.pluginMethod_SetProperties(this.Eq.OFa());
  };
  Pa.prototype.Jxd = function (e, f) {
    AscCommon.uMc.Af !== f ? this.Re(f, e, function () {
    }) : AscCommon.getFile(e);
  };
  Pa.prototype.SWa = function () {
    return this.al.SWa();
  };
  Pa.prototype.KYe = function (e) {
    this.tAc = e;
  };
  Pa.prototype.q3a = function () {
  };
  Pa.prototype.Ogd = function () {
  };
  Pa.prototype.pjc = function () {
    return !1;
  };
  Pa.prototype.mgd = function () {
    return !1;
  };
  Pa.prototype.Kgd = function (e) {
    var f = this;
    0 == e.saveLock ? this.G0() ? (this.al.Doa = function () {
      f.a0 = !0;
      f.jIa = !1;
      f.pcb = null;
      f.JY && f.xNb();
    }, this.al.VZb()) : (this.fG(Eb.oO, Ha.qG), (this.ZOb =
      this.JY) && this.vrb && this.al.Hua(!0), this.JY = this.vrb = !1, this.Lgd()) : (e = this.al.oXa(), AscCommon.uGb.hWc === e || AscCommon.uGb.gWc === e ? (this.jIa = !1, this.a0 = !0) : this.jIa ? setTimeout(function () {
      f.al.t3a(function (e) {
        f.Kgd(e);
      });
    }, 1E3) : (this.a0 = !0, this.JY && this.xNb()));
  };
  Pa.prototype.Lgd = function () {
  };
  Pa.prototype.bKe = function () {
    !this.a0 || this.iy || !this.JY && 0 === this.sjd || (this.JY ? (this.pcb = new Date, this.cba(!0, !0)) : this.ffd());
  };
  Pa.prototype.ffd = function () {
  };
  Pa.prototype.$Sd = function () {
    return !0;
  };
  Pa.prototype.xNb =
    function (e) {
      e && this.nCa && !this.a0 && this.al.wDa('Error: connection state changed waitAuth;this.canSave:' + this.a0);
      this.nCa ? (this.vrb = this.JY = !0, this.a0 && (this.al.Teb(!1, !0, AscCommon.History.u_c()), this.BBb(), AscCommon.History.qte(), this.q3a(), this.Ogd(), this.JY = this.vrb = !1)) : (this.BBb(), this.al.Teb(!1, !0));
    };
  Pa.prototype.WXe = function (e) {
    'number' === typeof e && (this.sjd = 1E3 * e);
  };
  Pa.prototype.bQe = function (e) {
    this.al.lEc(e);
  };
  Pa.prototype.aQe = function () {
    this.al.Roc();
  };
  Pa.prototype.cQe = function () {
    this.al.gpc();
  };
  Pa.prototype.LRe = function () {
    this.MSd();
  };
  Pa.prototype.gjc = function () {
    this.oWb && this.pWb && this.Re('asc_onGetEditorPermissions', new AscCommon.ckc);
  };
  Pa.prototype.bqd = function () {
  };
  Pa.prototype.MSd = function () {
    var Va = this;
    if (null == this.EV || null == this.EV.zD()) this.EV = new AscCommon.NNb, this.EV.uv('Unknown'), this.EV.KEc('Unknown');
    (f.NATIVE_EDITOR_ENJINE || this.Eq && this.Eq.XNa) && !f.IS_NATIVE_EDITOR || this.al.y_a(null);
    this.al.PCa = function (e, f) {
      Va.Re('asc_onCoAuthoringChatReceiveMessage', e, f);
    };
    this.al.SCa = function (e,
                            f) {
      Va.Re('asc_onServerVersion', e, f);
    };
    this.al.Boa = function (e, f) {
      Va.Re('asc_onAuthParticipantsChanged', e, f);
    };
    this.al.UMa = function (e) {
      Va.Re('asc_onParticipantsChanged', e);
    };
    this.al.VCa = function (e) {
      Va.CLb = e;
      Va.mLe();
    };
    this.al.UCa = function (e) {
      AscCommon.kg.i0b('' + e);
    };
    this.al.Fua = function () {
      Va.hjd();
    };
    this.al.MCa = function () {
      Va.oWb ? Va.al.WQb() ? Va.al.cOb(Va.etb(), e, Va.vtd()) : Va.wOc(e, !0) : (Va.oWb = !0, Va.gjc());
    };
    this.al.OCa = function (e) {
      Va.doa = e;
      Va.pWb = !0;
      Va.gjc();
    };
    this.al.TMa = function (e) {
      Va.doa = e;
      Va.pWb = !0;
      var f =
        new AscCommon.ckc;
      f.CAd(e);
      Va.Re('asc_onLicenseChanged', f);
    };
    this.al.WCa = function (e) {
      Va.Re('asc_onError', e || Da.Fg.u0b, Da.il.ep);
    };
    this.al.QCa = function (e) {
      var f = e.title;
      f && (Va.wna = f, Va.Eq && Va.Eq.oKa(f));
      Va.Re('asc_onMeta', e);
    };
    this.al.TCa = function (e) {
      var f = e.code, Da = e.reason;
      e = e.interval;
      var Ha = !0;
      if (bb.Uzd == f) {
        var Pa = Va.vtd();
        Pa > e ? Ha = !1 : Va.al.doc(Pa);
      } else bb.Tzd == f && (Ha = !1);
      Ha || (Va.cba(!1, !0) ? (Va.sBd(), Va.Yrb = { code: f, reason: Da }) : Va.al.disconnect(f, Da));
    };
    this.al.lja = function (e) {
      if (AscCommon.Tkd.ZE ===
        e.type) e.start ? (null !== Va.TWa || Va.CBa ? clearInterval(Va.TWa) : Va.fG(Eb.oO, Ha.AHa), Va.TWa = setTimeout(function () {
        Va.TWa = null;
        Va.CBa ? Va.hx(Eb.oO, Ha.qG) : Va.hx(Eb.oO, Ha.AHa);
        Va.CBa = !1;
        Va.Re('asc_onError', Asc.rl.Fg.AHa, Da.il.ep);
      }, Asc.Kkd)) : e.Ymf ? (Va.CBa && Va.hx(Eb.oO, Ha.qG), Va.CBa = !1) : null !== Va.TWa && (clearInterval(Va.TWa), Va.TWa = null, Va.CBa ? Va.hx(Eb.oO, Ha.qG) : Va.hx(Eb.oO, Ha.AHa), Va.CBa = !1, e.success || Va.Re('asc_onError', Asc.rl.Fg.AHa, Da.il.ep)); else if (AscCommon.Rd.YA || null !== Va.gLa) e.start ? (null === Va.gLa ?
        Va.fG(Eb.oO, Ha.BHa) : clearInterval(Va.gLa), Va.gLa = setTimeout(function () {
        Va.gLa = null;
        Va.hx(Eb.oO, Ha.BHa);
        Va.Re('asc_onError', Asc.rl.Fg.BHa, Da.il.ep);
      }, Asc.Kkd)) : null !== Va.gLa && (clearInterval(Va.gLa), Va.gLa = null, Va.hx(Eb.oO, Ha.BHa), e.success || Va.Re('asc_onError', Asc.rl.Fg.BHa, Da.il.ep));
    };
    this.al.LCa = function () {
      Va.hx(Eb.Kr, Ha.YNa);
      Va.lpb = null;
      Va.Re('asc_onExpiredToken');
    };
    this.al.NCa = function () {
      var e = Va.KYa, f = Va.a0;
      Va.KYa = !0;
      Va.a0 = !1;
      Va.Re('asc_onDocumentModifiedChanged');
      Va.KYa = e;
      Va.a0 = f;
      Va.Re('asc_onDocumentModifiedChanged');
    };
    this.al.R0 = function (e, f) {
      AscCommon.uGb.Af === Va.al.oXa() && Va.hjd();
      null != f && (Va.sBd(), Asc.rl.Fg.vcd === f.code ? Va.Re('asc_onDocumentUpdateVersion', function () {
      }) : Va.Re('asc_onError', f.code, f.level));
    };
    this.al.SMa = function (f) {
      if (AscCommon.AE.LYa()) Va.lka && (Va.lka(f ? f.data : e), Va.lka = null); else if (f.data) switch (f = f.data, f.type) {
        case 'reopen':
        case 'open':
          switch (f.status) {
            case 'updateversion':
            case 'ok':
              var Ha = f.data;
              AscCommon.fI.se(Ha);
              null != Ha['Editor.bin'] ? 'ok' === f.status || Va.etb() ? Va.Hgd(Ha['Editor.bin']) :
                Va.Re('asc_onDocumentUpdateVersion', function () {
                  Va.IQc && Va.yOc();
                  Va.Hgd(Ha['Editor.bin']);
                }) : Va.Re('asc_onError', Da.Fg.jFa, Da.il.xV);
              break;
            case 'needparams':
              Va.U8a(f.data);
              break;
            case 'needpassword':
              Va.U8a(null, !0);
              break;
            case 'err':
              Va.Re('asc_onError', AscCommon.eBb(parseInt(f.data), Asc.rl.Fg.jFa), Da.il.xV);
          }
          break;
        default:
          Va.lka ? (Va.lka(f), Va.lka = null) : Va.Re('asc_onError', Da.Fg.cT, Da.il.ep);
      }
    };
    this.al.Hua = function (e, f) {
      Va.iy || (e ? Va.BBb() : Va.xNb(f));
    };
    this.al.EZa = function () {
      Va.JY ? Va.vrb = !1 : Va.GJc();
    };
    this.Dfd();
    this.al.se(this.EV, this.KY, this.jnd, 'fghhfgsjdgfjs', this.QC, this.knd, this.Eq);
  };
  Pa.prototype.Dfd = function () {
  };
  Pa.prototype.BBb = function () {
  };
  Pa.prototype.GJc = function () {
  };
  Pa.prototype.Cfd = function (e) {
    if (this.Ltd) {
      var f = this.al, Da = Array.prototype.slice.call(arguments, 1);
      this.INb.push(function () {
        e.apply(f, Da);
      });
      return !0;
    }
    return !1;
  };
  Pa.prototype.YJe = function () {
    this.Ltd = !1;
    for (var e = 0; e < this.INb.length; ++e) this.INb[e]();
    this.INb = [];
  };
  Pa.prototype.yOc = function () {
    this.al.disconnect();
    this.IQc = !1;
    this.EVa(!0);
  };
  Pa.prototype.VTd = function () {
    this.Egb();
  };
  Pa.prototype.tTd = function () {
    this.kgb();
  };
  Pa.prototype.Gwf = function () {
    this.j3 && (this.j3.disconnect(), this.OQc = !1, this.ohd());
  };
  Pa.prototype.hOc = function () {
  };
  Pa.prototype.ohd = function () {
  };
  Pa.prototype.mLe = function () {
    if (this.j3) {
      var e = this;
      f.AscDesktopEditor ? (f.asc_nativeOnSpellCheck = function (e) {
        var Da = f.Asc.editor ? f.Asc.editor : f.editor;
        Da.j3 && Da.j3.VMa(e);
      }, this.j3.Heb = function (e) {
        f.AscDesktopEditor.SpellCheck(JSON.stringify(e));
      }, this.j3.disconnect = function () {
      },
      f.AscDesktopEditor.IsLocalFile && !f.AscDesktopEditor.IsLocalFile() && this.Re('asc_onSpellCheckInit', '1026 1027 1029 1030 1031 1032 1033 1036 1038 1040 1042 1043 1044 1045 1046 1048 1049 1050 1051 1053 1055 1057 1058 1060 1062 1063 1066 1068 1069 1087 1104 1110 1134 2051 2055 2057 2068 2070 3079 3081 3082 4105 7177 9242 10266'.split(' '))) : this.CLb && this.OQc && this.j3.y_a(this.CLb);
      this.j3.ldb = function (f) {
        e.Re('asc_onSpellCheckInit', f);
      };
      this.j3.VMa = function (f) {
        e.mSd(f);
      };
      this.j3.se(this.KY);
    }
  };
  Pa.prototype.DZe =
    function (e) {
      e = 'string' === typeof e ? e : e.zm;
      f.AscDesktopEditor && (f.AscDesktopEditor.SpellCheck('{"type":"add","usrWords":["' + e + '"]}'), this.hOc(e));
    };
  Pa.prototype.fId = function () {
  };
  Pa.prototype.dTd = function () {
    return !1;
  };
  Pa.prototype.Rgd = function () {
  };
  Pa.prototype.Fnd = function () {
  };
  Pa.prototype.Kfd = function () {
  };
  Pa.prototype.Vnc = function (e, Pa) {
    var Va = !!(f.AscDesktopEditor && 0 < f.AscDesktopEditor.CryptoMode);
    Va && (f.oAc = !0);
    if (!this.dTd(e, Pa)) {
      e && this.fG(Eb.Kr, e);
      var gb = Pa.JQc ? Pa.OKc ? nb.scc : e === Ha.Z6a ? nb.Z6a : nb.NPd :
        nb.Af;
      Va = 'undefined' !== typeof ArrayBuffer && !Va;
      var bb = { data: null, GXb: null, index: 0, count: 0 }, ab = { c: 'save' };
      ab.id = this.KY;
      ab.userid = this.tia;
      ab.jwt = this.al.UBa();
      ab.outputformat = Pa.ogb;
      ab.title = AscCommon.U0e(this.wna, AscCommon.X6e(Pa.ogb), Asc.u_e);
      ab.nobase64 = Va;
      nb.Z6a === gb && (ab.inline = 1);
      if (!this.Kfd(e, Pa, ab, bb)) {
        var zb = this;
        this.lka = null;
        Pa.f7 || (this.lka = function (f, Ha) {
          Ha = 403 === Ha ? Da.Fg.j7b : Da.Fg.cT;
          if (null != f && ab.c === f.type) if ('ok' === f.status) {
            if (f = f.data) Ha = Da.Fg.nY, zb.Jxd(f, gb);
          } else Ha = AscCommon.eBb(parseInt(f.data),
            AscCommon.hrb.qG);
          Da.Fg.nY !== Ha && (zb.Fnd(), zb.Re('asc_onError', Pa.iVd || Ha, Da.il.ep));
          e && zb.hx(Eb.Kr, e);
        });
        AscCommon.g1d(function (e, f, Ia) {
          AscCommon.OYb(zb, e, f, Ia);
        }, this.lka, Pa.f7, ab, bb);
      }
    }
  };
  Pa.prototype.TQe = function (e) {
    return this.Arb.F6e(e);
  };
  Pa.prototype.gVe = function () {
    return this.MDa.w8e();
  };
  Pa.prototype.cId = function () {
    this.PR || (this.S1b = !0);
  };
  Pa.prototype.Nkc = function () {
    this.S1b = !1;
  };
  Pa.prototype.IYe = function (e) {
    this.XOa = e;
  };
  Pa.prototype.mUe = function () {
    return [AscCommon.p6e, AscCommon.q6e];
  };
  Pa.prototype.nUe =
    function () {
      return [AscCommon.r6e, AscCommon.f6e];
    };
  Pa.prototype.ric = function () {
  };
  Pa.prototype.Aqb = function () {
    var e = this;
    AscCommon.mad(this.KY, this.tia, this.al.UBa(), function (f, Da) {
      e.qhd(f, Da);
    }, function (f) {
      Da.Fg.nY !== f && e.Re('asc_onError', f, Da.il.ep);
      e.fG(Eb.Kr, Ha.J4);
    });
  };
  Pa.prototype.qhd = function (e, f) {
    var Va = this;
    Da.Fg.nY !== e ? this.Re('asc_onError', e, Da.il.ep) : (this.fG(Eb.Kr, Ha.J4), AscCommon.Gcd(f, this.KY, this.tia, this.al.UBa(), function (e, f) {
      Da.Fg.nY !== e ? Va.Re('asc_onError', e, Da.il.ep) : Va.ric(f);
      Va.hx(Eb.Kr,
        Ha.J4);
    }));
  };
  Pa.prototype.Tid = function () {
  };
  Pa.prototype.Fid = function (e, f) {
    e = this.bs.ZN(AscCommon.rV(e), 1);
    null != e ? f(e) : this.Tid(f);
  };
  Pa.prototype.cid = function (e, f) {
    function Da() {
      Va.hx(Eb.Kr, Ha.J4);
      f.apply(Va, arguments);
    }

    var Va = this;
    this.fG(Eb.Kr, Ha.J4);
    var Pa = AscCommon.fI.E8(e);
    Pa ? this.Fid(Pa, Da) : AscCommon.J8(Va, [e], function (e) {
      e[0] && null != e[0].path && Va.Fid(AscCommon.fI.bjb(e[0].path), Da);
    }, this.QC === ab.uO);
  };
  Pa.prototype.gkc = function (e) {
    if (!this.iy) if (this.hcb) this.jdb.push({ data: e, type: 'addOleObject' });
    else {
      this.hcb = !0;
      var f = this, Da = e.imgSrc, Ha = e.widthPix, Va = e.heightPix, Pa = e.width, bb = e.height, nb = e.data,
        Ra = e.guid;
      'string' === typeof Da && 0 < Da.length && 'string' === typeof nb && 'string' === typeof Ra && 0 < Ra.length && AscFormat.lb(Ha) && AscFormat.lb(Va) && AscFormat.lb(Pa) && AscFormat.lb(bb) && this.cid(Da, function (e) {
        f.aid(AscCommon.fI.E8(e.src), nb, Ra, Pa, bb, Ha, Va);
        this.hcb = !1;
        this.jdb.length && (e = this.jdb.shift(), 'editOleObject' === e.type && this.jkc(e.data), 'addOleObject' === e.type && this.gkc(e.data));
      });
    }
  };
  Pa.prototype.jkc =
    function (e) {
      if (!this.iy) if (this.hcb) this.jdb.push({ data: e, type: 'editOleObject' }); else {
        this.hcb = !0;
        var f = this, Da = e.imgSrc, Ha = AscCommon.qg.Zf(e.objectId), Va = e.widthPix, Pa = e.heightPix, bb = e.data;
        'string' === typeof Da && 0 < Da.length && 'string' === typeof bb && Ha && AscFormat.lb(Va) && AscFormat.lb(Pa) && this.cid(Da, function (e) {
          f.fid(Ha, AscCommon.fI.E8(e.src), bb, Va, Pa);
          this.hcb = !1;
          this.jdb.length && (e = this.jdb.shift(), 'editOleObject' === e.type && this.jkc(e.data), 'addOleObject' === e.type && this.gkc(e.data));
        });
      }
    };
  Pa.prototype.pluginMethod_AddOleObject =
    Pa.prototype.gkc;
  Pa.prototype.pluginMethod_EditOleObject = Pa.prototype.jkc;
  Pa.prototype.aid = function () {
  };
  Pa.prototype.fid = function () {
  };
  Pa.prototype.UXe = function (e) {
    this.D6b !== e && (this.D6b = e, this.ewf(e));
  };
  Pa.prototype.ejd = function () {
  };
  Pa.prototype.bid = function () {
  };
  Pa.prototype.djd = function () {
  };
  Pa.prototype.gid = function () {
  };
  Pa.prototype.eid = function () {
  };
  Pa.prototype.did = function () {
  };
  Pa.prototype.Rwf = function () {
  };
  Pa.prototype.WTd = function () {
  };
  Pa.prototype.UHd = function () {
    var e = {
      codepage: AscCommon.KOb,
      encodings: AscCommon.MJd()
    };
    return new AscCommon.sOc(e);
  };
  Pa.prototype.IPe = function (e) {
    f.AscDesktopEditor && this.Rgd(e) || (e || (e = new Asc.MIc), e.ogb = Asc.yib.zCb, this.Vnc(Ha.Z6a, e));
  };
  Pa.prototype.cba = function (e, f) {
    var Da = this, Ha = !1;
    this.a0 && this.pjc() && (this.jIa = !e, this.Eid() || AscCommon.History.NZ() || this.mgd() || this.JY || this.Csb ? this.$Sd(f) && (this.a0 = !1, this.al.t3a(function (e) {
      Da.Kgd(e);
    }), Ha = !0) : this.tAc && this.jIa && this.SWa());
    return Ha;
  };
  Pa.prototype.Eid = function () {
    return this.KYa;
  };
  Pa.prototype.LQe = function () {
    return AscCommon.History.X4a();
  };
  Pa.prototype.KQe = function () {
    return AscCommon.History.czb();
  };
  Pa.prototype.LVe = function () {
    return 0 == f.location.protocol.indexOf('file') ? !0 : !1;
  };
  Pa.prototype.MTd = function (e) {
    return AscCommon.Apd(e);
  };
  Pa.prototype.FZa = function () {
  };
  Pa.prototype.Lff = function () {
  };
  Pa.prototype.Nvd = function () {
    this.T4 && this.Eq && (this.Eq.XNa && this.vNe(), this.zXb(null));
  };
  Pa.prototype.zXb = function (e) {
    e && (this.CXb = e);
    this.T4 && this.Eq && this.CXb && this.Etd && (this.FZa(this.CXb), this.CXb = null);
  };
  Pa.prototype.fjc = function () {
    AscCommon.qg.se();
    var e = this;
    AscCommon.Afe(this.Ve, function (f, Da) {
      e.qhd(f, Da);
    });
    AscFonts.Sba.kv();
    this.m5 = AscCommon.LR;
    this.bs = AscCommon.l6e;
    this.m5.OOa(this);
    this.bs.OOa(this);
    this.m5.swe();
    this.Arb = new AscCommon.p7d;
    this.MDa = new AscCommon.fBe;
    AscFormat.xcf();
    null !== this.OFc && this.b7(this.OFc);
    this.lba = Asc.$3e(this);
    this.sea = new AscCommon.EUc;
    this.VSd();
    AscFonts.ms && this.wna && AscFonts.ms.HS(this.wna);
  };
  Pa.prototype.VSd = function () {
  };
  Pa.prototype.Nnf = function () {
    if (!this.Mtd) {
      this.Mtd = !0;
      for (var e = AscCommon.HEa.length,
             f = Array(e), Da = [], Ha = 0; Ha < e; ++Ha) f[Ha] = new AscCommon.DPe, f[Ha].Ja = Ha, f[Ha].Image = AscCommon.HEa[Ha], Da.push(AscCommon.HEa[Ha]);
      this.bs.EPa(Da, function () {
      }, 0);
      this.Re('asc_onInitStandartTextures', f);
    }
  };
  Pa.prototype.Lnf = function () {
    this.ZMc || ((new AscFormat.g6d(this)).qfb(), this.ZMc = !0);
  };
  Pa.prototype.QRc = function (e) {
    this.Re('asc_onMathTypes', e);
  };
  Pa.prototype.GRf = function (e) {
    this.hx(Eb.oO, Ha.WG);
    e.zbe();
  };
  Pa.prototype.Yhd = function () {
    return '';
  };
  Pa.prototype.Knf = function (e) {
    for (var f = AscCommon.p5b.slice(), Da =
      e.Xda, Ha = Da.length, Va = {}, Pa = f.length, bb = 0; bb < Ha; ++bb) {
      var nb = Da[bb].SA;
      Va[nb.name] || (Va[nb.name] = !0, f.push(AscCommon.sod(nb, e)));
    }
    (nb = e.af && e.af.SA) && (AscCommon.q1b(nb.name) || Va[nb.name] || f.splice(Pa, 0, AscCommon.sod(nb, e)));
    this.Re('asc_onSendThemeColorSchemes', f);
  };
  Pa.prototype.vZb = function (e, Da, Ha, Pa) {
    if (f.AscDesktopEditor && f.AscDesktopEditor.MediaStart) switch (this.QC) {
      case ab.RA:
        var Va = this.La.oM;
        if (Va.Tn) {
          var Za = this.La.oM.Zaa;
          if (0 <= Va.wH && Va.wH < Va.ZF && (!Za || !Za.IsPlaying())) {
            var gb = Za.Rect.pb,
              bb = Va.Ih.Za.pd;
            Va = Za.Rect.x;
            this.kba && (Va += this.La.aca.er.tf * AscCommon.wA >> 0);
            gb /= bb * AscCommon.wA;
            Pa ? f.AscDesktopEditor.MediaStart(e, Va, Za.Rect.y, Da, Ha, gb, Pa.Uf, Pa.Nj, Pa.Ij, Pa.jg, Pa.Eb, Pa.bf) : f.AscDesktopEditor.MediaStart(e, Va, Za.Rect.y, Da, Ha, gb);
          }
        } else Za = this.La.Cd.bx(0, 0, this.La.Za.lc, null, !0), Za.pa += this.La.pa, Za.qa += this.La.qa, Pa ? f.AscDesktopEditor.MediaStart(e, Za.pa, Za.qa, Da, Ha, this.La.sn / 100, Pa.Uf, Pa.Nj, Pa.Ij, Pa.jg, Pa.Eb, Pa.bf) : f.AscDesktopEditor.MediaStart(e, Za.pa, Za.qa, Da, Ha, this.La.sn / 100);
    }
  };
  Pa.prototype.Mpc = function () {
    f.AscDesktopEditor && f.AscDesktopEditor.MediaEnd && f.AscDesktopEditor.MediaEnd();
  };
  Pa.prototype.Gid = function (e, f) {
    null != this.lba && this.lba.register(e, f);
  };
  Pa.prototype.eAb = function (e, f, Da) {
    null != this.lba && this.lba.UE(e, f, Da);
  };
  Pa.prototype.Pkc = function (e) {
    null != this.lba && this.lba.Anf(e);
  };
  Pa.prototype.Okc = function (e) {
    null != this.lba && this.lba.Ekd(e);
  };
  Pa.prototype.QVe = function (e) {
    this.lba && this.lba.Iff(e);
  };
  Pa.prototype.u_d = function () {
    return !0;
  };
  Pa.prototype.hJc = function () {
  };
  Pa.prototype.HJc =
    function () {
    };
  Pa.prototype.pluginMethod_GetFontList = function () {
    return AscFonts.Sba.MDb.xue();
  };
  Pa.prototype.pluginMethod_InputText = function (e, f) {
    if (!this.iy && AscCommon.rn) {
      var Da = [];
      for (e = e.xR(); e.check(); e.next()) Da.push(e.value());
      if (f) for (e = 0; e < f.length; e++) AscCommon.rn.Bnd(8);
      AscCommon.rn.Ujc(Da);
      AscCommon.rn.vua = '';
    }
  };
  Pa.prototype.pluginMethod_PasteHtml = function (f) {
    if (!AscCommon.y1) return null;
    var Da = document.getElementById('pmpastehtml');
    if (!Da) {
      Da = document.createElement('div');
      Da.id = 'pmpastehtml';
      if (this.QC == ab.zm || this.QC == ab.RA) {
        var Ha = this.rWd();
        Ha && (e !== Ha.rb.$b && (Da.style.fontSize = Ha.rb.$b + 'pt'), Da.style.fontWeight = !0 === Ha.rb.Nd ? 'bold' : 'normal', Da.style.fontStyle = !0 === Ha.rb.Ye ? 'italic' : 'normal', Ha = Ha.rb.Aa, Da.style.color = Ha ? 'rgb(' + Ha.r + ',' + Ha.wb + ',' + Ha.Ya + ')' : 'rgb(0,0,0)');
      } else this.QC == ab.uO && (Ha = this.iid()) && Ha.font && (e != Ha.font.size && (Da.style.fontSize = Ha.font.size + 'pt'), Da.style.fontWeight = !0 === Ha.font.bold ? 'bold' : 'normal', Da.style.fontStyle = !0 === Ha.font.GAc ? 'italic' : 'normal');
      Da.innerHTML =
        f;
      document.body.appendChild(Da);
      this.Egb();
      var Pa = AscCommon.y1.sib;
      AscCommon.y1.sib = !0;
      this.MFa(AscCommon.Fs.Ve, Da, null, null, null, !0);
      this.kgb();
      f = function () {
        document.body.removeChild(Da);
        Da = null;
        AscCommon.y1.sib = Pa;
      };
      this.KId(f, null) && f();
    }
  };
  Pa.prototype.pluginMethod_PasteText = function (e) {
    if (!AscCommon.y1) return null;
    this.MFa(AscCommon.Fs.Text, e);
  };
  Pa.prototype.pluginMethod_GetMacros = function () {
    return this.BTe();
  };
  Pa.prototype.pluginMethod_SetMacros = function (e) {
    return this.VYe(e);
  };
  Pa.prototype.pluginMethod_StartAction =
    function (e, f) {
      this.fG('Block' == e ? Eb.Kr : Eb.oO, f);
    };
  Pa.prototype.pluginMethod_EndAction = function (Ha, Pa, Za) {
    this.hx('Block' == Ha ? Eb.Kr : Eb.oO, Pa);
    f.AscDesktopEditor && null != Za && '' != Za ? (f.AscDesktopEditor.IsLocalFile() ? (this.Re('asc_onError', 'Encryption error: ' + Za + '. End-to-end encryption mode is disabled.', Da.il.ep), f.AscDesktopEditor.CryptoMode = 0, e !== f.Ybc && (AscCommon.History.mwa = f.Ybc, this.QC == AscCommon.$z.uO ? this.Ovd(AscCommon.History.NZ()) : this.lda())) : (this.Re('asc_onError', 'Encryption error: ' + Za +
      '. The file was not compiled.', Da.il.xV), f.AscDesktopEditor.CryptoMode = 0), f.Ybc = e, setTimeout(function () {
      f.AscDesktopEditor.buildCryptedEnd(!1);
    }, 500)) : (f.Ybc = e, this.Cic && this.Cic.call(this));
  };
  Pa.prototype.pluginMethod_OnEncryption = function (Ha) {
    var Pa = f.Asc.editor ? f.Asc.editor : f.editor;
    switch (Ha.type) {
      case 'generatePassword':
        if ('' == Ha.password) {
          Pa.Re('asc_onError', 'There is no connection with the blockchain', Da.il.xV);
          break;
        }
        var Va = Pa.OVe();
        AscCommon.AE.T5b = !0;
        Pa.Omd = Ha.docinfo;
        f.AscDesktopEditor.buildCryptedStart(Va.data,
          Va.header, Ha.password, Ha.docinfo ? Ha.docinfo : '');
        break;
      case 'getPasswordByFile':
        '' != Ha.password ? (Va = '<m_sPassword>' + AscCommon.hXc(Ha.password) + '</m_sPassword>', Pa.qOa = Ha.password, Pa.wJc = Ha.hash, Pa.xJc = Ha.docinfo, AscCommon.AE.T5b = !0, f.mWb ? f.AscDesktopEditor.NativeViewerOpen(Ha.password) : f.AscDesktopEditor.SetAdvancedOptions(Va)) : this.U8a(e, !0);
        break;
      case 'encryptData':
      case 'decryptData':
        AscCommon.AE.Smf(Ha);
    }
  };
  Pa.prototype.pluginMethod_SetProperties = function (e) {
    if (e) for (var f in e) switch (f) {
      case 'copyoutenabled':
        this.Bmd =
          e[f];
        break;
      case 'watermark_on_draw':
        (this.VP = e[f] ? new AscCommon.jVc(e[f]) : null) && this.VP.SVc(this);
        switch (this.QC) {
          case ab.zm:
            this.La && (this.VP && (this.VP.zoom = this.La.sn / 100, this.VP.qfb()), this.La.yCb());
            break;
          case ab.RA:
            this.La && (this.VP && (this.VP.zoom = this.La.sn / 100, this.VP.qfb()), this.La.yCb());
            break;
          case ab.uO:
            var Da = this.ud && this.ud.ag();
            Da && Da.Bg && Da.Bg && Da.Bg.Zv();
        }
        break;
      case 'hideContentControlTrack':
        this.QC === ab.zm && this.La && this.La.Za && this.La.Za.uve(e[f]);
    }
  };
  Pa.prototype.Dhf = function (e) {
    if (e &&
      e.type) {
      var f = { pageX: e.x, pageY: e.y };
      switch (e.type) {
        case 'onbeforedrop':
          this.hJc(f);
          break;
        case 'ondrop':
          this.HJc(), e.html ? this.pluginMethod_PasteHtml(e.html) : e.text && this.pluginMethod_PasteText(e.text);
      }
    }
  };
  Pa.prototype.n8e = function () {
    var e = { pa: 0, qa: 0, W: 0, Vb: 0, qAa: 0 };
    e.W = Math.max(document.documentElement.clientWidth, f.innerWidth || 0);
    e.Vb = Math.max(document.documentElement.clientHeight, f.innerHeight || 0);
    switch (this.QC) {
      case ab.zm:
        e.pa += this.La.pa;
        e.qa += this.La.qa;
        e.pa += this.La.VU.er.tf * AscCommon.wA;
        e.qa +=
          this.La.VU.er.ug * AscCommon.wA;
        e.pa += this.La.Cd.fOa;
        e.qa += this.La.Cd.gOa;
        e.pa >>= 0;
        e.qa >>= 0;
        e.qAa = this.La.Cd.mGa * this.La.sn * AscCommon.wA / 100 >> 0;
        break;
      case ab.RA:
        e.pa += this.La.pa;
        e.qa += this.La.qa;
        e.pa += this.La.aca.er.tf * AscCommon.wA;
        e.qa = this.La.Za.GP ? e.qa + this.La.noa.er.ug * AscCommon.wA : e.qa + this.La.VU.er.ug * AscCommon.wA;
        e.pa += this.La.Cd.fOa;
        e.qa += this.La.Cd.gOa;
        e.pa >>= 0;
        e.qa >>= 0;
        e.qAa = this.La.Cd.mGa * this.La.sn * AscCommon.wA / 100 >> 0;
        break;
      case ab.uO:
        var Da = this.iid().lid().yid();
        if (this.VHd()) {
          var Ha =
            this.ud.Jz;
          e.pa = Ha.FUf;
          e.qa = Ha.GUf;
          e.qAa = Ha.EUf;
          Ha = Ha.cursor;
        } else if (Asc.gia.udc === Da || Asc.gia.tdc === Da) Ha = this.ud.ag().Bg.controller.gs, e.pa = Ha.fOa, e.qa = Ha.gOa, e.qAa = Ha.mGa * this.Mkc() * AscCommon.wA, Ha = this.Ve;
        Ha && (Ha = jQuery(Ha).offset()) && (e.pa += Ha.left, e.qa += Ha.top);
        e.pa >>= 0;
        e.qa >>= 0;
        e.qAa >>= 0;
    }
    return e;
  };
  Pa.prototype.pluginMethod_ShowInputHelper = function (e, f, Da, Ha) {
    var Pa = document.getElementById('iframe_' + e);
    if (Pa) {
      var Va = this.n8e();
      f > Va.W && (f = Va.W);
      Da > Va.Vb && (Da = Va.Vb);
      var Za = Va.pa + 10 + f, gb = Va.qa -
        10 - Da, Ra = Va.qa + Va.qAa + 10 + Da, Ia = Va.pa + 10;
      Za > Va.W && (Ia += Va.W - Za);
      Ra < Va.Vb ? Za = Va.qa + Va.qAa + 10 : 0 < gb ? Za = gb : (Za = Va.qa + Va.qAa + 10, Da += Va.Vb - Ra);
      Pa.style.left = Ia + 'px';
      Pa.style.top = Za + 'px';
      Pa.style.width = f + 'px';
      Pa.style.height = Da + 'px';
      Pa.style.zIndex = this.PR ? 5001 : 1E3;
      Pa.style.boxShadow || (Pa.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.175)', Pa.style.webkitBoxShadow = '0 6px 12px rgba(0, 0, 0, 0.175)');
      Ha ? (Pa.setAttribute('oo_editor_input', 'true'), Pa.focus()) : (Pa.removeAttribute('oo_editor_input'), AscCommon.rn &&
      (AscCommon.rn.zAc = !0, AscCommon.rn.xo.focus()));
      AscCommon.rn && (AscCommon.rn.xAc = !0, AscCommon.rn.ecb[e] = !0);
    }
  };
  Pa.prototype.pluginMethod_UnShowInputHelper = function (e, f) {
    var Da = document.getElementById('iframe_' + e);
    if (Da) {
      Da.style.width = '10px';
      Da.style.height = '10px';
      Da.removeAttribute('oo_editor_input');
      Da.style.zIndex = -1E3;
      if (AscCommon.rn && AscCommon.rn.xo) {
        AscCommon.rn.xo.focus();
        AscCommon.rn.ecb[e] && delete AscCommon.rn.ecb[e];
        e = 0;
        for (var Ha in AscCommon.rn.ecb) AscCommon.rn.ecb[Ha] && e++;
        AscCommon.rn.xAc =
          0 != e;
      }
      AscCommon.rn && f && (AscCommon.rn.vua = '');
    }
  };
  Pa.prototype.PVe = function () {
    this.BOc(new Asc.zPe);
  };
  Pa.prototype.PIc = function () {
  };
  Pa.prototype.RIc = function () {
    return !1;
  };
  Pa.prototype.ONb = function () {
  };
  Pa.prototype.asc_nativeCheckPdfRenderer = function (e, f) {
    e.Wa = e.Copy;
    e.spa = e.ClearNoAttack;
    e.va = e.WriteByte;
    e.Ib = e.WriteBool;
    e.eb = e.WriteLong;
    e.Se = e.WriteDouble;
    e.AAa = e.WriteString;
    e.Wb = e.WriteString2;
    f.Wa = e.Copy;
    f.spa = e.ClearNoAttack;
    f.va = e.WriteByte;
    f.Ib = e.WriteBool;
    f.eb = e.WriteLong;
    f.Se = e.WriteDouble;
    f.AAa =
      e.WriteString;
    f.Wb = e.WriteString2;
    var Da = new AscCommon.OFb;
    Da.Memory = e;
    Da.Wx = f;
    return Da;
  };
  Pa.prototype.w2a = function () {
  };
  Pa.prototype.BGc = function () {
  };
  Pa.prototype.VHc = function () {
  };
  Pa.prototype.s7a = function () {
  };
  Pa.prototype.vob = function () {
  };
  Pa.prototype.Jhb = function () {
  };
  Pa.prototype.E5a = function () {
  };
  Pa.prototype.tzb = function () {
  };
  Pa.prototype.nFd = function () {
  };
  Pa.prototype.setInputParams = function (e) {
    f.AscInputMethod = f.AscInputMethod || {};
    for (var Da in e) f.AscInputMethod[Da] = e[Da];
  };
  Pa.prototype.hkc = function () {
  };
  Pa.prototype.y4b = function () {
    return [];
  };
  Pa.prototype.Whd = function () {
  };
  Pa.prototype.xPe = function (e) {
    var f = 50 * AscCommon.wA >> 0, Da = 50 * AscCommon.wA >> 0, Ha = document.createElement('canvas');
    Ha.width = f;
    Ha.height = Da;
    var Pa = Ha.getContext('2d');
    Pa.fillStyle = '#000000';
    Pa.strokeStyle = '#000000';
    Pa.font = '10pt \'Courier New\'';
    Pa.lineWidth = 3;
    Pa.beginPath();
    Da = (Da >> 1) + .5;
    Pa.moveTo(0, Da);
    Pa.lineTo(f, Da);
    Pa.stroke();
    Pa.beginPath();
    Pa.lineWidth = 2;
    Da -= 10;
    Pa.moveTo(10, Da);
    Pa.lineTo(25, Da - 10);
    Pa.lineTo(10, Da - 20);
    Pa.stroke();
    Pa.beginPath();
    Pa.fillText(e.Dkc(), 10, Da + 25);
    Pa.fillText(e.Ekc(), 10, Da + 40);
    Pa.fillText(e.okc(), 10, Da + 55);
    f = Ha.toDataURL('image/png');
    Ha = null;
    e = [AscCommon.uRa(), e.Dkc(), e.Ekc(), e.okc(), 50, 50, f];
    this.bs.EPa([f], function (e) {
      this.hkc(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
    }, e);
  };
  Pa.prototype.rUe = function () {
    for (var e = this.y4b(), f = [], Da, Ha = e.length - 1; 0 <= Ha; Ha--) {
      var Pa = e[Ha];
      Da = !1;
      for (var bb = this.DNa.length - 1; 0 <= bb; bb--) if (this.DNa[bb].Yy == Pa.id) {
        Da = !0;
        break;
      }
      Da || (Da = new AscCommon.Uhd, Da.Yy = Pa.id, Da.xZb = Pa.JDa,
        Da.Eaa = Pa.Eaa, Da.L$ = Pa.L$, f.push(Da));
    }
    return f;
  };
  Pa.prototype.SPe = function (e, Da, Ha, Pa) {
    f.AscDesktopEditor && f.AscDesktopEditor.Sign(e, Da, Ha, Pa);
  };
  Pa.prototype.MPe = function (e) {
    e = 'unvisibleAdd' == e ? AscCommon.uRa() : e;
    f.asc_LocalRequestSign && f.asc_LocalRequestSign(e);
  };
  Pa.prototype.WPe = function (e) {
    f.AscDesktopEditor && f.AscDesktopEditor.ViewCertificate(parseInt('' + e));
  };
  Pa.prototype.NPe = function () {
    f.AscDesktopEditor && f.AscDesktopEditor.SelectCertificate();
  };
  Pa.prototype.EPe = function () {
    f.AscDesktopEditor && f.AscDesktopEditor.GetDefaultCertificate();
  };
  Pa.prototype.KUe = function () {
    return this.DNa;
  };
  Pa.prototype.LPe = function (e) {
    f.AscDesktopEditor && f.AscDesktopEditor.RemoveSignature(e);
  };
  Pa.prototype.KPe = function () {
    f.AscDesktopEditor && f.AscDesktopEditor.RemoveAllSignatures();
  };
  Pa.prototype.NVe = function () {
    return f.AscDesktopEditor && f.AscDesktopEditor.IsSignaturesSupport ? f.AscDesktopEditor.IsSignaturesSupport() : !1;
  };
  Pa.prototype.MVe = function () {
    return f.AscDesktopEditor && f.AscDesktopEditor.IsProtectionSupport ? f.AscDesktopEditor.IsProtectionSupport() : !1;
  };
  Pa.prototype.JVe = function (e) {
    f.AscDesktopEditor && f.asc_IsVisibleSign && f.asc_IsVisibleSign(e) && this.SHd && this.SHd(e);
  };
  Pa.prototype.JUe = function (e) {
    for (var f = this.y4b(), Da = f.length - 1; 0 <= Da; Da--) {
      var Ha = f[Da];
      if (Ha.id == e) {
        e = new AscCommon.Uhd;
        e.Yy = Ha.id;
        e.xZb = Ha.JDa;
        e.Eaa = Ha.Eaa;
        e.L$ = Ha.L$;
        e.sWb = !0;
        for (Ha = 0; Ha < this.DNa.length; Ha++) if (f = this.DNa[Ha], f.Yy == e.Yy) {
          e.valid = f.valid;
          e.sWb = !1;
          break;
        }
        return e;
      }
    }
    return null;
  };
  Pa.prototype.IUe = function (e) {
    for (var f = this.DNa.length, Da = 0; Da < f; Da++) if (this.DNa[Da].Yy ==
      e) return this.DNa[Da].image;
    return '';
  };
  Pa.prototype.zid = function () {
    return this.al.UBa();
  };
  Pa.prototype.HPe = function () {
    AscCommon.rn && (AscCommon.rn.PN = null);
  };
  Pa.prototype.fga = function () {
  };
  Pa.prototype.VEa = function () {
  };
  Pa.prototype.$1a = function () {
  };
  Pa.prototype.IJd = function () {
    return [];
  };
  Pa.prototype.wM = function () {
  };
  Pa.prototype.JPe = function () {
    AscCommon.rn && AscCommon.rn.Bnd(46);
  };
  Pa.prototype.Qwe = function (e) {
    AscCommon.ehc = e;
    AscCommon.rn && AscCommon.rn.hCd(AscCommon.ehc);
  };
  Pa.prototype.Rde = function () {
    return AscCommon.ehc;
  };
  Pa.prototype.THd = function () {
  };
  Pa.prototype.Zhd = function () {
  };
  Pa.prototype.vtd = function () {
    return 0 == this.NAc || this.lba && this.lba.ldf() || this.NLd || !this.a0 || !this.pjc() ? 0 : (new Date).getTime() - this.NAc;
  };
  Pa.prototype.CEa = function () {
    this.NAc = (new Date).getTime();
  };
  Pa.prototype.sBd = function () {
    this.Re('asc_onCoAuthoringDisconnect');
    this.EVa(!0);
  };
  Pa.prototype.kYe = function (f) {
    this.qOa = f;
    this.cba(!1, e, !0);
  };
  Pa.prototype.SXe = function () {
    this.qOa = '';
    this.cba(!1, e, !0);
  };
  Pa.prototype.VYe = function (e) {
    if (!this.sea || !0 ===
      AscCommon.Rd.Rla()) return !0;
    AscCommon.Rd.S3b();
    this.sea.y7d();
    if (this.QC == AscCommon.$z.uO) {
      var f = Asc.editor.ud.ag().Bg.zw;
      f.w8(this.sea.sb());
      var Da = this;
      f.fba(function (f) {
        f && (AscCommon.History.Bh(AscDFH.Npc), Da.sea.iob(e));
      });
    } else !1 === AscCommon.Rd.jJb(!1) && (AscCommon.History.Bh(AscDFH.Npc), this.sea.iob(e));
  };
  Pa.prototype.BTe = function () {
    return this.sea.Ura();
  };
  Pa.prototype.xid = function () {
    return 0;
  };
  Pa.prototype.Hwf = function (e, f, Da) {
    var Ha = new FileReader;
    Ha.onload = Ha.onerror = function (e) {
      e = e.target.result ?
        e.target.result : '';
      f instanceof Asc.OIc ? Da(AscCommon.TKc(e, f)) : Da(e.match(/[^\r\n]+/g));
    };
    for (var Pa = 'UTF-8', Va = f.QPa(), Za = AscCommon.jrb.length, gb = 0; gb < Za; ++gb) if (AscCommon.jrb[gb][0] == Va) {
      Pa = AscCommon.jrb[gb][2];
      break;
    }
    Ha.readAsText(new Blob([e]), Pa);
  };
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.x3a = Pa;
  var zb = Pa.prototype;
  zb.asc_selectSearchingResults = zb.UXe;
  zb.asc_getAdvancedOptions = zb.UHd;
  zb.asc_Print = zb.IPe;
})(window);
'use strict';
AscCommon.x3a.prototype.gjc = function () {
  if (this.oWb && this.pWb) {
    var f = new AscCommon.ckc;
    null !== this.doa && (f.CAd(this.doa.type), f.Wnf(this.doa.branding), f.aof(this.doa.customization), f.wof(this.doa.light), f.Cof(this.doa.mode), f.Qof(this.doa.rights), f.Unf(this.doa.buildVersion), f.Tnf(this.doa.buildNumber));
    this.Re('asc_onGetEditorPermissions', f);
  }
};
'use strict';
(function (f, e) {
  function Pa(Ia) {
    Ia ? (this.Aa = Ia.cb && Ia.cb.fill && Ia.cb.fill.type === f.Asc.wy.TC && Ia.cb.fill.color ? AscCommon.FGb(Ia.cb.fill.color) : e != Ia.Aa && null != Ia.Aa ? AscCommon.rPa(Ia.Aa.r, Ia.Aa.wb, Ia.Aa.Ya) : null, this.ua = e != Ia.ua ? Ia.ua : null) : (this.Aa = AscCommon.rPa(0, 0, 0), this.ua = 1);
  }

  function ab(f) {
    f ? (this.He = e === f.He ? Asc.tqa.xw : f.He, this.Up = e === f.Up ? !1 : f.Up, this.Ue = e === f.Ue ? e : f.Ue, this.ua = e === f.ua ? 0 : f.ua) : (this.He = Asc.tqa.Vr, this.Up = !1, this.Ue = e, this.ua = 0);
  }

  function bb(f) {
    f ? (this.He = e === f.He ? Asc.Lxa.Text :
      f.He, this.Up = e === f.Up ? !1 : f.Up, this.Ue = e === f.Ue ? e : f.Ue, this.ua = e === f.ua ? 0 : f.ua) : (this.He = Asc.Lxa.Text, this.Up = !1, this.Ue = e, this.ua = 0);
  }

  function nb(f) {
    this.MGa = this.hFa = this.iB = this.lIa = this.UC = this.lFa = !1;
    f && (this.lFa = e === f.aaa ? !1 : f.aaa, this.UC = e === f.Y3 ? !1 : f.Y3, this.lIa = e === f.rea ? !1 : f.rea, this.iB = e === f.baa ? !1 : f.baa, this.hFa = e === f.Uia ? !1 : f.Uia, this.MGa = e === f.ioa ? !1 : f.ioa);
  }

  function Da(f) {
    f ? (this.f5 = e != f.f5 ? f.f5 : !1, this.vba = e != f.vba ? f.vba : !1, this.vba = e != f.vba ? f.vba : !1, this.Ssa = e != f.Ssa ? f.Ssa : null, this.gda =
      e != f.gda ? f.gda : null, this.pEa = e != f.pEa && null != f.pEa ? new Asc.o9a(f.pEa) : null, this.On = e != f.On && null != f.On ? new Eb(f.On) : null, this.lAa = e != f.lAa ? f.lAa : null, this.nAa = e != f.nAa ? f.nAa : null, this.pAa = e != f.pAa ? f.pAa : null, this.Rsa = e != f.Rsa && null != f.Rsa ? new Asc.o9a(f.Rsa) : null, this.Yc = e != f.Yc && null != f.Yc ? new Ha(f.Yc) : null, this.Np = e != f.Np && null != f.Np ? new Ha(f.Np) : null, this.R6 = e != f.R6 && null != f.R6 ? new Pa(f.R6) : null, this.$s = e != f.$s && null != f.$s ? new Pa(f.$s) : null, this.ze = e != f.ze && null != f.ze ? new Asc.bPd(f.ze) : null, this.Ef =
      e != f.Ef && null != f.Ef ? new ab(f.Ef) : e, this.If = e != f.If && null != f.If ? new bb(f.If) : e, this.cu = e != f.cu ? f.cu : e, this.K5a = e != f.K5a ? f.K5a : !0, this.Hw = e != f.Hw ? f.Hw : null, this.kI = e != f.kI ? new nb(f.kI) : null, this.SIa = e !== f.SIa ? f.SIa : !1, this.D4 = e != f.D4 ? f.D4 : c_oAscVertAlignJc.Qa, this.Hy = e != f.Hy ? f.Hy : e, this.uy = f.uy, this.wca = f.wca, this.Dya = f.Dya, this.ZGa = f.ZGa, this.Lkb = f.Lkb, this.Ln = e != f.Ln ? f.Ln : !1, this.odc = f.odc, this.fF = f.fF, this.eF = f.eF, this.h5a = f.h5a, this.r5 = f.r5) : this.Ln = this.vba = !1;
  }

  function Ha(f) {
    f && (this.Ba = e != f.Ba &&
    null != f.Ba ? new Asc.Yha(f.Ba) : null, this.Qa = e != f.Qa && null != f.Qa ? new Asc.Yha(f.Qa) : null, this.Ra = e != f.Ra && null != f.Ra ? new Asc.Yha(f.Ra) : null, this.Xa = e != f.Xa && null != f.Xa ? new Asc.Yha(f.Xa) : null, this.Tj = e != f.Tj && null != f.Tj ? new Asc.Yha(f.Tj) : null, this.nk = e != f.nk && null != f.nk ? new Asc.Yha(f.nk) : null);
  }

  function Eb(f) {
    f ? (this.Ba = e != f.Ba ? f.Ba : null, this.Ra = e != f.Ra ? f.Ra : null, this.Qa = e != f.Qa ? f.Qa : null, this.Xa = e != f.Xa ? f.Xa : null, this.Sf = e != f.Sf ? f.Sf : null) : this.Sf = this.Xa = this.Qa = this.Ra = this.Ba = null;
  }

  function zb(f) {
    f ?
      (this.gp = e != f.gp ? f.gp : null, this.gc = e != f.gc && null != f.gc ? new Asc.uOc(f.gc) : null, this.Ne = e != f.Ne ? f.Ne : null, this.nn = e != f.nn ? f.nn : null, this.Cn = e != f.Cn ? f.Cn : null, this.jp = e != f.jp ? f.jp : null, this.kc = e != f.kc && null != f.kc ? new AscCommon.LNb(f.kc) : null, this.Ob = e != f.Ob && null != f.Ob ? new Asc.vOc(f.Ob) : null, this.lp = e != f.lp ? f.lp : null, this.hg = f.hg, this.Xr = e !== f.Xr ? f.Xr : 0) : (this.gp = !1, this.gc = new Asc.uOc, this.Ne = AscCommon.Pq, this.jp = this.Cn = this.nn = !1, this.kc = new AscCommon.LNb, this.Ob = new Asc.vOc, this.lp = !0, this.hg = null,
        this.Xr = 0);
  }

  function Va(f) {
    f ? (this.Nd = e != f.Nd ? f.Nd : null, this.Ye = e != f.Ye ? f.Ye : null, this.Xi = e != f.Xi ? f.Xi : null, this.Ii = e != f.Ii ? f.Ii : null, this.cf = e != f.cf && null != f.cf ? new AscCommon.Zzb(f.cf) : new AscCommon.Zzb({
      Ha: '',
      Ta: -1
    }), this.$b = e != f.$b ? f.$b : null, this.Aa = e != f.Aa && null != f.Aa ? AscCommon.rPa(f.Aa.r, f.Aa.wb, f.Aa.Ya) : null, this.uj = e != f.uj ? f.uj : null, this.kh = e != f.kh ? f.kh == AscCommonWord.J5b ? f.kh : new AscCommon.uL(f.kh.r, f.kh.wb, f.kh.Ya) : null, this.zj = e != f.zj ? f.zj : null, this.kc = e != f.kc ? f.kc : null, this.Em = e != f.Em ? f.Em :
      null, this.Yk = e != f.Yk ? f.Yk : null, this.Vf = e != f.Vf ? f.Vf.Jc : null) : (this.Ii = this.Xi = this.Ye = this.Nd = !1, this.cf = new AscCommon.Zzb, this.$b = 12, this.Aa = AscCommon.rPa(0, 0, 0), this.uj = AscCommon.UP, this.kh = AscCommonWord.J5b, this.zj = !1, this.kc = 0, this.Yk = this.Em = !1, this.Vf = null);
  }

  function gb(f, Da) {
    this.Mb = e != f && null != f ? new zb(f) : null;
    this.rb = e != Da && null != Da ? new Va(Da) : null;
  }

  function Za(f) {
    f ? (this.fRb = e != f.fRb ? f.fRb : null, this.a2a = e != f.a2a ? f.a2a : null, this.pa = e != f.pa ? f.pa : null, this.qa = e != f.qa ? f.qa : null, this.level = e !=
    f.level ? f.level : null) : this.level = this.qa = this.pa = this.a2a = this.fRb = null;
  }

  function bc() {
    this.Ai = !0;
    this.mTa = this.nTa = -1;
    this.yh = [];
    this.lKb = this.pJb = !0;
    this.f8a = e;
    this.Ogc = Asc.C5.kO;
    this.Dz = null;
  }

  function Nc() {
    this.Ha = '';
    this.ka = Asc.CSf.bb;
    this.VN = this.pI = e;
    this.Mgc = '';
  }

  function cc() {
    this.he = '';
    this.xc = Array(9);
    for (var e = 0; 9 > e; ++e) this.xc[e] = new ob(e);
  }

  function Rb(f, Da) {
    this.ka = e !== f ? f : Asc.krb.Text;
    this.ua = e !== Da ? Da : '';
  }

  function ob(e) {
    this.Nie = e;
    this.jn = Asc.Ag.Mf;
    this.Text = [];
    this.rb = new AscCommonWord.C2a;
    this.Mb = new AscCommonWord.n6d;
    this.Qb = 1;
    this.tH = -1;
    this.MI = Asc.GY.hW;
    this.Ue = AscCommon.Pq;
  }

  function Ra() {
    this.ka = ZD.Af;
    this.Zc = this.RGb = this.w7a = this.yn = this.U1c = this.Opacity = this.rb = this.Text = null;
  }

  f.Asc = f.Asc || {};
  Pa.prototype.K3a = function () {
    return this.Aa;
  };
  Pa.prototype.hNa = function (e) {
    this.Aa = e ? e : null;
  };
  Pa.prototype.nP = function () {
    return this.ua;
  };
  Pa.prototype.xM = function (e) {
    this.ua = e;
  };
  f.Asc.CBackground = f.Asc.C7f = Pa;
  Pa.prototype.get_Color = Pa.prototype.K3a;
  Pa.prototype.put_Color = Pa.prototype.hNa;
  Pa.prototype.get_Value =
    Pa.prototype.nP;
  Pa.prototype.put_Value = Pa.prototype.xM;
  ab.prototype.mXa = function () {
    return this.He;
  };
  ab.prototype.nDa = function (e) {
    this.He = e;
  };
  ab.prototype.nXa = function () {
    return this.Up;
  };
  ab.prototype.tGa = function (e) {
    this.Up = e;
  };
  ab.prototype.gea = function () {
    return this.Ue;
  };
  ab.prototype.H8 = function (e) {
    this.Ue = e;
  };
  ab.prototype.nP = function () {
    return this.ua;
  };
  ab.prototype.xM = function (e) {
    this.ua = e;
  };
  bb.prototype.mXa = function () {
    return this.He;
  };
  bb.prototype.nDa = function (e) {
    this.He = e;
  };
  bb.prototype.nXa = function () {
    return this.Up;
  };
  bb.prototype.tGa = function (e) {
    this.Up = e;
  };
  bb.prototype.gea = function () {
    return this.Ue;
  };
  bb.prototype.H8 = function (e) {
    this.Ue = e;
  };
  bb.prototype.nP = function () {
    return this.ua;
  };
  bb.prototype.xM = function (e) {
    this.ua = e;
  };
  f.Asc.CTablePositionH = ab;
  ab.prototype.get_RelativeFrom = ab.prototype.mXa;
  ab.prototype.put_RelativeFrom = ab.prototype.nDa;
  ab.prototype.get_UseAlign = ab.prototype.nXa;
  ab.prototype.put_UseAlign = ab.prototype.tGa;
  ab.prototype.get_Align = ab.prototype.gea;
  ab.prototype.put_Align = ab.prototype.H8;
  ab.prototype.get_Value =
    ab.prototype.nP;
  ab.prototype.put_Value = ab.prototype.xM;
  f.Asc.CTablePositionV = bb;
  bb.prototype.get_RelativeFrom = bb.prototype.mXa;
  bb.prototype.put_RelativeFrom = bb.prototype.nDa;
  bb.prototype.get_UseAlign = bb.prototype.nXa;
  bb.prototype.put_UseAlign = bb.prototype.tGa;
  bb.prototype.get_Align = bb.prototype.gea;
  bb.prototype.put_Align = bb.prototype.H8;
  bb.prototype.get_Value = bb.prototype.nP;
  bb.prototype.put_Value = bb.prototype.xM;
  nb.prototype.Y8e = function () {
    return this.lFa;
  };
  nb.prototype.Zkf = function (e) {
    this.lFa = e;
  };
  nb.prototype.Z8e = function () {
    return this.UC;
  };
  nb.prototype.$kf = function (e) {
    this.UC = e;
  };
  nb.prototype.A9e = function () {
    return this.lIa;
  };
  nb.prototype.Alf = function (e) {
    this.lIa = e;
  };
  nb.prototype.B9e = function () {
    return this.iB;
  };
  nb.prototype.Blf = function (e) {
    this.iB = e;
  };
  nb.prototype.B8e = function () {
    return this.hFa;
  };
  nb.prototype.Fkf = function (e) {
    this.hFa = e;
  };
  nb.prototype.C8e = function () {
    return this.MGa;
  };
  nb.prototype.Gkf = function (e) {
    this.MGa = e;
  };
  f.Asc.CTablePropLook = f.Asc.cVc = nb;
  nb.prototype.get_FirstCol = nb.prototype.Y8e;
  nb.prototype.put_FirstCol = nb.prototype.Zkf;
  nb.prototype.get_FirstRow = nb.prototype.Z8e;
  nb.prototype.put_FirstRow = nb.prototype.$kf;
  nb.prototype.get_LastCol = nb.prototype.A9e;
  nb.prototype.put_LastCol = nb.prototype.Alf;
  nb.prototype.get_LastRow = nb.prototype.B9e;
  nb.prototype.put_LastRow = nb.prototype.Blf;
  nb.prototype.get_BandHor = nb.prototype.B8e;
  nb.prototype.put_BandHor = nb.prototype.Fkf;
  nb.prototype.get_BandVer = nb.prototype.C8e;
  nb.prototype.put_BandVer = nb.prototype.Gkf;
  Da.prototype.kQc = function () {
    return this.Ssa;
  };
  Da.prototype.oNd = function (e) {
    this.Ssa = e;
  };
  Da.prototype.iab = function () {
    return this.gda;
  };
  Da.prototype.rYb = function (e) {
    this.gda = e;
  };
  Da.prototype.X8e = function () {
    return this.pEa;
  };
  Da.prototype.Wkf = function (e) {
    this.pEa = e;
  };
  Da.prototype.G8e = function () {
    return this.On;
  };
  Da.prototype.Kkf = function (e) {
    this.On = e;
  };
  Da.prototype.$9e = function () {
    return this.lAa;
  };
  Da.prototype.$lf = function (e) {
    this.lAa = e;
  };
  Da.prototype.e$e = function () {
    return this.nAa;
  };
  Da.prototype.emf = function (e) {
    this.nAa = e;
  };
  Da.prototype.j$e = function () {
    return this.pAa;
  };
  Da.prototype.jmf = function (e) {
    this.pAa = e;
  };
  Da.prototype.h$e = function () {
    return this.Rsa;
  };
  Da.prototype.hmf = function (e) {
    this.Rsa = e;
  };
  Da.prototype.b$e = function () {
    return this.Yc;
  };
  Da.prototype.bmf = function (e) {
    this.Yc = e;
  };
  Da.prototype.F8e = function () {
    return this.Np;
  };
  Da.prototype.Jkf = function (e) {
    this.Np = e;
  };
  Da.prototype.a$e = function () {
    return this.R6;
  };
  Da.prototype.amf = function (e) {
    this.R6 = e;
  };
  Da.prototype.I8e = function () {
    return this.$s;
  };
  Da.prototype.Mkf = function (e) {
    this.$s = e;
  };
  Da.prototype.E5b = function () {
    return this.ze;
  };
  Da.prototype.x6b = function (e) {
    this.ze = e;
  };
  Da.prototype.eKd = function () {
    return this.Ef;
  };
  Da.prototype.mNd = function (e) {
    this.Ef = e;
  };
  Da.prototype.fKd = function () {
    return this.If;
  };
  Da.prototype.nNd = function (e) {
    this.If = e;
  };
  Da.prototype.hKd = function (f) {
    return e != this.cu ? this.cu.jPa(f) : 0;
  };
  Da.prototype.iKd = function (f) {
    return e != this.cu ? this.cu.kPa(f) : 0;
  };
  Da.prototype.c9e = function () {
    return this.K5a;
  };
  Da.prototype.clf = function (e) {
    this.K5a = e;
  };
  Da.prototype.Lkf = function (e) {
    this.vba = e;
  };
  Da.prototype.H8e = function () {
    return this.vba;
  };
  Da.prototype.aKd = function () {
    return this.f5;
  };
  Da.prototype.V9e = function () {
    return this.SIa;
  };
  Da.prototype.Slf = function (e) {
    this.SIa = e;
  };
  Da.prototype.eQc = function () {
    return this.Ln;
  };
  Da.prototype.L8e = function () {
    return this.D4;
  };
  Da.prototype.qYb = function (e) {
    this.D4 = e;
  };
  Da.prototype.g$e = function () {
    return this.kI;
  };
  Da.prototype.gmf = function (e) {
    this.kI = e;
  };
  Da.prototype.i$e = function () {
    return this.Hw;
  };
  Da.prototype.imf = function (e) {
    this.Hw = e;
  };
  Da.prototype.ZJd = function () {
    return this.Hy;
  };
  Da.prototype.lNd = function (e) {
    this.Hy =
      e;
  };
  Da.prototype.f$e = function () {
    return this.uy;
  };
  Da.prototype.fmf = function (e) {
    this.uy = e;
  };
  Da.prototype.K8e = function () {
    return this.wca;
  };
  Da.prototype.Okf = function (e) {
    this.wca = e;
  };
  Da.prototype.J8e = function () {
    return this.Dya;
  };
  Da.prototype.Nkf = function (e) {
    this.Dya = e;
  };
  Da.prototype.M8e = function () {
    return this.ZGa;
  };
  Da.prototype.Pkf = function (e) {
    this.ZGa = e;
  };
  Da.prototype.P9e = function () {
    return this.odc;
  };
  Da.prototype.N8e = function () {
    return this.Lkb;
  };
  Da.prototype.d$e = function () {
    return this.fF;
  };
  Da.prototype.dmf = function (e) {
    this.fF =
      e;
  };
  Da.prototype.c$e = function () {
    return this.eF;
  };
  Da.prototype.cmf = function (e) {
    this.eF = e;
  };
  Da.prototype.S8e = function () {
    return this.h5a;
  };
  Da.prototype.Vkf = function (e) {
    this.h5a = e;
  };
  Da.prototype.T9e = function () {
    return this.r5;
  };
  Da.prototype.Qlf = function (e) {
    this.r5 = e;
  };
  f.Asc.CTableProp = f.Asc.aMc = Da;
  Da.prototype.get_Width = Da.prototype.kQc;
  Da.prototype.put_Width = Da.prototype.oNd;
  Da.prototype.get_Spacing = Da.prototype.iab;
  Da.prototype.put_Spacing = Da.prototype.rYb;
  Da.prototype.get_DefaultMargins = Da.prototype.X8e;
  Da.prototype.put_DefaultMargins =
    Da.prototype.Wkf;
  Da.prototype.get_CellMargins = Da.prototype.G8e;
  Da.prototype.put_CellMargins = Da.prototype.Kkf;
  Da.prototype.get_TableAlignment = Da.prototype.$9e;
  Da.prototype.put_TableAlignment = Da.prototype.$lf;
  Da.prototype.get_TableIndent = Da.prototype.e$e;
  Da.prototype.put_TableIndent = Da.prototype.emf;
  Da.prototype.get_TableWrap = Da.prototype.j$e;
  Da.prototype.put_TableWrap = Da.prototype.jmf;
  Da.prototype.get_TablePaddings = Da.prototype.h$e;
  Da.prototype.put_TablePaddings = Da.prototype.hmf;
  Da.prototype.get_TableBorders =
    Da.prototype.b$e;
  Da.prototype.put_TableBorders = Da.prototype.bmf;
  Da.prototype.get_CellBorders = Da.prototype.F8e;
  Da.prototype.put_CellBorders = Da.prototype.Jkf;
  Da.prototype.get_TableBackground = Da.prototype.a$e;
  Da.prototype.put_TableBackground = Da.prototype.amf;
  Da.prototype.get_CellsBackground = Da.prototype.I8e;
  Da.prototype.put_CellsBackground = Da.prototype.Mkf;
  Da.prototype.get_Position = Da.prototype.E5b;
  Da.prototype.put_Position = Da.prototype.x6b;
  Da.prototype.get_PositionH = Da.prototype.eKd;
  Da.prototype.put_PositionH =
    Da.prototype.mNd;
  Da.prototype.get_PositionV = Da.prototype.fKd;
  Da.prototype.put_PositionV = Da.prototype.nNd;
  Da.prototype.get_Value_X = Da.prototype.hKd;
  Da.prototype.get_Value_Y = Da.prototype.iKd;
  Da.prototype.get_ForSelectedCells = Da.prototype.c9e;
  Da.prototype.put_ForSelectedCells = Da.prototype.clf;
  Da.prototype.put_CellSelect = Da.prototype.Lkf;
  Da.prototype.get_CellSelect = Da.prototype.H8e;
  Da.prototype.get_CanBeFlow = Da.prototype.aKd;
  Da.prototype.get_RowsInHeader = Da.prototype.V9e;
  Da.prototype.put_RowsInHeader =
    Da.prototype.Slf;
  Da.prototype.get_Locked = Da.prototype.eQc;
  Da.prototype.get_CellsVAlign = Da.prototype.L8e;
  Da.prototype.put_CellsVAlign = Da.prototype.qYb;
  Da.prototype.get_TableLook = Da.prototype.g$e;
  Da.prototype.put_TableLook = Da.prototype.gmf;
  Da.prototype.get_TableStyle = Da.prototype.i$e;
  Da.prototype.put_TableStyle = Da.prototype.imf;
  Da.prototype.get_AllowOverlap = Da.prototype.ZJd;
  Da.prototype.put_AllowOverlap = Da.prototype.lNd;
  Da.prototype.get_TableLayout = Da.prototype.f$e;
  Da.prototype.put_TableLayout = Da.prototype.fmf;
  Da.prototype.get_CellsTextDirection = Da.prototype.K8e;
  Da.prototype.put_CellsTextDirection = Da.prototype.Okf;
  Da.prototype.get_CellsNoWrap = Da.prototype.J8e;
  Da.prototype.put_CellsNoWrap = Da.prototype.Nkf;
  Da.prototype.get_CellsWidth = Da.prototype.M8e;
  Da.prototype.put_CellsWidth = Da.prototype.Pkf;
  Da.prototype.get_PercentFullWidth = Da.prototype.P9e;
  Da.prototype.get_CellsWidthNotEqual = Da.prototype.N8e;
  Da.prototype.get_TableDescription = Da.prototype.d$e;
  Da.prototype.put_TableDescription = Da.prototype.dmf;
  Da.prototype.get_TableCaption =
    Da.prototype.c$e;
  Da.prototype.put_TableCaption = Da.prototype.cmf;
  Da.prototype.get_ColumnWidth = Da.prototype.S8e;
  Da.prototype.put_ColumnWidth = Da.prototype.Vkf;
  Da.prototype.get_RowHeight = Da.prototype.T9e;
  Da.prototype.put_RowHeight = Da.prototype.Qlf;
  Ha.prototype.xpc = function () {
    return this.Ba;
  };
  Ha.prototype.xDc = function (e) {
    this.Ba = e ? new Asc.Yha(e) : null;
  };
  Ha.prototype.Fpc = function () {
    return this.Qa;
  };
  Ha.prototype.GDc = function (e) {
    this.Qa = e ? new Asc.Yha(e) : null;
  };
  Ha.prototype.Cpc = function () {
    return this.Ra;
  };
  Ha.prototype.DDc =
    function (e) {
      this.Ra = e ? new Asc.Yha(e) : null;
    };
  Ha.prototype.ppc = function () {
    return this.Xa;
  };
  Ha.prototype.tDc = function (e) {
    this.Xa = e ? new Asc.Yha(e) : null;
  };
  Ha.prototype.v9e = function () {
    return this.Tj;
  };
  Ha.prototype.wlf = function (e) {
    this.Tj = e ? new Asc.Yha(e) : null;
  };
  Ha.prototype.w9e = function () {
    return this.nk;
  };
  Ha.prototype.xlf = function (e) {
    this.nk = e ? new Asc.Yha(e) : null;
  };
  Eb.prototype.xpc = function () {
    return this.Ba;
  };
  Eb.prototype.xDc = function (e) {
    this.Ba = e;
  };
  Eb.prototype.Cpc = function () {
    return this.Ra;
  };
  Eb.prototype.DDc = function (e) {
    this.Ra =
      e;
  };
  Eb.prototype.Fpc = function () {
    return this.Qa;
  };
  Eb.prototype.GDc = function (e) {
    this.Qa = e;
  };
  Eb.prototype.ppc = function () {
    return this.Xa;
  };
  Eb.prototype.tDc = function (e) {
    this.Xa = e;
  };
  Eb.prototype.$8e = function () {
    return this.Sf;
  };
  Eb.prototype.alf = function (e) {
    this.Sf = e;
  };
  f.Asc.CBorders = f.Asc.D7f = Ha;
  Ha.prototype.get_Left = Ha.prototype.xpc;
  Ha.prototype.put_Left = Ha.prototype.xDc;
  Ha.prototype.get_Top = Ha.prototype.Fpc;
  Ha.prototype.put_Top = Ha.prototype.GDc;
  Ha.prototype.get_Right = Ha.prototype.Cpc;
  Ha.prototype.put_Right = Ha.prototype.DDc;
  Ha.prototype.get_Bottom = Ha.prototype.ppc;
  Ha.prototype.put_Bottom = Ha.prototype.tDc;
  Ha.prototype.get_InsideH = Ha.prototype.v9e;
  Ha.prototype.put_InsideH = Ha.prototype.wlf;
  Ha.prototype.get_InsideV = Ha.prototype.w9e;
  Ha.prototype.put_InsideV = Ha.prototype.xlf;
  f.Asc.CMargins = f.Asc.K7f = Eb;
  Eb.prototype.get_Left = Eb.prototype.xpc;
  Eb.prototype.put_Left = Eb.prototype.xDc;
  Eb.prototype.get_Right = Eb.prototype.Cpc;
  Eb.prototype.put_Right = Eb.prototype.DDc;
  Eb.prototype.get_Top = Eb.prototype.Fpc;
  Eb.prototype.put_Top = Eb.prototype.GDc;
  Eb.prototype.get_Bottom = Eb.prototype.ppc;
  Eb.prototype.put_Bottom = Eb.prototype.tDc;
  Eb.prototype.get_Flag = Eb.prototype.$8e;
  Eb.prototype.put_Flag = Eb.prototype.alf;
  zb.prototype.Jpd = function () {
    return this.gp;
  };
  zb.prototype.u9e = function () {
    return this.gc;
  };
  zb.prototype.Mpd = function () {
    return this.Ne;
  };
  zb.prototype.Npd = function () {
    return this.nn;
  };
  zb.prototype.Opd = function () {
    return this.Cn;
  };
  zb.prototype.Rpd = function () {
    return this.jp;
  };
  zb.prototype.iab = function () {
    return this.kc;
  };
  zb.prototype.Tpd = function () {
    return this.Ob;
  };
  zb.prototype.Zpd = function () {
    return this.lp;
  };
  zb.prototype.Wpd = function () {
    return this.hg;
  };
  zb.prototype.Qpd = function () {
    return this.Xr;
  };
  Va.prototype.cQc = function () {
    return this.Nd;
  };
  Va.prototype.dQc = function () {
    return this.Ye;
  };
  Va.prototype.jQc = function () {
    return this.Xi;
  };
  Va.prototype.hQc = function () {
    return this.Ii;
  };
  Va.prototype.YJc = function () {
    return this.cf;
  };
  Va.prototype.spc = function () {
    return this.$b;
  };
  Va.prototype.K3a = function () {
    return this.Aa;
  };
  Va.prototype.Ypd = function () {
    return this.uj;
  };
  Va.prototype.t9e =
    function () {
      return this.kh;
    };
  Va.prototype.iab = function () {
    return this.kc;
  };
  Va.prototype.Kpd = function () {
    return this.zj;
  };
  Va.prototype.Gpd = function () {
    return this.Em;
  };
  Va.prototype.Vpd = function () {
    return this.Yk;
  };
  Va.prototype.hab = function () {
    return this.Vf;
  };
  zb.prototype.get_ContextualSpacing = zb.prototype.Jpd;
  zb.prototype.get_Ind = zb.prototype.u9e;
  zb.prototype.get_Jc = zb.prototype.Mpd;
  zb.prototype.get_KeepLines = zb.prototype.Npd;
  zb.prototype.get_KeepNext = zb.prototype.Opd;
  zb.prototype.get_PageBreakBefore = zb.prototype.Rpd;
  zb.prototype.get_Spacing = zb.prototype.iab;
  zb.prototype.get_Shd = zb.prototype.Tpd;
  zb.prototype.get_WidowControl = zb.prototype.Zpd;
  zb.prototype.get_Tabs = zb.prototype.Wpd;
  zb.prototype.get_OutlineLvl = zb.prototype.Qpd;
  Va.prototype.get_Bold = Va.prototype.cQc;
  Va.prototype.get_Italic = Va.prototype.dQc;
  Va.prototype.get_Underline = Va.prototype.jQc;
  Va.prototype.get_Strikeout = Va.prototype.hQc;
  Va.prototype.get_FontFamily = Va.prototype.YJc;
  Va.prototype.get_FontSize = Va.prototype.spc;
  Va.prototype.get_Color = Va.prototype.K3a;
  Va.prototype.get_VertAlign = Va.prototype.Ypd;
  Va.prototype.get_HighLight = Va.prototype.t9e;
  Va.prototype.get_Spacing = Va.prototype.iab;
  Va.prototype.get_DStrikeout = Va.prototype.Kpd;
  Va.prototype.get_Caps = Va.prototype.Gpd;
  Va.prototype.get_SmallCaps = Va.prototype.Vpd;
  Va.prototype.get_Lang = Va.prototype.hab;
  Va.prototype.put_Bold = function (e) {
    this.Nd = e;
  };
  Va.prototype.put_Italic = function (e) {
    this.Ye = e;
  };
  Va.prototype.put_Underline = function (e) {
    this.Xi = e;
  };
  Va.prototype.put_Strikeout = function (e) {
    this.Ii = e;
  };
  Va.prototype.put_FontFamily =
    Va.prototype.Sxd = function (e) {
      this.cf = e;
    };
  Va.prototype.put_FontSize = Va.prototype.Txd = function (e) {
    this.$b = e;
  };
  Va.prototype.put_Color = Va.prototype.hNa = function (e) {
    this.Aa = e;
  };
  Va.prototype.put_VertAlign = function (e) {
    this.uj = e;
  };
  Va.prototype.put_HighLight = function (e) {
    this.kh = e;
  };
  Va.prototype.put_Spacing = Va.prototype.rYb = function (e) {
    this.kc = e;
  };
  Va.prototype.put_DStrikeout = function (e) {
    this.zj = e;
  };
  Va.prototype.put_Caps = function (e) {
    this.Em = e;
  };
  Va.prototype.put_SmallCaps = function (e) {
    this.Yk = e;
  };
  Va.prototype.put_Lang =
    Va.prototype.ZKc = function (e) {
      this.Vf = e;
    };
  f.Asc.CTextProp = f.Asc.fVc = Va;
  gb.prototype.H1a = function () {
    return this.Mb;
  };
  gb.prototype.gGa = function () {
    return this.rb;
  };
  f.Asc.CParagraphAndTextProp = f.Asc.Drf = gb;
  gb.prototype.get_ParaPr = gb.prototype.H1a;
  gb.prototype.get_TextPr = gb.prototype.gGa;
  Za.prototype.H$e = function () {
    return this.fRb;
  };
  Za.prototype.M$e = function () {
    return this.a2a;
  };
  Za.prototype.Xxa = function () {
    return this.pa;
  };
  Za.prototype.Yxa = function () {
    return this.qa;
  };
  Za.prototype.C9e = function () {
    return this.level;
  };
  f.Asc.CHeader = f.Asc.XOd = Za;
  Za.prototype.get_headerText = Za.prototype.H$e;
  Za.prototype.get_pageNumber = Za.prototype.M$e;
  Za.prototype.get_X = Za.prototype.Xxa;
  Za.prototype.get_Y = Za.prototype.Yxa;
  Za.prototype.get_Level = Za.prototype.C9e;
  bc.prototype.AKf = function (e) {
    if (e) {
      var f = e.tX();
      f && (this.Ai = f.WHa, this.nTa = f.CSa, this.mTa = f.c6a, this.yh = f.yh, this.pJb = !f.p2c(), this.lKb = '' === f.gob, (f = e.YE) && f.Qi && f.Qi.pq() && (f = f.Qi.pq().P_c(), 0 < f.hg.length && (this.f8a = f.hg[f.hg.length - 1].xX)), this.Dz = e);
    }
  };
  bc.prototype.zKf =
    function (e) {
      this.Dz = e;
    };
  bc.prototype.GHf = function (e) {
    e && (this.Ogc = e.xQd());
  };
  bc.prototype.VQb = function () {
    return this.Ai;
  };
  bc.prototype.ulf = function (e) {
    this.Ai = e;
  };
  bc.prototype.gQc = function () {
    return this.nTa;
  };
  bc.prototype.fQc = function () {
    return this.mTa;
  };
  bc.prototype.Mlf = function (e, f) {
    this.nTa = e;
    this.mTa = f;
  };
  bc.prototype.pWd = function () {
    return this.yh.length;
  };
  bc.prototype.oWd = function (e) {
    return 0 > e || e >= this.yh.length ? '' : this.yh[e].Ha;
  };
  bc.prototype.nWd = function (e) {
    return 0 > e || e >= this.yh.length ? -1 : this.yh[e].xc;
  };
  bc.prototype.P1e = function () {
    this.yh = [];
  };
  bc.prototype.dPe = function (e, f) {
    this.yh.push({ Ha: e, xc: f });
  };
  bc.prototype.Vlf = function (e) {
    this.pJb = e;
  };
  bc.prototype.mWd = function () {
    return this.pJb;
  };
  bc.prototype.Olf = function (e) {
    this.lKb = e;
  };
  bc.prototype.lWd = function () {
    return this.lKb;
  };
  bc.prototype.Zlf = function (e) {
    this.f8a = e;
  };
  bc.prototype.qWd = function () {
    return this.f8a;
  };
  bc.prototype.gKd = function () {
    return this.Ogc;
  };
  bc.prototype.Ylf = function (e) {
    this.Ogc = e;
  };
  bc.prototype.y9e = function () {
    return this.Dz;
  };
  f.Asc.CTableOfContentsPr =
    f.Asc.bVc = bc;
  bc.prototype.get_Hyperlink = bc.prototype.VQb;
  bc.prototype.put_Hyperlink = bc.prototype.ulf;
  bc.prototype.get_OutlineStart = bc.prototype.gQc;
  bc.prototype.get_OutlineEnd = bc.prototype.fQc;
  bc.prototype.put_OutlineRange = bc.prototype.Mlf;
  bc.prototype.get_StylesCount = bc.prototype.pWd;
  bc.prototype.get_StyleName = bc.prototype.oWd;
  bc.prototype.get_StyleLevel = bc.prototype.nWd;
  bc.prototype.clear_Styles = bc.prototype.P1e;
  bc.prototype.add_Style = bc.prototype.dPe;
  bc.prototype.put_ShowPageNumbers = bc.prototype.Vlf;
  bc.prototype.get_ShowPageNumbers = bc.prototype.mWd;
  bc.prototype.put_RightAlignTab = bc.prototype.Olf;
  bc.prototype.get_RightAlignTab = bc.prototype.lWd;
  bc.prototype.get_TabLeader = bc.prototype.qWd;
  bc.prototype.put_TabLeader = bc.prototype.Zlf;
  bc.prototype.get_StylesType = bc.prototype.gKd;
  bc.prototype.put_StylesType = bc.prototype.Ylf;
  bc.prototype.get_InternalClass = bc.prototype.y9e;
  Nc.prototype.AOa = function () {
    return this.Ha;
  };
  Nc.prototype.qBb = function (e) {
    this.Ha = e;
  };
  Nc.prototype.BO = function () {
    return this.ka;
  };
  Nc.prototype.FK =
    function (e) {
      this.ka = e;
    };
  Nc.prototype.R9e = function () {
    return this.pI;
  };
  Nc.prototype.Nlf = function (e) {
    this.pI = e;
  };
  Nc.prototype.o$e = function () {
    return this.VN;
  };
  Nc.prototype.nmf = function (e) {
    this.VN = e;
  };
  Nc.prototype.Z9e = function () {
    return this.Mgc;
  };
  f.Asc.CAscStyle = f.Asc.d5d = Nc;
  Nc.prototype.get_Name = Nc.prototype.AOa;
  Nc.prototype.put_Name = Nc.prototype.qBb;
  Nc.prototype.get_Type = Nc.prototype.BO;
  Nc.prototype.put_Type = Nc.prototype.FK;
  Nc.prototype.get_QFormat = Nc.prototype.R9e;
  Nc.prototype.put_QFormat = Nc.prototype.Nlf;
  Nc.prototype.get_UIPriority = Nc.prototype.o$e;
  Nc.prototype.put_UIPriority = Nc.prototype.nmf;
  Nc.prototype.get_StyleId = Nc.prototype.Z9e;
  cc.prototype.vpc = function () {
    return this.he;
  };
  cc.prototype.ypc = function (e) {
    return 0 > e ? this.xc[0] : 8 < e ? this.xc[8] : this.xc[e] ? this.xc[e] : this.xc[0];
  };
  f.Asc.CAscNumbering = f.Asc.DGf = cc;
  cc.prototype.get_InternalId = cc.prototype.vpc;
  cc.prototype.get_Lvl = cc.prototype.ypc;
  Rb.prototype.BO = function () {
    return this.ka;
  };
  Rb.prototype.FK = function (e) {
    this.ka = e;
  };
  Rb.prototype.nP = function () {
    return this.ua;
  };
  Rb.prototype.xM = function (e) {
    this.ua = e;
  };
  f.Asc.CAscNumberingLvlText = f.Asc.c5d = Rb;
  Rb.prototype.get_Type = Rb.prototype.BO;
  Rb.prototype.put_Type = Rb.prototype.FK;
  Rb.prototype.get_Value = Rb.prototype.nP;
  Rb.prototype.put_Value = Rb.prototype.xM;
  ob.prototype.J9e = function () {
    return this.Nie;
  };
  ob.prototype.gab = function () {
    return this.jn;
  };
  ob.prototype.uDc = function (e) {
    this.jn = e;
  };
  ob.prototype.vLa = function () {
    return this.Text;
  };
  ob.prototype.Swa = function (e) {
    this.Text = e;
  };
  ob.prototype.gGa = function () {
    return this.rb;
  };
  ob.prototype.H1a =
    function () {
      return this.Mb;
    };
  ob.prototype.Dpc = function () {
    return this.Qb;
  };
  ob.prototype.Yxd = function (e) {
    this.Qb = e;
  };
  ob.prototype.Bpc = function () {
    return this.tH;
  };
  ob.prototype.Wxd = function (e) {
    this.tH = e;
  };
  ob.prototype.Epc = function () {
    return this.MI;
  };
  ob.prototype.Zxd = function (e) {
    this.MI = e;
  };
  ob.prototype.gea = function () {
    return this.Ue;
  };
  ob.prototype.H8 = function (e) {
    this.Ue = e;
  };
  f.Asc.CAscNumberingLvl = f.Asc.B7f = ob;
  ob.prototype.get_LvlNum = ob.prototype.J9e;
  ob.prototype.get_Format = ob.prototype.gab;
  ob.prototype.put_Format =
    ob.prototype.uDc;
  ob.prototype.get_Text = ob.prototype.vLa;
  ob.prototype.put_Text = ob.prototype.Swa;
  ob.prototype.get_TextPr = ob.prototype.gGa;
  ob.prototype.get_ParaPr = ob.prototype.H1a;
  ob.prototype.get_Start = ob.prototype.Dpc;
  ob.prototype.put_Start = ob.prototype.Yxd;
  ob.prototype.get_Restart = ob.prototype.Bpc;
  ob.prototype.put_Restart = ob.prototype.Wxd;
  ob.prototype.get_Suff = ob.prototype.Epc;
  ob.prototype.put_Suff = ob.prototype.Zxd;
  ob.prototype.get_Align = ob.prototype.gea;
  ob.prototype.put_Align = ob.prototype.H8;
  f.Asc.CAscWatermarkProperties =
    f.Asc.y2a = Ra;
  Ra.prototype.put_Api = Ra.prototype.OOa = function (e) {
    this.Zc = e;
  };
  Ra.prototype.put_Type = Ra.prototype.FK = function (e) {
    this.ka = e;
  };
  Ra.prototype.get_Type = Ra.prototype.BO = function () {
    return this.ka;
  };
  Ra.prototype.put_Text = Ra.prototype.Swa = function (e) {
    this.Text = e;
  };
  Ra.prototype.get_Text = Ra.prototype.vLa = function () {
    return this.Text;
  };
  Ra.prototype.put_TextPr = Ra.prototype.$xd = function (e) {
    this.rb = e;
  };
  Ra.prototype.get_TextPr = Ra.prototype.gGa = function () {
    return this.rb;
  };
  Ra.prototype.put_Opacity = Ra.prototype.BDc =
    function (e) {
      this.Opacity = e;
    };
  Ra.prototype.get_Opacity = Ra.prototype.SXf = function () {
    return this.Opacity;
  };
  Ra.prototype.put_IsDiagonal = Ra.prototype.Uxd = function (e) {
    this.U1c = e;
  };
  Ra.prototype.get_IsDiagonal = Ra.prototype.aAf = function () {
    return this.U1c;
  };
  Ra.prototype.put_ImageUrl = Ra.prototype.dEf = function (f, Da) {
    var Ia = this;
    Ia.Zc && AscCommon.J8(Ia.Zc, [f], function (e) {
      e && e[0] && Ia.Zc.bs.EPa([e[0].url], function () {
        Ia.yn = e[0].url;
        Ia.ka = Asc.Zfa.Image;
        Ia.esb();
        Ia.Zc.Re('asc_onWatermarkImageLoaded');
      });
    }, !1, e, Da);
  };
  Ra.prototype.put_ImageUrl2 =
    Ra.prototype.vlf = function (e) {
      this.yn = e;
    };
  Ra.prototype.get_ImageUrl = Ra.prototype.kWd = function () {
    return this.yn;
  };
  Ra.prototype.put_Scale = Ra.prototype.FDc = function (e) {
    this.w7a = e;
  };
  Ra.prototype.get_Scale = Ra.prototype.WXf = function () {
    return this.w7a;
  };
  Ra.prototype.put_DivId = function (e) {
    this.RGb = e;
    this.esb();
  };
  Ra.prototype.updateView = function () {
    this.esb();
  };
  Ra.prototype.showFileDialog = function () {
    if (this.Zc && this.RGb) {
      var e = this.Zc, f = this;
      AscCommon.mad(e.KY, e.tia, e.al.UBa(), function (Da, Ia) {
        Asc.rl.Fg.nY !== Da ? e.Re('asc_onError',
          Da, Asc.rl.il.ep) : (e.fG(Asc.EH.Kr, Asc.OG.J4), AscCommon.Gcd(Ia, e.KY, e.tia, e.al.UBa(), function (Da, Ia) {
          Asc.rl.Fg.nY !== Da ? (e.Re('asc_onError', Da, Asc.rl.il.ep), e.hx(Asc.EH.Kr, Asc.OG.J4)) : e.bs.EPa(Ia, function () {
            0 < Ia.length && (f.yn = Ia[0], f.ka = Asc.Zfa.Image, f.esb(), e.Re('asc_onWatermarkImageLoaded'));
            e.hx(Asc.EH.Kr, Asc.OG.J4);
          });
        }));
      }, function (f) {
        Asc.rl.Fg.nY !== f && e.Re('asc_onError', f, Asc.rl.il.ep);
        e.fG(Asc.EH.Kr, Asc.OG.J4);
      });
    }
  };
  Ra.prototype.loadImageUrl = function (f, Da) {
    var Ia = this;
    Ia.Zc && AscCommon.J8(Ia.Zc, [f],
      function (e) {
        e && e[0] && Ia.bs.EPa([e[0].url], function () {
          Ia.yn = e[0].url;
          Ia.ka = Asc.Zfa.Image;
          Ia.esb();
          Ia.Re('asc_onWatermarkImageLoaded');
        });
      }, !1, e, Da);
  };
  Ra.prototype.drawTexture = Ra.prototype.esb = function () {
    if (this.yn && this.Zc) {
      var f = document.getElementById(this.RGb);
      if (f) {
        for (var Da = f.children, Ha = null, Ra = 0; Ra < Da.length; ++Ra) if (Da[Ra].nodeName && 'CANVAS' === Da[Ra].nodeName.toUpperCase()) {
          Ha = Da[Ra];
          break;
        }
        Da = f.clientWidth;
        Ra = f.clientHeight;
        null === Ha && (Ha = document.createElement('canvas'), Ha.width = parseInt(Da),
          Ha.height = parseInt(Ra), f.appendChild(Ha));
        f = Ha.getContext('2d');
        f.clearRect(0, 0, Ha.width, Ha.height);
        Ha = this.Zc.bs.TX[AscCommon.rV(this.yn)];
        if (Ha != e && null != Ha.Image && Ha.Bx != AscFonts.gqa.fma) {
          var Pa = 0, Va = 0, Za = Math.max(Ha.Image.width, 1), gb = Math.max(Ha.Image.height, 1), bb = Za / gb;
          Za = Da;
          gb = Ra;
          Da / Ra >= bb ? (Za = bb * Ra, Pa = (Da - Za) / 2) : (gb = Za / bb, Va = (Ra - gb) / 2);
          f.drawImage(Ha.Image, Pa, Va, Za, gb);
        } else Ha && Ha.Image || (f.lineWidth = 1, f.beginPath(), f.moveTo(0, 0), f.lineTo(Da, Ra), f.moveTo(Da, 0), f.lineTo(0, Ra), f.strokeStyle =
          '#FF0000', f.stroke(), f.beginPath(), f.moveTo(0, 0), f.lineTo(Da, 0), f.lineTo(Da, Ra), f.lineTo(0, Ra), f.closePath(), f.strokeStyle = '#000000', f.stroke(), f.beginPath());
      }
    }
  };
})(window, void 0);
'use strict';
(function (f, e) {
  function Pa() {
    this.N3c = this.O3c = this.KHc = this.JHc = this.edc = this.gdc = 0;
  }

  function ab(e) {
    e ? (this.ka = void 0 != e.ka ? e.ka : null, this.ze = void 0 != e.ze ? e.ze : null, this.ylb = void 0 != e.ylb ? e.ylb : null, this.vYc = void 0 != e.vYc ? e.vYc : null, this.HHc = void 0 != e.HHc ? e.HHc : null, this.Ln = void 0 != e.Ln ? e.Ln : !1, this.Xad = void 0 != e.Xad ? e.Xad : -1) : (this.ka = AscCommon.ZDb, this.ze = 12.5, this.vYc = this.ylb = !1, this.HHc = null, this.Ln = !1, this.Xad = -1);
  }

  function bb(e) {
    e ? ('undefined' != typeof e.from && (this.from = e.from), 'undefined' !=
    typeof e.to && (this.to = e.to), 'undefined' != typeof e.L8 && (this.subject = e.L8), 'undefined' != typeof e.tQg && (this.mailFormat = e.tQg), 'undefined' != typeof e.fileName && (this.fileName = e.fileName), 'undefined' != typeof e.message && (this.message = e.message), 'undefined' != typeof e.rTg && (this.recordFrom = e.rTg), 'undefined' != typeof e.sTg && (this.recordTo = e.sTg), 'undefined' != typeof e.LPg && (this.isJson = e.LPg)) : this.isJson = this.userId = this.recordCount = this.recordTo = this.recordFrom = this.message = this.fileName = this.mailFormat =
      this.subject = this.to = this.from = null;
  }

  function nb(e) {
    this.Ua = this.cX = this.HB = this.lV = void 0;
    e && (this.lV = e.lV, this.HB = e.HB, this.cX = e.cX, this.Ua = e.Ua);
  }

  function Da(e, Da) {
    this.zg = e;
    this.Zrb = Da;
    this.DEf = [];
    this.current = -1;
    this.Yy = '';
    this.start = function () {
      this.zg.GSd = this;
      this.zg.Egb();
      f.Ni && (this.Yy = f.Ni.L3f());
      this.UE();
    };
    this.end = function () {
      f.Ni && f.Ni.S0f(this.Yy, this.DEf);
      delete this.zg.GSd;
      this.zg.kgb();
      this.zg.La.Za.rg();
    };
    this.UE = function () {
      ++this.current;
      var Da = this.zg.La.Za;
      0 == this.current && Da.Jg(AscDFH.GKd);
      if (this.current >= this.Zrb.length) this.end(); else {
        for (var Ia = null; this.current < this.Zrb.length;) {
          var Ha = this.Zrb[this.current];
          void 0 === Ha.Props && (Ha.Props = {});
          var Ra = !1;
          Ra = void 0 === Ha.Url && void 0 === Ha.Script || void 0 === Ha.Props.InternalId ? Da.jf(AscCommon.Uka) : Da.jf(AscCommon.A3, {
            ka: AscCommon.kia,
            dc: [Qf.Zf(Ha.Props.InternalId)],
            Ky: AscCommon.Uka
          });
          if (!1 === Ra) {
            Ra = !1;
            if (void 0 !== Ha.Url || void 0 !== Ha.Script) {
              var Pa = null;
              void 0 !== Ha.Props.InternalId && (Pa = Da.UBb(Ha.Props.InternalId), Ra = !0);
              Ia = new AscCommon.QOd;
              Ia.Ja = Ha.Props.Id;
              Ia.Cx = Ha.Props.Tag;
              Ia.Hf = c_oAscSdtLockType.xJa;
              Ia.yfb = Ha.Props.InternalId;
              Ia.ZA = Ha.Props.Alias;
              void 0 !== Ha.Props.Appearance && (Ia.Py = Ha.Props.Appearance);
              void 0 !== Ha.Props.Color && (Ia.Aa = new Asc.Gxa(Ha.Props.Color.R, Ha.Props.Color.G, Ha.Props.Color.B));
              if (null === Pa) {
                var Va = Da.Op();
                Va && !Va.YJ() && Da.ix(!1, !0);
                Pa = Da.rJ(c_oAscSdtLevelType.bqa);
              }
              Pa.DKb(Ia);
              Ia = Pa.Hhb();
              this.DEf.push({ Tag: Ia.Cx, Id: Ia.Ja, Lock: Ia.Hf, InternalId: Ia.yfb, Alias: Ia.ZA, Appearance: Ia.Py });
            }
            if (void 0 !== Ha.Url) {
              this.zg.iCa =
                {
                  DLd: null, Zrb: [{ url: Ha.Url, format: Ha.Format }], CMg: function (e) {
                    Pa.fa.ol(Pa.fa.lr() - 1, 1);
                    Pa.ti(!1, !1);
                    e = e.GSd;
                    e.Zrb[e.current].Props && Pa.DKb({ Hf: e.Zrb[e.current].Props.Lock });
                    Pa = e = null;
                    f.Ni.zg.ONb(!0);
                    setTimeout(function () {
                      f.Ni.zg.GSd.UE();
                    }, 1);
                  }
                };
              Da = new Asc.MIc(Asc.yib.bEd);
              Da.jCf = !0;
              this.zg.Xhd(Da);
              return;
            }
            if (void 0 !== Ha.Script) {
              eval('(function(){ var Api = window.g_asc_plugins.api;\n' + Ha.Script + '\n})();');
              c_oAscSdtLevelType.bqa === Pa.G2() ? Ra ? (1 < Pa.fa.lr() && Pa.fa.ol(Pa.fa.lr() - 1, 1), Pa.pe(!1)) : (1 < Pa.fa.lr() &&
              (Pa.fa.ol(Pa.fa.lr() - 1, 1), Pa.ti(!1, !1)), Da.gu(!1, !1, !0)) : Ra ? (1 < Pa.lr() && Pa.ol(Pa.lr() - 1, 1), Pa.pe(), Pa.mV()) : (1 < Pa.fa.lr() && (Pa.ol(Pa.lr() - 1, 1), Pa.ti(), Pa.mV()), Da.gu(!1, !1, !0));
              Ha = e.GSd;
              Ha.Zrb[Ha.current].Props && Pa.DKb({ Hf: Ha.Zrb[Ha.current].Props.Lock });
              Ha = null;
              Ha = Da.Aq();
              Da = Da.e0c();
              Ra = {};
              for (Ia = 0; Ia < Da.length; Ia++) Ra[Da[Ia]] = Da[Ia];
              f.Ni.Dgb = Ra;
              AscCommon.eMc(f.Ni.zg, Ha, Ra, function () {
                var e = f.Ni.zg;
                delete f.Ni.Dgb;
                e.ONb(!0);
                e.La.Za.zSd(!0);
                setTimeout(function () {
                  f.Ni.zg.GSd.UE();
                }, 1);
              });
              return;
            }
            Ha.Props &&
            (Pa = Da.Psf(Ha.Props.InternalId)) && (Ia = new AscCommon.QOd, Ia.Ja = Ha.Props.Id, Ia.Cx = Ha.Props.Tag, Ia.Hf = Ha.Props.Lock, Ia.yfb = Ha.Props.InternalId, Ia.ZA = Ha.Props.Alias, void 0 !== Ha.Props.Appearance && (Ia.Py = Ha.Props.Appearance), void 0 !== Ha.Props.Color && (Ia.Aa = new Asc.Gxa(Ha.Props.Color.R, Ha.Props.Color.G, Ha.Props.Color.B)), Pa.DKb(Ia), Ia = Pa.Hhb(), this.DEf.push({
              Tag: Ia.Cx,
              Id: Ia.Ja,
              Lock: Ia.Hf,
              InternalId: Ia.yfb,
              Alias: Ia.ZA,
              Appearance: Ia.Py
            }));
          } else !1 === Da.jf(AscCommon.GId) && (Ha = this.Zrb[this.current], Ha.Props &&
          void 0 === Ha.Url && void 0 === Ha.Script && (Pa = Da.Psf(Ha.Props.InternalId))) && (Ia = new AscCommon.QOd, Ia.Ja = Ha.Props.Id, Ia.Cx = Ha.Props.Tag, Ia.Hf = Ha.Props.Lock, Ia.yfb = Ha.Props.InternalId, Ia.ZA = Ha.Props.Alias, void 0 !== Ha.Props.Appearance && (Ia.Py = Ha.Props.Appearance), void 0 !== Ha.Props.Color && (Ia.Aa = new Asc.Gxa(Ha.Props.Color.R, Ha.Props.Color.G, Ha.Props.Color.B)), Pa.DKb(Ia), Ia = Pa.Hhb(), this.DEf.push({
            Tag: Ia.Cx,
            Id: Ia.Ja,
            Lock: Ia.Hf,
            InternalId: Ia.yfb,
            Alias: Ia.ZA,
            Appearance: Ia.Py
          }));
          ++this.current;
        }
        this.current >=
        this.Zrb.length && this.end();
      }
    };
    this.delete = function () {
      for (var e = this.zg.La.Za, f = [], Da = 0; Da < this.Zrb.length; Da++) {
        var Ia = Qf.Zf(this.Zrb[Da].InternalId);
        Ia && (Ia instanceof AscCommonWord.LFb || Ia instanceof AscCommonWord.PBb) && f.push(Qf.Zf(this.Zrb[Da].InternalId));
      }
      e.f0b(!1);
      if (!1 === e.jf(AscCommon.A3, { ka: AscCommon.kia, dc: f, Ky: AscCommon.sna })) {
        e.Jg(AscDFH.GKd);
        for (Da = 0; Da < this.Zrb.length; Da++) e.buf(this.Zrb[Da].InternalId);
        e.rg();
      }
      e.f0b(!0);
      this.zg.ONb(!0);
      delete this.zg.GSd;
    };
  }

  function Ha(e) {
    AscCommon.x3a.call(this,
      e, AscCommon.$z.zm);
    this.La = null;
    this.knd = Ce.rMc;
    this.Oq = !1;
    this.PNc = !0;
    this.M1a = Nc.ska;
    this.ZZ = this.VAb = !1;
    this.HHd = '';
    this.uKc = !0;
    this.r2c = this.GQc = this.hdf = !1;
    this.iCa = this.W_d = null;
    this.Tsg = this.qKc = !1;
    this.PFc = this.iOd = null;
    this.jcb = this.dcb = this.Ncf = this.IJ = this.WLd = !1;
    this.hOd = this.G1 = null;
    this.qJf = 0;
    this.pJf = null;
    this.ejb = !1;
    this.FCc = this.ECc = null;
    this.nfb = 0;
    this.FOa = !1;
    this.MRc = null;
    this.gCf = !1;
    this.O_d = null;
    this.bHc = this.yue = !1;
    this.aL = [];
    this.ECa = -1;
    this.X$ = !0;
    this.MEd = null;
    this.fMc = c_oAscCollaborativeMarksShowType.Zl;
    this.cHc = this.SSd = null;
    void 0 == f.editor && (f.editor = this, f.editor = f.editor, f.NATIVE_EDITOR_ENJINE && (editor = f.editor));
    this.kuf = [];
    this.Z1();
  }

  function Eb(e) {
    e ? (this.l8 = e.l8, this.v0b = e.v0b, this.Y_b = e.Y_b, this.n0b = e.n0b, this.o0b = e.o0b) : this.o0b = this.n0b = this.Y_b = this.v0b = this.l8 = -1;
  }

  function zb(e) {
    if (e) switch (this.ka = void 0 != e.ka ? e.ka : Asc.WAa.Gfa, this.RK = void 0 != e.RK ? e.RK : 0, this.SK = void 0 != e.SK ? e.SK : 0, this.ka) {
      case Asc.WAa.FVc:
        this.Le = void 0 != e.Le ? e.Le : 0, this.Vk = void 0 != e.Vk ? e.Vk : !0;
    } else this.ka = Asc.WAa.Gfa,
      this.SK = this.RK = 0;
  }

  function Va(e) {
    if (e) {
      if (this.Zdf = void 0 != e.Zdf ? e.Zdf : !1, this.AW = void 0 != e.AW ? e.AW : '', this.hX = void 0 != e.hX ? e.hX : '', this.G8 = void 0 != e.G8 ? e.G8 : '', this.RP = void 0 != e.RP ? e.RP : '', this.Oqa = void 0 != e.Oqa ? e.Oqa : '', this.yR = void 0 != e.yR ? e.yR : null, this.P5 = void 0 != e.P5 ? e.P5 : !1, this.QM = void 0 != e.QM ? e.QM : '', this.Nqa = void 0 != e.Nqa ? e.Nqa : this.dgg(this.QM), this.rfa = void 0 != e.rfa ? e.rfa : AscCommon.KEd(), this.eO = [], void 0 != e.eO) for (var f = e.eO.length, Da = 0; Da < f; Da++) {
        var Ia = new Va(e.eO[Da]);
        this.eO.push(Ia);
      }
    } else this.Zdf =
      !1, this.Oqa = this.RP = this.G8 = this.hX = this.AW = '', this.yR = null, this.P5 = !1, this.Nqa = this.QM = '', this.rfa = AscCommon.KEd(), this.eO = [];
  }

  var gb = null, Za = AscCommon.hrb, bc = AscCommon.uMc, Nc = AscCommon.kAb, cc = AscCommon.Qpa, Rb = AscCommon.O5,
    ob = AscCommon.hjb, Ra = AscCommon.XAc, Ia = AscCommon.YAc, Ab = AscCommon.A3, $d = AscCommon.UK, re = AscCommon.FU,
    ie = AscCommon.Vka, xf = AscCommon.Cmc, Wc = AscCommon.ggb, Pi = AscCommon.Zzb, Jd = AscCommon.Yzb,
    eg = AscCommon.fI, Ye = AscCommon.OYb, af = AscCommon.kg, Qf = AscCommon.qg, sh = null, Mf = null, sb = null,
    xc = Asc.rl,
    Ce = Asc.yib, he = Asc.OG, De = Asc.GOb, be = Asc.mUd, ge = Asc.EH, ae = Asc.lAb, ch = Asc.wy, Td = Asc.x8,
    Cc = Asc.o1a, vh = Asc.O0b;
  Pa.prototype.MOg = function () {
    return this.gdc;
  };
  Pa.prototype.KOg = function () {
    return this.edc;
  };
  Pa.prototype.DOg = function () {
    return this.JHc;
  };
  Pa.prototype.EOg = function () {
    return this.KHc;
  };
  Pa.prototype.FOg = function () {
    return this.O3c;
  };
  Pa.prototype.COg = function () {
    return this.N3c;
  };
  ab.prototype.BO = function () {
    return this.ka;
  };
  ab.prototype.FK = function (e) {
    this.ka = e;
  };
  ab.prototype.E5b = function () {
    return this.ze;
  };
  ab.prototype.x6b = function (e) {
    this.ze = e;
  };
  ab.prototype.jOg = function () {
    return this.ylb;
  };
  ab.prototype.TRg = function (e) {
    this.ylb = e;
  };
  ab.prototype.iOg = function () {
    return this.vYc;
  };
  ab.prototype.SRg = function (e) {
    this.vYc = e;
  };
  ab.prototype.vOg = function () {
    return this.HHc;
  };
  ab.prototype.eQc = function () {
    return this.Ln;
  };
  ab.prototype.$Og = function () {
    return this.Xad;
  };
  ab.prototype.JSg = function (e) {
    this.Xad = e;
  };
  var Yg = new function () {
    this.DZa = [{ name: 'US Letter', qm: 215.9, om: 279.4, e7b: 12240, H5b: 15840 }, {
      name: 'US Legal', qm: 215.9,
      om: 355.6, e7b: 12240, H5b: 20160
    }, { name: 'A4', qm: 210, om: 297, e7b: 11907, H5b: 16839 }, {
      name: 'A5',
      qm: 148.1,
      om: 209.9,
      e7b: 8391,
      H5b: 11907
    }, { name: 'B5', qm: 176, om: 250.1, e7b: 9979, H5b: 14175 }, {
      name: 'Envelope #10',
      qm: 104.8,
      om: 241.3,
      e7b: 5940,
      H5b: 13680
    }, { name: 'Envelope DL', qm: 110.1, om: 220.1, e7b: 6237, H5b: 12474 }, {
      name: 'Tabloid',
      qm: 279.4,
      om: 431.7,
      e7b: 15842,
      H5b: 24477
    }, { name: 'A3', qm: 297, om: 420.1, e7b: 16840, H5b: 23820 }, {
      name: 'Tabloid Oversize',
      qm: 304.8,
      om: 457.1,
      e7b: 17282,
      H5b: 25918
    }, { name: 'ROC 16K', qm: 196.8, om: 273, e7b: 11164, H5b: 15485 },
      { name: 'Envelope Coukei 3', qm: 119.9, om: 234.9, e7b: 6798, H5b: 13319 }, {
        name: 'Super B/A3',
        qm: 330.2,
        om: 482.5,
        e7b: 18722,
        H5b: 27358
      }];
    this.nsg = .5;
    this.bD = function (e, f) {
      for (var Da in this.DZa) {
        var Ia = this.DZa[Da];
        if (Math.abs(e - Ia.qm) < this.nsg && Math.abs(f - Ia.om) < this.nsg) return Ia;
      }
      return { qm: e, om: f };
    };
  };
  bb.prototype.pOg = function () {
    return this.from;
  };
  bb.prototype.WRg = function (e) {
    this.from = e;
  };
  bb.prototype.bPg = function () {
    return this.to;
  };
  bb.prototype.SSg = function (e) {
    this.to = e;
  };
  bb.prototype.aPg = function () {
    return this.subject;
  };
  bb.prototype.LSg = function (e) {
    this.subject = e;
  };
  bb.prototype.flg = function () {
    return this.mailFormat;
  };
  bb.prototype.nSg = function (e) {
    this.mailFormat = e;
  };
  bb.prototype.oOg = function () {
    return this.fileName;
  };
  bb.prototype.URg = function (e) {
    this.fileName = e;
  };
  bb.prototype.HOg = function () {
    return this.message;
  };
  bb.prototype.pSg = function (e) {
    this.message = e;
  };
  bb.prototype.ilg = function () {
    return this.recordFrom;
  };
  bb.prototype.xSg = function (e) {
    this.recordFrom = e;
  };
  bb.prototype.jlg = function () {
    return this.recordTo;
  };
  bb.prototype.ySg =
    function (e) {
      this.recordTo = e;
    };
  bb.prototype.ROg = function () {
    return this.recordCount;
  };
  bb.prototype.Tqg = function (e) {
    this.recordCount = e;
  };
  bb.prototype.Aqa = function () {
    return this.userId;
  };
  bb.prototype.d_a = function (e) {
    this.userId = e;
  };
  bb.prototype.Pqg = function (e) {
    this.isJson = e;
  };
  nb.prototype.I1a = function () {
    return this.Ua;
  };
  nb.prototype.e2a = function (e) {
    this.Ua = e;
  };
  nb.prototype.dAf = function () {
    return this.cX;
  };
  nb.prototype.iEf = function (e) {
    this.cX = e;
  };
  nb.prototype.bAf = function () {
    return this.HB;
  };
  nb.prototype.gEf = function (e) {
    this.HB =
      e;
  };
  nb.prototype.cAf = function () {
    return this.lV;
  };
  nb.prototype.hEf = function (e) {
    this.lV = e;
  };
  Ha.prototype = Object.create(AscCommon.x3a.prototype);
  Ha.prototype.constructor = Ha;
  Ha.prototype.Re = function () {
    var e = arguments[0];
    if ($b.hasOwnProperty(e)) {
      for (var Da = 0; Da < $b[e].length; ++Da) $b[e][Da].apply(this || f, Array.prototype.slice.call(arguments, 1));
      return !0;
    }
    return !1;
  };
  Ha.prototype.F_d = function () {
    return null === this.La.Za;
  };
  Ha.prototype.lcc = function (e) {
    void 0 === e && (e = ['Arial', 'Symbol', 'Wingdings', 'Courier New', 'Times New Roman']);
    this.m5.lcc(e);
  };
  Ha.prototype.XRd = function (e) {
    c_oAscCollaborativeMarksShowType.Af !== this.fMc && c_oAscCollaborativeMarksShowType.Af === e && this.La && this.La.Za ? (this.fMc = e, AscCommon.Rd.fHa(!0)) : this.fMc = e;
  };
  Ha.prototype.iQd = function () {
    return this.fMc;
  };
  Ha.prototype.c2a = function () {
    return this.La && this.La.Za ? this.La.Za : null;
  };
  Ha.prototype.G0 = function () {
    return this.La.Za ? 0 !== this.zfb || this.La.Za.qtf() : 0 !== this.zfb;
  };
  Ha.prototype.fHa = function () {
    AscCommon.Rd.fHa(!0);
  };
  Ha.prototype.xGd = function (e) {
    e = e.toLowerCase();
    void 0 !== AscCommonWord.i6f[e] && (this.MEd = AscCommonWord.i6f[e]);
  };
  Ha.prototype.Yyg = function (e) {
    var f = this.MEd.q_[e];
    return void 0 !== f ? f : e;
  };
  Ha.prototype.KVc = function () {
    !0 === sb.NZ() ? this.dIc(!0) : this.dIc(!1);
    this.q3a();
  };
  Ha.prototype.MMf = function () {
    this.dIc(!1);
    this.q3a();
  };
  Ha.prototype.dIc = function (e) {
    this.Ncf = e;
    this.Re('asc_onDocumentModifiedChanged');
    if (void 0 !== f.AscDesktopEditor) f.AscDesktopEditor.onDocumentModifiedChanged(e);
  };
  Ha.prototype.Mcf = function () {
    return this.a0 ? this.Ncf : !0;
  };
  Ha.prototype.UNd =
    function () {
      0 != this.aL.length && this.aL.splice(0, this.aL.length);
      this.La && this.La.Cd && this.La.Cd.Dbg();
    };
  Ha.prototype.gCd = function () {
    this.La && this.La.Cd && this.La.Cd.w9f();
    this.Re('asc_onFocusObject', this.aL);
  };
  Ha.prototype.yXf = function (e) {
    !0 === e && this.La.Za.Ge();
    return this.aL;
  };
  Ha.prototype.s5f = function (e, f) {
    var Da = null;
    switch (e) {
      case ae.bb:
        Da = new Asc.p9a(f);
        break;
      case ae.Image:
        Da = new Td(f);
        break;
      case ae.Table:
        Da = new Asc.aMc(f);
        break;
      case ae.Vk:
        Da = new ab(f);
    }
    f = this.aL.length - 1;
    for (var Ia = !1; 0 <= f;) {
      if (this.aL[f].ka ==
        e) {
        this.aL[f].ua = Da;
        Ia = !0;
        break;
      }
      f--;
    }
    Ia || (this.aL[this.aL.length] = new Jd(e, Da));
  };
  Ha.prototype.kv = function () {
    this.La.kv();
  };
  Ha.prototype.eId = function () {
  };
  Ha.prototype.Irf = function () {
    return this.La.Irf();
  };
  Ha.prototype.zyg = function () {
    this.WLd = !0;
    this.bs && (this.bs.gka = !1);
  };
  Ha.prototype.xKf = function () {
    return this.La.xKf();
  };
  Ha.prototype.vIf = function () {
    return this.La.vIf();
  };
  Ha.prototype.ksf = function () {
    !0 === f.flat_desine && AscCommonWord.z6f(AscCommonWord.fKf);
    var Da = e.getElementsByTagName('head')[0], Ia = e.createElement('style');
    Ia.type = 'text/css';
    Ia.innerHTML = '.block_elem { position:absolute;padding:0;margin:0; }';
    Da.appendChild(Ia);
    Ia = e.createElement('style');
    Ia.type = 'text/css';
    Ia.innerHTML = '.buttonRuler {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAwCAYAAAAYX/pXAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAABhElEQVRIS62Uwa6CMBBF/VQNQcOCBS5caOICApEt3+Wv+AcmfQ7pbdreqY+CJifTdjpng727aZrMFmbB+/3erYEE+/3egMPhMPP57QR/EJCgKAoTs1hQlqURjsdjAESyPp1O7pwEVVWZ1+s1VyB7DemRoK5rN+CvNaRPgqZpgqHz+UwSnEklweVyCQbivX8mlQTX65UGfG63m+vLXRLc7/ekQHoAexK0bWs0uq5TKwli8Afq+94Mw+CQPe78K5D6eDzMOI4GVcCdr4IlOMEWfiP4fJpVkEDLA38ghgR+DgB/ICYQ5OYBCez7d1mAvQZ6gcBmAK010A8ENg8c9u2rZ6iBwL51R7z3z1ADgc2DJDYPZnA3ENi3rhLlgauBAO8/JpUHJEih5QF6iwRaHqC3SPANJ9jCbwTP53MVJNDywB+IIYGfA8AfiAkEqTyQDEAO+HlAgtw8IEFuHpAgNw9IkJsHJMjNAxLk5gEJ8P5jUnlAghRaHqC3SKDlAXqLBN9wgvVM5g/dFuEU6U2wnAAAAABJRU5ErkJggg==);background-position: 0px 0px;background-repeat: no-repeat;}';
    Da.appendChild(Ia);
    Ia = e.createElement('style');
    Ia.type = 'text/css';
    Ia.innerHTML = '.buttonPrevPage {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABgBAMAAADm/++TAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAA////UVNVu77Cenp62Nrc3x8hMQAAAAF0Uk5TAEDm2GYAAABySURBVCjPY2AgETDBGEoKUAElJcJSxANjKGAwDQWDYAKMIBhDSRXCCFJSIixF0GS4M+AMExcwcCbAcIQxBEUgDEdBQcJSBE2GO4PU6IJHASxS4NGER4p28YWIAlikwKMJjxTt4gsRBbBIgUcTHini4wsAwMmIvYZODL0AAAAASUVORK5CYII=);background-position: 0px 0px;background-repeat: no-repeat;}';
    Da.appendChild(Ia);
    Ia = e.createElement('style');
    Ia.type = 'text/css';
    Ia.innerHTML = '.buttonNextPage {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABgBAMAAADm/++TAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAA////UVNVu77Cenp62Nrc3x8hMQAAAAF0Uk5TAEDm2GYAAABySURBVCjPY2AgETDBGEoKUAElJcJSxANjKGAwDQWDYAKMIBhDSRXCCFJSIixF0GS4M+AMExcwcCbAcIQxBEUgDEdBQcJSBE2GO4PU6IJHASxS4NGER4p28YWIAlikwKMJjxTt4gsRBbBIgUcTHini4wsAwMmIvYZODL0AAAAASUVORK5CYII=);background-position: 0px -48px;background-repeat: no-repeat;}';
    Da.appendChild(Ia);
  };
  Ha.prototype.cIf = function () {
    this.ksf();
    null != this.Ve && (this.Ve.innerHTML = '<div id="id_main" class="block_elem" style="-ms-touch-action: none;-moz-user-select:none;-khtml-user-select:none;user-select:none;background-color:' + AscCommonWord.Kfa.rpa + ';overflow:hidden;" UNSELECTABLE="on">\t\t\t\t\t\t\t\t<div id="id_panel_left" class="block_elem">\t\t\t\t\t\t\t\t\t<canvas id="id_buttonTabs" class="block_elem"></canvas>\t\t\t\t\t\t\t\t\t<canvas id="id_vert_ruler" class="block_elem"></canvas>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div id="id_panel_top" class="block_elem">\t\t\t\t\t\t\t\t\t<canvas id="id_hor_ruler" class="block_elem"></canvas>\t\t\t\t\t\t\t\t\t</div>                                    <div id="id_main_view" class="block_elem" style="overflow:hidden">                                        <canvas id="id_viewer" class="block_elem" style="-ms-touch-action: none;-webkit-user-select: none; background-color:' +
      AscCommonWord.Kfa.rpa + ';z-index:1"></canvas>\t\t\t\t\t\t\t\t\t    <canvas id="id_viewer_overlay" class="block_elem" style="-ms-touch-action: none;-webkit-user-select: none; z-index:2"></canvas>\t\t\t\t\t\t\t\t\t    <canvas id="id_target_cursor" class="block_elem" width="1" height="1" style="-ms-touch-action: none;-webkit-user-select: none;width:2px;height:13px;z-index:4;"></canvas>                                    </div>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div id="id_panel_right" class="block_elem" style="margin-right:1px;background-color:' +
      AscCommonWord.Kfa.nhb + ';">\t\t\t\t\t\t\t\t\t<div id="id_buttonRulers" class="block_elem buttonRuler"></div>\t\t\t\t\t\t\t\t\t<div id="id_vertical_scroll" style="left:0;top:0px;width:14px;overflow:hidden;position:absolute;">\t\t\t\t\t\t\t\t\t<div id="panel_right_scroll" class="block_elem" style="left:0;top:0;width:1px;height:6000px;"></div>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div id="id_buttonPrevPage" class="block_elem buttonPrevPage"></div>\t\t\t\t\t\t\t\t\t<div id="id_buttonNextPage" class="block_elem buttonNextPage"></div>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div id="id_horscrollpanel" class="block_elem" style="margin-bottom:1px;background-color:' +
      AscCommonWord.Kfa.nhb + ';">\t\t\t\t\t\t\t\t\t<div id="id_horizontal_scroll" style="left:0px;top:0;height:14px;overflow:hidden;position:absolute;width:100%;">\t\t\t\t\t\t\t\t\t\t<div id="panel_hor_scroll" class="block_elem" style="left:0;top:0;width:6000px;height:1px;"></div>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t</div>');
  };
  Ha.prototype.rwg = function () {
    return this.PR ? this.La.Ha : '';
  };
  Ha.prototype.dsf = function () {
    this.cHc = new AscCommon.IGf;
    this.La.Za.gh();
    var e = {
      data: '', Rua: function (e, f) {
        this.data = f;
      }
    };
    this.w4b(e, 2);
    this.La.Za.kd();
    return e.data;
  };
  Ha.prototype.lFd = function () {
    this.La.Za = new AscCommonWord.NBb(this.La.Cd);
    this.La.Cd.Za = this.La.Za;
    this.OQc || this.La.Za.uSd();
    this.La.ns && (this.La.ns.delegate.Ma = this.La.Za);
    if (this.XLd() || this.tKc()) this.Oq = !1, this.La.FQd();
  };
  Ha.prototype.mtf = function () {
    this.La.Cd.ZY = new AscCommonWord.hug;
    this.La.Cd.ZY.kv();
    this.La.Cd.dpf(!1);
    this.La.FQd();
  };
  Ha.prototype.eke = function (e, f) {
    this.WLd = !1;
    this.mtf();
    this.NIb = null;
    this.DocumentType = 1;
    this.ANc = !0;
    this.La.Cd.ZY.Wg(e,
      f);
    this.m5.S2a(this.La.Cd.ZY.OO, !0);
  };
  Ha.prototype.rRd = function (e, f) {
    this.lFd();
    this.DocumentType = 2;
    this.VKf = this.La.Za.UGc();
    af.gUa(!0);
    AscFonts.hV = !0;
    e = new AscCommonWord.A4a(this.La.Za, { Imc: !1, uqa: 0, FXb: 0 });
    e.Qp(f) ? (sb && sb.FBe && sb.FBe(e.stream), af.gUa(!1), this.NIb = 1, (new AscCommonWord.Q7f).Mug(this, this.VKf), this.La.Cd.lPd(), AscCommon.Vpa.zHf(this.La.Za), this.m5.S2a(this.La.Za.OO, !1)) : editor.Re('asc_onError', xc.Fg.SFd, xc.il.xV);
    AscFonts.hV = !1;
    editor.bHc = null == editor.La.Za ? !0 : !editor.La.Za.lqa;
    f =
      editor.bHc ? Yg.bD(AscCommon.V6a, AscCommon.BIa) : Yg.bD(AscCommon.BIa, AscCommon.V6a);
    editor.mSc(f.qm, f.om);
    editor.CLc(editor.bKd());
    this.PR && (AscCommon.qf.MYa = !1, sh.mag = 'wrd_pastebin', sh.l9f = 'none');
  };
  var $b = {};
  Ha.prototype.CVa = function (e, f) {
    $b.hasOwnProperty(e) || ($b[e] = []);
    $b[e].push(f);
  };
  Ha.prototype.EZe = function (e, f) {
    if ($b.hasOwnProperty(e)) for (var Da = $b[e].length - 1; 0 <= Da; --Da) $b[e][Da] == f && $b[e].splice(Da, 1);
  };
  Ha.prototype.ikc = function (e) {
    return $b.hasOwnProperty(e);
  };
  Ha.prototype.QOg = function () {
    return [this.SSd.mRa,
      this.SSd.zbg];
  };
  Ha.prototype.bqd = function (e) {
    if (this.La && this.La.Za && e) switch (e.type) {
      case 'bookmark':
        this.La.Za.Tla(e.data, !0);
        break;
      case 'comment':
        if (e = this.La.Za.Jk.Osf(e.data)) this.Uid(e), this.bjd(e);
    }
  };
  Ha.prototype.lLe = function (e, f) {
    var Da = new AscCommon.rhb;
    Da.gLb(e);
    Da.iS(f);
    AscCommon.Rd.UDd(Da);
  };
  Ha.prototype.xvf = function (e, f) {
    for (var Da = e.length, Ia = 0; Ia < Da; ++Ia) this.lLe(e[Ia], f);
  };
  Ha.prototype.Dfd = function () {
    var e = this;
    this.al.UEa = function (f) {
      !0 === AscCommon.Rd.YA && e.La.Za.UNc(f[f.length - 1].cursor,
        f[f.length - 1].user, !0, f[f.length - 1].useridoriginal);
    };
    this.al.Coa = function (f) {
      !0 === AscCommon.Rd.YA && !1 === f.state && e.La.Za.W0a(f.id);
      e.Re('asc_onConnectionStateChanged', f);
    };
    this.al.Gua = function (f) {
      if (!e.Cfd(e.al.Gua, f) && 2 != f.state) {
        var Da = f.block, Ha = Qf.Zf(Da);
        if (null != Ha) {
          Da = Ha.Hf;
          Da.i0b(f.user);
          var Pa = Ha.Hf.Ui();
          Ra === Pa || Ia === Pa ? Da.GJ(Ia, !0) : Da.GJ(ob, !0);
          Ha instanceof AscCommonWord.U5d ? e.B5f() : Ha instanceof AscCommonWord.NBb ? e.z5f() : Ha instanceof AscCommon.X7b ? e.N1d(Ha.sb(), f.user) : Ha instanceof AscCommonWord.MGf ?
            e.A5f() : Ha instanceof AscCommon.efb && editor.Re('asc_onLockCore', !0);
          e.La.Za.Ge();
        } else AscCommon.Rd.EOd(Da, f.user);
      }
    };
    this.al.mja = function (f, Da) {
      if (!e.Cfd(e.al.mja, f, Da)) {
        var Ha = f.block, Pa = Qf.Zf(Ha);
        if (null != Pa) {
          if (Ha = Pa.Hf, 'undefined' != typeof Ha) {
            var Va = Ha.Ui(), Za = cc;
            if (Va === ob) 1 != Da ? Za = cc : (Za = Ra, AscCommon.Rd.t3d(Pa)); else if (Va === Rb) Za = Rb; else if (Va === Ra || Va === Ia) Za = Ra;
            Ha.GJ(Za, !0);
            e.La.Za.Ge();
            Pa instanceof AscCommonWord.U5d ? Za !== Rb && Za !== cc ? e.B5f() : e.S5f() : Pa instanceof AscCommonWord.NBb ? Za !== Rb &&
            Za !== cc ? e.z5f() : e.Q5f() : Pa instanceof AscCommon.X7b ? Za !== Rb && Za !== cc ? e.N1d(Pa.sb(), f.user) : e.Q1d(Pa.sb()) : Pa instanceof AscCommonWord.MGf ? Za !== Rb && Za !== cc ? e.A5f() : e.R5f() : Pa instanceof AscCommon.efb && (Za !== Rb && Za !== cc ? editor.Re('asc_onLockCore', !0) : editor.Re('asc_onLockCore', !1));
          }
        } else AscCommon.Rd.ute(Ha);
      }
    };
    this.al.Rqa = function (f, Da, Ia) {
      var Ha;
      Ia && (Ha = -1 === AscCommon.Rd.g9);
      e.fMc === c_oAscCollaborativeMarksShowType.Af && (Ha = !1);
      Da = AscCommon.MAb(Da, null, !1, !1);
      e.lLe(f, !1 === Ha ? null : Da);
      !Ia && e.IJ && e.Kpf();
    };
    this.al.RCa = function (e) {
      e && !0 === AscCommon.Rd.YA && (e = JSON.parse(e), AscCommon.Rd.rrf(e.Ol, e.kIf, e.VNf));
    };
  };
  Ha.prototype.BBb = function () {
    AscCommon.Rd.k0b();
    this.La && this.La.Za && this.La.Za.pSd();
    this.PTd(!0);
    f.AscCommon.Ki && AscCommon.Rd.YA && f.AscCommon.Ki.Jka();
  };
  Ha.prototype.GJc = function () {
    AscCommon.Rd.hae();
    this.PTd(!1);
  };
  Ha.prototype.mSd = function (e) {
    if (void 0 != e && void 0 != e.ParagraphId) {
      var f = Qf.Zf(e.ParagraphId), Da = e.type;
      null != f && ('spell' === Da ? (f.cy.Srf(e.RecalcId, e.usrCorrect), f.IPa()) : 'suggest' === Da &&
        (f.cy.Trf(e.RecalcId, e.ElementId, e.usrSuggest), this.Upf()));
    }
  };
  Ha.prototype.ohd = function () {
    this.La.Za && this.La.Za.uSd();
  };
  Ha.prototype.q3a = function () {
    var e = AscCommon.Rd, f = this.Mcf() || !0 !== e.k8() && 0 !== e.Toc();
    !0 === e.YA && !0 !== e.k8() && (f = !1);
    f !== this.KYa && (this.KYa = f, this.Re('asc_onDocumentCanSaveChanged', this.KYa));
  };
  Ha.prototype.Ogd = function () {
    this.La && this.La.Za && this.La.Za.awa();
  };
  Ha.prototype.VRg = function (e) {
    if (void 0 != e.cf) {
      var f = AscCommon.LR, Da = gb.Gka(e.cf);
      f = f.WG(Da, editor.Agg, e);
      e.cf = new Pi({
        Ha: Da.Ha,
        Ta: -1
      });
      !1 === f && !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.JXd), this.La.Za.pU(e), this.La.Za.rg());
    } else !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.IXd), this.La.Za.pU(e), this.La.Za.rg());
  };
  Ha.prototype.Agg = function (e) {
    this.hx(ge.oO, he.WG);
    !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.KXd), this.La.Za.pU(e), this.La.Za.rg());
  };
  Ha.prototype.yFg = function (e) {
    this.La.Za.UFf(e);
  };
  Ha.prototype.wTg = function (e) {
    this.La.Za.XLf(e);
  };
  Ha.prototype.rWd = function () {
    var e = this.La.Za, f = e.Dt();
    e = e.bp();
    return new Asc.Drf(f,
      e);
  };
  Ha.prototype.xwg = function () {
    return JSON.stringify(this.La.Za);
  };
  Ha.prototype.elg = function () {
    return this.La.Za.fa.length;
  };
  Ha.prototype.UTg = function (e) {
    var f = this.La.Za;
    !0 === f.Selection.Ka && f.kd();
    f.yb.WC(!0);
    f.yb.fL();
    f.Selection.Ka = !0;
    f.Selection.Qb = !1;
    f.Selection.Sf = AscCommon.q3f;
    f.Selection.xa = e;
    f.Selection.ya = e;
    f.fa[e].Selection.Ka = !0;
    f.fa[e].Selection.xa = f.fa[e].O_b();
    f.fa[e].Selection.ya = f.fa[e].fa.length - 1;
    f.SXg();
  };
  Ha.prototype.MUa = function (e) {
    'undefined' != typeof e && (this.Jpf(e.Nd), this.Ppf(e.Ye),
      this.dqf(e.Xi), this.Vpf(e.Ii), this.aqf(e.$b), this.$pf(e.cf), this.eqf(e.uj), this.yFf(e.kh), this.cqf(e.kc), this.Xpf(e.zj), this.Wpf(e.Em), this.bqf(e.Yk), this.Zpf(e.ze), this.Ypf(e.Vf), this.xFf(e), this.PR && this.Re('asc_onTextShd', new Asc.vOc(e.Ob)));
  };
  Ha.prototype.k3a = function (e) {
    var f = editor.La.Za.bp();
    e.I_ = f.uj === AscCommon.LD;
    e.J_ = f.uj === AscCommon.YD;
    e.Ii = f.Ii;
    e.zj = f.zj;
    e.rT = f.Em;
    e.Yk = f.Yk;
    e.uU = f.kc;
    e.ze = f.ze;
    !0 === e.kc.Mr ? e.kc.tg = AscCommonWord.NBd : void 0 === e.kc.Mr && (e.kc.tg = AscCommonWord.ySd);
    !0 === e.kc.$r ?
      e.kc.Ji = AscCommonWord.NBd : void 0 === e.kc.$r && (e.kc.Ji = AscCommonWord.ySd);
    e.LGd = -1 === e.tm ? '' : void 0 === e.tm || void 0 === this.La.Za.yh.lf[e.tm] ? this.La.Za.yh.lf[this.La.Za.yh.Ub.bb].Ha : this.La.Za.yh.lf[e.tm].Ha;
    var Da = f = -1;
    if (null != e.Rf && 0 !== e.Rf.he && '0' !== e.Rf.he) {
      var Ia = this.La.Za.Nr().bm(e.Rf.he);
      Ia && Ia.fl(e.Rf.xc) && (Da = Ia.fl(e.Rf.xc).Usf(), f = Da.ka, Da = Da.rC);
    }
    e.D6a = { ka: f, rC: Da };
    void 0 !== e.Sh && void 0 !== e.Sh.PF && (e.Sh.PF = AscCommonWord.Z6f === e.Sh.PF ? !1 : AscCommonWord.Y6f === e.Sh.PF ? !0 : void 0);
    this.$Nd(e.kc);
    this.cHd(e.gc);
    this.bOd(e.Ne);
    this.aOd(e.LGd);
    this.YNd(e.D6a);
    this.Rpf(e);
  };
  Ha.prototype.Rgd = function (e) {
    if (null != this.La.Cd.ZY) !0 === f.AscDesktopEditor.IsSupportNativePrint(this.qsf) && f.AscDesktopEditor.Print(); else {
      var Da = 0;
      e && e.wEa && e.wEa && Asc.W0b.Selection === e.wEa.TIc() && (Da |= 1);
      f.AscDesktopEditor.Print(Da);
    }
    return !0;
  };
  Ha.prototype.Ll = function () {
    this.La.Za.Kra();
  };
  Ha.prototype.Yg = function () {
    this.La.Za.tMc();
  };
  Ha.prototype.Wa = function () {
    return f.AscDesktopEditor ? (f.asc_desktop_copypaste(this, 'Copy'),
      !0) : AscCommon.y1.kUc();
  };
  Ha.prototype.f1a = function (e, f) {
    this.La.Cd.f1a(e, f);
  };
  Ha.prototype.lIf = function () {
    return f.AscDesktopEditor ? (f.asc_desktop_copypaste(this, 'Cut'), !0) : AscCommon.y1.R4d();
  };
  Ha.prototype.zLf = function () {
    return f.AscDesktopEditor ? (f.asc_desktop_copypaste(this, 'Paste'), !0) : !this.La.Za || AscCommon.y1.WQd() ? !1 : AscCommon.y1.S4d();
  };
  Ha.prototype.TMf = function () {
  };
  Ha.prototype.w4b = function (e, Da) {
    if (this.La.Za) {
      var Ia = null;
      if (AscCommon.Fs.Text & Da) {
        var Ha = this.La.Za.wq(!1, { OHc: !0 });
        e.Rua(AscCommon.Fs.Text,
          '' === Ha ? null : Ha);
      }
      AscCommon.Fs.Lfa & Da && (Ha = new AscCommon.jMc(this), Ia = Ha.Qb(), Ha = Ha.RDb(), e.Rua(AscCommon.Fs.Lfa, '' === Ha ? null : Ha));
      AscCommon.Fs.Fl & Da && (null === Ia && (f.NATIVE_EDITOR_ENJINE ? (Ha = new AscCommon.jMc(this, !0), Ia = Ha.wXf()) : (Ha = new AscCommon.jMc(this), Ia = Ha.Qb())), e.Rua(AscCommon.Fs.Fl, '' === Ia ? null : Ia));
    } else Ia = AscCommon.Fs.Text & Da ? { Text: '' } : null, Ha = this.La.Cd.ZY.Wa(Ia), AscCommon.Fs.Text & Da && e.Rua(AscCommon.Fs.Text, Ia.Text), AscCommon.Fs.Lfa & Da && e.Rua(AscCommon.Fs.Lfa, Ha);
  };
  Ha.prototype.$hd = function () {
    if (!AscCommon.Rd.Rla()) {
      var e =
        this.La.Za;
      e && !e.Rl(!0) && !1 === e.jf($d) && (e.Jg(AscDFH.CWd), e.xg(-1, !0, !0), e.ju(), e.rg());
    }
  };
  Ha.prototype.MFa = function (e, Da, Ia, Ha, Ra, Pa) {
    if (!AscCommon.Rd.Rla()) {
      var Za = this.La.Za;
      Za && !1 === Za.jf($d, null, !0, !1) && (f.AscCommon.Ki.W5c(Pa), Ra || Za.Jg(AscDFH.lRb), AscCommon.REd(this, e, Da, Ia, Ha));
    }
  };
  Ha.prototype.OSd = function () {
    var e = this.La.Za;
    e && e.rg();
  };
  Ha.prototype.TPe = function (e) {
    return AscCommon.Ki.oye(e);
  };
  Ha.prototype.UPe = function (e) {
    if (!AscCommon.Rd.Rla()) {
      var Da = this.La.Za;
      Da && !1 === Da.jf($d, null, !0, !1) &&
      (f.AscCommon.Ki.W5c(), f.AscCommon.Ki.rye(), this.La.Za.Kra(), Da.Jg(AscDFH.lRb), AscCommon.REd(this, null, null, null, null, e), Da.rg());
    }
  };
  Ha.prototype.UTd = function () {
    var e = f.AscCommon.Ki;
    if (e && !e.kPd()) {
      var Da = e.uS ? e.uS : null;
      if (Da && null !== e.Ava) {
        var Ia = Da.Nxa, Ha = Qf.Zf(e.Ava);
        if (Ha.Qde) {
          Ha = Ha.Qde();
          var Ra = 0;
          var Pa = 0;
          Ha.ot && (Ra = Ha.ot.Eb, Pa = Ha.ot.bf);
          Pa = Ha.qa + Ha.Uc + Pa;
          Ha = Ha.pa + Ra;
        } else Pa = Ra = 0, Ha.sQ && (Pa = Ha.sQ.Vb, Ra = Ha.sQ.W), Pa = Ha.qa + Pa, Ha = Ha.pa + Ra;
        Ra = this.La.Za.lc;
        e.uS.Mib = { x: Ha, y: Pa, Kua: Ra };
        Pa = this.La.Za.yb.bx(Ha,
          Pa, Ra);
        Pa = new AscCommon.LFa(Pa.pa, Pa.qa, 0, 0);
        Da.nib(Pa);
        Ia ? (Da.options = [], this.qTd(Da)) : this.QIc(Da);
      }
      e.Ava = null;
      return !0;
    }
  };
  Ha.prototype.QIc = function (e) {
    this.Re('asc_onShowSpecialPasteOptions', e);
  };
  Ha.prototype.GPe = function () {
    this.Re('asc_onHideSpecialPasteOptions');
  };
  Ha.prototype.qTd = function () {
    var e = AscCommon.Ki;
    if (e) {
      if (e.uS && e.uS.Mib) {
        var f = e.uS;
        e = this.La.Za.yb.bx(f.Mib.x, f.Mib.y, f.Mib.Kua);
        e = new AscCommon.LFa(e.pa, e.qa, 0, 0);
        f.nib(e);
      }
      f && this.Re('asc_onShowSpecialPasteOptions', f);
    }
  };
  Ha.prototype.hJc =
    function (e) {
      this.La.Za && this.La.Cd && (this.La.Cd.IGd(), this.La.Bxa(), this.La.$q(e), this.La.VV());
    };
  Ha.prototype.HJc = function () {
    this.La.Za && this.La.Cd && this.La.Cd.Asf(!0);
  };
  Ha.prototype.Lgd = function () {
    var e = this;
    sb.MGc();
    c_oAscCollaborativeMarksShowType.U2c === this.fMc && AscCommon.Rd.fHa();
    var Da = AscCommon.Rd.lCb();
    AscCommon.Rd.m_b();
    this.al.Doa = function () {
      e.al.Doa = null;
      e.tAc && e.jIa && (e.CBa = e.SWa());
      e.KVc();
      e.a0 = !0;
      e.jIa = !1;
      e.CBa || e.hx(ge.oO, he.qG);
      e.q3a();
      void 0 !== f.AscDesktopEditor && f.AscDesktopEditor.OnSave();
      e.Yrb && (e.al.disconnect(e.Yrb.code, e.Yrb.reason), e.Yrb = null);
      AscCommon.Ki && !AscCommon.Rd.k8() && AscCommon.Ki.Jka();
      e.JY && e.xNb();
    };
    var Ia = null;
    !0 === AscCommon.Rd.YA && (Ia = sb.jFd());
    this.Csb ? (AscCommon.Rd.zxa(!1), AscCommon.Rd.Ll(), this.Csb = !1) : AscCommon.Rd.Vec(this.jIa, {
      Ol: this.al.zOa(),
      VNf: this.Eq.Aqa(),
      kIf: Ia
    }, Da, !0);
  };
  Ha.prototype.ffd = function () {
    var e = new Date;
    null === this.pcb && (this.pcb = e);
    if (AscCommon.Rd.YA && !AscCommon.Rd.k8()) this.La.Za.N8d(); else {
      var f = !1;
      sb.Sm && 0 <= sb.Ta && sb.Ta < sb.Sm.length && e - sb.Sm[sb.Ta].Z9 <
      this.$Bf && (f = !0);
      !f && e - this.pcb > (0 >= AscCommon.Rd.g9 ? this.HZe : this.GZe) && (1 == sb.NZ(!0) && this.cba(!0), this.pcb = e);
    }
  };
  Ha.prototype.pjc = function () {
    return !this.G0() && !(this.La.Za && this.La.Za.ZSa());
  };
  Ha.prototype.mgd = function () {
    return AscCommon.Rd.lCb();
  };
  Ha.prototype.qEg = function (e) {
    var f = e ? bc.NPd : bc.Af;
    e = { c: 'pathurl', title: this.wna, data: 'origin.' + this.EDb };
    var Da = this;
    Da.lka = function (e) {
      null != e && 'pathurl' == e.type ? 'ok' == e.status ? (e = e.data) ? Da.Jxd(e, f) : Da.be.trigger('asc_onError', xc.Fg.cT, xc.il.ep) : Da.be.trigger('asc_onError',
        AscCommon.eBb(parseInt(e.data)), xc.il.ep) : Da.be.trigger('asc_onError', xc.Fg.cT, xc.il.ep);
    };
    Ye(this, null, e);
  };
  Ha.prototype.Xhd = function (e) {
    this.Vnc(this.W_d ? he.vCb : he.d$b, e);
  };
  Ha.prototype.Ty = function () {
    !1 !== this.IJ && this.La.$2a(!1);
  };
  Ha.prototype.dGf = function () {
  };
  Ha.prototype.sKf = function () {
  };
  Ha.prototype.DVa = function (e, f) {
    if (this.E0b === Za.YNa && !AscCommon.AE.DVa(this, e, f)) switch (e) {
      case De.c1a:
        Ye(this, null, {
          id: this.KY,
          userid: this.tia,
          format: this.EDb,
          c: 'reopen',
          title: this.wna,
          codepage: f.QPa(),
          nobase64: !0
        });
        break;
      case De.OGb:
        Ye(this, null, {
          id: this.KY,
          userid: this.tia,
          format: this.EDb,
          c: 'reopen',
          title: this.wna,
          password: f.Eqb(),
          nobase64: !0
        });
    }
  };
  Ha.prototype.ove = function (e) {
    this.T4 ? (be.tvd === e ? AscCommon.lP.OKb(!1, !1) : be.oqd === e ? AscCommon.lP.OKb(!0, !1) : be.sQc === e && AscCommon.lP.OKb(!0, !0), this.La.Cd.VD(), void 0 !== AscCommon.x1a && null !== AscCommon.x1a && AscCommon.x1a.PGc(), this.IJ && this.La.AV()) : this.hOd = e;
  };
  Ha.prototype.Jxd = function (e, f) {
    var Da = this;
    this.W_d ? (this.W_d = null, AscCommon.zCf(e, function (e) {
      if (null === e) Da.Re('asc_onError',
        xc.Fg.vCb, xc.il.ep); else try {
        Da.VPe(JSON.parse(e.responseText));
      } catch (Oe) {
        Da.Re('asc_onError', xc.Fg.vCb, xc.il.ep);
      }
    })) : this.iCa ? (Da.iCa.DLd = e, AscCommon.zCf(e['output.bin'], function (e) {
      var f;
      null !== e && (f = AscCommon.rZf(e)) ? Da.MFa(AscCommon.Fs.Fl, f, void 0, void 0, !0) : (Da.Fnd(), Da.Re('asc_onError', xc.Fg.vCb, xc.il.ep));
    }, 'arraybuffer')) : AscCommon.x3a.prototype.Jxd.call(this, e, f);
  };
  Ha.prototype.tUf = function () {
    this.iCa && (this.La.Za.gu(!1, !1, !0), this.La.Za.Ld());
    if (this.iCa && 0 < this.iCa.Zrb.length) {
      var e = new Asc.MIc(Asc.yib.bEd);
      e.jCf = !0;
      this.Xhd(e);
    } else this.Fnd();
  };
  Ha.prototype.Fnd = function () {
    this.iCa && (this.iCa.CMg(this), this.iCa = null);
  };
  Ha.prototype.Y4f = function () {
    this.Lpf();
    if (null != this.La.Cd.ZY) {
      var e = this.La.Cd.ZY;
      this.Re('asc_onDocInfo', new Eb({ l8: e.FE, v0b: e.isf, Y_b: e.gsf, n0b: e.z9d, o0b: e.z9d + e.hsf }));
      this.WNd();
    } else this.La.Za.Juf();
  };
  Ha.prototype.a5f = function () {
    this.Mpf();
    null != this.La.Za && this.La.Za.Kuf();
  };
  Ha.prototype.L1d = function (e) {
    this.Re('asc_onDocInfo', new Eb(e));
  };
  Ha.prototype.Lpf = function () {
    this.Re('asc_onGetDocInfoStart');
  };
  Ha.prototype.Mpf = function () {
    this.Re('asc_onGetDocInfoStop');
  };
  Ha.prototype.WNd = function () {
    this.Re('asc_onGetDocInfoEnd');
  };
  Ha.prototype.BLc = function (e) {
    this.Re('asc_onCanUndo', e);
  };
  Ha.prototype.ALc = function (e) {
    !0 === AscCommon.Rd.YA && !0 !== AscCommon.Rd.k8() && (e = !1);
    this.Re('asc_onCanRedo', e);
  };
  Ha.prototype.YSf = function () {
    return this.La.Za.Bka();
  };
  Ha.prototype.nFf = function (e) {
    this.Re('asc_onCanCopyCut', e);
  };
  Ha.prototype.Uof = function () {
    this.kka = this.TEa = !0;
    this.Egb();
    this.La.Za.tAa();
  };
  Ha.prototype.hof = function () {
    this.TEa =
      !1;
    this.v1a = !0;
    this.kgb();
    this.La.Za.uAa();
  };
  Eb.prototype.UXf = function () {
    return this.l8;
  };
  Eb.prototype.X1f = function (e) {
    this.l8 = e;
  };
  Eb.prototype.bYf = function () {
    return this.v0b;
  };
  Eb.prototype.t2f = function (e) {
    this.v0b = e;
  };
  Eb.prototype.VXf = function () {
    return this.Y_b;
  };
  Eb.prototype.Y1f = function (e) {
    this.Y_b = e;
  };
  Eb.prototype.ZXf = function () {
    return this.n0b;
  };
  Eb.prototype.g2f = function (e) {
    this.n0b = e;
  };
  Eb.prototype.$Xf = function () {
    return this.o0b;
  };
  Eb.prototype.h2f = function (e) {
    this.o0b = e;
  };
  Ha.prototype.T5f = function () {
    this.Re('asc_onUndo');
  };
  Ha.prototype.F5f = function () {
    this.Re('asc_onRedo');
  };
  Ha.prototype.u5f = function () {
    this.Re('asc_onCopy');
  };
  Ha.prototype.v5f = function () {
    this.Re('asc_onCut');
  };
  Ha.prototype.E5f = function () {
    this.Re('asc_onPaste');
  };
  Ha.prototype.I5f = function () {
    this.Re('asc_onShare');
  };
  Ha.prototype.G5f = function () {
    this.Re('asc_onSave');
  };
  Ha.prototype.w5f = function () {
    this.Re('asc_onDownload');
  };
  Ha.prototype.p5f = function () {
    this.Re('asc_onAddURL');
  };
  Ha.prototype.x5f = function (e, f) {
    this.Re('asc_onError', e, f);
  };
  Ha.prototype.y5f = function (e) {
    this.Re('asc_onHelp',
      e);
  };
  Ha.prototype.U5f = function (e) {
    this.Re('asc_onZoom', e);
  };
  Ha.prototype.sEd = function (e) {
    this.Re('asc_onClearPropObj', e);
  };
  Ha.prototype.RQf = function () {
    this.La.Za && (this.La.Cd.Dbg(), this.La.Cd.Sbd = new Asc.cVc, this.La.Cd.Sbd.lFa = !0, this.La.Cd.Sbd.UC = !0, this.La.Cd.Sbd.hFa = !0, this.La.Cd.w9f());
  };
  Ha.prototype.PHf = function () {
    this.Tpf([]);
  };
  Ha.prototype.BJf = function () {
  };
  Ha.prototype.lYf = function (e) {
    this.wLa(e);
  };
  Ha.prototype.r5f = function (e, f) {
    this.Re('asc_onChangeActiveHeader', e, new Asc.XOd(f));
  };
  Ha.prototype.Tpf =
    function (e) {
      for (var f = [], Da = 0; Da < e.length; Da++) f[Da] = new Asc.XOd(e[Da]);
      this.Re('asc_onReturnHeaders', f);
    };
  Ha.prototype.TXe = function () {
    null != this.La.Cd.ZY && (this.La.Cd.ZY.IB.MKf = !1, this.La.Zv());
  };
  Ha.prototype.fQe = function (e, f, Da) {
    if (null != this.La.Cd.ZY) return this.La.Cd.ZY.findText(e, Da, f), this.La.Cd.ZY.IB.wl;
    e = editor.La.Za.by(e, { oIa: Da });
    f = this.La.Za.Rp(f);
    null != f && this.La.Za.$Hc(f);
    return e.wl;
  };
  Ha.prototype.RXe = function (e, f, Da, Ia) {
    if (null != this.La.Za) if (this.La.Za.by(e, { oIa: Ia }), !0 === Da) this.La.Za.ZHc(f,
      !0, -1); else return e = this.La.Za.Hz.qMc, Da = this.La.Za.Hz.xi, -1 != e && this.La.Za.ZHc(f, !1, e), f = this.La.Za.Rp(Da), null != f ? (this.La.Za.$Hc(f), !0) : !1;
  };
  Ha.prototype.ewf = function (e) {
    null != this.La.Cd.ZY ? (this.La.Cd.ZY.IB.fda = e, this.La.Zv()) : this.La.Za.Xag(e);
  };
  Ha.prototype.KHg = function () {
    return null != this.La.Cd.ZY ? this.La.Cd.ZY.IB.fda : this.La.Za.Hz.Selection;
  };
  Ha.prototype.Spf = function (e, f) {
    this.Re('asc_onReplaceAll', f, e);
  };
  Ha.prototype.DLc = function () {
    this.Re('asc_onSearchEnd');
  };
  Ha.prototype.m2f = function (e) {
    var f =
      AscCommon.LR, Da = gb.Gka(e);
    !1 === f.WG(Da) && !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.nYd), this.La.Za.Xg(new AscCommonWord.rM({
      cf: {
        Ha: e,
        Ta: -1
      }
    })), this.lda(), this.La.Za.rg());
  };
  Ha.prototype.n2f = function (e) {
    !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.pYd), this.La.Za.Xg(new AscCommonWord.rM({ $b: Math.min(e, 100) })), this.lda(), this.La.Za.rg());
  };
  Ha.prototype.l2f = function (e) {
    !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.jYd), this.La.Za.Xg(new AscCommonWord.rM({ Nd: e })), this.lda(),
      this.La.Za.rg());
  };
  Ha.prototype.o2f = function (e) {
    !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.sYd), this.La.Za.Xg(new AscCommonWord.rM({ Ye: e })), this.lda(), this.La.Za.rg());
  };
  Ha.prototype.r2f = function (e) {
    !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.xYd), this.La.Za.Xg(new AscCommonWord.rM({ Xi: e })), this.lda(), this.La.Za.rg());
  };
  Ha.prototype.q2f = function (e) {
    !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.wYd), this.La.Za.Xg(new AscCommonWord.rM({
      Ii: e,
      zj: !1
    })), this.lda(), this.La.Za.rg());
  };
  Ha.prototype.OSg = function (e) {
    !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.mYd), this.La.Za.Xg(new AscCommonWord.rM({
      zj: e,
      Ii: !1
    })), this.lda(), this.La.Za.rg());
  };
  Ha.prototype.RSg = function (e) {
    !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.vYd), this.La.Za.Xg(new AscCommonWord.rM({ kc: e })), this.lda(), this.La.Za.rg());
  };
  Ha.prototype.NSg = function (e) {
    !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.kYd), this.La.Za.Xg(new AscCommonWord.rM({
      Em: e,
      Yk: !1
    })), this.lda(), this.La.Za.rg());
  };
  Ha.prototype.QSg = function (e) {
    !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.uYd), this.La.Za.Xg(new AscCommonWord.rM({
      Yk: e,
      Em: !1
    })), this.lda(), this.La.Za.rg());
  };
  Ha.prototype.PSg = function (e) {
    !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.tYd), this.La.Za.Xg(new AscCommonWord.rM({ ze: e })), this.lda(), this.La.Za.rg());
  };
  Ha.prototype.p2f = function (e) {
    !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.PKd), this.La.Za.Xg(new AscCommonWord.rM({ Vf: { Jc: e } })), this.La.Za.aO.Vrf(), this.lda(),
      this.La.Za.rg());
  };
  Ha.prototype.c2f = function (e, f) {
    !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.aYd), this.La.Za.YC({
      aj: e,
      wc: f
    }), this.lda(), this.La.Za.rg());
  };
  Ha.prototype.V1f = function (e, f) {
    if (!1 === this.La.Za.jf(re)) {
      this.La.Za.Jg(AscDFH.bYd);
      switch (e) {
        case 0:
          AscCommonWord.NBd === f ? this.La.Za.YC({ $r: !0 }) : this.La.Za.YC({ Ji: f, $r: !1 });
          break;
        case 1:
          AscCommonWord.NBd === f ? this.La.Za.YC({ Mr: !0 }) : this.La.Za.YC({ tg: f, Mr: !1 });
      }
      this.La.Za.rg();
    }
  };
  Ha.prototype.WEd = function () {
    !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.qXd),
      this.La.Za.eC(!0), this.La.Za.rg());
  };
  Ha.prototype.XEd = function () {
    !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.fXd), this.La.Za.eC(!1), this.La.Za.rg());
  };
  Ha.prototype.ORg = function (e) {
    !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.UXd), this.La.Za.NF(e), this.La.Za.rg());
  };
  Ha.prototype.Jpf = function (e) {
    this.Re('asc_onBold', e);
  };
  Ha.prototype.Ppf = function (e) {
    this.Re('asc_onItalic', e);
  };
  Ha.prototype.dqf = function (e) {
    this.Re('asc_onUnderline', e);
  };
  Ha.prototype.Vpf = function (e) {
    this.Re('asc_onStrikeout', e);
  };
  Ha.prototype.$pf = function (e) {
    void 0 != e ? this.Re('asc_onFontFamily', new Pi(e)) : this.Re('asc_onFontFamily', new Pi({ Ha: '', Ta: -1 }));
  };
  Ha.prototype.aqf = function (e) {
    this.Re('asc_onFontSize', e);
  };
  Ha.prototype.tFf = function (e) {
    this.Re('asc_onLineSpacing', new Asc.uOc(e));
  };
  Ha.prototype.ZUg = function (e) {
    this.iy || this.Re('asc_onInitEditorStyles', e);
  };
  Ha.prototype.pFf = function (e, f) {
    this.iy || this.Re('asc_onInitTableTemplates', e, f);
  };
  Ha.prototype.j1f = function (e) {
    var f = void 0;
    void 0 != e.Hu && (f = {
      ka: AscCommon.eBa, Element: this.La.Za,
      Ky: AscCommon.jka
    });
    if (!1 === this.La.Za.jf(re, f)) {
      this.La.Za.Jg(AscDFH.fYd);
      'undefined' != typeof e.gp && null != e.gp && this.La.Za.XH(e.gp);
      'undefined' != typeof e.gc && null != e.gc && this.La.Za.vB(e.gc);
      'undefined' != typeof e.Ne && null != e.Ne && this.La.Za.hu(e.Ne);
      'undefined' != typeof e.nn && null != e.nn && this.La.Za.YH(e.nn);
      void 0 != e.Cn && null != e.Cn && this.La.Za.ZH(e.Cn);
      void 0 != e.lp && null != e.lp && this.La.Za.$H(e.lp);
      'undefined' != typeof e.jp && null != e.jp && this.La.Za.tJ(e.jp);
      'undefined' != typeof e.kc && null != e.kc && this.La.Za.YC(e.kc);
      void 0 !== e.Xr && this.La.Za.xuf(e.Xr);
      'undefined' != typeof e.Ob && null != e.Ob && (f = new AscFormat.Cj, f.fill = new AscFormat.wI, f.fill.color = AscFormat.kMc(e.Ob.Aa, f.fill.color, 1), this.La.Za.uH({
        ua: e.Ob.ua,
        Aa: { r: e.Ob.Aa.lDb(), wb: e.Ob.Aa.kDb(), Ya: e.Ob.Aa.jDb() },
        cb: f
      }));
      'undefined' != typeof e.tc && null != e.tc && (e.tc.Ba && e.tc.Ba.Aa && (e.tc.Ba.cb = AscFormat.Bca(e.tc.Ba.Aa, 1)), e.tc.Qa && e.tc.Qa.Aa && (e.tc.Qa.cb = AscFormat.Bca(e.tc.Qa.Aa, 1)), e.tc.Ra && e.tc.Ra.Aa && (e.tc.Ra.cb = AscFormat.Bca(e.tc.Ra.Aa, 1)), e.tc.Xa && e.tc.Xa.Aa &&
      (e.tc.Xa.cb = AscFormat.Bca(e.tc.Xa.Aa, 1)), e.tc.Tj && e.tc.Tj.Aa && (e.tc.Tj.cb = AscFormat.Bca(e.tc.Tj.Aa, 1)), e.tc.nk && e.tc.nk.Aa && (e.tc.nk.cb = AscFormat.Bca(e.tc.nk.Aa, 1)), this.La.Za.NF(e.tc));
      void 0 != e.hg && (f = new AscCommonWord.Crf, f.wf(e.hg.hg), this.La.Za.JG(f));
      void 0 != e.Hu && this.La.Za.Buf(e.Hu);
      f = new AscCommonWord.C2a;
      if (!0 === e.I_) f.uj = AscCommon.LD; else if (!0 === e.J_) f.uj = AscCommon.YD; else if (!1 === e.J_ || !1 === e.I_) f.uj = AscCommon.UP;
      void 0 != e.Ii && (f.Ii = e.Ii, f.zj = !1);
      void 0 != e.zj && (f.zj = e.zj, !0 === f.zj && (f.Ii =
        !1));
      void 0 != e.Yk && (f.Yk = e.Yk, f.rT = !1);
      void 0 != e.rT && (f.Em = e.rT, !0 === f.rT && (f.Yk = !1));
      void 0 != e.uU && (f.kc = e.uU);
      void 0 != e.ze && (f.ze = e.ze);
      this.La.Za.Xg(new AscCommonWord.rM(f));
      this.La.Za.Xn();
      this.La.Za.rg();
    }
  };
  Ha.prototype.Z1f = function (e) {
    !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.TXd), this.La.Za.hu(e), this.La.Za.rg());
  };
  Ha.prototype.k2f = function (e) {
    !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.yYd), this.La.Za.Xg(new AscCommonWord.rM({ uj: e })), this.lda(), this.La.Za.rg());
  };
  Ha.prototype.W1f =
    function (e, f) {
      function Da() {
        if (!1 === Ia.jf(re)) {
          var Da = { ka: 0, rC: -1 };
          Da.ka = e;
          Da.rC = f;
          Ia.Jg(AscDFH.cYd);
          Ia.Whb(Da);
          Ia.rg();
        }
      }

      var Ia = this.La.Za, Ha = '';
      if (0 === e) switch (f) {
        case 1:
          Ha = String.fromCharCode(183);
          break;
        case 2:
          Ha = 'o';
          break;
        case 3:
          Ha = String.fromCharCode(167);
          break;
        case 4:
          Ha = String.fromCharCode(118);
          break;
        case 5:
          Ha = String.fromCharCode(216);
          break;
        case 6:
          Ha = String.fromCharCode(252);
          break;
        case 7:
          Ha = String.fromCharCode(168);
          break;
        case 8:
          Ha = String.fromCharCode(8211);
      }
      0 < Ha.length ? AscFonts.ms.V9a(Ha, this,
        Da) : Da();
    };
  Ha.prototype.jEg = function () {
    var e = this.La.Za;
    e && e.WHf();
  };
  Ha.prototype.$Eg = function (e) {
    var f = this.La.Za;
    f && f.gMf(e);
  };
  Ha.prototype.zEg = function () {
    var e = this.La.Za;
    if (!e) return null;
    var f = e.qHc(!0);
    return f && e.Nr().bm(f.he) ? f.he : null;
  };
  Ha.prototype.AEg = function () {
    var e = this.La.Za;
    return e ? (e = e.qHc(!0)) && e.xc ? e.xc : -1 : -1;
  };
  Ha.prototype.vEg = function () {
    var e = this.c2a();
    return e ? (e = e.Op(!0)) ? e.ef.Fl.zMc : -1 : -1;
  };
  Ha.prototype.GEg = function (e) {
    var f = this.La.Za;
    if (!f) return null;
    e = f.Nr().bm(e);
    if (!e) return null;
    f = new Asc.DGf;
    e.jJf(f);
    return f;
  };
  Ha.prototype.YDg = function (e, f) {
    var Da = this.La.Za;
    if (!Da) return null;
    if (f) {
      var Ia = Da.fCb();
      if (Da.jf(AscCommon.A3, { ka: AscCommon.kia, dc: Ia, Ky: AscCommon.FU })) return null;
    }
    Da.Jg(AscDFH.eXd);
    f = Da.Nr().h5();
    f.iJf(e);
    e = f.vk();
    if (Ia) {
      f = 0;
      for (var Ha = Ia.length; f < Ha; ++f) {
        var Ra = Ia[f], Pa = Ra.kk();
        Pa ? Ra.d8(e, Pa.xc) : Ra.d8(e, 0);
      }
      Da.Ld();
      Da.Xn();
      Da.ju();
    }
    Da.rg();
  };
  Ha.prototype.hEg = function (e, f, Da) {
    var Ia = this.La.Za;
    if (Ia && (e = Ia.Nr().bm(e)) && !Ia.jf(AscCommon.A3, {
      ka: AscCommon.kia, dc: [e],
      Ky: AscCommon.FU
    })) {
      Ia.Jg(AscDFH.$Wd);
      var Ha = new CNumberingLvl;
      Ha.aQd(f);
      e.AX(Ha, Da);
      Ia.Ld();
      Ia.Xn();
      Ia.ju();
      Ia.rg();
    }
  };
  Ha.prototype.KSg = function (e) {
    !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.hYd), this.La.Za.hC(e, !0), this.La.Za.rg());
  };
  Ha.prototype.zMf = function (Da) {
    void 0 === f.wHc && null != this.La.VU && (f.wHc = e.getElementById(Da), f.wHc.onkeypress = function (e) {
      if (!1 === editor.La.hsa) return editor.La.hsa = !0, e = editor.La.VEa(e), editor.La.hsa = !1, e;
    }, f.wHc.onkeydown = function (e) {
      if (!1 === editor.La.hsa) return editor.La.hsa =
        !0, e = editor.La.fga(e), editor.La.hsa = !1, e;
    });
  };
  Ha.prototype.e2f = function (e) {
    this.PNc = e;
  };
  Ha.prototype.XXf = function () {
    return this.PNc;
  };
  Ha.prototype.Xxd = function (e) {
    if (this.XLd() || this.tKc()) e = !1;
    this.Oq = e;
    this.La.yCb();
    !0 === this.VAb && this.VEb(!1);
    return this.Oq;
  };
  Ha.prototype.Upd = function () {
    return this.Oq;
  };
  Ha.prototype.K5f = function () {
    this.Re('asc_onShowParaMarks', this.Upd());
  };
  Ha.prototype.f2f = function (e) {
    this.uKc = e;
    this.La.yCb();
    !0 === this.VAb && this.VEb(!1);
    return this.uKc;
  };
  Ha.prototype.YXf = function () {
    return this.uKc;
  };
  Ha.prototype.tSg = function (e) {
    !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.eYd), this.La.Za.tJ(e), this.sFf(e), this.La.Za.rg());
  };
  Ha.prototype.jEf = function (e) {
    !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.iYd), this.La.Za.$H(e), this.Jsg(e), this.La.Za.rg());
  };
  Ha.prototype.eEf = function (e) {
    !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.ZXd), this.La.Za.YH(e), this.qFf(e), this.La.Za.rg());
  };
  Ha.prototype.fEf = function (e) {
    !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.$Xd), this.La.Za.ZH(e), this.Esg(e), this.La.Za.rg());
  };
  Ha.prototype.NRg = function (e) {
    !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.VXd), this.La.Za.XH(e), this.La.Za.rg());
  };
  Ha.prototype.fSg = function (e, f, Da, Ia) {
    !1 === this.La.Za.jf(AscCommon.dT) && (!1 === e ? (this.La.Za.Jg(AscDFH.rYd), this.La.Za.Xg(new AscCommonWord.rM({ kh: AscCommonWord.J5b }))) : (this.La.Za.Jg(AscDFH.qYd), this.La.Za.Xg(new AscCommonWord.rM({
      kh: {
        r: f,
        wb: Da,
        Ya: Ia
      }
    }))), this.La.Za.rg());
  };
  Ha.prototype.j2f = function (e) {
    if (!1 === this.La.Za.jf(AscCommon.dT)) {
      this.La.Za.Jg(AscDFH.lYd);
      if (!0 === e.kf) this.La.Za.Xg(new AscCommonWord.rM({
        Aa: {
          kf: !0,
          r: 0, wb: 0, Ya: 0
        }, cb: void 0
      })); else {
        var f = new AscFormat.Cj;
        f.fill = new AscFormat.wI;
        f.fill.color = AscFormat.kMc(e, f.fill.color, 1);
        this.La.Za.Xg(new AscCommonWord.rM({ cb: f }));
      }
      this.lda();
      this.La.Za.rg();
    }
  };
  Ha.prototype.wSg = function (e, f, Da) {
    !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.gYd), !0 === Da && this.La.Za.Guf(!1), !1 === e ? this.La.Za.uH({ ua: Asc.xO }) : (e = new AscFormat.Cj, e.fill = new AscFormat.wI, e.fill.color = AscFormat.kMc(f, e.fill.color, 1), this.La.Za.uH({
      ua: Asc.hka,
      Aa: { r: f.lDb(), wb: f.kDb(), Ya: f.jDb() },
      cb: e
    })),
      this.La.Za.Guf(!0), this.La.Za.rg());
  };
  Ha.prototype.a2f = function (e, f) {
    !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.WXd), this.La.Za.vB({ Ba: e, vra: f }), this.La.Za.rg());
  };
  Ha.prototype.vSg = function (e) {
    var f = this.c2a();
    f && !1 === f.jf(re) && (f.Jg(AscDFH.dYd), f.xuf(e), f.rg(), f.TNc());
  };
  Ha.prototype.hkc = function (e, f, Da, Ia, Ha, Ra, Pa) {
    !1 === this.La.Za.jf(AscCommon.Uka) && (this.La.Za.Jg(AscDFH.rAf), f = AscFormat.qJd(e, f, Da, Ia, !0, null, Ha, Ra, Pa), Da = new AscCommonWord.V1(f.la.nb.fb, f.la.nb.gb, null, this.La.Cd, null, null), f.Ac(Da),
      Da.eK(f), this.La.Za.XP(Da), this.Re('asc_onAddSignature', e), this.La.Za.rg());
  };
  Ha.prototype.y4b = function () {
    return this.La.Za ? this.La.Za.Jbe() : [];
  };
  Ha.prototype.Whd = function (e) {
    return this.La.Za.U6d(e);
  };
  Ha.prototype.SHd = function (e) {
    return this.La.Za.nLf(e);
  };
  Ha.prototype.iIb = function () {
    this.La.Za.iIb();
  };
  Ha.prototype.PGb = function () {
    this.La.Za.PGb();
  };
  Ha.prototype.b2f = function (e) {
    !1 === this.La.Za.jf(re) && (this.La.Za.Jg(AscDFH.YXd), this.La.Za.vB({ Ra: e }), this.La.Za.rg());
  };
  Ha.prototype.$1f = function (e) {
    !1 === this.La.Za.jf(re) &&
    (this.La.Za.Jg(AscDFH.XXd), this.La.Za.vB({ Ce: e }), this.La.Za.rg());
  };
  Ha.prototype.oSg = function (e, f, Da, Ia) {
    this.La.Za.C$c({ Ba: e, Qa: f, Ra: Da, Xa: Ia });
  };
  Ha.prototype.WWf = function () {
  };
  Ha.prototype.eqf = function (e) {
    this.Re('asc_onVerticalAlign', e);
  };
  Ha.prototype.bOd = function (e) {
    this.Re('asc_onPrAlign', e);
  };
  Ha.prototype.YNd = function (e) {
    this.Re('asc_onListType', new AscCommon.BPe(e));
  };
  Ha.prototype.xFf = function (e) {
    e.cb && e.cb.fill && e.cb.fill.type === ch.TC && e.cb.fill.color ? this.Re('asc_onTextColor', AscCommon.FGb(e.cb.fill.color)) :
      void 0 != e.Aa && this.Re('asc_onTextColor', AscCommon.rPa(e.Aa.r, e.Aa.wb, e.Aa.Ya, e.Aa.kf));
  };
  Ha.prototype.yFf = function (e) {
    void 0 != e && this.Re('asc_onTextHighLight', new AscCommon.uL(e.r, e.wb, e.Ya));
  };
  Ha.prototype.cqf = function (e) {
    this.Re('asc_onTextSpacing', e);
  };
  Ha.prototype.Xpf = function (e) {
    this.Re('asc_onTextDStrikeout', e);
  };
  Ha.prototype.Wpf = function (e) {
    this.Re('asc_onTextCaps', e);
  };
  Ha.prototype.bqf = function (e) {
    this.Re('asc_onTextSmallCaps', e);
  };
  Ha.prototype.Zpf = function (e) {
    this.Re('asc_onTextPosition', e);
  };
  Ha.prototype.Ypf =
    function (e) {
      this.Re('asc_onTextLanguage', e.Jc);
    };
  Ha.prototype.aOd = function (e) {
    this.Re('asc_onParaStyleName', e);
  };
  Ha.prototype.$Nd = function (e) {
    !0 === e.Mr ? e.tg = AscCommonWord.NBd : void 0 === e.Mr && (e.tg = AscCommonWord.ySd);
    !0 === e.$r ? e.Ji = AscCommonWord.NBd : void 0 === e.$r && (e.Ji = AscCommonWord.ySd);
    this.Re('asc_onParaSpacingLine', new AscCommon.LNb(e));
  };
  Ha.prototype.sFf = function (e) {
    this.Re('asc_onPageBreak', e);
  };
  Ha.prototype.Jsg = function (e) {
    this.Re('asc_onWidowControl', e);
  };
  Ha.prototype.Esg = function (e) {
    this.Re('asc_onKeepNext',
      e);
  };
  Ha.prototype.qFf = function (e) {
    this.Re('asc_onKeepLines', e);
  };
  Ha.prototype.L5f = function () {
    this.Re('asc_onShowParaMarks');
  };
  Ha.prototype.M5f = function () {
    this.Re('asc_onSpaceBetweenPrg');
  };
  Ha.prototype.Rpf = function (e) {
    var f = this.aL.length;
    0 < f && this.aL[f - 1].ka == ae.bb ? this.aL[f - 1].ua = new Asc.p9a(e) : this.aL[this.aL.length] = new Jd(ae.bb, new Asc.p9a(e));
  };
  Ha.prototype.Qpf = function (e) {
    this.aL[this.aL.length] = new Jd(ae.Math, e);
  };
  Ha.prototype.yka = function () {
    editor.Re('asc_onEndAddShape');
    'crosshair' == this.La.Cd.wQa &&
    this.La.Cd.cib();
  };
  Ha.prototype.tuf = function (f) {
    if (this.La) {
      this.La.xsf = f;
      var Da = e.getElementById('id_main');
      if (Da) {
        var Ia = e.getElementById('id_horscrollpanel'), Ha = e.getElementById('id_panel_right');
        f ? (Da.style.display = 'none', Ia.style.display = 'none', Ha.style.display = 'none') : (Da.style.display = 'block', Ia.style.display = 'block', Ha.style.display = 'block');
      }
      f || this.La.AV();
    }
  };
  Ha.prototype.QPe = function (e) {
    this.La.Za.Cxe(e);
  };
  Ha.prototype.asc_SetMathProps = Ha.prototype.QPe;
  Ha.prototype.ZKg = function (e) {
    !1 === this.La.Za.jf(AscCommon.jka) &&
    (this.La.Za.Jg(AscDFH.RXd), e ? this.La.Za.Cuf(Asc.yta.usa) : this.La.Za.Cuf(Asc.yta.U6a), this.bHc = e, this.CLc(editor.bKd()), this.La.Za.rg());
  };
  Ha.prototype.bKd = function () {
    return this.bHc;
  };
  Ha.prototype.YKg = function (e, f) {
    !1 === this.La.Za.jf(AscCommon.jka) && (this.PR && this.La.ns && this.La.ns.vrf(), this.La.Za.Jg(AscDFH.SXd), this.bHc ? this.La.Za.Duf(e, f) : this.La.Za.Duf(f, e), this.La.Za.rg(), this.PR && this.La.ns && this.La.ns.Bsf());
  };
  Ha.prototype.mOg = function () {
    return AscCommon.V6a;
  };
  Ha.prototype.kOg = function () {
    return AscCommon.BIa;
  };
  Ha.prototype.nFg = function (e) {
    this.La.Za.SMf(e);
  };
  Ha.prototype.HEg = function () {
    return this.La.Za.ctf();
  };
  Ha.prototype.xEg = function () {
    var e = this.La.Za;
    return e ? e.HJf() : 0;
  };
  Ha.prototype.H5f = function (e) {
    this.Re('asc_onSectionProps', e);
  };
  Ha.prototype.asc_SetSectionProps = Ha.prototype.nFg;
  Ha.prototype.asc_GetSectionProps = Ha.prototype.HEg;
  Ha.prototype.asc_GetCurrentColumnWidth = Ha.prototype.xEg;
  Ha.prototype.hFg = function (e) {
    this.La.Za.OMf(e);
  };
  Ha.prototype.wEg = function () {
    return this.La.Za.cKf();
  };
  Ha.prototype.asc_SetColumnsProps =
    Ha.prototype.hFg;
  Ha.prototype.asc_GetColumnsProps = Ha.prototype.wEg;
  Ha.prototype.OEg = function () {
    return this.La.Za.HMc();
  };
  Ha.prototype.Qfg = function (e) {
    var f = e.gGa(), Da = this;
    if (f && (f = f.YJc()) && 'string' === typeof f.AOa()) {
      if (!gb) return;
      var Ia = AscCommon.LR, Ha = gb.Gka(f.AOa());
      f.qBb(Ha.Ha);
      if (Ia.WG(Ha, function () {
        this.hx(ge.oO, he.WG);
        Da.Qfg(e);
      }, null)) return;
    }
    return this.La.Za.zuf(e);
  };
  Ha.prototype.vFg = function (e) {
    e = new Asc.y2a;
    e.FK(Asc.Zfa.Af);
    return this.La.Za.zuf(e);
  };
  Ha.prototype.t5f = function (e) {
    this.Re('asc_onColumnsProps',
      e);
  };
  Ha.prototype.kFg = function (e, f) {
    this.La.Za.DMf(e, f);
  };
  Ha.prototype.BEg = function () {
    return this.La.Za.rQd();
  };
  Ha.prototype.XDg = function (e) {
    return this.La.Za.GBb(e);
  };
  Ha.prototype.XEg = function () {
    this.La.Za.VLf();
  };
  Ha.prototype.QEg = function (e) {
    this.La.Za.hKf(e);
  };
  Ha.prototype.UEg = function () {
    var e = this.La.Za;
    return e && !0 === e.FKf() ? !0 : !1;
  };
  Ha.prototype.asc_AddFootnote = Ha.prototype.XDg;
  Ha.prototype.asc_RemoveAllFootnotes = Ha.prototype.XEg;
  Ha.prototype.asc_GetFootnoteProps = Ha.prototype.BEg;
  Ha.prototype.asc_SetFootnoteProps =
    Ha.prototype.kFg;
  Ha.prototype.asc_GotoFootnote = Ha.prototype.QEg;
  Ha.prototype.asc_IsCursorInFootnote = Ha.prototype.UEg;
  Ha.prototype.Lqg = function () {
    !1 === this.La.Za.jf($d) && null === this.La.Za.VG(!1) && (this.La.Za.Jg(AscDFH.AKd), this.La.Za.Xg(new AscCommonWord.eGd(AscCommonWord.iSf)), this.La.Za.rg());
  };
  Ha.prototype.MRg = function () {
    var e = this.La.Za;
    !1 === e.jf($d) && null === e.VG(!1) && (this.La.Za.Jg(AscDFH.AKd), this.La.Za.Xg(new AscCommonWord.eGd(AscCommonWord.hSf)), this.La.Za.rg());
  };
  Ha.prototype.cHd = function (e) {
    var f =
      0, Da = 0, Ia = 0;
    'undefined' != typeof e && ('undefined' != typeof e.Ce && (f = e.Ce), 'undefined' != typeof e.Ba && (Da = e.Ba), 'undefined' != typeof e.Ra && (Ia = e.Ra));
    e = !1;
    var Ha = this.La.BK;
    Ha.WK != Da && (Ha.WK = Da, e = !0);
    Ha != f + Da && (Ha.hT = f + Da, e = !0);
    Ha.MT != Ia && (Ha.MT = Ia, e = !0);
    e && this.La.s8();
  };
  Ha.prototype.ntf = function (e, f) {
    this.La.BK.hT != e + f && (this.La.BK.hT = e + f, this.La.s8());
  };
  Ha.prototype.otf = function (e) {
    this.La.BK.WK != e && (this.La.BK.WK = e, this.La.s8());
  };
  Ha.prototype.ptf = function (e) {
    this.La.BK.MT != e && (this.La.BK.MT = e, this.La.s8());
  };
  Ha.prototype.uSg = function (e, f) {
    0 <= e ? !1 === this.La.Za.jf(Ab, { ka: AscCommon.Z0e }) && (this.La.Za.Jg(AscDFH.SWd), this.La.Za.rsf(e, f), this.La.Za.rg()) : !1 === this.La.Za.jf($d) && (this.La.Za.Jg(AscDFH.RWd), this.La.Za.rsf(e, f), this.La.Za.rg());
  };
  Ha.prototype.YRg = function (e) {
    !1 === this.La.Za.jf(Wc) && (this.La.Za.Jg(AscDFH.NXd), this.La.Za.PIf(e), this.La.Za.rg());
  };
  Ha.prototype.Swg = function (e) {
    !1 === this.La.Za.jf(Wc) && (this.La.Za.Jg(AscDFH.PXd), this.La.Za.RIf(e), this.La.Za.rg());
  };
  Ha.prototype.Twg = function (e) {
    !1 === this.La.Za.jf(Wc) &&
    (this.La.Za.Jg(AscDFH.OXd), this.La.Za.QIf(e), this.La.Za.rg());
  };
  Ha.prototype.Uwg = function (e) {
    !1 === this.La.Za.jf(Wc) && (this.La.Za.Jg(AscDFH.QXd), this.La.Za.SIf(e), this.La.Za.rg());
  };
  Ha.prototype.oFg = function (e) {
    if (!isNaN(e)) {
      var f = this.La.Za;
      f && !1 === f.jf() && (f.Jg(AscDFH.HXd), f.IMf(e), f.rg());
    }
  };
  Ha.prototype.mSc = function (e, f) {
    this.Re('asc_onDocSize', e, f);
  };
  Ha.prototype.CLc = function (e) {
    this.Re('asc_onPageOrient', e);
  };
  Ha.prototype.M1d = function (e) {
    !0 === e && (e.Ln = !0);
    this.aL[this.aL.length] = new Jd(ae.Vk, new ab(e));
  };
  Ha.prototype.i2f = function (e, f) {
    !1 === this.La.Za.jf(AscCommon.Uka) && (this.La.Za.Jg(AscDFH.TWd), this.La.Za.XS(e, f), this.La.Za.rg());
  };
  Ha.prototype.ZPf = function () {
    !1 === this.La.Za.jf(ie) && (this.La.Za.Jg(AscDFH.CYd), this.La.Za.PJ(!0), this.La.Za.rg());
  };
  Ha.prototype.$Pf = function () {
    !1 === this.La.Za.jf(ie) && (this.La.Za.Jg(AscDFH.DYd), this.La.Za.PJ(!1), this.La.Za.rg());
  };
  Ha.prototype.UPf = function () {
    !1 === this.La.Za.jf(ie) && (this.La.Za.Jg(AscDFH.AYd), this.La.Za.VM(!0), this.La.Za.rg());
  };
  Ha.prototype.VPf = function () {
    !1 ===
    this.La.Za.jf(ie) && (this.La.Za.Jg(AscDFH.BYd), this.La.Za.VM(!1), this.La.Za.rg());
  };
  Ha.prototype.P2f = function () {
    !1 === this.La.Za.jf(xf) && (this.La.Za.Jg(AscDFH.FYd), this.La.Za.tO(), this.La.Za.rg());
  };
  Ha.prototype.O2f = function () {
    !1 === this.La.Za.jf(xf) && (this.La.Za.Jg(AscDFH.EYd), this.La.Za.KM(), this.La.Za.rg());
  };
  Ha.prototype.Q2f = function () {
    !1 === this.La.Za.jf(xf) && (this.La.Za.Jg(AscDFH.DXd), this.La.Za.mN(), this.La.Za.rg());
  };
  Ha.prototype.o3f = function () {
    this.La.Za.MK(c_oAscTableSelectionType.hb);
  };
  Ha.prototype.n3f =
    function () {
      this.La.Za.MK(c_oAscTableSelectionType.Vr);
    };
  Ha.prototype.bFa = function () {
    this.La.Za.MK(c_oAscTableSelectionType.jc);
  };
  Ha.prototype.p3f = function () {
    this.La.Za.MK(c_oAscTableSelectionType.Table);
  };
  Ha.prototype.x3f = function () {
  };
  Ha.prototype.H6b = function () {
  };
  Ha.prototype.f4f = function () {
  };
  Ha.prototype.wHf = function () {
    return this.La.Za.nR();
  };
  Ha.prototype.xHf = function () {
    return this.La.Za.oR();
  };
  Ha.prototype.R0a = function () {
    !1 === this.La.Za.jf(ie) && (this.La.Za.Jg(AscDFH.rXd), this.La.Za.rO(), this.La.Za.rg());
  };
  Ha.prototype.$Mf = function (e, f) {
    !1 === this.La.Za.jf(ie) && (this.La.Za.Jg(AscDFH.zYd), this.La.Za.uR(e, f), this.La.Za.rg());
  };
  Ha.prototype.PQf = function (e) {
    var f = this.La.Za;
    if (f) {
      var Da = !1;
      !1 === f.jf(ie) && (f.Jg(AscDFH.EKd), Da = f.UV(e), f.rg());
      return Da;
    }
  };
  Ha.prototype.T6f = function () {
  };
  Ha.prototype.U1f = function () {
  };
  Ha.prototype.h4f = function () {
  };
  Ha.prototype.g4f = function () {
  };
  Ha.prototype.Y3f = function () {
  };
  Ha.prototype.d4f = function () {
  };
  Ha.prototype.X3f = function () {
  };
  Ha.prototype.e4f = function () {
  };
  Ha.prototype.c4f =
    function () {
    };
  Ha.prototype.Z5f = function (e) {
    !1 === this.La.Za.jf(ie) && (e.Np && (e.Np.Ba && e.Np.Ba.Aa && (e.Np.Ba.cb = AscFormat.Bca(e.Np.Ba.Aa, 1)), e.Np.Qa && e.Np.Qa.Aa && (e.Np.Qa.cb = AscFormat.Bca(e.Np.Qa.Aa, 1)), e.Np.Ra && e.Np.Ra.Aa && (e.Np.Ra.cb = AscFormat.Bca(e.Np.Ra.Aa, 1)), e.Np.Xa && e.Np.Xa.Aa && (e.Np.Xa.cb = AscFormat.Bca(e.Np.Xa.Aa, 1)), e.Np.Tj && e.Np.Tj.Aa && (e.Np.Tj.cb = AscFormat.Bca(e.Np.Tj.Aa, 1)), e.Np.nk && e.Np.nk.Aa && (e.Np.nk.cb = AscFormat.Bca(e.Np.nk.Aa, 1))), e.$s && e.$s.Aa && (e.$s.cb = AscFormat.Bca(e.$s.Aa, 1)), this.La.Za.Jg(AscDFH.WWd),
      this.La.Za.GR(e), this.La.Za.rg());
  };
  Ha.prototype.o5f = function () {
    this.Re('asc_onAddTable');
  };
  Ha.prototype.q5f = function (e) {
    this.Re('asc_onAlignCell', e);
  };
  Ha.prototype.FLc = function (e) {
    if (e.$s && e.$s.cb) {
      var f = this.La.Za;
      e.$s.cb.check(f.zi(), f.Jl());
      f = e.$s.cb.vt();
      e.$s.Aa = new AscCommonWord.ixa(f.R, f.G, f.B, !1);
    }
    this.aL[this.aL.length] = new Jd(ae.Table, new Asc.aMc(e));
  };
  Ha.prototype.O5f = function (e) {
    this.Re('asc_onTblWrapStyleChanged', e);
  };
  Ha.prototype.N5f = function (e) {
    this.Re('asc_onTblAlignChanged', e);
  };
  Ha.prototype.qHf =
    function () {
      this.dcb = !0;
      this.Aqb();
    };
  Ha.prototype.sHf = function (e) {
    this.jcb = !0;
    this.G1 = e;
    this.Aqb();
  };
  Ha.prototype.d3d = function () {
    this.Aqb();
  };
  Ha.prototype.Vtg = function (e) {
    this.AOd(AscCommon.rV(e));
  };
  Ha.prototype.ric = function (e) {
    if (this.dcb || this.jcb) this.AOd(e[0]); else if (this.bs) {
      var f = this;
      this.bs.EPa(e, function () {
          if (!1 === this.La.Za.jf($d)) {
            for (var Da = [], Ia = 0; Ia < e.length; ++Ia) {
              var Ha = f.bs.ZN(e[Ia], 1);
              Ha && Da.push(Ha);
            }
            Da.length && (f.La.Za.Jg(), f.La.Za.tAa(), f.La.Za.TR(Da), f.La.Za.uAa(!0), f.La.Za.rg());
          }
        },
        []);
    }
  };
  Ha.prototype.AOd = function (e, f, Da) {
    if (eg.Z$a(e)) this.TDd(e, f); else {
      var Ia = this;
      AscCommon.J8(this, [e], function (e) {
        e && e[0] && Ia.TDd(e[0].url, f);
      }, !1, void 0, Da);
    }
  };
  Ha.prototype.TDd = function (e, f) {
    var Da = this.bs.ZN(e, 1);
    if (null != Da) {
      var Ia = this.La.Za.upa();
      e = Math.max(1, Ia.W);
      Ia = Math.max(1, Ia.Vb);
      if (null != Da.Image) {
        Ia = Math.max(Da.Image.width * AscCommon.eI, 1);
        var Ha = Math.max(Da.Image.height * AscCommon.eI, 1);
        e = Math.max(5, Math.min(e, Ia));
        Ia = Math.max(5, Math.min(e * Ha / Ia));
      }
      Da = Da.src;
      this.jcb ? (e = new Asc.r3a, e.fill =
        new Cc, e.fill.type = ch.tu, e.fill.fill = new vh, e.fill.fill.jOa(Da), null !== this.G1 && void 0 !== this.G1 && e.fill.fill.hfa(this.G1), this.xHc(new Td({ Zm: e })), this.jcb = !1, this.G1 = null) : this.dcb ? (e = new Td, e.yn = Da, this.xHc(e), this.dcb = !1) : !1 === this.La.Za.jf($d) && ((Ha = eg.E8(Da)) && (Da = Ha), this.La.Za.Jg(AscDFH.LWd), void 0 === f || void 0 === f.mK || 0 == f.mK ? this.La.Za.WN(e, Ia, Da) : this.La.Za.WN(e, Ia, Da, null, !0), this.La.Za.rg());
    } else this.fG(ge.Kr, he.ZN), this.p1a = function (e) {
      var Da = this.La.Za.upa(), Ia = Math.max(1, Da.W);
      Da =
        Math.max(1, Da.Vb);
      if (null != e.Image) {
        Da = Math.max(e.Image.width * AscCommon.eI, 1);
        var Ha = Math.max(e.Image.height * AscCommon.eI, 1);
        Ia = Math.max(5, Math.min(Ia, Da));
        Da = Math.max(5, Math.min(Ia * Ha / Da));
      }
      e = e.src;
      this.jcb ? (Ia = new Asc.r3a, Ia.fill = new Cc, Ia.fill.type = ch.tu, Ia.fill.fill = new vh, Ia.fill.fill.jOa(e), null !== this.G1 && void 0 !== this.G1 && Ia.fill.fill.hfa(this.G1), this.G1 = null, this.xHc(new Td({ Zm: Ia })), this.jcb = !1) : this.dcb ? (Ia = new Td, Ia.yn = e, this.xHc(Ia), this.dcb = !1) : !1 === this.La.Za.jf($d) && ((Ha = eg.E8(e)) &&
      (e = Ha), this.La.Za.Jg(AscDFH.MWd), void 0 === f || void 0 === f.mK || 0 == f.mK ? this.La.Za.WN(Ia, Da, e) : this.La.Za.WN(Ia, Da, e, null, !0), this.La.Za.rg());
      this.hx(ge.Kr, he.ZN);
      this.p1a = null;
    };
  };
  Ha.prototype.Utg = function (e, f, Da, Ia, Ha, Ra) {
    var Pa = this.La.Za, Za = Mf.Bk;
    Mf.ZE = 0;
    Mf.Bk = 1;
    Pa.MP(Mf, Da, Ia, f);
    Pa.pY(Mf, Da, Ia, f);
    Pa.BT(Mf, Da, Ia, f);
    Mf.Bk = Za;
    !1 === Pa.jf($d) && (f = new Asc.Y5d, f.nDa(Asc.JX.vd), f.H8(!1), f.xM(Da), Da = new Asc.Z5d, Da.nDa(Asc.SZ.vd), Da.H8(!1), Da.xM(Ia), Ia = new Td, Ia.OTd(1), Ia.Pid(f), Ia.Qid(Da), Pa.Jg(AscDFH.KWd),
      Pa.Zhb(), Pa.WN(Ha, Ra, e), Pa.NK(Ia), Pa.Klb(!0), Pa.rg());
  };
  Ha.prototype.xid = function () {
    return this.La && this.La.Za ? this.La.Za.ZJf() : 0;
  };
  Ha.prototype.d2f = function (e, f) {
    this.La && this.La.Za && (AscFormat.lb(f) || (f = Asc.FKa.Slide), this.La.Za.KLf(e, f));
  };
  Ha.prototype.JIf = function (e) {
    AscFormat.lb(e) || (e = Asc.FKa.xw);
    this.La.Za.HIf(e);
  };
  Ha.prototype.KIf = function (e) {
    AscFormat.lb(e) || (e = Asc.FKa.xw);
    this.La.Za.IIf(e);
  };
  Ha.prototype.xHc = function (e) {
    if (AscCommon.so(e) && (!e.pR || e.pR.type !== Asc.Fk.r4 || AscFormat.Nrf(this.La.Za.oc,
      this))) if (AscFormat.lb(e.vra)) switch (e.vra) {
      case 0:
        this.La.Za.oc.E9a();
        break;
      case 1:
        this.La.Za.oc.D9a();
        break;
      case 2:
        this.La.Za.oc.keb();
        break;
      case 3:
        this.La.Za.oc.C9a();
    } else {
      var Da = [];
      var Ia = this.La.Za.oc.dd, Ha;
      for (Ha = 0; Ha < Ia.length; ++Ha) {
        var Ra = Ia[Ha].parent.KP();
        AscFormat.oJc(Da, Ra);
      }
      Da = { ka: AscCommon.kia, dc: Da, Ky: $d };
      if (1 === e.Cba || -1 === e.Cba) 0 == this.La.Za.jf(AscCommon.SFa, Da) && (this.La.Za.Jg(AscDFH.pXd), 1 === e.Cba ? this.La.Za.oc.tPg() : this.La.Za.oc.qVg(), this.La.Za.rg()); else if (!1 === this.La.Za.jf(AscCommon.hgb)) {
        e.Zm &&
        (e.yn = '');
        var Pa = Da = null, Za = '';
        AscCommon.gEb(e.yn) ? e.Zm && e.Zm.fill && e.Zm.fill.fill && !AscCommon.gEb(e.Zm.fill.fill.url) && (eg.E8(e.Zm.fill.fill.url) || (Da = e.Zm.fill.fill.url, Pa = function (f) {
          Za = e.Zm.fill.fill.url = f;
        }), Za = e.Zm.fill.fill.url) : (eg.E8(e.yn) || (Da = e.yn, Pa = function (f) {
          Za = e.yn = f;
        }), Za = e.yn);
        var Va = this;
        if (AscCommon.gEb(Za)) {
          e.yn = null;
          if (!this.TEa || this.kka) {
            if (this.TEa || this.kka || !this.v1a ? (this.La.Za.Jg(AscDFH.Iqd), this.La.Za.NK(e), this.La.Za.rg()) : (-1 !== this.ECa ? sb.mBe() : this.La.Za.Cca(AscDFH.Iqd),
              this.La.Za.NK(e), this.v1a = !1, this.ECa = -1), this.kka && (this.kka = !1, Da = sb.Sm[sb.Ta])) this.ECa = Da.xd.length;
          } else if (Da = !1, -1 !== this.ECa ? sb.mBe() : (Da = !0, this.La.Za.Cca(AscDFH.Iqd)), this.La.Za.NK(e), Da && (Da = sb.Sm[sb.Ta])) this.ECa = Da.xd.length;
          this.v1a = !1;
        } else {
          var Ab = function () {
            null != Va.bs.ZN(Za, 1) ? (Va.La.Za.Jg(AscDFH.UWd), Va.La.Za.NK(e), Va.La.Za.rg()) : Va.p1a = function () {
              Va.La.Za.Jg(AscDFH.VWd);
              Va.La.Za.NK(e);
              Va.La.Za.rg();
            };
          };
          Da ? f.AscDesktopEditor ? (Da = f.AscDesktopEditor.LocalFileGetImageUrl(Za), Da = eg.t7(Da),
            Pa(Da), Ab()) : AscCommon.J8(this, [Za], function (e) {
            e && e[0] && (Pa(e[0].url), Ab());
          }, !1) : Ab();
        }
      }
    }
  };
  Ha.prototype.b4f = function () {
  };
  Ha.prototype.Z3f = function () {
  };
  Ha.prototype.i4f = function () {
  };
  Ha.prototype.dVf = function () {
  };
  Ha.prototype.$3f = function () {
  };
  Ha.prototype.a4f = function () {
  };
  Ha.prototype.TXf = function () {
    for (var e = 0; e < this.aL.length; ++e) if (this.aL[e].ka == ae.Image && this.aL[e].ua && this.aL[e].ua.yn) return this.aL[e].ua.q9a(this);
    return null;
  };
  Ha.prototype.Cob = function (e) {
    var f = '';
    if (null != e.fill && null != e.fill.fill &&
      e.fill.type == ch.tu) {
      f = e.fill.fill.XNb();
      var Da = e.fill.fill.Bid();
      null != Da && 0 <= Da && Da < AscCommon.HEa.length && (f = AscCommon.HEa[Da]);
    }
    if ('' != f) {
      Da = this.bs.ZN(f, 1);
      var Ia = eg.E8(f);
      Ia && e.fill.fill.jOa(Ia);
      null != Da ? (this.La.Za.Cob(e), this.La.Cd.YRa(f)) : (this.fG(ge.Kr, he.ZN), this.p1a = function () {
        this.La.Za.Cob(e);
        this.La.Cd.YRa(f);
        this.hx(ge.Kr, he.ZN);
        this.p1a = null;
      });
    } else this.La.Za.Cob(e);
  };
  Ha.prototype.n5f = function () {
    this.Re('asc_onAddImage');
  };
  Ha.prototype.vFc = function (e) {
    this.aL[this.aL.length] = new Jd(ae.Image,
      new Td(e));
  };
  Ha.prototype.YUg = function (e) {
    this.Re('asc_onImgWrapStyleChanged', e);
  };
  Ha.prototype.aid = function (e, f, Da, Ia, Ha, Ra, Pa) {
    null != this.bs.ZN(AscCommon.rV(e), 1) && (this.La.Za.Jg(AscDFH.lRb), this.La.Za.WP(Ia, Ha, Ra, Pa, e, f, Da), this.La.Za.rg());
  };
  Ha.prototype.fid = function (e, f, Da, Ia, Ha) {
    e && (this.La.Za.Jg(AscDFH.lRb), this.La.Za.Y$d(e, Da, f, Ia, Ha), this.La.Za.Ld(), this.La.Za.Ge(), this.La.Za.rg());
  };
  Ha.prototype.ejd = function () {
    this.La.Za.oc.Q6b();
  };
  zb.prototype.BO = function () {
    return this.ka;
  };
  zb.prototype.Xxa =
    function () {
      return this.RK;
    };
  zb.prototype.Yxa = function () {
    return this.SK;
  };
  zb.prototype.LOg = function () {
    return this.Le;
  };
  zb.prototype.aQg = function () {
    return this.Vk;
  };
  Ha.prototype.LDa = function (e) {
    this.Re('asc_onContextMenu', new zb(e));
  };
  Ha.prototype.KZb = function () {
    this.Re('asc_onMouseMoveStart');
  };
  Ha.prototype.JZb = function () {
    this.Re('asc_onMouseMoveEnd');
  };
  Ha.prototype.pla = function (e) {
    this.Re('asc_onMouseMove', e);
  };
  Ha.prototype.J5f = function (e, f, Da, Ia) {
    this.Re('asc_onShowForeignCursorLabel', e, f, Da, new AscCommon.uL(Ia.r,
      Ia.wb, Ia.Ya, 255));
  };
  Ha.prototype.XNd = function (e) {
    this.Re('asc_onHideForeignCursorLabel', e);
  };
  Ha.prototype.XSf = function () {
    return !0 === this.La.Za.JF(!0) ? this.La.Za.wq(!0) : !1;
  };
  Ha.prototype.hQf = function (e) {
    var f = this.Fqg(e);
    null !== e.Text && void 0 !== e.Text ? AscFonts.ms.V9a(e.Text, this, function () {
      this.Dqg(e, f);
    }) : this.Dqg(e, f);
  };
  Ha.prototype.Fqg = function (e) {
    var f = e.D5b(), Da = null;
    if (f) {
      var Ia = this.La.Za.GB;
      Da = Ia.dde(f);
      var Ha = Ia.A9(Da);
      if (Ha && Ha[0].pq() === f) e.ERc(null), e.YKc(Da), Da = null; else {
        if (Ha) {
          for (f = 1; Ia.A9(Da +
            "_" + f);) f++;
          Da += '_' + f;
        }
        e.YKc(Da);
      }
    }
    return Da;
  };
  Ha.prototype.Dqg = function (e, f) {
    (f ? this.La.Za.jf($d, {
      ka: AscCommon.eBa,
      Element: e.D5b(),
      Ky: $d
    }) : this.La.Za.jf($d)) || (this.La.Za.Jg(AscDFH.IWd), f && e.D5b() && e.D5b().mrf(f), this.La.Za.zM(e), this.La.Za.rg());
  };
  Ha.prototype.lTf = function (e) {
    if (e && e.B1b()) {
      var f = this.Fqg(e);
      null !== e.Text && void 0 !== e.Text ? AscFonts.ms.V9a(e.Text, this, function () {
        this.Eqg(e, f);
      }) : this.Eqg(e, f);
    }
  };
  Ha.prototype.Eqg = function (e, f) {
    (f ? this.La.Za.jf($d, { ka: AscCommon.eBa, Element: e.D5b(), Ky: $d }) :
      this.La.Za.jf($d)) || (this.La.Za.Jg(AscDFH.ZWd), f && e.D5b() && e.D5b().mrf(f), this.La.Za.FQ(e), this.La.Za.rg());
  };
  Ha.prototype.V2f = function (e) {
    e && e.B1b() && !1 === this.La.Za.jf($d) && (this.La.Za.Jg(AscDFH.BXd), this.La.Za.HQ(e), this.La.Za.rg());
  };
  Ha.prototype.FEg = function () {
    return this.La && this.La.Za ? this.La.Za.PJf() : [];
  };
  Ha.prototype.oSc = function (e) {
    this.aL[this.aL.length] = new Jd(ae.Ai, new Asc.ffb(e));
  };
  Ha.prototype.n4a = function (e) {
    this.Re('asc_onHyperlinkClick', e);
  };
  Ha.prototype.VNd = function (e) {
    this.Re('asc_onCanAddHyperlink',
      e);
  };
  Ha.prototype.lSc = function () {
    this.Re('asc_onDialogAddHyperlink');
  };
  Ha.prototype.lSc = function () {
    this.Re('asc_onDialogAddHyperlink');
  };
  Ha.prototype.P1d = function (e, f, Da, Ia, Ha) {
    this.aL[this.aL.length] = new Jd(ae.GGd, new AscCommon.RHd(e, f, Da, Ia, Ha));
  };
  Ha.prototype.Upf = function () {
    this.Re('asc_onSpellCheckVariantsFound');
  };
  Ha.prototype.QXe = function (e, f) {
    var Da = Qf.Zf(f.BV);
    null != Da && !1 === this.La.Za.jf(Ab, {
      ka: AscCommon.eBa,
      Element: Da,
      Ky: $d
    }) && (this.La.Za.Jg(AscDFH.HKd), Da.guf(e, f.Element), Da.wx(!0), this.La.Za.Ld(),
      this.La.Za.ju(), this.La.Za.rg());
  };
  Ha.prototype.KVe = function (e, f) {
    !1 === f ? (f = Qf.Zf(e.BV), null != f && f.jtf(e.Element)) : (f = editor.La.Za, f.aO.JBb(e.zm), f.yb.VD(), f.yb.HG());
  };
  Ha.prototype.hOc = function (e) {
    var f = this.La.Za;
    f && !0 !== f.aO.qEd(e) && (f.aO.JBb(e), f.yb.VD(), f.yb.HG(), delete f.aO.Es[e]);
  };
  Ha.prototype.fId = function () {
    f.AscDesktopEditor && f.AscDesktopEditor.SpellCheck('{"type":"clear"}');
  };
  Ha.prototype.nYe = function (e) {
    !1 === this.La.Za.jf(AscCommon.jka) && (this.La.Za.Jg(AscDFH.IKd), this.La.Za.kxe(e), this.La.Za.rg());
  };
  Ha.prototype.pRf = function () {
    return editor.La.Za.iFd();
  };
  Ha.prototype.$Hd = function () {
    return void 0 !== f.asc_current_keyboard_layout ? f.asc_current_keyboard_layout : -1;
  };
  Ha.prototype.CRf = function (e) {
    editor.La.Za && (editor.La.Za.aO.Ka = e, editor.La.Cd.VD(), editor.La.Cd.HG());
  };
  Va.prototype.Zha = function () {
    return this.AW;
  };
  Va.prototype.R0b = function (e) {
    this.AW = e ? e.slice(0, Asc.Vkd) : e;
  };
  Va.prototype.F4b = function () {
    return this.hX;
  };
  Va.prototype.I4b = function (e) {
    this.hX = e;
  };
  Va.prototype.UNb = function () {
    return this.G8;
  };
  Va.prototype.elc =
    function (e) {
      this.G8 = e;
    };
  Va.prototype.PFa = function () {
    return this.RP;
  };
  Va.prototype.J4b = function (e) {
    this.RP = e;
    this.Oqa = 'Teamlab';
  };
  Va.prototype.vid = function () {
    return this.Oqa;
  };
  Va.prototype.NTd = function (e) {
    this.Oqa = e;
  };
  Va.prototype.Hxa = function () {
    return this.QM;
  };
  Va.prototype.S0b = function (e) {
    this.QM = e;
    this.Nqa = this.dgg(this.QM);
  };
  Va.prototype.rRf = function () {
    return this.Nqa;
  };
  Va.prototype.$Hg = function (e) {
    this.Nqa = e;
  };
  Va.prototype.C4b = function () {
    return this.yR;
  };
  Va.prototype.XIc = function (e) {
    this.yR = e;
  };
  Va.prototype.dAb =
    function () {
      return this.P5;
    };
  Va.prototype.H4b = function (e) {
    this.P5 = e;
  };
  Va.prototype.s3a = function () {
    return this.rfa.toString(16).padStart(8, '0');
  };
  Va.prototype.$kc = function (e) {
    this.rfa = parseInt(e, 16);
  };
  Va.prototype.AOc = function (e) {
    return this.eO[e];
  };
  Va.prototype.x4b = function (e) {
    this.eO.push(e);
  };
  Va.prototype.zOc = function () {
    return this.eO.length;
  };
  Va.prototype.G4b = function (e) {
    this.Zdf = e;
  };
  Va.prototype.kib = function () {
    return this.Zdf;
  };
  Va.prototype.dgg = function (e) {
    var f = '';
    e && e.split(' ').forEach(function (e) {
      0 <
      e.length && (f += e[0]);
    });
    return f;
  };
  Ha.prototype.CZe = function (e) {
    null != this.La.Za && this.La.Za.Zxe(e);
  };
  Ha.prototype.Did = function () {
    null != this.La.Za && (this.La.Za.kfe(), editor.M_a());
  };
  Ha.prototype.PNb = function () {
  };
  Ha.prototype.PXe = function (e) {
    var f = this.La.Za;
    f && !1 === f.jf(Ab, { ka: AscCommon.tUd, Ja: e }, !1, f.TSa()) && (f.Jg(AscDFH.xXd), f.uha(e, !0, !0), f.rg());
  };
  Ha.prototype.ZPe = function (e, f) {
    var Da = this.La.Za;
    if (Da && !1 === Da.jf(Ab, { ka: AscCommon.tUd, Ja: e }, !1, Da.TSa())) {
      var Ia = new AscCommon.zUc;
      Ia.qNc(f);
      Da.Jg(AscDFH.YWd);
      Da.X$d(e, Ia);
      Da.rg();
      this.kSc(e, Ia);
    }
  };
  Ha.prototype.Uid = function (e) {
    null != this.La.Za && this.La.Za.xKb(e, !0);
  };
  Ha.prototype.bjd = function (e) {
    e instanceof Array ? this.La.Za.gSd(e) : this.La.Za.gSd([e]);
  };
  Ha.prototype.qxf = function () {
    return this.La.Za.$A();
  };
  Ha.prototype.X2b = function (e) {
    this.Re('asc_onRemoveComment', e);
  };
  Ha.prototype.aPa = function (e, f) {
    f = new Va(f);
    this.Re('asc_onAddComment', e, f);
  };
  Ha.prototype.T6b = function (e, f, Da) {
    this.Re('asc_onShowComment', e, f, Da);
  };
  Ha.prototype.M_a = function () {
    this.Re('asc_onHideComment');
  };
  Ha.prototype.cOd = function (e, f, Da) {
    this.Re('asc_onUpdateCommentPosition', [e], f, Da);
  };
  Ha.prototype.kSc = function (e, f) {
    f = new Va(f);
    this.Re('asc_onChangeCommentData', e, f);
  };
  Ha.prototype.N1d = function (e, f) {
    this.Re('asc_onLockComment', e, f);
  };
  Ha.prototype.Q1d = function (e) {
    this.Re('asc_onUnLockComment', e);
  };
  Ha.prototype.B5f = function () {
    this.Re('asc_onLockHeaderFooters');
  };
  Ha.prototype.z5f = function () {
    this.Re('asc_onLockDocumentProps');
  };
  Ha.prototype.S5f = function () {
    this.Re('asc_onUnLockHeaderFooters');
  };
  Ha.prototype.Q5f =
    function () {
      this.Re('asc_onUnLockDocumentProps');
    };
  Ha.prototype.Kpf = function () {
    !0 === AscCommon.Rd.YA || !0 === this.La.Za.ZSa() && !0 === this.La.Za.OPa.KQc || this.Re('asc_onCollaborativeChanges');
  };
  Ha.prototype.A5f = function () {
    this.Re('asc_onLockDocumentSchema');
  };
  Ha.prototype.R5f = function () {
    this.Re('asc_onUnLockDocumentSchema');
  };
  Ha.prototype.b7f = function () {
    this.La.d7f();
  };
  Ha.prototype.c7f = function () {
    this.La.e7f();
  };
  Ha.prototype.irf = function () {
    this.T4 ? this.La.QDd() : this.PFc = AscCommon.UOb.pxa;
  };
  Ha.prototype.jrf = function () {
    this.T4 ?
      this.La.FSc() : this.PFc = AscCommon.UOb.bCb;
  };
  Ha.prototype.hrf = function () {
    this.T4 ? (this.La.W3a = 0, this.La.k_b(0, this.La.sn)) : this.PFc = AscCommon.UOb.HPd;
  };
  Ha.prototype.a7f = function () {
    this.zoom(100);
  };
  Ha.prototype.zoom = function (e) {
    var f = this.La.sn;
    this.La.sn = e;
    this.La.W3a = 0;
    this.La.k_b(0, f);
  };
  Ha.prototype.wLa = function (e) {
    this.La.uX(e);
  };
  Ha.prototype.M6e = function () {
    return this.La.Cd.mh;
  };
  Ha.prototype.P6e = function () {
    return this.La.Cd.By;
  };
  Ha.prototype.eOd = function (e, f) {
    this.Re('asc_onZoomChange', e, f);
  };
  Ha.prototype.dOd =
    function (e) {
      this.Re('asc_onCountPages', e);
    };
  Ha.prototype.U6b = function (e) {
    this.Re('asc_onCurrentPage', e);
  };
  Ha.prototype.b7 = function (e, f) {
    this.T4 ? (this.La && this.La.hsa != e && (this.La.hsa = e, this.La.hsa && null != this.La.Vyg && this.La.Vyg.focus(), this.Re('asc_onEnableKeyEventsChanged', e)), !0 !== f && AscCommon.rn && AscCommon.rn.vof(e)) : this.OFc = e;
  };
  Ha.prototype.pwa = function (e) {
    var f = !1;
    this.La.hsa && (f = !0);
    f && e && this.La.Xuf && (f = !1);
    return f;
  };
  Ha.prototype.fjd = function () {
    if (this.ejb) this.fG(ge.Kr, he.WG); else if (this.FOa) this.fG(ge.oO,
      he.WG); else if (this.fG(ge.Kr, he.S2a), void 0 === this.kOa) {
      var e = this.ZNa;
      e.ka = he.S2a;
      e.VZc = this.m5.NY.length;
      e.KGb = 0;
      var f = this.La.Za, Da = 0;
      if (void 0 !== f && null != f) for (var Ia in f.wX) {
        if (this.Eq.XNa) {
          var Ha = f.wX[Ia];
          eg.FHd(Ha, this.mgb + 'media/' + Ha);
        }
        ++Da;
      }
      e.MMc = Da;
      e.B_b = 0;
    }
  };
  Ha.prototype.O5a = function () {
    if (!0 !== f.NATIVE_EDITOR_ENJINE || this.ikc('asc_onInitEditorStyles')) {
      var e = new AscCommonWord.Q7f, Da = this.La.Za;
      if (Da) {
        var Ia = Da.qq(), Ha = Da.Zc.Oq;
        !0 === Ia && Da.bT(!1);
        !0 === Ha && Da.Euf(!1, !1);
        e.O5a(this, null == this.NIb ?
          this.La.Za.jm().lf : this.VKf);
        !0 === Ia && Da.bT(!0);
        !0 === Ha && Da.Euf(!0, !1);
      }
    }
  };
  Ha.prototype.hId = function () {
    this.ejb ? this.hx(ge.Kr, he.WG) : this.FOa ? this.hx(ge.oO, he.WG) : this.hx(ge.Kr, he.S2a);
    if (void 0 !== this.kOa) this.kOa(), this.kOa = void 0; else if (this.nfb = 0, this.ejb) {
      var e = 0, f;
      for (f in this.FCc) ++e;
      0 < e && (this.nfb = 2, this.fG(ge.Kr, he.ZN));
      this.bs.gka = !1;
      this.bs.msa(this.FCc);
      this.bs.gka = !0;
    } else if (this.FOa) {
      e = 0;
      for (f in this.MRc) ++e;
      0 < e && (this.nfb = 2, this.fG(ge.oO, he.ZN));
      this.bs.msa(this.MRc);
    } else {
      this.O5a();
      null != this.La.Za && (this.La.Cd.F8b(), this.Knf(this.La.Za.Dd), this.Re('asc_onUpdateChartStyles'));
      var Da = this.La.Za;
      null == Da && (Da = this.La.Cd.ZY);
      e = 0;
      for (f in Da.wX) ++e;
      if (!this.WLd) {
        var Ia = AscCommon.HEa.length;
        for (f = 0; f < Ia; f++) Da.wX[e + f] = AscCommon.HEa[f];
        this.ZNa && !this.bs.gka && (this.ZNa.MMc += Ia);
      }
      0 < e && (this.nfb = 1, this.fG(ge.Kr, he.msa));
      this.bs.Ixa = !0;
      this.bs.msa(Da.wX);
    }
  };
  Ha.prototype.cvg = function () {
    var e = new CFontsCharMap;
    e.$Xg();
    this.La.Za.dV(e);
    return e.JWg();
  };
  Ha.prototype.O1d = function (e, f) {
    this.SSd =
      { mRa: e, zbg: f };
    this.Re('asc_onSendThemeColors', e, f);
  };
  Ha.prototype.Yhd = function () {
    if (null == this.La.Za) return '';
    var e = this.La.Za.Dd;
    return (e = e && e.af && e.af.SA) && 'string' === typeof e.name ? e.name : '';
  };
  Ha.prototype.pHf = function (e) {
    if (null != this.La.Za && null != this.La.Za.oc) {
      var f = this.La.Za.Dd, Da = AscCommon.q1b(e);
      Da || (Da = f.NJd(e));
      Da && !1 === this.La.Za.jf(AscCommon.cPc) && (this.La.Za.Jg(AscDFH.XWd), f.Bmc(Da), this.La.Cd.F8b(), this.Arb.Umc(), this.MDa.clear(), this.Re('asc_onUpdateChartStyles'), this.La.Za.Ld(), this.La.Za.rg(),
        this.La.Cd.VD(), this.La.AV(), this.La.Cd.F8b(), this.La.Za.Ge());
    }
  };
  Ha.prototype.gjd = function () {
    this.bs.Ixa = !1;
    var e = this.ejb;
    null != this.La.Cd.ZY ? (1 == this.nfb ? this.hx(ge.Kr, he.msa) : 2 == this.nfb && (this.ejb ? this.hx(ge.Kr, he.ZN) : this.hx(ge.oO, he.ZN)), this.nfb = 0, this.La.Cd.eke(), this.NIb = null, this.IJ = !0, !1 === this.ejb && this.pRc(), this.La.ktf(), this.iy && this.EVa(!0)) : (1 == this.nfb ? this.hx(ge.Kr, he.msa) : 2 == this.nfb && (e ? this.hx(ge.Kr, he.ZN) : this.hx(ge.oO, he.ZN)), this.nfb = 0, !1 === this.ejb && !1 === this.FOa && !1 === this.gCf ?
      (this.yue = !0, this.Uzb()) : this.ejb ? (this.ejb = !1, this.FCc = null, this.ECc(), this.ECc = null, this.kgb()) : this.FOa ? (this.FOa = !1, this.MRc = null, this.A1f(), !1 === this.IJ && (this.IJ = !0, this.pRc())) : this.gCf && (this.gCf = !1, this.O_d = null, this.bs.gka || this.Nbg()));
  };
  Ha.prototype.Uzb = function () {
    if (!this.nCa && this.yue && this.ANc && this.La && this.La.Za) {
      var e = !1;
      if (0 == this.DocumentType) this.La.Za.Cie(); else if (1 == this.DocumentType) this.La.Za.Q$f(); else if (this.NIb) {
        var f = this.La.Za;
        if (this.HQc) {
          if (AscCommon.AE && (AscCommon.AE.se(),
            !AscCommon.AE.gWb)) return AscCommon.AE.S$e(AscCommon.Rd.gT, this, this.Uzb);
          !1 !== this.FOa || e || (this.IJ = e = !0, f.Zhb());
          this.HQc = !1;
          this.YJe();
          AscCommon.Rd.m_b();
          AscCommon.Rd.UHc();
          this.GQc = !0;
        }
        !1 !== this.FOa || e || (this.IJ = e = !0, f.Zhb());
        f.pe(!1);
        e && (this.pRc(), f.Klb(!1));
        if (this.WLd) {
          f.a3a();
          var Da = { Zl: !0 };
          f.oc.uEf(Da);
          f.oc.tEf(Da);
          this.La.Ywg() ? this.La.nzg() : this.Irf();
        } else !1 === this.FOa && f.b0b(), this.La.Cd.TI();
      }
      !1 !== this.FOa || e || (this.IJ = !0, this.pRc());
      this.La.Za.Ge();
      this.La.Za.vi();
      this.NIb = null;
      this.La.ktf();
      this.iy || (this.Nnf(), this.Lnf(), this.XOa && this.La.Cd.J0a(this.XOa));
      this.iy && this.EVa(!0);
      this.E0b = Za.Af;
    }
  };
  Ha.prototype.lda = function () {
    null != this.La.Za && this.La.Za.Xn();
  };
  Ha.prototype.gId = function (e) {
    this.hx(ge.oO, he.WG);
    if (void 0 !== this.kOa) this.kOa(), this.kOa = void 0; else {
      var f = gb.MDb;
      null != f.GPd ? (e = f.zXf(f.GPd), this.La.Za.gBe(f.GPd.text, e), this.La.NXg(), f.GPd = null, this.hx(ge.Kr, he.WG)) : 1 == this.qJf ? (this.qJf = 0, this.Qhd(this.pJf), this.pJf = null) : !1 === this.La.Za.jf(AscCommon.dT) && (this.La.Za.Jg(AscDFH.oYd),
        this.La.Za.Xg(new AscCommonWord.rM({ cf: { Ha: e.Ha, Ta: -1 } })), this.La.Za.Xn(), this.La.Za.rg());
    }
  };
  Ha.prototype.Tid = function (e) {
    this.p1a = e;
  };
  Ha.prototype.ifa = function (e) {
    this.p1a ? this.p1a(e) : !1 === this.La.Za.jf($d) && (this.La.Za.Jg(AscDFH.JWd), this.La.Za.WN(50, 50, e.src), this.La.Za.rg());
  };
  Ha.prototype.FZa = function (e) {
    e.BEa && this.lpb && (this.lpb.BEa = e.BEa, this.lpb.LHd(this));
    e.tib ? this.rRd(e.url, e.data) : this.eke(e.url, e.data);
  };
  Ha.prototype.tlc = function (e) {
    this.La.Cd.j8f(e.src);
    this.La.Cd.UNa == e.src && (this.La.Cd.UNa =
      '', this.lda());
  };
  Ha.prototype.pFd = function () {
    return !0;
  };
  Ha.prototype.wM = function (e, Da, Ia) {
    if (void 0 !== f.Native && void 0 !== f.Native.GetImageUrl) Ia(); else if (f.IS_NATIVE_EDITOR) Ia(); else {
      this.ECc = Ia;
      this.FCc = Da;
      Da = 0;
      for (var Ha in this.FCc) ++Da;
      AscFonts.ms.bQa(e);
      0 == Da && !1 === this.m5.JGc(e) ? (this.ECc(), this.ECc = null) : (this.Egb(), this.ejb = !0, this.m5.Ohb(e));
    }
  };
  Ha.prototype.C0d = function (e) {
    this.FOa = !0;
    this.MRc = e;
    this.La.Cd.lPd();
    this.m5.Ohb(this.La.Za.OO);
  };
  Ha.prototype.Oyg = function (e) {
    this.gCf = !0;
    this.O_d =
      e;
    e = 0;
    for (var f = this.bs.TX, Da = this.O_d.length, Ia = 0; Ia < Da; Ia++) void 0 !== f[this.O_d[Ia]] ? (this.O_d.splice(Ia, 1), Ia--, Da--) : ++e;
    0 < e && (this.nfb = 2, this.fG(ge.oO, he.ZN));
    this.bs.msa(this.O_d);
  };
  Ha.prototype.Nbg = function () {
    this.La.yCb();
  };
  Ha.prototype.A1f = function () {
    AscCommon.Rd.ZFd();
    this.GQc && (this.GQc = !1, this.Uzb());
  };
  Ha.prototype.lKc = function () {
  };
  Ha.prototype.iOf = function (e) {
    this.La.poa.$Ea(e);
  };
  Ha.prototype.jOf = function (e) {
    this.La.gaa.yja(e);
  };
  Ha.prototype.LJf = function () {
    return this.La.zua;
  };
  Ha.prototype.KJf =
    function () {
      return this.La.Mqa;
    };
  Ha.prototype.NHf = function () {
    return this.La.Cd.dae(!0);
  };
  Ha.prototype.bFd = function () {
    var e = this.La.Cd.QP, f = e + 1;
    if (f > this.La.Cd.cR) return e;
    var Da = this.La.Cd.sl;
    return Da[e].Yr.bottom > this.La.Ut.Ve.height - Da[f].Yr.top ? e : f;
  };
  Ha.prototype.OPe = function (e) {
    this.La && (this.La.Xdf = e);
  };
  Ha.prototype.RPe = function (e) {
    this.T4 ? this.La.D7 != e && (this.La.D7 = e, this.La.Z0b(), this.La.$2a(!0)) : this.iOd = e;
  };
  Ha.prototype.jRf = function () {
    this.La.D7 = !this.La.D7;
    this.La.Z0b();
    this.La.$2a(!0);
    return this.La.D7;
  };
  Ha.prototype.YQf = function () {
    return this.La.D7;
  };
  Ha.prototype.hRf = function (e) {
    this.La && this.La.BK && this.La.D1 && (this.La.BK.LUa = e, this.La.D1.LUa = e, this.La.rEa(!0), this.La.dib(!0));
  };
  Ha.prototype.gKf = function (e) {
    if (!this.La.Cd.Gmb(e)) {
      var f = !1, Da = this.La.Za;
      AscCommonWord.bVd !== Da.sa.ka && (Da.rm(AscCommonWord.bVd), f = !0);
      var Ia = Mf.Bk;
      Mf.ZE = 0;
      Mf.Bk = 1;
      Da.MP(Mf, 0, 0, e);
      Da.pY(Mf, 0, 0, e);
      Da.BT(Mf, 0, 0, e);
      Da.Ju();
      Da.Ge();
      Mf.Bk = Ia;
      !0 === f && (this.La.Cd.VD(), this.La.Cd.HG());
    }
  };
  Ha.prototype.Qwg = function (e) {
    if (!this.La.Cd.Gmb(e)) {
      var f =
        !1, Da = this.La.Za;
      AscCommonWord.bVd !== Da.sa.ka && (Da.rm(AscCommonWord.bVd), f = !0);
      var Ia = Mf.Bk;
      Mf.ZE = 0;
      Mf.Bk = 1;
      Da.MP(Mf, 0, AscCommon.BIa, e);
      Da.pY(Mf, 0, AscCommon.BIa, e);
      Da.BT(Mf, 0, 0, e);
      Da.Ju();
      Da.Ge();
      Mf.Bk = Ia;
      !0 === f && (this.La.Cd.VD(), this.La.Cd.HG());
    }
  };
  Ha.prototype.bJf = function (e) {
    if (!this.La.Cd.Gmb(e)) {
      var f = Mf.Bk;
      Mf.Bk = 2;
      this.La.Za.MP(Mf, 0, AscCommon.BIa / 2, e);
      this.La.Za.pY(Mf, 0, AscCommon.BIa / 2, e);
      this.La.Za.Ge();
      Mf.Bk = f;
    }
  };
  Ha.prototype.IJf = function () {
    return this.La.kla;
  };
  Ha.prototype.HMf = function (e) {
    this.M1a =
      e = !0 === e ? Nc.vWb : !1 === e ? Nc.ska : e;
    Nc.ska !== e && this.La.Za.dHc();
  };
  Ha.prototype.tHf = function (e) {
    this.xHc(new Td({ Zm: { type: e } }));
  };
  Ha.prototype.S6b = function (e) {
    this.M1a = e = !0 === e ? Nc.vWb : !1 === e ? Nc.ska : e;
    return this.Re('asc_onPaintFormatChanged', e);
  };
  Ha.prototype.xyg = function (e, f, Da, Ia, Ha) {
    if (this.VAb = e) this.La.Za.xLf(f, Da, Ia, Ha), this.La.Za.dHc();
  };
  Ha.prototype.VEb = function (e) {
    this.VAb = e;
    return this.Re('asc_onMarkerFormatChanged', e);
  };
  Ha.prototype.yye = function (e, f) {
    this.ZZ = !0;
    this.HHd = e;
    f ? this.La.Cd.O0a('crosshair') :
      (editor.yka(), editor.ELc(!1));
  };
  Ha.prototype.m3d = function (e) {
    if (this.La.Za) {
      var f = this.bFd(), Da = this.La.Za.BE(f), Ia = Math.min(Da.Gd / 2, Da.pf / 2);
      this.La.Za.oc.lDg(e, f, Da.pa + Da.Gd / 4, Da.qa + Da.pf / 4, Ia, Ia);
    }
  };
  Ha.prototype.bid = function () {
    return this.La.Za.oc.XOc();
  };
  Ha.prototype.djd = function () {
    return this.La.Za.oc.dSc();
  };
  Ha.prototype.gid = function () {
    return this.La.Za.oc.GDb();
  };
  Ha.prototype.eid = function () {
    return this.La.Za.oc.qPc();
  };
  Ha.prototype.did = function () {
    return this.La.Za.oc.pPc();
  };
  Ha.prototype.qT = function (e) {
    !1 ===
    this.La.Za.jf($d) && (this.La.Za.Jg(AscDFH.CKd), this.La.Za.qT(e), this.La.Za.rg());
  };
  Ha.prototype.ELc = function (e) {
    this.ZZ = e;
    return this.Re('asc_onStartAddShapeChanged', e);
  };
  Ha.prototype.Z6d = function () {
    return this.La.Za.Z6d();
  };
  Ha.prototype.a7d = function () {
    return this.La.Za.a7d();
  };
  Ha.prototype.Y6d = function () {
    return this.La.Za.Y6d();
  };
  Ha.prototype.Bye = function () {
    return this.La.Za.Bye();
  };
  Ha.prototype.MHf = function () {
    !1 === this.La.Za.jf($d) && (this.La.Za.Jg(AscDFH.cXd), this.La.Za.Oz(), this.La.Za.rg());
  };
  Ha.prototype.Cwg =
    function () {
      var e = new Pa;
      e.gdc = 297;
      e.edc = 210;
      e.JHc = 30;
      e.KHc = 15;
      e.O3c = 20;
      e.N3c = 20;
      return e;
    };
  Ha.prototype.pDg = function (e) {
    !1 === this.La.Za.jf($d) && (this.La.Za.Jg(AscDFH.BKd), this.La.Za.fGf(e), this.La.Za.rg());
  };
  Ha.prototype.EVa = function (e) {
    this.iy = !!e;
    this.T4 && (e ? (this.Gwf(), this.Oq = !1, AscCommon.Rd.zxa(!0), null == this.La.Cd.ZY ? (this.La.Cd.VD(), this.La.FQd()) : (this.La.FQd(), this.La.AV())) : (this.La.Z0b(), this.La.Cd.VD(), this.La.$2a(!0)));
  };
  Ha.prototype.pY = function (e, f) {
    this.La.Q0f(e, f);
  };
  Ha.prototype.p1a = null;
  Ha.prototype.CMf = function (e, f) {
    this.La.Cd.mFd(e);
    this.La.Cd.OEd(f);
  };
  Ha.prototype.GTe = function () {
    return -1;
  };
  Ha.prototype.kQe = function () {
    var e = this.La.Za.BQ();
    return new AscCommon.LFa(e.Ej, e.qa, e.Si - e.Ej, 0);
  };
  Ha.prototype.U8a = function (e, f) {
    var Da = this;
    if (f) this.ikc('asc_onAdvancedOptions') ? Da.Re('asc_onAdvancedOptions', De.OGb) : Da.Re('asc_onError', xc.Fg.i9b, xc.il.xV); else if (this.ikc('asc_onAdvancedOptions')) {
      var Ia = { codepage: AscCommon.KOb, encodings: AscCommon.MJd() };
      e && 'undefined' !== typeof Blob && 'undefined' !==
      typeof FileReader ? AscCommon.o7e().getBinaryContent(e, function (e, f) {
        e ? Da.Re('asc_onError', xc.Fg.cT, xc.il.xV) : (Ia.data = f, Da.Re('asc_onAdvancedOptions', De.c1a, new AscCommon.sOc(Ia)));
      }) : Da.Re('asc_onAdvancedOptions', De.c1a, new AscCommon.sOc(Ia));
    } else this.DVa(De.c1a, new Asc.OIc(AscCommon.KOb));
  };
  Ha.prototype.dTd = function (e, f) {
    return this.La && this.La.Cd && (Ce.zCb === f.ogb || Ce.T3b === f.ogb) ? this.La.Cd.Hug([e, f]) : !1;
  };
  Ha.prototype.Kfd = function (e, Da, Ia, Ha) {
    var Ra = this, Pa = Da.ogb;
    he.wGd === e ? Ia.c = 'sendmm' : this.La.Za ||
      (Ia.c = 'savefromorigin');
    if ('savefromorigin' === Ia.c) Ia.format = this.EDb; else if (null != Da.OKc || Ce.zCb !== Pa && Ce.T3b !== Pa) Ce.JSON === Pa ? (Ia.url = this.W_d.url, Ia.format = this.W_d.fileType, Ia.codepage = AscCommon.KOb, Ia.delimiter = AscCommon.XVa.CWc) : this.iCa ? (e = this.iCa.Zrb.shift(), Ia.url = e.url, Ia.format = e.format, Ia.outputurls = !0) : Ce.vHc === Pa && null == Da.OKc && null == Da.PKc ? (e = new AscCommon.OGf, e.ig = !1, e.Ul = 27, this.La.Za.m5c(e), Ha.data = '\ufeff' + f.asc_docs_api.prototype.asc_nativeGetHtml.call(this)) : (Da.wEa instanceof
    Asc.OIc && (Ia.codepage = Da.wEa.QPa()), e = null != Da.OKc ? Da.OKc : this.La.Za, e = null != Da.PKc && Ce.vHc === Da.PKc.flg() ? new AscCommonWord.Mg(e, !1, !0, Da.RId) : new AscCommonWord.Mg(e, void 0, void 0, Da.RId), Ha.data = e.NG(Ia.nobase64)); else {
      e = !1;
      Da.wEa && Da.wEa && Asc.W0b.Selection === Da.wEa.TIc() && (e = !0);
      var Za = this.La.Cd;
      e && Za.W9f();
      Ha.data = Za.Zuf(Ia.nobase64, e);
    }
    if (null != Da.PKc) {
      Ia.mailmergesend = Da.PKc;
      e = this.La.Za.T2a;
      Za = [];
      if (0 < e.length) {
        var Va = e[0], Ab = [], sb;
        for (sb in Va) Ab.push(sb);
        Za.push(Ab);
      }
      for (sb = 0; sb < e.length; ++sb) {
        Va =
          e[sb];
        Ab = [];
        for (var gb in Va) Ab.push(Va[gb]);
        Za.push(Ab);
      }
      var bb = Ha.data;
      Ha.data = JSON.stringify(Za);
      Da.PKc.Pqg(!0);
      var nb = Da.f7;
      Da.f7 = function (e) {
        Ia.savekey = e.data;
        e = { data: bb, GXb: null, index: 0, count: 0 };
        Da.PKc.Pqg(!1);
        AscCommon.g1d(function (e, f, Da) {
          Ye(Ra, e, f, Da);
        }, Ra.lka, nb, Ia, e);
      };
    }
    if (f.oAc) return f.AscDesktopEditor.CryptoDownloadAs(Ha.data, Pa, '<m_nCsvTxtEncoding>' + Ia.codepage + '</m_nCsvTxtEncoding>'), !0;
  };
  Ha.prototype.SQe = function (e) {
    this.U3 = !0;
    AscFormat.lb(e) || (this.cId(), this.La.Za.jf(AscCommon.SFa));
    return this.La.Za.Wbe(e);
  };
  Ha.prototype.XPe = function (e) {
    if (!1 === this.La.Za.jf($d)) {
      this.La.Za.Jg(AscDFH.GWd);
      AscFonts.hV = !0;
      this.PIc(!0);
      this.La.Za.WN(null, null, null, e);
      AscFonts.hV = !1;
      var f = this;
      AscFonts.ms.V9a('', this, function () {
        this.PIc(!1, !0);
        f.La.Za.rg();
      }, !1, !1, !1);
    }
  };
  Ha.prototype.mRf = function (e) {
    this.U3 = !0;
    this.cId();
    this.La.R0f();
    this.Re('asc_doubleClickOnChart', e);
  };
  Ha.prototype.Nkc = function () {
    AscCommon.x3a.prototype.Nkc.call(this);
    this.La.jEb = !1;
  };
  Ha.prototype.dQe = function (e) {
    AscFormat.kCf(e) &&
    !1 === this.La.Za.jf($d) && (this.La.Za.Jg(AscDFH.gXd), this.La.Za.w9(e), this.La.Za.rg());
  };
  Ha.prototype.gqf = function () {
    this.Re('asc_onCloseChartEditor');
  };
  Ha.prototype.PTd = function (e) {
    this.Tsg = e;
    this.T4 && e !== this.qKc && (this.qKc = e, this.La.Cd.VD(), this.La.Cd.HG());
  };
  Ha.prototype.wPe = function (e) {
    var f = AscCommon.LR, Da = gb.Gka('Cambria Math');
    if (!1 === f.WG(Da)) return this.Qhd(e);
    this.qJf = 1;
    this.pJf = e;
  };
  Ha.prototype.Qhd = function (e) {
    !1 === this.La.Za.jf($d) && (this.La.Za.Jg(AscDFH.zKd), e = new AscCommonWord.yzb(e), this.La.Za.Xg(e),
      this.La.Za.rg());
  };
  Ha.prototype.ZDg = function () {
    this.La.Za.XFf();
  };
  Ha.prototype.kRf = function () {
  };
  Ha.prototype.VPe = function () {
  };
  Ha.prototype.WQf = function () {
  };
  Ha.prototype.SQf = function () {
  };
  Ha.prototype.CQf = function () {
  };
  Ha.prototype.iRf = function () {
  };
  Ha.prototype.cRf = function () {
  };
  Ha.prototype.QQf = function () {
  };
  Ha.prototype.wFf = function () {
  };
  Ha.prototype.uFf = function () {
  };
  Ha.prototype.oFf = function () {
  };
  Ha.prototype.Npf = function () {
  };
  Ha.prototype.vRf = function () {
  };
  Ha.prototype.BRf = function () {
  };
  Ha.prototype.yRf =
    function () {
    };
  Ha.prototype.TQf = function () {
  };
  Ha.prototype.XQf = function () {
    return null;
  };
  Ha.prototype.DQf = function () {
  };
  Ha.prototype.gRf = function () {
  };
  Ha.prototype.fRf = function () {
  };
  Ha.prototype.aRf = function () {
    return !0;
  };
  Ha.prototype.$Qf = function () {
    return !1;
  };
  Ha.prototype.JEg = function (e) {
    return this.La.Za.eKf(e);
  };
  Ha.prototype.pTd = function () {
  };
  Ha.prototype.bRf = function () {
    return !1;
  };
  Ha.prototype.jSc = function () {
  };
  Ha.prototype.nSc = function () {
  };
  Ha.prototype.oTd = function () {
  };
  Ha.prototype.J1d = function () {
  };
  Ha.prototype.BQf =
    function () {
    };
  Ha.prototype.eRf = function () {
  };
  Ha.prototype.Fwf = function () {
    return !1;
  };
  Ha.prototype.ZQf = function () {
    return !1;
  };
  Ha.prototype.UQf = function () {
  };
  Ha.prototype.VQf = function () {
  };
  Ha.prototype.R1d = function () {
  };
  Ha.prototype.AQf = function () {
  };
  Ha.prototype.dRf = function () {
  };
  Ha.prototype.sEg = function (e) {
    var f = this.c2a();
    f && f.yKb(e.L9, e.DR === Asc.hQ.Ofa, !0, !0);
  };
  Ha.prototype.WTd = function () {
    this.La.Za.Kra({ Zl: !0 });
  };
  Ha.prototype.OQf = function () {
    sb.Oi();
    af.Oi();
    Qf.Oi();
    AscCommon.Rd.Oi();
    this.HQc = !0;
    this.nCa = !1;
    var e = this.La.Za;
    e.KGd();
    e.Luf();
    AscCommon.Vpa.DJ = {};
    this.La.Cd.Pug();
  };
  Ha.prototype.PPe = function (e) {
    this.La && this.La.Za && AscCommon.Rd && (AscCommon.Rd.FCb(e), f.AscCommon.Ki && e && !AscCommon.Rd.k8() && f.AscCommon.Ki.Jka());
  };
  Ha.prototype.fjc = function () {
    AscCommon.x3a.prototype.fjc.call(this);
    sb = AscCommon.History;
    gb = AscFonts.Sba;
    sh = AscCommon.ARd;
    Mf = AscCommon.MR;
    this.La = new AscCommonWord.JGf(this);
    this.La.Ha = this.e1c;
    this.MEd = AscCommonWord.i6f.en;
    sh.qA = !0;
    this.cIf();
    this.La.kv();
    this.hOd && this.ove(this.hOd);
    null !== this.iOd && this.RPe(this.iOd);
    if (null !== this.PFc) switch (this.PFc) {
      case AscCommon.UOb.pxa:
        this.irf();
        break;
      case AscCommon.UOb.bCb:
        this.jrf();
        break;
      case AscCommon.UOb.HPd:
        this.hrf();
    }
    this.EVa(this.iy);
    this.PTd(this.Tsg);
    this.WLd && (this.bs.gka = !1);
    this.BXb && this.Qvd(this.BXb);
  };
  Ha.prototype.ONb = function (e) {
    this.La.Za && this.La.Za.b0b(e);
  };
  Ha.prototype.RIc = function () {
    if (!this.La || !this.La.Za || this.La.Za.jf($d)) return !1;
    this.La.Za.Jg(AscDFH.lRb);
    return !0;
  };
  Ha.prototype.tEg = function () {
    var e = this.La.Za;
    if (!e) return [];
    e = e.Lsf();
    for (var f = [], Da = 0, Ia = e.length; Da < Ia; ++Da) f.push(e[Da].bu());
    return f;
  };
  Ha.prototype.gFg = function (e) {
    var f = this.La.Za;
    if (f) {
      for (var Da = f.Lsf(), Ia = 0, Ha = Da.length; Ia < Ha; ++Ia) Da[Ia].kD(e[Ia] ? e[Ia] : '');
      this.G0() || f.b0b();
    }
  };
  Ha.prototype.ufg = function (e, f) {
    var Da = this.La.Za;
    if (!Da) return null;
    var Ia = null;
    if (c_oAscSdtLevelType.bqa === e) {
      if (!1 === Da.jf(AscCommon.YPa, null)) {
        Da.Jg(AscDFH.FWd);
        if (e = Da.rJ(c_oAscSdtLevelType.bqa)) f && e.DKb(f), Da.Ld(), Da.Xn(), Da.ju(), Ia = e.Hhb();
        Da.rg();
      }
    } else if (c_oAscSdtLevelType.Sq ===
      e && !1 === Da.jf(AscCommon.YPa, null)) {
      Da.Jg(AscDFH.NWd);
      if (e = Da.rJ(c_oAscSdtLevelType.Sq)) f && e.DKb(f), Da.Ld(), Da.Xn(), Da.ju(), Ia = e.Hhb();
      Da.rg();
    }
    return Ia;
  };
  Ha.prototype.Nfg = function (e) {
    var f = this.La.Za;
    if (f) {
      var Da = !0, Ia = null;
      if (void 0 === e) {
        var Ha = f.tl({ vad: !0 }), Ra = Ha.EZ;
        Ha = Ha.vka;
        Ra ? Ia = Ra : Ha && (Ia = Ha);
      } else Ia = AscCommon.qg.Zf(e);
      Ia && Ia.G2 && (c_oAscSdtLevelType.bqa === Ia.G2() ? Da = f.jf(AscCommon.A3, {
        ka: AscCommon.kia,
        dc: [Ia],
        Ky: AscCommon.Ald
      }) : c_oAscSdtLevelType.Sq === Ia.G2() && (e = Ia.pq()) && (Da = f.jf(AscCommon.A3,
        { ka: AscCommon.kia, dc: [e], Ky: AscCommon.UK })), e = Ia.vk());
      !1 === Da && (f.Jg(AscDFH.zXd), f.buf(e), f.Ld(), f.Xn(), f.ju(), f.rg());
    }
  };
  Ha.prototype.Ofg = function (e) {
    var f = this.La.Za;
    if (f) {
      var Da = !0, Ia = null;
      if (void 0 === e) {
        var Ha = f.tl({ vad: !0 }), Ra = Ha.EZ;
        Ha = Ha.vka;
        Ra ? Ia = Ra : Ha && (Ia = Ha);
      } else Ia = AscCommon.qg.Zf(e);
      Ia && Ia.G2 && (c_oAscSdtLevelType.bqa === Ia.G2() ? Da = f.jf(AscCommon.A3, {
        ka: AscCommon.kia,
        dc: [Ia],
        Ky: AscCommon.Ald
      }) : c_oAscSdtLevelType.Sq === Ia.G2() && (e = Ia.pq()) && (Ra = f.Vhb(), Ia.Dsa(), Da = f.jf(AscCommon.A3, {
        ka: AscCommon.kia,
        dc: [e], Ky: AscCommon.sna
      }), f.Bfb(Ra)), e = Ia.vk());
      return !1 === Da ? (f.Jg(AscDFH.AXd), f.Y3b(e), f.Ld(), f.Xn(), f.ju(), f.rg(), !0) : !1;
    }
  };
  Ha.prototype.jFg = function (e, f, Da) {
    var Ia = this.c2a();
    if (Ia) if (!0 === Da) {
      for (var Ha = Ia.Ov(), Ra = [], Pa = [], Za = 0, Va = Ha.length; Za < Va; ++Za) (Da = Ha[Za], c_oAscSdtLevelType.bqa === Da.G2()) ? (Ra.push(Da), Pa.push(AscCommon.GId)) : c_oAscSdtLevelType.Sq === Da.G2() && (f = Da.pq()) && (Ra.push(f), Pa.push(AscCommon.FU));
      if (!1 === Ia.jf(AscCommon.A3, { ka: AscCommon.Y0e, dc: Ra, Rrf: Pa })) {
        Ia.Jg(AscDFH.DKd);
        Za =
          0;
        for (Va = Ha.length; Za < Va; ++Za) Ha[Za].DKb(e);
        Ia.Xn();
        Ia.ju();
        Ia.rg();
      }
    } else Ha = !0, Da = null, void 0 === f ? (Ra = Ia.tl({ vad: !0 }), f = Ra.EZ, Ra = Ra.vka, f ? Da = f : Ra && (Da = Ra)) : Da = AscCommon.qg.Zf(f), Da && Da.G2 && (c_oAscSdtLevelType.bqa === Da.G2() ? Ha = Ia.jf(AscCommon.A3, {
      ka: AscCommon.kia,
      dc: [Da],
      Ky: AscCommon.GId
    }) : c_oAscSdtLevelType.Sq === Da.G2() && (f = Da.pq()) && (Ha = Ia.jf(AscCommon.A3, {
      ka: AscCommon.kia,
      dc: [f],
      Ky: AscCommon.FU
    }))), !1 === Ha && (Ia.Jg(AscDFH.DKd), Da.DKb(e), Ia.Xn(), Ia.ju(), Ia.rg());
  };
  Ha.prototype.TEg = function () {
    var e =
      this.La.Za;
    if (!e) return !1;
    e = e.tl({ vad: !0 });
    return e.EZ || e.vka ? !0 : !1;
  };
  Ha.prototype.Jfg = function () {
    var e = this.La.Za;
    if (!e) return null;
    var f = e.tl({ vad: !0 });
    e = f.EZ;
    f = f.vka;
    var Da = null;
    e ? Da = e : f && (Da = f);
    return Da ? Da.Hhb() : null;
  };
  Ha.prototype.Kfg = function () {
    var e = this.La.Za;
    if (!e) return null;
    var f = e.tl({ vad: !0 });
    e = f.EZ;
    f = f.vka;
    return e ? e.vk() : f ? f.vk() : null;
  };
  Ha.prototype.K1d = function (e) {
    this.aL[this.aL.length] = new Jd(ae.THf, e);
  };
  Ha.prototype.lFg = function (e, f, Da) {
    var Ia = this.c2a();
    if (Ia) {
      if (void 0 === e || null ==
        e) Da = f = e = 220;
      Ia.Jg(AscDFH.LXd);
      Ia.zGd(e, f, Da);
      Ia.yb.VD();
      Ia.yb.HG();
      Ia.rg();
    }
  };
  Ha.prototype.C5f = function () {
    this.Re('asc_onChangeSdtGlobalSettings');
  };
  Ha.prototype.CEg = function (e) {
    if (!0 === e) return new Asc.Gxa(220, 220, 220);
    e = this.c2a();
    if (!e) return new Asc.Gxa(0, 0, 0);
    e = e.Vs.tZ.Aa;
    return new Asc.Gxa(e.r, e.wb, e.Ya);
  };
  Ha.prototype.mFg = function (e, f, Da, Ia) {
    var Ha = this.c2a();
    Ha && (Ha.Jg(AscDFH.MXd), Ha.aSd(e), void 0 !== f && void 0 !== Da && void 0 !== Ia && Ha.zGd(f, Da, Ia), Ha.zX(), Ha.rg());
  };
  Ha.prototype.DEg = function () {
    var e =
      this.c2a();
    return e ? e.Vs.tZ.Ika : !1;
  };
  Ha.prototype.sFg = function () {
    for (var e = this.La.Cd.mxa, f = 0; f < e.length; f++) e[f].Wjb = -2;
    this.La.qqa();
    this.La.Bxa();
    this.La.Zv();
    this.La.VV();
  };
  Ha.prototype.cEg = function (e) {
    this.La.Za.xGf(e);
  };
  Ha.prototype.rEg = function () {
    this.La.Za.xMc();
  };
  Ha.prototype.pFg = function () {
    var e = this.La.Za;
    if (e) return e.Tya.o8(!0), e.Tya;
  };
  Ha.prototype.REg = function () {
    var e = this.La.Za;
    e && e.Tya.o8(!1);
  };
  Ha.prototype.rFf = function () {
    this.Re('asc_onDocumentOutlineUpdate');
  };
  Ha.prototype.ZNd = function (e) {
    this.Re('asc_onDocumentOutlineCurrentPosition',
      e);
  };
  Ha.prototype.pSc = function (e) {
    this.Re('asc_onDocumentOutlineUpdateAdd', e);
  };
  Ha.prototype.D5f = function (e) {
    this.Re('asc_onDocumentOutlineUpdateChange', e);
  };
  Ha.prototype.qSc = function (e) {
    this.Re('asc_onDocumentOutlineUpdateRemove', e);
  };
  Ha.prototype.aEg = function (e, f) {
    var Da = AscCommon.Bw.Db('No table of contents entries found.');
    AscFonts.ms.V9a(e + Da, this, function () {
      var Da = this.La.Za;
      Da && (Da = Da.i8(), Da instanceof AscCommonWord.LFb && Da.MQd() ? f && this.Pfg(f) : this.La.Za.qrf(e, f));
    });
  };
  Ha.prototype.YEg = function (e) {
    var f =
      this.La.Za;
    if (f) {
      if (!e && (e = f.i8(), !e)) return;
      e instanceof AscCommonWord.LFb ? this.Nfg(e.vk()) : e instanceof AscCommonWord.eEd && this.Mfg(e);
    }
  };
  Ha.prototype.NEg = function (e) {
    var f = this.La.Za;
    if (f && (e = f.i8(e))) {
      if (e instanceof AscCommonWord.LFb) {
        var Da = e.H_c();
        if (!(Da instanceof AscCommonWord.eEd)) return Da = new Asc.bVc, Da.zKf(e), Da;
        e = Da;
      }
      return e instanceof AscCommonWord.eEd ? (Da = new Asc.bVc, Da.AKf(e), Da.GHf(f.yh), Da) : null;
    }
  };
  Ha.prototype.Pfg = function (e) {
    if (e instanceof Asc.bVc) {
      var f = this.La.Za;
      if (f) {
        var Da =
          e.Dz;
        if (!Da && (Da = f.i8(), !Da)) return;
        if (Da instanceof AscCommonWord.LFb) {
          var Ia = Da.H_c();
          if (!Ia) {
            f.qrf(null, e, Da);
            return;
          }
          Da = Ia;
        }
        if (Da) {
          Ia = f.yh;
          var Ha = e.gKd(), Ra = Asc.C5.kO !== Ha && Ha !== Ia.xQd();
          Da.Ifb();
          (Ra ? f.jf(AscCommon.UK, {
            ka: AscCommon.sUd,
            Zob: [AscCommon.Cld]
          }) : f.jf(AscCommon.UK)) || (f.Jg(AscDFH.bKc), Ra && Ia.KMf(Ha), Da.$N(e), Da.hf(), f.Ld(), f.Xn(), f.ju(), f.rg());
        }
      }
    }
  };
  Ha.prototype.uFg = function (e, f) {
    var Da = this.La.Za;
    if (Da) {
      if (!f && (f = Da.i8(), !f)) return;
      f instanceof AscCommonWord.LFb && (f = f.H_c());
      if (f) {
        var Ia =
          Da.Vhb();
        f.Ifb();
        if (e) {
          if (!1 === Da.jf(AscCommon.UK)) {
            Da.Jg(AscDFH.QKd);
            e = Da.Op(!1, !0);
            f = 0;
            for (var Ha = e.length; f < Ha; ++f) for (var Ra = e[f].GJf(AscCommonWord.gWf), Pa = 0, Za = Ra.length; Pa < Za; ++Pa) Ra[Pa].hf();
            Da.Bfb(Ia);
            Da.Ld();
            Da.Xn();
            Da.ju();
            Da.rg();
          }
        } else !1 === Da.jf(AscCommon.Dta) && (Da.Jg(AscDFH.QKd), f.hf(), Da.Bfb(Ia), Da.Ld(), Da.Xn(), Da.ju(), Da.rg());
      }
    }
  };
  Ha.prototype.yEg = function () {
    var e = this.La.Za;
    if (e) return e.lQd();
  };
  Ha.prototype.tFg = function (e) {
    var f = this.La.Za;
    if (f && (e instanceof AscCommonWord.eEd || e instanceof
      AscCommonWord.jNc || e instanceof AscCommonWord.S5c)) if (e instanceof AscCommonWord.jNc || e instanceof AscCommonWord.S5c) {
      var Da = e.Pz();
      if (Da) {
        var Ia = Da.$S(e);
        if (-1 !== Ia) {
          var Ha = Da.pq();
          Ha && !1 === f.jf(AscCommon.A3, {
            ka: AscCommon.kia,
            dc: [Ha],
            Ky: AscCommon.UK
          }) && (f.Jg(AscDFH.bKc), Da.du(Ia, 1), Da.zk(Ia, e instanceof AscCommonWord.jNc ? new AscCommonWord.jNc : new AscCommonWord.S5c(f.bS())), f.Ld(), f.Xn(), f.ju(), f.rg());
        }
      }
    } else e.Ifb(), !1 === f.jf(AscCommon.UK) && (f.Jg(AscDFH.bKc), e.hf(), f.Ld(), f.Xn(), f.ju(), f.rg());
  };
  Ha.prototype.Mfg = function (e) {
    var f = this.La.Za;
    if (e && f) if (e instanceof AscCommonWord.jNc || e instanceof AscCommonWord.S5c) {
      var Da = e.Pz();
      if (Da && (e = Da.$S(e), -1 !== e)) {
        var Ia = Da.pq();
        Ia && !1 === f.jf({
          ka: AscCommon.kia,
          dc: [Ia],
          Ky: AscCommon.UK
        }) && (f.Jg(AscDFH.bKc), Da.du(e, 1), f.Ld(), f.Xn(), f.ju(), f.rg());
      }
    } else e.Ifb(), !1 === f.jf(AscCommon.sna) && (f.Jg(AscDFH.yXd), e.YLf(), f.Ld(), f.Xn(), f.ju(), f.rg());
  };
  Ha.prototype.iFg = function (e, f, Da) {
    var Ia = this.La.Za;
    Ia && f && (e instanceof AscCommonWord.eEd || e instanceof AscCommonWord.jNc ||
      e instanceof AscCommonWord.S5c) && !(e instanceof AscCommonWord.jNc || e instanceof AscCommonWord.S5c) && (e.Ifb(), !1 === Ia.jf(AscCommon.UK) && (Ia.Jg(AscDFH.bKc), e.$N(f), Da && e.hf(), Ia.Ld(), Ia.Xn(), Ia.ju(), Ia.rg()));
  };
  Ha.prototype.$Dg = function (e) {
    var f = this.c2a();
    f && f.bGf(e);
  };
  Ha.prototype.LEg = function () {
    var e = this.c2a();
    return e ? e.yQd() : '=';
  };
  Ha.prototype.MEg = function () {
    return '#,##0 #,##0.00 $#,##0.00;($#,##0.00) 0 0% 0.00 0.00%'.split(' ');
  };
  Ha.prototype.VEg = function (e) {
    return this.La.Za.yLf(e);
  };
  Ha.prototype.lEg =
    function (e, f) {
      'string' === typeof f && 0 < f.length && (e += ' \\# "' + f + '"');
      return e;
    };
  Ha.prototype.uEg = function () {
    var e = this.La.Za;
    if (!e) return null;
    e = e.GB;
    e.hf();
    return e;
  };
  Ha.prototype.EEg = function (e) {
    var f = this.La.Za;
    return f && e ? f.yh.OJf(e) : -1;
  };
  Ha.prototype.KEg = function () {
    var e = this.La.Za;
    return e ? e.yh.CJf() : [];
  };
  Ha.prototype.eFg = function (e) {
    var f = this.La.Za;
    if (f) return f.uMf(e);
  };
  Ha.prototype.fFg = function (e) {
    var f = this.La.Za;
    if (f) return f.vMf(e);
  };
  Ha.prototype.dFg = function (e) {
    var f = this.La.Za;
    if (f) return f.tMf(e);
  };
  Ha.prototype.cFg = function (e) {
    var f = this.La.Za;
    if (f) return f.sMf(e);
  };
  Ha.prototype.IEg = function () {
    var e = this.c2a();
    return e ? e.wq(!1) : null;
  };
  Ha.prototype.WDg = function () {
    var e = this.c2a();
    if (!e) return null;
    e.SFf();
  };
  Ha.prototype.w2a = function () {
    return this.La.Za ? this.La.Za.w2a() : null;
  };
  Ha.prototype.BGc = function (e) {
    return this.La.Za ? this.La.Za.BGc(e) : null;
  };
  Ha.prototype.VHc = function (e) {
    return this.La.Za ? this.La.Za.VHc(e) : null;
  };
  Ha.prototype.s7a = function (e) {
    return this.La.Za ? this.La.Za.s7a(e) : null;
  };
  Ha.prototype.vob =
    function (e) {
      return this.La.Za ? this.La.Za.vob(e) : null;
    };
  Ha.prototype.Jhb = function () {
    return this.La.Za ? this.La.Za.Jhb() : 0;
  };
  Ha.prototype.E5a = function () {
    return this.La.Za ? this.La.Za.E5a() : null;
  };
  Ha.prototype.tzb = function () {
    return this.La.Za ? this.La.Za.tzb() : 0;
  };
  Ha.prototype.nFd = function () {
    this.La.Za && this.La.Cd.Fje();
  };
  Ha.prototype.fga = function (e) {
    return this.La.fga(e);
  };
  Ha.prototype.VEa = function (e) {
    return this.La.VEa(e);
  };
  Ha.prototype.$1a = function (e) {
    return this.La.$1a(e);
  };
  Ha.prototype.IJd = function (e) {
    var f =
      this.La.Za;
    return f ? f.Fbe(e) : [];
  };
  f.asc_docs_api = Ha;
  f.asc_docs_api.prototype.asc_nativeOpenFile = function (e, Da) {
    this.CLb = '';
    this.EV = new AscCommon.NNb;
    this.EV.uv('TM');
    this.EV.KEc('native');
    this.La.D7 = !1;
    this.La.kv();
    this.lFd();
    this.DocumentType = 2;
    this.VKf = this.La.Za.UGc();
    af.gUa(!0);
    var Ia = new AscCommonWord.A4a(this.La.Za, { Imc: !1, uqa: 0, FXb: 0 });
    void 0 !== Da && (AscCommon.aEa = Da);
    Ia.Qp(e) ? (af.gUa(!1), this.NIb = 1) : this.Re('asc_onError', xc.Fg.SFd, xc.il.xV);
    !0 === f.NATIVE_EDITOR_ENJINE && void 0 != f['native'] &&
    (AscCommon.fEd.prototype.t3a = function (e) {
      e({ saveLock: !1 });
    }, AscCommon.fEd.prototype.g4a = function (e, Da) {
      f['native'].SaveChanges && f['native'].SaveChanges(e.join('","'), Da, e.length);
    });
    void 0 == f.Native && (e = (this.bHc = null == editor.La.Za ? !0 : !editor.La.Za.lqa) ? Yg.bD(AscCommon.V6a, AscCommon.BIa) : Yg.bD(AscCommon.BIa, AscCommon.V6a), this.mSc(e.qm, e.om), this.CLc(editor.bKd()), void 0 !== this.nwg && (this.nwg(), void 0 !== this.La.Cd.Oug && this.La.Cd.Oug()));
  };
  f.asc_docs_api.prototype.asc_nativeCalculateFile = function () {
    if (null !=
      this.La.Za) {
      var e = this.La.Za;
      if (void 0 === f.NATIVE_EDITOR_ENJINE && this.HQc && (this.HQc = !1, 1 === AscCommon.Rd.g9)) {
        this.GQc = !0;
        AscCommon.Rd.m_b();
        AscCommon.Rd.UHc();
        return;
      }
      e.pe();
      e.b0b();
      e.Ge();
      e.vi();
      this.Oq = !1;
    }
  };
  f.asc_docs_api.prototype.asc_nativeApplyChanges = function (e) {
    this.xvf(e, new AscCommonWord.ixa(191, 255, 199));
    AscCommon.Rd.wTc();
  };
  f.asc_docs_api.prototype.PIc = function (e, f) {
    this.La.Za && (e ? this.La.Za.Zhb() : this.La.Za.Klb(f));
  };
  f.asc_docs_api.prototype.asc_nativeApplyChanges2 = function (e, Da) {
    af.gUa(!0);
    var Ia = new AscCommon.x9(e, e.length);
    Ia.Hv = null;
    for (var Ha = new AscCommonWord.ixa(191, 255, 199), Ra = Ia.ob(), Pa = 4, Za = 0; Za < Ra && (!0 !== f.NATIVE_EDITOR_ENJINE || !f["native"].CheckNextChange || f["native"].CheckNextChange()); Za++) {
      var Va = Ia.ob();
      Pa += 4;
      Ia.size = Pa + Va;
      var Ab = Ia.ic();
      Ab = AscCommon.qg.Zf(Ab);
      var sb = Ia.Cb, gb = Ia.ob();
      Ab && ((gb = AscDFH.Ca[gb]) ? (Ab = new gb(Ab), Ab.te(Ia), !0 === AscCommon.Rd.BEb(Ab, !1) && Ab.Wg(Ha)) : (AscCommon.Rd.BEb(e, !1), Ia.ck(sb), Ia.Wd(sb)));
      Pa += Va;
      Ia.Wd(Pa);
      Ia.size = e.length;
    }
    if (Da && (AscCommon.Rd.gT =
      [], AscCommon.Rd.EGc(), AscCommon.Rd.Skb(), AscCommon.Rd.j5c(), !0 === f.NATIVE_EDITOR_ENJINE && f['native'].AddImageInChanges)) for (e = AscCommon.Rd.sCa, Da = e.length, Ia = 0; Ia < Da; Ia++) f['native'].AddImageInChanges(e[Ia]);
    af.gUa(!1);
  };
  f.asc_docs_api.prototype.asc_nativeGetFile = function () {
    return (new AscCommonWord.Mg(this.La.Za)).NG();
  };
  f.asc_docs_api.prototype.asc_nativeGetFile2 = function () {
    return (new AscCommonWord.Mg(this.La.Za)).NG(!0, !0);
  };
  f.asc_docs_api.prototype.OVe = function () {
    var e = new AscCommonWord.Mg(this.La.Za);
    return { data: e.NG(!0, !0), header: AscCommon.Jpa.dOa + ';v' + Asc.TPa + ';' + e.memory.wa + ';' };
  };
  f.asc_docs_api.prototype.asc_nativeGetFileData = function () {
    var e = new AscCommonWord.Mg(this.La.Za), Da = e.memory;
    e.NG(!0);
    f['native'].Save_End(AscCommon.Jpa.dOa + ';v' + Asc.TPa + ';' + Da.wa + ';', Da.wa);
    return Da.Lo.data;
  };
  f.asc_docs_api.prototype.asc_nativeGetHtml = function () {
    var e = sh.pnc;
    sh.pnc = !1;
    this.La.Za.gh();
    var f = new AscCommon.jMc(this);
    f.Qb();
    f = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body>' +
      f.RDb() + '</body></html>';
    this.La.Za.kd();
    sh.pnc = e;
    return f;
  };
  f.asc_docs_api.prototype.asc_AddHtml = function (Da) {
    var Ia = e.getElementById(Da);
    (Da = f.frames[Da]) && null != Da.document && null != Da.document.body && (Ia.style.display = 'block', this.La.Za.Jg(), this.PIc(!0), AscCommon.REd(this, AscCommon.Fs.Ve, Da.document.body, Ia), this.PIc(!1), this.La.Za.rg());
    Ia && e.body.removeChild(Ia);
  };
  f.asc_docs_api.prototype.asc_nativeCalculate = function () {
  };
  f.asc_docs_api.prototype.asc_nativePrint = function (e, Da, Ia) {
    if (void 0 === e &&
      void 0 === Da) {
      if (void 0 !== f.AscDesktopEditor) {
        e = this.La.Cd;
        1 == (Ia & 1) && e.W9f();
        Da = e.zRc ? e.zRc.yb : e;
        var Ha = Math.min(Da.mh, Da.Q5);
        f.AscDesktopEditor.Print_Start(this.qsf, Ha, '', e.zRc ? 0 : this.P6e());
        var Ra = new AscCommon.OFb;
        Ra.zHc(AscCommon.PP.iI);
        Ra.Wx = new AscCommon.$X;
        var Pa = this.Oq;
        this.Oq = !1;
        for (var Za = 0; Za < Ha; Za++) Ra.Memory.ck(0), Ra.Wx.spa(), Ia = Da.sl[Za], Ra.afb(Ia.Gy, Ia.GA), Da.Za.Jga(Za, Ra), Ra.Dhb(), f.AscDesktopEditor.Print_Page(Ra.Memory.z9(), Ia.Gy, Ia.GA);
        this.Oq = Pa;
        e.zRc = null;
        f.AscDesktopEditor.Print_End();
      }
    } else Ia =
      this.La.Cd.sl[Da], e.afb(Ia.Gy, Ia.GA), this.La.Za.Jga(Da, e), e.Dhb();
  };
  f.asc_docs_api.prototype.asc_nativePrintPagesCount = function () {
    return this.La.Cd.mh;
  };
  f.asc_docs_api.prototype.asc_nativeGetPDF = function (e) {
    var Da = this.asc_nativePrintPagesCount();
    256 & e && (Da = 1);
    e = new AscCommon.OFb;
    e.zHc(AscCommon.PP.iI);
    e.Wx = new AscCommon.$X;
    var Ia = this.Oq;
    this.Oq = !1;
    for (var Ha = 0; Ha < Da; Ha++) this.asc_nativePrint(e, Ha);
    this.Oq = Ia;
    f['native'].Save_End('', e.Memory.wa);
    return e.Memory.data;
  };
  f.asc_docs_api.prototype.Add_Text =
    function (e) {
      this.La.Za.gBe(e);
    };
  f.asc_docs_api.prototype.Add_NewParagraph = function () {
    var e = this.La.Za;
    !1 === e.jf(AscCommon.Uka) && (e.Jg(AscDFH.yQc), e.ix(!0), e.rg());
  };
  f.asc_docs_api.prototype.Cursor_MoveLeft = function () {
    this.La.Za.Ju();
  };
  f.asc_docs_api.prototype.Cursor_MoveRight = function () {
    this.La.Za.gu();
  };
  f.asc_docs_api.prototype.Cursor_MoveUp = function () {
    this.La.Za.pG();
  };
  f.asc_docs_api.prototype.Cursor_MoveDown = function () {
    this.La.Za.oG();
  };
  f.asc_docs_api.prototype.Get_DocumentRecalcId = function () {
    return this.La.Za.dW;
  };
  f.asc_docs_api.prototype.asc_IsSpellCheckCurrentWord = function () {
    return this.r2c;
  };
  f.asc_docs_api.prototype.asc_putSpellCheckCurrentWord = function (e) {
    this.r2c = e;
  };
  f.asc_docs_api.prototype.asc_setParagraphStylesSizes = function (e, Da) {
    f.AscCommonWord && f.AscCommonWord.Kfa ? (AscCommonWord.Kfa.TTa = e, AscCommonWord.Kfa.MPa = Da) : (AscCommon.Pbg = e, AscCommon.Obg = Da);
  };
  Ha.prototype.BMf = function (e, f) {
    this.La.Cd && this.La.Cd.BMf(e, f);
  };
  f.asc_docs_api.prototype.pluginMethod_OpenFile = function (e, f) {
    this.OQf();
    this.m5.TQd = !0;
    this.rRd(this.qsf, e);
    f && this.gFg(f);
    this.FEb = Asc.rDb.fNc;
  };
  f.asc_docs_api.prototype.pluginMethod_GetFields = function () {
    return this.tEg();
  };
  f.asc_docs_api.prototype.pluginMethod_InsertAndReplaceContentControls = function (e) {
    return (new Da(this, e)).start();
  };
  f.asc_docs_api.prototype.pluginMethod_RemoveContentControls = function (e) {
    return (new Da(this, e)).delete();
  };
  f.asc_docs_api.prototype.pluginMethod_GetAllContentControls = function () {
    for (var e = this.La.Za.Ov(), f = [], Da, Ia = 0; Ia < e.length; Ia++) Da = e[Ia].Hhb(), f.push({
      Tag: Da.Cx,
      Id: Da.Ja, Lock: Da.Hf, InternalId: Da.yfb
    });
    return f;
  };
  f.asc_docs_api.prototype.pluginMethod_AddContentControl = function (e, f) {
    if (f) {
      var Da = new AscCommon.QOd;
      Da.Ja = f.Id;
      Da.Cx = f.Tag;
      Da.Hf = f.Lock;
      Da.ZA = f.Alias;
      void 0 !== f.Appearance && (Da.Py = f.Appearance);
      void 0 !== f.Color && (Da.Aa = new Asc.Gxa(f.Color.R, f.Color.G, f.Color.B));
    }
    if (e = this.ufg(e, Da)) return { Tag: e.Cx, Id: e.Ja, Lock: e.Hf, InternalId: e.yfb };
  };
  f.asc_docs_api.prototype.pluginMethod_RemoveContentControl = function (e) {
    return this.Ofg(e);
  };
  f.asc_docs_api.prototype.pluginMethod_GetCurrentContentControl =
    function () {
      return this.Kfg();
    };
  f.asc_docs_api.prototype.pluginMethod_GetCurrentContentControlPr = function () {
    return this.Jfg();
  };
  f.asc_docs_api.prototype.pluginMethod_SelectContentControl = function (e) {
    var f = this.c2a();
    f && f.Dsa(e);
  };
  f.asc_docs_api.prototype.pluginMethod_MoveCursorToContentControl = function (e, f) {
    var Da = this.c2a();
    Da && Da.Q3b(e, f);
  };
  f.asc_docs_api.prototype.pluginMethod_GetSelectedText = function () {
    var e = this.c2a();
    if (e) return e.wq(!1, { txa: !0, OHc: !0 });
  };
  f.asc_docs_api.prototype.pluginMethod_RemoveSelectedContent =
    function () {
      var e = this.c2a();
      e && e.yg() && !1 === e.jf(AscCommon.sna, null, !0, e.APa()) && (e.Jg(AscDFH.wQc), e.xg(-1, !0), e.rg());
    };
  f.asc_docs_api.prototype.pluginMethod_AddComment = function (e, f) {
    var Da = new Va;
    e && Da.R0b(e);
    f && Da.S0b(f);
    this.PNb(Da);
  };
  f.asc_docs_api.prototype.pluginMethod_SearchAndReplace = function (e) {
    var f = e.replaceString;
    this.La.Za.by(e.searchString, { oIa: void 0 !== e.matchCase ? e.S_f : !0 }) && this.La.Za.ZHc(f, !0, null, !1);
  };
  f.asc_docs_api.prototype.pluginMethod_GetFileHTML = function () {
    return this.dsf(!0);
  };
  Ha.prototype.THd = function () {
    this.La.ns && (this.La.IId(), this.La.ns.dFf());
  };
  Ha.prototype.Zhd = function () {
    this.La.ns && this.La.IId();
  };
  Ha.prototype.Kod = function () {
    return 'Arial';
  };
  Ha.prototype.Goc = function () {
    return 11;
  };
  Ha.prototype.hid = function () {
    return this.La && this.La.Za && this.La.Za.sT || null;
  };
  Ha.prototype.Ooc = function () {
    return this.La && this.La.Za && this.La.Za.KF;
  };
  Ha.prototype.Wid = function (e) {
    var f = this.Ooc();
    if (f) {
      var Da = this.La.Za;
      !1 === Da.jf(AscCommon.Bld, null) && (Da.Jg(AscDFH.sAf), f.M2b(e), Da.rg(!0));
    }
  };
  Ha.prototype.JHg = function () {
    return null !== this.La.Za ? AscCommon.sVf !== this.La.Za.Vs.e6 : !1;
  };
  f.Asc = f.Asc || {};
  Pa.prototype.get_PageWidth = Pa.prototype.MOg;
  Pa.prototype.get_PageHeight = Pa.prototype.KOg;
  Pa.prototype.get_MarginLeft = Pa.prototype.DOg;
  Pa.prototype.get_MarginRight = Pa.prototype.EOg;
  Pa.prototype.get_MarginTop = Pa.prototype.FOg;
  Pa.prototype.get_MarginBottom = Pa.prototype.COg;
  ab.prototype.get_Type = ab.prototype.BO;
  ab.prototype.put_Type = ab.prototype.FK;
  ab.prototype.get_Position = ab.prototype.E5b;
  ab.prototype.put_Position =
    ab.prototype.x6b;
  ab.prototype.get_DifferentFirst = ab.prototype.jOg;
  ab.prototype.put_DifferentFirst = ab.prototype.TRg;
  ab.prototype.get_DifferentEvenOdd = ab.prototype.iOg;
  ab.prototype.put_DifferentEvenOdd = ab.prototype.SRg;
  ab.prototype.get_LinkToPrevious = ab.prototype.vOg;
  ab.prototype.get_Locked = ab.prototype.eQc;
  ab.prototype.get_StartPageNumber = ab.prototype.$Og;
  ab.prototype.put_StartPageNumber = ab.prototype.JSg;
  f.Asc.CMailMergeSendData = f.Asc.vWg = bb;
  bb.prototype.get_From = bb.prototype.pOg;
  bb.prototype.put_From =
    bb.prototype.WRg;
  bb.prototype.get_To = bb.prototype.bPg;
  bb.prototype.put_To = bb.prototype.SSg;
  bb.prototype.get_Subject = bb.prototype.aPg;
  bb.prototype.put_Subject = bb.prototype.LSg;
  bb.prototype.get_MailFormat = bb.prototype.flg;
  bb.prototype.put_MailFormat = bb.prototype.nSg;
  bb.prototype.get_FileName = bb.prototype.oOg;
  bb.prototype.put_FileName = bb.prototype.URg;
  bb.prototype.get_Message = bb.prototype.HOg;
  bb.prototype.put_Message = bb.prototype.pSg;
  bb.prototype.get_RecordFrom = bb.prototype.ilg;
  bb.prototype.put_RecordFrom =
    bb.prototype.xSg;
  bb.prototype.get_RecordTo = bb.prototype.jlg;
  bb.prototype.put_RecordTo = bb.prototype.ySg;
  bb.prototype.get_RecordCount = bb.prototype.ROg;
  bb.prototype.put_RecordCount = bb.prototype.Tqg;
  bb.prototype.get_UserId = bb.prototype.Aqa;
  bb.prototype.put_UserId = bb.prototype.d_a;
  f.Asc.CAscFootnotePr = f.Asc.CGf = nb;
  nb.prototype.get_Pos = nb.prototype.I1a;
  nb.prototype.put_Pos = nb.prototype.e2a;
  nb.prototype.get_NumStart = nb.prototype.dAf;
  nb.prototype.put_NumStart = nb.prototype.iEf;
  nb.prototype.get_NumFormat = nb.prototype.bAf;
  nb.prototype.put_NumFormat = nb.prototype.gEf;
  nb.prototype.get_NumRestart = nb.prototype.cAf;
  nb.prototype.put_NumRestart = nb.prototype.hEf;
  f.Asc.asc_docs_api = Ha;
  Ha.prototype.LoadFontsFromServer = Ha.prototype.lcc;
  Ha.prototype.SetCollaborativeMarksShowType = Ha.prototype.XRd;
  Ha.prototype.GetCollaborativeMarksShowType = Ha.prototype.iQd;
  Ha.prototype.Clear_CollaborativeMarks = Ha.prototype.fHa;
  Ha.prototype.SetLanguage = Ha.prototype.xGd;
  Ha.prototype.asc_GetFontThumbnailsPath = Ha.prototype.FPe;
  Ha.prototype.TranslateStyleName =
    Ha.prototype.Yyg;
  Ha.prototype.CheckChangedDocument = Ha.prototype.KVc;
  Ha.prototype.SetUnchangedDocument = Ha.prototype.MMf;
  Ha.prototype.SetDocumentModified = Ha.prototype.dIc;
  Ha.prototype.isDocumentModified = Ha.prototype.Mcf;
  Ha.prototype.asc_isDocumentCanSave = Ha.prototype.Eid;
  Ha.prototype.asc_getCanUndo = Ha.prototype.LQe;
  Ha.prototype.asc_getCanRedo = Ha.prototype.KQe;
  Ha.prototype.sync_BeginCatchSelectedElements = Ha.prototype.UNd;
  Ha.prototype.sync_EndCatchSelectedElements = Ha.prototype.gCd;
  Ha.prototype.getSelectedElements =
    Ha.prototype.yXf;
  Ha.prototype.sync_ChangeLastSelectedElement = Ha.prototype.s5f;
  Ha.prototype.asc_getEditorPermissions = Ha.prototype.LRe;
  Ha.prototype.asc_setDocInfo = Ha.prototype.BOc;
  Ha.prototype.asc_setLocale = Ha.prototype.eId;
  Ha.prototype.asc_LoadDocument = Ha.prototype.wOc;
  Ha.prototype.SetTextBoxInputMode = Ha.prototype.Qwe;
  Ha.prototype.GetTextBoxInputMode = Ha.prototype.Rde;
  Ha.prototype.ChangeReaderMode = Ha.prototype.Irf;
  Ha.prototype.SetReaderModeOnly = Ha.prototype.zyg;
  Ha.prototype.IncreaseReaderFontSize = Ha.prototype.xKf;
  Ha.prototype.DecreaseReaderFontSize = Ha.prototype.vIf;
  Ha.prototype.CreateCSS = Ha.prototype.ksf;
  Ha.prototype.GetCopyPasteDivId = Ha.prototype.rwg;
  Ha.prototype.ContentToHTML = Ha.prototype.dsf;
  Ha.prototype.InitEditor = Ha.prototype.lFd;
  Ha.prototype.InitViewer = Ha.prototype.mtf;
  Ha.prototype.OpenDocument = Ha.prototype.eke;
  Ha.prototype.OpenDocument2 = Ha.prototype.rRd;
  Ha.prototype.asc_getDocumentName = Ha.prototype.IRe;
  Ha.prototype.asc_getAppProps = Ha.prototype.hid;
  Ha.prototype.asc_getCoreProps = Ha.prototype.oRe;
  Ha.prototype.asc_setCoreProps =
    Ha.prototype.Wid;
  Ha.prototype.asc_isCompatibilityMode = Ha.prototype.JHg;
  Ha.prototype.asc_registerCallback = Ha.prototype.CVa;
  Ha.prototype.asc_unregisterCallback = Ha.prototype.EZe;
  Ha.prototype.asc_checkNeedCallback = Ha.prototype.ikc;
  Ha.prototype.asc_getPropertyEditorShapes = Ha.prototype.mUe;
  Ha.prototype.asc_getPropertyEditorTextArts = Ha.prototype.nUe;
  Ha.prototype.get_PropertyThemeColors = Ha.prototype.QOg;
  Ha.prototype._coAuthoringSetChange = Ha.prototype.lLe;
  Ha.prototype._coAuthoringSetChanges = Ha.prototype.xvf;
  Ha.prototype.asc_coAuthoringChatSendMessage = Ha.prototype.bQe;
  Ha.prototype.asc_coAuthoringChatGetMessages = Ha.prototype.aQe;
  Ha.prototype.asc_coAuthoringGetUsers = Ha.prototype.cQe;
  Ha.prototype.asc_coAuthoringDisconnect = Ha.prototype.yOc;
  Ha.prototype.asc_SpellCheckDisconnect = Ha.prototype.Gwf;
  Ha.prototype._onUpdateDocumentCanSave = Ha.prototype.q3a;
  Ha.prototype.put_FramePr = Ha.prototype.VRg;
  Ha.prototype.asyncFontEndLoaded_MathDraw = Ha.prototype.GRf;
  Ha.prototype.sendMathTypesToMenu = Ha.prototype.QRc;
  Ha.prototype.asyncFontEndLoaded_DropCap =
    Ha.prototype.Agg;
  Ha.prototype.asc_addDropCap = Ha.prototype.yFg;
  Ha.prototype.removeDropcap = Ha.prototype.wTg;
  Ha.prototype.get_TextProps = Ha.prototype.rWd;
  Ha.prototype.GetJSONLogicDocument = Ha.prototype.xwg;
  Ha.prototype.get_ContentCount = Ha.prototype.elg;
  Ha.prototype.select_Element = Ha.prototype.UTg;
  Ha.prototype.UpdateTextPr = Ha.prototype.MUa;
  Ha.prototype.UpdateParagraphProp = Ha.prototype.k3a;
  Ha.prototype.Undo = Ha.prototype.Ll;
  Ha.prototype.Redo = Ha.prototype.Yg;
  Ha.prototype.Copy = Ha.prototype.Wa;
  Ha.prototype.Update_ParaTab =
    Ha.prototype.f1a;
  Ha.prototype.Cut = Ha.prototype.lIf;
  Ha.prototype.Paste = Ha.prototype.zLf;
  Ha.prototype.Share = Ha.prototype.TMf;
  Ha.prototype.asc_Save = Ha.prototype.cba;
  Ha.prototype.forceSave = Ha.prototype.SWa;
  Ha.prototype.asc_setIsForceSaveOnUserSave = Ha.prototype.KYe;
  Ha.prototype.asc_DownloadAs = Ha.prototype.Xhd;
  Ha.prototype.asc_DownloadAsMailMerge = Ha.prototype.Ifg;
  Ha.prototype.asc_DownloadOrigin = Ha.prototype.qEg;
  Ha.prototype.Resize = Ha.prototype.Ty;
  Ha.prototype.AddURL = Ha.prototype.dGf;
  Ha.prototype.Help = Ha.prototype.sKf;
  Ha.prototype.asc_setAdvancedOptions = Ha.prototype.DVa;
  Ha.prototype.asc_decodeBuffer = Ha.prototype.Hwf;
  Ha.prototype.SetFontRenderingMode = Ha.prototype.ove;
  Ha.prototype.startGetDocInfo = Ha.prototype.Y4f;
  Ha.prototype.stopGetDocInfo = Ha.prototype.a5f;
  Ha.prototype.sync_DocInfoCallback = Ha.prototype.L1d;
  Ha.prototype.sync_GetDocInfoStartCallback = Ha.prototype.Lpf;
  Ha.prototype.sync_GetDocInfoStopCallback = Ha.prototype.Mpf;
  Ha.prototype.sync_GetDocInfoEndCallback = Ha.prototype.WNd;
  Ha.prototype.sync_CanUndoCallback =
    Ha.prototype.BLc;
  Ha.prototype.sync_CanRedoCallback = Ha.prototype.ALc;
  Ha.prototype.can_CopyCut = Ha.prototype.YSf;
  Ha.prototype.sync_CanCopyCutCallback = Ha.prototype.nFf;
  Ha.prototype.setStartPointHistory = Ha.prototype.Uof;
  Ha.prototype.setEndPointHistory = Ha.prototype.hof;
  Ha.prototype.sync_CursorLockCallBack = Ha.prototype.XUg;
  Ha.prototype.sync_UndoCallBack = Ha.prototype.T5f;
  Ha.prototype.sync_RedoCallBack = Ha.prototype.F5f;
  Ha.prototype.sync_CopyCallBack = Ha.prototype.u5f;
  Ha.prototype.sync_CutCallBack = Ha.prototype.v5f;
  Ha.prototype.sync_PasteCallBack = Ha.prototype.E5f;
  Ha.prototype.sync_ShareCallBack = Ha.prototype.I5f;
  Ha.prototype.sync_SaveCallBack = Ha.prototype.G5f;
  Ha.prototype.sync_DownloadAsCallBack = Ha.prototype.w5f;
  Ha.prototype.sync_StartAction = Ha.prototype.fG;
  Ha.prototype.sync_EndAction = Ha.prototype.hx;
  Ha.prototype.sync_AddURLCallback = Ha.prototype.p5f;
  Ha.prototype.sync_ErrorCallback = Ha.prototype.x5f;
  Ha.prototype.sync_HelpCallback = Ha.prototype.y5f;
  Ha.prototype.sync_UpdateZoom = Ha.prototype.U5f;
  Ha.prototype.ClearPropObjCallback =
    Ha.prototype.sEd;
  Ha.prototype.CollectHeaders = Ha.prototype.PHf;
  Ha.prototype.GetActiveHeader = Ha.prototype.BJf;
  Ha.prototype.gotoHeader = Ha.prototype.lYf;
  Ha.prototype.sync_ChangeActiveHeaderCallback = Ha.prototype.r5f;
  Ha.prototype.sync_ReturnHeadersCallback = Ha.prototype.Tpf;
  Ha.prototype.asc_searchEnabled = Ha.prototype.TXe;
  Ha.prototype.asc_findText = Ha.prototype.fQe;
  Ha.prototype.asc_replaceText = Ha.prototype.RXe;
  Ha.prototype.asc_isSelectSearchingResults = Ha.prototype.KHg;
  Ha.prototype.sync_ReplaceAllCallback =
    Ha.prototype.Spf;
  Ha.prototype.sync_SearchEndCallback = Ha.prototype.DLc;
  Ha.prototype.put_TextPrFontName = Ha.prototype.m2f;
  Ha.prototype.put_TextPrFontSize = Ha.prototype.n2f;
  Ha.prototype.put_TextPrBold = Ha.prototype.l2f;
  Ha.prototype.put_TextPrItalic = Ha.prototype.o2f;
  Ha.prototype.put_TextPrUnderline = Ha.prototype.r2f;
  Ha.prototype.put_TextPrStrikeout = Ha.prototype.q2f;
  Ha.prototype.put_TextPrDStrikeout = Ha.prototype.OSg;
  Ha.prototype.put_TextPrSpacing = Ha.prototype.RSg;
  Ha.prototype.put_TextPrCaps = Ha.prototype.NSg;
  Ha.prototype.put_TextPrSmallCaps = Ha.prototype.QSg;
  Ha.prototype.put_TextPrPosition = Ha.prototype.PSg;
  Ha.prototype.put_TextPrLang = Ha.prototype.p2f;
  Ha.prototype.put_PrLineSpacing = Ha.prototype.c2f;
  Ha.prototype.put_LineSpacingBeforeAfter = Ha.prototype.V1f;
  Ha.prototype.FontSizeIn = Ha.prototype.WEd;
  Ha.prototype.FontSizeOut = Ha.prototype.XEd;
  Ha.prototype.put_Borders = Ha.prototype.ORg;
  Ha.prototype.sync_BoldCallBack = Ha.prototype.Jpf;
  Ha.prototype.sync_ItalicCallBack = Ha.prototype.Ppf;
  Ha.prototype.sync_UnderlineCallBack =
    Ha.prototype.dqf;
  Ha.prototype.sync_StrikeoutCallBack = Ha.prototype.Vpf;
  Ha.prototype.sync_TextPrFontFamilyCallBack = Ha.prototype.$pf;
  Ha.prototype.sync_TextPrFontSizeCallBack = Ha.prototype.aqf;
  Ha.prototype.sync_PrLineSpacingCallBack = Ha.prototype.tFf;
  Ha.prototype.paraApply = Ha.prototype.j1f;
  Ha.prototype.put_PrAlign = Ha.prototype.Z1f;
  Ha.prototype.put_TextPrBaseline = Ha.prototype.k2f;
  Ha.prototype.put_ListType = Ha.prototype.W1f;
  Ha.prototype.asc_ContinueNumbering = Ha.prototype.jEg;
  Ha.prototype.asc_RestartNumbering =
    Ha.prototype.$Eg;
  Ha.prototype.asc_GetCurrentNumberingId = Ha.prototype.zEg;
  Ha.prototype.asc_GetCurrentNumberingLvl = Ha.prototype.AEg;
  Ha.prototype.asc_GetCalculatedNumberingValue = Ha.prototype.vEg;
  Ha.prototype.asc_GetNumberingPr = Ha.prototype.GEg;
  Ha.prototype.asc_AddNewNumbering = Ha.prototype.YDg;
  Ha.prototype.asc_ChangeNumberingLvl = Ha.prototype.hEg;
  Ha.prototype.put_Style = Ha.prototype.KSg;
  Ha.prototype.SetDeviceInputHelperId = Ha.prototype.zMf;
  Ha.prototype.put_ShowSnapLines = Ha.prototype.e2f;
  Ha.prototype.get_ShowSnapLines =
    Ha.prototype.XXf;
  Ha.prototype.put_ShowParaMarks = Ha.prototype.Xxd;
  Ha.prototype.get_ShowParaMarks = Ha.prototype.Upd;
  Ha.prototype.put_ShowTableEmptyLine = Ha.prototype.f2f;
  Ha.prototype.get_ShowTableEmptyLine = Ha.prototype.YXf;
  Ha.prototype.put_PageBreak = Ha.prototype.tSg;
  Ha.prototype.put_WidowControl = Ha.prototype.jEf;
  Ha.prototype.put_KeepLines = Ha.prototype.eEf;
  Ha.prototype.put_KeepNext = Ha.prototype.fEf;
  Ha.prototype.put_AddSpaceBetweenPrg = Ha.prototype.NRg;
  Ha.prototype.put_LineHighLight = Ha.prototype.fSg;
  Ha.prototype.put_TextColor =
    Ha.prototype.j2f;
  Ha.prototype.put_ParagraphShade = Ha.prototype.wSg;
  Ha.prototype.put_PrIndent = Ha.prototype.a2f;
  Ha.prototype.put_ParagraphOutlineLvl = Ha.prototype.vSg;
  Ha.prototype.IncreaseIndent = Ha.prototype.iIb;
  Ha.prototype.DecreaseIndent = Ha.prototype.PGb;
  Ha.prototype.put_PrIndentRight = Ha.prototype.b2f;
  Ha.prototype.put_PrFirstLineIndent = Ha.prototype.$1f;
  Ha.prototype.put_Margins = Ha.prototype.oSg;
  Ha.prototype.getFocusObject = Ha.prototype.WWf;
  Ha.prototype.sync_VerticalAlign = Ha.prototype.eqf;
  Ha.prototype.sync_PrAlignCallBack =
    Ha.prototype.bOd;
  Ha.prototype.sync_ListType = Ha.prototype.YNd;
  Ha.prototype.sync_TextColor = Ha.prototype.xFf;
  Ha.prototype.sync_TextHighLight = Ha.prototype.yFf;
  Ha.prototype.sync_TextSpacing = Ha.prototype.cqf;
  Ha.prototype.sync_TextDStrikeout = Ha.prototype.Xpf;
  Ha.prototype.sync_TextCaps = Ha.prototype.Wpf;
  Ha.prototype.sync_TextSmallCaps = Ha.prototype.bqf;
  Ha.prototype.sync_TextPosition = Ha.prototype.Zpf;
  Ha.prototype.sync_TextLangCallBack = Ha.prototype.Ypf;
  Ha.prototype.sync_ParaStyleName = Ha.prototype.aOd;
  Ha.prototype.sync_ParaSpacingLine =
    Ha.prototype.$Nd;
  Ha.prototype.sync_PageBreakCallback = Ha.prototype.sFf;
  Ha.prototype.sync_WidowControlCallback = Ha.prototype.Jsg;
  Ha.prototype.sync_KeepNextCallback = Ha.prototype.Esg;
  Ha.prototype.sync_KeepLinesCallback = Ha.prototype.qFf;
  Ha.prototype.sync_ShowParaMarksCallback = Ha.prototype.L5f;
  Ha.prototype.sync_SpaceBetweenPrgCallback = Ha.prototype.M5f;
  Ha.prototype.sync_PrPropCallback = Ha.prototype.Rpf;
  Ha.prototype.sync_MathPropCallback = Ha.prototype.Qpf;
  Ha.prototype.sync_EndAddShape = Ha.prototype.yka;
  Ha.prototype.SetDrawingFreeze =
    Ha.prototype.tuf;
  Ha.prototype.change_PageOrient = Ha.prototype.ZKg;
  Ha.prototype.get_DocumentOrientation = Ha.prototype.bKd;
  Ha.prototype.change_DocSize = Ha.prototype.YKg;
  Ha.prototype.get_DocumentWidth = Ha.prototype.mOg;
  Ha.prototype.get_DocumentHeight = Ha.prototype.kOg;
  Ha.prototype.put_AddPageBreak = Ha.prototype.Lqg;
  Ha.prototype.put_AddColumnBreak = Ha.prototype.MRg;
  Ha.prototype.Update_ParaInd = Ha.prototype.cHd;
  Ha.prototype.Internal_Update_Ind_FirstLine = Ha.prototype.ntf;
  Ha.prototype.Internal_Update_Ind_Left = Ha.prototype.otf;
  Ha.prototype.Internal_Update_Ind_Right = Ha.prototype.ptf;
  Ha.prototype.put_PageNum = Ha.prototype.uSg;
  Ha.prototype.put_HeadersAndFootersDistance = Ha.prototype.YRg;
  Ha.prototype.HeadersAndFooters_DifferentFirstPage = Ha.prototype.Swg;
  Ha.prototype.HeadersAndFooters_DifferentOddandEvenPage = Ha.prototype.Twg;
  Ha.prototype.HeadersAndFooters_LinkToPrevious = Ha.prototype.Uwg;
  Ha.prototype.asc_SetSectionStartPage = Ha.prototype.oFg;
  Ha.prototype.sync_DocSizeCallback = Ha.prototype.mSc;
  Ha.prototype.sync_PageOrientCallback =
    Ha.prototype.CLc;
  Ha.prototype.sync_HeadersAndFootersPropCallback = Ha.prototype.M1d;
  Ha.prototype.put_Table = Ha.prototype.i2f;
  Ha.prototype.addRowAbove = Ha.prototype.ZPf;
  Ha.prototype.addRowBelow = Ha.prototype.$Pf;
  Ha.prototype.addColumnLeft = Ha.prototype.UPf;
  Ha.prototype.addColumnRight = Ha.prototype.VPf;
  Ha.prototype.remRow = Ha.prototype.P2f;
  Ha.prototype.remColumn = Ha.prototype.O2f;
  Ha.prototype.remTable = Ha.prototype.Q2f;
  Ha.prototype.selectRow = Ha.prototype.o3f;
  Ha.prototype.selectColumn = Ha.prototype.n3f;
  Ha.prototype.selectCell =
    Ha.prototype.bFa;
  Ha.prototype.selectTable = Ha.prototype.p3f;
  Ha.prototype.setColumnWidth = Ha.prototype.x3f;
  Ha.prototype.setRowHeight = Ha.prototype.H6b;
  Ha.prototype.set_TblDistanceFromText = Ha.prototype.f4f;
  Ha.prototype.CheckBeforeMergeCells = Ha.prototype.wHf;
  Ha.prototype.CheckBeforeSplitCells = Ha.prototype.xHf;
  Ha.prototype.MergeCells = Ha.prototype.R0a;
  Ha.prototype.SplitCell = Ha.prototype.$Mf;
  Ha.prototype.asc_DistributeTableCells = Ha.prototype.PQf;
  Ha.prototype.widthTable = Ha.prototype.T6f;
  Ha.prototype.put_CellsMargin =
    Ha.prototype.U1f;
  Ha.prototype.set_TblWrap = Ha.prototype.h4f;
  Ha.prototype.set_TblIndentLeft = Ha.prototype.g4f;
  Ha.prototype.set_Borders = Ha.prototype.Y3f;
  Ha.prototype.set_TableBackground = Ha.prototype.d4f;
  Ha.prototype.set_AlignCell = Ha.prototype.X3f;
  Ha.prototype.set_TblAlign = Ha.prototype.e4f;
  Ha.prototype.set_SpacingBetweenCells = Ha.prototype.c4f;
  Ha.prototype.tblApply = Ha.prototype.Z5f;
  Ha.prototype.sync_AddTableCallback = Ha.prototype.o5f;
  Ha.prototype.sync_AlignCellCallback = Ha.prototype.q5f;
  Ha.prototype.sync_TblPropCallback =
    Ha.prototype.FLc;
  Ha.prototype.sync_TblWrapStyleChangedCallback = Ha.prototype.O5f;
  Ha.prototype.sync_TblAlignChangedCallback = Ha.prototype.N5f;
  Ha.prototype.ChangeImageFromFile = Ha.prototype.qHf;
  Ha.prototype.ChangeShapeImageFromFile = Ha.prototype.sHf;
  Ha.prototype.AddImage = Ha.prototype.d3d;
  Ha.prototype.asc_addImage = Ha.prototype.Aqb;
  Ha.prototype.AddImageUrl2 = Ha.prototype.Vtg;
  Ha.prototype.AddImageUrl = Ha.prototype.AOd;
  Ha.prototype.AddImageUrlAction = Ha.prototype.TDd;
  Ha.prototype.AddImageToPage = Ha.prototype.Utg;
  Ha.prototype.asc_getSelectedDrawingObjectsCount = Ha.prototype.xid;
  Ha.prototype.put_ShapesAlign = Ha.prototype.d2f;
  Ha.prototype.DistributeHorizontally = Ha.prototype.JIf;
  Ha.prototype.DistributeVertically = Ha.prototype.KIf;
  Ha.prototype.ImgApply = Ha.prototype.xHc;
  Ha.prototype.set_Size = Ha.prototype.b4f;
  Ha.prototype.set_ConstProportions = Ha.prototype.Z3f;
  Ha.prototype.set_WrapStyle = Ha.prototype.i4f;
  Ha.prototype.deleteImage = Ha.prototype.dVf;
  Ha.prototype.set_ImgDistanceFromText = Ha.prototype.$3f;
  Ha.prototype.set_PositionOnPage =
    Ha.prototype.a4f;
  Ha.prototype.get_OriginalSizeImage = Ha.prototype.TXf;
  Ha.prototype.ShapeApply = Ha.prototype.Cob;
  Ha.prototype.sync_AddImageCallback = Ha.prototype.n5f;
  Ha.prototype.sync_ImgPropCallback = Ha.prototype.vFc;
  Ha.prototype.sync_ImgWrapStyleChangedCallback = Ha.prototype.YUg;
  Ha.prototype.sync_ContextMenuCallback = Ha.prototype.LDa;
  Ha.prototype.sync_MouseMoveStartCallback = Ha.prototype.KZb;
  Ha.prototype.sync_MouseMoveEndCallback = Ha.prototype.JZb;
  Ha.prototype.sync_MouseMoveCallback = Ha.prototype.pla;
  Ha.prototype.can_AddHyperlink =
    Ha.prototype.XSf;
  Ha.prototype.add_Hyperlink = Ha.prototype.hQf;
  Ha.prototype.change_Hyperlink = Ha.prototype.lTf;
  Ha.prototype.remove_Hyperlink = Ha.prototype.V2f;
  Ha.prototype.asc_GetHyperlinkAnchors = Ha.prototype.FEg;
  Ha.prototype.sync_HyperlinkPropCallback = Ha.prototype.oSc;
  Ha.prototype.sync_HyperlinkClickCallback = Ha.prototype.n4a;
  Ha.prototype.sync_CanAddHyperlinkCallback = Ha.prototype.VNd;
  Ha.prototype.sync_DialogAddHyperlink = Ha.prototype.lSc;
  Ha.prototype.sync_DialogAddHyperlink = Ha.prototype.lSc;
  Ha.prototype.sync_SpellCheckCallback =
    Ha.prototype.P1d;
  Ha.prototype.sync_SpellCheckVariantsFound = Ha.prototype.Upf;
  Ha.prototype.asc_replaceMisspelledWord = Ha.prototype.QXe;
  Ha.prototype.asc_ignoreMisspelledWord = Ha.prototype.KVe;
  Ha.prototype.asc_spellCheckAddToDictionary = Ha.prototype.DZe;
  Ha.prototype.asc_spellCheckClearDictionary = Ha.prototype.fId;
  Ha.prototype.asc_setDefaultLanguage = Ha.prototype.nYe;
  Ha.prototype.asc_getDefaultLanguage = Ha.prototype.pRf;
  Ha.prototype.asc_getKeyboardLanguage = Ha.prototype.$Hd;
  Ha.prototype.asc_setSpellCheck = Ha.prototype.CRf;
  Ha.prototype.asc_showComments = Ha.prototype.CZe;
  Ha.prototype.asc_hideComments = Ha.prototype.Did;
  Ha.prototype.asc_addComment = Ha.prototype.PNb;
  Ha.prototype.asc_removeComment = Ha.prototype.PXe;
  Ha.prototype.asc_changeComment = Ha.prototype.ZPe;
  Ha.prototype.asc_selectComment = Ha.prototype.Uid;
  Ha.prototype.asc_showComment = Ha.prototype.bjd;
  Ha.prototype.can_AddQuotedComment = Ha.prototype.qxf;
  Ha.prototype.sync_RemoveComment = Ha.prototype.X2b;
  Ha.prototype.sync_AddComment = Ha.prototype.aPa;
  Ha.prototype.sync_ShowComment =
    Ha.prototype.T6b;
  Ha.prototype.sync_HideComment = Ha.prototype.M_a;
  Ha.prototype.sync_UpdateCommentPosition = Ha.prototype.cOd;
  Ha.prototype.sync_ChangeCommentData = Ha.prototype.kSc;
  Ha.prototype.sync_LockComment = Ha.prototype.N1d;
  Ha.prototype.sync_UnLockComment = Ha.prototype.Q1d;
  Ha.prototype.sync_LockHeaderFooters = Ha.prototype.B5f;
  Ha.prototype.sync_LockDocumentProps = Ha.prototype.z5f;
  Ha.prototype.sync_UnLockHeaderFooters = Ha.prototype.S5f;
  Ha.prototype.sync_UnLockDocumentProps = Ha.prototype.Q5f;
  Ha.prototype.sync_CollaborativeChanges =
    Ha.prototype.Kpf;
  Ha.prototype.sync_LockDocumentSchema = Ha.prototype.A5f;
  Ha.prototype.sync_UnLockDocumentSchema = Ha.prototype.R5f;
  Ha.prototype.zoomIn = Ha.prototype.b7f;
  Ha.prototype.zoomOut = Ha.prototype.c7f;
  Ha.prototype.zoomFitToPage = Ha.prototype.irf;
  Ha.prototype.zoomFitToWidth = Ha.prototype.jrf;
  Ha.prototype.zoomCustomMode = Ha.prototype.hrf;
  Ha.prototype.zoom100 = Ha.prototype.a7f;
  Ha.prototype.zoom = Ha.prototype.zoom;
  Ha.prototype.goToPage = Ha.prototype.wLa;
  Ha.prototype.getCountPages = Ha.prototype.M6e;
  Ha.prototype.getCurrentPage =
    Ha.prototype.P6e;
  Ha.prototype.sync_countPagesCallback = Ha.prototype.dOd;
  Ha.prototype.sync_currentPageCallback = Ha.prototype.U6b;
  Ha.prototype.asc_enableKeyEvents = Ha.prototype.b7;
  Ha.prototype.GenerateStyles = Ha.prototype.O5a;
  Ha.prototype.asyncFontsDocumentEndLoaded = Ha.prototype.hId;
  Ha.prototype.CreateFontsCharMap = Ha.prototype.cvg;
  Ha.prototype.sync_SendThemeColors = Ha.prototype.O1d;
  Ha.prototype.asc_GetCurrentColorSchemeName = Ha.prototype.Yhd;
  Ha.prototype.ChangeColorScheme = Ha.prototype.pHf;
  Ha.prototype.UpdateInterfaceState =
    Ha.prototype.lda;
  Ha.prototype.asyncFontEndLoaded = Ha.prototype.gId;
  Ha.prototype.asyncImageEndLoaded = Ha.prototype.ifa;
  Ha.prototype.asyncImageEndLoadedBackground = Ha.prototype.tlc;
  Ha.prototype.IsAsyncOpenDocumentImages = Ha.prototype.pFd;
  Ha.prototype.pre_Paste = Ha.prototype.wM;
  Ha.prototype.pre_Save = Ha.prototype.C0d;
  Ha.prototype.SyncLoadImages = Ha.prototype.Oyg;
  Ha.prototype.SyncLoadImages_callback = Ha.prototype.Nbg;
  Ha.prototype.initEvents2MobileAdvances = Ha.prototype.lKc;
  Ha.prototype.ViewScrollToX = Ha.prototype.iOf;
  Ha.prototype.ViewScrollToY = Ha.prototype.jOf;
  Ha.prototype.GetDocWidthPx = Ha.prototype.LJf;
  Ha.prototype.GetDocHeightPx = Ha.prototype.KJf;
  Ha.prototype.ClearSearch = Ha.prototype.NHf;
  Ha.prototype.GetCurrentVisiblePage = Ha.prototype.bFd;
  Ha.prototype.asc_setAutoSaveGap = Ha.prototype.WXe;
  Ha.prototype.asc_SetDocumentPlaceChangedEnabled = Ha.prototype.OPe;
  Ha.prototype.asc_SetViewRulers = Ha.prototype.RPe;
  Ha.prototype.asc_SetViewRulersChange = Ha.prototype.jRf;
  Ha.prototype.asc_GetViewRulers = Ha.prototype.YQf;
  Ha.prototype.asc_SetDocumentUnits =
    Ha.prototype.hRf;
  Ha.prototype.GoToHeader = Ha.prototype.gKf;
  Ha.prototype.GoToFooter = Ha.prototype.Qwg;
  Ha.prototype.ExitHeader_Footer = Ha.prototype.bJf;
  Ha.prototype.GetCurrentPixOffsetY = Ha.prototype.IJf;
  Ha.prototype.SetPaintFormat = Ha.prototype.HMf;
  Ha.prototype.ChangeShapeType = Ha.prototype.tHf;
  Ha.prototype.sync_PaintFormatCallback = Ha.prototype.S6b;
  Ha.prototype.SetMarkerFormat = Ha.prototype.xyg;
  Ha.prototype.sync_MarkerFormatCallback = Ha.prototype.VEb;
  Ha.prototype.StartAddShape = Ha.prototype.yye;
  Ha.prototype.AddShapeOnCurrentPage =
    Ha.prototype.m3d;
  Ha.prototype.AddTextArt = Ha.prototype.qT;
  Ha.prototype.asc_canEditCrop = Ha.prototype.bid;
  Ha.prototype.asc_startEditCrop = Ha.prototype.djd;
  Ha.prototype.asc_endEditCrop = Ha.prototype.gid;
  Ha.prototype.asc_cropFit = Ha.prototype.eid;
  Ha.prototype.asc_cropFill = Ha.prototype.did;
  Ha.prototype.asc_GetWatermarkProps = Ha.prototype.OEg;
  Ha.prototype.asc_SetWatermarkProps = Ha.prototype.Qfg;
  Ha.prototype.asc_WatermarkRemove = Ha.prototype.vFg;
  Ha.prototype.sync_StartAddShapeCallback = Ha.prototype.ELc;
  Ha.prototype.CanGroup =
    Ha.prototype.Z6d;
  Ha.prototype.CanUnGroup = Ha.prototype.a7d;
  Ha.prototype.CanChangeWrapPolygon = Ha.prototype.Y6d;
  Ha.prototype.StartChangeWrapPolygon = Ha.prototype.Bye;
  Ha.prototype.ClearFormating = Ha.prototype.MHf;
  Ha.prototype.GetSectionInfo = Ha.prototype.Cwg;
  Ha.prototype.add_SectionBreak = Ha.prototype.pDg;
  Ha.prototype.asc_setViewMode = Ha.prototype.EVa;
  Ha.prototype.asc_setRestriction = Ha.prototype.nZe;
  Ha.prototype.OnMouseUp = Ha.prototype.pY;
  Ha.prototype.asyncImageEndLoaded2 = Ha.prototype.p1a;
  Ha.prototype.SetDrawImagePlaceParagraph =
    Ha.prototype.CMf;
  Ha.prototype.asc_getMasterCommentId = Ha.prototype.GTe;
  Ha.prototype.asc_getAnchorPosition = Ha.prototype.kQe;
  Ha.prototype.asc_getChartObject = Ha.prototype.SQe;
  Ha.prototype.asc_addChartDrawingObject = Ha.prototype.XPe;
  Ha.prototype.asc_doubleClickOnChart = Ha.prototype.mRf;
  Ha.prototype.asc_onCloseChartFrame = Ha.prototype.Nkc;
  Ha.prototype.asc_editChartDrawingObject = Ha.prototype.dQe;
  Ha.prototype.asc_getChartPreviews = Ha.prototype.TQe;
  Ha.prototype.asc_getTextArtPreviews = Ha.prototype.gVe;
  Ha.prototype.sync_closeChartEditor =
    Ha.prototype.gqf;
  Ha.prototype.asc_setDrawCollaborationMarks = Ha.prototype.PTd;
  Ha.prototype.asc_AddMath = Ha.prototype.wPe;
  Ha.prototype.asc_AddMath2 = Ha.prototype.Qhd;
  Ha.prototype.asc_AddPageCount = Ha.prototype.ZDg;
  Ha.prototype.asc_StartMailMerge = Ha.prototype.kRf;
  Ha.prototype.asc_StartMailMergeByList = Ha.prototype.VPe;
  Ha.prototype.asc_GetReceptionsCount = Ha.prototype.WQf;
  Ha.prototype.asc_GetMailMergeFieldsNameList = Ha.prototype.SQf;
  Ha.prototype.asc_AddMailMergeField = Ha.prototype.CQf;
  Ha.prototype.asc_SetHighlightMailMergeFields =
    Ha.prototype.iRf;
  Ha.prototype.asc_PreviewMailMergeResult = Ha.prototype.cRf;
  Ha.prototype.asc_EndPreviewMailMergeResult = Ha.prototype.QQf;
  Ha.prototype.sync_StartMailMerge = Ha.prototype.wFf;
  Ha.prototype.sync_PreviewMailMergeResult = Ha.prototype.uFf;
  Ha.prototype.sync_EndPreviewMailMergeResult = Ha.prototype.oFf;
  Ha.prototype.sync_HighlightMailMergeFields = Ha.prototype.Npf;
  Ha.prototype.asc_getMailMergeData = Ha.prototype.vRf;
  Ha.prototype.asc_setMailMergeData = Ha.prototype.BRf;
  Ha.prototype.asc_sendMailMergeData = Ha.prototype.yRf;
  Ha.prototype.asc_GetMailMergeFiledValue = Ha.prototype.TQf;
  Ha.prototype.asc_GetStyleFromFormatting = Ha.prototype.XQf;
  Ha.prototype.asc_AddNewStyle = Ha.prototype.DQf;
  Ha.prototype.asc_RemoveStyle = Ha.prototype.gRf;
  Ha.prototype.asc_RemoveAllCustomStyles = Ha.prototype.fRf;
  Ha.prototype.asc_IsStyleDefault = Ha.prototype.aRf;
  Ha.prototype.asc_IsDefaultStyleChanged = Ha.prototype.$Qf;
  Ha.prototype.asc_GetStyleNameById = Ha.prototype.JEg;
  Ha.prototype.asc_SetTrackRevisions = Ha.prototype.pTd;
  Ha.prototype.asc_IsTrackRevisions =
    Ha.prototype.bRf;
  Ha.prototype.sync_BeginCatchRevisionsChanges = Ha.prototype.jSc;
  Ha.prototype.sync_EndCatchRevisionsChanges = Ha.prototype.nSc;
  Ha.prototype.asc_GetRevisionsChangesStack = Ha.prototype.oTd;
  Ha.prototype.sync_AddRevisionsChange = Ha.prototype.J1d;
  Ha.prototype.asc_AcceptChanges = Ha.prototype.BQf;
  Ha.prototype.asc_RejectChanges = Ha.prototype.eRf;
  Ha.prototype.asc_HaveRevisionsChanges = Ha.prototype.Fwf;
  Ha.prototype.asc_HaveNewRevisionsChanges = Ha.prototype.ZQf;
  Ha.prototype.asc_GetNextRevisionsChange =
    Ha.prototype.UQf;
  Ha.prototype.asc_GetPrevRevisionsChange = Ha.prototype.VQf;
  Ha.prototype.sync_UpdateRevisionsChangesPosition = Ha.prototype.R1d;
  Ha.prototype.asc_AcceptAllChanges = Ha.prototype.AQf;
  Ha.prototype.asc_RejectAllChanges = Ha.prototype.dRf;
  Ha.prototype.asc_FollowRevisionMove = Ha.prototype.sEg;
  Ha.prototype.asc_stopSaving = Ha.prototype.VTd;
  Ha.prototype.asc_continueSaving = Ha.prototype.tTd;
  Ha.prototype.asc_undoAllChanges = Ha.prototype.WTd;
  Ha.prototype.asc_CloseFile = Ha.prototype.OQf;
  Ha.prototype.asc_addComment =
    Ha.prototype.PNb;
  Ha.prototype.asc_SetFastCollaborative = Ha.prototype.PPe;
  Ha.prototype.asc_isOffline = Ha.prototype.LVe;
  Ha.prototype.asc_getUrlType = Ha.prototype.MTd;
  Ha.prototype.asc_getSessionToken = Ha.prototype.zid;
  Ha.prototype.asc_setInterfaceDrawImagePlaceShape = Ha.prototype.IYe;
  Ha.prototype.asc_pluginsRegister = Ha.prototype.Gid;
  Ha.prototype.asc_pluginRun = Ha.prototype.eAb;
  Ha.prototype.asc_pluginResize = Ha.prototype.Pkc;
  Ha.prototype.asc_pluginButtonClick = Ha.prototype.Okc;
  Ha.prototype.asc_pluginEnableMouseEvents =
    Ha.prototype.QVe;
  Ha.prototype.asc_nativeInitBuilder = Ha.prototype.PVe;
  Ha.prototype.asc_SetSilentMode = Ha.prototype.PIc;
  Ha.prototype.asc_startEditCurrentOleObject = Ha.prototype.ejd;
  Ha.prototype.asc_InputClearKeyboardElement = Ha.prototype.HPe;
  Ha.prototype.asc_SpecialPaste = Ha.prototype.TPe;
  Ha.prototype.SetDrawImagePlaceContents = Ha.prototype.BMf;
  Ha.prototype.asc_AddContentControl = Ha.prototype.ufg;
  Ha.prototype.asc_RemoveContentControl = Ha.prototype.Nfg;
  Ha.prototype.asc_RemoveContentControlWrapper = Ha.prototype.Ofg;
  Ha.prototype.asc_SetContentControlProperties = Ha.prototype.jFg;
  Ha.prototype.asc_IsContentControl = Ha.prototype.TEg;
  Ha.prototype.asc_GetContentControlProperties = Ha.prototype.Jfg;
  Ha.prototype.asc_GetCurrentContentControl = Ha.prototype.Kfg;
  Ha.prototype.asc_UncheckContentControlButtons = Ha.prototype.sFg;
  Ha.prototype.asc_SetGlobalContentControlHighlightColor = Ha.prototype.lFg;
  Ha.prototype.asc_GetGlobalContentControlHighlightColor = Ha.prototype.CEg;
  Ha.prototype.asc_SetGlobalContentControlShowHighlight = Ha.prototype.mFg;
  Ha.prototype.asc_GetGlobalContentControlShowHighlight = Ha.prototype.DEg;
  Ha.prototype.asc_BeginViewModeInReview = Ha.prototype.cEg;
  Ha.prototype.asc_EndViewModeInReview = Ha.prototype.rEg;
  Ha.prototype.asc_ShowDocumentOutline = Ha.prototype.pFg;
  Ha.prototype.asc_HideDocumentOutline = Ha.prototype.REg;
  Ha.prototype.sync_OnDocumentOutlineUpdate = Ha.prototype.rFf;
  Ha.prototype.sync_OnDocumentOutlineCurrentPosition = Ha.prototype.ZNd;
  Ha.prototype.asc_AddTableOfContents = Ha.prototype.aEg;
  Ha.prototype.asc_RemoveTableOfContents =
    Ha.prototype.YEg;
  Ha.prototype.asc_GetTableOfContentsPr = Ha.prototype.NEg;
  Ha.prototype.asc_SetTableOfContentsPr = Ha.prototype.Pfg;
  Ha.prototype.asc_UpdateTableOfContents = Ha.prototype.uFg;
  Ha.prototype.asc_GetCurrentComplexField = Ha.prototype.yEg;
  Ha.prototype.asc_UpdateComplexField = Ha.prototype.tFg;
  Ha.prototype.asc_RemoveComplexField = Ha.prototype.Mfg;
  Ha.prototype.asc_SetComplexFieldPr = Ha.prototype.iFg;
  Ha.prototype.asc_AddTableFormula = Ha.prototype.$Dg;
  Ha.prototype.asc_GetTableFormula = Ha.prototype.LEg;
  Ha.prototype.asc_GetTableFormulaFormats =
    Ha.prototype.MEg;
  Ha.prototype.asc_ParseTableFormulaInstrLine = Ha.prototype.VEg;
  Ha.prototype.asc_CreateInstructionLine = Ha.prototype.lEg;
  Ha.prototype.asc_GetBookmarksManager = Ha.prototype.uEg;
  Ha.prototype.asc_GetHeadingLevel = Ha.prototype.EEg;
  Ha.prototype.asc_GetStylesArray = Ha.prototype.KEg;
  Ha.prototype.asc_SetAutomaticBulletedLists = Ha.prototype.eFg;
  Ha.prototype.asc_SetAutomaticNumberedLists = Ha.prototype.fFg;
  Ha.prototype.asc_SetAutoCorrectSmartQuotes = Ha.prototype.dFg;
  Ha.prototype.asc_SetAutoCorrectHyphensWithDash =
    Ha.prototype.cFg;
  Ha.prototype.asc_GetSelectedText = Ha.prototype.IEg;
  Ha.prototype.asc_AddBlankPage = Ha.prototype.WDg;
  Ha.prototype.sendEvent = Ha.prototype.Re;
  Ha.prototype.asc_GetDefaultTableStyles = Ha.prototype.RQf;
  Ha.prototype.asc_Remove = Ha.prototype.JPe;
  Ha.prototype.asc_OnHideContextMenu = Ha.prototype.THd;
  Ha.prototype.asc_OnShowContextMenu = Ha.prototype.Zhd;
  Ha.prototype.asc_addSignatureLine = Ha.prototype.hkc;
  Ha.prototype.asc_CallSignatureDblClickEvent = Ha.prototype.Whd;
  Ha.prototype.asc_getRequestSignatures =
    Ha.prototype.rUe;
  Ha.prototype.asc_AddSignatureLine2 = Ha.prototype.xPe;
  Ha.prototype.asc_MoveCursorToSignature = Ha.prototype.SHd;
  Ha.prototype.asc_Sign = Ha.prototype.SPe;
  Ha.prototype.asc_RequestSign = Ha.prototype.MPe;
  Ha.prototype.asc_ViewCertificate = Ha.prototype.WPe;
  Ha.prototype.asc_SelectCertificate = Ha.prototype.NPe;
  Ha.prototype.asc_GetDefaultCertificate = Ha.prototype.EPe;
  Ha.prototype.asc_getSignatures = Ha.prototype.KUe;
  Ha.prototype.asc_isSignaturesSupport = Ha.prototype.NVe;
  Ha.prototype.asc_isProtectionSupport =
    Ha.prototype.MVe;
  Ha.prototype.asc_RemoveSignature = Ha.prototype.LPe;
  Ha.prototype.asc_RemoveAllSignatures = Ha.prototype.KPe;
  Ha.prototype.asc_gotoSignature = Ha.prototype.JVe;
  Ha.prototype.asc_getSignatureSetup = Ha.prototype.JUe;
  Ha.prototype.asc_setCurrentPassword = Ha.prototype.kYe;
  Ha.prototype.asc_resetPassword = Ha.prototype.SXe;
  Eb.prototype.get_PageCount = Eb.prototype.UXf;
  Eb.prototype.put_PageCount = Eb.prototype.X1f;
  Eb.prototype.get_WordsCount = Eb.prototype.bYf;
  Eb.prototype.put_WordsCount = Eb.prototype.t2f;
  Eb.prototype.get_ParagraphCount =
    Eb.prototype.VXf;
  Eb.prototype.put_ParagraphCount = Eb.prototype.Y1f;
  Eb.prototype.get_SymbolsCount = Eb.prototype.ZXf;
  Eb.prototype.put_SymbolsCount = Eb.prototype.g2f;
  Eb.prototype.get_SymbolsWSCount = Eb.prototype.$Xf;
  Eb.prototype.put_SymbolsWSCount = Eb.prototype.h2f;
  zb.prototype.get_Type = zb.prototype.BO;
  zb.prototype.get_X = zb.prototype.Xxa;
  zb.prototype.get_Y = zb.prototype.Yxa;
  zb.prototype.get_PageNum = zb.prototype.LOg;
  zb.prototype.is_Header = zb.prototype.aQg;
  f.Asc.asc_CCommentDataWord = Va;
  Va.prototype.asc_getText =
    Va.prototype.Zha;
  Va.prototype.asc_putText = Va.prototype.R0b;
  Va.prototype.asc_getTime = Va.prototype.F4b;
  Va.prototype.asc_putTime = Va.prototype.I4b;
  Va.prototype.asc_getOnlyOfficeTime = Va.prototype.UNb;
  Va.prototype.asc_putOnlyOfficeTime = Va.prototype.elc;
  Va.prototype.asc_getUserId = Va.prototype.PFa;
  Va.prototype.asc_putUserId = Va.prototype.J4b;
  Va.prototype.asc_getProviderId = Va.prototype.vid;
  Va.prototype.asc_putProviderId = Va.prototype.NTd;
  Va.prototype.asc_getUserName = Va.prototype.Hxa;
  Va.prototype.asc_putUserName =
    Va.prototype.S0b;
  Va.prototype.asc_getInitials = Va.prototype.rRf;
  Va.prototype.asc_putInitials = Va.prototype.$Hg;
  Va.prototype.asc_getQuoteText = Va.prototype.C4b;
  Va.prototype.asc_putQuoteText = Va.prototype.XIc;
  Va.prototype.asc_getSolved = Va.prototype.dAb;
  Va.prototype.asc_putSolved = Va.prototype.H4b;
  Va.prototype.asc_getGuid = Va.prototype.s3a;
  Va.prototype.asc_putGuid = Va.prototype.$kc;
  Va.prototype.asc_getReply = Va.prototype.AOc;
  Va.prototype.asc_addReply = Va.prototype.x4b;
  Va.prototype.asc_getRepliesCount = Va.prototype.zOc;
  Va.prototype.asc_getDocumentFlag = Va.prototype.kib;
  Va.prototype.asc_putDocumentFlag = Va.prototype.G4b;
  AscCommon.o_g = function () {
    function e(e) {
      e = e.W4;
      if (e.lT && 65535 != e.lT.version) {
        var f = 0 != (e.lT.AJd & 128);
        f && e.height != e.lT.A6b - e.lT.gEc + e.lT.Bnf && (console.log('[' + e.N4 + '] typo'), console.log(e.z5 + ', ' + e.zZ + ', ' + e.height), console.log(e.lT.A6b + ', ' + e.lT.gEc + ', ' + (e.lT.A6b - e.lT.gEc + e.lT.Bnf)));
        f || e.height == e.lT.oOd + e.lT.pOd || (console.log('[' + e.N4 + '] win'), console.log(e.z5 + ', ' + e.zZ + ', ' + e.height), console.log(e.lT.oOd +
          ', ' + e.lT.pOd + ', ' + (e.lT.oOd + e.lT.pOd)));
      }
    }

    for (var f = 0, Da = 0, Ia = [], Ha = 0; Ha < AscFonts.XWa.length; Ha++) Ia.push(new AscFonts.Yva(AscFonts.XWa[Ha].Ha, 0, '', 0, null));
    console.log('start...');
    editor.kOa = function () {
      Da = setInterval(function () {
        if (f >= AscFonts.XWa.length) clearInterval(Da), console.log('end'); else {
          var Ia = AscFonts.XWa[f++];
          if (-1 != Ia.XA) {
            var Ha = AscCommon.LR.gQa[Ia.XA];
            Ha = AscCommon.lP.WG(Ha, Ia.cga, 12, !1, !1, !1, !1, !0);
            e(Ha, 'regular');
          }
          -1 != Ia.UA && (Ha = AscCommon.LR.gQa[Ia.UA], Ha = AscCommon.lP.WG(Ha, Ia.$fa, 12,
            !0, !1, !1, !1, !0), e(Ha, 'bold'));
          -1 != Ia.WA && (Ha = AscCommon.LR.gQa[Ia.WA], Ha = AscCommon.lP.WG(Ha, Ia.bga, 12, !1, !0, !1, !1, !0), e(Ha, 'italic'));
          -1 != Ia.VA && (Ha = AscCommon.LR.gQa[Ia.VA], Ha = AscCommon.lP.WG(Ha, Ia.aga, 12, !0, !0, !1, !1, !0), e(Ha, 'bold italic'));
        }
      }, 10);
    };
    AscCommon.LR.Ohb(Ia);
  };
  Ha.prototype.getAllOleObject = function () {
    for (var e = this.oQd().Document.oc.tV, f = [], Da = 0; Da < e.length; Da++) for (var Ia = e[Da].Wbb, Ha = 0; Ha < Ia.length; Ha++) 'asc.{edit-field-plugin}' === Ia[Ha].vV && f.push({
      id: Ia[Ha].Ja,
      data: Ia[Ha].M0
    });
    return JSON.stringify(f);
  };
})(window,
  window.document);
